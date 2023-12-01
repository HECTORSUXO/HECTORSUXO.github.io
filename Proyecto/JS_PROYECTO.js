function mostrarDescripcion(titulo, descripcion) {
    var descripcionDiv = document.getElementById("descripcionEjercicio");
    descripcionDiv.innerHTML = "<strong>" + titulo + ":</strong> " + descripcion;

    descripcionDiv.style.display = "block";

    setTimeout(function () {
      descripcionDiv.style.display = "none";
    }, 3000);
  }

  function calcularIMC() {
    var nombre = document.getElementById("nombre").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;
    var peso = document.getElementById("peso").value;
    var estatura = document.getElementById("estatura").value;

    if (nombre && fechaInicio && edad && genero && peso && estatura) {
      var imc = peso / ((estatura / 100) * (estatura / 100));

      alert("¡Hola " + nombre + "! Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));

      if (imc < 18.5) {
        alert("Tu IMC indica que estás en la categoría de peso bajo.");
      } else if (imc >= 18.5 && imc < 24.9) {
        alert("¡Excelente! Tu IMC está en la categoría de peso normal.");
      } else if (imc >= 25 && imc < 29.9) {
        alert("Tu IMC indica que estás en la categoría de sobrepeso.");
      } else {
        alert("Tu IMC indica que estás en la categoría de obesidad. Consulta a un profesional de la salud para obtener asesoramiento.");
      }
    } else {
      alert("Por favor, completa todos los campos del formulario.");
    }
  }

  var registros = [];

  function agregarRegistro() {
    var dia = prompt("¿Qué día realizaste la actividad?");
    var actividad = prompt("¿Qué actividad realizaste?");
    var tiempo = prompt("¿Cuánto tiempo dedicaste a la actividad?");

    var registro = "Día: " + dia + ", Actividad: " + actividad + ", Tiempo: " + tiempo;
    registros.push(registro);
    alert("Registro agregado:\n" + registro);
  }

  function mostrarRegistros() {
    alert("Registros:\n" + registros.join("\n"));
  }

  function enviarFormulario(event) {
    event.preventDefault();
    alert('¡Formulario enviado con éxito!');
  }
