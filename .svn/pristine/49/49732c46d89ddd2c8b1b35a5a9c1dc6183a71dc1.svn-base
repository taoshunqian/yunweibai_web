module.exports = {
  "nested": {
    "TLFtpUpload": {
      "nested": {
        "ProtoCmdId": {
          "values": {
            "ProtoCmdBase": 0,
            "UserLogin": 30000,
            "PictureUpload": 30001,
            "SearchPictureUploadResult": 30002,
            "SearchPictureUploadDevices": 30003,
            "GetUserDevices": 30004,
            "FtpServerInfo": 30005,
            "FtpUploadPriority": 30006,
            "SearchFtpPicture": 30007
          }
        },
        "UserLoginRequest": {
          "fields": {
            "userName": {
              "type": "string",
              "id": 1
            },
            "userPwd": {
              "type": "string",
              "id": 2
            },
            "language": {
              "type": "string",
              "id": 3
            }
          }
        },
        "UserLoginResponse": {
          "fields": {
            "sessionId": {
              "type": "string",
              "id": 1
            },
            "userType": {
              "type": "uint32",
              "id": 2
            },
            "serverTimestamp": {
              "type": "uint64",
              "id": 3
            },
            "formatTimestamp": {
              "type": "string",
              "id": 4
            },
            "userName": {
              "type": "string",
              "id": 5
            },
            "companyName": {
              "type": "string",
              "id": 6
            }
          }
        },
        "GeneralResponse": {
          "fields": {
            "errType": {
              "type": "uint32",
              "id": 1
            },
            "requestCmdId": {
              "type": "uint32",
              "id": 2
            },
            "errTime": {
              "type": "string",
              "id": 3
            },
            "appType": {
              "type": "string",
              "id": 4
            },
            "errDes": {
              "type": "string",
              "id": 5
            },
            "errCode": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "DataResponse": {
          "fields": {
            "data": {
              "type": "string",
              "id": 1
            }
          }
        },
        "HttpUserInfo": {
          "fields": {
            "userName": {
              "type": "string",
              "id": 1
            },
            "userGuid": {
              "type": "string",
              "id": 2
            }
          }
        },
        "UploadPriority": {
          "values": {
            "PriorityHistory": 0,
            "PriorityCurrentTime": 1
          }
        },
        "OperatorAction": {
          "values": {
            "ActionUnknown": 0,
            "ActionAdd": 1,
            "ActionModify": 2,
            "ActionDelete": 3
          }
        },
        "PictureType": {
          "values": {
            "PictureIO": 0,
            "PictureAI": 1,
            "PictureOverSpeeding": 2,
            "PictureFatigueDriving": 3
          }
        },
        "NetworkType": {
          "values": {
            "UnknownType": 0,
            "WiFiType": 1,
            "Ethernet": 2,
            "ThreeFourG": 3
          }
        },
        "SetOperatorState": {
          "values": {
            "Success": 0,
            "Fail": 1,
            "NotReplay": 999
          }
        },
        "DayTimeRange": {
          "fields": {
            "startDay": {
              "type": "string",
              "id": 1
            },
            "endDay": {
              "type": "string",
              "id": 2
            }
          }
        },
        "HourTimeRange": {
          "fields": {
            "startHour": {
              "type": "string",
              "id": 1
            },
            "endHour": {
              "type": "string",
              "id": 2
            }
          }
        },
        "TimeRange": {
          "fields": {
            "dayTime": {
              "type": "DayTimeRange",
              "id": 1
            },
            "hourTime": {
              "type": "HourTimeRange",
              "id": 2
            }
          }
        },
        "OnePictureStrategy": {
          "fields": {
            "serverIp": {
              "type": "string",
              "id": 1
            },
            "serverPort": {
              "type": "uint32",
              "id": 2
            },
            "pictureType": {
              "type": "PictureType",
              "id": 3
            },
            "uploadPriority": {
              "type": "UploadPriority",
              "id": 4
            },
            "chnArray": {
              "rule": "repeated",
              "type": "uint32",
              "id": 5
            },
            "ioNumberArray": {
              "rule": "repeated",
              "type": "uint32",
              "id": 6
            },
            "pictureTime": {
              "type": "TimeRange",
              "id": 7
            },
            "uploadTime": {
              "type": "HourTimeRange",
              "id": 8
            },
            "networkTypeArray": {
              "rule": "repeated",
              "type": "NetworkType",
              "id": 9
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 10
            }
          }
        },
        "GetDevicePictureUploadStrategyRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            }
          }
        },
        "GetOnlineDeviceFtpConfigResponse": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "pictureStrategyArray": {
              "rule": "repeated",
              "type": "OnePictureStrategy",
              "id": 2
            }
          }
        },
        "DevicePictureUploadStrategy": {
          "fields": {
            "pictureStrategyArray": {
              "rule": "repeated",
              "type": "OnePictureStrategy",
              "id": 1
            },
            "uploadStrategyName": {
              "type": "string",
              "id": 2
            }
          }
        },
        "GetDevicePictureUploadStrategyResponse": {
          "fields": {
            "devPictureUploadStrategy": {
              "rule": "repeated",
              "type": "DevicePictureUploadStrategy",
              "id": 1
            }
          }
        },
        "SetDevicePictureUploadStrategyRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "pictureStrategyArray": {
              "rule": "repeated",
              "type": "OnePictureStrategy",
              "id": 2
            },
            "DeviceIdArray": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            },
            "uploadStrategyName": {
              "type": "string",
              "id": 4
            },
            "action": {
              "type": "OperatorAction",
              "id": 5
            }
          }
        },
        "SearchSetDeviceUploadRecordRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "startTime": {
              "type": "string",
              "id": 3
            },
            "endTime": {
              "type": "string",
              "id": 4
            }
          }
        },
        "OneSetDeviceUploadRecordInfo": {
          "fields": {
            "setRecordName": {
              "type": "string",
              "id": 1
            },
            "operator": {
              "type": "string",
              "id": 2
            },
            "operatorTime": {
              "type": "string",
              "id": 3
            },
            "operatorIp": {
              "type": "string",
              "id": 4
            },
            "operatorContent": {
              "type": "SetDevicePictureUploadStrategyRequest",
              "id": 5
            },
            "totalDevNumber": {
              "type": "uint32",
              "id": 6
            },
            "successDevNumber": {
              "type": "uint32",
              "id": 7
            },
            "failDevNumber": {
              "type": "uint32",
              "id": 8
            },
            "notReturnDevNumber": {
              "type": "uint32",
              "id": 9
            },
            "serialNumber": {
              "type": "uint32",
              "id": 10
            }
          }
        },
        "SearchSetDeviceUploadRecordResponse": {
          "fields": {
            "setDevUploadRecordArray": {
              "rule": "repeated",
              "type": "OneSetDeviceUploadRecordInfo",
              "id": 1
            }
          }
        },
        "SearchSetResultDevicesRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "setRecordName": {
              "type": "string",
              "id": 2
            },
            "serialNumber": {
              "type": "uint32",
              "id": 3
            },
            "resultArray": {
              "rule": "repeated",
              "type": "SetOperatorState",
              "id": 4
            }
          }
        },
        "OneDeviceInfo": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "deviceName": {
              "type": "string",
              "id": 2
            },
            "devReturnTime": {
              "type": "string",
              "id": 3
            },
            "setState": {
              "type": "SetOperatorState",
              "id": 4
            }
          }
        },
        "SearchSetResultDevicesResponse": {
          "fields": {
            "deviceIdArray": {
              "rule": "repeated",
              "type": "OneDeviceInfo",
              "id": 1
            }
          }
        },
        "GetUserDevicesForTL": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            }
          }
        },
        "TLMainServerFtpServerInfo": {
          "fields": {
            "enableDomain": {
              "type": "uint32",
              "id": 1
            },
            "ipAddress": {
              "type": "string",
              "id": 2
            },
            "port": {
              "type": "uint32",
              "id": 3
            },
            "domainName": {
              "type": "string",
              "id": 4
            },
            "userName": {
              "type": "string",
              "id": 5
            },
            "userPassword": {
              "type": "string",
              "id": 6
            },
            "intranetIp": {
              "type": "string",
              "id": 7
            },
            "intranetPort": {
              "type": "uint32",
              "id": 8
            }
          }
        },
        "OneFtpServerInfo": {
          "fields": {
            "serverId": {
              "type": "uint32",
              "id": 1
            },
            "serverIp": {
              "type": "string",
              "id": 2
            },
            "serverPort": {
              "type": "uint32",
              "id": 3
            },
            "userName": {
              "type": "string",
              "id": 4
            },
            "userPassword": {
              "type": "string",
              "id": 5
            },
            "bUploadServer": {
              "type": "uint32",
              "id": 6
            },
            "ftpServerAlias": {
              "type": "string",
              "id": 7
            }
          }
        },
        "SearchFtpServerInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            }
          }
        },
        "SearchFtpServerInfoResponse": {
          "fields": {
            "ftpServerArray": {
              "rule": "repeated",
              "type": "OneFtpServerInfo",
              "id": 1
            }
          }
        },
        "FtpServerCurdRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "action": {
              "type": "OperatorAction",
              "id": 2
            },
            "ftpServer": {
              "type": "OneFtpServerInfo",
              "id": 3
            }
          }
        },
        "GetUploadBaseConfigRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            }
          }
        },
        "GetUploadBaseConfigResponse": {
          "fields": {
            "uploadPriorityId": {
              "type": "uint32",
              "id": 1
            },
            "uploadPriorityState": {
              "type": "UploadPriority",
              "id": 2
            }
          }
        },
        "SetUploadBaseConfigRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "uploadPriorityId": {
              "type": "uint32",
              "id": 2
            },
            "uploadPriorityState": {
              "type": "UploadPriority",
              "id": 3
            }
          }
        },
        "GetUploadFtpPictureDaysRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumber": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "searchTime": {
              "type": "string",
              "id": 4
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "GetUploadFtpPictureDaysResponse": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "pictureDays": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            }
          }
        },
        "GetFtpOneDayPicturesRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumber": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "searchTime": {
              "type": "string",
              "id": 4
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "OneFileInfo": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "startTime": {
              "type": "string",
              "id": 2
            },
            "endTime": {
              "type": "string",
              "id": 3
            },
            "IONumber": {
              "type": "uint32",
              "id": 4
            },
            "AVChannel": {
              "type": "uint32",
              "id": 5
            },
            "fileSize": {
              "type": "uint32",
              "id": 6
            },
            "filePath": {
              "type": "string",
              "id": 7
            },
            "fileContent": {
              "type": "string",
              "id": 8
            },
            "IOTime": {
              "type": "string",
              "id": 9
            },
            "IOEventType": {
              "type": "uint32",
              "id": 10
            },
            "PictureNo": {
              "type": "uint32",
              "id": 11
            }
          }
        },
        "GetFtpOneDayPicturesResponse": {
          "fields": {
            "picturesArray": {
              "rule": "repeated",
              "type": "OneFileInfo",
              "id": 1
            }
          }
        },
        "GetPictureContentsByTimeStampRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumber": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "startTime": {
              "type": "string",
              "id": 4
            },
            "endTime": {
              "type": "string",
              "id": 5
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "OneChannelPictureContents": {
          "fields": {
            "avChannel": {
              "type": "uint32",
              "id": 1
            },
            "picturesArray": {
              "rule": "repeated",
              "type": "OneFileInfo",
              "id": 2
            }
          }
        },
        "GetPictureContentsByTimeStampResponse": {
          "fields": {
            "picturesArray": {
              "rule": "repeated",
              "type": "OneChannelPictureContents",
              "id": 1
            }
          }
        },
        "SearchTimeRangePictureListRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "ioNumberArray": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "operator": {
              "type": "string",
              "id": 4
            },
            "startTime": {
              "type": "string",
              "id": 5
            },
            "endTime": {
              "type": "string",
              "id": 6
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 7
            }
          }
        },
        "SearchTimeRangePictureListResponse": {
          "fields": {
            "picturesArray": {
              "rule": "repeated",
              "type": "OneFileInfo",
              "id": 1
            }
          }
        },
        "TLDeviceInfo": {
          "fields": {
            "DeviceId": {
              "type": "string",
              "id": 1
            },
            "DeviceName": {
              "type": "string",
              "id": 2
            },
            "DeviceParent": {
              "type": "string",
              "id": 3
            },
            "DeviceChnNum": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "SearchDeviceInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "deviceName": {
              "type": "string",
              "id": 3
            }
          }
        },
        "SearchDeviceInfoResponse": {
          "fields": {
            "deviceInfoArray": {
              "rule": "repeated",
              "type": "TLDeviceInfo",
              "id": 1
            }
          }
        },
        "SearchTreeNodeDeviceInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "searchValue": {
              "type": "string",
              "id": 2
            }
          }
        },
        "DownloadFileParam": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "filePath": {
              "type": "string",
              "id": 2
            }
          }
        },
        "DownloadMultiFtpServerPictureRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "downloadFileArray": {
              "rule": "repeated",
              "type": "DownloadFileParam",
              "id": 2
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "DownloadMultiFtpServerPictureResponse": {
          "fields": {
            "dirPath": {
              "type": "string",
              "id": 1
            },
            "fileName": {
              "type": "string",
              "id": 2
            }
          }
        },
        "TLMessageTransferRequest": {
          "fields": {
            "messageContent": {
              "type": "string",
              "id": 1
            },
            "messageCnt": {
              "type": "uint32",
              "id": 2
            },
            "deviceId": {
              "type": "string",
              "id": 3
            }
          }
        },
        "TLMessageTransferResponse": {
          "fields": {
            "errCode": {
              "type": "uint32",
              "id": 1
            },
            "responseContent": {
              "type": "string",
              "id": 2
            },
            "responseCnt": {
              "type": "uint32",
              "id": 3
            }
          }
        },
        "SearchType": {
          "values": {
            "SearchTypeUnknown": 0,
            "SearchTypeRecordFile": 1,
            "SearchTypePictureFile": 2,
            "SearchTypeUpgradeFile": 3
          }
        },
        "TLMessageGetFtpServerDevicesRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "searchFileType": {
              "type": "SearchType",
              "id": 3
            }
          }
        },
        "UploadDeviceInfo": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "deviceName": {
              "type": "string",
              "id": 2
            },
            "fileDays": {
              "rule": "repeated",
              "type": "string",
              "id": 3
            }
          }
        },
        "TLMessageGetFtpServerDevicesResponse": {
          "fields": {
            "devicesArray": {
              "rule": "repeated",
              "type": "UploadDeviceInfo",
              "id": 1
            },
            "searchFileType": {
              "type": "SearchType",
              "id": 2
            }
          }
        },
        "TLMessageGetUserFtpServerStorageInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "ftpServerInfo": {
              "type": "OneFtpServerInfo",
              "id": 3
            }
          }
        },
        "TLMessageFtpServerFileInfo": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "fileSize": {
              "type": "uint64",
              "id": 2
            },
            "createTime": {
              "type": "string",
              "id": 3
            },
            "filePath": {
              "type": "string",
              "id": 4
            },
            "fileType": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "TLMessageGetFtpDirectoryFilesInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "fileName": {
              "type": "string",
              "id": 3
            },
            "filePath": {
              "type": "string",
              "id": 5
            },
            "searchFileType": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "TLMessageFilesInfoResponse": {
          "fields": {
            "filesArray": {
              "rule": "repeated",
              "type": "TLMessageFtpServerFileInfo",
              "id": 1
            },
            "totalSize": {
              "type": "uint64",
              "id": 2
            }
          }
        },
        "TLMessageDeleteFtpDirectoryFilesInfoRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "serverId": {
              "type": "uint32",
              "id": 2
            },
            "filesArray": {
              "rule": "repeated",
              "type": "TLMessageFtpServerFileInfo",
              "id": 3
            }
          }
        },
        "SetDeleteFtpFileConfig": {
          "fields": {
            "enableAutoDeleteFile": {
              "type": "uint32",
              "id": 1
            },
            "deleteDayBefore": {
              "type": "uint32",
              "id": 2
            }
          }
        },
        "TLMessageSetDeleteFtpFileConfigRequest": {
          "fields": {
            "userInfo": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "setDelFtpConfig": {
              "type": "SetDeleteFtpFileConfig",
              "id": 2
            }
          }
        },
        "TlcsGetDeviceWithChnTestResponse": {
          "fields": {
            "id": {
              "type": "uint64",
              "id": 1
            },
            "text": {
              "type": "string",
              "id": 2
            },
            "state": {
              "type": "string",
              "id": 3
            },
            "iconSkin": {
              "type": "string",
              "id": 4
            },
            "groupType": {
              "type": "uint32",
              "id": 5
            },
            "deviceName": {
              "type": "string",
              "id": 6
            },
            "deviceId": {
              "type": "string",
              "id": 7
            },
            "deviceMaxChn": {
              "type": "uint32",
              "id": 8
            },
            "devType": {
              "type": "uint32",
              "id": 9
            },
            "devState": {
              "type": "uint32",
              "id": 10
            },
            "chnNum": {
              "type": "uint32",
              "id": 11
            },
            "name": {
              "type": "string",
              "id": 12
            },
            "pId": {
              "type": "uint32",
              "id": 13
            },
            "attachDevId": {
              "type": "string",
              "id": 14
            }
          }
        },
        "DevicesAndGroupsMessage": {
          "fields": {
            "children": {
              "rule": "repeated",
              "type": "TlcsGetDeviceWithChnTestResponse",
              "id": 1
            }
          }
        },
        "DownloadMediaType": {
          "values": {
            "DownloadMediaTypeAVData": 0,
            "DownloadMediaTypeAudio": 1,
            "DownloadMediaTypeVideo": 2,
            "DownloadMediaTypeKeyFrame": 3,
            "DownloadMediaTypeAVGData": 4,
            "DownloadMediaTypePicture": 5,
            "DownloadMediaTypeGps": 6,
            "DownloadMediaTypeRawData": 7,
            "DownloadMediaTypeOther": 8
          }
        },
        "MediaFileSearchType": {
          "values": {
            "SearchDevice": 0,
            "DownloadServer": 1,
            "StoreServer": 2
          }
        },
        "GetMediaFilelistRequest": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "logicalChannel": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "startTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "endTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "alarmType": {
              "rule": "repeated",
              "type": "uint32",
              "id": 5
            },
            "avType": {
              "type": "uint32",
              "id": 6
            },
            "streamType": {
              "type": "uint32",
              "id": 7
            },
            "storeType": {
              "type": "uint32",
              "id": 8
            },
            "searchFileType": {
              "type": "MediaFileSearchType",
              "id": 9
            },
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 10
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 11
            }
          }
        },
        "MediaFileInfo": {
          "fields": {
            "logicalChannel": {
              "type": "uint32",
              "id": 1
            },
            "startTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 2
            },
            "endTime": {
              "rule": "repeated",
              "type": "uint32",
              "id": 3
            },
            "alarmType": {
              "rule": "repeated",
              "type": "uint32",
              "id": 4
            },
            "avType": {
              "type": "uint32",
              "id": 5
            },
            "streamType": {
              "type": "uint32",
              "id": 6
            },
            "storeType": {
              "type": "uint32",
              "id": 7
            },
            "fileSize": {
              "type": "uint32",
              "id": 8
            },
            "filePath": {
              "type": "string",
              "id": 9
            },
            "fileName": {
              "type": "string",
              "id": 10
            },
            "ftpServerId": {
              "type": "uint32",
              "id": 11
            }
          }
        },
        "GetMediaFilelistResponse": {
          "fields": {
            "devIdNum": {
              "type": "uint64",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "totalFileCount": {
              "type": "uint32",
              "id": 3
            },
            "mediaFileLists": {
              "rule": "repeated",
              "type": "MediaFileInfo",
              "id": 4
            },
            "totalPacketNum": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "DownloadMediaFileType": {
          "values": {
            "DownloadMediaFileTypeMp4": 0,
            "DownloadMediaFileTypeAvi": 1,
            "DownloadMediaFileTypeWav": 2,
            "DownloadMediaFileTypeMp3": 3,
            "DownloadMediaFileTypeGps": 4,
            "DownloadMediaFileTypeJpg": 5,
            "DownloadMediaFileTypePng": 6,
            "DownloadMediaFileTypeRaw": 7
          }
        },
        "DownloadMediaInfoRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "startTime": {
              "type": "string",
              "id": 2
            },
            "endTime": {
              "type": "string",
              "id": 3
            },
            "downloadType": {
              "type": "DownloadMediaType",
              "id": 4
            },
            "channel": {
              "type": "uint32",
              "id": 5
            },
            "streamType": {
              "type": "uint32",
              "id": 6
            },
            "storeType": {
              "type": "uint32",
              "id": 7
            },
            "downloadFileFormat": {
              "type": "DownloadMediaFileType",
              "id": 8
            },
            "deviceId": {
              "type": "string",
              "id": 9
            }
          }
        },
        "DownloadMediaInfoResponse": {
          "fields": {
            "fileName": {
              "type": "string",
              "id": 1
            },
            "filePath": {
              "type": "string",
              "id": 2
            },
            "uniqueSerial": {
              "type": "uint32",
              "id": 3
            },
            "deviceId": {
              "type": "string",
              "id": 4
            }
          }
        },
        "TLDownloadMediaInfoProgressRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            },
            "fileName": {
              "type": "string",
              "id": 3
            },
            "filePath": {
              "type": "string",
              "id": 4
            },
            "uniqueSerial": {
              "type": "uint32",
              "id": 5
            }
          }
        },
        "TLDownloadMediaInfoProgressResponse": {
          "fields": {
            "deviceId": {
              "type": "string",
              "id": 1
            },
            "fileName": {
              "type": "string",
              "id": 2
            },
            "progress": {
              "type": "uint32",
              "id": 3
            },
            "bStop": {
              "type": "uint32",
              "id": 4
            },
            "recvTotalLen": {
              "type": "uint64",
              "id": 5
            }
          }
        },
        "StopDownloadMediaInfoRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "channel": {
              "type": "uint32",
              "id": 2
            },
            "deviceId": {
              "type": "string",
              "id": 3
            }
          }
        },
        "CurdResponse": {
          "fields": {
            "errType": {
              "type": "uint32",
              "id": 1
            },
            "requestCmdId": {
              "type": "uint32",
              "id": 2
            },
            "errTime": {
              "type": "string",
              "id": 3
            },
            "appType": {
              "type": "string",
              "id": 4
            },
            "errDes": {
              "type": "string",
              "id": 5
            },
            "errCode": {
              "type": "uint32",
              "id": 6
            }
          }
        },
        "FtpManageServerInfo": {
          "fields": {
            "enableDomain": {
              "type": "uint32",
              "id": 1
            },
            "domainServer": {
              "type": "string",
              "id": 2
            },
            "serverIp": {
              "type": "string",
              "id": 3
            },
            "serverPort": {
              "type": "uint32",
              "id": 4
            }
          }
        },
        "GetDeviceFtpManageResponse": {
          "fields": {
            "serverInfo": {
              "type": "FtpManageServerInfo",
              "id": 1
            }
          }
        },
        "GeneralACKResultType": {
          "values": {
            "Success": 0,
            "Fail": 1,
            "MessageError": 2,
            "NotSupport": 3,
            "AlarmConfig": 4,
            "TimeOutError": 20,
            "NoAuthority": 30,
            "NotOnline": 999
          }
        },
        "SetDeviceFtpManageRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "rule": "repeated",
              "type": "string",
              "id": 2
            },
            "serverInfo": {
              "type": "FtpManageServerInfo",
              "id": 3
            }
          }
        },
        "SetGeneralResponse": {
          "fields": {
            "setResult": {
              "type": "uint32",
              "id": 1
            },
            "resultType": {
              "type": "GeneralACKResultType",
              "id": 2
            }
          }
        },
        "GetOnlineDeviceInfoRequest": {
          "fields": {
            "httpUser": {
              "type": "HttpUserInfo",
              "id": 1
            },
            "deviceId": {
              "type": "string",
              "id": 2
            }
          }
        }
      }
    }
  }
}
