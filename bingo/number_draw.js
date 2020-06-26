function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

$(function(){
  var url = new URL(window.location.href);
  var secret = url.searchParams.get('secret');
  if (secret) {
    Math.seedrandom(secret);
  }


  table = $('#number_draw_table')

  for(var i = 0; i < 15; i++) {
    line = $('<tr>')
    for (var j = 0; j < 5; j++) {
      line.append($(`<td id="number_${(i + 1) + (15 * j)}">`).text((i + 1) + (15 * j)))
    }
    table.append(line)
  }

  numbers = [...Array(76).keys()].splice(1)
  console.log(numbers)
  shuffleArray(numbers)

  $("#draw_number").click(function() {
    number = numbers.pop()
    $("#number_drew").text(number)
    $("#number_" + number).css("backgroundColor", "aqua")
    histLine = $('<li>').text(number)
    $('#history').append(histLine)
    console.log(numbers)
  })

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
