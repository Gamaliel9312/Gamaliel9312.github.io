# Portafolio Personal - Desarrollador Web Junior

Este es un portafolio web profesional diseñado para mostrar proyectos y habilidades de desarrollo. El sitio está construido con HTML, CSS y JavaScript vanilla, enfocándose en un diseño moderno y responsive.

## 🚀 Características

- Diseño moderno y responsive
- Animaciones suaves y transiciones
- Sección de proyectos con tarjetas interactivas
- Integración con redes sociales
- Efectos visuales y patrones geométricos
- Optimizado para rendimiento

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript (ES6+)
- Font Awesome para iconos
- Google Fonts (Poppins)

## 📦 Estructura del Proyecto

```
portfolio/
├── index.html          # Estructura principal del sitio
├── styles.css         # Estilos y animaciones
├── index.js          # Funcionalidad interactiva
├── README.md        # Documentación
└── assets/         # Imágenes y recursos
```

## 🚀 Instalación y Uso

1. Clona el repositorio:
```bash
git clone [URL-del-repositorio]
```

2. Navega al directorio del proyecto:
```bash
cd portfolio
```

3. Personaliza el contenido:
   - Actualiza la información personal en `index.html`
   - Modifica los colores en las variables CSS de `styles.css`
   - Ajusta las animaciones en `index.js`

4. Abre `index.html` en tu navegador o usa un servidor local:
```bash
npx serve
```

## 📝 Personalización

### Modificar Colores
Los colores principales se pueden modificar en las variables CSS:
```css
:root {
    --primary: #2563eb;
    --secondary: #4f46e5;
    --accent: #06b6d4;
    --dark: #1e293b;
    --light: #f8fafc;
}
```

### Añadir Proyectos
Para añadir un nuevo proyecto, copia y pega el siguiente código en la sección `projects`:
```html
<div class="project-card">
    <div class="project-img">
        <img src="ruta-a-tu-imagen" alt="Descripción del Proyecto">
    </div>
    <div class="project-content">
        <h3>Título del Proyecto</h3>
        <p>Descripción del proyecto...</p>
        <div class="skills">
            <span class="skill-tag">Tecnología 1</span>
            <span class="skill-tag">Tecnología 2</span>
        </div>
    </div>
</div>
```

## 🔧 Mantenimiento

- Actualiza regularmente las imágenes de los proyectos
- Mantén actualizada la sección de habilidades
- Revisa y actualiza los enlaces de contacto
- Optimiza las imágenes para mejor rendimiento

## 📱 Compatibilidad

El sitio es compatible con:
- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)
- Dispositivos móviles y tablets

## 🤝 Contribuir

Si encuentras algún bug o tienes sugerencias de mejora:
1. Crea un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles
