

Apex.tooltip = {
  theme: 'dark'
}


  /*
      ==============================
      |    @Options Charts Script   |
      ==============================
  */

  /*
      ======================================
          Visitor Statistics | Options
      ======================================
  */

  
  // Total Visits

  var spark1 = {
      chart: {
          id: 'unique-visits',
          group: 'sparks2',
          type: 'line',
          height: 80,
          sparkline: {
              enabled: true
          },
          dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 2,
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
      tooltip: {
          x: {
              show: false
          },
          y: {
              title: {
                  formatter: function formatter(val) {
                      return '';
                  }
              }
          }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 45,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }

      ]
  }

  // Paid Visits

  var spark2 = {
      chart: {
        id: 'total-users',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
             chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
             chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
  }
  

  /*
      ===================================
          Unique Visitors | Options
      ===================================
  */

  var d_1options1 = {
      chart: {
      id : 'chart1',
        height: 400,
        type: 'area',
        zoom: {
          enabled: true,
          type: 'xy',
        },
        dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#515365',
            opacity: 0.3,
        }
    },
    colors: ['#357ffa', '#ec4e3f'],
    dataLabels: {
        enabled: false
    },
    legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 10,
            height: 10,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8
          }
    },
    grid: {
      borderColor: '#191e3a',
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Simulated Return',
        data: [12, 19, 3, 5, 2, 3]
    }, {
        name: 'Real Return',
        data: [7, 19, 12, 5, 6, 3]
    }],
    xaxis: {
        type: 'datetime',
        categories: ["2019-11-23", "2019-11-24", "2019-11-25", "2019-11-26", "2019-11-27", "2019-11-28"],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    tooltip: {
      theme: 'dark',
        y: {
            formatter: function (val) {
                return val
            }
        }
    }
  }



     /*
      ===================================
          Unique Visitors | Options
      ===================================
  */

  var d_1options2 = {
    chart: {
        id : 'chart2',
        height: 400,
        type: 'bar',
        toolbar: {
          show: false,
        },
        dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            color: '#515365',
            opacity: 0.3,
        },
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
    },
    colors: ['#8B0000'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'  
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 10,
            height: 10,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8
          }
    },
    grid: {
      borderColor: '#191e3a',
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Portfolio Drawdown',
        data: [12, 19, 3, 5, 2, 3]
    }],

    xaxis: {
        type : 'datetime',
        categories: ["2019-11-23", "2019-11-24", "2019-11-25", "2019-11-26", "2019-11-27", "2019-11-28"],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    tooltip: {
      theme: 'dark',
        y: {
            formatter: function (val) {
                return val
            }
        }
    }
  }

  /*
      ==============================
          Statistics | Options
      ==============================
  */

  // Followers

  var d_1options3 = {
    chart: {
      id: 'sparkline1',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
      name: 'Sales',
      data: [38, 60, 38, 52, 36, 40, 28 ]
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
      min: 0
    },
    colors: ['#1b55e2'],
    tooltip: {
      x: {
        show: false,
      }
    },
    fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [45, 100]
        }
    },
  }

  // Referral

  var d_1options4 = {
    chart: {
      id: 'sparkline1',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
      name: 'Sales',
      data: [ 60, 28, 52, 38, 40, 36, 38]
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
      min: 0
    },
    colors: ['#e7515a'],
    tooltip: {
      x: {
        show: false,
      }
    },
    fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [45, 100]
        }
    },
  }

  // Engagement Rate

  var d_1options5 = {
    chart: {
      id: 'sparkline1',
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    fill: {
      opacity: 1,
    },
    series: [{
      name: 'Sales',
      data: [28, 50, 36, 60, 38, 52, 38 ]
    }],
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    yaxis: {
      min: 0
    },
    colors: ['#009688'],
    tooltip: {
      x: {
        show: false,
      }
    },
    fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [45, 100]
        }
    },
  }

  


  /*
      ==============================
      |    @Render Charts Script    |
      ==============================
  */


  /*
      ======================================
          Visitor Statistics | Script
      ======================================
  */

  // Total Visits
  d_1C_1 = new ApexCharts(document.querySelector("#total-users"), spark1);
  d_1C_1.render();

  // Paid Visits
  d_1C_2 = new ApexCharts(document.querySelector("#paid-visits"), spark2);
  d_1C_2.render();

  /*
      ===================================
          Unique Visitors | Script
      ===================================
  */

  var d_1C_3 = new ApexCharts(
      document.getElementById("uniqueVisits1"),
      d_1options1
  );
  d_1C_3.render();


  var d_1C_4 = new ApexCharts(
      document.getElementById("uniqueVisits2"),
      d_1options2
  );
  d_1C_4.render();




// All data
var market = '{"account_size":{"start":10000,"stop":20000,"step":10000},"risk_profile":{"start":1,"stop":5,"step":2},"_links":{"10000":{"1":{"2019-11-15":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10000,"drawDown":5},"2019-11-16":{"simulatedPortfolioReturn":10010,"realPortfolioReturn":10234,"drawDown":14},"2019-11-17":{"simulatedPortfolioReturn":10444,"realPortfolioReturn":10321,"drawDown":19},"2019-11-18":{"simulatedPortfolioReturn":9820,"realPortfolioReturn":1174,"drawDown":24},"2019-11-19":{"simulatedPortfolioReturn":7582,"realPortfolioReturn":12001,"drawDown":13},"2019-11-20":{"simulatedPortfolioReturn":13074,"realPortfolioReturn":11165,"drawDown":9},"2019-11-21":{"simulatedPortfolioReturn":9208.756516663172,"realPortfolioReturn":13426,"drawDown":23},"2019-11-22":{"simulatedPortfolioReturn":5042,"realPortfolioReturn":18539,"drawDown":6},"2019-11-23":{"simulatedPortfolioReturn":4320,"realPortfolioReturn":11502,"drawDown":9},"2019-11-24":{"simulatedPortfolioReturn":9929.471818488142,"realPortfolioReturn":12089,"drawDown":6},"2019-11-25":{"simulatedPortfolioReturn":13003,"realPortfolioReturn":10022.743211148476,"drawDown":12},"2019-11-26":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10320.460077073458,"drawDown":43},"2019-11-27":{"simulatedPortfolioReturn":9977.342198907456,"realPortfolioReturn":10005.446027365411,"drawDown":3.0522864290932614},"2019-11-28":{"simulatedPortfolioReturn":8654,"realPortfolioReturn":10391.978674776457,"drawDown":87},"2019-11-29":{"simulatedPortfolioReturn":11942,"realPortfolioReturn":10389.779350516423,"drawDown":3},"2019-11-30":{"simulatedPortfolioReturn":10043,"realPortfolioReturn":10422.491372377684,"drawDown":12},"2019-12-01":{"simulatedPortfolioReturn":9570.365392865777,"realPortfolioReturn":10039.869587944777,"drawDown":3.6710997084189954}},"3":{"2019-11-15":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10000,"drawDown":12},"2019-11-16":{"simulatedPortfolioReturn":9182.42736702269,"realPortfolioReturn":11102,"drawDown":15},"2019-11-17":{"simulatedPortfolioReturn":9936.10619902972,"realPortfolioReturn":13270,"drawDown":22},"2019-11-18":{"simulatedPortfolioReturn":8564,"realPortfolioReturn":12780,"drawDown":16},"2019-11-19":{"simulatedPortfolioReturn":6457,"realPortfolioReturn":10000,"drawDown":15},"2019-11-20":{"simulatedPortfolioReturn":9231.579517075888,"realPortfolioReturn":15745,"drawDown":3},"2019-11-21":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":12943,"drawDown":0},"2019-11-22":{"simulatedPortfolioReturn":9473.874095190105,"realPortfolioReturn":14037,"drawDown":7},"2019-11-23":{"simulatedPortfolioReturn":9157.111734553733,"realPortfolioReturn":14027,"drawDown":12},"2019-11-24":{"simulatedPortfolioReturn":9138,"realPortfolioReturn":12975,"drawDown":16},"2019-11-25":{"simulatedPortfolioReturn":9655.240117487872,"realPortfolioReturn":10297.452563092846,"drawDown":35},"2019-11-26":{"simulatedPortfolioReturn":13057,"realPortfolioReturn":9952.877164070705,"drawDown":3.346168226114247},"2019-11-27":{"simulatedPortfolioReturn":19567,"realPortfolioReturn":10328.940893749888,"drawDown":5},"2019-11-28":{"simulatedPortfolioReturn":12758,"realPortfolioReturn":10314.261066635443,"drawDown":24},"2019-11-29":{"simulatedPortfolioReturn":8764,"realPortfolioReturn":10109.959055147365,"drawDown":2.120062658898216},"2019-11-30":{"simulatedPortfolioReturn":12013,"realPortfolioReturn":10246.998698160793,"drawDown":8},"2019-12-01":{"simulatedPortfolioReturn":10473,"realPortfolioReturn":14253.310105864963,"drawDown":6}},"5":{"2019-11-15":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10000,"drawDown":13},"2019-11-16":{"simulatedPortfolioReturn":12000,"realPortfolioReturn":19000,"drawDown":42},"2019-11-17":{"simulatedPortfolioReturn":16852,"realPortfolioReturn":14389,"drawDown":38},"2019-11-18":{"simulatedPortfolioReturn":12374,"realPortfolioReturn":11854,"drawDown":22},"2019-11-19":{"simulatedPortfolioReturn":9024.09396485944,"realPortfolioReturn":10000,"drawDown":21},"2019-11-20":{"simulatedPortfolioReturn":14890,"realPortfolioReturn":12643,"drawDown":24},"2019-11-21":{"simulatedPortfolioReturn":9789.380136310208,"realPortfolioReturn":118042,"drawDown":75},"2019-11-22":{"simulatedPortfolioReturn":8064,"realPortfolioReturn":13200,"drawDown":4},"2019-11-23":{"simulatedPortfolioReturn":9047.227252258986,"realPortfolioReturn":15043,"drawDown":8},"2019-11-24":{"simulatedPortfolioReturn":9809.775388705435,"realPortfolioReturn":10443,"drawDown":18},"2019-11-25":{"simulatedPortfolioReturn":9439.600790412485,"realPortfolioReturn":10170.399255048114,"drawDown":19},"2019-11-26":{"simulatedPortfolioReturn":9198.43610361319,"realPortfolioReturn":9518.510881031205,"drawDown":6.40967906866986},"2019-11-27":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10208.825443708844,"drawDown":44},"2019-11-28":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10424.758106572071,"drawDown":6},"2019-11-29":{"simulatedPortfolioReturn":9396.104837075036,"realPortfolioReturn":9703.934194744412,"drawDown":6.914595635774827},"2019-11-30":{"simulatedPortfolioReturn":9620.046990685385,"realPortfolioReturn":9852.30381466231,"drawDown":5.491349441138222},"2019-12-01":{"simulatedPortfolioReturn":13046,"realPortfolioReturn":10280.381653221895,"drawDown":1.3849719322075618}}},"20000":{"1":{"2019-11-15":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10000,"drawDown":25},"2019-11-16":{"simulatedPortfolioReturn":7360.8938097843,"realPortfolioReturn":12843,"drawDown":31},"2019-11-17":{"simulatedPortfolioReturn":4328,"realPortfolioReturn":18540,"drawDown":89},"2019-11-18":{"simulatedPortfolioReturn":7000,"realPortfolioReturn":12001,"drawDown":0},"2019-11-19":{"simulatedPortfolioReturn":9462.07572312641,"realPortfolioReturn":13027,"drawDown":64},"2019-11-20":{"simulatedPortfolioReturn":9421.767320826133,"realPortfolioReturn":11104,"drawDown":32},"2019-11-21":{"simulatedPortfolioReturn":9535.474892717288,"realPortfolioReturn":15095,"drawDown":15},"2019-11-22":{"simulatedPortfolioReturn":12953,"realPortfolioReturn":16701,"drawDown":99},"2019-11-23":{"simulatedPortfolioReturn":9181.010180482566,"realPortfolioReturn":13094,"drawDown":4},"2019-11-24":{"simulatedPortfolioReturn":9562.518369510013,"realPortfolioReturn":11100,"drawDown":15},"2019-11-25":{"simulatedPortfolioReturn":8900,"realPortfolioReturn":10334.873276311659,"drawDown":18},"2019-11-26":{"simulatedPortfolioReturn":9540,"realPortfolioReturn":10173.076697460237,"drawDown":14},"2019-11-27":{"simulatedPortfolioReturn":12400,"realPortfolioReturn":10351.608775283185,"drawDown":52},"2019-11-28":{"simulatedPortfolioReturn":9758.258257552408,"realPortfolioReturn":9964.659435585501,"drawDown":28},"2019-11-29":{"simulatedPortfolioReturn":12047,"realPortfolioReturn":10114.57578611748,"drawDown":22},"2019-11-30":{"simulatedPortfolioReturn":9704.390227861739,"realPortfolioReturn":9921.843600047529,"drawDown":15},"2019-12-01":{"simulatedPortfolioReturn":8041,"realPortfolioReturn":10203.646202538028,"drawDown":16}},"3":{"2019-11-15":{"simulatedPortfolioReturn":12074,"realPortfolioReturn":12407,"drawDown":19},"2019-11-16":{"simulatedPortfolioReturn":13057,"realPortfolioReturn":11945,"drawDown":52},"2019-11-17":{"simulatedPortfolioReturn":9899.830943049867,"realPortfolioReturn":12094,"drawDown":83},"2019-11-18":{"simulatedPortfolioReturn":12943,"realPortfolioReturn":11943,"drawDown":73},"2019-11-19":{"simulatedPortfolioReturn":11094,"realPortfolioReturn":9064,"drawDown":29},"2019-11-20":{"simulatedPortfolioReturn":9981.85556556532,"realPortfolioReturn":12094,"drawDown":83},"2019-11-21":{"simulatedPortfolioReturn":9531.621517332303,"realPortfolioReturn":11104,"drawDown":43},"2019-11-22":{"simulatedPortfolioReturn":9567,"realPortfolioReturn":12348,"drawDown":20},"2019-11-23":{"simulatedPortfolioReturn":11045,"realPortfolioReturn":12084,"drawDown":14},"2019-11-24":{"simulatedPortfolioReturn":9095.179301635846,"realPortfolioReturn":11047,"drawDown":83},"2019-11-25":{"simulatedPortfolioReturn":9904.592760748172,"realPortfolioReturn":10471.067661919928,"drawDown":93},"2019-11-26":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10013.562845685612,"drawDown":82},"2019-11-27":{"simulatedPortfolioReturn":9400.010374623567,"realPortfolioReturn":9432.61113639684,"drawDown":27},"2019-11-28":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10005.81136178814,"drawDown":42},"2019-11-29":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10029.12021461265,"drawDown":64},"2019-11-30":{"simulatedPortfolioReturn":9189.410927376372,"realPortfolioReturn":9303.374307516517,"drawDown":18},"2019-12-01":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10179.511290343307,"drawDown":54}},"5":{"2019-11-15":{"simulatedPortfolioReturn":12047,"realPortfolioReturn":12315,"drawDown":42},"2019-11-16":{"simulatedPortfolioReturn":8054,"realPortfolioReturn":13405,"drawDown":52},"2019-11-17":{"simulatedPortfolioReturn":12014,"realPortfolioReturn":11105,"drawDown":14},"2019-11-18":{"simulatedPortfolioReturn":13045,"realPortfolioReturn":11230,"drawDown":63},"2019-11-19":{"simulatedPortfolioReturn":9379.185925533113,"realPortfolioReturn":11045,"drawDown":26},"2019-11-20":{"simulatedPortfolioReturn":9783.885107151289,"realPortfolioReturn":17439,"drawDown":19},"2019-11-21":{"simulatedPortfolioReturn":18659,"realPortfolioReturn":12940,"drawDown":24},"2019-11-22":{"simulatedPortfolioReturn":9548,"realPortfolioReturn":13457,"drawDown":77},"2019-11-23":{"simulatedPortfolioReturn":8546,"realPortfolioReturn":15647,"drawDown":12},"2019-11-24":{"simulatedPortfolioReturn":12940,"realPortfolioReturn":12045,"drawDown":94},"2019-11-25":{"simulatedPortfolioReturn":11047,"realPortfolioReturn":10420.49869101192,"drawDown":17},"2019-11-26":{"simulatedPortfolioReturn":9215.74842368304,"realPortfolioReturn":9672.671282397418,"drawDown":33},"2019-11-27":{"simulatedPortfolioReturn":9966.657953086227,"realPortfolioReturn":10346.34982705338,"drawDown":52},"2019-11-28":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10241.877364242286,"drawDown":18},"2019-11-29":{"simulatedPortfolioReturn":9546,"realPortfolioReturn":10185.818865764688,"drawDown":22},"2019-11-30":{"simulatedPortfolioReturn":9316.69833731021,"realPortfolioReturn":9517.443807527201,"drawDown":86},"2019-12-01":{"simulatedPortfolioReturn":10000,"realPortfolioReturn":10305.157158386372,"drawDown":13}}}}}'

var data = JSON.parse(market)

var startAccount = data["account_size"]['start']
var stopAccount = data["account_size"]['stop']
var stepAccount = data["account_size"]['step']


var startrisk = data["risk_profile"]['start']
var stoprisk = data["risk_profile"]['stop']
var steprisk = data["risk_profile"]['step']

document.getElementById('portfolio').setAttribute("min", startAccount)
document.getElementById('portfolio').setAttribute("max", stopAccount)
document.getElementById('portfolio').setAttribute("step", stepAccount)

document.getElementById('risk').setAttribute("min", startrisk)
document.getElementById('risk').setAttribute("max", stoprisk)
document.getElementById('risk').setAttribute("step", steprisk)

function simulPortfolio(label) {
    var simul = []
    label.forEach(function(e) {
        simul.push(data['_links'][portfolioSliderValue][riskSliderValue][e]['simulatedPortfolioReturn'])
    });
    simul = simul.map((x) => parseInt(x,10))
    return simul
}

function realPortfolio(label) {
    var real = []
    label.forEach(function(e) {
        real.push(data['_links'][portfolioSliderValue][riskSliderValue][e]['realPortfolioReturn'])
    });
    real = real.map((x) => parseInt(x,10))
    return real
}

function drawdown(label) {
    var drawdown = [];
    label.forEach(function(e) {
        drawdown.push(data['_links'][portfolioSliderValue][riskSliderValue][e]['drawDown'])
    });

    return drawdown
}


function changePortfolioSize() {
    portfolioSliderValue = document.getElementById('portfolio').value
    riskSliderValue = document.getElementById('risk').value
    label = Object.keys(data["_links"][portfolioSliderValue][riskSliderValue])
    ApexCharts.exec('chart1', "updateOptions", {
      xaxis: {
        categories: label
      }
    });

    ApexCharts.exec('chart1', "updateSeries", [
      {
        data: simulPortfolio(label)
      }, {
        data : realPortfolio(label)
      }
    ]);
    ApexCharts.exec('chart2', "updateOptions", {
      xaxis: {
        categories: label
      }
    });

    ApexCharts.exec('chart2', "updateSeries", [
      {
        data: drawdown(label)
      }
    ]);
}

function changeRisk() {
    portfolioSliderValue = document.getElementById('portfolio').value
    riskSliderValue = document.getElementById('risk').value
    label = Object.keys(data["_links"][portfolioSliderValue][riskSliderValue])
    ApexCharts.exec('chart1', "updateOptions", {
      xaxis: {
        categories: label
      }
    });

    ApexCharts.exec('chart1', "updateSeries", [
      {
        data: simulPortfolio(label)
      }, {
        data : realPortfolio(label)
      }
    ]);
    ApexCharts.exec('chart2', "updateOptions", {
      xaxis: {
        categories: label
      }
    });

    ApexCharts.exec('chart2', "updateSeries", [
      {
        data: drawdown(label)
      }
    ]);
}


function resetZoom() {
    d_1options1.resetZoom();
}