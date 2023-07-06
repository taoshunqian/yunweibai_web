export default {
    zh: {
        home: "首页",
        toast: ["查询指令成功", "设置成功", "设置失败", "该摄像头不支持设置分辨率", "正在搜索,请稍等..."],
        picker: ["确认","取消"],
        carInfo: {
            label: ["设备ID", "手机号码", "车牌号", "车牌颜色",
                "区域代码", "制造商编号", "VIN车架号", "车牌分类", "发动机号", "协议类型"],
            placeholder: [
                "请输入设备ID", "请输入手机号码", "请输入车牌号", "请输入区域代码",
                "请输入制造商编号", "请输入VIN车架号", "请输入车牌分类", "请输入发动机号"
            ],
            columns: "蓝色,黄色,黑色,白色,绿色,黄绿色,渐变绿,其它",
            navTitle: "车辆信息",

        },
        netWork3g4g: {
            label: ["启用", "电话号码", "接入点", "用户名", "密码"],
            placeholder: ["请输入电话号码", "请输入接入点"
                , "请输入用户名", "请输入密码", "请输入MTU"
            ],
            button: ["出厂设置"],
            navTitle: "数据网络",
            note: "电话号码是运营商提供的上网号,不是本机号"
        },
        actualTime: {
            title: [
                "名称: 视频状态", "名称: 视频输入", "名称: 网络状态", "名称: 定位状态"
            ],
            value: [
                "状态: 无", "状态: 无", "状态: ", "状态: "
            ],
            label: [
                "信息: 无", "信息: 无", "信息: ", "信息: "
            ],
            navTitle: "实时状态",
        },
        alarm: {
            title: [
                "IO序号", "蜂鸣器启用",
                "事件名称", "延迟", "连拍张数", "启用", "类型"
                , "上报类型", "抓拍模式", "连拍间隔"
            ],
            navTitle: "IO",
            start: ["不启用", "启用"],
            type: ["负触发", "正触发"],
            alarm: ["不上报", "正常", "紧急报警"],
            cameraType: ["单拍", "双拍", "连拍"],
        },
        alarmInfo: {
            label: ["启用", "蜂鸣器", "事件名称", "类型",
                "延时", "上报类型", "抓拍模式", "连拍张数", "连拍间隔", "协议类型","逻辑反","画面切换通道","报警录像通道号","抓拍通道号"],
            
            // ----------- 2023/02/16 二期新增
            labelTwo: ["IO通道","功能"],
            channelColumn: "通道 1,通道 2,通道 3,通道 4,通道 5,通道 6,通道 7,通道 8",
            filtersCOlumns: "未配置功能",
            channelColumns3: "轮询",
            // ------------------

            placeholder: ["请输入事件名称", "请输入延时", "请输入连拍张数", "请输入连拍间隔"],
            logical: ["使能","不使能"],
            radio: ["正触发", "负触发"],
            columns2: "不上报,正常,紧急报警",
            columns3: "单拍,双拍,连拍",
            channelTitle:"否",
            navTitle: "IO",
        },
        cameraInfo: {
            title: [
                "启用", "分辨率", "水平镜像", "垂直镜像", "设置分辨率"
            ],
            navTitle: ["摄像头 ", " 设置"],
        },
        cameraSettings: {
            title: [
                "视频制式"
            ],
            navTitle: "摄像头设置",
        },
        demarcate: {
            button: [
                "ADAS标定", "BSM1标定", "BSM2标定", "结束向导"
            ],
            navTitle: "远程标定",
        },
        diskStatus: {
            title: [
                "名称", "磁盘状态", "总容量", "剩余容量", "格式化","使用状态"
            ],
            diskStatusLang:"--,未锁,无,--,未格式化,格式化中,未使用,错误,已满,覆盖,录像中,正常",
            navTitle: "磁盘",
            load: "格式化...",
            alert: ["提示", " 指令已下发, 请查看设备是否开始格式化 "],
            alertMsg: ["无效","格式化中...","格式化成功"],
            stateName: "未锁,无,未格式化,异常,正常",
            tipsConfirm: "确认",
        },
        platformSettings: {
            title: [
                "服务器", "服务器IP", "服务器端口", "服务器状态", "设备状态"
            ],
            navTitle: "平台配置",
            deviceState: ["离线,在线,授权过期,受限,冲突,无效,未启用"],
            serveState: ["启用", "禁用", "未启用"],
            logonState: ["自动", "手动", "未知"],
        },
        platformStatus: {
            title: [
                "平台 ", "服务器IP / 域名", "服务器端口", "是否启用", "注册"
                , "协议类型", "平台类型", "各地标准","设备状态"
            ],
            navTitle: "平台",
            columns3: "808标准协议平台,通天星,三一,星冠,超越,云科,东莞亿程,中车,厦门瑞讯",
            columns4: "江苏,广东, 新川标,陕西",
            deviceState: ["离线,在线,授权过期,受限,冲突,无效,未启用"],
            serveState: ["启用", "禁用", "未启用"],
            logonState: ["自动", "手动", "未知"],
        },
        rotaTestNsor: {
            title: [
                "启用", "类型", "逻辑反", "脉冲检测周期", "状态"
                , "协议类型"
            ],
            placeholder: [
                "请输入脉冲检测周期"
            ],
            radio: [
                "启用", "关闭"
            ],
            navTitle: "正反转传感器",
            columns2: "三点磁触式,脉冲AD式,单点磁吸式",
            columns3: "停止,正转,反转",
        },
        serveInfo: {
            title: [
                "启用", "注册", "IP/域名", "端口", "协议类型"
                , "平台类型", "地方标准","设备状态"
            ],
            placeholder: [
                "请输入IP/域名", "请输入端口"
            ],
            radio: [
                "自动", "手动"
            ],
            navTitle: "服务器 ",
            columns3: "808标准协议平台,通天星,三一,星冠,超越,云科,东莞亿程,中车,厦门瑞讯",
            columns4: "江苏,广东, 新川标,陕西",
            errorMsg: " IP/域名 不能为中文",
        },
        settingsIP: {
            title: [
                "启用", "WIFI名称", "密码", "IP 类型", "IP 地址"
                , "子网掩码", "默认网关", "DNS", "DNS服务器", "确认"
            ],
            button: [
                "搜索"
            ],
            placeholder: [
                "请输入WIFI名称", "请输入密码", "请输入IP 地址", "请输入子网掩码"
                , "请输入默认网关", "请输入DNS服务器",
            ],
            radio: [
                "动态", "静态", "动态DNS", "静态DNS"
            ],
            navTitle: "设置WIFI",
            connectState: "--,禁用,已连接,未连接",
            itemList: ["wifi名称: ", "是否需要密码: "],
            errorMsg: " WIFI名称 不能为中文",
        },
        systemInfo: {
            navTitle: "设备",
            cellList: "设备型号,设备序列号,硬件版本号,软件版本号 ,MCU版本号 ,授权 ,制造商名称 ,模块型号 ,模块版本信息 ,模块SN号 ,SIM卡IMSI ,GPS模块信息 ,(ADAS)产品代号 ,硬件版本号 ,软件版本号 ,设备ID ,ADAS状态 ,DSM状态,授权状态 ,运行状态 ,定制状态 ",
        },
        wifiSettings: {
            title: [
                "启用", "模块类型", "序号", "WIFI名称", "状态"
            ],
            navTitle: "WIFI设置",
            modelValue: "检测中...,已授权,未授权",
            warrantValue: "检查中,无模块,2.4G",
            wifiStatus: "--,禁用,已连接,未连接",
        },
        newWork: {
            columns: "无,定位中,锁定,天线拔出,天线短路,外部GPS在线,外部GPS异常,出错!检测中,无模块,未授权,有!未连接,连接!断电,无模块,检测中,异常,LTE,EVDO,WCDMA!断电,有-锁定正常,有-锁定受限,无,有,异常!断电,无,弱,中,强!断电,连接,未连接,注册失败,拨号失败,拨号中!以太网,WIFI,3G,4G,2G,无!无,在线,离线!离线,在线,授权过期,受限,冲突,无效,未启用",
            titleColumn: "GPS,WIFI模块,WIFI状态,模块类型,SIM卡,3G/4G信号,拨号,网络类型,视频服务器,卫星数",
            navTitle: "网络",
            serverName: "部标服务器 "
        },
        adas: {
            label: [
                "车辆宽度", "摄像头到车辆左侧距离", "摄像头安装高度", "摄像头到车头保险杠距离"
            ],
            placeholder: [
                "请输入车辆宽度", "请输入距离", "请输入宽度", "请输入距离"
            ],
            button: "开始标定",
            navTitle: "ADAS标定",
        },
        dsm: {
            button: ["DSM1 标定", "DSM2 标定"],
            dialog: [
                "提示",
                "退出向导模式, 请点击确认 , 如果还需设置其他功能, 请点击取消",
                "确认","取消"
            ],
            navTitle: "DSM 标定",
        },
        oilParam: {
            label: [
                "当前油位", "当前油量", "类型", "报警阈值"
                , "标定数目", "总容量", "传感器最大值"
            ],
            placeholder: [
                "请输入当前油位", "请输入当前油量", "请输入报警阈值"
                , "请输入标定数目", "请输入总容量", "请输入传感器数据最大值"
            ],
            title: "类型",
            navTitle: "油感传感器"
        },
        popupCheckbox: {
            button: [
                "取消", "确认"
            ],
        },
        stickyBottom: {
            button: [
                "上一步", "保存", "下一步", "查询", "保存","完成向导"
            ],
            
            toast: "没有更多了~"
        },
        tab: {
            leftText: "返回",
            rightText: "Log",
            dialog: [
                "提示",
                "结束向导, 请点击确认, 如果还需设置其他功能, 请点击取消. ",
                "确认","取消"
            ],
            stateArr: [
                "正常","连接成功","断开",
                "重连中","心跳超时","wifi断开","wifi连接"
            ]
        }
    },
    zh2: {
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
}