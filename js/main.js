/* Current format

  <div class="card" style="background-color: ${site.color};">
    <div class="card-header">
      <h3 class="card-title text-center">${site.name}</h3>
    </div>
    <div class="card-body">
      <h5 class="card-title">Data</h5>
      <p class="card-text">${site.data}</p>
      <h5 class="card-title">Uses</h5>
      <p class="card-text">${site.uses}</p>
    </div>
  </div>
*/

// Shuffle sites in random order
fisherYatesShuffle(sites);

for (let i = 0; i < sites.length; i++) {
  let site = sites[i],
      col = $('.card-columns')[0],
      card = document.createElement('div'),
      header = document.createElement('div'),
      headerText = document.createElement('h3'),
      body = document.createElement('div'),
      dataTitle = document.createElement('h5'),
      dataText = document.createElement('p'),
      dataTextNode = document.createTextNode(site.data),
      usesTitle = document.createElement('h5'),
      usesText = document.createElement('p'),
      usesTextNode = document.createTextNode(site.uses);

  // Build card
  card.classList.add('card');
  // Add more info url if exists
  if (site.info != '') {
    card.style.cursor = 'pointer';
    card.onclick = function() { window.location.href = site.info; }
  }
  card.style.background = site.color;

    header.classList.add('card-header');
      headerText.classList.add('card-title', 'text-center', 'mb-0');
      headerText.innerHTML = site.name;
    header.appendChild(headerText);

    body.classList.add('card-body');
      dataTitle.classList.add('card-title');
      dataTitle.innerHTML = 'Data';
      dataText.classList.add('card-text');
      dataText.appendChild(dataTextNode);

      usesTitle.classList.add('card-title');
      usesTitle.innerHTML = 'Uses';
      usesText.classList.add('card-text');
      usesText.appendChild(usesTextNode);
    body.appendChild(dataTitle);
    body.appendChild(dataText);
    body.appendChild(usesTitle);
    body.appendChild(usesText);

  card.appendChild(header);
  card.appendChild(body);
  col.appendChild(card);
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
