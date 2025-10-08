---
title: "Commit Genius"
description: "Full-stack platform that generates smart, conventional commit messages using AI. Paste your git diff and get 3 professional commit options."
tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Elysia", "Groq AI", "Bun"]
featured: true
date: "2025-08-21"
github: "https://github.com/IgnacioSotelo5/commit-genius-frontend"
demo: "https://commit-genius-frontend.vercel.app/"
image: "/images/projects/commit-genius/preview.webp"
---

# Commit Genius

## Overview

Commit Genius is a full-stack application that helps developers write better commit messages. By pasting a git diff, users receive 3 AI-generated commit suggestions following conventional commit standards. The platform features a modern, responsive web interface and a high-performance backend powered by Bun, Elysia, and Groq AI.

## Problem & Solution

**Challenge:** Developers often struggle to write clear, descriptive commit messages, leading to generic logs and poor project history.

**Solution:** Commit Genius uses AI to analyze code changes and generate 3 professional, conventional commit messages, saving time and improving code quality.

## Key Features

- **AI-Powered Commit Generation:** Paste your git diff and get 3 smart commit suggestions.
- **Conventional Commit Format:** All messages follow best practices for commit types and descriptions.
- **Modern Web UI:** Fast, responsive interface built with React, Vite, and Tailwind CSS.
- **Backend API:** High-performance API using Bun, Elysia, and Groq AI for code analysis.
- **Copy to Clipboard:** One-click copy for any commit message.
- **Mobile Friendly:** Works seamlessly on desktop and mobile.

## Architecture

**Frontend:** React, TypeScript, Vite, Tailwind CSS
**Backend:** Bun, Elysia, Groq AI

**Structure:**
- Separate repositories for frontend and backend
- RESTful API endpoint `/generate-commit` for commit generation
- Frontend connects to backend for real-time AI commit suggestions

## Challenges & Learnings

- Integrating Groq AI for code analysis and commit generation
- Ensuring reliable API responses and error handling
- Building a fast, modern UI for developer productivity
- Deploying and connecting frontend and backend in production

## Future Enhancements

- Save commit history for users
- Support for custom commit styles
- Terminal integration
- Multiple AI model support

## Example: AI Commit Generation Logic

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