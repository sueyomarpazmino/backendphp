document.querySelector("#selectCiudad").addEventListener('click', buscarCiudad());

function buscarCiudad(){
  console.log('dentro de la funcion');
  const constante1 = new XMLHttpRequest();
  constante1.open('GET','./data-1.json',true);
  constante1.send();
  constante1.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.responseText)
      let datos =  JSON.parse(this.responseText);
      console.log(datos);
      for(let item for datos){
        console.log('entre al for')
      }
    }
  }
}


/* Funcion para el evento click del boton mostrar todos */
$(document).ready(function () {

  $("#mostrarTodos").click(function(){
    $.ajax({
      url: "./buscador.php",
      success: function(response) {
        console.log(response);
        var jsonData = JSON.parse(response);

        $(".colContenido").empty();
        for (var i = 0; i < jsonData.length; i++) {
          if (jsonData) {
            $(".colContenido").append(`<div class="row" style="padding-top:8px;  background-color: rgba(180, 242, 242, 0.8)">
                                    <div class="col s5">
                                      <img id="logo" src="img/home.jpg">
                                    </div>
                                    <div class="col s5 text-align:left">
                                      <b>Dirección:</b> ${jsonData[i].Direccion} <br>
                                      <b>Ciudad:</b> ${jsonData[i].Ciudad} <br>
                                      <b>Telefono:</b> ${jsonData[i].Telefono} <br>
                                      <b>Código Postal:</b> ${jsonData[i].Codigo_Postal} <br>
                                      <b>Tipo:</b> ${jsonData[i].Tipo} <br><br>
                                      <b><p style="color:red; font-size:1.2rem">Precio: </b> ${jsonData[i].Precio} </p> <br>
                                    </div>
                                    <div class="col s2" style="margin-top:150px">
                                      <b>VER MAS ...</b><br>
                                    </div>
                                    </div> <br>`);
      }
      }
    },
      error: function (err) {
        console.log(err);
      }
    });
  });

});









/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();
buscarCiudad();
