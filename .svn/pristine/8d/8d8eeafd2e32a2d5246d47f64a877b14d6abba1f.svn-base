
import { Api } from '@/api/api.js';

var protobuf = require('@/weichatPb/protobuf.js');
const TLFtpUpload = require("@/proto/TLFtpUpload.js");
var tlcsprotobufRoot = protobuf.Root.fromJSON(TLFtpUpload);

var GetDevicePictureUploadStrategyRequest = tlcsprotobufRoot.lookupType("GetDevicePictureUploadStrategyRequest");
var GetDevicePictureUploadStrategyResponse = tlcsprotobufRoot.lookupType("GetDevicePictureUploadStrategyResponse");


export async function GetFileContent(data) {
    var url = "/api/protobuf";
    var requestBuffer = await Api.getUnit8Data(data, 'TLBluetooth.DeviceFileContentRequest');
    const res = await Api._request(url, requestBuffer, 'TLBluetooth.webresponse');
    console.log(res);
}

export const GetDevicePictureUploadStrategy = async (data) => {
    var url = "http://116.247.83.156:9341/GetDevicePictureUploadStrategy";
    var requestBuffer = await Api.getUnit8Data2(data, GetDevicePictureUploadStrategyRequest);
    const res = await Api._request(url, requestBuffer, GetDevicePictureUploadStrategyResponse);
    console.log(res);
}
