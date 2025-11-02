---
title: "Commit Genius"
description: "Plataforma full-stack que genera mensajes de commit inteligentes y convencionales usando IA. Pega tu git diff y obtén 3 opciones profesionales de commit."
shortDescription: "Generador de mensajes de commit impulsado por IA"
tech: ["React", "Elysia", "Groq AI", "Bun", "Vite", "TypeScript", "Tailwind"]
featured: true
category: "web"
status: "completado"
date: "2025-08-21"
repositories:
  - name: "Frontend"
    url: "https://github.com/IgnacioSotelo5/commit-genius-frontend"
    type: "frontend"
  - name: "Backend"
    url: "https://github.com/IgnacioSotelo5/commit-genius-backend"
    type: "backend"
demo: "https://commit-genius-frontend.vercel.app/"
image: "/images/projects/commit-genius/preview.webp"
priority: 9
tags: ["ia", "herramientas-de-desarrollador", "productividad", "full-stack"]
---

## Descripción General

Commit Genius es una aplicación full-stack que ayuda a los desarrolladores a escribir mejores mensajes de commit. Al pegar un git diff, los usuarios reciben 3 sugerencias de commit generadas por IA siguiendo estándares de commits convencionales. La plataforma cuenta con una interfaz web moderna y responsiva, y un backend de alto rendimiento impulsado por Bun, Elysia y Groq AI.

## Problema y Solución

**Desafío:** Los desarrolladores suelen tener dificultades para escribir mensajes de commit claros y descriptivos, lo que lleva a registros genéricos y un historial de proyecto deficiente.

**Solución:** Commit Genius usa IA para analizar los cambios de código y generar 3 mensajes de commit profesionales y convencionales, ahorrando tiempo y mejorando la calidad del código.

## Características Principales

- **Generación de Commits con IA:** Pega tu git diff y obtén 3 sugerencias inteligentes de commit.
- **Formato de Commit Convencional:** Todos los mensajes siguen las mejores prácticas para tipos de commit y descripciones.
- **Interfaz Web Moderna:** Interfaz rápida y responsiva construida con React, Vite y Tailwind CSS.
- **API Backend:** API de alto rendimiento usando Bun, Elysia y Groq AI para análisis de código.
- **Copiar al Portapapeles:** Copia con un clic para cualquier mensaje de commit.
- **Compatible con Móviles:** Funciona perfectamente en escritorio y móvil.

## Arquitectura

**Frontend:** React, TypeScript, Vite, Tailwind CSS
**Backend:** Bun, Elysia, Groq AI

**Estructura:**
- Repositorios separados para frontend y backend
- Endpoint de API RESTful `/generate-commit` para generación de commits
- Frontend se conecta al backend para sugerencias de commit en tiempo real con IA

## Desafíos y Aprendizajes

- Integración de Groq AI para análisis de código y generación de commits
- Asegurar respuestas de API confiables y manejo de errores
- Construir una interfaz de usuario rápida y moderna para productividad de desarrolladores
- Desplegar y conectar frontend y backend en producción

## Mejoras Futuras

- Guardar historial de commits para usuarios
- Soporte para estilos de commit personalizados
- Integración de terminal
- Soporte para múltiples modelos de IA

## Ejemplo: Lógica de Generación de Commit con IA

```ts
// commit-genius-backend/src/index.ts
app.post("/generate-commit", async ({body}) => {  
	const {diff} = body  

	try {
		const groqResponse = await groq.chat.completions.create({
			model: 'openai/gpt-oss-120b',
			messages: [
				{
					role: 'user',
					content: `
					Analiza este diff y genera 3 commits descriptivos siguiendo conventional commits.
					El formato esperado en la respuesta es JSON y UNICAMENTE JSON, nada de texto extra.
					La estructura aceptada en el JSON es la siguiente:
					[{"title": "type(scope): descripción", "description": "descripcion detallada"}, ...]
					Cada commit debe tener título con el tipo de commit (feat, chore, fix, etc) y una descripcion detallada.
					Diff: ${diff}`
				}
			]
		})
    
		const commits = groqResponse.choices[0].message.content
    
		const parsedCommits = JSON.parse(commits || '[]')
		if(!Array.isArray(parsedCommits) || parsedCommits.length !== 3) {
			throw new Error('Invalid response format from AI.')
		}    

		return {commits: parsedCommits}
    
	} catch (error: any) {
		console.error('Groq API error:', error)
		return {error: 'Failed to generate commits'}
	}
  

}, {
	body: t.Object({
		diff: t.String()
	}),
	response: {
		200: t.Object({
			commits: t.Array(
				t.Object({
					title: t.String(),
					description: t.String()
				})
			)
		}),
		400: t.Object({
			error: t.String()
		})
	}  
})
```

