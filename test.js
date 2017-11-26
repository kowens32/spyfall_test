$(document).ready(function () {

  $(document).on("click", ".new", function renderNewGame () {
      var Name = $('<input type="form" value="Name"/>');
      var enterGame = $('<input type="button" value="enterGame"/>')
      $("body").append(Name);
      $("body").append(enterGame);

  })
});

