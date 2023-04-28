let map;
let marker;

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', ()=>{
      map.setCenter(marker.position);
  });

  const botao = document.getElementById('btn');
  botao.addEventListener('click', () => {
    salvar(marker);
})
}

function addMarker(evt){
    marker.setPosition(evt.latLng);
}

async function salvar(marker){

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
    if(document.getElementById('nome').value== "" ||document.getElementById('nome').value.length < 1)
    {
     alert( "Preencha campo NOME corretamente!" );
    }
    else if(document.getElementById('desc').value== "" ||document.getElementById('desc').value.length < 1)
     {
     alert( "Preencha campo DESCRIÇÃO corretamente!" );
    }
    else if(document.getElementById('local').value== "" ||document.getElementById('local').value.length < 1)
    {
     alert( "Preencha campo LOCAL corretamente!" );
    }
    else{
      alert("Salvo com sucesso");
    }};