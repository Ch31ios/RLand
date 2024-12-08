# Guía de Instalación del Proyecto

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** - [Descargar Node.js](https://nodejs.org/en/download/prebuilt-installer) - v22.10.0 (LTS)
- **npm** - Incluido con Node.js
- **pnpm** - Después de instalar Node.js, abre tu terminal como administrador y ejecuta el siguiente comando:

```bash
npm install -g pnpm
```

Para confirmar que tienes las herramientas instaladas, ejecuta los siguientes comandos en tu terminal:

```bash
node -v
npm -v
pnpm -v
```

### Pasos para Clonar y Configurar el Proyecto

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Ch31ios/RLand.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd RLand
   ```

3. Instala las dependencias en la carpeta front-end:

   ```bash
   cd front-end
   pnpm install
   ```

4. Inicia el front-end con el siguiente comando:

   ```bash
   pnpm start
   ```

Después de seguir estos pasos, el proyecto estará configurado y listo para ejecutarse localmente.
