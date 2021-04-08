import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent, ApexOptions} from 'ng-apexcharts';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrowRightIcon = faArrowRight;

  tableData = [
    {
      transactionId: 'T1456',
      amount: '68,000,000',
      date: '12/03/2020',
      paymentMethod: 'Bank Transfer',
      invoiceId: 'I09876'
    },
    {
      transactionId: 'T123456',
      amount: '68,000,000',
      date: '12/03/2020',
      paymentMethod: 'Bank Transfer',
      invoiceId: 'I09876'
    },
    {
      transactionId: 'T123456',
      amount: '68,000,000',
      date: '12/03/2020',
      paymentMethod: 'Bank Transfer',
      invoiceId: 'I09876'
    },
    {
      transactionId: 'T123456',
      amount: '68,000,000',
      date: '12/03/2020',
      paymentMethod: 'Bank Transfer',
      invoiceId: 'I09876'
    },
  ];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ApexOptions>;
  public chart4Options!: Partial<ApexOptions>;
  public commonOptions: Partial<ApexOptions> = {
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    // toolbar: {
    //   tools: {
    //     selection: false
    //   }
    // },
    markers: {
      size: 6,
      hover: {
        size: 10
      }
    },
    tooltip: {
      followCursor: false,
      theme: 'dark',
      x: {
        show: false
      },
      marker: {
        show: false
      },
      y: {
        title: {
          formatter(): string {
            return '';
          }
        }
      }
    },
    xaxis: {
      type: 'datetime'
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    this.initCharts();
  }

  public initCharts(): void {

    this.chartOptions = {
      series: [
        {
          name: 'Session Duration',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: 'Page Views',
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: 'Total Visits',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: 'Gross Volume By Application',
        align: 'left'
      },
      legend: {
        tooltipHoverFormatter: (val, opts) => (
          val +
          ' - <strong>' +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          '</strong>'
        )
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
          '08 Jan',
          '09 Jan',
          '10 Jan',
          '11 Jan',
          '12 Jan'
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: val => val + ' (mins)'
            }
          },
          {
            title: {
              formatter: val => val + ' per session'
            }
          },
          {
            title: {
              formatter: val => val
            }
          }
        ]
      },
      grid: {
        borderColor: '#f1f1f1'
      }
    };

    this.chart4Options = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
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
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Total Gross Volume',
        align: 'left'
      },
      // grid: {
      //   row: {
      //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      //     opacity: 0.5
      //   }
      // },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep'
        ]
      }
    };
  }

  public generateDayWiseTimeSeries(baseval: any, count: any, yrange: any): any[] {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = baseval;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

}
