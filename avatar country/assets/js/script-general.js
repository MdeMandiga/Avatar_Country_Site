let albumes = new Array('Thoghts of No Tomorrow', 'Schlacht', 'Avatar', 'Black Waltz','Hail the Apocalypse','Feathers & Flesh','Avatar Country');
        let toft = new Array('Bound to the Wall', 'And I Bid You Farewell', 'Last One Standing','War Song','The Willy','My Shining Star','My Lie','Stranger','The Skinner','Sane?','Slave Hive Meltdown')
        let schlacht = new Array('Schlacht','Wildflower','All Which Is Black','4 AM Breakdown','As It Is','All Hail the Queen','When Your Darkest Hour Comes','I Still Hate You','One/One/One/Three','Die With Me','The End of Our Ride','Letters From Neverend')
        let avatar = new Array('Queen of Blades','The Great Pretende','Shattered Wing','Reload','Out of Our Minds','Deeper Down','Revolution of Two','PigFucker','Roadkill','Lullaby (Death All Over)')
        let black_waltz = new Array('Let Us Die','Torn Apart','Ready for the Ride','In Napalm','Black Waltz','Blod','Let it Burn','One Touch','Paint Me Red','Smells Like a Freakshow','Use Your Tongue')
        let hail_the_apocalypse = new Array('Hail the Apocalypse','What I Dont Know','Death of Sound','Vultures Fly','Bloody Angel','Murderer','Tsar Bomba','Puppet Show','Get in Line','Something in the Way','Tower','Use And Abuse')
        let feathers_flesh = new Array('Regre','House of Eternal Hunt','The Eagle Has Landed','New Land','Tooth, Beak & Claw','For the Swarm','Fiddlers Farewell','One More Hill','Black Waters','Night Never Ending','Pray the Sun Away','When the Snow Lies Red','Raven Wine','Sky Burial','I ve Got Something in My Front Pocket for You','Det Är Alldeles Försent')
        let avatar_country = new Array('Glory to Our King','Legend of the King','The King Welcomes You to Avatar Country','Kings Harvest','The King Wants You','The King Speaks','A Statue of the King','King After King','Silent Songs of the King Pt. 1: Winter Comes When the King Dreams of Snow','Silent Songs of the King Pt. 2: The Kings Palace');




// Index
function index_ingles(){
  $.get({
    url: 'assets/txt/inicio_eng.html',
    dataType: 'html',
    success: function(respuesta){
        document.getElementById('indexcontent').innerHTML = respuesta
    },
    error: function(){
        console.warn('No se pudo traducir')
    }
  });
}
function index_espanol(){
  $.get({
    url: 'assets/txt/inicio_esp.html',
    dataType: 'html',
    success: function(respuesta){
        document.getElementById('indexcontent').innerHTML = respuesta
    },
    error: function(){
        console.warn('No se pudo traducir')
    }
  });
}

//Carrousel-swiperx+ habilitaciones
function swiperaAtivate() {
var swiper = new Swiper(".swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          color: "#FFF0",
          
        },
        effect: "cube",
        loop: true,
      });
    }   
    //fancybox
function fancyboActivate() {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
}

const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('exampleModalLabel')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});
// Insertar footer
  $.get({
    url: 'assets/txt/footer.html',
    dataType: 'html',
    success: function(respuesta){
        document.getElementById('footeraqui').innerHTML = respuesta
    },
    error: function(){
        console.warn('NO SE ENCONTRO EL FOOTER')
    }
  });


//idiomas


//conciertos
function redireccion() {
  alert('Seras redirigido a https://www.ticketmaster.cl/, ¿Estas seguro de abandonar la pagina?')
}
function redireccion_ingles() {
  alert('You will be redirected to https://www.ticketmaster.cl/, Are you sure to leave the page?')
}
function conciertos_ingles(){
  $.get({
    url: 'assets/txt/conciertos_ingles.html',
    dataType: 'html',
    success: function(respuesta){
        document.getElementById('concierto').innerHTML = respuesta
    },
    error: function(){
        console.warn('No se pudo traducir')
    }
  });
}
function conciertos_espanol(){
  $.get({
    url: 'assets/txt/conciertos_esp.html',
    dataType: 'html',
    success: function(respuesta){
        document.getElementById('concierto').innerHTML = respuesta
    },
    error: function(){
        console.warn('No se pudo traducir')
    }
  });
}


//Tienda
let ropa = document.getElementById('ropa')
let album = document.getElementById('album')
let accesorios = document.getElementById('accesorios')
productos = document.getElementById('productos')
function categoria_todas(){
    productos.innerHTML = '<div class="col-md-4"><h4 id="ropa" class=" text-nowrap overflow-hidden rojo text-center">Camiseta del rey Jonas</h4><a href="detalles-producto.html"><img class="btn btn-warning img-fluid" src="assets/img/Golden_King_front_1800x1800.webp" alt="moneda_avaro" ></a><p class="amarillo text-gesta-medium text-center">9.550 CLP</p></div><div  id="ropa" class="col-md-4 "><h4 class=" text-nowrap overflow-hidden rojo text-center">Gorra Avatar Vertigo</h4><img class="btn btn-warning img-fluid" src="assets/img/VertigoSnapbackHatside_1800x1800.webp" alt="moneda_avaro"><p class="rojo text-center text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">Abre latas Avatar</h4><img class="btn btn-warning img-fluid" src="assets/img/COA_bottle_opener_keychain_1800x1800.webp" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">Parche de avatar country</h4><img class="btn btn-warning img-fluid" src="assets/img/AC_COA_small_patch_1800x1800.webp" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">Collar con la sigla Avatar</h4><img class="btn btn-warning img-fluid" src="assets/img/ANecklace_1800x1800.webp" alt="collar"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">Moneda Avaro </h4><img class="btn btn-warning img-fluid" src="assets/img/moneda.webp" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">CD album Avatar Country</h4><img class="btn btn-warning img-fluid" src="assets/img/album_avatar_c.jpg" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">CD Album Black Waltz</h4><img class="btn btn-warning img-fluid" src="assets/img/album_black-w.webp" alt="collar"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">CD Album Feathers & Flesh</h4><img class="btn btn-warning img-fluid" src="assets/img/album_FF.webp" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div>' 
}
function categoria_ropa(){
  productos.innerHTML = '<div class="row" id="productos"><div class="col-md-4"><h4 id="ropa" class=" text-nowrap overflow-hidden rojo text-center">Camiseta del rey Jonas</h4><a href="detalles-producto.html"><img class="btn btn-warning img-fluid" src="assets/img/Golden_King_front_1800x1800.webp" alt="moneda_avaro" ></a><p class="amarillo text-gesta-medium text-center">9.550 CLP</p></div><div  id="ropa" class="col-md-4 "><h4 class=" text-nowrap overflow-hidden rojo text-center">Gorra Avatar Vertigo</h4><img class="btn btn-warning img-fluid" src="assets/img/VertigoSnapbackHatside_1800x1800.webp" alt="moneda_avaro"><p class="rojo text-center text-gesta-medium">9.550 CLP</p></div>'
}
function categoria_accesorios(){
  productos.innerHTML = '<h4 class=" text-nowrap overflow-hidden amarillo ">Abre latas Avatar</h4>    <img class="btn btn-warning img-fluid" src="assets/img/COA_bottle_opener_keychain_1800x1800.webp" alt="moneda_avaro">    <p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4">    <h4 class=" text-nowrap overflow-hidden amarillo ">Parche de avatar country</h4>    <img class="btn btn-warning img-fluid" src="assets/img/AC_COA_small_patch_1800x1800.webp" alt="moneda_avaro">    <p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4">    <h4 class=" text-nowrap overflow-hidden amarillo ">Collar con la sigla Avatar</h4>    <img class="btn btn-warning img-fluid" src="assets/img/ANecklace_1800x1800.webp" alt="collar">    <p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4">    <h4 class=" text-nowrap overflow-hidden amarillo ">Moneda Avaro </h4>    <img class="btn btn-warning img-fluid" src="assets/img/moneda.webp" alt="moneda_avaro">    <p class="amarillo text-gesta-medium">9.550 CLP</div>'
}
function categoria_album() {
  productos.innerHTML = '<div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">CD album Avatar Country</h4><img class="btn btn-warning img-fluid" src="assets/img/album_avatar_c.jpg" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">CD Album Black Waltz</h4><img class="btn btn-warning img-fluid" src="assets/img/album_black-w.webp" alt="collar"><p class="amarillo text-gesta-medium">9.550 CLP</p></div><div class="col-md-4"><h4 class=" text-nowrap overflow-hidden amarillo ">CD Album Feathers & Flesh</h4><img class="btn btn-warning img-fluid" src="assets/img/album_FF.webp" alt="moneda_avaro"><p class="amarillo text-gesta-medium">9.550 CLP</p></div>'
}
//Albumes
// offcanvas

function offCanvaSong_1(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[0]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/glory.mp3"></audio></div>'
}
function offCanvaSong_2(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[1]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/legend_of_the_king.mp3"></audio></div>'
}
function offCanvaSong_3(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[2]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/the_king_welcomes_you.mp3"></audio></div>'
}
function offCanvaSong_4(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[3]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/king_harvest.mp3"></audio></div>'
}
function offCanvaSong_5(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[4]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/the_king_wants_you.mp3"></audio></div>'
}
function offCanvaSong_6(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[5]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/the_king_speak.mp3"></audio></div>'
}
function offCanvaSong_7(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[6]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/a_statue_from_king.mp3"></audio></div>'
}
function offCanvaSong_8(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[7]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/king_after_king.mp3"></audio></div>'
}
function offCanvaSong_9(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[8]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/songofking_part1.mp3"></audio></div>'
}
function offCanvaSong_10(){
  titulocanva = document.getElementsByClassName('offcanvas-title')[0]
  mensajecanva = document.getElementsByClassName('offcanvas-body')[0]
  titulocanva.textContent = avatar_country[9]
  mensajecanva.innerHTML = '<div class="col-md-12 text-start mt-3"><audio controls src="assets/audio/songofking_part2.mp3"></audio></div>'
}