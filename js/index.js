$('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
});

// Variables

const diplomas = document.getElementsByClassName("diploma");
const modal_content = document.getElementById("modal-content")

// JSON

const careers = [ 
    {   
        id: 1,
        title: "Carrera de Arquitectura Frontend",
        src: "img/careers/png/diplomas/diploma-arquitecto.png",
        link: "https://platzi.com/@Luis_LiraC/carrera/42-arquitecto/diploma/detalle/"
    },
    {
        id: 2,
        title: "Carrera de Desarrollo con WordPress",
        src: "img/careers/png/diplomas/diploma-desarrollo-wordpress.png",
        link: "https://platzi.com/@Luis_LiraC/carrera/52-desarrollo-wordpress/diploma/detalle/"
    }
    
]

const frontend = [ 
    {   
        id: 1,
        title: "Curso de Desarrollo Web Online",
        src: "img/courses/png/diplomas/frontend/diploma-html5-css3.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1350-html5-css3/diploma/detalle/"
    },
    {
        id: 2,
        title: "Curso de CSS Grid Layout",
        src: "img/courses/png/diplomas/frontend/diploma-css-grid-layout.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1229-css-grid-layout/diploma/detalle/"
    },
    {
        id: 3,
        title: "Curso de Responsive Design",
        src: "img/courses/png/diplomas/frontend/diploma-responsive-design.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1362-responsive-design/diploma/detalle/"
    },
    {
        id: 4,
        title: "Curso de Animanciones para la Web",
        src: "img/courses/png/diplomas/frontend/diploma-animaciones-web.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1103-animaciones-web/diploma/detalle/"
    },
    {
        id: 5,
        title: "Curso de SASS",
        src: "img/courses/png/diplomas/frontend/diploma-sass.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1244-sass/diploma/detalle/"
    },
    {
        id: 6,
        title: "Curso de Stylus",
        src: "img/courses/png/diplomas/frontend/diploma-stylus.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1245-stylus/diploma/detalle/"
    },
    {
        id: 7,
        title: "Curso de LESS",
        src: "img/courses/png/diplomas/frontend/diploma-less.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1246-less/diploma/detalle/"
    },
    {
        id: 8,
        title: "Curso de Bootstrap",
        src: "img/courses/png/diplomas/frontend/diploma-bootstrap.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1331-bootstrap/diploma/detalle/"
    },
    {
        id: 9,
        title: "Curso de Foundation",
        src: "img/courses/png/diplomas/frontend/diploma-foundation.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1332-foundation/diploma/detalle/"
    },
    {
        id: 10,
        title: "Curso de PostCSS",
        src: "img/courses/png/diplomas/frontend/diploma-postcss.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1242-postcss/diploma/detalle/"
    },
    {
        id: 11,
        title: "Curso de Bots con Facebook Messenger",
        src: "img/courses/png/diplomas/frontend/diploma-bots-fb.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1355-bots-fb/diploma/detalle/"
    },
    {
        id: 12,
        title: "Curso de Optimización de Páginas Web",
        src: "img/courses/png/diplomas/frontend/diploma-optimizacion-web.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1390-optimizacion-web/diploma/detalle/"
    },
    {
        id: 13,
        title: "Curso de Sistemas de Diseño para Desarrolladores",
        src: "img/courses/png/diplomas/frontend/diploma-diseno-desarrolladores.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1422-diseno-desarrolladores/diploma/detalle/"
    },
    {
        id: 14,
        title: "Curso de HTML y CSS",
        src: "img/courses/png/diplomas/frontend/diploma-html-css.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1492-html-css/diploma/detalle/"
    },
    {
        id: 15,
        title: "Curso de Webpack",
        src: "img/courses/png/diplomas/frontend/diploma-webpack.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1196-webpack/diploma/detalle/"
    },
    {
        id: 16,
        title: "Curso de React.js 2017",
        src: "img/courses/png/diplomas/frontend/diploma-react.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1199-react/diploma/detalle/"
    },
    {
        id: 17,
        title: "Curso de React.js 2019",
        src: "img/courses/png/diplomas/frontend/diploma-react-2019.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1548-react/diploma/detalle/"
    }
    
]

const backend = [ 
    {   
        id: 1,
        title: "Curso de jQuery a JavaScript",
        src: "img/courses/png/diplomas/backend/diploma-jquery-js.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1316-jquery-js/diploma/detalle/"
    },
    {
        id: 2,
        title: "Curso de Fundamentos de JavaScript",
        src: "img/courses/png/diplomas/backend/diploma-fundamentos-javascript.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1339-fundamentos-javascript/diploma/detalle/"
    },
    {
        id: 3,
        title: "Curso de Introducción a PHP",
        src: "img/courses/png/diplomas/backend/diploma-php.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1338-php/diploma/detalle/"
    }
]

const generals = [ 
    {   
        id: 1,
        title: "Curso Profesional de Git y GitHub",
        src: "img/courses/png/diplomas/generals/diploma-git-github.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1170-git-github/diploma/detalle/"
    },
    {
        id: 2,
        title: "Fundamentos de Ingeniería de Software",
        src: "img/courses/png/diplomas/generals/diploma-ingenieria.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1098-ingenieria/diploma/detalle/"
    },
    {
        id: 3,
        title: "Introducción a Terminal y Línea de Comandos",
        src: "img/courses/png/diplomas/generals/diploma-terminal.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1276-terminal/diploma/detalle/"
    },
    {
        id: 4,
        title: "Fundamentos de Bases de Datos 2017",
        src: "img/courses/png/diplomas/generals/diploma-bd.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1183-bd/diploma/detalle/"
    },
    {
        id: 5,
        title: "Curso de Programación Básica",
        src: "img/courses/png/diplomas/generals/diploma-programacion-basica.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1050-programacion-basica/diploma/detalle/"
    },
    {
        id: 6,
        title: "Curso de Redes de Internet",
        src: "img/courses/png/diplomas/generals/diploma-redes.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1277-redes/diploma/detalle/"
    },
    {
        id: 7,
        title: "Curso de Marca Personal",
        src: "img/courses/png/diplomas/generals/diploma-marca-personal.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1220-marca-personal/diploma/detalle/"
    },
    {
        id: 8,
        title: "Curso de Finanzas Personales",
        src: "img/courses/png/diplomas/generals/diploma-finanzas.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1190-finanzas/diploma/detalle/"
    },
    {
        id: 8,
        title: "Curso de Creación de Portafolio y CV",
        src: "img/courses/png/diplomas/generals/diploma-portafolios.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1584-portafolios/diploma/detalle/"
    },
    {
        id: 8,
        title: "Curso de Ortografía Básica",
        src: "img/courses/png/diplomas/generals/diploma-ortografia-basica.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1396-ortografia-basica/diploma/detalle/"
    },
]

const english = [ 
    {   
        id: 1,
        title: "Curso de Inglés Básico",
        src: "img/courses/png/diplomas/english/diploma-ingles-basico.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1358-ingles-basico/diploma/detalle/"
    },
    {
        id: 2,
        title: "Curso de Inglés Básico: Gramática",
        src: "img/courses/png/diplomas/english/diploma-ingles-gramatica.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1370-ingles-gramatica/diploma/detalle/"
    },
    {
        id: 3,
        title: "Curso de Inglés Básico: Conversación",
        src: "img/courses/png/diplomas/english/diploma-ingles-conversacion.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1371-ingles-conversacion/diploma/detalle/"
    },
    {
        id: 4,
        title: "Curso de Escritura de Inglés",
        src: "img/courses/png/diplomas/english/diploma-escritura-ingles.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1279-escritura-ingles/diploma/detalle/"
    }
]

const design = [ 
    {   
        id: 1,
        title: "Curso de Sistemas de Diseño",
        src: "img/courses/png/diplomas/design/diploma-sistemas-diseno.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1420-sistemas-diseno/diploma/detalle/"
    }
]

const cms = [ 
    {   
        id: 1,
        title: "Curso de Temas y Plugins en WordPress",
        src: "img/courses/png/diplomas/cms/diploma-wordpress-temas.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1154-wordpress/diploma/detalle/"
    },
    {   
        id: 2,
        title: "Curso de Creación y Optimización de Sitios Web con WordPress",
        src: "img/courses/png/diplomas/cms/diploma-seo-wordpress.png",
        link: "https://platzi.com/@Luis_LiraC/curso/1433-seo-wordpress/diploma/detalle/"
    }
]

// Functions

for (let i = 0; i < diplomas.length; i++){
    diplomas[i].addEventListener('click', (event) => {
        const data_diploma = event.target.getAttribute("data-diploma");
        const dataStr = data_diploma.toString()
        ShowModal(dataStr);
    });
}


function ShowModal(data) {
    let index;
    let clicked;
    let content;

    if (data.indexOf('career') >= 0){
        index = data.split('-')[1];
        clicked = careers[index - 1];
        content = HTMLTemplate(clicked);

    } else if (data.indexOf('frontend') >= 0) {
        index = data.split('-')[1];
        clicked = frontend[index - 1];
        content = HTMLTemplate(clicked);

    } else if (data.indexOf('backend') >= 0) {
        index = data.split('-')[1];
        clicked = backend[index - 1];
        content = HTMLTemplate(clicked);

    } else if (data.indexOf('generals') >= 0) {
        index = data.split('-')[1];
        clicked = generals[index - 1];
        content = HTMLTemplate(clicked);

    } else if (data.indexOf('english') >= 0) {
        index = data.split('-')[1];
        clicked = english[index - 1];
        content = HTMLTemplate(clicked);

    } else if (data.indexOf('design') >= 0) {
        index = data.split('-')[1];
        clicked = design[index - 1];
        content = HTMLTemplate(clicked);

    } else if (data.indexOf('cms') >= 0) {
        index = data.split('-')[1];
        clicked = cms[index - 1];
        content = HTMLTemplate(clicked);
    }

    $('.MyModal').modal('show');
    modal_content.innerHTML = content;
}


function HTMLTemplate(data){
    return (
        `
        <h4>${data.title}</h4>
        <img src="${data.src}" class="diploma-image">
        <a class="btn btn-success view" href="${data.link}" target="_blank">Ver en Platzi</a>
        `
    )
}