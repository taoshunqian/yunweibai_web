/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  TLBluetooth: {
    nested: {
      ProtoCmdId: {
        values: {
          ProtoCmdBase: 0,
          HeatBeat: 200,
          ParseDeviceFile: 10000,
          CollectingRecorder: 10001,
          CollectingSpecifiedFile: 10002,
          ParameterSetting: 10003,
          GPSLocationInfoTest: 10004,
          DataSummary: 10005,
          ConnectCom: 11000,
          DisConnectCom: 11001,
          ScanCanConnectDevice: 11002
        }
      },
      ProtoCmdIdResp: {
        values: {
          ProtoCmdRespBase: 0,
          ProtoCmdRespErrResponse: 500,
          CollectingRecorderResp: 20001,
          CollectingSpecifiedFileResp: 20002,
          ParameterSettingResp: 20003,
          GPSLocationInfoTestResp: 20004,
          DataSummaryResp: 20005,
          DeviceCloseResp: 20006,
          ConnectComResp: 21000,
          DisConnectComResp: 21001,
          ScanCanConnectDeviceResp: 21002
        }
      },
      GeneralResponse: {
        fields: {
          errType: {
            type: "uint32",
            id: 1
          },
          requestCmdId: {
            type: "uint32",
            id: 2
          },
          errTime: {
            type: "string",
            id: 3
          },
          appType: {
            type: "string",
            id: 4
          },
          errDes: {
            type: "string",
            id: 5
          },
          errCode: {
            type: "uint32",
            id: 6
          }
        }
      },
      WebResponse: {
        fields: {
          code: {
            type: "uint32",
            id: 1
          },
          message: {
            type: "string",
            id: 2
          },
          returnData: {
            type: "string",
            id: 3
          }
        }
      },
      DataResponse: {
        fields: {
          data: {
            type: "string",
            id: 1
          }
        }
      },
      HttpUserInfo: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          userGuid: {
            type: "string",
            id: 2
          }
        }
      },
      DeviceFileContentRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          fileUid: {
            type: "string",
            id: 2
          }
        }
      },
      OneKeyValueInfo: {
        fields: {
          key: {
            type: "string",
            id: 1
          },
          value: {
            type: "string",
            id: 2
          }
        }
      },
      OneBlockContent: {
        fields: {
          blockType: {
            type: "uint32",
            id: 1
          },
          blockDescribe: {
            type: "string",
            id: 2
          },
          blockMsgDataArray: {
            rule: "repeated",
            type: "OneKeyValueInfo",
            id: 3
          }
        }
      },
      DeviceFileContentResponse: {
        fields: {
          fileDescribe: {
            type: "string",
            id: 1
          },
          deviceName: {
            type: "string",
            id: 2
          },
          fileBlockDescribe: {
            type: "string",
            id: 3
          },
          blockContArray: {
            rule: "repeated",
            type: "OneBlockContent",
            id: 4
          },
          fileName: {
            type: "string",
            id: 5
          }
        }
      },
      CollectingRecorderRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          executiveStandardYear: {
            type: "string",
            id: 2
          }
        }
      },
      CollectingRecorderResponse: {
        fields: {
          executiveStandardYear: {
            type: "string",
            id: 1
          },
          execChangeOrderNumber: {
            type: "string",
            id: 2
          },
          recorderTime: {
            type: "string",
            id: 4
          },
          manufactureCertifiCode: {
            type: "string",
            id: 5
          },
          certifiedProductModel: {
            type: "string",
            id: 6
          },
          createYMD: {
            type: "string",
            id: 7
          },
          productSerialNumber: {
            type: "string",
            id: 8
          },
          manufactureAbbr: {
            type: "string",
            id: 9
          },
          productModeAbbr: {
            type: "string",
            id: 10
          },
          deviceNumber: {
            type: "string",
            id: 11
          },
          deviceNumberClassify: {
            type: "string",
            id: 12
          },
          VIN: {
            type: "string",
            id: 13
          },
          serialNumber: {
            type: "string",
            id: 14
          },
          pulseFactor: {
            type: "uint32",
            id: 15
          },
          firstInstallTime: {
            type: "string",
            id: 16
          },
          checkCode: {
            type: "string",
            id: 17
          }
        }
      },
      DeviceRecordFileType: {
        values: {
          DeviceRecordFileType_Base: 0,
          DeviceRecordFileType_TransportCondition: 33,
          DeviceRecordFileType_AccidentSuspects: 34,
          DeviceRecordFileType_TimeoutDriving: 35,
          DeviceRecordFileType_DrivingInformation: 36,
          DeviceRecordFileType_LogFile: 37
        }
      },
      FileInfoRequest: {
        fields: {
          fileType: {
            type: "DeviceRecordFileType",
            id: 1
          },
          startTime: {
            type: "string",
            id: 2
          },
          endTime: {
            type: "string",
            id: 3
          }
        }
      },
      CollectingSpecifiedFileRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          fileInfoArray: {
            rule: "repeated",
            type: "FileInfoRequest",
            id: 2
          }
        }
      },
      OneRespFileInfo: {
        fields: {
          fileType: {
            type: "DeviceRecordFileType",
            id: 1
          },
          fileSize: {
            type: "uint32",
            id: 2
          },
          fileContent: {
            type: "string",
            id: 3
          }
        }
      },
      GPSInfo: {
        fields: {
          longitude: {
            type: "uint32",
            id: 1
          },
          latitude: {
            type: "uint32",
            id: 2
          },
          height: {
            type: "uint32",
            id: 3
          }
        }
      },
      OnOffSignInfo: {
        fields: {
          ignition: {
            type: "uint32",
            id: 1
          },
          brake: {
            type: "uint32",
            id: 2
          },
          leftSteering: {
            type: "uint32",
            id: 3
          },
          rightSteering: {
            type: "uint32",
            id: 4
          },
          distance: {
            type: "uint32",
            id: 5
          },
          passingLight: {
            type: "uint32",
            id: 6
          },
          rearFogLamp: {
            type: "uint32",
            id: 7
          },
          backOffCar: {
            type: "uint32",
            id: 8
          },
          carDoor: {
            type: "uint32",
            id: 9
          },
          driverSeatBelt: {
            type: "uint32",
            id: 10
          },
          notUsed5: {
            type: "uint32",
            id: 11
          },
          notUsed4: {
            type: "uint32",
            id: 12
          },
          notUsed3: {
            type: "uint32",
            id: 13
          },
          notUsed2: {
            type: "uint32",
            id: 14
          },
          notUsed1: {
            type: "uint32",
            id: 15
          },
          notUsed0: {
            type: "uint32",
            id: 16
          }
        }
      },
      DrivingConditionBlockInfo: {
        fields: {
          createTime: {
            type: "string",
            id: 1
          },
          gpsInfo: {
            type: "GPSInfo",
            id: 2
          },
          direction: {
            type: "uint32",
            id: 3
          },
          canSpeed: {
            type: "uint32",
            id: 4
          },
          onOffSignInfo: {
            type: "OnOffSignInfo",
            id: 5
          },
          satelliteSpeed: {
            type: "uint32",
            id: 6
          },
          dataStateBit: {
            rule: "repeated",
            type: "uint32",
            id: 7
          },
          calibrationCode: {
            type: "string",
            id: 8
          }
        }
      },
      AccidentSuspectBlockInfo: {
        fields: {
          endTime: {
            type: "string",
            id: 1
          },
          motorVehicleDrivNo: {
            type: "string",
            id: 2
          },
          gpsInfo: {
            type: "GPSInfo",
            id: 3
          },
          canSpeedArray: {
            rule: "repeated",
            type: "uint32",
            id: 4
          },
          onOffSignArray: {
            rule: "repeated",
            type: "OnOffSignInfo",
            id: 5
          },
          calibrationCode: {
            type: "string",
            id: 6
          }
        }
      },
      DrivingTimeoutBlockInfo: {
        fields: {
          motorVehicleDrivNo: {
            type: "string",
            id: 1
          },
          startTime: {
            type: "string",
            id: 2
          },
          startGps: {
            type: "GPSInfo",
            id: 3
          },
          endTime: {
            type: "string",
            id: 4
          },
          endGps: {
            type: "GPSInfo",
            id: 5
          },
          calibrationCode: {
            type: "string",
            id: 6
          }
        }
      },
      DrivingInformationBlockInfo: {
        fields: {
          currentTime: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          MotorVehicleDrivNo: {
            type: "string",
            id: 3
          },
          DriverPicture: {
            type: "string",
            id: 4
          }
        }
      },
      LogFileType: {
        values: {
          logFileTypeUnknown: 0,
          powerOn: 17,
          powerOff: 18,
          setUpVehiclePlate: 33,
          setUpVehiclePlateClassify: 34,
          setVin: 35,
          setSerialNumber: 36,
          setPulseCoefficient: 37,
          firstInstallTime: 38,
          setUniqueNumber: 39,
          satelliteCorrection: 40,
          selfCheckNormal: 49,
          selfCheckNotComplate: 50,
          installSettingExceltion: 51,
          speedException: 52,
          satelliteSignalExceltion: 53,
          onOffSignalException: 54,
          selfTestNormal: 65,
          selfTestException: 66,
          memoryException: 67,
          satelliteModuleException: 68,
          communicateModuleException: 69,
          signalInputError: 70,
          speedStateNormal: 81,
          speedStateException: 82,
          usbDataExport: 97,
          blueToothExport: 98
        }
      },
      LogFileBlockInfo: {
        fields: {
          createTime: {
            type: "string",
            id: 1
          },
          logType: {
            type: "LogFileType",
            id: 2
          },
          logDescribe: {
            type: "string",
            id: 3
          },
          calibrationCode: {
            type: "string",
            id: 4
          }
        }
      },
      CollectingSpecifiedFileResponse: {
        fields: {
          fileInfoArray: {
            rule: "repeated",
            type: "OneRespFileInfo",
            id: 1
          }
        }
      },
      ParameterSettingRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          manufactureCertifiCode: {
            type: "string",
            id: 2
          },
          certifiedProductModel: {
            type: "string",
            id: 3
          },
          createYMD: {
            type: "string",
            id: 4
          },
          productSerialNumber: {
            type: "string",
            id: 5
          },
          manufactureAbbr: {
            type: "string",
            id: 6
          },
          productModeAbbr: {
            type: "string",
            id: 7
          },
          deviceNumber: {
            type: "string",
            id: 8
          },
          deviceNumberClassify: {
            type: "string",
            id: 9
          },
          VIN: {
            type: "string",
            id: 10
          },
          serialNumber: {
            type: "string",
            id: 11
          },
          pulseFactor: {
            type: "uint32",
            id: 15
          },
          firstInstallTime: {
            type: "string",
            id: 16
          },
          dataSummary: {
            type: "string",
            id: 17
          }
        }
      },
      GPSLocationInfoTestRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          sendDataDuring: {
            type: "uint32",
            id: 2
          },
          operatorType: {
            type: "uint32",
            id: 3
          }
        }
      },
      GGAData: {
        fields: {
          time: {
            type: "string",
            id: 1
          },
          locationState: {
            type: "uint32",
            id: 2
          },
          latitude: {
            type: "string",
            id: 3
          },
          latitudeDimension: {
            type: "string",
            id: 4
          },
          longitude: {
            type: "string",
            id: 5
          },
          longitudeDimension: {
            type: "string",
            id: 6
          },
          floorSpeed: {
            type: "string",
            id: 7
          },
          direction: {
            type: "string",
            id: 8
          },
          magnetic: {
            type: "string",
            id: 9
          },
          declination: {
            type: "string",
            id: 10
          },
          modeIndicator: {
            type: "string",
            id: 11
          },
          checkCode: {
            type: "string",
            id: 12
          }
        }
      },
      RMCData: {
        fields: {
          time: {
            type: "string",
            id: 1
          },
          locationState: {
            type: "uint32",
            id: 2
          },
          latitude: {
            type: "string",
            id: 3
          },
          latitudeDimension: {
            type: "string",
            id: 4
          },
          longitude: {
            type: "string",
            id: 5
          },
          longitudeDimension: {
            type: "string",
            id: 6
          },
          satellitesNumber: {
            type: "uint32",
            id: 7
          },
          horizontalAccuracy: {
            type: "string",
            id: 8
          },
          antennaHeight: {
            type: "string",
            id: 9
          },
          height: {
            type: "string",
            id: 10
          },
          rTCMNumber: {
            type: "string",
            id: 11
          },
          diffBaseStateNumber: {
            type: "string",
            id: 12
          },
          checkCode: {
            type: "string",
            id: 13
          }
        }
      },
      GPSLocationInfoTestResponse: {
        fields: {
          GGADataArray: {
            rule: "repeated",
            type: "GGAData",
            id: 1
          },
          RMCDataArray: {
            rule: "repeated",
            type: "RMCData",
            id: 2
          }
        }
      },
      DataSummaryRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          communicationDevTime: {
            type: "string",
            id: 2
          }
        }
      },
      DataSummaryResponse: {
        fields: {
          recorderTime: {
            type: "string",
            id: 1
          },
          manufactureCertifiCode: {
            type: "string",
            id: 2
          },
          certifiedProductModel: {
            type: "string",
            id: 3
          },
          createYMD: {
            type: "string",
            id: 4
          },
          productSerialNumber: {
            type: "string",
            id: 5
          },
          manufactureAbbr: {
            type: "string",
            id: 6
          },
          productModeAbbr: {
            type: "string",
            id: 7
          },
          deviceNumber: {
            type: "string",
            id: 8
          },
          deviceNumberClassify: {
            type: "string",
            id: 9
          },
          VIN: {
            type: "string",
            id: 10
          },
          serialNumber: {
            type: "string",
            id: 11
          },
          pulseFactor: {
            type: "uint32",
            id: 12
          },
          firstInstallTime: {
            type: "string",
            id: 13
          },
          dataSummary: {
            type: "string",
            id: 14
          }
        }
      },
      ConnectComRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          comNumber: {
            type: "uint32",
            id: 2
          },
          computeUniqueSession: {
            type: "string",
            id: 3
          },
          comBaudRate: {
            type: "uint32",
            id: 4
          }
        }
      },
      DisComRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          }
        }
      },
      ScanCanConnectDeviceRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          }
        }
      },
      SerialPortDeviceInfo: {
        fields: {
          computeName: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          computeUniqueSession: {
            type: "string",
            id: 3
          }
        }
      },
      ScanCanConnectDeviceResponse: {
        fields: {
          serialPortArray: {
            rule: "repeated",
            type: "SerialPortDeviceInfo",
            id: 1
          }
        }
      },
      UserLogInRequest: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          userPassword: {
            type: "string",
            id: 2
          },
          lang: {
            type: "string",
            id: 3
          },
          appType: {
            type: "string",
            id: 4
          }
        }
      },
      UserLogInResponse: {
        fields: {
          sessionId: {
            type: "string",
            id: 1
          },
          userType: {
            type: "uint32",
            id: 2
          }
        }
      },
      SendCustomMessageToDeviceRequest: {
        fields: {
          httpUserInfo: {
            type: "HttpUserInfo",
            id: 1
          },
          sendCont: {
            type: "string",
            id: 2
          },
          sendHex: {
            type: "uint32",
            id: 3
          }
        }
      },
      SendCustomMessageToDeviceResponse: {
        fields: {
          recvCont: {
            type: "string",
            id: 1
          },
          sendHex: {
            type: "uint32",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
