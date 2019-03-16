/*
  Fade to bg-dark before linking to tracking site
-------------------------------------------------- */
$('.fingerprint').click(function(event) {
  event.preventDefault();
  $('body')[0].style.transition =  'background-color .5s';
  $('body')[0].classList.remove('bg-light');
  $('body')[0].classList.add('bg-dark');
  $('.container').fadeOut(500, 'linear', function() {
    window.location.href = event.target.href;
  });
});

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

// Set all links to open new window and send no referer
window.onload = () => {
  setTimeout(() => {
    let links = $('.card-columns a');
    for (let link of links) {
      link.target = '_blank';
      link.rel = 'noreferrer';
    }
  }, 1500);
};


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

const CARD_HIGH_OPACITY = 'aa',
      CARD_LOW_OPACITY = '66';

/*
  Add cards to card-columns div

  @param {array} array : Array of site objects
  @param {options} object : Object of following optional keys:
    object = {
      'shuffle': bool - Shuffle cards or keep in alphabetical order
      'name'  : bool - Show 'name' property of site in card header
    }
------------------------------------------------------------ */
function loadCards(array, options = { shuffle: true, title: false, name: false }) {
  // Reset default values if object passed in but doesn't contain all values
  if ( !options.hasOwnProperty('shuffle')) options.shuffle = true;
  if ( !options.hasOwnProperty('title'))   options.title   = false;
  if ( !options.hasOwnProperty('name'))    options.name    = false;

  // Shuffle sites in random order
  if (options.shuffle) fisherYatesShuffle(array);

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
    }
    // Set styles
    card.style.borderWidth = 'medium';
    card.style.borderColor  = site.color + CARD_HIGH_OPACITY;
    header.style.background = `radial-gradient(${site.color + CARD_LOW_OPACITY}, ${site.color + CARD_HIGH_OPACITY})`;
    header.style.borderRadius = 0; // Not working if set using CSS
    header.classList.add('text-dark');

    // Populate header
    header.classList.add('card-header', 'text-center');
    headerText.classList.add('card-title', 'text-center', 'mb-0');
    headerText.innerHTML = site.name;
    if (site.logo) {
      logo.src = site.logo;
      logo.onerror = function() {
        this.style.display = 'none';
      }
      header.appendChild(logo);
    }

    if ( options.title
      || (site.hasOwnProperty('logo') && (site.logo.match(/-icon/) || site.logo === ''))
      || site.hasOwnProperty('icon')
      || !site.hasOwnProperty('logo'))
        header.appendChild(headerText);
    else {
      logo.style.marginBottom = 0;
      logo.style.maxHeight = '50px';
    }

    body.classList.add('card-body');

    // Add all descriptive key-values to cards
    for (let key = 0; key < Object.keys(site).length; key++) {
      // Ignore keys specified below
      if ( (site[Object.keys(site)[key]] != site.name
              || options.name)
            && site[Object.keys(site)[key]] != site.color
            && site[Object.keys(site)[key]] != site.url
            && site[Object.keys(site)[key]] != site.logo
            && site[Object.keys(site)[key]] != site.icon) {
        dataTitle = document.createElement('h5');
        dataTitle.classList.add('card-title', 'mb-1');

        // If no name in title, put it in card body
        if (site[Object.keys(site)[key]] == site.name) {
          dataTitle.innerHTML = site[Object.keys(site)[key]];
          dataTitle.style.textAlign = 'center';

          body.appendChild(dataTitle);
        } else {
          dataTitle.innerHTML = capitalize(Object.keys(site)[key]);
          dataText = document.createElement('div');
          dataText.innerHTML = site[Object.keys(site)[key]];
          dataText.classList.add('card-text');

          body.appendChild(dataTitle);
          body.appendChild(dataText);
        }


      }
    }

    card.appendChild(header);
    if (body.children.length) card.appendChild(body);

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

/*
  Capitalize string_with_underscores
---------------------------------------- */
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
