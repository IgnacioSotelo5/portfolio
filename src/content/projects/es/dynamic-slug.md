---
title: "Dynamic Slug - Acortador de Enlaces"
description: "Acortador de enlaces con soporte para códigos QR, análisis y autenticación de usuarios. Construido con NestJS, React y MySQL."
shortDescription: "Acortador de enlaces con soporte para códigos QR, análisis y autenticación de usuarios. Construido con NestJS, React y MySQL."
tech: ["React", "TypeScript", "NestJS", "MySQL", "Chart.js", "Tailwind"]
repositories:
  - name: "Monorepo"
    url: "https://github.com/IgnacioSotelo5/dynamic-slug"
    type: "fullstack"
  - name: "Frontend"
    url: "https://github.com/IgnacioSotelo5/dynamic-slug/tree/main/ui"
    type: "frontend"
  - name: "Backend"
    url: "https://github.com/IgnacioSotelo5/dynamic-slug/tree/main/backend"
    type: "backend"
featured: true
date: "2024-05-10"
image: "/images/projects/dynamic-slug/preview.webp"
category: "web"
status: "completado"
priority: 8
tags: ["acortador-enlaces", "codigo-qr", "analiticas", "autenticacion", "monorepo", "nestjs", "react", "mysql", "tailwindcss"]
---

## Descripción General

Dynamic Slug es una plataforma completa de acortador de enlaces con generación de códigos QR, análisis y autenticación de usuarios. Construido como un monorepo, combina un backend robusto de NestJS con un frontend moderno de React y base de datos MySQL. Los usuarios pueden crear enlaces cortos, generar códigos QR y rastrear visitas con análisis detallados.

## Problema y Solución

**Desafío:** Gestionar y compartir enlaces eficientemente, con análisis y soporte para códigos QR, es esencial para aplicaciones web modernas. La mayoría de los acortadores de URL carecen de características avanzadas o requieren planes de pago para análisis y personalización.

**Solución:** Dynamic Slug proporciona una solución gratuita y de código abierto con enlaces cortos personalizados, análisis en tiempo real, generación de códigos QR y autenticación segura de usuarios.

## Características Principales

- **Enlaces Cortos Personalizados:** Crea y gestiona URLs cortas personalizadas.
- **Panel de Análisis:** Rastrea clics, dispositivos y métodos de acceso con gráficos interactivos.
- **Generación de Códigos QR:** Genera y descarga códigos QR instantáneamente para cualquier enlace.
- **Autenticación de Usuarios:** Registro e inicio de sesión seguros con JWT.
- **Interfaz Moderna:** Construida con React y Tailwind CSS para una experiencia rápida y responsiva.
- **API RESTful:** Backend impulsado por NestJS y MySQL para escalabilidad y confiabilidad.

## Arquitectura

**Frontend:** React, TypeScript, Vite, Tailwind CSS, Chart.js
**Backend:** NestJS, TypeScript, TypeORM, MySQL, bcrypt

**Estructura:**
- Monorepo con carpetas separadas `ui` (frontend) y `backend`
- API RESTful para todas las operaciones de enlaces, análisis y códigos QR
- Panel de control para gestión de enlaces y análisis

## Desafíos y Aprendizajes

- Gestionar autenticación y sesiones de usuario
- Construir una estructura de monorepo escalable
- Construir análisis en tiempo real y características de códigos QR desde cero
- Conectar React y NestJS para un flujo de datos fluido

## Mejoras Futuras

- Dominios personalizados para enlaces cortos
- Despliegue en la nube para acceso público
- Gestión masiva de enlaces
- Análisis avanzados (geolocalización, desglose de dispositivos)
- Características de colaboración en equipo

## Ejemplo: Lógica de Creación de Enlace y Código QR

```ts
// dynamic-slug/backend/src/links/links.controller.ts
@Post()
async create(@Body() createLinkDto: CreateLinkDto, @Req() req) {
	const user_id = req.user.id
	const {generateQRCode} = createLinkDto
	try {
		const newLink = await this.linksService.create(createLinkDto, user_id);
		const {domain, customShortUrl, shortUrl} = newLink
		if(generateQRCode){
			const QRCodeDTO: CreateQrCodeDto = {
				...createLinkDto,
				redirectionUrl: `${domain}/${customShortUrl || shortUrl}`
			}
			const newQRCode = await this.qrCodeService.createQRCodeFile(QRCodeDTO, newLink.id)

			this.linksRepository.merge(newLink, {qrCode: newQRCode})
      
			return await this.linksRepository.save(newLink)
		}
		return newLink
    
	} catch (error) {
		throw new BadRequestException('Error creando el enlace o el código QR. ', error.message);
	}
}
```

