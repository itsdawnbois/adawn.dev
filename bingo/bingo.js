function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function goToBoard() {
  window.location.href = "?secret=" + $('#secret').val()
}

$.expr[':'].textEquals = $.expr.createPseudo(function (arg) {
  return function (elem) {
    return $(elem).text().match("^" + arg + "$");
  };
});

$(function () {
  $("#auto_number_selector").on("submit", function (event) {
    event.preventDefault();

    let number = $('#number');
    $("td:textEquals('" + number.val() + "')").click();
    number.val('');
  });

  var url = new URL(window.location.href);
  var secret = url.searchParams.get('secret');
  if (secret) {
    Math.seedrandom(secret);
  }

  let numbers = Array.from({ length: 75 }, (_, index) => 1 + index)

  shuffleArray(numbers); // <- Shuffling a little
  shuffleArray(numbers); // <- Shuffling more a little

  // Making a grid of numbers
  let selected = Array.from({ length: 25 }, () => shuffleArray(numbers) || numbers.pop());

  table = $('#bingo_table')

  for (let i = 0; i < 5; i++) {
    line = $('<tr>')
    for (let j = 0; j < 5; j++) {
      shuffleArray(selected)
      line.append($('<td>').text(selected.pop()))
    }
    table.append(line)
  }

  document.querySelectorAll("#bingo_table td").forEach((item) => {
    item.addEventListener("click", function (event) {
      if (event.target.style.backgroundColor == "aqua") {
        event.target.style.backgroundColor = "white";
      } else {
        event.target.style.backgroundColor = "aqua";
      }
    });
  });
});
