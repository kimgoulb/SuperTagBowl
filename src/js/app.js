// Countdown to kickoff
var kickoff = new Date('02/01/2015 6:30 PM'),
    _second = 1000,
    _minute = _second * 60,
    _hour = _minute * 60,
    _day = _hour * 24,
    timer;

function showRemaining() {
    var now = new Date();
    var distance = kickoff - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'EXPIRED!';

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('countdown').innerHTML = days + 'days ';
    document.getElementById('countdown').innerHTML += hours + 'hrs ';
    document.getElementById('countdown').innerHTML += minutes + 'mins ';
    document.getElementById('countdown').innerHTML += seconds + 'secs';
}

timer = setInterval(showRemaining, 1000);
