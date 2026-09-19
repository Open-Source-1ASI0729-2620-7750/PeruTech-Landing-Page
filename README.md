# Preciazo Landing Page

Primera versión desplegable de la landing page de Preciazo, construida a partir del mockup de referencia para presentar la propuesta de valor y las funcionalidades principales por rol.

Equipo desarrollador: PeruTech.

## Stack

- HTML5 semántico
- CSS3 con variables de diseño y media queries
- JavaScript ES6+ sin frameworks
- Bootstrap Icons vía CDN para iconografía consistente

No incluye backend, API, autenticación, persistencia ni lógica comercial real.

## Estructura

```text
PeruTech-LandingPage/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── icons/
│   ├── images/
│   └── logo/
├── README.md
└── .gitignore
```

## Ejecución local

Desde la raíz del proyecto:

```bash
python -m http.server 8080
```

Luego abre `http://localhost:8080` en el navegador. También puedes abrir `index.html` directamente para una revisión rápida, aunque un servidor local ofrece una experiencia más cercana a producción.

## Convenciones

- Nombres de clases, archivos y variables en inglés.
- Contenido visible y textos de producto en español.
- Sin estilos inline.
- Cambios agrupados en commits pequeños con Conventional Commits.
- No se agregan dependencias de frontend ni lógica de negocio simulada.

## GitHub Pages

La página está preparada para publicarse como sitio estático desde la raíz de la rama `main`. Cuando exista el repositorio remoto:

1. Sube la rama `main` al repositorio de GitHub.
2. Ve a `Settings > Pages`.
3. Selecciona `Deploy from a branch`, rama `main` y carpeta `/ (root)`.
4. Guarda y espera la publicación automática.

Estado actual: repositorio local preparado; no se ha configurado un remoto ni se ha publicado todavía.
