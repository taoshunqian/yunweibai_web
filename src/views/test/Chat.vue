<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <Chat v-model="state" />
    <Button @click="addLangHttp">点击</Button>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Button } from "vant";
import Chat from "./index";
import lang from "@/locales/simba/simbaRu";
// import lang from "@/locales/getMessage";
import axios from "axios";
var url = "http://192.168.21.18/res/";
const langObj = {};
const allLang = lang;
let num = 0;
let separator = "*";
let separatorChild = "~";
let la = "ru"
// ----------------------------- 多层数据转为一层数据(序列化数据结构) --------
// 处理数据结构体
function decodeArray(arr, name, name2) {
  var obj = {};
  arr.forEach((item, index) => {
    var key = `${name}${separator}${index}${separator}array`;
    if (
      !Array.isArray(item) &&
      typeof item !== "string" &&
      typeof item !== "number"
    ) {
      var codeArr = name.split(separator);
      createObj(item, la, `${codeArr[1]}~${codeArr[2]}`);
      return false;
    }
    if (item instanceof Array) {
      Object.assign(obj, decodeArray(item, key, num));
    } else {
      obj[key] = item;
    }
    name2 != undefined ? num++ : (num = 0);
  });
  return obj;
}
// 处理字符串结构体
function decodeString(str, name, splitStr = ",") {
  var obj = {};
  // var count = str.match(/,/g);
  var strArr = str.split(splitStr);
  strArr.forEach((item, index) => {
    var key = "";
    key = `${name}${separator}${index}${separator}string`;
    obj[key] = item;
  });
  return obj;
}

function findAllParentKeys(obj, targetKey) {
  const results = [];
  // 定义helper函数存储父级对象的键
  function findParentKeys(obj, targetKey, parentKeys) {
    for (const key in obj) {
      const value = obj[key];
      if (key === targetKey) {
        parentKeys.push(key);
        // 将完整的匹配路径添加到结果中
        results.push([...parentKeys]);
      }
      if (typeof value === "object" && value !== null) {
        // 复制当前父级键
        const currentParentKeys = [...parentKeys, key];
        findParentKeys(value, targetKey, currentParentKeys);
      }
    }
  }
  findParentKeys(obj, targetKey, []);
  return results;
}

function findKeyInfo(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    var obj3 = allLang;
    for (var j = 0; j < arr[i].length; j++) {
      try {
        obj3 = obj3[arr[i][j]];
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
    if (JSON.stringify(obj) == JSON.stringify(obj3)) {
      return arr[i];
    }
  }
  return null;
}

function findKey(allLang, obj, i) {
  var result = findAllParentKeys(allLang, i);
  var findKey = findKeyInfo(result, obj, i);
  var key = "";
  if (result[0].length > 1) {
    if (findKey !== null) {
      key = findKey.join(separatorChild);
    }
  } else {
    key = i;
  }

  return key;
}

// 将多层的数据结构转成一层
function createObj(zh, lang, name) {
  var obj = zh;
  var hader = `sim${separator}`;
  for (var i in obj) {
    if (obj[i] instanceof Array) {
      Object.assign(
        langObj[lang],
        decodeArray(
          obj[i],
          name != undefined ? `${hader}${name}${separator}${i}` : `${hader}${i}`
        )
      );
    } else if (obj[i] instanceof Object) {
      var key = findKey(allLang, obj[i], i);
      createObj(obj[i], lang, key);
    } else if (typeof obj[i] == "string" || typeof obj[i] == "number") {
      Object.assign(
        langObj[lang],
        decodeString(
          obj[i],
          name != undefined ? `${hader}${name}${separator}${i}` : `${hader}${i}`
        )
      );
    }
  }
}

// ----------------------------- 一层数据转为多层数据(反序列化数据结构)--------
function isSome(key, key2) {
  var keyArray = key.split("*");
  var allArray = key2.split("*");
  var keyLeng = keyArray.length;
  var key2Arr = allArray.slice(0, keyLeng).join("*");
  if (key2Arr === key) {
    return true;
  } else {
    return false;
  }
}
// 遍历成需要的数据结构
function renderBuild(key, name, type) {
  if (this.copyObj[name] == undefined) {
    if (type == "string") {
      this.copyObj[name] = "";
    } else if (type == "array") {
      this.copyObj[name] = [];
    }
  }
  for (var i in this.data) {
    if (this.isSome(key, i)) {
      if (type == "string" && this.data[i] != "undefined") {
        var str = this.copyObj[name];
        this.copyObj[name] += str == "" ? this.data[i] : "," + this.data[i];
      } else if (type == "array") {
        this.copyObj[name].push(this.data[i]);
      }
      delete this.data[i];
    }
  }
}
// 解析一层
function encodeFirstFloor(arr, type) {
  this.copyObj = this.obj;
  this.renderBuild(this.key, this.activeKey, type);
}

// 解析多层
async function encodeMultilayer(arr, type) {
  const createObj = (keys) => {
    for (var i = 0; i < keys.length; i++) {
      if (i == 0) {
        if (this.obj[keys[0]] === undefined) {
          this.obj[keys[0]] = {};
        }
        this.copyObj = this.obj[keys[i]];
      } else {
        if (this.copyObj[keys[i]] === undefined) {
          this.copyObj[keys[i]] = {};
        }
        this.copyObj = this.copyObj[keys[i]];
      }
    }
  };

  if (arr[0].indexOf(separatorChild) !== -1) {
    var keys = arr[0].split(separatorChild);
    createObj(keys);
  } else {
    if (this.obj[arr[0]] === undefined) {
      this.obj[arr[0]] = {};
    }
    this.copyObj = this.obj[arr[0]];
  }

  this.renderBuild(this.key, arr[1], type);
}

function getKeyInfo(arr) {
  var removeWebArr = arr.splice(1, arr.length); // 去除 web
  var arr2 = removeWebArr.slice(0, removeWebArr.length - 2); // 获取 层级
  var type = removeWebArr[removeWebArr.length - 1]; // 获取 数据类型
  var keyInfo = "";
  var arrInfo = [];
  var typeInfo = "";
  this.activeKey = arr2.join("");
  if (arr2.length == 1) {
    typeInfo = type;
    arrInfo = removeWebArr;
    keyInfo = "sim*" + removeWebArr.join("*");
  } else if (arr2.length == 2) {
    typeInfo = type;
    arrInfo = arr2;
    keyInfo = "sim*" + arr2.join("*");
  } else if (arr2.length == 4) {
    var arr3 = removeWebArr.slice(0, arr2.length - 2); // 获取 层级
    const type2 = removeWebArr[removeWebArr.length - 1]; // 获取 数据类型
    this.key = arr2.join("*");
    typeInfo = type2;
    arrInfo = arr3;
    keyInfo = arr2.join("*");
  }
  return {
    typeInfo,
    arrInfo,
    keyInfo,
  };
}
// 解析所有获取到的 key value
async function encodeCreateObj(arr) {
  var removeWebArr = arr.splice(1, arr.length); // 去除 web
  var arr2 = removeWebArr.slice(0, removeWebArr.length - 2); // 获取 层级
  var type = removeWebArr[removeWebArr.length - 1]; // 获取 数据类型

  this.activeKey = arr2.join("");
  if (arr2.length == 1) {
    this.key = "sim*" + removeWebArr.join("*");
    await this.encodeFirstFloor(removeWebArr, type);
    return false;
  } else if (arr2.length == 2) {
    this.key = "sim*" + arr2.join("*");
    try {
      await this.encodeMultilayer(arr2, type);
    } catch (e) {
      // console.log(e);
    }
  } else if (arr2.length == 4) {
    this.key = arr2.join("*");
    await this.encodeMultilayer(arr2, type);
  }
}

// 反序列化 语言包数据
function encodeObjFn(data) {
  this.data = data;
  this.obj = {};
  for (var i in this.data) {
    var keys = i.split("*");
    this.encodeCreateObj(keys);
  }
  return this.obj;
}
encodeObjFn.prototype.encodeCreateObj = encodeCreateObj;
encodeObjFn.prototype.encodeFirstFloor = encodeFirstFloor;
encodeObjFn.prototype.encodeMultilayer = encodeMultilayer;
encodeObjFn.prototype.renderBuild = renderBuild;
encodeObjFn.prototype.isSome = isSome;
encodeObjFn.prototype.getKeyInfo = getKeyInfo;

// ------------------------------- 发送模板数据-----------------------------
// 申请 language_id
async function getAxios(data, lang) {
  if (lang == undefined) {
    return false;
  }
  for (var i in data) {
    const res = await axios.get(
      url + "LanguageServlet?type=codeAdd&key=" + i + "&typeApp=dev"
    );
    var language_id = res.data.language_id;
    console.log(language_id, i);
    if (res.data.code == 500) {
      await addLang(i, language_id, data[i], lang);
    } else {
      await addLang(i, language_id, data[i], lang);
    }
  }
}
// 添加语言包
async function addLang(i, laanguage_id, value, lang) {
  const res = await axios.get(
    url +
      "LanguageServlet?type=codeLanguageAdd&key=" +
      i +
      "&language_id=" +
      laanguage_id +
      "&value=" +
      encodeURIComponent(value) +
      "&language=" +
      lang
  );
  return res;
}

// ------------------------------- 获取语言包数据---------------------------
async function getLangBuild(type) {
  const res = await axios.get(
    url + "LanguageServlet?type=selectCode&page=0&pageSize=10000&typeApp=dev"
  );
  var data = res.data.data;
  var language_ids = [];
  data.forEach((item) => {
    language_ids.push(item["language_id"]);
  });
  getLangContent(language_ids, type);
  // for()
}

async function getLangContent(language_ids, type) {
  // var arr = getTwoArr(language_ids, 400);

  var langArr = language_ids.join(",");
  var objInfo = {
    type: "selectLanguage",
    language_id: langArr,
    typeDesc: type,
  };
  const res = await axios.post(url + "CodeServlet", objInfo);
  var data = res.data.data;
  var obj = {};
  data.forEach((item) => {
    var name = item.key;
    var type_desc = item.type_desc;
    if (obj[name] == undefined) {
      obj[name] = {};
    }
    obj[name][type_desc] = item.language_id;
    obj[name][type_desc + "_value"] = item.value;
  });
  console.log(obj);

  var resData = {};
  for (var i in obj) {
    var header = i.split("*");
    if (header[0] == "sim") {
      try {
        resData[i] = obj[i][type + "_value"].replace(/(\n|\t)/g, "");
      } catch (e) {
        resData[i] = obj[i][type + "_value"];
      }
    }
  }
  var obj2 = new encodeObjFn(resData);
  console.log(obj2)
  // return false;

}

function addLangHttp() {
  for (var i in lang) {
    langObj[i] = {};
    createObj(lang[i], i);
  }
  var type = "zh";
  getLangBuild(type);
}

async function simbaAdd() {
  var type = la;
  var obj = {};
  obj[type] = lang;

  langObj[type] = {};
  await createObj(obj[type], type);
  var langInfo = {};

  for (var i in langObj[type]) {
    if (!(langObj[type][i] instanceof Object)) {
      langInfo[i] = langObj[type][i];
    }
  }
  console.log(langObj[type]);
  // console.log(langInfo);
  // getAxios(langInfo, type);
}

simbaAdd();

// addLangHttp();

var obj = {
  name: "111",
  age: 18,
};
const state = ref(obj);
onMounted(() => {});
</script>
