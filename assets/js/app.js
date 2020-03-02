$(function($) {
    "use strict";

    // Calendar
    $('.calendar-1').calendar();

    // News ticker
    $('#ticker').tickerme();

    // slick slider
    $('.site-slider').slick({
        autoplay: true,
        infinite: true,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: 'Prev',
        nextArrow: 'Netx',
        lazyLoad: 'ondemand',
    });

    // JS Chart
    var background = {
        type: 'linearGradient',
        x0: 0,
        y0: 0,
        x1: 0,
        y1: 1,
        colorStops: [{ offset: 0, color: '#d2e6c9' },
                     { offset: 1, color: 'white' }]
    };

    $('#jqChart').jqChart({
        title: { text: '' },
        legend: { title: '' },
        border: { strokeStyle: 'transparent' },
       
        animation: { duration: 1 },
        shadows: {
            enabled: true
        },
        series: [
            {
                type: 'pie',
                fillStyles: ['#418CF0', '#FCB441', '#E0400A', '#056492'],
                labels: {
                    stringFormat: '%.1f%%',
                    valueType: 'percentage',
                    font: '15px sans-serif',
                    fillStyle: 'black'
                },
                explodedRadius: 5,
                explodedSlices: [0],
                data: [['JSC', 140], ['SSC', 122], ['HSC', 97]],
                labelsPosition: 'outside',
                labelsAlign: 'circle', 
                labelsExtend: 15,
                leaderLineWidth: 2,
                leaderLineStrokeStyle: 'green'
            }
        ]
    });
});

// Event counter
document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date(2020, 3-1, 15).getTime() / 1000) + (86400 * 2) + 1;
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)
  
    // Start the countdown
    .start()
  
    // Do something when the countdown ends
    .ifEnded(() => {
        console.log('The countdown has ended!');
    });

    
});
  
// Easy pagination
$('#photoPaginate').easyPaginate({
    paginateElement: '.gallery-img',
    elementsPerPage: 9,
    effect: 'climb',
    firstButtonText: 'Frist',
    lastButtonText: 'Last',
    prevButtonText: 'Previous',
    nextButtonText: 'Next',
});

// Easy pagination
$('#videoPaginate').easyPaginate({
    paginateElement: '.gallery-img',
    elementsPerPage: 9,
    effect: 'climb',
    firstButtonText: 'Frist',
    lastButtonText: 'Last',
    prevButtonText: 'Previous',
    nextButtonText: 'Next',
});

// FancyBox JS
$('[data-fancybox="gallery"]').fancybox({});

// SweetAlert JS
// swal({
//     icon: 'info',
//     title: 'Oops..',
//     text: 'The site is upgrading. To know more contact with developer!',
//     timer: 3000
// })

// JSC Bar Chart JS
var ctx = document.getElementById('jscChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2020', '2019', '2018', '2017', '2016'],
        datasets: [{
            label: 'The percentage is',
            data: [97, 95, 80, 87, 82],
            backgroundColor: [
                'rgba(30, 120, 33, 0.3)',
                'rgba(70, 160, 73, 0.2)',
                'rgba(30, 120, 33, 0.3)',
                'rgba(70, 160, 73, 0.2)',
                'rgba(30, 120, 33, 0.3)'
            ],
            borderColor: [
                'rgba(30, 120, 33, 1)',
                'rgba(70, 160, 73, 1)',
                'rgba(30, 120, 33, 1)',
                'rgba(70, 160, 73, 1)',
                'rgba(30, 120, 33, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// SSC Bar Chart JS
var ctx = document.getElementById('sscChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2020', '2019', '2018', '2017', '2016'],
        datasets: [{
            label: 'The percentage is',
            data: [89, 79, 83, 91, 80],
            backgroundColor: [
                'rgba(30, 120, 33, 0.3)',
                'rgba(70, 160, 73, 0.2)',
                'rgba(30, 120, 33, 0.3)',
                'rgba(70, 160, 73, 0.2)',
                'rgba(30, 120, 33, 0.3)'
            ],
            borderColor: [
                'rgba(30, 120, 33, 1)',
                'rgba(70, 160, 73, 1)',
                'rgba(30, 120, 33, 1)',
                'rgba(70, 160, 73, 1)',
                'rgba(30, 120, 33, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// HSC Bar Chart JS
var ctx = document.getElementById('hscChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2020', '2019', '2018', '2017', '2016'],
        datasets: [{
            label: 'The percentage is',
            data: [75, 50, 57, 66, 43],
            backgroundColor: [
                'rgba(30, 120, 33, 0.3)',
                'rgba(70, 160, 73, 0.2)',
                'rgba(30, 120, 33, 0.3)',
                'rgba(70, 160, 73, 0.2)',
                'rgba(30, 120, 33, 0.3)'
            ],
            borderColor: [
                'rgba(30, 120, 33, 1)',
                'rgba(70, 160, 73, 1)',
                'rgba(30, 120, 33, 1)',
                'rgba(70, 160, 73, 1)',
                'rgba(30, 120, 33, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});