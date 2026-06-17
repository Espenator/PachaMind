# Página de inicio — Construcción asistida por IA (Flow A)

> Versión en español de `homepage-ai-build.md`. Las cadenas de la interfaz se conservan tal como aparecen en el diseño.

## Resumen
La página de inicio de PachaMind se generó en Figma usando el complemento UX Pilot AI UI Generator y luego se concilió con el canon de diseño de Flow A. El marco vive en la página **Mobile Screens** como `Home (AI generated)`.

- Tamaño del marco: **390 x 2490** (mobile-first, una sola columna de 390px)
- Rellenos: superficie `#F7F1E7` (pergamino cálido), tarjeta `#FFFFFF`
- Cumple el CANON BLOQUEADO: solo membresía de aprendizaje gratuita — sin precios, moneda, pago, mejora de plan, donaciones ni reservas.

## Mapa de secciones (de arriba a abajo)
1. **Encabezado** — logotipo PachaMind + menú hamburguesa.
2. **Hero** — título "Discover the wisdom of the Andes.", texto de apoyo, CTA principal "Start Learning Free" y la línea de apoyo "Create free PachaMind learning membership".
3. **Tarjeta de lección destacada** — miniatura de video con botón de reproducción, etiqueta "The Concept of Ayni: Sacred Reciprocity".
4. **¿Por qué explorar este camino?** — tres tarjetas de beneficios: Earth Connection, Cosmic Harmony, Ancestral Wisdom.
5. **Latest Lessons** — encabezado de sección con "View all"; filas de lecciones: Weaving the Cosmos, The Chakana, K'intu & Offering; CTA secundario "Browse All Topics".
6. **Pie de página** — descripción de marca, columnas de enlaces Explore + Platform, iconos sociales, línea de derechos de autor.

## Verificación de cumplimiento del canon
- [x] Sin referencias a precios ni moneda en ninguna parte.
- [x] Sin interfaz de pago / mejora de plan / donación / reserva.
- [x] Los CTA usan el lenguaje aprobado de membresía gratuita ("Start Learning Free", "Create free PachaMind learning membership").
- [x] Marco mobile-first de 390px.

## Tokens utilizados
Los colores se asignan al archivo central `tokens.css` (de forma aditiva). Los rellenos de superficie y de tarjeta hacen referencia a la paleta pergamino/blanco ya definida para Flow A. No se introdujeron nuevos archivos de tokens.

## Próximos pasos
- [x] PNG del marco exportado y confirmado en `docs/design/assets/Home (AI generated).png` (PR #31).
- Entregar el mapa de secciones a implementación (`docs/design/implementation-map.md`).
