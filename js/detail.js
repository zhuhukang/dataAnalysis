new Vue({
  el: '#app-detail',
  data() {
    return {
      dataArray: [
        {"id": 1, "itemName": "短网址转换", "sort": "桌面端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云启项目组", "group": "1期", "deadline": "2021.8.1-8.26", "design": "2天", "code": "14天", "testing": "3天", "totallTime": "26天"},
        {"id": 2, "itemName": "建材市场", "sort": "桌面端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云顶项目组", "group": "2期", "deadline": "2021.8.1-8.16", "design": "5天", "code": "16天", "testing": "2天", "totallTime": "16天"},
        {"id": 3, "itemName": "密码器保护", "sort": "移动端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云毅项目组", "group": "3期", "deadline": "2021.9.1-9.26", "design": "3天", "code": "18天", "testing": "1天", "totallTime": "26天"},
        {"id": 4, "itemName": "应用商城", "sort": "桌面端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云龙项目组", "group": "4期", "deadline": "2021.9.5-10.26", "design": "2天", "code": "10天", "testing": "2天", "totallTime": "51天"},
        {"id": 5, "itemName": "长网址转换", "sort": "桌面端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云芯项目组", "group": "5期", "deadline": "2021.9.1-12.26", "design": "1天", "code": "19天", "testing": "3天", "totallTime": "116天"},
        {"id": 6, "itemName": "二维码生成器", "sort": "移动端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云云项目组", "group": "6期", "deadline": "2022.1.1-3.26", "design": "2天", "code": "24天", "testing": "3天", "totallTime": "31天"},
        {"id": 7, "itemName": "建材市场", "sort": "桌面端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云顶项目组", "group": "7期", "deadline": "2021.2.1-2.16", "design": "5天", "code": "16天", "testing": "2天", "totallTime": "16天"},
        {"id": 8, "itemName": "短网址转换", "sort": "桌面端", "introduction": "查看", "check": "简介呀", "state": "已完成", "itemBelong": "云启项目组", "group": "8期", "deadline": "2021.3.1-3.26", "design": "2天", "code": "14天", "testing": "3天", "totallTime": "26天"},
      ],
      countArray: [
        {"id":1,"name":'云顶书院',count:37},
        {"id":2,"name":'红芯书院',count:30},
        {"id":3,"name":'匠心书院',count:25},
        {"id":4,"name":'天脊书院',count:15},
        {"id":5,"name":'德风书院',count:10}
      ]
    };
  },
  computed:{
    countPerson(){
      let count = 0;
      for (let i in this.countArray){
        count += this.countArray[i].count++
      }
      return count
    }
  }
})