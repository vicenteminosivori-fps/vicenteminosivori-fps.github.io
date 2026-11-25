# Portafolio — Vicente Miño Sívori

Sitio estático (HTML + CSS + JS puro). Sin build, sin dependencias.

## Estructura
```
/
├─ index.html
├─ README.md
├─ css/styles.css
├─ js/main.js
└─ img/01.webp … 12.webp   (una por página del PDF)
```

## Imágenes
- Nombres exactos: `01.webp` a `12.webp`, en la carpeta `img/` (ya vienen incluidas).
- Si prefieres `.jpg`: renombra los archivos y cambia `IMG_EXT = 'jpg'` al inicio de `js/main.js`.
- Si cambias las imágenes por otras de distinta proporción (hoy 16:10, 1920×1200), actualiza `width`/`height` en `index.html`.

## Publicar en GitHub Pages
1. Crea un repositorio en github.com (ej. `portafolio`), público.
2. Sube **el contenido** de esta carpeta (que `index.html` quede en la raíz del repositorio): botón *Add file → Upload files*, arrastra todo y *Commit changes*.
3. Ve a *Settings → Pages*. En *Build and deployment* elige *Deploy from a branch*, rama `main`, carpeta `/ (root)` y *Save*.
4. Espera 1–2 minutos. Tu sitio quedará en `https://TU-USUARIO.github.io/portafolio/`.
   (Si el repositorio se llama `TU-USUARIO.github.io`, la URL será `https://TU-USUARIO.github.io/`.)
5. En `index.html`, reemplaza en `og:image` `TU-USUARIO` y `TU-REPO` por los tuyos, para que se vea la vista previa al compartir el enlace.

## Ajustar las zonas de enlace
En `css/styles.css`, al final, hay tres reglas con valores en % relativos a la imagen:
```
.hit--cv-mail  → correo en el CV (img/02)
.hit--mail     → correo en el footer (img/12)
.hit--behance  → Behance en el footer (img/12)
```
`--t` = distancia desde arriba, `--l` = desde la izquierda, `--w` = ancho, `--h` = alto.
Truco para verlas: añade temporalmente `background: rgba(255,0,0,.3);` a `.hit`.
