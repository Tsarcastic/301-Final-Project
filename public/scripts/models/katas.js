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

  let randKatas = [];

  function render() {
    let template = Handlebars.compile($('#address-template').html())
    // TODO: Make data global
    let data = JSON.parse(localStorage.getItem('kata'));
    console.log(randKatas);
    for (let i = 0; i < 3; i++) {
      randKatas.push(data[Math.floor(Math.random() * ((data.length - 1) - 0)) + 0])
    }
    console.log(randKatas);
    $('#katas').html(template({
      kata: randKatas
    }))
  }

  katas.getKatas = () => {
    if (localStorage.getItem('kata') === null) {
      $.getJSON('/data/katas.json')
        .then(successCallback, errorCallback);
    } else {
      render();
    }
  }

  katas.kataPreview = () => {
    $('#katas').on('click', 'div', function() {
      this.clicked;
      console.log($(this).index())
      console.log(randKatas[$(this).index()].link);
      if (this.clicked === true) {
        $('iframe').css({display: 'none'})
        console.log('Hide!');
        this.clicked = false;
      } else {
        $('iframe').css({display: 'block'})
        $('#show-kata').attr('src', randKatas[$(this).index()].link);
        console.log('Show');
        this.clicked = true;
      }
    });
  }

  // $('#main').siblings().hide();
  katas.getKatas();
  katas.kataPreview();

  module.katas = katas;

})(window);
