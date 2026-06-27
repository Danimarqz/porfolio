# Rediseño del portfolio — danimarqz.dev

## Contexto y objetivo

Este repo es actualmente un fork de `midudev/porfolio.dev` (Astro + TypeScript). Quiero **rediseñarlo por completo con identidad propia**, eliminando cualquier parecido con la plantilla original. El objetivo es un portfolio técnico que proyecte seniority como backend & cloud engineer especializado en AWS serverless y agentes IA.

No es un retoque: es un rediseño de cero del front, manteniendo Astro como framework y la infraestructura existente.

## Stack y restricciones

- **Framework:** Astro (mantener). Build **estático**, desplegado en **Cloudflare Pages**.
- **i18n:** el sitio es **bilingüe ES/EN** y ya tiene una ruta basada en idioma. Mantener esa estructura. Todo el contenido nuevo debe existir en ambos idiomas.
- **Estilos:** Tailwind ya está en el proyecto. Puedes usarlo, pero el diseño manda sobre los defaults de la plantilla.
- **Sin dependencias pesadas innecesarias.** Las animaciones se hacen con JS vanilla / CSS / SVG nativo. Nada de librerías de animación grandes.
- **Rendimiento primero:** es un sitio estático, debe cargar rápido. Las animaciones no deben bloquear el render ni penalizar Lighthouse.

## Dirección visual

Estética: **oscuro, minimalista, técnico, con toque terminal**. Negro azulado profundo con acentos cian y verde. Animaciones sutiles y con propósito — nada de "todo moviéndose a la vez".

### Paleta (hex exactos)

```
Fondo página         #0a0e16
Superficie terminal   #070b12  (cuerpo)  /  #0d131d  (barra superior)
Bordes                #1f2733  (default)  /  #2a3343  (sutil)
Texto primario        #f4f8fd  /  #e6edf6
Texto secundario      #aab6c7
Texto atenuado        #7d8ba1  /  #5a6678
Acento cian           #38bdf8  (principal)  /  #58a6ff
Acento verde          #34d399  (secundario)
```

Colores de marca para el grafo de stack:
```
Go         #00ADD8
Python     #ffd343
AWS        #ff9900
Lambda     #ff9900
DynamoDB   #4d72e0
Bedrock    #34d399
Textract   #34d399
Docker     #2496ed
```

### Tipografía

- **Monoespaciada** para acentos de terminal, etiquetas de comando (`$ whoami`), tags de stack y metadatos.
- **Sans limpia** para cuerpo y títulos.
- Pesos: solo regular (400) y medium (500). Nada de 600/700.
- **Sentence case** en todo. Nunca Title Case ni MAYÚSCULAS.

### Fondo global

Un canvas de **copos de nieve sutiles** detrás de todo el contenido, densidad baja (≈ 1 copo por cada 20px de ancho), opacidad ~0.4, movimiento lento con leve deriva horizontal. Debe ser discreto, casi imperceptible — ambiente, no protagonista. `pointer-events: none`, z-index detrás del contenido. Pausar o reducir si el usuario tiene `prefers-reduced-motion`.

## Estructura de secciones (en orden)

### 1. Hero — terminal interactiva

Una terminal estilizada (barra superior con los tres círculos rojo/amarillo/verde y el título `dani@danimarqz: ~`). Al cargar la página, **teclea sola** el comando `whoami --full` (efecto typing, ~70ms por carácter con ligera variación), y tras una breve pausa despliega la salida línea a línea con un fade-in escalonado:

```
name    Daniel Márquez
role    Backend & Cloud Engineer
focus   AWS serverless · agentes IA en producción
stack   Go · Python · Bedrock · Lambda · DynamoDB
loc     Ourense, Galicia · remoto
```

- El label (name/role/focus...) en atenuado, el valor con su color (name blanco, role cian, focus verde, resto secundario).
- Cursor `▋` parpadeante al final.
- Encima de la terminal, un indicador `● disponible para proyectos` (punto verde + texto mono atenuado).
- **Móvil:** cuidar que el texto no desborde; reducir tamaño de fuente y permitir wrap. La animación debe verse bien en viewport estrecho (~380px).
- Respetar `prefers-reduced-motion`: si está activo, mostrar el output directamente sin typing.

### 2. Experiencia — timeline vertical

Línea vertical a la izquierda con una **línea de progreso en degradado cian→verde que se rellena al hacer scroll** (o al entrar en viewport). Cada hito es un punto en la línea + bloque de texto. Orden: más reciente arriba.

Encabezado de sección: `$ cat experiencia.log` en mono cian.

Hitos (textos **fieles** a LinkedIn; versión ES abajo, EN = texto original de LinkedIn):

**Full&Fast** — punto cian
`feb. 2026 — actualidad`
Backend Developer
- ES: «Desarrollo de un motor de cálculo serverless en AWS para el sector de energías renovables, cubriendo todo el ciclo de entrega: modelado de datos, cálculo numérico con Python y NumPy, e infraestructura como código con AWS SAM.»
- EN: "Developing a serverless computation engine on AWS for the renewable energy sector, working across the full delivery cycle: data modeling, numerical computation with Python and NumPy, and infrastructure as code with AWS SAM."

**OpositaTCAE** — punto verde, etiqueta de fecha en verde
`2024 — actualidad · en paralelo`
Freelance · plataforma EdTech
- ES: «Plataforma completa de preparación de oposiciones sanitarias: backend en Go, simulador de exámenes, agentes IA con Bedrock, streaming HLS protegido y plugins propios de Moodle.»
- EN: usar el texto largo de LinkedIn (la descripción completa del proyecto EdTech). Si es demasiado largo para la timeline, mostrar un resumen de 2 frases y enlazar al detalle del proyecto / post del blog.

**Saecdata** — punto atenuado. Mostrar la **progresión Trainee → Junior** dentro de la misma entrada (es una promoción, conviene que se vea).
`sept. 2024 — feb. 2026 · 1 año 6 meses`
Trainee → Junior Software Developer
- EN (Junior): "Developed and maintained Odoo modules using Python, JavaScript, PostgreSQL, and JasperReports. Built custom business logic, views, and reports to meet client requirements, and optimized PostgreSQL queries to improve performance on data-heavy operations. Introduced a self-hosted CI/CD pipeline with Gitea and containerized the codebase with Docker, shipping it as a single versioned image rather than loose module folders to make builds reproducible and deployments to production reliable."
- ES: traducción fiel del anterior.

**BiG Formación** — punto atenuado
`ago. 2020 — sept. 2024 · 4 años 2 meses`
Consultor TIC · Software Developer
- EN: "Maintained Moodle mobile apps with Ionic, Android Studio, and Xcode. Deployed and managed Moodle platforms on AWS. Automated routine tasks with Python."
- ES: traducción fiel.
- (Nota: he quitado deliberadamente la mención a "AI" del original porque era vaga y no aporta. No la reintroduzcas.)

### 3. Mi stack — grafo de nodos

Sección propia, **debajo** de experiencia. Encabezado `$ stack --graph` + subtítulo «Mi stack. Pasa el ratón sobre un nodo para resaltar sus conexiones.»

Un SVG con nodos (círculos) conectados por aristas. Cada nodo es una tecnología con su color de marca, late suavemente (animación `r` con SVG `<animate>`, duración escalonada por nodo). Al hacer **hover sobre un nodo**: aparece un halo del color del nodo, se engrosa su borde, y **sus aristas se iluminan con su color** mientras el resto de aristas se atenúan.

Nodos y conexiones (referencia, ajusta posiciones para que respire):
```
go ↔ aws, lambda, dynamo
python ↔ lambda, aws, dynamo
aws ↔ lambda, bedrock, docker
lambda ↔ dynamo, bedrock
bedrock ↔ textract
```
- **Móvil:** el grafo debe reescalar (viewBox responsive). En táctil no hay hover — al **tocar** un nodo, activar el mismo resaltado (toggle).
- Respetar `prefers-reduced-motion`: desactivar el latido.

### 4. Proyectos — cards

Grid responsive de cards (`minmax(240px, 1fr)`). Cada card: icono representativo, badge de estado (`producción` en verde / `self-hosted` en atenuado), título, descripción de 1-2 frases con el framing de problema/solución, y línea mono con el stack. Hover sutil: borde cian + ligera elevación. Cada card enlaza a su página de detalle o a su post del blog cuando exista.

Proyectos (con este framing, no descripciones genéricas):

- **Motor V27** · producción · icono rayo
  «Motor de dimensionado solar/BESS con cálculo vectorizado en NumPy dentro del timeout de API Gateway.»
  `Python · Lambda · NumPy · SAM`

- **Agentes IA · OpositaTCAE** · producción · icono robot
  «Pipelines serverless PDF→Excel con Bedrock + Textract. Determinismo primero, IA solo donde aporta — cero alucinaciones en los datos.»
  `Bedrock · Textract · Graviton · SAM`

- **finance-tracker** · producción · icono cartera
  «Pipeline serverless Go con DynamoDB y CI/CD vía OIDC. App Flutter. Coste mensual en céntimos.»
  `Go · DynamoDB · Cloudflare`

- **daniserver + Hermes** · self-hosted · icono servidor
  «Home server con agente IA local en Telegram para gestión de infra. Ollama, Docker, Cloudflare Tunnel.»
  `Docker · Ollama · Qwen3`

(Deja la estructura preparada para añadir más proyectos fácilmente — idealmente proyectos como una colección de datos/content, no hardcodeados en el markup.)

### 5. Blog — Astro Content Collections

Añadir un **blog** integrado en el portfolio usando **content collections** de Astro:
- Colección `blog` en `src/content/blog/`, posts en Markdown/MDX.
- Soporte i18n coherente con el resto del sitio (posts en ES y EN; estructura a tu criterio: subcarpetas por idioma o frontmatter `lang`).
- Página índice del blog (listado de posts con título, fecha, resumen, tags).
- Ruta dinámica `[slug]` para el detalle del post, con estilos de tipografía cuidados para lectura larga (bloques de código con resaltado, imágenes, etc.).
- Frontmatter por post: `title`, `description`, `pubDate`, `tags`, `lang`, `heroImage` (opcional).
- **No migrar** los posts antiguos del subdominio `consultoria.danimarqz.dev` (eran de temática Moodle genérica y no representan el perfil actual). El blog arranca limpio.

Deja preparada la integración para que publicar un post sea: crear un `.md` → push → deploy automático.

## Detalles técnicos transversales

- **Accesibilidad:** todo el texto legible en oscuro, contraste suficiente. SVG con `role="img"` y `<title>`/`<desc>`. Iconos decorativos con `aria-hidden`. Respetar `prefers-reduced-motion` en todas las animaciones (snow, typing, latido de nodos, relleno de timeline).
- **Responsive:** móvil first donde tenga sentido. Probar especialmente el hero terminal y el grafo en ~380px.
- **SEO:** meta tags por página e idioma, Open Graph, sitemap. Es un sitio estático, aprovéchalo para SEO orgánico (los posts del blog son el activo a largo plazo).
- **Performance:** las animaciones JS deben arrancar tras el contenido. El canvas de nieve no debe causar layout shift. Lighthouse en verde.

## Qué NO hacer

- No conservar restос visuales reconocibles de la plantilla de midudev.
- No usar Title Case ni mayúsculas decorativas.
- No saturar de animaciones: snow sutil + typing del hero + relleno de timeline + latido de nodos es el límite. Nada más se mueve.
- No meter una foto en el hero (la decisión es terminal, no retrato).
- No usar localStorage/sessionStorage.

## Entregable

Implementa el rediseño completo en el repo, idioma por idioma, con el blog funcionando. Mantén el código de componentes Astro organizado y los datos de experiencia/proyectos en archivos de datos o content collections (no hardcodeados en el markup) para que sea fácil de mantener.