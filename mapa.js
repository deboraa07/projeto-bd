let map;
let marker;

// Por enquanto inutilizado, mas pode ser utilizado
// pra deletar os marcadores no futuro
let newMarkers = [];

let center = {
  lat: -6.888463202449027,
  lng: -38.558930105104125
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  // Marcador principal
  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
  });

  loadAllMarkers(map);

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', ()=>{
      map.setCenter(marker.position);
  });

  const botao = document.getElementById('btn');
  botao.addEventListener('click', () => {
    salvar(marker, map);
  })
}

function addMarker(evt){
    marker.setPosition(evt.latLng);
}

// Carrega todos os marcadores já existentes no banco de dados
// assim que o site é aberto.
async function loadAllMarkers(map) {

  const pontos = await fetch("//localhost:3003/pontos",{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  }).then(response => response.json());  
  // Cria um marcador para cada ponto no banco de dadosS
  for (let i = 0; i < pontos.length; i++) {
    createNewMarker(
      map,
      pontos[i].lat,
      pontos[i].lng,
      pontos[i].nome
      )
  }
}

function createNewMarker(map, lat, lng, name) {

  let pos = {
    lat: lat,
    lng: lng
  };

  // Maracdor dos pontos no mapaS
  markerPoints = new google.maps.Marker({
    map: map,
    position: pos,
    draggable: false,
    title: name
  });

  // Salva os marcadores em uma array, mas por enquanto
  // Não serve pra nada (Util pra remover os marcadores no futuro)
  newMarkers.push(markerPoints);
  return marker;
}

async function salvar(marker, map){

    const obj = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('desc').value,
        local: document.getElementById('local').value,
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng()
    };

    await fetch("//localhost:3003/pontos",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
     });

     // Cria um marcador novo toda vez que o usuário adiciona um ponto
     // no banco de dados.
    createNewMarker(
      map,
      obj.lat,
      obj.lng,
      obj.nome
    )

    if(document.getElementById('nome').value == "" ||
       document.getElementById('nome').value.length < 1) {
        // Caso o campo de nome esteja com um valor inválido
        alert( "Preencha campo NOME corretamente!" );

    } else if(document.getElementById('desc').value== "" ||
              document.getElementById('desc').value.length < 1) {
        // Caso o campo de nome esteja com um valor inválido
        alert( "Preencha campo DESCRIÇÃO corretamente!" );

    } else if(document.getElementById('local').value== "" ||~
              document.getElementById('local').value.length < 1) {
        // Caso o campo de nome esteja com um valor inválido
        alert( "Preencha campo LOCAL corretamente!" );

     // Todos os campos foram preechidos corretamente
    } else alert("Salvo com sucesso");
  };