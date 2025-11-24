# Arquitectura y QA de Seguridad – Plataforma Móvil de Formularios del Ingenio Santa Ana

## Descripción

Este repositorio reúne la arquitectura, scripts, configuraciones e instrumentos usados para diseñar, implementar y documentar las estrategias de **ciberseguridad**, **aseguramiento de calidad (QA)**, **funcionalidad** y **usabilidad** de la plataforma móvil de gestión administrativa de formularios del Ingenio Santa Ana.

Se incluyen evidencias del modelado de amenazas y controles de seguridad en el backend, el uso de herramientas de análisis de vulnerabilidades sobre la API, así como el diseño y la evaluación de pruebas de usabilidad (tareas moderadas y Escala de Usabilidad del Sistema, SUS). La mayor parte de estos resultados y procesos se ilustran en el video demostrativo ubicado en `demo/demo.mp4`.

## Tecnologías Utilizadas

- **Snyk (CLI, Web y Snyk API & Web)** – Análisis estático de dependencias, evaluación de vulnerabilidades de la API y métricas de seguridad, tanto mediante **workflows de GitHub Actions** como a través de la interfaz web.
- **GitHub Actions** – Pipelines de CI para ejecutar escaneos de seguridad y revisiones automáticas sobre el API.
- **Appium** – Código de pruebas automatizadas para validar flujos funcionales de la aplicación móvil (el código de pruebas se incluye como referencia).
- **System Usability Scale (SUS)** y encuestas moderadas – Evaluación estandarizada de usabilidad y aceptación de la aplicación por parte de usuarios finales.

## Requisitos Previos

Este repositorio está orientado principalmente a documentar el trabajo de ciberseguridad, QA y usabilidad.  
No es un entorno de ejecución completo de la aplicación, sino un fork con:

- Código de referencia (por ejemplo, pruebas Appium).
- Flujos de trabajo (workflows) de GitHub Actions para seguridad.
- Evidencias y documentación de análisis y evaluaciones.

Para reproducir o adaptar parte del trabajo pueden ser útiles:

- Cuenta en **GitHub** con acceso a GitHub Actions.
- Cuenta en **Snyk** para configurar proyectos y ver reportes.
- Entorno de desarrollo con **Node.js** y **npm** (para ejecutar scripts de CI/CD si se integran al proyecto principal).
- Entorno de pruebas móviles (Android SDK, Appium, etc.) **solo si se integra este código al repositorio de la app móvil original**.

## Instalación

1. **Clonar el repositorio (fork):**

   ```bash
   git clone https://github.com/emiliosolanoo21/PG-2025-21212.git
   cd PG-2025-21212
    ```
    **Clonar el repositorio (pull rquest aceptado):**

   ```bash
   git clone https://github.com/csuvg/PG-2025-21212.git
   cd PG-2025-21212
    ```

2. **Revisar workflows y configuraciones de seguridad:**

   * Explorar la carpeta `.github/workflows/` (si aplica) para ver cómo se integró **Snyk** en los pipelines de CI.
   * Verificar scripts y configuraciones usadas para evaluar vulnerabilidades del API.

3. **Revisar el código de pruebas Appium:**

   * Ubicar la carpeta correspondiente a pruebas móviles (por ejemplo `tests/appium` u otra ruta definida en el proyecto).
   * Para ejecutar estas pruebas es necesario:

     * Contar con el **repositorio completo de la app móvil**.
     * Ajustar las capacidades de Appium (capabilities) y rutas según el proyecto original.
   * En este fork, las pruebas se dejan como referencia de diseño y alcance del QA automatizado.

4. **Variables de entorno**

   * En este repositorio **no se requiere configurar variables de entorno adicionales** ni utilizar un archivo `.env.example`, ya que el foco está en la documentación y evidencias del trabajo de seguridad, QA y usabilidad, no en la ejecución de la API o del cliente móvil. A pesar de ello, el archivo cuenta con las variables de entorno utilizadas para las pruebas realizadas mediante la herramienta ZAP. Se aclara que solamente la variable `API_BASE_URL` se utilizó en el desarrollo de este apartado.

## Demo

El video demostrativo de los procesos y resultados de ciberseguridad, QA, funcionalidad y usabilidad se encuentra en:

```text
/demo/demo.mp4
```

En este video se pueden observar:

* Ejemplos de uso de **Snyk** (CLI, interfaz web y Snyk API & Web) sobre el API.
* Evidencias de los flujos de QA y pruebas funcionales.
* Resultados y hallazgos obtenidos durante el proyecto.

## Documentación

El informe final del proyecto, donde se detalla la arquitectura general, la metodología y los resultados de seguridad, QA y usabilidad, está disponible en:

```text
/docs/informe_final.pdf
```

## Autores

* **Emilio José Solano Orozco** – 21212

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
© 2025 Ingenio Santa Ana · Universidad del Valle de Guatemala

En caso de reutilizar o adaptar partes del trabajo, se recomienda coordinarlo con los responsables del proyecto original y con la universidad.
