# Unidad 2

## Taller 13

- preincipales frameworks de javaScript

- react.js: lleva la delantera por ser un framework más antiguo.
- vue.js: framework progresivo, tiene el potencial de convertirse en el framework más utilizado en 3 años aprox.
- angular: es uno de los frameworks de JS más potentes y la mejor opción cuando se pretende originar sitios web de una sola página con elementos interactivos.


- ventajas de utilizar vue.js
- fácil de iniciar
- versátil: los frameworks versatiles se refieren a que se logran adaptar a más frameworks para que se complementen las funcionalidades de la página web que creamos, vue es altamente escalable.
- rendimiento: dentro del dom actua múy rápido.

- su eficacia es percecptible cuando la página está tratada bajo un sistema copmplejo, por otro lado en una página sencilla se es implementado no se nota su eficiencia (rendimiento).

- puede ir migrando, construyendo por partes los componentes de una página.


``` html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

- vue funciona con options API (estructura de la página web)
- una de esas opciones es el template

- se debe declarar desde el body y no en forma de metadatos.

Si yo quiero ejecutar JS debo ejecutarlo con `{{}}`

La buena practica es incrustar el codigo HTML en dentro de las paginas, en vez de los componentes de Vue

DATA API SON PROPIEDADES QUE ME PERMITEN CREAR PROPIEDADES REACTIVAS, me permiten vincular info de la vista, con mi programacion js

MVC Model View Controller, vista va a enviar peticiones a un componente llamado controlador que controla requests, todo lo mandado es el modelo, 

![MVC](/img/mvc.PNG)



Palabras reservadas del Options API de Vue.js

- `data()`
- `methods:{}`

Directivas
- v-on: para gestionar eventos(si voy a utilizar la palabra reservada dentro de js, tengo que usar la palabra reservada `this` )

reactiva porque detecta que hubo un cambio en la propiedad reactiva, y vue envia info al navegador

### SPA (Single Page Application)
voy a manejar una unica pagina, xq ya se trajeron
- la primera iteracion es mas lenta, xq trata de cargar todo al inicio, para facilitar futuros request

Demora menos en la carga tradicional vs Demora mas en la carga spa

Demora un poco en cada carga vs Demora menos en despues de la carga inicial

La experiencia de usuario mejora en la navegacion SPA, inclusive la carga inicial es practicamente imperceptible.

- cuando ejecutamos un evento, involucra codigo js

## v-for

- for: es una sentencia que permite iterar sobre una lista.

- transladado dentro del framework, nos permite también construir dinámicamente elementos, como 6 botónes rápidamente o una imagen.

v-model: directiva para formularios vincular info de ida o de retorno en `input `

this.miarreglo.unshift(nuevoEstudiante);//principio
        this.miarreglo.push(nuevoEstudiante);//final

'v-on:keypress.enter='
modificadores de evento

`v-if` construye o no un elemento HTML, dependiendo de un boolean, crea un comentario, actua a nivel de dom, por lo que es recomnendable usarlo de manera puntual
`v-show` oculta el elemento de estilo, con un `display:none`, es mas útil usarlo cuando se trata de quitar y poner un elemento de manera repetitiva (uso principalmente en juegos).

**visualmente** se comportan igual

en un ejemplo e una página que incorpore v-if, es más útil usarlo si se trata de cargar una página con varios elementos en donde queremos que dicha página sea más ligera ya que los elementos se mostrarán a medida en la que el usuario requiera visualizarlos.