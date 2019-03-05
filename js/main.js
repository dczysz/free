$('.fingerprint').click(function(event) {
  event.preventDefault();
  $('body')[0].style.transition =  'background-color .5s';
  $('body')[0].classList.remove('bg-light');
  $('body')[0].classList.add('bg-dark');
  $('.container').fadeOut(500, 'linear', function() {
    window.location.href = event.target.href;
  });
});

/*
  When the user scrolls down, hide the navbar.
  When the user scrolls up, show the navbar
*/
const MIN_SCROLL_POS = $('nav').height() + $('header').height() + 30;
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".navbar")[0].style.top = "0";
  } else if (currentScrollPos > MIN_SCROLL_POS) {
    $(".navbar")[0].style.top = "-56px";
  }
  prevScrollpos = currentScrollPos;
}


/* Current format

  <div class="card" style="background-color: ${site.color} ">
    <div class="card-header">
      <h3 class="card-title text-center"> ${site.name} </h3>
    </div>
    <div class="card-body">
      <h5 class="card-title"> ${site[n]   key}   </h5>
      <p class="card-text">   ${site[n]   value} </p>
      <h5 class="card-title"> ${site[n+1] key}   </h5>
      <p class="card-text">   ${site[n+1] value} </p>
    </div>
  </div>
*/

const CARD_OPACITY = 'aa',
      CARD_W_IMG_OPACITY = '88';

function loadCards(array) {
  // Shuffle sites in random order
  fisherYatesShuffle(array);

  for (let i = 0; i < array.length; i++) {
    let site = array[i],
        card = document.createElement('a'),
        header = document.createElement('div'),
        logo = document.createElement('img'),
        headerText = document.createElement('h3'),
        body = document.createElement('div'),
        dataTitle,
        dataText;

    // Build card
    card.classList.add('card');
    // Add more info url if exists
    if (site.url != '') {
      card.style.cursor = 'pointer';
      card.href = site.url;
      card.target = '_blank'
    }
    // Set styles
    card.style.borderWidth = 'medium';
    card.style.borderColor  = site.color + (site.logo? CARD_W_IMG_OPACITY : CARD_OPACITY);
    header.style.background = site.color + (site.logo? CARD_W_IMG_OPACITY : CARD_OPACITY);
    header.style.borderRadius = 0;
    header.classList.add('text-light');
    headerText.style.textShadow = '2px 2px 4px #000'

    // Populate header
    header.classList.add('card-header', 'text-center');
    headerText.classList.add('card-title', 'text-center', 'mb-0');
    headerText.innerHTML = site.name;
    if (site.logo) {
      logo.src = site.logo;
      header.appendChild(logo);
    }
    header.appendChild(headerText);

    body.classList.add('card-body');

    // Add all descriptive key-values to cards
    for (let key = 0; key < Object.keys(site).length; key++) {
      // Ignore keys specified below
      if ( site[Object.keys(site)[key]] != site.name
        && site[Object.keys(site)[key]] != site.color
        && site[Object.keys(site)[key]] != site.url
        && site[Object.keys(site)[key]] != site.logo ) {
          dataTitle = document.createElement('h5');
          dataTitle.classList.add('card-title', 'mb-1');
          dataTitle.innerHTML = capitalize(Object.keys(site)[key]);
          dataText = document.createElement('div');
          dataText.innerHTML = site[Object.keys(site)[key]];
          dataText.classList.add('card-text');
          body.appendChild(dataTitle);
          body.appendChild(dataText);
      }
    }

    card.appendChild(header);
    card.appendChild(body);

    $('.card-columns')[0].appendChild(card);
  }
}

function fisherYatesShuffle(array) {
  var i = array.length;
  if (i == 0) return false;

  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = array[i];
     var tempj = array[j];
     array[i] = tempj;
     array[j] = tempi;
   }
   return array;
}

// Capitalize string_with_underscores
function capitalize(str) {
  let words = str.split('_');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

String.prototype.addCommas = function() {
  return this.replace(/,/g, ', ');
}
