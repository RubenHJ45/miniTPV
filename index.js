
window.onload = inicio;

var productos = [
   { producto: "AGUA", precio: 0.50 },
   { producto: "COCACOLA", precio: 1.0 },
   { producto: "CHUCHES", precio: 0.50 },
   { producto: "MIXTO", precio: 1.5 },
   { producto: "EMPANADA", precio: 2.0 },
   { producto: "SALCHIPAPAS", precio: 1.5 },
   { producto: "BOMBA+REFRES", precio: 2.0 },
   { producto: "IMPERIAL", precio: 2.0 },
   { producto: "CAFE", precio: 1.0 },
   { producto: "PERRITO", precio: 1.5 },
   { producto: "BOLSA-CONGUI", precio: 0.5 },
   { producto: "FANTA", precio: 1.0 },
   { producto: "PEPINILLO", precio: 0.5 },
   { producto: "VARIOS", precio: 1.0 },
   { producto: "BURGUER XL", precio: 2.50 },
   { producto: "BURGUER", precio: 2.0 },
   { producto: "MILANESA", precio: 2.0 },
   { producto: "PANQUEQUE", precio: 2.0 },
];

  var contar = 1;var contaragua = 1;var contarmixto = 1;var contargomi = 1;var contarempa = 1;var contarsalchi = 1;var contarbom = 1;var contarimp = 1;var contarCafe = 1;var contarPerrito = 1;var contarbolsita = 1;var contarfanta = 1;var contarpepin = 1;var contarvarios = 1;var contarHambur = 1;var contarCarne = 1; var contmila = 1; var conextra = 1;
   // VARIABLES DE CONTEO
   var subcoca = 0;var subagua = 0;var submix = 0;var subemp = 0;var subsal = 0;var subgom = 0;var subbom = 0;
   var subimp = 0;var subcafe = 0;var subPerri = 0;var subbolsita = 0;var subfanta = 0;var subpepin = 0;var subvario = 0;var subham = 0;var subcarne = 0; var submila = 0; var subextra = 0;

   var tuti = 0;

   //VARIABLES A MOSTRAR EN TIKET
   var cocaa = ''; var mixtoo = ''; var aguaa = ''; var gomin = ''; var empa = ''; var salchi = ''; var bomb = ''; var imperi = ''; var cafee = ''; var perro = ''; var bolsaa = ''; var fantaa = ''; var pepinn = '';var varioo = ''; var hambur = ''; var carne = ''; var milaa = '';

   var lista = [];
   var dias_semana = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"];

   // crea un nuevo objeto `Date`
   var today = new Date();
   // `getDate()` devuelve el día del mes (del 1 al 31)
   var day = today.getDate();
   // `getMonth()` devuelve el mes (de 0 a 11)
   var month = today.getMonth() + 1;
   // `getFullYear()` devuelve el año completo
   var year = today.getFullYear();

function inicio() {
   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="agua()"><img src="./img/agua.jpg"><h4>AGUA</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="coca()"><img src="./img/cocacola.jpg"><h4>COCACOLA</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="mixto()"><img src="./img/mixto.jpg"><h4>MIXTO</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="gominolas()"><img src="./img/chuches.jpg"><h4>CHUCHES</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="empanada()"><img src="./img/empanada.jpg"><h4>EMPANADAS</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="salchipapa()"><img src="./img/salchipapas.jpg"><h4>SALCHIPAPAS</h4></button>`);
   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="bomba()"><img src="./img/BOMBA+REFRES.jpg"><h4>BOMBA+REFR</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="burguer()"><img src="./img/burguer.jpg"><h4>BURGUER</h4></button>`);
   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="burguerNormal()"><img src="./img/burguer.jpg"><h4>HAMB C/Q</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="imperial()"><img src="./img/imperial.jpg"><h4>IMPERIAL</h4></button>`);
   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="cafe()"><img src="./img/cafe.jpg"><h4>CAFE</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="perrito()"><img src="./img/perrito.jpg"><h4>PERRITO</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="bolsa()"><img src="./img/bolsa-congui.jpg"><h4>BOLSITA</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="fanta()"><img src="./img/fanta.jpg"><h4>FANTA</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="pepino()"><img src="./img/pepinillo.jpg"><h4>PEPINILLO</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="vario()"><img src="./img/varios.jpg"><h4>VARIOS ${productos[13].precio}€</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="mila()"><img src="img/mila.jpg"><h4>MILANESA</h4></button>`);

   document.querySelector(".botones").insertAdjacentHTML(`beforeend`,
      `<button class="boton" onclick="extra()"><img src="img/extras.jpg"><h4>PANQUEQUE ${productos[17].precio}€</h4></button>`);

 
   //BOTONES DE DESCAGA

   // document.querySelector(".usuarios").insertAdjacentHTML(`beforeend`, `<button id="des" onclick="descarga()">DESCARGAR</button>`);

   document.querySelector(".usuarios").insertAdjacentHTML(`beforeend`, `<a href="ventaonline.php" ><button  class="opciones">BORRAR</button></a>`);

};
function coca() {

   subcoca = contar * productos[1].precio;

   cocaa = document.querySelector(".coca").innerHTML = `${contar} ${productos[1].producto} ${productos[1].precio}€ => ${subcoca}€\n`;
   contar++;
   total();
};
function burguer() {

   subham = contarHambur * productos[14].precio;

   hambur = document.querySelector(".burguer").innerHTML = `${contarHambur} ${productos[14].producto} ${productos[14].precio}€ => ${subham}€\n`;
   contarHambur++;
   total();
};
function burguerNormal() {
   subcarne = contarCarne * productos[15].precio;

   carne = document.querySelector(".carne").innerHTML = `${contarCarne} ${productos[15].producto} ${productos[15].precio}€ => ${carne}€\n`;
   contarCarne++;
   total();
};
function agua() {

   subagua = contaragua * productos[0].precio;

   aguaa = document.querySelector(".agua").innerHTML = `${contaragua} ${productos[0].producto} ${productos[0].precio}€ => ${subagua}€\n`;
   contaragua++;
   total()

};

function mixto() {
   submix = contarmixto * productos[3].precio;
   mixtoo = document.querySelector(".mixto").innerHTML = `${contarmixto} ${productos[3].producto} ${productos[3].precio}€ => ${submix}€\n`;
   contarmixto++;
   total()
};
function gominolas() {
   subgom = contargomi * productos[2].precio;
   gomin = document.querySelector(".gomis").innerHTML = `${contargomi} ${productos[2].producto} ${productos[2].precio}€ => ${subgom}€\n`;
   contargomi++;
   total()
};
function empanada() {
   subemp = contarempa * productos[4].precio;
   empa = document.querySelector(".empa").innerHTML = `${contarempa} ${productos[4].producto} ${productos[4].precio}€ => ${subemp}€\n`;
   contarempa++;
   total()
};
function salchipapa() {
   subsal = contarsalchi * productos[5].precio;
   salchi = document.querySelector(".salchipa").innerHTML = `${contarsalchi} ${productos[5].producto} ${productos[5].precio}€ => ${subsal}€\n`;
   contarsalchi++;
   total()
};
function bomba() {
   subbom = contarbom * productos[6].precio;
   bomb = document.querySelector(".bombi").innerHTML = `${contarbom} ${productos[6].producto} ${productos[6].precio}€ => ${subbom}€\n`;
   contarbom++;
   total()
};
function imperial() {
   subimp = contarimp * productos[7].precio;
   imperi = document.querySelector(".imperial").innerHTML = `${contarimp} ${productos[7].producto} ${productos[7].precio}€ => ${subimp}€\n`;
   contarimp++;
   total()
};
function cafe() {
   subcafe = contarCafe * productos[8].precio;
   cafee = document.querySelector(".cafe").innerHTML = `${contarCafe} ${productos[8].producto} ${productos[8].precio}€ => ${subcafe}€\n`;
   contarCafe++;
   total()
};
function perrito() {
   subPerri = contarPerrito * productos[9].precio;
   perro = document.querySelector(".perrito").innerHTML = `${contarPerrito} ${productos[9].producto} ${productos[9].precio}€ => ${subPerri}€\n`;
   contarPerrito++;
   total()
};
function bolsa() {
   subbolsita = contarbolsita * productos[10].precio;
   bolsaa = document.querySelector(".bolsita").innerHTML = `${contarbolsita} ${productos[10].producto} ${productos[10].precio}€ => ${subbolsita}€\n`;
   contarbolsita++;
   total()
};
function fanta() {
   subfanta = contarfanta * productos[11].precio;
   pepinn = document.querySelector(".fanta").innerHTML = `${contarfanta} ${productos[11].producto} ${productos[11].precio}€ => ${subfanta}€\n`;
   contarfanta++;
   total();

};
function pepino() {
   subpepin = contarpepin * productos[12].precio;
   pepinn = document.querySelector(".pepin").innerHTML = `${contarpepin} ${productos[12].producto} ${productos[12].precio}€ => ${subpepin}€\n`;
   contarpepin++;
   total();

};
function vario() {
   subvario = contarvarios * productos[13].precio;
   varioo = document.querySelector(".varios").innerHTML = `${contarvarios} ${productos[13].producto} ${productos[13].precio}€ => ${subvario}€\n`;
   contarvarios++;
   total();

};
function mila() {
   submila = contmila * productos[16].precio;
   milaa = document.querySelector(".mila").innerHTML = `${contarvarios} ${productos[16].producto} ${productos[16].precio}€ => ${submila}€\n`;
   contmila++;
   total();

};
function extra() {
   subextra = conextra * productos[17].precio;
   milaa = document.querySelector(".mila").innerHTML = `${conextra} ${productos[17].producto} ${productos[17].precio}€ => ${subextra}€\n`;
   conextra++;
   total();
}
function recoger(valor) {

   resultado = document.getElementById("nombre1").innerHTML = valor;


};
// SUMA DE ARTICULOS
function total() {

   tuti = subagua + subcoca + submix + subgom + subemp + subsal + subbom + subimp + subcafe + subPerri + subbolsita + subfanta + subpepin + subvario + subham + subcarne + submila + subextra;

   document.querySelector(".tuti").innerHTML = `<h2 class="tot">${tuti}€</h2>`;
   document.getElementById("inporte").value = tuti;
   


};
function descarga() {
   lista.push(cocaa + aguaa + mixtoo + gomin + empa + salchi + bomb + imperi + cafee + perro + bolsaa + fantaa + pepinn + varioo + hambur + carne + milaa);

   guardarArchivo(`${resultado} -- ${dias_semana[today.getDay()]} -- ${month}/${day}/${year}\n\n${lista}\n <<<-- TOTAL A PAGAR ${tuti} € -->>>`, `${resultado}_DEBE.txt`);

   // location.reload();
};
// function pagado() {
//    lista.push(cocaa + aguaa + mixtoo + gomin + empa + salchi + bomb + imperi + cafee + perro + bolsaa + fantaa + pepinn + varioo + subham);
//    totalVentasDia.push(tuti);
//    guardarArchivo(`${resultado} -- ${dias_semana[today.getDay()]} -- ${month}/${day}/${year}\n\n${lista}\n <<<-- TOTAL A PAGADO ${tuti} € -->>> `, `${resultado}_PAGADO.txt`);

//    // location.reload();

// };
//CREAR ARCHIVOS 
function guardarArchivo(contenido, nombre) {
   const a = document.createElement("a");
   const archivo = new Blob([contenido], { type: 'text/plain' });
   const url = URL.createObjectURL(archivo);
   a.href = url;
   a.download = nombre;
   a.click();
   URL.revokeObjectURL(url);
};

// function borrar() {
   
//    const fs = require("fs");
//    fs.unlinkSync(`C:/Users/RUBEN/Desktop/PROGRAMACION/tienda_culto/cuentas_debit/POLI_DEBE.txt`);
//    alert("el  archivo es a borrado");
// }

