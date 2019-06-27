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


  numbers = [...Array(91).keys()].splice(1)
  let selected = [];

  // Making a grid of numbers
  for(var i = 0; i < 25; i++) {
    shuffleArray(numbers)
    selected.push(numbers.pop());
  }

  table = $('#bingo_table')

  for(var i = 0; i < 5; i++) {
    line = $('<tr>')
    for (var j = 0; j < 5; j ++) {
      line.append($('<td>').text(selected.pop()))
    }
    table.append(line)
  }

  console.log(selected)
});
