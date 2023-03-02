export default {
    en: {
        home: "HOME",
        toast: ["Query command issued successfully", "Issued successfully", "Failed to issue", "This camera does not support setting resolution", "Searching, please wait..."],
        picker: ["Confirm","Cancel"],
        carInfo: {
            label: ["Device ID", "phone number", "license plate number", "License plate color",
                "Area Code", "Manufacturer No", "VIN frame number", "License plate classification", "Engine number", "Agreement Type"],
            placeholder: [
                "Please enter the device ID", "Please enter your mobile number", "Please enter the license plate number", "Please enter the area code",
                "Please enter the manufacturer number", "Please enter VIN frame number", "Please enter the license plate category", "Please enter the engine number"
            ],
            columns: "blue,yellow,black,white,green,Yellowish green,Gradual green,other",
            navTitle: "Vehicle information",

        },
        netWork3g4g: {
            label: ["Enable", "Telephone number", "Access point", "user name", "password"],
            placeholder: ["Please enter a phone number", "Please enter the access point"
                , "enter one user name", "Please input a password", "Please enter MTU"
            ],
            button: ["Factory settings"],
            navTitle: "Data Network",
            note: "The phone number is the Internet number provided by the operator, not the local number"
        },
        actualTime: {
            title: [
                "Name: Video Status", "Name: Video Input", "Name: Network Status", "Name: Positioning Status"
            ],
            value: [
                "Status: None", "Status: None", "Status: ", "Status: "
            ],
            label: [
                "Info: None", "Info: None", "Info: ", "Info: "
            ],
            navTitle: "Real time status",
        },
        alarm: {
            title: [
                "IO", "Buzzer Enable",
                "Event Name", "delay", "Number of consecutive shots", "Enable", "type"
                , "Escalation type", "Capture mode", "Burst interval"
            ],
            navTitle: "Alarm input status",
            start: ["Not enabled", "Enable"],
            type: ["Negative trigger", "Positive trigger"],
            alarm: ["Do not report", "normal", "Emergency alarm"],
            cameraType: ["Single shot", "Double beat", "Continuous shooting"],
        },
        alarmInfo: {
            label: ["Enable", "Buzzer", "Event Name", "type",
                "delayed", "Escalation type", "Capture mode", "Number of consecutive shots", "Burst interval", 
                "Agreement Type","Logical negation","Switch channel","Alarm video channel","Capture channel"],

            placeholder: ["Please enter the event name", "Please enter delay", "Please enter the number of consecutive shots", "Please enter the continuous shooting interval"],
            logical: ["Enable","Not enable"],
            radio: ["Positive trigger", "Negative trigger"],
            columns2: "Do not report,normal,Emergency alarm",
            columns3: "Single shot,Double beat,Continuous shooting",
            channelTitle:"no",
            navTitle: "Alarm input status",
        },
        cameraInfo: {
            title: [
                "Enable", "resolving power", "Horizontal Mirror", "mirror vertically", "Set resolution"
            ],
            navTitle: ["camera ", " set up"],
        },
        cameraSettings: {
            title: [
                "Video format"
            ],
            navTitle: "Camera settings",
        },
        demarcate: {
            button: [
                "ADAS calibration", "BSM1 calibration", "BSM2 calibration", "End Wizard"
            ],
            navTitle: "Remote calibration",
        },
        diskStatus: {
            title: [
                "name", "Disk Status", "Total capacity", "Remaining capacity", "format","Usage status"
            ],
            diskStatusLang:"--,Unlocked,nothing,--,unformatted,Formatting,not used,error,already expired,cover,On video,normal",
            navTitle: "Disk Status",
            load: "format...",
            alert: ["Tips", " The command has been issued. Please check whether the device starts formatting "],
            alertMsg: ["invalid","Formatting ...","Format succeeded"],
            stateName: "Unlocked,nothing,unformatted,abnormal,normal",
            tipsConfirm: "Confirm",
        },
        platformSettings: {
            title: [
                "Server", "Server IP", "Server Port", "Server Status", "Device status"
            ],
            navTitle: "Platform configuration",
            // deviceState: ["on-line", "off-line", "unknown"],
            deviceState: ["on-line,off-line,Authorization expires,be limited to,conflict,invalid,not enabled"],
            serveState: ["Enable", "Not enabled", "unknown"],
            logonState: ["Auto", "Manual", "unknown"],
        },
        platformStatus: {
            title: [
                "platform ", "Server IP / domain name", "Server Port", "Enable", "register"
                , "Agreement Type", "Platform Type", "Local standards", "Device status"
            ],
            navTitle: "Platform status",
            columns3: "808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",
            columns4: "Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",
            //  deviceState: ["on-line", "off-line", "unknown"],
             deviceState: ["on-line,off-line,Authorization expires,be limited to,conflict,invalid,not enabled"],
             serveState: ["Enable", "Not enabled", "unknown"],
            logonState: ["automatic", "Manual", "unknown"],
            
        },
        rotaTestNsor: {
            title: [
                "Enable", "type", "Logical negation", "Pulse detection cycle", "state"
                , "Agreement Type"
            ],
            placeholder: [
                "Please enter the pulse detection cycle"
            ],
            radio: [
                "Enable", "close"
            ],
            navTitle: "Forward and reverse rotation sensor",
            columns2: "Three point magnetic touch,Pulse AD type,Single point magnetic suction type",
            columns3: "stop,Forward rotation,reversal",
        },
        serveInfo: {
            title: [
                "Enable", "register", "IP/domain name", "port", "Agreement Type"
                , "Platform Type", "Local standards","Device State"
            ],
            placeholder: [
                "Please enter IP/domain name", "Please enter the port"
            ],
            radio: [
                "Auto", "Manual"
            ],
            navTitle: "Server ",
            columns3: "808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",
            columns4: "Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",
            errorMsg: " IP Cannot be in Chinese",
        },
        settingsIP: {
            title: [
                "Enable", "WIFI Name", "password", "IP type", "IP address"
                , "Subnet mask", "Default Gateway", "DNS", "DNS Server", "Confirm"
            ],
            button: [
                "Search"
            ],
            placeholder: [
                "Please enter WIFI name", "Please input a password", "Please enter the IP address", "Please enter the subnet mask"
                , "Please enter the default gateway", "Please enter DNS server"
            ],
            radio: [
                "dynamic", "Static state", "dynamic DNS", "Static DNS"
            ],
            navTitle: "Set WIFI",
            connectState: "--,Disable,Connected,Not connected",
            itemList: ["wifi Name: ", "Require password: "],
            errorMsg: " WIFI name Cannot be in Chinese",
        },
        systemInfo: {
            navTitle: "System information",
            cellList: "Equipment model,Equipment serial number,Hardware version number, Software version,MCU version number ,empower ,Name of manufacturer ,Module model ,Module version information ,Module SN No ,SIM card IMSI ,GPS module information ,(ADAS)Product code ,Hardware version number ,Software version number ,Device ID ,ADAS ,DSM,Authorization Status ,running state ,Custom Status ",
        },
        wifiSettings: {
            title: [
                "Enable", "Module Type", "Serial No", "WIFI name", "state"
            ],
            navTitle: "WIFI settings",
            modelValue: "Testing...,Authorized,Unauthorized",
            warrantValue: "Under inspection,No module,2.4G",
            wifiStatus: "--,Disable,Connected,Not connected",
        },
        newWork: {
            columns: "nothing,Positioning,locking,Antenna pull out,Antenna short circuit,External GPS online,External GPS anomaly,error!Testing,No module,Unauthorized,have!Not connected,connect!power failure,No module,Testing,abnormal,LTE,EVDO,WCDMA!power failure,Yes - normal locking,Yes - Limited locking,nothing,have,abnormal!power failure,nothing,weak,OK,strong!power failure,connect,Not connected,login has failed,Dialing failed,dialing!Ethernet,WIFI,3G,4G,2G,nothing!nothing,on-line,off-line!off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled",
            titleColumn: "GPS,WIFI Model,WIFI Status,Model Type,SIM,3G/4G,Dial,NewWork,Video server,Satellites",
            navTitle: "NewWork",
            serverName: "Departmental server "
        },
        adas: {
            label: [
                "Vehicle width", "Camera to left side of vehicle", "Camera installation width", "Camera to bumper"
            ],
            placeholder: [
                "Please enter the vehicle width", "Please enter the distance", "Please enter the width", "Please enter the distance"
            ],
            button: "Start calibration",
            navTitle: "ADAS calibration",
        },
        dsm: {
            button: ["DSM1 calibration", "DSM2 calibration"],
            navTitle: "DSM calibration",
            dialog: [
                "Tips",
                "To exit the wizard mode, click OK. If you need to set other functions, click Cancel",
                "Confirm","Cancel"
            ],
        },
        oilParam: {
            label: [
                "Current oil level", "Current oil volume", "type", "Alarm threshold"
                , "Number of calibrations", "Total capacity", "Sensor maximum"
            ],
            placeholder: [
                "Please enter the current oil level", "Please enter the current oil quantity", "Please enter the alarm threshold"
                , "Please enter the number of calibrations", "Please enter the total capacity", "Please enter the maximum value of sensor data"
            ],
            title: "type",
            navTitle: "Oil sensor"
        },
        popupCheckbox: {
            button: [
                "Cancel", "Confirm"
            ],
        },
        stickyBottom: {
            button: [
                "Back", "Preservation", "Next", "Query", "Preservation","Completing the wizard"
            ],
            toast: "No more ~"
        },
        tab: {
            leftText: "Back",
            rightText: "Log",
            dialog: [
                "Tips",
                "To end the wizard, click OK. If you need to set other functions, click Cancel",
                "Confirm","Cancel"
            ],
            stateArr: [
                "正常","连接成功","断开","重连中","心跳超时","wifi断开","wifi连接"
            ]
        }
    },
    en2: {
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
            "failMsg": "The current device doesn't support audible.",
            "callJSResult": [
                'Audible', 
                `The current device doesn't support audible`, 
                `The current device doesn't support audible`,
                'Card Reader',
                 `The current device doesn't support Card Reader`,
                 `The current device doesn't support Card Reader`
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
            "navTitle": "LoadSettings",
            "template": [
                "Model ", "Current voltage", "Current weight", "Quantity of Calibration",
                "Delete", "Add", 'ID', 'Current weight', 'Calibrated weight'
            ],
            "templatePlaceholder": [
                "Please enter", "Please enter", "Please enter the Quantity of Calibration", "Please enter",
                "Please enter"
            ],
            "fail": ["Up to 15 groups"]
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
                " Bit"
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
            "fail": ["The device has no customized temperature sensing function"]
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
    },
}
