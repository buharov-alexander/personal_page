const myFullpage = new fullpage('#fullpage', {
  menu: '#menu',
  anchors: ['Home', 'Biography', 'Skills'],
  sectionsColor: ['#f2f7f5', '#1BBC9B', '#7E8F7C'],
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Home', 'Biography', 'Skills']
});

window.addEventListener('load', function() {
  const loader = document.querySelector('#loader');
  loader.className += ' loader-hidden';
});
