$(document).ready(function(){
    $('#numb-heroes').keyup(function(){
      var numHeroes = $(this).val();  
      var urlAPI = `https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=${numHeroes}&apikey=7e99323b2679072c3e1119052f1aca13&hash=779d449f29c113e00feddbada3e680af`;
      var contentHTML = "";

      if(numHeroes >= 57){  
        alert("Por favor, informar número menor que 57!");
        $('#marvel-row').html(contentHTML);
      }else{
      $.get(urlAPI, function(res){
        var items = res.data.results;
        items.forEach(function(hero){
            var url = hero.urls[0].url;  
            contentHTML += `
                <div class="item">
                    <a href="${url}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
                    </a>
                    <h3 class="title">${hero.name}</h3>
                </div>
            `;
        });
        $('#marvel-row').html(contentHTML);
      });
    }; 
    });
  })