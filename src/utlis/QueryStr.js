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
// export default {
//     getQueryString
// }