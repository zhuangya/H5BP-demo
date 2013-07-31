var neoRender = function(id, local) {
  local = local || mock;
  var targetDom = document.getElementById(id);
  var holderDom = document.getElementById('tpl-' + id);
  var template = '';

  //if(!holderDom) throw new DomNotExistException(id);

  //TODO: how to handle error?
  try {
    template = holderDom.innerHTML;
  } catch(exception) {
    console.log(exception);
    throw new DomNotExistException(id);
  }

  targetDom.innerHTML = Mustache.render(template, local);
};

function DomNotExistException(id) {
  this.value = id;
  this.message = " does not exist";
  this.toString = function() {
    return this.value + this.message;
  };
}

$(function() {
  $.getJSON('./mock.json', function(mock) {
    neoRender('header', mock);
    neoRender('content', mock);

    //TODO: when error occurs, report it, and keep going
    neoRender('damn', mock);

    neoRender('sidebar', mock);
  });
});
