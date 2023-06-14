const app = Vue.createApp({
  data() {
    return {
      personaje: {
        nombre: "",
        clase: "",
        vida: 0,
        exp: 0,
      },

      lista: [
        //   {
        //   nombre:"",
        //   clase:"",
        //   vida:0,
        //   exp:0
        // }
      ],
    };
  },
  methods: {
    addPersonaje() {
      // const {nombre,clase,vida,exp} = this.personaje
      
      const nuevoPersonaje = {
        nombre: this.personaje.nombre,
        clase: this.personaje.clase,
        vida: this.personaje.vida,
        exp: this.personaje.exp,
      };

      this.lista.push(nuevoPersonaje); //final
      this.personaje = {
        nombre: "",
        clase: "",
        vida: 0,
        exp: 0,
      }
    },
  },
});

// function busqueda(miarreglo,nombre){
//   if(miarreglo.nombre==nombre){
//     return nombre;
//   }else{
//     busqueda(miarreglo[+1])
//   }
// }

app.mount("#miaplicacion2");
