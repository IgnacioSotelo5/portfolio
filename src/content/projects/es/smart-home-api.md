---
title: "API de Control de Hogar Inteligente"
description: "API RESTful para gestionar escenarios de automatización del hogar y dispositivos IoT. Construida con NestJS, incluye operaciones CRUD, validación y documentación Swagger."
shortDescription: "API NestJS para automatización del hogar y gestión de dispositivos"
tech: ["NestJS", "TypeScript", "Node.js", "Swagger"]
repositories:
  - name: "Repositorio"
    url: "https://github.com/IgnacioSotelo5/backend-tp"
    type: "backend"
featured: false
date: "2024-07-01"
image: "/images/projects/smart-home-api/preview.webp"
category: "api"
status: "completed"
priority: 6
tags: ["api", "nestjs", "iot", "hogar-inteligente", "backend", "rest"]
---

## Descripción General

API de Control de Hogar Inteligente es un servicio backend RESTful para gestionar escenarios de automatización del hogar y dispositivos IoT. Construida con NestJS, proporciona una API robusta para crear, actualizar y organizar escenarios de hogar inteligente con sus dispositivos asociados. La API cuenta con operaciones CRUD completas, validación de datos, almacenamiento basado en archivos y documentación interactiva con Swagger.

## Problema y Solución

**Desafío:** Gestionar escenarios de hogar inteligente y dispositivos requiere un backend flexible y escalable que pueda manejar relaciones complejas entre escenarios y múltiples tipos de dispositivos mientras asegura la integridad de los datos.

**Solución:** Una API NestJS bien estructurada con arquitectura modular, validación completa y endpoints fáciles de usar para gestionar escenarios de automatización del hogar y sus dispositivos inteligentes asociados.

## Características Principales

- **Operaciones CRUD:** Funcionalidad completa de crear, leer, actualizar y eliminar para escenarios y dispositivos
- **Búsqueda Avanzada:** Parámetros de consulta para filtrar y buscar escenarios
- **Validación de Datos:** Validación integral para todas las entidades y operaciones
- **Almacenamiento en Archivos:** Almacenamiento persistente de datos usando el sistema de archivos de Node.js
- **Documentación de API:** Interfaz Swagger interactiva para probar y explorar endpoints
- **Arquitectura Modular:** Estructura de código limpia y mantenible siguiendo las mejores prácticas de NestJS
- **TypeScript:** Seguridad de tipos completa en toda la aplicación

## Arquitectura

**Backend:** NestJS, TypeScript, Node.js (módulo fs)

**Estructura:**
- Controladores para manejar peticiones HTTP
- Servicios para lógica de negocio
- DTOs para validación de datos
- Modelos para definiciones de entidades
- Capa de persistencia basada en archivos

## Endpoints de la API

### Escenarios
- `GET /escenarios` — Obtener todos los escenarios con filtros opcionales
- `GET /escenarios/:id` — Obtener un escenario específico por ID
- `POST /escenarios` — Crear un nuevo escenario de automatización
- `PATCH /escenarios/:id` — Actualizar un escenario existente
- `DELETE /escenarios/:id` — Eliminar un escenario

### Documentación Interactiva
Interfaz Swagger disponible en: `http://localhost:3000/api`

## Estructura de Ejemplo de Escenario

```json
{
  "name": "Sala de Estar Nocturno",
  "description": "Atenuar luces y reproducir música relajante",
  "devices": [
    {
      "id": "uuid-device-1",
      "name": "Lámpara Inteligente",
      "type": "light",
      "status": true,
      "settings": {
        "brightness": 50,
        "color": "blanco-cálido"
      }
    },
    {
      "id": "uuid-device-2",
      "name": "Altavoz Inteligente",
      "type": "audio",
      "status": true,
      "settings": {
        "volume": 30,
        "playlist": "música-nocturna"
      }
    }
  ]
}
```

## Tecnologías Utilizadas

- **NestJS:** Framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes
- **TypeScript:** Desarrollo con seguridad de tipos
- **Node.js fs:** Persistencia de datos basada en archivos
- **Swagger/OpenAPI:** Documentación automática de API
- **Class Validator:** Validación de DTOs

## Desafíos y Aprendizajes

- Diseñar un esquema flexible para diversos tipos de dispositivos IoT
- Implementar persistencia basada en archivos sin base de datos
- Construir validación integral de datos
- Crear arquitectura modular y mantenible con NestJS
- Generar documentación interactiva de API con Swagger

## Mejoras Futuras

- **Autenticación:** Agregar autenticación y autorización basada en JWT
- **Integración de Base de Datos:** Migrar del almacenamiento en archivos a PostgreSQL o MongoDB
- **Actualizaciones en Tiempo Real:** Soporte WebSocket para estado de dispositivos en vivo
- **Testing:** Implementar pruebas unitarias y de integración
- **Plantillas de Dispositivos:** Tipos de dispositivos y escenarios preconfigurados
- **Programación:** Automatización de escenarios basada en tiempo
- **Integraciones Externas:** Conectar con plataformas IoT reales (Google Home, Alexa, etc.)

## Ejemplo: Lógica del Controlador de Escenarios

```ts
// backend-tp/src/controllers/scenarios.controller.ts
@Controller('escenarios')
export class ScenariosController {
  constructor(private readonly scenariosService: ScenariosService) {}

  @Get()
  async findAll(@Query() query: any) {
    return this.scenariosService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.scenariosService.findOne(id);
  }

  @Post()
  async create(@Body() createScenarioDto: CreateScenarioDto) {
    return this.scenariosService.create(createScenarioDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateScenarioDto: UpdateScenarioDto
  ) {
    return this.scenariosService.update(id, updateScenarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.scenariosService.remove(id);
  }
}
```

## Ejecutar el Proyecto

```bash
# Clonar el repositorio
git clone https://github.com/IgnacioSotelo5/backend-tp.git

# Navegar al directorio del proyecto
cd backend-tp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run start:dev
```

La API estará disponible en `http://localhost:3000`
Documentación Swagger en `http://localhost:3000/api`