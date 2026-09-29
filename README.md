# Notaría 103 del Estado de México — Export estático

Exportación del estado ACTUAL del sitio (8 páginas), lista para subir a WordPress (como HTML estático o plantilla), GitHub Pages u hosting propio.

## Confirmaciones clave

- **HTML ya renderizado**: sí. Cada archivo `.html` contiene el contenido final como texto real (headings, párrafos, preguntas del acordeón, tarjetas de servicio, formulario), no un `<div id="root">` vacío. No hay dependencia de un framework para pintar el contenido inicial.
- **Rutas relativas**: verificado — ningún HTML/CSS/JS usa `../` hacia `assets/`. Todas las rutas son del tipo `assets/images/archivo.jpg`, asumiendo que el HTML y la carpeta `assets/` quedan como hermanos en la misma carpeta raíz.
- **Imágenes/fuentes como archivos físicos**: sí, todas están dentro de `assets/`, no hay referencias al dominio/CDN de la plataforma original.
- **JS restante**: solo interactividad (menú móvil, acordeón FAQ, carrusel de galería, dropdown de "servicio de interés", popup de aviso, envío de formulario). No hay contenido que dependa de JavaScript para aparecer.

## Estructura de carpetas

```
export/
  index.html
  nosotros.html
  preguntas-frecuentes.html
  servicios-bienes-inmuebles.html
  servicios-credito-e-hipotecas.html
  servicios-empresarial.html
  servicios-familia.html
  servicios-representacion.html
  robots.txt
  sitemap.xml
  assets/
    css/styles.css       (estilos base + todas las media queries mobile/tablet/desktop)
    js/main.js            (toda la interactividad, vanilla JS sin dependencias)
    images/               (todas las imágenes en uso, nombres simplificados)
    fonts/futura-book.ttf
  README.md (este archivo)
```

Para GitHub Pages: sube el contenido de `export/` a la raíz del repositorio (o a `/docs`), asegurando que `index.html` y `assets/` queden en el mismo nivel — ya están así. Para WordPress: usa un plugin de "HTML estático" o un tema en blanco, y sube `assets/` completo al servidor junto con el HTML por página (o copia el contenido de cada `<body>` a una página de WordPress).

## Qué SÍ se incluyó

1. **Código base** — HTML de las 8 páginas con contenido real renderizado, hoja de estilos única con todas las media queries (mobile ≤767px, tablet 768–1024px, desktop), JavaScript propio (sin librerías de terceros).
2. **Multimedia** — todas las imágenes, iconos, logotipos y la tipografía Futura Book (.ttf) que están efectivamente en uso en el sitio. Favicon: no existe uno configurado en el sitio actual (ver "Qué NO existe").
3. **Elementos interactivos** — menú móvil con submenú de servicios, dropdown de "tipo de servicio" en el formulario de contacto (con la misma lista de opciones agrupadas), acordeón de preguntas frecuentes, carrusel de galería (flechas + puntos + swipe táctil), popup de aviso (una vez por sesión), formulario de contacto con validación HTML nativa.
4. **Navegación** — `sitemap.xml`, menú completo (desktop + móvil), enlaces internos entre las 8 páginas y externos (tel:, mailto:, Google Maps).
5. **SEO y metadatos** — `<title>` y `<meta description>` únicos por página, Open Graph y Twitter Cards, `robots.txt`, datos estructurados JSON-LD (`LegalService` en inicio, `FAQPage` en preguntas frecuentes), texto alternativo en todas las imágenes de contenido.
6. **Documentación de diseño** — paleta y tipografía documentadas abajo.

## Qué NO existe en este sitio (nada se perdió; simplemente no aplica)

- **Idiomas**: el sitio es monolingüe (español). No aplica la sección de `hreflang` / rutas por idioma / `404.html` de redirección.
- **Favicon**: no hay uno configurado en el sitio actual; puede agregarse fácilmente añadiendo `<link rel="icon">` y un archivo `.ico`/`.png`.
- **Video, audio**: no existen en el sitio.
- **Framework de build**: el sitio no se generó con React/Vite/Webpack con un paso de compilación propio — no hay `package.json` ni configuración de bundler que migrar.
- **Backend / endpoint del formulario**: el formulario de contacto NO tiene un endpoint configurado en el sitio original — es una demostración visual. Al enviarlo, este export muestra un aviso indicándolo. Deberá conectarlo a un servicio de correo/CRM (ej. Formspree, EmailJS, o el manejador de formularios de su nuevo hosting).
- **Integraciones (CRM, newsletter, pagos, chat)**: ninguna está configurada en el sitio.
- **Analítica / tracking** (Google Analytics, Meta Pixel, etc.): no hay ningún código de este tipo en el sitio actual.
- **Base de datos / CMS**: el sitio no usa un CMS con contenido dinámico; todo el contenido es estático y ya está incluido como texto en el HTML.
- **Configuración DNS / certificado SSL**: no es información que resida en el sitio; deberá gestionarse directamente con su proveedor de dominio/hosting al migrar.
- **Redirecciones / `.htaccess`**: no hay redirecciones configuradas en el sitio original.
- **Aviso de privacidad / política de cookies**: los enlaces del footer ("Aviso de privacidad", "Política de cookies") existen visualmente pero apuntan a `#` — el sitio original no tiene esas páginas de contenido redactadas todavía.

## Assets del proyecto que NO se incluyeron (por no estar en uso en el sitio)

Estos archivos existen en el proyecto de diseño pero no están referenciados por ninguna página actual, así que no se copiaron al ZIP: `hero-inicio.jpeg`, `icon-briefcase.png`, `icon-document.png`, `icon-idcard.png`, `icon-villa.png`, `icon-wallet.png`, `logo-dark.png`, `logo-light.png`, `Logo-Notaria-icon.png`, `nosotros-instalaciones.webp` (nombre de archivo del proyecto original; no confundir con `assets/images/nosotros-instalaciones.webp` del export, que es una copia de `_DSC0813.webp`, la imagen que sí se usa en la página Nosotros).

## Guía de estilo (para referencia)

- **Tipografías**: `Futura Book` (encabezados, botones — incluida como archivo .ttf) y `Roboto` (cuerpo de texto — cargada desde Google Fonts vía `<link>` en cada página; descárguela si necesita independencia total de Google Fonts).
- **Colores**: `#353535` (texto principal / negro suave), `#9797AA` (texto secundario / gris azulado), `#B49059` (acento dorado, usado en bordes de tarjetas de servicio), `#000` (fondo de formulario y footer), `#fff` (fondo base), `#F5F5F4` (fondo de tarjeta destacada).
- **Espaciado**: secciones con `padding: 80px 0` en desktop, `48px 0` en móvil (clase `.sec-pad`); contenedor centrado a `max-width: 1280px` (clase `.container`).
