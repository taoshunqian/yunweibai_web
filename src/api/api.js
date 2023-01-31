import axios from 'axios';
import protoRoot from '../proto/proto'
import TLFtpUploadRoot from '../proto/TLFtpUpload'

const GeneralResponse = protoRoot.lookup('TLBluetooth.GeneralResponse');
const WebResponse = protoRoot.lookup('TLBluetooth.WebResponse');

const MOCK = false;

class Api {
    // 公共发送请求体
    static _request(url, requestBuffer, resMode = WebResponse) {
        var promise = new Promise((resolve) => {
            var baseUrl = url;
            axios.request({
                baseURL: baseUrl,
                method: "POST",
                data: requestBuffer,
                responseType: MOCK ? "json" : 'arraybuffer',
                timeout: 5 * 1000,
            }).then(res => {
                var buf = new Uint8Array(res.data);
                var deMessage = null;
                if (res.status === 200) {
                    // var proto: any = protoRoot.lookup(resMode);
                    deMessage = resMode.decode(buf);
                } else {
                    deMessage = GeneralResponse.decode(buf);
                }
                resolve(deMessage);
            }).catch(error => {
                console.error("request is error --->", error)
            })
        })
        return promise;
    }
    // 序列化数据
    static async getUnit8Data(payload, proto, operation) {
        var protobuf = TLFtpUploadRoot.lookup(proto)
        var httpUserInfo = {
            userName: "superman",
            userGuid: "8e2d5151-5415-495e-af14-4bdcef941e06"
        };
        payload['userInfo'] = httpUserInfo;
        console.warn("未编译前数据 --->", payload)
        var message = protobuf.create(payload);
        var buffer = protobuf.encode(message).finish();
        if (operation === true) {
            return buffer;
        }
        var requestBuffer = new Uint8Array([...buffer]).buffer;
        return requestBuffer
    }
    // 序列化数据 2
    static getUnit8Data2(payload, protobuf) {
        payload.userInfo = {
            userName: "superman",
            userGuid: "26ad5932-f192-49a4-8242-b5772f307cbd",
            lang: "zh"
        }
        var message = protobuf.create(payload);
        var buffer = protobuf.encode(message).finish();
        var requestBuffer = new Uint8Array([...buffer]).buffer;
        return requestBuffer
    }
}
export {
    Api
}