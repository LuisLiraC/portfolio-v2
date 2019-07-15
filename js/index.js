$('.navbar-nav a').on('click', function () {
  $('.navbar-collapse').removeClass('show');
});

// Variables
const diplomas = document.getElementsByClassName("diploma");
const modal_content = document.getElementById("modal-content")
const AccordionContainer = document.getElementById('AccordionContainer')
const Sections = document.getElementById('Sections')
const ProjectsList = document.querySelector('#projects_list')


// "API"
const api = [
  courses = [
    {
      id: 1,
      title: "Careers",
      tag: "Carreras en Platzi",
      items: [
        {
          id: 1,
          title: "Carrera de Arquitectura Frontend",
          badge: "img/badges/golden-badge-arquitecto-front.png",
          src: "img/diplomas/diploma-arquitecto.png",
          link: "https://platzi.com/@Luis_LiraC/carrera/42-arquitecto/diploma/detalle/"
        },
        {
          id: 2,
          title: "Carrera de Desarrollo con WordPress",
          badge: "img/badges/Wordpress.png",
          src: "img/diplomas/diploma-desarrollo-wordpress.png",
          link: "https://platzi.com/@Luis_LiraC/carrera/52-desarrollo-wordpress/diploma/detalle/"
        },
        {
          id: 3,
          title: "Carrera de Desarrollo de Aplicaciones con ASP .NET",
          badge: "img/badges/golden-asp.png",
          src: "img/diplomas/diploma-asp-net.png",
          link: "https://platzi.com/@Luis_LiraC/carrera/58-asp-net/diploma/detalle/"
        }
      ]
    },
    {
      id: 2,
      title: "Frontend",
      tag: "Frontend",
      items: [
        {
          id: 1,
          title: "Curso de Desarrollo Web Online",
          badge: "img/badges/desarrollo-web.png",
          src: "img/diplomas/diploma-html5-css3.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1350-html5-css3/diploma/detalle/"
        },
        {
          id: 2,
          title: "Curso de CSS Grid Layout",
          badge: "img/badges/css-grid.png",
          src: "img/diplomas/diploma-css-grid-layout.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1229-css-grid-layout/diploma/detalle/"
        },
        {
          id: 3,
          title: "Curso de Responsive Design",
          badge: "img/badges/responsive-design.png",
          src: "img/diplomas/diploma-responsive-design.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1362-responsive-design/diploma/detalle/"
        },
        {
          id: 4,
          title: "Curso de Animanciones para la Web",
          badge: "img/badges/animaciones-web.png",
          src: "img/diplomas/diploma-animaciones-web.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1103-animaciones-web/diploma/detalle/"
        },
        {
          id: 5,
          title: "Curso de SASS",
          badge: "img/badges/sass.png",
          src: "img/diplomas/diploma-sass.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1244-sass/diploma/detalle/"
        },
        {
          id: 6,
          title: "Curso de Stylus",
          badge: "img/badges/stylus.png",
          src: "img/diplomas/diploma-stylus.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1245-stylus/diploma/detalle/"
        },
        {
          id: 7,
          title: "Curso de LESS",
          badge: "img/badges/less.png",
          src: "img/diplomas/diploma-less.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1246-less/diploma/detalle/"
        },
        {
          id: 8,
          title: "Curso de Bootstrap",
          badge: "img/badges/bootstrap.png",
          src: "img/diplomas/diploma-bootstrap.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1331-bootstrap/diploma/detalle/"
        },
        {
          id: 9,
          title: "Curso de Foundation",
          badge: "img/badges/foundation.png",
          src: "img/diplomas/diploma-foundation.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1332-foundation/diploma/detalle/"
        },
        {
          id: 10,
          title: "Curso de PostCSS",
          badge: "img/badges/postcss.png",
          src: "img/diplomas/diploma-postcss.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1242-postcss/diploma/detalle/"
        },
        {
          id: 11,
          title: "Curso de Bots con Facebook Messenger",
          badge: "img/badges/bots-facebook.png",
          src: "img/diplomas/diploma-bots-fb.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1355-bots-fb/diploma/detalle/"
        },
        {
          id: 12,
          title: "Curso de Optimización de Páginas Web",
          badge: "img/badges/wpo.png",
          src: "img/diplomas/diploma-optimizacion-web.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1390-optimizacion-web/diploma/detalle/"
        },
        {
          id: 13,
          title: "Curso de Sistemas de Diseño para Desarrolladores",
          badge: "img/badges/sistemas-diseno-desarrolladores.png",
          src: "img/diplomas/diploma-diseno-desarrolladores.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1422-diseno-desarrolladores/diploma/detalle/"
        },
        {
          id: 14,
          title: "Curso de HTML y CSS",
          badge: "img/badges/html-css.png",
          src: "img/diplomas/diploma-html-css.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1492-html-css/diploma/detalle/"
        },
        {
          id: 15,
          title: "Curso de Webpack 3",
          badge: "img/badges/webpack.png",
          src: "img/diplomas/diploma-webpack.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1196-webpack/diploma/detalle/"
        },
        {
          id: 16,
          title: "Curso de React.js 2017",
          badge: "img/badges/react.png",
          src: "img/diplomas/diploma-react.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1199-react/diploma/detalle/"
        },
        {
          id: 17,
          title: "Curso de React.js 2019",
          badge: "img/badges/react.png",
          src: "img/diplomas/diploma-react-2019.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1548-react/diploma/detalle/"
        },
        {
          id: 18,
          title: "Curso de Redux 2018",
          badge: "img/badges/redux.png",
          src: "img/diplomas/diploma-redux-2018.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1200-redux-2018/diploma/detalle/"
        },
        {
          id: 19,
          title: "Curso de React Router",
          badge: "img/badges/react-router.png",
          src: "img/diplomas/diploma-react-router.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1342-react-router/diploma/detalle/"
        },
        {
          id: 20,
          title: "Curso de Next.js",
          badge: "img/badges/nextjs.png",
          src: "img/diplomas/diploma-next-js.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1311-next-js/diploma/detalle/"
        },
        {
          id: 21,
          title: "Curso de PWA con React.js",
          badge: "img/badges/PWA.png",
          src: "img/diplomas/diploma-pwa-react-js.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1313-pwa-react-js/diploma/detalle/"
        },
        {
          id: 22,
          title: "Curso de Redux por Bedu",
          badge: "img/badges/redux.png",
          src: "img/diplomas/diploma-redux-2019.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1613-redux/diploma/detalle/"
        },
        {
          id: 23,
          title: "Curso de Desarrollo de Aplicaciones Web con Gatsby JS",
          badge: "img/badges/badge-gatsby.png",
          src: "img/diplomas/diploma-gatsby.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1618-gatsby/diploma/detalle/"
        },
        {
          id: 24,
          title: "Curso de Webpack 4",
          badge: "img/badges/webpack.png",
          src: "img/diplomas/diploma-webpack4.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1620-webpack/diploma/detalle/"
        }
      ]
    },
    {
      id: 3,
      title: "Backend",
      tag: "Backend",
      items: [
        {
          id: 1,
          title: "Curso de jQuery a JavaScript",
          badge: "img/badges/jquery-javascript.png",
          src: "img/diplomas/diploma-jquery-js.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1316-jquery-js/diploma/detalle/"
        },
        {
          id: 2,
          title: "Curso de Fundamentos de JavaScript",
          badge: "img/badges/fundamentos-javascript.png",
          src: "img/diplomas/diploma-fundamentos-javascript.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1339-fundamentos-javascript/diploma/detalle/"
        },
        {
          id: 3,
          title: "Curso de Introducción a PHP",
          badge: "img/badges/introduccion-php.png",
          src: "img/diplomas/diploma-php.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1338-php/diploma/detalle/"
        },
        {
          id: 4,
          title: "Fundamentos de C# con NET Core",
          badge: "img/badges/fundamentos-csharp.png",
          src: "img/diplomas/diploma-fundamentos-csharp.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1375-fundamentos-csharp/diploma/detalle/"
        },
        {
          id: 5,
          title: "Curso de C# con .Net Core",
          badge: "img/badges/csharp-netcore.png",
          src: "img/diplomas/diploma-c-sharp.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1359-c-sharp/diploma/detalle/"
        },
        {
          id: 6,
          title: "Curso de ASP.NET Core",
          badge: "img/badges/aspnet.png",
          src: "img/diplomas/diploma-aspnet-core.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1395-aspnet-core/diploma/detalle/"
        },
        {
          id: 7,
          title: "Curso Básico de Node.js",
          badge: "img/badges/nodejs-basico.png",
          src: "img/diplomas/diploma-basico-nodejs.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1380-basico-nodejs/diploma/detalle/"
        },
        {
          id: 8,
          title: "Curso de Esenciales de Node.js",
          badge: "img/badges/badge-nodejs.png",
          src: "img/diplomas/diploma-nodejs.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1381-node-js/diploma/detalle/"
        },
        {
          id: 9,
          title: "Curso Básico de GraphQL",
          badge: "img/badges/badge-graphql.png",
          src: "img/diplomas/diploma-graphql.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1512-graphql/diploma/detalle/"
        }
      ]
    },
    {
      id: 4,
      title: "Generals",
      tag: "Conocimientos Generales",
      items: [
        {
          id: 1,
          title: "Curso Profesional de Git y GitHub 2017",
          badge: "img/badges/git-github.png",
          src: "img/diplomas/diploma-git-github.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1170-git-github/diploma/detalle/"
        },
        {
          id: 2,
          title: "Fundamentos de Ingeniería de Software",
          badge: "img/badges/fundamentos-ingenieria.png",
          src: "img/diplomas/diploma-ingenieria.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1098-ingenieria/diploma/detalle/"
        },
        {
          id: 3,
          title: "Introducción a Terminal y Línea de Comandos",
          badge: "img/badges/linea-comandos.png",
          src: "img/diplomas/diploma-terminal.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1276-terminal/diploma/detalle/"
        },
        {
          id: 4,
          title: "Fundamentos de Bases de Datos 2017",
          badge: "img/badges/fundamentos-bases-de-datos.png",
          src: "img/diplomas/diploma-bd.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1183-bd/diploma/detalle/"
        },
        {
          id: 5,
          title: "Curso de Programación Básica",
          badge: "img/badges/programacion-basica.png",
          src: "img/diplomas/diploma-programacion-basica.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1050-programacion-basica/diploma/detalle/"
        },
        {
          id: 6,
          title: "Curso de Redes de Internet",
          badge: "img/badges/redes-internet.png",
          src: "img/diplomas/diploma-redes.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1277-redes/diploma/detalle/"
        },
        {
          id: 7,
          title: "Curso Profesional de Git y GitHub 2019",
          badge: "img/badges/git-github.png",
          src: "img/diplomas/diploma-git-github-2019.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1557-git-github/diploma/detalle/"
        },
        {
          id: 8,
          title: "Curso de Programación Orientada a Objetos: POO",
          badge: "img/badges/poo.png",
          src: "img/diplomas/diploma-oop.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1474-oop/diploma/detalle/"
        },
        {
          id: 9,
          title: "Curso de Fundamentos de Bases de Datos 2019",
          badge: "img/badges/fundamentos-bases-de-datos.png",
          src: "img/diplomas/diploma-bd-2019.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1566-bd/diploma/detalle/"
        }
      ]
    },
    {
      id: 5,
      title: "English",
      tag: "Inglés",
      items: [
        {
          id: 1,
          title: "Curso de Inglés Básico",
          badge: "img/badges/ingles-basico.png",
          src: "img/diplomas/diploma-ingles-basico.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1358-ingles-basico/diploma/detalle/"
        },
        {
          id: 2,
          title: "Curso de Inglés Básico: Gramática",
          badge: "img/badges/ingles-basico-gramatica.png",
          src: "img/diplomas/diploma-ingles-gramatica.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1370-ingles-gramatica/diploma/detalle/"
        },
        {
          id: 3,
          title: "Curso de Inglés Básico: Conversación",
          badge: "img/badges/ingles-basico-conversacion.png",
          src: "img/diplomas/diploma-ingles-conversacion.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1371-ingles-conversacion/diploma/detalle/"
        },
        {
          id: 4,
          title: "Curso de Escritura de Inglés",
          badge: "img/badges/escritura-ingles.png",
          src: "img/diplomas/diploma-escritura-ingles.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1279-escritura-ingles/diploma/detalle/"
        }
      ]
    },
    {
      id: 6,
      title: "Design",
      tag: "Diseño UX / UI",
      items: [
        {
          id: 1,
          title: "Curso de Sistemas de Diseño",
          badge: "img/badges/sistemas-diseno.png",
          src: "img/diplomas/diploma-sistemas-diseno.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1420-sistemas-diseno/diploma/detalle/"
        },
      ]
    },
    {
      id: 7,
      title: "CMS",
      tag: "WordPress",
      items: [
        {
          id: 1,
          title: "Curso de Temas y Plugins en WordPress",
          badge: "img/badges/badge-wordpress.png",
          src: "img/diplomas/diploma-wordpress-temas.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1154-wordpress/diploma/detalle/"
        },
        {
          id: 2,
          title: "Curso de Creación y Optimización de Sitios Web con WordPress",
          badge: "img/badges/badge-wordpress.png",
          src: "img/diplomas/diploma-seo-wordpress.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1433-seo-wordpress/diploma/detalle/"
        }
      ]
    },
    {
      id: 8,
      title: "Others",
      tag: "Otros",
      items: [
        {
          id: 1,
          title: "Curso de Marca Personal",
          badge: "img/badges/marca-personal.png",
          src: "img/diplomas/diploma-marca-personal.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1220-marca-personal/diploma/detalle/"
        },
        {
          id: 2,
          title: "Curso de Creación de Portafolio y CV",
          badge: "img/badges/portafolio-cv.png",
          src: "img/diplomas/diploma-portafolios.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1584-portafolios/diploma/detalle/"
        },
        {
          id: 3,
          title: "Curso de Ortografía Básica",
          badge: "img/badges/ortografia-basica.png",
          src: "img/diplomas/diploma-ortografia-basica.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1396-ortografia-basica/diploma/detalle/"
        },
        {
          id: 4,
          title: "Curso de Finanzas Personales",
          badge: "img/badges/finanzas.png",
          src: "img/diplomas/diploma-finanzas.png",
          link: "https://platzi.com/@Luis_LiraC/curso/1190-finanzas/diploma/detalle/"
        },
      ]
    }
  ],
  projetcs = [
    {
      id: 9,
      title: "League of Legends API REST",
      description: "Desarrollo de una API Rest pública para el uso de la comunidad de desarrolladores web. Este proyecto principalmente lo realicé para practicar la creación de una API con Express.js.",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "HTML5",
        "CSS3"
      ],
      src: "img/projects/API.png",
      alt: "api",
      repository: "api-lol",
      deployed: true,
      deploy_link: "https://api-lol.herokuapp.com/",
      deploy_text_button: "Ver en Heroku"
    },
    {
      id: 8,
      title: "Tic-Tac-Toe",
      description: "Este pequeño juego fue el proyecto del curso básico de node.js en Platzi. Después de conocer los aspectos básicos del entorno de ejecución se procedió a crear un juego de Tic tac toe con Socket.io en la parte del backend para que fuera en tiempo real.",
      tags: [
        "React.js",
        "Redux",
        "Bootstrap",
        "Node.js",
        "Socket.io"
      ],
      src: "img/projects/tictactoe.png",
      alt: "tic-tac-toe",
      repository: "Tit-Tac-Toe",
      deployed: false,
      deploy_link: "",
      deploy_text_button: ""
    },
    {
      id: 7,
      title: "Blog",
      description: "SPA donde se realiza el comnsumo de la API <a href='https://jsonplaceholder.typicode.com/' target='_blank'>JSONPlaceHolder</a>. Además, en el código se incluyen métodos HTTP como POST, DELETE, PUT y GET para simular las acciones hacia una base de datos a manera de CRUD.",
      tags: [
        "React.js",
        "Redux",
        "Bootstrap"
      ],
      src: "img/projects/blog.png",
      alt: "blog",
      repository: "blog-redux",
      deployed: true,
      deploy_link: "https://blog.luislirac.now.sh/",
      deploy_text_button: "Ver en Now"
    },
    {
      id: 6,
      title: "CoreSchool",
      description: "(WIP) Aplicación realizada con el framework de ASP.Net Core MVC. Está enfocada a realizar funcionalidades sencillas de CRUD usando una base de datos en memoria creada con Entity Framework Core, de la cual se extrae la información con LinQ",
      tags: [
        "ASP .Net Core",
        "C# .Net Core",
        "MVC",
        "LinQ",
        "EF Core",
        "Razor",
        "Bootstrap"
      ],
      src: "img/projects/CoreSchool.png",
      alt: "coreSchool",
      repository: "School_ASPNET",
      deployed: false,
      deploy_link: "",
      deploy_text_button: ""
    },
    {
      id: 5,
      title: "PWA Recetas",
      description: "Aplicación simple sobre recetas. Consume una API de donde toma la información de cada apartado, este proyecto se trató principalmente pasar una Web app a una PWA, cumpliendo con los requerimientos de Google para una, con usabilidad offline con los Services Workers para que los datos se almacenen en caché.",
      tags: [
        "React.js",
        "React Router"
      ],
      src: "img/projects/PWA.png",
      alt: "pwa",
      repository: "pwa-recetas",
      deployed: true,
      deploy_link: "https://recetas-pwa.luislirac.now.sh/",
      deploy_text_button: "Ver en Now"
    },
    {
      id: 4,
      title: "Podcasts",
      description: "Aplicación que consume la API de Audioboom. Principalmente el motivo de este proyecto fue el uso de SSR para hacer una Web app con mejor performance.",
      tags: [
        "Next.js",
        "React.js",
      ],
      src: "img/projects/Podcasts.png",
      alt: "podcasts",
      repository: "podcasts",
      deployed: true,
      deploy_link: "https://podcast.luislirac.now.sh/",
      deploy_text_button: "Ver en Now"
    },
    {
      id: 3,
      title: "Pokédex",
      description: "SPA enfocada al cosumo de la API pública de la página <a href='https://pokeapi.co/' target='_blank'>PokéAPI</a>. Con esto hice un pequeño espacio donde se puede consultar parte de la información de los Pokémon.",
      tags: [
        "React.js",
        "React Router",
        "Bootstrap"
      ],
      src: "img/projects/Pokedex.PNG",
      alt: "pokedex",
      repository: "GamesVideos",
      deployed: true,
      deploy_link: "https://luislirac.github.io/pokedex/",
      deploy_text_button: "GitHub Page"
    },
    {
      id: 2,
      title: "GamesVideos",
      description: "Esto es una SPA donde comparto algunas de mis cosas favoritas como Videojuegos, Soundtracks y Youtubers. Ese es el resultado de la combinación de varios cursos. En local también trabajo con SSR.",
      tags: [
        "React.js",
        "Webpack",
        "Redux",
        "React Router",
      ],
      src: "img/projects/GamesVideos.png",
      alt: "gamesvideos",
      repository: "GamesVideos",
      deployed: true,
      deploy_link: "https://luislirac.github.io/GamesVideos/",
      deploy_text_button: "GitHub Page"
    },
    {
      id: 1,
      title: "Mi Primer Portafolio",
      description: "Este fue mi proyecto personal al concluir los primeros cursos de Desarrollo Web. Principalmente para practicar lo que aprendí de CSS Grid, Git, SASS, JavaScript y Responsive Design.",
      tags: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "SASS"
      ],
      src: "img/projects/Portfolio.png",
      alt: "portfolio",
      repository: "portfolio",
      deployed: true,
      deploy_link: "https://luislirac.github.io/portfolio/",
      deploy_text_button: "GitHub Page"
    }
  ]
]

// Funcionesp para renderizado de proyectos

RenderProjects(api[1])

function RenderProjects(data) {
  let content = ""
  data.map(project => {
    content += CreateProject(project)
  })
  ProjectsList.innerHTML += content
}

function CreateProject(project) {
  return (`
  <div class="row d-flex align-items-center hidden">
    <div class="col col-12 col-md-6 pb-2 pt-2 pr-2 pl-2 text-center ${project.id % 2 == 0 && "order-first order-md-last"}">
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      ${createTags(project.tags)}
      <br>
      ${project.deployed ? (
      `<a href=${project.deploy_link} target="_blank"><button type="button"
          class="btn btn-outline-dark btn-sm mt-2">${project.deploy_text_button}</button></a>`
    ) : ""}
      <a href="https://github.com/LuisLiraC/${project.repository}" target="_blank"><button type="button"
          class="btn btn-outline-dark btn-sm mt-2">Repositorio</button></a>
    </div>
    <div class="col col-12 col-md-6">
      <figure class="pb-2 pt-2 pr-2 pl-2">
        <img src=${project.src} width="100%" alt="captura_${project.alt}">
      </figure>
    </div>
  </div>
  <hr>
  `)
}

function createTags(tags) {
  let content = ""
  tags.map(tag => content += `<h6 class="d-inline"><span class="badge badge-info font-weight-normal">${tag}</span></h6>&nbsp;`)
  return content
}

// Funciones para Renderizado de cursos
CreateAccordion(api[0])

function CreateAccordion(data) {
  let content = "";
  data.map(section => {
    CreateSectionButton(section)
    content += CreateSectionTemplate(section);
  })
  AccordionContainer.innerHTML += content;
}

function CreateSectionButton(Section) {
  Sections.innerHTML += 
  `
  <button class="btn ${Section.title == 'Careers' ? ("btn-success mb-2") : "btn-outline-dark mb-2"} " 
    type="button" data-toggle="collapse" data-target="#collapse${Section.title}" aria-expanded="false" aria-controls="collapseOne">
    ${Section.tag}
  </button>
  `
}

function CreateSectionTemplate(Section) {
  return (
    `
    <div id="collapse${Section.title}" class="collapse ${Section.title == 'Careers' && "show"} " aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body pb-0">
        <div class="row justify-content-center" id="careers-acc">
          ${CreateCourseTemplate(Section.items, Section.id)}
        </div>
      </div>
    </div>
    `
  )
}

function CreateCourseTemplate(courses, id) {
  let content = "";
  for (i = 0; i < courses.length; i++) {
    if (courses[i].badge == undefined) {
      break
    } else {
      content += 
      `
      <div class="col col-12 col-md-6 col-lg-4 d-flex">
        <div class="media d-flex align-items-center mb-3">
          <img src=${courses[i].badge} class="mr-3" alt="..." height="40px">
          <div class="media-body">
            <h6 class="mt-0 mb-0 diploma" data-diploma="${id}-${courses[i].id}">${courses[i].title}</h6>
          </div>
        </div>
      </div>
      `
    }
  }
  return content;
}

function ShowModal(data) {

  let section = (data.split('-')[0]) - 1
  let course = (data.split('-')[1]) - 1
  const result = api[0][section].items[course]
  $('.MyModal').modal('show');
  modal_content.innerHTML = HTMLTemplate(result);
}

function HTMLTemplate(result) {
  return (
    `
    <h4>${result.title}</h4>
    <img src="${result.src}" class="diploma-image">
    <a class="btn btn-success view" href="${result.link}" target="_blank">Ver en Platzi</a>  
    `
  )
}

// Agregando evento de click a todos los cursos luego de ser renderizados

for (let i = 0; i < diplomas.length; i++) {
  diplomas[i].addEventListener('click', (event) => {
    const data_diploma = event.target.getAttribute("data-diploma");
    const dataStr = data_diploma.toString()
    ShowModal(dataStr);
  });
}


// Fade In Animation
var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();