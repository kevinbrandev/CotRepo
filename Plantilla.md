COTIZACIÓN DE SERVICIOS DE DESARROLLO WEB
Cliente: Advalis
Proveedor: Kevin Bran | 3016666049 | Brand-147@hotmail.com
Fecha: 25/09/2025
Validez: 15 días
Integración del asistente de IA (OpenAI)
• Cuenta y proyecto: El cliente crea su cuenta en OpenAI y configura una recarga mínima. Desde
su dashboard generará una API Key propia.
• Seguridad de la clave: Por política y buenas prácticas, no llamamos OpenAI desde el frontend ni
exponemos la API Key en el navegador (aunque esté en variables de entorno de HubSpot). Esto
evita robo de claves, uso indebido y cargos inesperados.
• Enrutamiento seguro (backend mínimo): Implementaremos un endpoint serverless que vive
junto al sitio:
o Opción 1: HubSpot Functions (si el plan lo permite).
o Opción 2 (recomendada por simplicidad y costo): Vercel/Cloudflare Worker/Google
Cloud Run con dominio propio.
o Este endpoint recibe las solicitudes del chat, inyecta la API Key de forma segura
(variables de entorno del servidor), aplica rate-limit, CORS y logging sin PII, y reenvía a
OpenAI.
• Flujo de trabajo: Frontend → Endpoint seguro → OpenAI → Endpoint → Frontend.
• Propiedad de la cuenta: La cuenta de OpenAI es del cliente. Nosotros no almacenamos claves
del cliente; las cargamos en el entorno del endpoint seguro.
Repositorio, builds y despliegue
• Repositorio Git privado (GitHub/GitLab/Bitbucket) con CI/CD.
• Build del frontend (Next.js/React) y despliegue en HubSpot (plantillas/módulos) para el sitio.
• El endpoint (HubSpot Functions o Vercel/Worker) se despliega con sus propias variables de
entorno.
• Sin servidor tradicional: es un “backend mínimo” serverless administrado, sin máquinas que
mantener.
Por qué no llamar OpenAI directo desde el front
• El navegador siempre expone la API Key (aunque la pongas en “env” del build).
• Riesgos: filtración de la clave, abuso de la cuenta, bloqueos y cargos inesperados.
• Con el endpoint serverless logramos: seguridad, control de cuotas, registro de errores y futuras
mejoras (RAG, filtros, moderación).
Plazo siguiendo el Figma
Asumiendo que el Figma ya está cerrado (sin rediseños grandes) y que el alcance es: Home, Services,
Why Us, Case Studies, Blog, Contact, barra de búsqueda funcional y asistente IA con endpoint serverless
+ despliegue en HubSpot.
Duración estimada: 5 a 7 semanas.
Desglose:
1. Kickoff, lectura de Figma y arquitectura – 3 a 4 días
2. Maquetación responsive (mobile & desktop) + componentes – 1.5 a 2 semanas
3. Integración CMS/HubSpot (módulos, blog, casos, SEO técnico) – 1 semana
4. Búsqueda (indexación de contenidos + UI de autosuggest/facets si aplica) – 4 a 6 días
5. Asistente de IA
o Endpoint serverless con seguridad (rate-limit, CORS, logs) – 3 a 5 días
o UI del chat + pruebas end-to-end – 2 a 4 días
6. QA integral, accesibilidad, performance, correcciones – 4 a 6 días
7. Go-live, monitoreo inicial y handover – 2 a 3 días
Si el cliente requiere iteraciones de diseño o se agregan páginas/estados adicionales y testeo post
producción se sumarán +1 a +2 semanas.
DETALLE DE LA COTIZACIÓN
DESCRIPCIÓN PRECIO UNITARIO
Kickoff, lectura de Figma y arquitectura $1.200.000
Maquetación responsive (mobile & desktop) $3.200.000
Integración CMS/HubSpot (módulos, blog, SEO
técnico)
$2.000.000
Búsqueda avanzada (indexación de contenidos +
autosuggest/facets)

$2.400.000
Asistente de IA (endpoint serverless seguro + UI de
chat + pruebas e2e)
$3.200.000
QA integral, performance y
accesibilidad

$1.400.000
Go-live, monitoreo inicial y
handover

$600.000

Total: $ 14.000.000
FORMA DE PAGO
40% anticipo a la firma: COP $5.600.000
40% contra entrega de la versión staging: COP $5.600.000
20% al go-live del proyecto: COP $2.800.000
OBSERVACIONES:
• El plazo estimado de desarrollo es de 5 a 7 semanas, sujeto a la entrega oportuna
de insumos (textos, imágenes, accesos).
• Esta cotización incluye 2 rondas de cambios de diseño sobre el Figma aprobado.
• Soporte post-go-live de 14 días para corrección de bugs menores.
• No incluye costos de licencias de terceros (OpenAI, HubSpot, Algolia u otros SaaS).
Atentamente,
_____________________________
Kevin Bran
Ingeniero de Software
Desarrollador Full Stack