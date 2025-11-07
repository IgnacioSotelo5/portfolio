---
title: "Galería de GIFs"
description: "Aplicación React simple para cargar y gestionar archivos GIF con una interfaz de galería responsiva. Construida con React, TypeScript y Tailwind CSS."
shortDescription: "App React para cargar y visualizar archivos GIF con interfaz responsiva"
tech: ["React", "TypeScript", "Vite", "Tailwind"]
repositories:
  - name: "Repositorio"
    url: "https://github.com/IgnacioSotelo5/gifs-gallery"
    type: "frontend"
featured: false
date: "2024-10-07"
image: "/images/projects/gifs-gallery/preview.webp"
category: "web"
status: "completado"
priority: 5
tags: ["react", "carga-archivos", "galería", "frontend"]
---

## Descripción General

Galería de GIFs es una aplicación React ligera diseñada para practicar el manejo de archivos y la gestión de estado. Los usuarios pueden cargar archivos GIF desde su computadora y visualizarlos en una interfaz de galería limpia y responsiva. El proyecto demuestra conceptos fundamentales de React incluyendo composición de componentes, gestión de estado y manejo de carga de archivos.

## Problema y Solución

**Desafío:** Aprender a manejar la carga de archivos y gestionar contenido dinámico en React mientras se mantiene una interfaz limpia y fácil de usar.

**Solución:** Una aplicación simple pero funcional que permite a los usuarios cargar archivos GIF y visualizarlos instantáneamente en una galería responsiva, proporcionando experiencia práctica con fundamentos de React y gestión de archivos.

## Características Principales

- **Carga de Archivos:** Carga archivos GIF directamente desde tu computadora
- **Vista de Galería:** Muestra los GIFs cargados en una galería limpia y organizada
- **Diseño Responsivo:** Interfaz adaptable a móviles construida con Tailwind CSS
- **Gestión de Estado:** Manejo eficiente del estado de React para la gestión de archivos
- **Seguridad de Tipos:** Construida con TypeScript para una mejor experiencia de desarrollo
- **Desarrollo Rápido:** Impulsada por Vite para compilaciones rápidas y recarga en caliente

## Arquitectura

**Frontend:** React, TypeScript, Vite, Tailwind CSS

**Estructura:**
- Arquitectura basada en componentes
- Gestión de estado local para archivos cargados
- Funcionalidad de validación y vista previa de archivos

## Tecnologías Utilizadas

- **React 18:** Para construir la interfaz de usuario
- **TypeScript:** Desarrollo con seguridad de tipos
- **Vite:** Herramienta de construcción rápida y servidor de desarrollo
- **Tailwind CSS:** Framework CSS utility-first para diseño responsivo

## Desafíos y Aprendizajes

- Implementar funcionalidad de carga de archivos en React
- Gestionar el estado para contenido dinámico (imágenes cargadas)
- Manejar validación y vista previa de archivos
- Crear layouts de galería responsivos con Tailwind CSS
- Trabajar con la API File del navegador

## Mejoras Futuras

- Agregar funcionalidad de arrastrar y soltar para cargar archivos
- Implementar función de eliminación de archivos
- Agregar soporte para múltiples formatos de archivo
- Incluir filtros o efectos de imagen
- Agregar persistencia en almacenamiento local
- Implementar opciones de búsqueda y filtrado

## Ejemplo: Lógica de Carga de Archivos

```tsx
// Ejemplo de lógica de manejo de archivos
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

## Ejecutar el Proyecto

```bash
# Clonar el repositorio
git clone https://github.com/IgnacioSotelo5/gifs-gallery.git

# Navegar al directorio del proyecto
cd gifs-gallery

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.