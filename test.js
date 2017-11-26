$(document).ready(function () {

  $(document).on("click", ".main", function renderNewGame () {
      var enterName = $('<input type="form" value="enterName"/>');
      $("body").append(enterName);
      var enterGame = $('<input type="button" value="enterGame"/>');
      $("body").append(enterGame);

  })
});

