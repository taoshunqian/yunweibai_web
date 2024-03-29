import axios from 'axios';
import protoRoot from '../proto/proto'
import TLFtpUploadRoot from '../proto/TLFtpUpload'
// const pbjs = require('pbjs');
const GeneralResponse = protoRoot.lookup('TLBluetooth.GeneralResponse');
const WebResponse = protoRoot.lookup('TLBluetooth.WebResponse');

const MOCK = false;
axios.defaults.headers.post['Content-Type'] = "application/x-protobuf";
class Api {

    static _freeQequest(url, requestBuffer, type = "arraybuffer") {
        var promise = new Promise((resolve) => {
            var baseUrl = url;
            axios.request({
                baseURL: baseUrl,
                method: "POST",
                data: requestBuffer,
                responseType: type, // arraybuffer json
                timeout:15 * 1000,
            }).then(res => {
                resolve(res);
            }).catch(error => {
                console.log(error)
                var buf = new Uint8Array(error.response.data);
                var deMessage = GeneralResponse.decode(buf);
                console.log(deMessage)
                resolve([deMessage, error.response.status]);
            })
        })
        return promise;
    }
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

/*
const pbjs = require('pbjs');

export const schema = pbjs.parseSchema(`

        enum PlatformType{
            PlatformUnknown             = 0;
            WebBrowser                  = 1; //Web Browser
            Android                     = 2; //Android
            IOS                         = 3; //Ios
        }

        message VerifyCodeMessage{
            string                    verifyId       = 1;//
            string                    base64Blob     = 2;//When for Verify the result, no need Write base64Blob
            string                    verifyValue    = 3;//When Request,represent user write code,When response,success or fail
        }

        message UserLogInRequest{
            string                   userName       = 1;
            string                   userPwd        = 2;//Use Md5 Encryption
            PlatformType             platformType      = 3;//Platform Type
            VerifyCodeMessage        verifyMessage  = 4;//Verify Code
            string                   wechatid        = 5;//wechatid
        }
`).compile();


const buffer = schema.encodeUserLogInRequest({userName: "111", userPwd: "1111", platformType: "1", verifyMessage: {}, wechatid: "111"});

console.log(buffer);
const message = schema.decodeUserLogInRequest(buffer);
console.log(message);

*/ 