window.onload = function (){
  echart01();
  echart02();
  echart03();
  echart04();

  // 项目分类
  function echart01(){
    // 1、初始化
    let view1 = document.querySelector('.view01');
    let chart1 = echarts.init(view1);
// 2、参数
    let option1={
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '33%'],
          label: {
            position: 'inner',
            fontSize: 12
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 43, name: '桌面端' },
            { value: 20, name: '移动端' },
            { value: 33, name: '网页端', selected: true }
          ]
        },
        {
          name: '语言',
          type: 'pie',
          radius: ['45%', '55%'],
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
                lineHeight: 25,
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
                fontSize: 12,
                // fontWeight: 'bold',
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
            { value: 7, name: '前端' },
            { value: 7, name: 'Java' },
            { value: 12, name: 'Python' },
            { value: 12, name: 'C++' },
            { value: 12, name: 'Android' }
          ]
        }
      ]
    };
// 3、设置参数
    chart1.setOption(option1);

  }
  // 项目完成率
  function echart02(){
    // 1、初始化
    let view2 = document.querySelector('.view02');
    let chart2 = echarts.init(view2);
// 2、参数
    let option2={
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          // color:['rgb(36,255,227)','rgb(66,105,225)'],
          selectedMode: 'single',
          radius: ["30%", '60%'],

          label: {
            position: 'inner',
            fontSize: 20,
            color: '#000'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 89, name: '89%' },
            { value: 96, name: '96%' },
          ]
        },
        {
          name: 'Access From',
          type: 'pie',
          color:['rgba(36,255,227,0.3)','','rgba(66,63,223,0.3)'],
          selectedMode: 'single',
          radius: ["90%", '60%'],
          label: {
            position: 'inner',
            fontSize: 16,
            color:"#fff"
          },
          labelLine: {
            show: false
          },
          data: [
            {
              value: 89,
              name: '一期',
            },
            {
              value: 96,
              name: '二期'
            },
          ]
        }
      ]
    };
// 3、设置参数
    chart2.setOption(option2);

  }

  //已完成项目数据图
  function echart03(){
    // 1、初始化
    let view3 = document.querySelector('.view03');
    var chart3 = echarts.init(view3);
    var option;
    let colorList = [
      '#CF4645', '#B580B2', '#29008A', '#146A90', '#8956FF', '#70C9A8',
      '#bfbfbf', '#595959',
      '#40a9ff', '#1890ff',
      '#ffd666', '#ffc53d', '#ffc53d', '#ffc069', '#ffa940', '#fa8c16',
      '#eccbd9', '#ffadad', '#ff6392', '#ffc09f', '#ffcb77', '#ffe066', '#ffd53e', '#ffda3d', '#adf7b6', '#a0e8af', '#80ed99', '#07beb8', '#17c3b2', '#48cae4', '#97d2fb', '#83bcff', '#91e5f6', '#9381ff']
    let colorListLen = colorList.length
    let fontSizeList = [
      12, 12.5, 13, 13.5, 14, 14.5,
      15, 15.5, 16, 16.5, 17, 17.5,
      18, 18.5, 19, 19.5, 20, 20.5,
      21, 22, 23,
      24]
    let fontSizeListLen = fontSizeList.length
    let customLabel = {
      color: colorList[Math.floor(Math.random() * colorListLen)],
      fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
    }
    let bgColor = 'rgba(255,255,255,0)'
    let canDraggable = false
    option = {
      // backgroundColor: '#fffcf9',
      color: ['#37A2DA', '#32C5E9', '#67E0E3'],
      // title: {
      //   show: false,
      //   text: '一天的时间流逝',
      //   x: 'center',
      //   y: 'center',
      //   // 文字的颜色,默认 #333。
      //   color: '#000',
      //   fontSize: 24
      // },
      toolbox: {
        show: true,
        feature: {
          // dataView: {readOnly: false},
          // magicType: {type: ['line', 'bar']},
          restore: {},
          // saveAsImage: {}
        }
      },
      itemStyle: {
        color: bgColor
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 80,
            edgeLength: 10
          },
          roam: 'scale',
          // symbol: '',
          // symbolSize: 0,
          label: {
            show: true,
            // color: 'auto',
            fontSize: 14
          },
          data: [
            {
              name: '展厅官网',
              value: 2,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
            {
              name: '剪切板工具',
              value: 22,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
            {
              name: '桌面日历',
              value: 16,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
            {
              name: '二维码生成器',
              value: 40,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
            {
              name: '知识检索平台',
              value: 2,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
            {
              name: '红芯书院官网',
              value: 2,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
            {
              name: '短网址服务平台',
              value: 2,
              draggable: canDraggable,
              itemStyle: {
                color: bgColor
              },
              label: {
                color: colorList[Math.floor(Math.random() * colorListLen)],
                fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
              }
            },
          ]
        }
      ]
    }
    option && chart3.setOption(option);

  }
  // 人员组成
  function echart04(){
    // 1、初始化
    //暑假人员组成占比数据图
    var view4 = document.querySelector('.view04');
    var chart4 = echarts.init(view4);
    var option;

    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: '架构',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '35%'],
          label: {
            position: 'inner',
            fontSize: 16
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1548, name: 'CS架构' },
            { value: 775, name: 'BS架构' },
            // { value: 679, name: 'Marketing', selected: true }
          ]
        },
        {
          name: '应用',
          type: 'pie',
          radius: ['50%', '65%'],
          labelLine: {
            length: 10
          },
          //图旁边显示框(标签)的样式
          label: {
            formatter: '{b|{b}}',
            // backgroundColor: '#000',
            // borderColor: '#8C8D8E',
            // borderWidth: 1,
            // borderRadius: 4,
            rich: {
              //标签title的样式
              // a: {
              //   color: '#fff',
              //   lineHeight: 22,
              //   align: 'center'
              // },
              //横线的样式
              // hr: {
              //   borderColor: '#fff',
              //   width: '100%',
              //   height: 0
              // },
              b: {
                color: '#fff',
                fontSize: 13,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                padding: [3, 4],
              },
            }
          },
          data: [
            { value: 500, name: '网页展示' },
            { value: 335, name: '桌面应用' },
            { value: 310, name: 'web应用' },
            { value: 251, name: '小程序' },
            // { value: 234, name: 'Union Ads' },
            // { value: 147, name: 'Bing' },
            // { value: 135, name: 'Video Ads' },
            // { value: 102, name: 'Others' }
          ]
        }

      ]
    };

    option && chart4.setOption(option);

  }


}