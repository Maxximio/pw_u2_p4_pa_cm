var a = {
  nombre: "Paulo",
  apellido: "Aldaz",
};
var b = {
  nombre: "Carlos",
  apellido: "Montalvo",
};
var c = {
  nombre: "Andy",
  apellido: "Sanchez",
};
var d = {
  nombre: "Monica",
  apellido: "Andrade",
};
var e = {
  nombre: "Pedro",
  apellido: "Albuja",
};
var f = {
  nombre: "Paul",
  apellido: "Gonzalez",
};
var g = {
  nombre: "Paulo2",
  apellido: "Aldaz2",
};
var h = {
  nombre: "Paulo3",
  apellido: "Aldaz3",
};
var i = {
  nombre: "Paulo4",
  apellido: "Aldaz4",
};
var j = {
  nombre: "Paulo5",
  apellido: "Aldaz5",
};

const arreglo = [a, b, c, d, e, f, g, h, i, j];

const app = Vue.createApp({
  data() {
    return {
      miarreglo: arreglo,

      nombre: '',
    };
  },
  methods: {
    agregarEstudaite(event) {
      console.log("vamos a agrgar");
      console.log(this.nombre);
      console.log(event.charCode);
      if (event.charCode == "13") {
        console.log("presiono Enter");
        const nuevoEstudiante = {
          nombre: this.nombre,
          apellido: "Solo"
        };
        this.miarreglo.unshift(nuevoEstudiante);//principio
        
      } else {
        console.log("no presiono Enter");
      }
    },

    agregarEstudaite2() {
    console.log('Vamos a agregar')
    const nuevoEstudiante={
      nombre:this.nombre,
      apellido: 'Solo'
    }
    this.miarreglo.push(nuevoEstudiante)//final
    }
  },
});

// function busqueda(miarreglo,nombre){
//   if(miarreglo.nombre==nombre){
//     return nombre;
//   }else{
//     busqueda(miarreglo[+1])
//   }
// }

console.log(arreglo);

app.mount("#miaplicacion2");

// function insertarEstudiante(estudiante){

// }

// function insertarEstudiante({nombre}){

// }
