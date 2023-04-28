async function mostrar() {
    const pontos = await fetch("//localhost:3003/pontos",{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());    
    const div = document.querySelector('#mostrar');
  
    pontos.forEach(ponto => {
      const pontoNoFront = document.createElement('div');
      pontoNoFront.setAttribute("class", "div-de-exibicao");
  
      const nome = document.createElement('p');
      nome.setAttribute("class", "exibicao");
      nome.textContent = ponto.nome;
      pontoNoFront.appendChild(nome);
  
      const descricao = document.createElement('p');
      descricao.setAttribute("class", "exibicao");
      descricao.textContent = ponto.descricao;
      pontoNoFront.appendChild(descricao);
  
  
      const local = document.createElement('p');
      local.setAttribute("class", "exibicao");
      local.textContent = ponto.local;
      pontoNoFront.appendChild(local);
  
      const lat = document.createElement('p');
      lat.setAttribute("class", "exibicao");
      lat.textContent = ponto.lat;
      pontoNoFront.appendChild(lat);
  
      const lng = document.createElement('p');
      lng.setAttribute("class", "exibicao");
      lng.textContent = ponto.lng;
      pontoNoFront.appendChild(lng);
  
      div.appendChild(pontoNoFront);
    });
  }
  mostrar();
  