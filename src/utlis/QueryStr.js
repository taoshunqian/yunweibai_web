import { columnsCheckbits,columnCom } from './ConfigConst';


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
  if(url.indexOf("?")!=-1){
    var str = url.split("?")[1];
    var obj = {};
    var items = str.split("&");
    for (var i = 0; i < items.length; i++) {
      var item = items[i].split("=");
      obj[item[0]] = item[1]
    }
    return obj[name];
  }else{
    return "";
  }
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
        str = columnsCheckbits[0];
        break;
      case "1":
        str = columnsCheckbits[1];
        break;
      case "2":
        str = columnsCheckbits[2];
        break;
    }
    return str;
  }
  switch (num) {
    case "78":
      str = columnsCheckbits[0];
      break;
    case "79":
      str = columnsCheckbits[1];
      break;
    case "69":
      str = columnsCheckbits[2];
      break;
    default:
      str = PtzBtn(num);
  }
  return str;
};

export function columnComInfo() {
  const columnIndex = columnCom;
  return columnIndex;
}