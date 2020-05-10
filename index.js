const sections = ['section-1', 'section-2', 'section-3'];

const myFullpage = new fullpage('#fullpage', {
  menu: '#menu',
  anchors: ['Home', 'Biography', 'Skills'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Home', 'Biography', 'Skills'],
  afterLoad: function (origin, destination, direction) {
    const backend = document.getElementById('backend-element');
    backend.classList.remove(sections[origin.index]);
    backend.classList.add(sections[destination.index]);  
  }
});

window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  loader.classList.add('loader-hidden');

  const homeImage = document.getElementById('home-image');
  homeImage.classList.add('scale');
});
