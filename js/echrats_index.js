window.onload = function (){
  echart01();
  echart03();
  echart04();
  echart05();

  // 项目类型
  function echart01(){
    // 1、初始化
    let view1 = document.querySelector('.view01');
    let chart1 = echarts.init(view1);
// 2、参数
    let option1={
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
      },
      legend: {
        data: [
          'Desktop',
          'Web',
          'App',
          'Pc',
        ],

      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          selectedMode: 'single',
          radius: [0,'45%'],
          center:['50%','50%'],
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
          ]
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['55%', '70%'],
          center:['50%','50%'],
          labelLine: {
            length: 30
          },
          label: {
            formatter: '{b}: {d}% \n\n',
            padding:[0,-115],
            textStyle: {
              color: 'white',  // 改变标示文字的颜色
              fontSize:16,//文字大小
            },

            borderWidth: 20,
            borderRadius: 4,
        },
          labelLine: {// 图形外文字线
            normal: {
              length: 28,
              length2: 100,
              lineStyle: {
                color: '#28B1C7'
              }
            }
          },
          data: [
            { value: 410, name: '桌面应用' },
            { value: 260, name: 'web应用' },
            { value: 190, name: '小程序' },
            { value: 140, name: '网页展示' },
          ]
        }
      ]
    };
// 3、设置参数
    chart1.setOption(option1);

  }
  // 知识讲堂
  function echart03(){
    // 1、初始化
    let view3 = document.querySelector('.view03');
    let chart3 = echarts.init(view3);
// 2、参数
    let option3={
      grid:{
        x:35,
        y:45,
        x2:5,
        y2:20,
        borderWidth:1
      },
      xAxis: {
        type: 'category',
        data: ['Vuex', 'Vue', 'Node.js', 'Http协议', '登录/注册', 'UML', '数据库搭建'],
        axisLabel: {
          // inside:false,
          // show:true,
          textStyle: {
            color:'#FFF',
            fontSize:'10'
          }
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show:true,
          formatter: '{value}天',//给Y轴数值添加天
          textStyle: {
            color:'#FFF',
            fontSize:'10'
          }
        },
      },
      series: [
        {
          data:[5,4.3,3.5,4.5,3,4.2,4.7],
          type: 'bar'
        }
      ]
    };
// 3、设置参数
    chart3.setOption(option3);

  }
  // 人数占比
  function echart04(){
    // 1、初始化
    let view4 = document.querySelector('.view04');
    let chart4 = echarts.init(view4);
    // 2、参数
    let option4={
      tooltip: {
        // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
        trigger: 'item',
        showDelay: 20,   // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        hideDelay: 20,   // 隐藏延迟，单位ms
        backgroundColor: 'rgba(255,0,0,0.7)',  // 提示框背景颜色
        textStyle: {
          fontSize: '60px',
          color: '#000'  // 设置文本颜色 默认#FFF
        },
        // formatter设置提示框显示内容
        // {a}指series.name  {b}指series.data的name
        // {c}指series.data的value  {d}%指这一部分占总数的百分比
        formatter: '{a} <br/>{b} : {c}个 ({d}%)'
      },
      toolbox: {
        show: true,
        right: '30px',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        },
        iconStyle:{
          normal:{
            color:'#fff',//设置颜色
          }
        }
      },
      label: {
        formatter: '{b} \n\n',
        padding:[0,-15],
        textStyle: {
          color: 'white',  // 改变标示文字的颜色
          fontSize: '56',		//字体大小
          fontWeight: 'bolder'		//字体加粗
        },

      },

      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          radius: [10, 130],
          center: ['50%', '40%'],
          roseType: 'area',
          "label": {
            "normal": {
              "show": true,
              "textStyle": {
                "fontSize": 15
              }
            },
            "emphasis": {
              "show": true
            }
          },
          labelLine: {
            length: 15
          },

          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 38, name: '云顶书院' },
            { value: 31, name: '红芯书院' },
            { value: 26, name: '天脊书院' },
            { value: 16, name: '匠心书院' },
            { value: 11, name: '德风书院' }
          ]
        }
      ]
    };
// 3、设置参数
    chart4.setOption(option4);

  }
  //项目完成率折线图
  function echart05(){
    // 1、初始化
    let view5 = document.querySelector('.view05');
    let chart5 = echarts.init(view5);
// 2、参数
    let option5 = {
      left: '50px',
      xAxis: {
        type: 'category',
        axisLine: {  //这是x轴文字颜色
          lineStyle: {
            color: "#fff",
          }
        },
        boundaryGap: false,
        data: [
          '7-2',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '8-6',
          '8-7',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          ' ',
          '8-25'
        ]
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: "#fff",
          },

        },
        axisLabel : {
          formatter : function(val){
            return val+"%";
          }

        },
        min: 0,
        max: 100,
        interval:50,
        // data: [0, 5, 10],
      },
      series: [
        {
          data: [0, 5, 10, 22, 36, 50, 66, 78],
          type: 'line',
          areaStyle: {}
        },
        {
          data: [ , , , , , , , , 0, 5, 10, 16, 26, 32, 40, 45, 51, 58, 69, 75, 86, 90, 92],
          type: 'line',
          areaStyle: {}
        }
      ]
    };
// 3、设置参数
    chart5.setOption(option5);

  }

}