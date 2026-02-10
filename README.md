# engram.cloud

Sistema Cognitivo Artificial - Arquitectura Avanzada de Procesamiento Neural

## Descripción

ENGRAM es una plataforma de inteligencia artificial que integra arquitectura neural avanzada, 
memoria holográfica y capacidades de razonamiento abstracto en un sistema cognitivo unificado.

## Estructura del Sitio

Este repositorio contiene el sitio web estático de ENGRAM, construido con Jekyll y 
desplegado automáticamente en GitHub Pages.

### Tecnologías

- **Jekyll**: Generador de sitios estáticos
- **Sass**: Preprocesador CSS
- **GitHub Pages**: Hosting y despliegue continuo
- **GitHub Actions**: Automatización de builds

### Estructura de Archivos

```
.
├── _config.yml           # Configuración de Jekyll
├── _layouts/             # Templates HTML
│   └── default.html      # Layout principal
├── _sass/                # Estilos Sass
│   └── main.scss         # Estilos principales
├── assets/               # Recursos estáticos
│   ├── css/              # Hojas de estilo
│   ├── js/               # JavaScript
│   └── images/           # Imágenes
├── index.html            # Página principal
└── .github/workflows/    # GitHub Actions
    └── jekyll-gh-pages.yml
```

## Desarrollo Local

### Requisitos

- Ruby 2.7 o superior
- Bundler

### Instalación

```bash
# Instalar dependencias
bundle install

# Servidor de desarrollo
bundle exec jekyll serve

# Con live reload
bundle exec jekyll serve --livereload
```

El sitio estará disponible en `http://localhost:4000`

## Despliegue

El sitio se despliega automáticamente en GitHub Pages cuando se hace push a la rama `main`.

## Licencia

© 2026 ENGRAM Systems. Todos los derechos reservados.

