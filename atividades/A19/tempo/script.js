const inputCep  = document.querySelector('[name=cep]');
const city      = document.querySelector('#city');
const temp      = document.querySelector('span');
const apiKey    = '6df33ebdb798553965a8382723d1f15f';


function setPositionUrl(cityName, stateName) {
    var url;
    
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},br&appid=${apiKey}&units=metric`;
    calculateWeather(url);
}

function calculateWeather(url) {
    fetch(url)
    .then((dados) => {
      return dados.json();
    })
    .then((dados) => {
      city.innerHTML = `${dados.name}:`;
      temp.innerHTML = dados.main.temp;
    })
    .catch(error => {
      city.innerHTML = `CEP incorreto`;
      temp.innerHTML = `-`;
    })
  }


inputCep.addEventListener('focusout', event => {
    fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
    .then(resposta => resposta.json())
    .then(dados => {
        var cityName = dados.localidade;
        var stateName = dados.uf;
        setPositionUrl(cityName, stateName);
    })
    .catch(error => {
      city.innerHTML = `CEP incorreto`;
      temp.innerHTML = `-`;
    })
});