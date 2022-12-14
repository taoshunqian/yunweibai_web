/* eslint-disable no-unused-vars */
// 引入mockjs
import Mock from "mockjs";
import protoRoot from '../src/proto/proto'

// 获取 mock.Random 对象
const Random = Mock.Random;

// 使用mockjs模拟数据
let tableList = [
    {
        id: Random.guid(),
        account: "admin",
        password: "123456",
        address: "36918166@qq.com",
        date: Random.date()
    },
    {
        id: Random.guid(),
        account: "ebHoL6",
        password: "i320Hu74fbn2Gi",
        address: "48165263@qq.com",
    },
]

Mock.mock("/api/mockGetList", "get", () => {
    return {
        code: "0",
        data: tableList,
    };

});

Mock.mock("/api/protobuf", "post", (params) => {
    const DeviceFileContentRequest = protoRoot.lookup('TLBluetooth.DeviceFileContentRequest');
    const protobuf = protoRoot.lookup('TLBluetooth.WebResponse');
    var buf = new Uint8Array(params.body);
    var deMessage = DeviceFileContentRequest.decode(buf);
    var payload = {
        code: 200,
        message: "success",
        returnData: "successsuccesssuccess",
    };
    var message = protobuf.create(payload);
    var buffer = protobuf.encode(message).finish();
    return  [...buffer];
});


Mock.mock("/api/add", "post", (params) => {
    let newData = JSON.parse(params.body);
    newData.id = Random.guid();
    tableList.push(newData);
    return {
        code: "0",
        message: "success",
        data: tableList,
    };
});