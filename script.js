
const semanas = [
  {
    id: 'sem1',
    titulo: 'Semana 1',
  temas: ['HTML Básico', 'HTML Avanzado'],
    descripcion: `Comenzamos con los fundamentos de HTML incluyendo la estructura de un documento, etiquetas de texto, imágenes y enlaces. Luego avanzamos hacia prácticas más complejas: formularios accesibles, tablas semánticas y técnicas para estructurar contenido que facilite la indexación y la accesibilidad. Se hizo especial énfasis en escribir un HTML limpio y comprensible, evitando hacks innecesarios y manteniendo la compatibilidad entre navegadores. También se introdujeron conceptos de optimización de carga relacionados con el marcado.`,
    definicion: `Para mí, HTML es el lenguaje con el que organizo y doy sentido al contenido; es la primera capa que construyo para que la información sea entendible por usuarios y por máquinas.`,
    procedimientos: [
      'Crear la estructura básica <!DOCTYPE html>, <html>, <head> y <body>.',
      'Usar etiquetas semánticas (header, main, nav, footer, article) para organizar el contenido.',
      'Etiquetar correctamente imágenes con alt y crear formularios accesibles.',
      'Validar el HTML y evitar prácticas que comprometan la accesibilidad.'
    ],
    detalles: `En mis ejercicios suelo empezar por bosquejar la estructura en papel, luego trazar el marcado mínimo y finalmente ir agregando atributos semánticos. Evito usar elementos por conveniencia cuando su propósito no coincide con la semántica.`,
    reflexion: 'Un HTML sólido es la base para construir buenas interfaces; la semántica mejora la accesibilidad y el SEO.',
    enlaces: []
  },
  {
    id: 'sem2',
    titulo: 'Semana 2',
    temas: ['CSS Básico', 'CSS Avanzado'],
    descripcion: `Esta semana cubrimos selectores, cascada, especificidad y el modelo de caja. Practicamos layout con flexbox y grid, y revisamos cómo organizar hojas de estilo con variables y metodologías sencillas para mantenerlas escalables. Trabajamos además en la optimización de CSS y la reducción de reglas redundantes para mejorar rendimiento.`,
    definicion: `Veo al CSS como la herramienta que transforma la estructura en experiencia; me permite controlar disposición, color y comportamiento visual en distintos dispositivos.`,
    procedimientos: [
      'Definir variables globales (colores, tipografías) en :root.',
      'Construir layouts con Flexbox para componentes y Grid para estructuras complejas.',
      'Aplicar mobile-first y probar en distintos tamaños de pantalla.',
      'Refactorizar reglas repetidas y eliminar estilos no utilizados.'
    ],
    detalles: `Normalmente organizo los estilos por bloques (componentes) y prefiero usar convenciones sencillas para mantener claridad. Hago uso de herramientas de inspección para depurar problemas de cascada y especificidad.`,
    reflexion: 'El dominio del CSS permite transformar la estructura en experiencias visuales coherentes y accesibles.',
    enlaces: []
  },
  {
    id: 'sem3',
    titulo: 'Semana 3',
    temas: ['CSS con Bootstrap', 'CSS con Tailwind'],
    descripcion: `Comparativa práctica entre Bootstrap (componentes listos) y Tailwind (utilidades). Implementamos logos y pequeñas interfaces con ambos para entender las ventajas de cada enfoque: rapidez de prototipado vs control fino del diseño. Aprendimos a integrar un framework en proyectos existentes y a personalizar variables para mantener coherencia visual.`,
    definicion: `Aprendí que los frameworks ofrecen atajos: yo los uso para acelerar prototipos, pero mantengo control cuando necesito un diseño específico.`,
    procedimientos: [
      'Evaluar requisitos del proyecto para decidir entre componentes listos o utilidades.',
      'Integrar el framework escogido y personalizar variables o temas.',
      'Probar el resultado en diferentes resoluciones y ajustar estilos personalizados.'
    ],
    detalles: `En las prácticas integré ambos frameworks en pequeños proyectos; con Bootstrap pude armar una página rápida y con Tailwind afinar detalles visuales sin escribir CSS largo.`,
    reflexion: 'Elegir un framework depende del proyecto; conocer ambos ofrece flexibilidad en la elección de herramientas.',
    enlaces: []
  },
  {
    id: 'sem4',
    titulo: 'Semana 4',
    temas: ['JavaScript Básico', 'JavaScript Avanzado', 'TypeScript'],
    descripcion: `Iniciamos con los fundamentos de JavaScript: tipos, funciones, objetos y manipulación básica del DOM. Progresamos hacia promesas, async/await y patrones comunes para manejar asincronía y errores. Se introdujo TypeScript para añadir tipado estático, definiendo interfaces simples y comprobando tipos en funciones y componentes pequeños. Discutimos ventajas del tipado y cómo mejora mantenibilidad.`,
    definicion: `Para mí, JavaScript es la capa de comportamiento: lo uso para responder a la interacción del usuario, manipular el DOM y comunicarme con servidores de forma controlada. TypeScript lo veo como una ayuda para evitar errores en código compartido.`,
    procedimientos: [
      'Practicar manipulación del DOM de forma segura y no invasiva.',
      'Usar promesas y async/await para manejar llamadas asíncronas con control de errores.',
      'Escribir tipos básicos con TypeScript y agregar anotaciones en funciones críticas.'
    ],
    detalles: `Al desarrollar scripts empiezo por definir el flujo de eventos, luego extraigo funciones puras y finalmente incorporo control de errores. En TypeScript suelo tipar entradas y salidas de funciones para mayor seguridad.`,
    reflexion: 'Combinar buenas prácticas en JS con TypeScript reduce errores y facilita la colaboración en proyectos grandes.',
    enlaces: []
  },
  {
    id: 'sem5',
    titulo: 'Semana 5',
    temas: ['Introducción al desarrollo con React'],
    descripcion: `Semana introductoria a React: JSX, creación de componentes, props y estado local. Se desarrollaron componentes funcionales con hooks básicos (useState, useEffect) y se revisó la gestión de eventos y comunicación entre componentes padre-hijo. También se tocó la estructura de un proyecto React y cómo organizar componentes para mantener la escalabilidad.`,
    definicion: `Veo a React como una forma de pensar en UI: dividir en componentes reutilizables y describir la interfaz como una función del estado.`,
    procedimientos: [
      'Crear componentes pequeños y composables.',
      'Usar hooks para manejar estado y efectos de forma declarativa.',
      'Organizar carpetas por dominio y documentar props importantes.'
    ],
    detalles: `En mis ejercicios con React me esfuerzo por mantener componentes enfocados en una sola responsabilidad y extraer lógica repetida en hooks personalizados.`,
    reflexion: 'React permite diseñar UIs reactivas; comprender su mentalidad es clave antes de abordar proyectos más complejos.',
    enlaces: []
  },
  {
    id: 'sem6',
    titulo: 'Semana 6',
    temas: ['Componentes', 'JSX', 'TypeScript y Estilos en React'],
    descripcion: `Profundizamos en la creación de componentes reutilizables, composición y patrones para compartir lógica (hooks personalizados). Vimos cómo tipar componentes con TypeScript y cómo aplicar estilos: CSS Modules, styled-components y utilidades como Tailwind en React. Se trabajó en accesibilidad de componentes interactivos y pruebas básicas de comportamiento.`,
    definicion: `Aprendí a priorizar la reutilización y la accesibilidad al diseñar componentes; cada componente debe ser claro en su API y fácil de testear.`,
    procedimientos: [
      'Diseñar la API del componente (props) antes de implementarlo.',
      'Escribir pruebas simples de comportamiento y verificar accesibilidad.',
      'Tipar componentes con TypeScript y documentar casos de uso.'
    ],
    detalles: `Al construir componentes reutilizables, siempre considero cómo serán usados y qué props son obligatorios; así reduzco errores y hago componentes más previsibles.`,
    reflexion: 'La combinación de React y TypeScript junto a una estrategia de estilos consistente produce componentes robustos y mantenibles.',
    enlaces: []
  }
];


document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.semanas');
  const menu = document.getElementById('cuaderno-menu');
  if (!contenedor || !menu) return console.warn('Elementos de cuaderno no encontrados');

  // crear botones (sin select)
  semanas.forEach((s, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = idx === 0 ? 'active' : '';
    btn.textContent = s.titulo;
    btn.dataset.id = s.id;
    btn.addEventListener('click', () => showSemana(s.id));
    menu.appendChild(btn);
  });

  // mostrar primera semana por defecto
  showSemana(semanas[0].id);

  function showSemana(id) {
  // actualizar botones
  menu.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.id === id));

    contenedor.innerHTML = '';
    const s = semanas.find(x => x.id === id);
    if (!s) return;

    const div = document.createElement('div');
    div.className = 'semana';

    const temasHtml = s.temas.map(t => `<li>${escapeHtml(t)}</li>`).join('');

    let html = `
      <h3>${escapeHtml(s.titulo)}</h3>
      <p><strong>Temas:</strong></p>
      <ul>${temasHtml}</ul>
      <p><strong>Descripción:</strong> ${escapeHtml(s.descripcion)}</p>
      <p><strong>Definición:</strong> ${escapeHtml(s.definicion || '')}</p>
    `;

    if (Array.isArray(s.procedimientos) && s.procedimientos.length) {
      const procHtml = s.procedimientos.map(p => `<li>${escapeHtml(p)}</li>`).join('');
      html += `<p><strong>Procedimientos:</strong></p><ol>${procHtml}</ol>`;
    }

    if (s.detalles) html += `<p><strong>Detalles:</strong> ${escapeHtml(s.detalles)}</p>`;

    if (s.enlaces && s.enlaces.length) {
      const enlacesHtml = s.enlaces.map(e => `<li><a href="${escapeHtml(e.href)}" target="_blank" rel="noopener">${escapeHtml(e.label)}</a></li>`).join('');
      html += `<p><strong>Enlaces:</strong></p><ul class="enlaces-list">${enlacesHtml}</ul>`;
    }

    if (s.reflexion) html += `<p><strong>Reflexión:</strong> ${escapeHtml(s.reflexion)}</p>`;

    // añadir botón para agregar enlaces
    html += `<p><button type="button" class="add-link" data-id="${escapeHtml(s.id)}">Añadir enlace</button></p>`;

    div.innerHTML = html;
    contenedor.appendChild(div);

  // mostrar inmediatamente (sin transición)
  // (anteriormente se aplicaba una animación; ahora se omite para mostrar el contenido sin retrasos)
  div.classList.add('show');

    // attach add-link handler
    const addBtn = div.querySelector('.add-link');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const id = addBtn.dataset.id;
        const url = prompt('Introduce la URL (incluya https://):');
        if (!url) return;
        const href = url.startsWith('http://') || url.startsWith('https://') ? url : 'https://' + url;
        const label = prompt('Etiqueta para el enlace (opcional):', href) || href;
        const semana = semanas.find(x => x.id === id);
        if (!semana) return;
        if (!Array.isArray(semana.enlaces)) semana.enlaces = [];
        semana.enlaces.push({ href, label });
        // re-render same week to show new enlace
        showSemana(id);
      });
    }
  }
});

function escapeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}