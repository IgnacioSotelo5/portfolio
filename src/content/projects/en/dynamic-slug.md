---
title: "Dynamic Slug Link Shortener"
description: "Monorepo link shortener with QR code support, analytics, and user authentication. Built with NestJS, React, and MySQL."
shortDescription: "Monorepo link shortener with QR code support, analytics, and user authentication. Built with NestJS, React, and MySQL."
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
status: "completed"
priority: 8
tags: ["link-shortener", "qr-code", "analytics", "authentication", "monorepo", "nestjs", "react", "mysql", "tailwindcss"]
---

## Overview

Dynamic Slug is a full-featured link shortener platform with QR code generation, analytics, and user authentication. Built as a monorepo, it combines a robust NestJS backend with a modern React frontend and MySQL database. Users can create short links, generate QR codes, and track visits with detailed analytics.

## Problem & Solution

**Challenge:** Managing and sharing links efficiently, with analytics and QR code support, is essential for modern web applications. Most URL shorteners lack advanced features or require paid plans for analytics and customization.

**Solution:** Dynamic Slug provides a free, open-source solution with custom short links, real-time analytics, QR code generation, and secure user authentication.

## Key Features

- **Custom Short Links:** Create and manage personalized short URLs.
- **Analytics Dashboard:** Track clicks, devices, and access methods with interactive charts.
- **QR Code Generation:** Instantly generate and download QR codes for any link.
- **User Authentication:** Secure registration and login with JWT.
- **Modern UI:** Built with React and Tailwind CSS for a fast, responsive experience.
- **RESTful API:** Backend powered by NestJS and MySQL for scalability and reliability.

## Architecture

**Frontend:** React, TypeScript, Vite, Tailwind CSS, Chart.js
**Backend:** NestJS, TypeScript, TypeORM, MySQL, bcrypt

**Structure:**
- Monorepo with separate `ui` (frontend) and `backend` folders
- RESTful API for all link, analytics, and QR code operations
- Dashboard for link management and analytics

## Challenges & Learnings

- Managing authentication and user sessions
- Building a scalable monorepo structure
- Building real-time analytics and QR code features from scratch
- Connecting React and NestJS for seamless data flow

## Future Enhancements

- Custom domains for short links
- Cloud deployment for public access
- Bulk link management
- Advanced analytics (geolocation, device breakdown)
- Team collaboration features


## Example: Link & QR Code Creation Logic

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