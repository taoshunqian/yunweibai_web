<template>
  <div class="decode">
    <CellGroup inset style="margin-top: 20px">
      <Row>
        <Col span="20">
          <Field
            v-model="apiVal"
            label="接口"
            placeholder="请输入完整的请求地址"
          />
        </Col>
        <Col span="3">
          <Button
            type="primary"
            style="float: right; width: 100%"
            @click="submit"
            loading-text="请求中..."
            :loading="loading"
            >提交</Button
          >
        </Col>
      </Row>
    </CellGroup>

    <CellGroup inset style="margin-top: 20px">
      <Row>
        <Col span="12" style="border-right: 1px solid #cdcdcd">
          <Field
            v-model="reqVal"
            rows="10"
            autosize
            label="发送数据"
            type="textarea"
            placeholder="请输入发送数据( json格式 )"
          />
        </Col>
        <Col span="12">
          <Field
            v-model="resBuild"
            rows="10"
            autosize
            label="获取数据结构"
            type="textarea"
            placeholder="请输入获取数据结构( json格式 )"
          />
        </Col>
      </Row>
    </CellGroup>

    <CellGroup inset style="margin-top: 20px">
      <Field
        v-model="resData"
        rows="10"
        autosize
        label="返回数据"
        type="textarea"
      />
    </CellGroup>
  </div>
</template>

<script setup>
import { Login } from "@/api/http";
import { Field, CellGroup, Col, Row, Button, Toast } from "vant";

import { defineComponent, ref } from "vue";
// const apiVal = ref("http://192.168.100.50:9337/GetUserOnOffLineDevicesWithGps");
// const apiVal = ref("http://www.taoqian.site:9527/api/getList");
const apiVal = ref("http://www.taoqian.site:9527/api/testLogin");

let req = {
  userName: "superman",
  userGuid: "0e4a3da6-8c99-4886-8d88-48534214c0e0",
  type: 1

  // httpUser: {
  //   userName: "superman",
  //   userGuid: "4dccbaf815cf3da2a1b0f5e624bc17550abb1b1d",
  // },
  // deviceId: [],
};
let build = {
  userName: "",
  userGuid: "",

  // "code": 0,
  // "msg": "",
  // "body": {
  //   "userName": "",
  //   "userGuid": ""
  // }

  // devInfo: [
  //   {
  //     devIdNum: 1,
  //     deviceId: "",
  //     devState: 0,
  //     accState: 0,
  //   },
  // ],
};

const reqVal = ref(JSON.stringify(req));
const resBuild = ref(JSON.stringify(build));
const resData = ref("");
const loading = ref(false);
// Login(apiVal.value, "", "");
const submit = async () => {
  if (reqVal.value == "") {
    Toast.fail("发送数据不能为空");
    return false;
  }
  if (resBuild.value == "") {
    Toast.fail("获取数据结构 不能为空");
    return false;
  }
  // if (loading.value) {
  //   return false;
  // } else {
  //   loading.value = true;
  // }

  var res = eval("(" + resBuild.value + ")");
  var req = eval("(" + reqVal.value + ")");

  let { decodeBuffer, status } = await Login(apiVal.value, req, res);
  var dataStr = "状态码: " + status + "\n";
  dataStr += "返回数据: " + JSON.stringify(decodeBuffer);
  resData.value = dataStr;
  loading.value = false;
};





defineComponent({
  name: "yunweibao-decodeProto",
});
</script>

<style lang="scss" scoped>
.decode {
  overflow: hidden ;
}
</style>

