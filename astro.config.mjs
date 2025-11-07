import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


const shikiTheme = {
  "$schema": "vscode://schemas/color-theme",
  "name": "One Dark Pro Custom Dainty",
  "type": "dark",
  "colors": {
    "editor.background": "#0a0a0a",
    "editor.foreground": "#e0e2f0"
  },
  "tokenColors": [
    {
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "#5c6370",
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "keyword.control",
        "keyword.operator.new",
        "storage.type",
        "storage.modifier"
      ],
      "settings": {
        "foreground": "#c678dd" // Púrpura para keywords (static, async, const, try, catch, return, class)
      }
    },
    {
      "scope": ["keyword.operator.expression"],
      "settings": {
        "foreground": "#c678dd" // Púrpura para await
      }
    },
    {
      "scope": [
        "entity.name.function",
        "support.function"
      ],
      "settings": {
        "foreground": "#61afef" // Azul para funciones (createIngredient, json, status, next)
      }
    },
    {
      "scope": [
        "variable",
        "variable.other.readwrite",
        "variable.other.constant"
      ],
      "settings": {
        "foreground": "#e06c75" // Rojo para variables (ingredient, result, res, error)
      }
    },
    {
      "scope": ["variable.parameter"],
      "settings": {
        "foreground": "#e06c75" // Rojo para parámetros (req, res, next, error)
      }
    },
    {
      "scope": [
        "variable.other.property",
        "meta.object-literal.key",
        "support.type.property-name"
      ],
      "settings": {
        "foreground": "#e06c75" // Rojo para propiedades (name, userId, body, user, etc.)
      }
    },
    {
      "scope": ["string", "string.quoted"],
      "settings": {
        "foreground": "#98c379" // Verde para strings
      }
    },
    {
      "scope": [
        "constant.numeric",
        "constant.language.boolean",
        "constant.language.null",
        "constant.language.undefined"
      ],
      "settings": {
        "foreground": "#d19a66" // Naranja para números (201)
      }
    },
    {
      "scope": [
        "punctuation",
        "meta.brace",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.definition"
      ],
      "settings": {
        "foreground": "#abb2bf" // Gris claro para puntuación ({}, [], comillas)
      }
    },
    {
      "scope": [
        "entity.name.type",
        "support.class",
        "support.type",
        "entity.name.class"
      ],
      "settings": {
        "foreground": "#e5c07b" // Amarillo para tipos y clases (Promise, Request, Response, NextFunction, IngredientService, IngredientController)
      }
    },
    {
      "scope": ["constant.character.escape"],
      "settings": {
        "foreground": "#56b6c2" // Cyan para escapes
      }
    },
    {
      "scope": ["keyword.operator"],
      "settings": {
        "foreground": "#abb2bf" // Gris claro para operadores (=, :)
      }
    },
    {
      "scope": ["punctuation.accessor"],
      "settings": {
        "foreground": "#abb2bf" // Gris claro para puntos (.)
      }
    }
  ]
}


export default defineConfig({
  vite:{
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    }
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({context: 'server', access: 'secret'})
    }
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: shikiTheme,
      wrap: true
    }
  }
})