export default {
    en: {
        "ConfigConst" : {
            "columnsCheckbits": "None,Odd Parity,Even Parity",
            "columnImage": "Poor,Fair,General,Good,Great,Excellent",
            "colimnBitrate": "CBR,VBR",
            "columnCom": `None,Pass-through,Camera Pan,Fuel,TTS,AIS,
            COMPASS,LCD ,LED,RFID CR,WH_Advertising Screen,LED_M2,
            AU100,HH_LED_Advertising Screen,GPS,TL_protocol,Angle,PSI,ZY_Fuel,GPS Pass-through,
            BenAN,Taximeter,Chuanjiche,JD_LED,WSC_LED,QY_ADAS,RuiWei_ADAS,HNJG_ADAS,
            Changyun,FingerPrint,Student_card_snap,Subiao_ADAS,Yunan_ADAS,SZ_muck_truck_LED,SZ_muck_truck_radar,Overspeed Alarm,Shuolong_LED,
            TRANSMIT2-透传到指定服务器,TRANSMIT3-透传到指定服务器,OpenProtocol_控制透传,Production_test_boards,Zhongche_CR,Turuan,Bubiaoji_LCD_Test,Shunhe,
            Xiongdi_CR,串口打印保存至文件,BSD_Audible,AAL100_Audible,ACR100_CR,Shi_Hang,Load,
            GZ_ZhengAn_Audible,SZ_AE_CR,ALson,Multi_in_one_Audible,ShiHang_radar,JunDa,JunDa_counter,海南称芯合意,
            赛格_Alcohol detection,亿程CR,WIC_magnetic stripe card_CR,GBT_19056,天地宏华_Alcohol detection,青岛宇新_Fuel,内蒙旭一_radar,湖北东讯_Temperature sensor
            `,
            "AlarmInfo": `passing beam,high beam,turn right,turn left,back car,braking,fog light,corridor light,
			loudspeaker,Air conditioning status,neutral signal,retarder operation,ABS,
			Heater,Cluth,front door, middle door, rear door, driver's door, custom door, 
			load, reserved position 1, reserved position 2, top cap sensor signal, lift sensor signal`
        },
        "AlarmConfigComponents" : {
            "titleColumns": [
                "Model","Baud Rate","Word Size","Stop Bits",
                "Parity Bit","Fuel_Type"
            ],
            "showPickerFn": "Can only be checked if the type is Fuel.",
            "onConfirm": "Fuel",
            "defultVal": "Please select",
        },
        "AComConfigComponents" : {
            "titleColumns": [
                "Model","Baud Rate","Word Size","Stop Bits",
                "Parity Bit","Fuel_Type"
            ],
            "defultVal": "Please select",
        },
        "AlarmPicker" : {
            "template": [
                'Confirm', 'Cancel'
            ],
        },
        "AlarmConfig": {
            "title": "IO ID ",
            "columns": `passing beam,high beam,turn right,turn left,back car,braking,fog light,
			corridor light,loudspeaker,Air conditioning status,neutral signal,retarder operation,ABS,
			Heater,Cluth,front door, middle door, rear door, driver's door, custom door,
			load, reserved position 1, reserved position 2, top cap sensor signal, lift sensor signal`,
			
            "navTitle": "top cap",
            "filtersCOlumnsTitle": "Feature is not configured",
        },
        "AlarmOutput": {
            "content": [
                "Output", "Remote", "Manual", "Linkaged", "Test"
            ],
            "navTitle": "IO Output"
        },
        "CodeStream": {
            "template": [
                'Total Storage Size', 'Channel ', 'Resolution', 'Frame Rate', 'Audio', 'Coding Standard',
                'Picture Quality', 'Storage Size'
            ],
            "audioType": ['On', 'Off'],
            "navTitle": "Main/Sub_stream",
            "androidStatus_fn": ['Main_stream', 'Sub_stream']
        },
        "CodeStreamDetails": {
            "template": [
                'Audio', 'Resolution', 'Frame Rate', 'Bit Rate Type', 'Bit Rate', 'Picture Quality',
                'Coding Standard', 'Storage Size'
            ],
            "navTitle": "Main/Sub_stream",
            "androidStatus_fn": ['Main_stream Channel', 'Sub_stream Channel']
        },
        "ComInfo": {
            "navTitle": "Serial Port ID ",
            "failMsg": `The current device doesn't support audible.`,
            "callJSResult": [
                'Audible', `The current device doesn't support audible', 'The current device doesn't support audible`,
                'Card Reader', `The current device doesn't support Card Reader', 'The current device doesn't support Card Reader`
            ]
        },
        "ComSettings": {
            "template": [
                "ID ", "Function", "Baud Rate", "Word Size", "Stop Bits", "Parity Bit"
            ],
            "navTitle": "Serial Port Setting",
            "filterABtn": ['None', 'Odd Parity', 'Even Parity'],
        },
        "LoadSettings": {
            "template": [
                "Model ", "Current voltage", "Current weight", "Quantity of Calibration",
                "Delete", "Add", 'ID', 'Current weight', 'Calibrated weight'
            ],
            "templatePlaceholder": [
                "Please enter", "Please enter", "Please enter the Quantity of Calibration", "Please enter",
                "Please enter"
            ],
        },
        "PTZInfo": {
            "template": [
                "Protocol type ", "Decoder address", "Please enter the decoder address", "Flow control"
            ],
            "navTitle": "Camera PanChannel ",
            "columnShowItem": "Camera Pan",
            "callJSResult": "Camera Pan",
        },
        "PTZSettings": {
            "template": [
                "Channel ", "Baud Rate", "Word Size", "Stop Bits", "Parity Bit", "Protocol type", "Decoder address",
                " 位"
            ],
            "navTitle": "Camera Pan",
        },
        "ReversingCamera": {
            "template": [
                "On", "Video Channel", "Trigger Switch", 
                "Video Output", "Waiting time", "Please enter the waiting time", "Setting",
                "Confirm", "Cancel"
            ],
            "navTitle": "RVC",
            "columnChannel": "Channel",
            "columnVideoOutput": ["Empty", "Exist"],
            "columnTime": "30 s,1 min,2 min,5 min",
        },
        "SessionSettings": {
            "template": [
                "Loop Coverage", "Main_stream", "Sub_stream", 
                "Main_stream", "Sub_stream"
            ],
            "navTitle": "Storage Settings",
        },
        "TemperatureSensingState": {
            "template": [
                "Temperature Sensing", "Status", "Name", 
                "Temperature"
            ],
            "navTitle": "Temperature Sensing",
            "filterStatus": "Off,Lose,Normal"
        },
        "TemperatureSensingStateDetails": {
            "template": [
                "On", "ID", "Name", 
                "Temperature upper limit alarm Function","Upper limit",
                "Temperature Lower limit alarm Function","Lower limit",
                "Buzzer","Reporting frequency","Select IO"
            ],
            "templatePlaceholder": [
                "ID ", "Please enter Name", "Please enter the upper limit",
                 "Please enter the lower value","Please enter the reporting frequency"
            ],
            "navTitle": "Temperature sensor ",
        },
        "ToilLevel": {
            "template": [
                "Tpye", "Total burn-off", "Current fuel volume", 
                "Current Fuel","Sensor data maximum",
                "Alarm threshold","Quantity of Calibration",
                "Delete","Add","ID",
                "Calibrated increment","Calibrated Fuel"
            ],
            "templatePlaceholder": [
                "Please enter", "Please enterQuantity of Calibration", "Please enter",
                 "Please enter"
            ],
            "navTitle": "Fuel",
            "addCalibrationInfoFn": "Up to 20 groups"
        },
        "Tyrepressure": {
            "template": [
                "sensorID", "sensorName", "CurrentPSI", 
                "Current tire temperature"
            ],
            "navTitle": "PSI",
        },
        "TyrepressureDerails": {
            "template": [
                "On", "SensorName", "The lowest PSI", 
                "The highest PSI","The lowest tire temperature","The highest tire temperature",
                "Preview Overlay","Buzzer","Alarm Output"
            ],
            "templatePlaceholder": [
                "Please enterName", "Please enterPSI", "Please enterPSI",
                 "Please entertire temperature","Please entertire temperature"
            ],
            "navTitle": "PSIsensor",
        },
        "AlarmInfoTwo": {
            "selectChannel": ["lift","top cap"],
            "toast": ["Can't detect! The IO Channel is selecting current function and automatically matching to Channel ","Channel "],
            "channelInfo": "Channel "
        }
    }
}   