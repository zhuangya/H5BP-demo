var neoRender = function(ids, local) {
  $.each(ids, function(i) {

    var targetDom = document.getElementById(ids[i]);
    var holderDom = document.getElementById('tpl-' + ids[i]);
    var template = '';

    if(!holderDom) throw "There is no such element on the page";
    template = holderDom.innerHTML;

    targetDom.innerHTML = Mustache.render(template, local);
  });
};

$(function() {
  $.getJSON('./mock.json', function(mock) {
    neoRender(['header', 'content', 'favs'], mock);
  });
  $('#header').on('click', '#alertSign', function() {
    $('#header').find('hgroup').toggle();
  });
});
