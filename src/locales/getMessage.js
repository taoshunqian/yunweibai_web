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
                "name", "Disk Status", "Total capacity", "Remaining capacity", "format"
            ],
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
            deviceState: ["on-line", "off-line", "unknown"],
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
             deviceState: ["on-line", "off-line", "unknown"],
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
            itemList: ["wifi Name: ", "Require password: "]
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
            columns: "nothing,Positioning,locking,Antenna pull out,Antenna short circuit,External GPS online,External GPS anomaly,error!Testing,No module,Unauthorized,have!Not connected,connect!power failure,No module,Testing,abnormal,LTE,EVDO,WCDMA!power failure,Yes - normal locking,Yes - Limited locking,nothing,have,abnormal!power failure,nothing,weak,OK,strong!power failure,connect,Not connected,login has failed,Dialing failed,dialing!Ethernet,WIFI,3G,4G,2G,nothing!nothing,on-line,off-line!off-line,on-line,Authorization expires,be limited to,conflict,invalid",
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
        }
    },
    zh: {
        home: "首页",
        toast: ["查询指令下发成功", "下发成功", "下发失败", "该摄像头不支持设置分辨率", "正在搜索,请稍等..."],
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
            note: "电话号码是运营商提供的上网号，不是本机号"
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
                "名称", "磁盘状态", "总容量", "剩余容量", "格式化"
            ],
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
             deviceState: ["在线", "离线", "未知"],
             serveState: ["启用", "禁用", "未知"],
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
            deviceState: ["在线", "离线", "未知"],
            serveState: ["启用", "禁用", "未知"],
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
                , "请输入默认网关", "请输入DNS服务器"
            ],
            radio: [
                "动态", "静态", "动态DNS", "静态DNS"
            ],
            navTitle: "设置WIFI",
            connectState: "--,禁用,已连接,未连接",
            itemList: ["wifi名称: ", "是否需要密码: "]
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
            columns: "无,定位中,锁定,天线拔出,天线短路,外部GPS在线,外部GPS异常,出错!检测中,无模块,未授权,有!未连接,连接!断电,无模块,检测中,异常,LTE,EVDO,WCDMA!断电,有-锁定正常,有-锁定受限,无,有,异常!断电,无,弱,中,强!断电,连接,未连接,注册失败,拨号失败,拨号中!以太网,WIFI,3G,4G,2G,无!无,在线,离线!离线,在线,授权过期,受限,冲突,无效",
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
        }
    }
}
