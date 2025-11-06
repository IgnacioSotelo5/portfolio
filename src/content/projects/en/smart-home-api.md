---
title: "Smart Home Control API"
description: "RESTful API for managing smart home automation scenarios and IoT devices. Built with NestJS, featuring CRUD operations, validation, and Swagger documentation."
shortDescription: "NestJS API for smart home automation and device management"
tech: ["NestJS", "TypeScript", "Node.js", "Swagger"]
repositories:
  - name: "Repository"
    url: "https://github.com/IgnacioSotelo5/backend-tp"
    type: "backend"
featured: false
date: "2024-07-01"
image: "/images/projects/smart-home-api/preview.webp"
category: "api"
status: "completed"
priority: 6
tags: ["api", "nestjs", "iot", "smart-home", "backend", "rest"]
---

## Overview

Smart Home Control API is a RESTful backend service for managing home automation scenarios and IoT devices. Built with NestJS, it provides a robust API for creating, updating, and organizing smart home scenarios with their associated devices. The API features comprehensive CRUD operations, data validation, file-based storage, and interactive Swagger documentation.

## Problem & Solution

**Challenge:** Managing smart home scenarios and devices requires a flexible, scalable backend that can handle complex relationships between scenarios and multiple device types while ensuring data integrity.

**Solution:** A well-structured NestJS API with modular architecture, comprehensive validation, and easy-to-use endpoints for managing home automation scenarios and their associated smart devices.

## Key Features

- **CRUD Operations:** Complete create, read, update, and delete functionality for scenarios and devices
- **Advanced Search:** Query parameters for filtering and searching scenarios
- **Data Validation:** Comprehensive validation for all entities and operations
- **File-Based Storage:** Persistent data storage using Node.js file system
- **API Documentation:** Interactive Swagger UI for testing and exploring endpoints
- **Modular Architecture:** Clean, maintainable code structure following NestJS best practices
- **TypeScript:** Full type safety throughout the application

## Architecture

**Backend:** NestJS, TypeScript, Node.js (fs module)

**Structure:**
- Controllers for handling HTTP requests
- Services for business logic
- DTOs for data validation
- Models for entity definitions
- File-based persistence layer

## API Endpoints

### Scenarios
- `GET /escenarios` — Retrieve all scenarios with optional filters
- `GET /escenarios/:id` — Get a specific scenario by ID
- `POST /escenarios` — Create a new automation scenario
- `PATCH /escenarios/:id` — Update an existing scenario
- `DELETE /escenarios/:id` — Remove a scenario

### Interactive Documentation
Swagger UI available at: `http://localhost:3000/api`

## Example Scenario Structure

```json
{
  "name": "Living Room Evening",
  "description": "Dim lights and play relaxing music",
  "devices": [
    {
      "id": "uuid-device-1",
      "name": "Smart Lamp",
      "type": "light",
      "status": true,
      "settings": {
        "brightness": 50,
        "color": "warm-white"
      }
    },
    {
      "id": "uuid-device-2",
      "name": "Smart Speaker",
      "type": "audio",
      "status": true,
      "settings": {
        "volume": 30,
        "playlist": "evening-chill"
      }
    }
  ]
}
```

## Technologies Used

- **NestJS:** Progressive Node.js framework for building efficient server-side applications
- **TypeScript:** Type-safe development
- **Node.js fs:** File-based data persistence
- **Swagger/OpenAPI:** Automated API documentation
- **Class Validator:** DTO validation

## Challenges & Learnings

- Designing a flexible schema for diverse IoT device types
- Implementing file-based persistence without a database
- Building comprehensive data validation
- Creating maintainable modular architecture with NestJS
- Generating interactive API documentation with Swagger

## Future Enhancements

- **Authentication:** Add JWT-based user authentication and authorization
- **Database Integration:** Migrate from file storage to PostgreSQL or MongoDB
- **Real-time Updates:** WebSocket support for live device status
- **Testing:** Implement unit and integration tests
- **Device Templates:** Pre-configured device types and scenarios
- **Scheduling:** Time-based scenario automation
- **External Integrations:** Connect with real IoT platforms (Google Home, Alexa, etc.)

## Example: Scenario Controller Logic

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

## Running the Project

```bash
# Clone the repository
git clone https://github.com/IgnacioSotelo5/backend-tp.git

# Navigate to project directory
cd backend-tp

# Install dependencies
npm install

# Start development server
npm run start:dev
```

The API will be available at `http://localhost:3000`
Swagger documentation at `http://localhost:3000/api`