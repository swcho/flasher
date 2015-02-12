
var data = [{
    no: 1,
    word: 'Word1',
    description: ''
}, {
    no: 1,
    word: 'Word1',
    description: ''
}, {
    no: 1,
    word: 'Word1',
    description: ''
}, {
    no: 1,
    word: 'Word1',
    description: ''
}];

function show(index) {
    $('#idNo').text(index + 1);
    $('#idTotal').text('/' + data.length);

    var d = data[index];
    var $word = $('<div class="word">').text(d.word);
    var $description = $('<div class="description">').text(d.description);
    $('#idContent').append($word).append($description);
    $word.css('left', -$word.outerWidth());
    setTimeout(function() {
        $word.css('left', 24);
        $word.css('opacity', 1);
    }, 0);
}


$(document).ready(function() {

    show(0);
});


