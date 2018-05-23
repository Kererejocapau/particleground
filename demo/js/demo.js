document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#e73981',
    lineColor: '#00adad'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#e73981',
    lineColor: '#00adad'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
