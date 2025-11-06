---
title: "GIFs Gallery"
description: "Simple React application for uploading and managing GIF files with a responsive gallery interface. Built with React, TypeScript, and Tailwind CSS."
shortDescription: "React app for uploading and viewing GIF files with responsive UI"
tech: ["React", "TypeScript", "Vite", "Tailwind"]
repositories:
  - name: "Repository"
    url: "https://github.com/IgnacioSotelo5/gifs-gallery"
    type: "frontend"
featured: false
date: "2024-10-07"
image: "/images/projects/gifs-gallery/preview.webp"
category: "web"
status: "completed"
priority: 5
tags: ["react", "file-upload", "gallery", "frontend"]
---

## Overview

GIFs Gallery is a lightweight React application designed to practice file handling and state management. Users can upload GIF files from their computer and view them in a clean, responsive gallery interface. The project demonstrates core React concepts including component composition, state management, and file upload handling.

## Problem & Solution

**Challenge:** Learning to handle file uploads and manage dynamic content in React while maintaining a clean, user-friendly interface.

**Solution:** A simple yet functional application that allows users to upload GIF files and instantly view them in a responsive gallery, providing hands-on experience with React fundamentals and file management.

## Key Features

- **File Upload:** Upload GIF files directly from your computer
- **Gallery View:** Display uploaded GIFs in a clean, organized gallery
- **Responsive Design:** Mobile-friendly interface built with Tailwind CSS
- **State Management:** Efficient React state handling for file management
- **Type Safety:** Built with TypeScript for better development experience
- **Fast Development:** Powered by Vite for quick builds and hot reload

## Architecture

**Frontend:** React, TypeScript, Vite, Tailwind CSS

**Structure:**
- Component-based architecture
- Local state management for uploaded files
- File validation and preview functionality

## Technologies Used

- **React 18:** For building the user interface
- **TypeScript:** Type-safe development
- **Vite:** Fast build tool and development server
- **Tailwind CSS:** Utility-first CSS framework for responsive design

## Challenges & Learnings

- Implementing file upload functionality in React
- Managing state for dynamic content (uploaded images)
- Handling file validation and preview
- Creating responsive gallery layouts with Tailwind CSS
- Working with browser File API

## Future Enhancements

- Add drag-and-drop upload functionality
- Implement file deletion feature
- Add support for multiple file formats
- Include image filters or effects
- Add local storage persistence
- Implement search and filtering options

## Example: File Upload Logic

```tsx
// Example of file handling logic
const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files) {
    const newGifs = Array.from(files).map(file => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setGifs(prevGifs => [...prevGifs, ...newGifs]);
  }
};
```

## Running the Project

```bash
# Clone the repository
git clone https://github.com/IgnacioSotelo5/gifs-gallery.git

# Navigate to project directory
cd gifs-gallery

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`.