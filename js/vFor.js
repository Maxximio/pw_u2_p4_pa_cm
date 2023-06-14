var b = {
  nombre: "Carlos",
  apellido: "Montalvo",
  edad: 23,
  telefono: "0980673336"
};

const arreglo = [b];

const app = Vue.createApp({
  data() {
    return {
      miarreglo: arreglo,

      nombre: '',
      apellido: '',
      edad: null,
      telefono: ''
    };
  },
  methods: {

    ingresar(){
      
      const nuevoEstudiante={
        nombre:this.nombre,
        apellido:this.apellido,
        edad:this.edad,
        telefono:this.telefono
      }
      this.miarreglo.push(nuevoEstudiante)
        
        this.nombre= '',
        this.apellido= '',
        this.edad= null,
        this.telefono= ''

    }
  },
});

console.log(arreglo);

app.mount("#miaplicacion2");
