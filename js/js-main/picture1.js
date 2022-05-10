import * as echarts from 'echarts';

// var chartDom = document.getElementById('main');
var chartDom = document.getElementsByClassName('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    data: ['桌面应用', 'Web应用', '小程序', '网页展示']
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1548, name: 'CS架构' },
        { value: 775, name: 'BS架构' }
      ]
    },
    {
      name: 'Access From',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: 41, name: '桌面应用' },
        { value: 26, name: 'Web应用' },
        { value: 19, name: '小程序' },
        { value: 14, name: '网页展示' }
      ]
    }
  ]
};

option && myChart.setOption(option);
