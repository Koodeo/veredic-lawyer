# Veredic - Asesoría Legal Estratégica

Este es el repositorio para el sitio web de Veredic, desarrollado por Koodeo Studio.

---

## Cómo Actualizar el Contenido del Sitio Web

La principal ventaja de este proyecto es que **todo el contenido del sitio se gestiona desde un único archivo de configuración**, sin necesidad de tocar el código de los componentes.

**Archivo de Configuración Principal:** `lib/config.ts`

Para actualizar cualquier texto, imagen o dato en el sitio, simplemente edite este archivo.

### Pasos para la Actualización:

1.  **Abra el archivo `lib/config.ts`** en su editor de código.
2.  **Busque la sección** que desea modificar (ej: `hero`, `services`, `team`, `contact`, etc.).
3.  **Edite el texto o los datos** directamente dentro de las comillas.
4.  **Guarde el archivo**. Los cambios se reflejarán automáticamente en el sitio web si se está ejecutando en modo de desarrollo.

---

## Instrucciones para Desarrolladores

Si necesita ejecutar el proyecto localmente para desarrollo, siga estos pasos.

### 1. Instalación de Dependencias

Este proyecto utiliza `npm` como gestor de paquetes. Para instalar todas las dependencias necesarias, ejecute el siguiente comando en la terminal, desde la raíz del proyecto:

```bash
npm install
```

### 2. Iniciar el Servidor de Desarrollo

Una vez instaladas las dependencias, puede iniciar el servidor de desarrollo local con el siguiente comando:

```bash
npm run dev
```

Esto iniciará el sitio web en [http://localhost:3000](http://localhost:3000). Cualquier cambio que guarde en los archivos del proyecto se reflejará automáticamente en su navegador.

---

Desarrollado con los más altos estándares por **Koodeo Studio**.
