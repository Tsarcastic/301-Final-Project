'use strict';

(function(module) {

  const katas = {};
  // LOAD AND RENDER
  const successCallback = function(data) {
    localStorage.setItem('kata', JSON.stringify(data));
    render();
  }

  const errorCallback = function(err) {
    console.error(err);
  }

  function render() {
    let template = Handlebars.compile($('#address-template').html())
    // TODO: Make data global
    let data = JSON.parse(localStorage.getItem('kata'));
    let randKatas = [];
    console.log(randKatas);
    for(let i = 0; i < 3; i++) {
      randKatas.push(data[Math.floor(Math.random() * ((data.length -1) - 0)) + 0])
    }
    console.log(randKatas);
    $('#katas').html(template({
      kata: randKatas
    }))
  }

  katas.getKatas = () => {
    if (localStorage.length === 0) {
      $.getJSON('/data/katas.json')
        .then(successCallback, errorCallback);
    } else {
      render();
    }
  }

  // $('#main').siblings().hide();
  katas.getKatas();
  module.katas = katas;

})(window);
