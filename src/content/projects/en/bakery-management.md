---
title: "Bakery Inventory Management"
description: "Full-stack solution for bakery inventory and business management, including a robust backend and a modern mobile app."
shortDescription: "Full-stack solution for bakery inventory and business management, including a robust backend and a modern mobile app."
tech: ["React Native", "Expo", "Express", "MongoDB", "Prisma", "Zustand", "Tailwind", "TypeScript"]
featured: true
date: "2025-05-26"
repositories:
  - name: "Backend"
    url: "https://github.com/IgnacioSotelo5/management-express"
    type: "backend"
  - name: "Mobile App"
    url: "https://github.com/IgnacioSotelo5/management-react-native"
    type: "mobile"
image: "/images/projects/inventory-management/preview.png"
category: "mobile"
status: "in-progress"
priority: 10
tags: ["inventory", "management", "mobile", "backend"]
---

## Overview

Bakery Inventory Management is a full-stack project designed to streamline the operations of a bakery business. It combines a secure, modular backend with a cross-platform mobile application, enabling efficient management of ingredients, suppliers, categories, and bakery locations.

## Problem & Solution

**Challenge:** Small businesses often struggle with inventory tracking, supplier management, and real-time data access, especially when relying on manual processes or outdated software.

**Solution:** This project provides a modern, scalable platform with a RESTful API and a user-friendly mobile app, allowing bakery staff to manage inventory, suppliers, and categories from anywhere, with robust authentication and data validation.

## Key Features

- **Modular Backend:** Built with Express and TypeScript, featuring routes for ingredients, suppliers, categories, bakeries, and user authentication.
- **Secure Authentication:** JWT-based login and protected routes for sensitive operations.
- **Data Validation:** Zod schemas and middleware for safe, reliable data handling.
- **Mobile App:** React Native + Expo app with modern UI, navigation, and real-time data sync.
- **State Management:** Uses Zustand for predictable state in the mobile app.
- **Responsive Design:** Tailwind CSS for fast, adaptive interfaces.
- **Integration:** Seamless communication between backend and mobile app via REST API.

## Architecture

**Backend:**
- Express.js, TypeScript, Prisma ORM, MongoDB
- Modular route structure (ingredients, suppliers, categories, bakeries, auth)
- Middlewares for validation, error handling, CORS, and security

**Mobile App:**
- React Native, Expo, Zustand, Tailwind CSS
- Navigation, forms, and API integration for inventory management

## Example: Ingredient Creation Logic

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