# Blog roadmap

Cadencia ~1 post cada 2 semanas. Datar = programar: un post con `pubDate` futura
queda oculto hasta un build/deploy en o después de esa fecha (filtro
`pubDate <= new Date()` en las queries de la colección). Para que un post
programado salga, hay que **rebuild + `make deploy`** en/después de su fecha
(sitio estático: no se republica solo; opción: un deploy por cron).

| Fecha | Estado | Slug | Ángulo |
|---|---|---|---|
| 2026-06-18 | ✅ live | `finance-tracker-serverless` | Dedup atómica S3→Lambda→DynamoDB, 0 €/mes |
| 2026-06-20 | ✅ live | `api-gateway-29s` | Vectorización NumPy dentro del timeout de 29s |
| 2026-07-04 | ✍️ escrito · programado | `fastapi-to-go-migration` | **Estrella.** 1000 exámenes simultáneos, FastAPI→Go. *(faltan métricas reales — ver TODO en el .md)* |
| 2026-07-18 | 📝 por escribir | `bedrock-inference-profiles-eu` | Inference profiles en Bedrock y el prefijo `eu.` — dolor universal al llamar desde Europa. SEO alto, corto. |
| 2026-08-01 | 📝 por escribir | `s3-vectors-vs-opensearch-rag` | S3 Vectors vs OpenSearch Serverless para RAG: el floor de ~345 $/mes. Análisis de coste. |
| 2026-08-15 | 📝 por escribir | `ci-cd-aws-oidc-no-keys` | CI/CD a AWS con OIDC, sin claves de larga vida. Patrón defensivo, SEO alto. |
| 2026-08-29 | 📝 por escribir | `por-que-no-migre-postgres` | Por qué NO migré Moodle/WP a PostgreSQL. "A veces la decisión correcta es no tocar nada." |
| 2026-09-12 | 📝 por escribir | `go-coalescing-async` | Coalescing de cálculos async: recálculo de percentiles coalescido por examen. Patrón Go. |
| 2026-09-26 | 📝 por escribir | `go-streaming-excel` | Import de Excel por streaming, sin cargar en RAM. Útil para ficheros grandes. |
| 2026-10-10 | 📝 por escribir | `go-1-26-simd` | SIMD en Go 1.26. Ya atrajo audiencia (cofounder GraphHopper). Posible serie. |
| 2026-10-24 | 📝 por escribir | `rectangulos-antes-de-ocr` | Leer la respuesta correcta de un examen sin OCR: detección de rectángulos vectoriales. "Determinismo primero" al extremo. |

## Reglas

- **Sin sistemas de cliente.** Nada de barreras de seguridad, esquemas de auth,
  nombres de env, endpoints ni código de protección de producción ajena. (Por eso
  se retiraron HLS/CloudFront, híbrido CF-AWS y edge-CMS.)
- **Cliente en neutro:** "un pico de carga", "una plataforma con la que colaboro";
  nunca "su plataforma fallaba".
- **Número concreto + resultado medible** en cada post de decisión.
- Crear post = carpeta `src/content/blog/<slug>/{es,en}.md` con frontmatter
  (`title, description, pubDate, lang, tags`). Diagrama: `<pre class="mermaid">…</pre>`.
