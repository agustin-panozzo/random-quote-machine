# Random Quote Machine

Esta aplicación React proporciona una experiencia interactiva para compartir frases. La aplicación consta de varios componentes que se combinan para crear una interfaz atractiva y fácil de usar.

## Componentes Principales

### 1. QuoteBlock

El componente `QuoteBlock` es el componente principal que organiza y muestra la información esencial. Este componente utiliza Redux para gestionar el estado, permitiendo cambios dinámicos en el color de fondo basados en el color almacenado en el store de Redux. Contiene subcomponentes como `TextBlock`, `IconsBlock`, `ButtonBlock`, y `Footer`.

### 2. TextBlock

El componente `TextBlock` maneja la visualización del texto principal o la cita. Incluye efectos de animación y reproduce un sonido al actualizarse. Recibe el color como prop para mantener un estilo consistente.

### 3. IconsBlock

El componente `IconsBlock` muestra íconos relevantes que permiten a los usuarios compartir la frase en diferentes plataformas sociales. También recibe el color como prop para adaptarse al estilo general.

### 4. ButtonBlock

El componente `ButtonBlock` contiene un botón que, al hacer clic, desencadena un cambio en la frase mostrada. Utiliza Redux para despachar la acción `changePhrase()`.

### 5. App

El componente `App` actúa como el componente principal de la aplicación, renderizando el `QuoteBlock` para mostrar la interfaz de usuario principal.

## Configuración de Redux

La gestión del estado se realiza con Redux. Aquí están los archivos relacionados:

### 1. slice.js

`slice.js` define el slice de Redux llamado `phrase` que contiene la información de la frase actual y la lógica para cambiarla.

### 2. store.js

`store.js` configura la store de Redux utilizando el reducer de `phrase`.

*Nota: Es posible compartir la frase a través de X (ex twitter) clickeando en el icono de X
