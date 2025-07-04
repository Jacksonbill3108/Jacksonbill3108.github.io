---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#1e2124"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Logo.png
  actions:
    - label: "Ver Proyectos"
      url: "/projects/"
      btn_class: "btn--primary"
    - label: "Blog Técnico"
      url: "/blog/"
      btn_class: "btn--info"
excerpt: "Soluciones electrónicas innovadoras para la industria moderna"
intro: 
  - excerpt: 'Especializado en **diseño de PCB**, **sistemas embebidos** y **automatización industrial**'
feature_row:
  - image_path: /assets/images/electronics-feature.jpg
    alt: "Electrónica"
    title: "Electrónica Analógica & Digital"
    excerpt: "Diseño y análisis de circuitos complejos, desde amplificadores hasta sistemas digitales avanzados."
    url: "/blog/categoria/electronica"
    btn_label: "Leer Más"
    btn_class: "btn--primary"
  - image_path: /assets/images/automation-feature.jpg
    alt: "Automatización"
    title: "Automatización Industrial"
    excerpt: "Desarrollo de sistemas de control, PLCs y soluciones IoT para optimizar procesos industriales."
    url: "/blog/categoria/automatizacion"
    btn_label: "Leer Más"
    btn_class: "btn--primary"
  - image_path: /assets/images/embedded-feature.jpg
    alt: "Sistemas Embebidos"
    title: "Sistemas Embebidos"
    excerpt: "Programación de microcontroladores, desarrollo de firmware y soluciones embedded personalizadas."
    url: "/blog/categoria/embedded"
    btn_label: "Leer Más"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /assets/images/youtube-feature.jpg
    alt: "Contenido Educativo"
    title: "Contenido Educativo"
    excerpt: 'Tutoriales de **Python para electrónica**, **C++ para microcontroladores** y **teoría de control**. Suscríbete a mi canal para contenido técnico de calidad.'
    url: "https://youtube.com/@ing-j-cesar-angulo"
    btn_label: "Ver Canal"
    btn_class: "btn--danger"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

## Últimos Artículos

{% for post in site.posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}

## Sobre Angle Technology

Angle Technology nace de la pasión por crear soluciones electrónicas innovadoras. Como estudiante de último semestre de Ingeniería Electrónica, me especializo en:

- **Diseño de PCB** para aplicaciones industriales
- **Sistemas embebidos** y programación de microcontroladores  
- **Automatización industrial** y sistemas de control
- **Internet of Things (IoT)** aplicado a la industria
- **Instrumentación** y sistemas de medición

### Actualmente

- 📚 **Estudiante** de último semestre en Ingeniería Electrónica
- 🎓 **Diplomado** en Automatización, Sistemas de Control Industrial, Instrumentación e IoT
- 🔬 **Desarrollando** proyectos de automatización para el sector agrícola
- 📹 **Creando** contenido educativo en YouTube sobre electrónica y programación

---

*¿Tienes un proyecto en mente? [Contáctame](/contact/) para discutir cómo podemos convertir tu idea en realidad.*
