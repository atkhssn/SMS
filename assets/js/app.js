$(function($) {
    "use strict";

    // Calendar
    $('.calendar-1').calendar();

    // News ticker
    $('#ticker').tickerme();

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
                labelsPosition: 'outside', // inside, outside
                labelsAlign: 'circle', // circle, column
                labelsExtend: 15,
                leaderLineWidth: 2,
                leaderLineStrokeStyle: 'green'
            }
        ]
    });

    // Coundown js
    var cd = new Countdown({
        cont: document.querySelector('.containera'),
        date: 1993468400000,
        outputTranslation: {
            
            day: 'Days',
            hour: 'Hours',
            minute: 'Minutes',
            second: 'Seconds',
        },
        endCallback: null,
        outputFormat: 'week|day|hour|minute|second',
    });
    cd.start();

    
});

document.addEventListener('DOMContentLoaded', () => {

    // // Unix timestamp (in seconds) to count down to
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
  