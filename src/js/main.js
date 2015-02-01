/*
* kickoff countdown
* Author: @mrwigster / trulycode.com
*/
(function (e) {
    e.fn.countdown = function (t, n) {
    function i() {
        eventDate = Date.parse(r.date) / 1e3;
        currentDate = Math.floor(e.now() / 1e3);
        if (eventDate <= currentDate) {
            n.call(this);
            clearInterval(interval)
        }
        seconds = eventDate - currentDate;
        days = Math.floor(seconds / 86400);
        seconds -= days * 60 * 60 * 24;
        hours = Math.floor(seconds / 3600);
        seconds -= hours * 60 * 60;
        minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
        hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
        minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
        seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
        if (r["format"] == "on") {
            days = String(days).length >= 2 ? days : "0" + days;
            hours = String(hours).length >= 2 ? hours : "0" + hours;
            minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
            seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
        }
        if (!isNaN(eventDate)) {
            thisEl.find(".days").text(days);
            thisEl.find(".hours").text(hours);
            thisEl.find(".minutes").text(minutes);
            thisEl.find(".seconds").text(seconds)
        } else {
            alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
            clearInterval(interval)
        }
    }
    var thisEl = e(this);
    var r = {
        date: null,
        format: null
    };
    t && e.extend(r, t);
    i();
    interval = setInterval(i, 1e3)
    }
    })(jQuery);
    $(document).ready(function () {
    function e() {
        var e = new Date;
        e.setDate(e.getDate() + 60);
        dd = e.getDate();
        mm = e.getMonth() + 1;
        y = e.getFullYear();
        futureFormattedDate = mm + "/" + dd + "/" + y;
        return futureFormattedDate
    }
    $("#countdown").countdown({
        date: "1 February 2015 18:30:00", // kickoff date and time
        format: "on"
    });
});

// ranking toggle
var open = $('ul#item'),
    a = $('div.items').find('ul');

console.log(a.hasClass('active'));

open.click(function(e){
    e.preventDefault();
    var $this = $(this),
        speed = 400;
        easing = 'swing';
    if($this.hasClass('active') === true) {
        $this.removeClass('active').next('ul.description').slideUp(speed, easing);
    } else if(a.hasClass('active') === false) {
        $this.addClass('active').next('ul.description').slideDown(speed, easing);
    } else {
        a.removeClass('active').next('ul.description').slideUp(speed, easing);
        $this.addClass('active').next('ul.description').delay(speed).slideDown(speed, easing);
    }
});

// smooth scrolling anchor links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500, 'easeInOutExpo');
        return false;
      }
    }
  });
});