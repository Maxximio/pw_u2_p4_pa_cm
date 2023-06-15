const app = Vue.createApp({
  data() {
    return {
      resultado: "",
    };
  },
  methods: {
    agregar(valor) {
      this.resultado = this.resultado + valor;
    },

    calcular() {
      let cadena = this.resultado;

      let numeros = [];
      let operador = "+";
      let numeroActual = "";
      let resultado = 0;

      for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        if (!isNaN(caracter) || caracter === ".") {
          numeroActual += caracter;
        } else {
          let numero = parseFloat(numeroActual);
          numeros.push(numero);
          numeroActual = "";

          if (operador === "+") {
            resultado += numero;
          } else if (operador === "-") {
            resultado -= numero;
          } else if (operador === "x") {
            resultado *= numero;
          } else if (operador === "÷") {
            resultado /= numero;
          }

          operador = caracter;
        }
      }

      // Calcular la última operación
      let ultimoNumero = parseFloat(numeroActual);
      if (!isNaN(ultimoNumero)) {
        numeros.push(ultimoNumero);

        if (operador === "+") {
          resultado += ultimoNumero;
        } else if (operador === "-") {
          resultado -= ultimoNumero;
        } else if (operador === "x") {
          resultado *= ultimoNumero;
        } else if (operador === "÷") {
          resultado /= ultimoNumero;
        }
      }

      //return resultado;
      this.resultado = resultado;
    },

    eliminarElemento() {
      this.resultado = "";
    },
  },
});

app.mount("#calculadora");
