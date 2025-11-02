---
title: "Gestión de Inventario para Panadería"
description: "Solución full-stack para gestión de inventario y negocio de panadería, incluyendo un backend robusto y una aplicación móvil moderna."
shortDescription: "Solución full-stack para gestión de inventario y negocio de panadería, incluyendo un backend robusto y una aplicación móvil moderna."
tech: ["React Native", "Expo", "Express", "MongoDB", "Prisma", "Zustand", "Tailwind", "TypeScript"]
featured: true
date: "2025-05-26"
repositories:
  - name: "Backend"
    url: "https://github.com/IgnacioSotelo5/management-express"
    type: "backend"
  - name: "Aplicación Móvil"
    url: "https://github.com/IgnacioSotelo5/management-react-native"
    type: "mobile"
image: "/images/projects/inventory-management/preview.png"
category: "mobile"
status: "en progreso"
priority: 10
tags: ["inventario", "gestión", "móvil", "backend"]
---

## Descripción General

Gestión de Inventario para Panadería es un proyecto full-stack diseñado para optimizar las operaciones de un negocio de panadería. Combina un backend seguro y modular con una aplicación móvil multiplataforma, permitiendo una gestión eficiente de ingredientes, proveedores, categorías y ubicaciones de panaderías.

## Problema y Solución

**Desafío:** Las pequeñas empresas suelen tener dificultades con el seguimiento de inventario, la gestión de proveedores y el acceso a datos en tiempo real, especialmente cuando dependen de procesos manuales o software obsoleto.

**Solución:** Este proyecto proporciona una plataforma moderna y escalable con una API RESTful y una aplicación móvil fácil de usar, permitiendo al personal de la panadería gestionar inventario, proveedores y categorías desde cualquier lugar, con autenticación robusta y validación de datos.

## Características Principales

- **Backend Modular:** Construido con Express y TypeScript, con rutas para ingredientes, proveedores, categorías, panaderías y autenticación de usuarios.
- **Autenticación Segura:** Inicio de sesión basado en JWT y rutas protegidas para operaciones sensibles.
- **Validación de Datos:** Esquemas Zod y middleware para manejo seguro y confiable de datos.
- **Aplicación Móvil:** Aplicación React Native + Expo con interfaz moderna, navegación y sincronización de datos en tiempo real.
- **Gestión de Estado:** Usa Zustand para un estado predecible en la aplicación móvil.
- **Diseño Responsivo:** Tailwind CSS para interfaces rápidas y adaptables.
- **Integración:** Comunicación fluida entre backend y aplicación móvil a través de API REST.

## Arquitectura

**Backend:**
- Express.js, TypeScript, Prisma ORM, MongoDB
- Estructura de rutas modular (ingredientes, proveedores, categorías, panaderías, auth)
- Middlewares para validación, manejo de errores, CORS y seguridad

**Aplicación Móvil:**
- React Native, Expo, Zustand, Tailwind CSS
- Navegación, formularios e integración API para gestión de inventario

## Ejemplo: Lógica de Creación de Ingrediente

```ts
// management-express/src/modules/ingredients/ingredient.controller.ts
static async createIngredient(req: Request, res: Response, next: NextFunction): Promise<void>{
	const {name, pricePerUnit, unit, totalUnit, categoryId, supplierId, expirationDate, stockQuantity, reorderLevel} = req.body
	const {id: userId} = req.user
	const ingredient = {
		name,
		pricePerUnit, 
		unit, 
		totalUnit, 
		categoryId, 
		supplierId, 
		expirationDate, 
		stockQuantity, 
		reorderLevel
	}
	try {
		const result = await IngredientService.createIngredient({
			ingredient,
			userId
		})
		res.status(201).json(result)
	} catch (error: any) {            
		next(error)
	}
	return 
}
```

