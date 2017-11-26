$(document).ready(function () {

  $(document).on("click", ".new", function renderNewGame () {
      var name = $('<input type="form" value="name"/>');
      var enterGame = $('<input type="button" value="enterGame"/>')
      var back = $('<input type="button" value="back"/>')
      $( this ).replaceWith(name, enterGame, back);
      $('.join').remove();

  })
    $(document).on("click", ".join", function renderJoinGame () {
        var name = $('<input type="form" value="name"/>');
        var code = $('<input type="form" value="code"/>');
        var joinGame = $('<input type="button" value="joinGame"/>')
        var back = $('<input type="button" value="back"/>')
        $( this ).replaceWith(name, code, joinGame, back);
        $('.new').remove();

    })
});

