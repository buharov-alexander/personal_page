const myFullpage = new fullpage('#fullpage', {
  menu: '#menu',
  anchors: ['Home', 'Biography', 'Skills'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Home', 'Biography', 'Skills']
});

window.addEventListener('load', function() {
  const loader = document.querySelector('#loader');
  loader.className += ' loader-hidden';
});
