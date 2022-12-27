//解码
function b64Decode(str) {
  return decodeURI(decodeURIComponent(atob(str)));
}

export function getQueryString2(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.href.substr(1).match(reg);
  if (name == "pass") {
    var pass = b64Decode(r[2]);
    if (r != null) return pass;
    return null;
  } else {
    if (r != null) return decodeURI(r[2]);
    return null;
  }
}

// 生产模式
export function getQueryString(name) {
  var url = window.location.href;
  var str = url.split("?")[1];
  var obj = {};
  var items = str.split("&");
  for (var i = 0; i < items.length; i++) {
    var item = items[i].split("=");
    obj[item[0]] = item[1]
  }
  return obj[name];
}


export function getWifiASC(nameWifi) {
  let wifiTemp = "";
  if (nameWifi != null && nameWifi.length >= 3) {
    for (let i = 0; i < nameWifi.length / 3; i++) {
      wifiTemp += String.fromCharCode(nameWifi.substr(i * 3, 3));
    }
  }
  return wifiTemp;
}


// 转ASCII
export function getWifiASCFormat(nameWifi) {
  let wifiTemp = "";

  for (let i = 0; i < nameWifi.length; i++) {
    wifiTemp += PrefixInteger(nameWifi[i].charCodeAt(), 3);
  }

  return wifiTemp;
}
function PrefixInteger(num, m) {
  return (Array(m).join(0) + num).slice(-m);
}

// 互换 位置
export function arrIndexExchange(array, x, y) {
  array.splice(x - 1, 1, ...array.splice(y - 1, 1, array[x - 1]))
  return array
}

// 十进制转二进制 8位
export const baseChange = (value, max) => {
  var number = +value;
  var num = pad(number.toString(2), max);
  var strArr = num.split("");
  return strArr;
};

export function pad(num, n) {
  return Array(n > num ? (n - ('' + num).length + 1) : 0).join(0) + num;
}


export const filterABtn = (num) => {
  var str = "";
  function PtzBtn(num) {
    switch (num) {
      case "0":
        str = "无校验";
        break;
      case "1":
        str = "奇校验";
        break;
      case "2":
        str = "偶校验";
        break;
    }
    return str;
  }
  switch (num) {
    case "78":
      str = "无校验";
      break;
    case "79":
      str = "奇校验";
      break;
    case "69":
      str = "偶校验";
      break;
    default:
      str = PtzBtn(num);
  }
  return str;
};

export function columnComInfo() {
  const columnIndex = [
    "无",
    "透传",
    "云台",
    "油位",
    "TTS",
    "AIS（视霸渔船定制）",
    "COMPASS（视霸渔船定制）",
    "LCD（航大）",
    "LED（航大）",
    "RFID刷卡器",
    "万航广告屏（通立）",
    "485串口协议的油位传感器",
    "LED闪烁灯（LED_M2）",
    "一拖三串口功能（AU100）",
    "华翰LED广告屏",
    "外接GPS数据",
    "通立标准通信协议",
    "角度传感器",
    "胎压",
    "中油瑞飞指定液位仪",
    "GPS数据透传",
    "本安行车记录仪",
    "计价器",
    "川基车顶灯（波特率19200）",
    "JD_LED(波特率19200)@24",
    "微视创LED（波特率9600）",
    "清研ADAS",
    "瑞为ADAS",
    "河南军工ADAS",
    "四川畅云",
    "指纹识别",
    "学生卡抓拍",
    "苏标ADAS",
    "云安ADAS",
    "深圳渣土车 LED",
    "深圳渣土车雷达",
    "超速报警器",
    "硕龙LED",
    "TRANSMIT2-透传到指定服务器",
    "TRANSMIT3-透传到指定服务器",
    "OpenProtocol 控制透传",
    "产测小板专用",
    "中车刷卡器",
    "图软设备",
    "部标机LCD测试",
    "顺禾设备",
    "雄帝读卡器",
    "串口打印保存至文件",
    "BSD声光报警器",
    "AAL100 声光报警器",
    "ACR100 刷卡器",
    "势航四方位客户显示屏",
    "载重传感器",
    "广州正安声光报警器",
    "深圳汽车电子刷卡器",
    "上海埃而生电气",
    "多合一声光报警器",
    "势航雷达",
    "长春骏达",
    "长春骏达客流计数器",
    "海南称芯合意",
    "赛格酒精检测",
    "亿程读卡器",
    "WIC磁条卡读卡器",
    "GBT_19056",
    "天地宏华酒精检测仪",
    "青岛宇新F3协议液位传感器",
    "内蒙旭一雷达",
    "湖北东讯温度传感器",
  ];
  return columnIndex;
}