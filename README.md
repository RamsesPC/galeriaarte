# Proyecto Galería de Arte

## Descripción del Proyecto

Este proyecto es una galería de arte construida con Next.js y TypeScript. Permite a los usuarios ver obras de arte y la biografía de los artistas. El proyecto está estructurado para ser fácil de mantener y escalar.

## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
  - `app/`: Contiene los archivos de las páginas.
    - `dashboard/`: Contiene la página del dashboard.
      - `page.tsx`: Componente principal de la página del dashboard.
  - `components/`: Contiene los componentes reutilizables del proyecto.
    - `FormArtista.tsx`: Componente del formulario para agregar artistas.
- `public/`: Contiene los archivos estáticos.
- `styles/`: Contiene los archivos de estilos globales.
- `__tests__/`: Contiene los archivos de pruebas.

## Prototipos de la Vista y Manual de Uso

### Dashboard

El dashboard muestra una lista de artistas con su biografía y obras de arte.

#### Uso del Dashboard

1. Al acceder a la página del dashboard, se carga automáticamente una lista de artistas.
2. Cada artista muestra su nombre, biografía y obras de arte.

### FormArtista

El formulario permite agregar nuevos artistas a la galería.

#### Uso del FormArtista

1. Completa los campos del formulario con el nombre del artista, biografía y obras.
2. Haz clic en el botón "Enviar" para agregar el artista a la galería.

## Instrucciones de Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Instalación

1. Clona el repositorio:

```sh
git clone https://github.com/RamsesPC/galeriaarte.git

2. Navega al directorio del proyecto:

```sh 
cd proyecto-galeria-arte

3. Instala las dependencias:

```sh 
npm install

### Ejecucion en desarrollo

1. Inicia el servidor de desarrollo:

```sh 
npm run dev


