let name = window.location.pathname.match(/\/\w+.html/)[0];
name = name.substring(1, name.length - 5);
name = name.charAt(0).toUpperCase() + name.slice(1);

window.onload = function() {
  // Find corresponding site object
  for (let i = 0; i < sites.length; i++) {
    if (sites[i].name == name) {

      let site = sites[i],
          h1 = document.getElementById('name'),
          body = document.getElementsByTagName('div')[1];

      h1.innerHTML = site.name;

    }
  }
}
