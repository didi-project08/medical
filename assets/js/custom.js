/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 *
 */

"use strict";

document.addEventListener("DOMContentLoaded",function(){
  var optionsRADIAL = {
      series: [75],
      chart: {
      height: 250,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -180,
        endAngle: 180,
        dataLabels:{
          name: {
            show: false
          },
          show:true,
          value:{
            fontSize:'25px'
          }
        },
        hollow: {
          size: '60%',
        },
          track: {
            background: '#F64E60',

          },
      },

    },

    fill:{
      type:'solid',
      colors:'#0BB783'
    },
    stroke: {
      lineCap: 'round'
    },
    labels: [''],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), optionsRADIAL);
    chart.render();
  
    
  
    var optionsX = {
      series: [{
        name: "Desktops",
        data: [300, 600, 900, 1800 , ]
    }],
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
        size: 5,
        strokeColors: '#2874fc87',
        strokeWidth: 20,
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    grid: {
      padding: {
          left: 16
       }
    },
    xaxis: {
      tickPlacement: 'between',
      categories: ['Quartal1', 'Quartal2', 'Quartal3', 'Quartal4',],
    },

    };

    var chartx = new ApexCharts(document.querySelector("#chartx"), optionsX);
    chartx.render();
  
    
  
    var options = {
      series: [{
      data: [1300, 1000, 500, 1200, 1200, 1200, 1680 ]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth:'40%',
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },fill: {
        colors: "#0BB783",
      },
    xaxis: {
      categories: ['xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx'],
    }
    };

    var charty = new ApexCharts(document.querySelector("#charty"), options);
    charty.render();
  
  
  
    var optionsf = {
      series: [{
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx', 'xxxx'],
    },
    fill: {
      opacity: 1
    },

    };

    var chartx = new ApexCharts(document.querySelector("#chartf"), optionsf);
    chartx.render();
  
  
    var optionsv = {
      series: [10000, 5000, 3000, 2000, 3000],
      height: 250,
      chart: {
      type: 'donut',
    },plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
        labels: {
          show: false,
          name: {
            show: true,
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
            formatter: function (val) {
              return val
            }
          },
          value: {
            show: true,
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: undefined,
            offsetY: 16,
            formatter: function (val) {
              return val
            }
          },
          total: {
            show: false,
            showAlways: false,
            label: 'Total',
            fontSize: '22px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            color: '#373d3f',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b
              }, 0)
            }
          }
        }
      },      
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke:{
    width:0,
    lineCap: 'round',

  }
  };

  var chartv = new ApexCharts(document.querySelector("#chartv"), optionsv);
  chartv.render();

  var optionsD = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['xx', 'xxxxx', 'xxxxxx', 'xxxxx', 'xxxxx'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],dataLabels: {
    enabled: false
  },stroke:{
    width:0
  }
  };

  var chartD = new ApexCharts(document.querySelector("#chartd"), optionsD);
  chartD.render();
}) 