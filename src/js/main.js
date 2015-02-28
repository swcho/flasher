
// http://pheo.co.kr/pheodic/35281

var data = [{
    no: 1,
    word: '가각전제(街角剪除) - 도로모퉁이의 길이',
    description: '도로의 교차부분에서 시야를 확보하고 차선의 교통을 원활하게 하기 위해서 교차부분에 면하는 가각(街角)의 돌출부 일부를 완곡하게 만드는 것을 말한다.'
}, {
    no: 1,
    word: '가건물(假建物)',
    description: '가건물(假建物) 가건물이란 건물로서의 구조나 형태 및 용도를 구비하지 못한 임시적인 구조물로서 그 해체가 용이한 상태의 구축물을 의미한다. 건축법에서는 가건물을 가설건축물이라고 표시하고 있다.'
}, {
    no: 1,
    word: '가격저감율(價格低減率)',
    description: '가격저감율(價格低減率) 경매기일에 허가할 매수가격의 신고가 없는 때의 신경매에서 최저경매가격을 낮추는 비율을 의미한다. 일반적으로는 20%의 가격저감율을 적용하나 법원에 따라서는 30%의 가격저감율을 적용하는 경우도 있다. 기일변경의 경우나 또는 낙찰불허가에 의한 신입찰이나 재입찰시에는 가격저감을 하지 않는다.'
}, {
    no: 1,
    word: '가격형성요인(價格形成要因)',
    description: '가격형성요인(價格形成要因) 가격형성요인이라 함은 부동산의 객관적인 가치에 영향을 미치는 지역요인 및 개별요인을 말한다.'
}];


var startTimer = (function() {
    var $gage = $('#idTimerGage');
    var height = 240;
    var total = 5 * 10;
    var interval;
    var hi = height / total;
    function startTimer(cb) {
        $gage.height(height);
        interval = setInterval(function() {
            var height = $gage.height();
            if (height == 0) {
                clearInterval(interval);
                cb();
            } else {
                $gage.height(height - hi);
            }
        }, 100);
    }

    return startTimer;
}());

function show(index) {
    $('#idNo').text((index + 1) % data.length);
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
    startTimer(function() {
        $('#idShield').css('opacity', 0);
        setTimeout(function() {
            $word.remove();
            $description.remove();
            $('#idShield').css('opacity', 1);
            show(index + 1);
        }, 5*1000);
    });
}


$(document).ready(function() {

    $('.button').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });

    show(0);
});


