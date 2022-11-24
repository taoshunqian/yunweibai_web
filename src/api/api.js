import axios from 'axios';
import protoRoot from '../proto/proto'
const GeneralResponse = protoRoot.lookup('TLBluetooth.GeneralResponse');
const WebResponse = protoRoot.lookup('TLBluetooth.WebResponse');

const MOCK = true;

class Api {
    // 公共发送请求体
    static _request(url, requestBuffer) {
        // var that = this;
        console.warn(process.env);
        var promise = new Promise((resolve) => {
            var baseUrl = url;
            axios.request({
                baseURL: baseUrl,
                method: "POST",
                // dataType: 'protobuf',
                data: requestBuffer,
                responseType: MOCK ? "json" : 'arraybuffer',
                timeout: 1500000,
            }).then(res => {
                var buf = new Uint8Array(res.data);
                var deMessage = null;
                if (res.status === 200) {
                    // var proto: any = protoRoot.lookup(resMode);
                    deMessage = WebResponse.decode(buf);
                } else {
                    deMessage = GeneralResponse.decode(buf);
                }
                resolve(deMessage);
            }).catch(error => {
                // reject(error);
                console.error("request is error --->", error)
            })
        })
        return promise;
    }
    static async getUnit8Data(payload, proto, operation) {
        var protobuf = protoRoot.lookup(proto)
        var httpUserInfo = {
            userName: "TL19056",
            userGuid: "22222222"
        };
        payload['httpUserInfo'] = httpUserInfo;
        console.warn("未编译前数据 --->", payload)
        var message = protobuf.create(payload);
        var buffer = protobuf.encode(message).finish();
        if (operation === true) {
            return buffer;
        }

        var requestBuffer = new Uint8Array([...buffer]).buffer;
        return requestBuffer
    }

    static async GetFileContent(data) {
        var url = "/api/protobuf";
        var requestBuffer = await Api.getUnit8Data(data, 'TLBluetooth.DeviceFileContentRequest');
        const res = await Api._request(url, requestBuffer, 'TLBluetooth.webresponse');
        console.log(res);
    }
}
export {
    Api
}