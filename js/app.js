console.log("componente vue");
console.log(Vue);

// Options API
const app = Vue.createApp({
  // template: `
  // <h1>Hola Mundo</h1>
  // <p>Desde Vue.js</p>
  // // <p>{{1+1}}</p>
  // `

//   data es palabra reservada
  data() {
    return {
        nombre: 'Carlos',
        apellido: 'Montalvo', 
        mensaje: 'Hola Mundo 2 desde Vue.js'
    };

    
  },

  methods:{
    cambiarNombre(){

        if(this.nombre=='Paulo'){
            console.log('cambiarN');
            this.nombre = 'Carlos'
        }else{
            console.log('cambiarN');
            this.nombre = 'Paulo'
        }        

        console.log(IIIIIIII)
        console.log(IIIIIIII)
        console.log(II)
        console.log(II)
        console.log(II)
        console.log(II)
        console.log(II)
        console.log(IIIIIIII)
        console.log(IIIIIIII)


    },
    cambiarApellido(){
        
        if(this.apellido=='Aldaz'){
            console.log('cambiarN');
            this.apellido = 'Montalvo'
        }else{

        
        console.log('cambiarA');
        this.apellido = 'Aldaz'
    }

    }
  }
  
 
});

app.mount("#miaplicacion");
