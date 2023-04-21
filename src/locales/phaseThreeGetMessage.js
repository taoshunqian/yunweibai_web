export default {
    ru: {
        "AnalogTrigger": {
            "template": [
                "模拟速度"
            ],
            "navTitle": "模拟触发",
            "adas": `ADAS,0,0x01*前向碰撞报警!ADAS,0,0x02*车道偏离报警!ADAS,0,0x03*车距过近报警!ADAS,0,0x04*行人碰撞报警!ADAS,0,0x05*频繁变道报警!ADAS,0,0x07*障碍物报警!ADAS,0,0x10*道路标志识别事件!ADAS,0,0x11*adas抓拍事件`,
            "dsm1": `DSM,0,0x01*疲劳驾驶报警哈欠!DSM,0,0xFE*闭眼!DSM,0,0x02*接打电话报警!DSM,0,0x03*抽烟报警!DSM,0,0x04*分神驾驶报警!DSM,0,0x05*驾驶员异常报警!DSM,0,0x07*请勿遮挡摄像头!DSM,0,0x10*dsm抓拍事件!DSM,0,0x11*驾驶员变更!DSM,0,0x12*IC 抓拍事件!DSM,0,0x20*抓拍事件!DSM,0,0x1F*红外阻断`,
            "dsm2": `DSM,1,0x0A*未系安全带!DSM,1,0x0C*双手脱离方向盘!DSM,1,0x0D*玩手机`,
            "bsd1": `BSD,0,0x03*盲区报警`,
            "bsd2": `BSD,1,0x04*盲区报警`
        },
        "AudioFrequency": {
            "navTitle": "音频设置",
            "template": `输入增益!输出增益!TTS音量!声光报警器音量!预览声音叠加`
        },
        "BootPreview": {
            "navTitle": "开机预览",
            "template": "轮询间隔,延迟间隔,预览通道,显示模式",
            "model": `单画面*0!四画面1-4*1!六画面*2!八画面*3!九画面*4!四画面5-8*5!垂直分割的两画面*6!水平分割的两画面*7!上一下二的三画面*8!垂直H的四画面*9!水平H的四画面*10!五画面*11!五画面(IPC)*12!川字形的三画面*13!上二下一的三画面*14!十二画面*15!三分割六画面*16`,
            "pollingAndDelayed": `否*0!5 s*1!10 s*2!20 s*3!30 s*4!1 min*5!2 min*6!5 min*7!`
        },
        "PowerSettings": {
            "navTitle": "电源设置",
            "template": "当前电压,电源类型,关机电压,开机电压,关机电压,开机电压",
            "powerType": "12V,24V,自动"
        },
        "PreviewOverlay": {
            "navTitle": "预览叠加",
            "title": "叠加",
            "template": `车牌号码*1,通道名*2,日期时间*3,经纬度*4,GPS速度*5,超速报警*6,IO消息*7,磁盘状态*8,疲劳驾驶*9,视频短路*10,温度*11,连续驾驶时间*12,车辆脉冲速度*13,正反转传感器*14,站名*15,`,
        },
        "ShutDown": {
            "navTitle": "开关机",
            "template": `延时关机,延时关机,不关机,延时时长,休眠,位置上报频率,定时开关机,日期,时间段,使能,开机时间,开机时长,选择时间`,
            "date": "周一,周二,周三,周四,周五,周六,周日"
        }
    },
    en: {
        "AnalogTrigger": {
            "template": [
                "simulation speed"
            ],
            "navTitle": "analog trigger",
            "adas": `ADAS,0,0x01*Forward collision alarm!ADAS,0,0x02*lane departure warning!ADAS,0,0x03*Alarm for close proximity!ADAS,0,0x04*Pedestrian collision alarm!ADAS,0,0x05*Frequent lane change alarm!ADAS,0,0x07*Obstacle alarm!ADAS,0,0x10*Road sign recognition event!ADAS,0,0x11*Adas capture event`,
            "dsm1": `DSM,0,0x01*Fatigue driving warning yawn!DSM,0,0xFE*close the eyes!DSM,0,0x02*Call the police on the phone!DSM,0,0x03*Smoking alarm!DSM,0,0x04*Distracted driving alarm!DSM,0,0x05*Driver abnormal alarm!DSM,0,0x07*Do not block the camera!DSM,0,0x10*DSM capture event!DSM,0,0x11*Driver change!DSM,0,0x12*IC Capture events!DSM,0,0x20*Capture events!DSM,0,0x1F*Infrared blocking`,
            "dsm2": `DSM,1,0x0A*Not wearing a seat belt!DSM,1,0x0C*Hands off the steering wheel!DSM,1,0x0D*play with the smarthphone`,
            "bsd1": `BSD,0,0x03*Blind zone alarm`,
            "bsd2": `BSD,1,0x04*Blind zone alarm`
        },
        "AudioFrequency": {
            "navTitle": "audio setup",
            "template": `Input Gain!Output Gain!TTS volume!Audible and visual alarm volume!Preview sound overlay`
        },
        "BootPreview": {
            "navTitle": "Boot Preview",
            "template": "polling interval,delay interval,Preview Channel,display mode",
            "model": `Single screen*0!Four screens 1-4*1!Six screens*2!Eight screens*3!Nine screens*4!Four screens 5-8*5!Two vertically divided screens*6!Two horizontally divided screens*7!Three scenes from the previous two*8!Four screens of vertical H*9!Four screens of horizontal H*10!Five screens*11!Five screens(IPC)*12!Three screens in the Sichuan style*13!Three screens of top two and bottom one*14!Twelve screens*15!Three Divisions and Six Screens*16`,
            "pollingAndDelayed": `no*0!5 s*1!10 s*2!20 s*3!30 s*4!1 min*5!2 min*6!5 min*7!`
        },
        "PowerSettings": {
            "navTitle": "Power settings",
            "template": "Current Voltage,Power source,Shutdown voltage,power voltage,Shutdown voltage,power voltage",
            "powerType": "12V,24V,automatic"
        },
        "PreviewOverlay": {
            "navTitle": "Preview Overlay",
            "title": "superposition",
            "template": `license plate*1,channel name*2,Date Time*3,latitude and longitude*4,GPS speed*5,OVERSPEED*6,IO Message*7,Disk Status*8,fatigue driving*9,Video short circuit*10,temperature*11,Continuous driving time*12,Vehicle pulse speed*13,Forward and reverse sensors*14,station name*15,`,
        },
        "ShutDown": {
            "navTitle": "on/off",
            "template": `Delayed shutdown,Delayed shutdown,Do not shut down,Delay duration,hibernate,Location reporting frequency,Timing on/off machine,date,time slot,enable,on time,Boot time,Timing`,
            "date": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"
        }
    },
    zh: {
        "AnalogTrigger": {
            "template": [
                "模拟速度"
            ],
            "navTitle": "模拟触发",
            "adas": `ADAS,0,0x01*前向碰撞报警!ADAS,0,0x02*车道偏离报警!ADAS,0,0x03*车距过近报警!ADAS,0,0x04*行人碰撞报警!ADAS,0,0x05*频繁变道报警!ADAS,0,0x07*障碍物报警!ADAS,0,0x10*道路标志识别事件!ADAS,0,0x11*adas抓拍事件`,
            "dsm1": `DSM,0,0x01*疲劳驾驶报警哈欠!DSM,0,0xFE*闭眼!DSM,0,0x02*接打电话报警!DSM,0,0x03*抽烟报警!DSM,0,0x04*分神驾驶报警!DSM,0,0x05*驾驶员异常报警!DSM,0,0x07*请勿遮挡摄像头!DSM,0,0x10*dsm抓拍事件!DSM,0,0x11*驾驶员变更!DSM,0,0x12*IC 抓拍事件!DSM,0,0x20*抓拍事件!DSM,0,0x1F*红外阻断`,
            "dsm2": `DSM,1,0x0A*未系安全带!DSM,1,0x0C*双手脱离方向盘!DSM,1,0x0D*玩手机`,
            "bsd1": `BSD,0,0x03*盲区报警`,
            "bsd2": `BSD,1,0x04*盲区报警`,
            "fail": "参数输入有误"
        },
        "AudioFrequency": {
            "navTitle": "音频设置",
            "template": `输入增益!输出增益!TTS音量!声光报警器音量!预览声音叠加`
        },
        "BootPreview": {
            "navTitle": "开机预览",
            "template": "轮询间隔,延迟间隔,预览通道,显示模式",
            "model": "单画面*0,四画面1-4*1,六画面*,八画面*3,九画面*4,四画面5-8*5,垂直分割的两画面*6,水平分割的两画面*7,上一下二的三画面*8,垂直H的四画面*9,水平H的四画面*10,五画面*11,五画面(IPC)*12,川字形的三画面*13,上二下一的三画面*14,十二画面*15,三分割六画面*16",
            "pollingAndDelayed": "否*0,5 秒*1,10 秒*2,20 秒*3,30 秒*4,1 分钟*5,2 分钟*6,5 分钟*7"
        },
        "PowerSettings": {
            "navTitle": "电源设置",
            "template": "当前电压,电源类型,关机电压,开机电压,关机电压,开机电压",
            "powerType": "12V,24V,自动",
            "fail": "参数输入有误"
        },
        "PreviewOverlay": {
            "navTitle": "预览叠加",
            "title": "叠加",
            "template": `车牌号码*1,通道名*2,日期时间*3,经纬度*4,GPS速度*5,超速报警*6,IO消息*7,磁盘状态*8,疲劳驾驶*9,视频短路*10,温度*11,连续驾驶时间*12,车辆脉冲速度*13,正反转传感器*14,站名*15,`,
        },
        "ShutDown": {
            "navTitle": "开关机",
            "template": `延时关机,延时关机,不关机,延时时长,休眠,位置上报频率,定时开关机,日期,时间段,使能,开机时间,开机时长,选择时间`,
            "date": "周一,周二,周三,周四,周五,周六,周日"
        }
    },
    tw: {
        "AnalogTrigger": {
            "template": [
                "模拟速度"
            ],
            "navTitle": "模拟触发",
            "adas": `ADAS,0,0x01*前向碰撞报警!ADAS,0,0x02*车道偏离报警!ADAS,0,0x03*车距过近报警!ADAS,0,0x04*行人碰撞报警!ADAS,0,0x05*频繁变道报警!ADAS,0,0x07*障碍物报警!ADAS,0,0x10*道路标志识别事件!ADAS,0,0x11*adas抓拍事件`,
            "dsm1": `DSM,0,0x01*疲劳驾驶报警哈欠!DSM,0,0xFE*闭眼!DSM,0,0x02*接打电话报警!DSM,0,0x03*抽烟报警!DSM,0,0x04*分神驾驶报警!DSM,0,0x05*驾驶员异常报警!DSM,0,0x07*请勿遮挡摄像头!DSM,0,0x10*dsm抓拍事件!DSM,0,0x11*驾驶员变更!DSM,0,0x12*IC 抓拍事件!DSM,0,0x20*抓拍事件!DSM,0,0x1F*红外阻断`,
            "dsm2": `DSM,1,0x0A*未系安全带!DSM,1,0x0C*双手脱离方向盘!DSM,1,0x0D*玩手机`,
            "bsd1": `BSD,0,0x03*盲区报警`,
            "bsd2": `BSD,1,0x04*盲区报警`
        },
        "AudioFrequency": {
            "navTitle": "音频设置",
            "template": `输入增益!输出增益!TTS音量!声光报警器音量!预览声音叠加`
        },
        "BootPreview": {
            "navTitle": "开机预览",
            "template": "轮询间隔,延迟间隔,预览通道,显示模式",
            "model": `单画面*0!四画面1-4*1!六画面*2!八画面*3!九画面*4!四画面5-8*5!垂直分割的两画面*6!水平分割的两画面*7!上一下二的三画面*8!垂直H的四画面*9!水平H的四画面*10!五画面*11!五画面(IPC)*12!川字形的三画面*13!上二下一的三画面*14!十二画面*15!三分割六画面*16`,
            "pollingAndDelayed": `否*0!5 s*1!10 s*2!20 s*3!30 s*4!1 min*5!2 min*6!5 min*7!`
        },
        "PowerSettings": {
            "navTitle": "电源设置",
            "template": "当前电压,电源类型,关机电压,开机电压,关机电压,开机电压",
            "powerType": "12V,24V,自动"
        },
        "PreviewOverlay": {
            "navTitle": "预览叠加",
            "title": "叠加",
            "template": `车牌号码*1,通道名*2,日期时间*3,经纬度*4,GPS速度*5,超速报警*6,IO消息*7,磁盘状态*8,疲劳驾驶*9,视频短路*10,温度*11,连续驾驶时间*12,车辆脉冲速度*13,正反转传感器*14,站名*15,`,
        },
        "ShutDown": {
            "navTitle": "开关机",
            "template": `延时关机,延时关机,不关机,延时时长,休眠,位置上报频率,定时开关机,日期,时间段,使能,开机时间,开机时长,选择时间`,
            "date": "周一,周二,周三,周四,周五,周六,周日"
        }
    }
}