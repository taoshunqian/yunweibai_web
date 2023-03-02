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
    zh: {
        "ConfigConst" : {
            "columnsCheckbits": "无校验,奇校验,偶校验",
            "columnImage": "很差,较差,一般,好,很好,最好",
            "colimnBitrate": "定码率,变码率",
            "columnCom": `无,透传,云台,油位,TTS,AIS(视霸渔船定制),
            COMPASS(视霸渔船定制),LCD (航大),LED(航大),RFID刷卡器,万航广告屏（通立,485串口协议的油位传感器,LED闪烁灯(LED_M2),
            一拖三串口功能(AU100),华翰LED广告屏,外接GPS数据,通立标准通信协议,角度传感器,胎压,中油瑞飞指定液位仪,GPS数据透传,
            本安行车记录仪,计价器,川基车顶灯(波特率19200),JD_LED(波特率19200),微视创LED(波特率9600),清研ADAS,瑞为ADAS,河南军工ADAS,
            四川畅云,指纹识别,学生卡抓拍,苏标ADAS,云安ADAS,深圳渣土车 LED,深圳渣土车雷达,超速报警器,硕龙LED,
            TRANSMIT2-透传到指定服务器,TRANSMIT3-透传到指定服务器,OpenProtocol 控制透传,产测小板专用,中车刷卡器,图软设备,部标机LCD测试,顺禾设备,
            雄帝读卡器,串口打印保存至文件,BSD声光报警器,AAL100 声光报警器,ACR100 刷卡器,势航四方位客户显示屏,载重传感器,
            广州正安声光报警器,深圳汽车电子刷卡器,上海埃而生电气,多合一声光报警器,势航雷达,长春骏达,长春骏达客流计数器,海南称芯合意,
            赛格酒精检测,亿程读卡器,WIC磁条卡读卡器,GBT_19056,天地宏华酒精检测仪,青岛宇新F3协议液位传感器,内蒙旭一雷达,湖北东讯温度传感器
            `,
            "AlarmInfo": `近光,远光,右转,左转,倒车,制动,雾灯,示廊灯,喇叭,空调状态,空挡信号,缓速器工作,
            ABS 工作,加热器工作,离合状态,前门,中门,后门,驾驶席门,自定义门,
            载重,保留位1,保留位2,顶盖传感器信号,举升传感器信号`,

        },
        "AlarmConfigComponents" : {
            "titleColumns": [
                "型号","波特率","数据位","停止位",
                "校验位","油位类型"
            ],
            "showPickerFn": "型号为油位才可勾选",
            "onConfirm": "油位",
            "defultVal": "请选择",
        },
        "AComConfigComponents" : {
            "titleColumns": [
                "型号","波特率","数据位","停止位",
                "校验位","油位类型"
            ],
            "defultVal": "请选择",
        },
        "AlarmPicker" : {
            "template": [
                '确认', '取消'
            ],
        },
        "AlarmConfig": {
            "title": "IO序号 ",
            "columns": "近光,远光,右转,左转,倒车,制动,雾灯,示廊灯,喇叭,空调状态,空挡信号,缓速器工作,ABS 工作,加热器工作,离合状态,前门,中门,后门,驾驶席门,自定义门,载重,保留位1,保留位2,顶盖传感器信号,举升传感器信号",
            "navTitle": "顶盖",
            "filtersCOlumnsTitle": "未配置功能",
        },
        "AlarmOutput": {
            "content": [
                "输出", "远程", "手动", "联动", "测试"
            ],
            "navTitle": "IO 输出"
        },
        "CodeStream": {
            "template": [
                '总计存储大小', '通道 ', '分辨率', '帧率', '音频', '编码标准',
                '画质', '存储大小'
            ],
            "audioType": ['启用', '禁用'],
            "navTitle": "主/子码流",
            "androidStatus_fn": ['主码流', '子码流']
        },
        "CodeStreamDetails": {
            "template": [
                '音频叠加', '分辨率', '帧率', '位率类型', '位率', '画质',
                '编码标准', '存储大小'
            ],
            "navTitle": "主/子码流",
            "androidStatus_fn": ['主码流 通道', '子码流 通道']
        },
        "ComInfo": {
            "navTitle": "串口序号 ",
            "failMsg": '当前设备不支持声光报警器',
            "callJSResult": [
                '声光报警', '当前设备不支持声光报警器', '当前设备不支持声光报警器',
                '刷卡器', '当前设备不支持刷卡器', '当前设备不支持刷卡器'
            ]
        },
        "ComSettings": {
            "template": [
                "序号 ", "功能", "波特率", "数据位", "停止位", "校验位"
            ],
            "navTitle": "串口设置",
            "filterABtn": ['无校验', '奇校验', '偶校验'],
        },
        "LoadSettings": {
            "navTitle": "载重",
            "template": [
                "型号 ", "当前电压值", "当前重量", "标定数目",
                "删除", "添加", '序号', '当前重量', '标定重量'
            ],
            "templatePlaceholder": [
                "请输入", "请输入", "请输入标定数目", "请输入",
                "请输入"
            ],
            "fail": ["最多15组"]
        },
        "PTZInfo": {
            "template": [
                "协议类型 ", "解码器地址", "请输入解码器地址", "流控"
            ],
            "navTitle": "云台通道 ",
            "columnShowItem": "云台",
            "callJSResult": "云台",
        },
        "PTZSettings": {
            "template": [
                "通道 ", "波特率", "数据位", "停止位", "校验位", "协议类型", "解码器地址",
                " 位"
            ],
            "navTitle": "云台",
        },
        "ReversingCamera": {
            "template": [
                "启用", "视频通道", "触发开关", 
                "视频输出", "等待时长", "请输入等待时长", "设置区域",
                "确认", "取消"
            ],
            "navTitle": "倒车影像",
            "columnChannel": "通道",
            "columnVideoOutput": ["常无", "常有"],
            "columnTime": "30 秒,1 分钟,2 分钟,5 分钟",
        },
        "SessionSettings": {
            "template": [
                "循环覆盖", "主码流", "子码流", 
                "主码流", "子码流"
            ],
            "navTitle": "存储设置",
        },
        "TemperatureSensingState": {
            "template": [
                "温感", "状态", "名称", 
                "温度"
            ],
            "navTitle": "温感",
            "filterStatus": "禁用,丢失,正常",
            "fail": ["该设备未定制温感功能"]
        },
        "TemperatureSensingStateDetails": {
            "template": [
                "启用", "ID", "名称", 
                "温度上限报警功能","温度上限",
                "温度下限报警功能","温度下限",
                "蜂鸣器","上报频率","选择IO"
            ],
            "templatePlaceholder": [
                "ID ", "请输入名称", "请输入上限值",
                 "请输入下限值","请输入上报频率"
            ],
            "navTitle": "温度传感器 ",
        },
        "ToilLevel": {
            "template": [
                "类型", "总油量", "当前油量", 
                "当前油位","传感器数据最大值",
                "报警阀值","标定数目",
                "删除","添加","序号",
                "标定增量","标定油位"
            ],
            "templatePlaceholder": [
                "请输入", "请输入标定数目", "请输入",
                 "请输入"
            ],
            "navTitle": "油位",
            "addCalibrationInfoFn": "最多20组" // -------------
        },
        "Tyrepressure": {
            "template": [
                "传感器序号", "传感器名称", "当前胎压", 
                "当前胎温"
            ],
            "navTitle": "胎压",
        },
        "TyrepressureDerails": {
            "template": [
                "启用", "传感器名称", "最低胎压", 
                "最高胎压","最低胎温","最高胎温",
                "预览叠加","蜂鸣器","报警输出"
            ],
            "templatePlaceholder": [
                "请输入名称", "请输入胎压", "请输入胎压",
                 "请输入胎温","请输入胎温"
            ],
            "navTitle": "胎压传感器",
        },
        "AlarmInfoTwo": {
            "selectChannel": ["举升","顶盖"],
            "toast": ["未检测到,IO 通道选中当前功能, 自动匹配到通道 ","通道 "],
            "channelInfo": "通道 "
        }
    },
    tw: {
        "ConfigConst" : {
            "columnsCheckbits": "无校验,奇校验,偶校验",
            "columnImage": "很差,较差,一般,好,很好,最好",
            "colimnBitrate": "定码率,变码率",
            "columnCom": `无,透传,云台,油位,TTS,AIS(视霸渔船定制),
            COMPASS(视霸渔船定制),LCD (航大),LED(航大),RFID刷卡器,万航广告屏（通立,485串口协议的油位传感器,LED闪烁灯(LED_M2),
            一拖三串口功能(AU100),华翰LED广告屏,外接GPS数据,通立标准通信协议,角度传感器,胎压,中油瑞飞指定液位仪,GPS数据透传,
            本安行车记录仪,计价器,川基车顶灯(波特率19200),JD_LED(波特率19200),微视创LED(波特率9600),清研ADAS,瑞为ADAS,河南军工ADAS,
            四川畅云,指纹识别,学生卡抓拍,苏标ADAS,云安ADAS,深圳渣土车 LED,深圳渣土车雷达,超速报警器,硕龙LED,
            TRANSMIT2-透传到指定服务器,TRANSMIT3-透传到指定服务器,OpenProtocol 控制透传,产测小板专用,中车刷卡器,图软设备,部标机LCD测试,顺禾设备,
            雄帝读卡器,串口打印保存至文件,BSD声光报警器,AAL100 声光报警器,ACR100 刷卡器,势航四方位客户显示屏,载重传感器,
            广州正安声光报警器,深圳汽车电子刷卡器,上海埃而生电气,多合一声光报警器,势航雷达,长春骏达,长春骏达客流计数器,海南称芯合意,
            赛格酒精检测,亿程读卡器,WIC磁条卡读卡器,GBT_19056,天地宏华酒精检测仪,青岛宇新F3协议液位传感器,内蒙旭一雷达,湖北东讯温度传感器
            `,
            "AlarmInfo": `近光,远光,右转,左转,倒车,制动,雾灯,示廊灯,喇叭,空调状态,空挡信号,缓速器工作,
            ABS 工作,加热器工作,离合状态,前门,中门,后门,驾驶席门,自定义门,
            载重,保留位1,保留位2,顶盖传感器信号,举升传感器信号`
        },
        "AlarmConfigComponents" : {
            "titleColumns": [
                "型号","波特率","数据位","停止位",
                "校验位","油位类型"
            ],
            "showPickerFn": "型号为油位才可勾选",
            "onConfirm": "油位",
            "defultVal": "请选择",
        },
        "AComConfigComponents" : {
            "titleColumns": [
                "型号","波特率","数据位","停止位",
                "校验位","油位类型"
            ],
            "defultVal": "请选择",
        },
        "AlarmPicker" : {
            "template": [
                '确认', '取消'
            ],
        },
        "AlarmConfig": {
            "title": "IO序号 ",
            "columns": "近光,远光,右转,左转,倒车,制动,雾灯,示廊灯,喇叭,空调状态,空挡信号,缓速器工作,ABS 工作,加热器工作,离合状态,前门,中门,后门,驾驶席门,自定义门,载重,保留位1,保留位2,顶盖传感器信号,举升传感器信号",
            "navTitle": "顶盖",
            "filtersCOlumnsTitle": "未配置功能",
        },
        "AlarmOutput": {
            "content": [
                "输出", "远程", "手动", "联动", "测试"
            ],
            "navTitle": "IO 输出"
        },
        "CodeStream": {
            "template": [
                '总计存储大小', '通道 ', '分辨率', '帧率', '音频', '编码标准',
                '画质', '存储大小'
            ],
            "audioType": ['启用', '禁用'],
            "navTitle": "主/子码流",
            "androidStatus_fn": ['主码流', '子码流']
        },
        "CodeStreamDetails": {
            "template": [
                '音频叠加', '分辨率', '帧率', '位率类型', '位率', '画质',
                '编码标准', '存储大小'
            ],
            "navTitle": "主/子码流",
            "androidStatus_fn": ['主码流 通道', '子码流 通道']
        },
        "ComInfo": {
            "navTitle": "串口序号 ",
            "failMsg": '当前设备不支持声光报警器',
            "callJSResult": [
                '声光报警', '当前设备不支持声光报警器', '当前设备不支持声光报警器',
                '刷卡器', '当前设备不支持刷卡器', '当前设备不支持刷卡器'
            ]
        },
        "ComSettings": {
            "template": [
                "序号 ", "功能", "波特率", "数据位", "停止位", "校验位"
            ],
            "navTitle": "串口设置",
            "filterABtn": ['无校验', '奇校验', '偶校验'],
        },
        "LoadSettings": {
            "navTitle": "载重",
            "template": [
                "型号 ", "当前电压值", "当前重量", "标定数目",
                "删除", "添加", '序号', '当前重量', '标定重量'
            ],
            "templatePlaceholder": [
                "请输入", "请输入", "请输入标定数目", "请输入",
                "请输入"
            ],
            "fail": ["最多15组"] // -------------
        },
        "PTZInfo": {
            "template": [
                "协议类型 ", "解码器地址", "请输入解码器地址", "流控"
            ],
            "navTitle": "云台通道 ",
            "columnShowItem": "云台",
            "callJSResult": "云台",
        },
        "PTZSettings": {
            "template": [
                "通道 ", "波特率", "数据位", "停止位", "校验位", "协议类型", "解码器地址",
                " 位"
            ],
            "navTitle": "云台",
        },
        "ReversingCamera": {
            "template": [
                "启用", "视频通道", "触发开关", 
                "视频输出", "等待时长", "请输入等待时长", "设置区域",
                "确认", "取消"
            ],
            "navTitle": "倒车影像",
            "columnChannel": "通道",
            "columnVideoOutput": ["常无", "常有"],
            "columnTime": "30 秒,1 分钟,2 分钟,5 分钟",
        },
        "SessionSettings": {
            "template": [
                "循环覆盖", "主码流", "子码流", 
                "主码流", "子码流"
            ],
            "navTitle": "存储设置",
        },
        "TemperatureSensingState": {
            "template": [
                "温感", "状态", "名称", 
                "温度"
            ],
            "navTitle": "温感",
            "filterStatus": "禁用,丢失,正常",
            "fail": ["该设备未定制温感功能"] // -------------
        },
        "TemperatureSensingStateDetails": {
            "template": [
                "启用", "ID", "名称", 
                "温度上限报警功能","温度上限",
                "温度下限报警功能","温度下限",
                "蜂鸣器","上报频率","选择IO"
            ],
            "templatePlaceholder": [
                "ID ", "请输入名称", "请输入上限值",
                 "请输入下限值","请输入上报频率"
            ],
            "navTitle": "温度传感器 ",
        },
        "ToilLevel": {
            "template": [
                "类型", "总油量", "当前油量", 
                "当前油位","传感器数据最大值",
                "报警阀值","标定数目",
                "删除","添加","序号",
                "标定增量","标定油位"
            ],
            "templatePlaceholder": [
                "请输入", "请输入标定数目", "请输入",
                 "请输入"
            ],
            "navTitle": "油位",
            "addCalibrationInfoFn": "最多20组"
        },
        "Tyrepressure": {
            "template": [
                "传感器序号", "传感器名称", "当前胎压", 
                "当前胎温"
            ],
            "navTitle": "胎压",
        },
        "TyrepressureDerails": {
            "template": [
                "启用", "传感器名称", "最低胎压", 
                "最高胎压","最低胎温","最高胎温",
                "预览叠加","蜂鸣器","报警输出"
            ],
            "templatePlaceholder": [
                "请输入名称", "请输入胎压", "请输入胎压",
                 "请输入胎温","请输入胎温"
            ],
            "navTitle": "胎压传感器",
        },
        "AlarmInfoTwo": {
            "selectChannel": ["举升","顶盖"],
            "toast": ["未检测到,IO 通道选中当前功能, 自动匹配到通道 ","通道 "],
            "channelInfo": "通道 "
        }
    },
}