(function(){"use strict";var e={5839:function(e,t,n){var i=n(567),a=n(4255),o=n(1120),r=n(4740),l=n(6312),s=n(7508),d={__name:"App",setup(e){const{locale:t}=(0,s.QT)(),n=!1,i=(0,r.iH)(!0);console.log(window.location.href);try{if(n){var d=(0,l.Wz)("hash");o.Z.push("/"+d),t.value="zh",i.value="zh"==t.value}else{var c=(0,l.Wz)("hash");o.Z.push("/"+c)}var u=(0,l.Wz)("model");sessionStorage.model=u}catch(p){console.warn(p)}return(0,a.JJ)("lang",{lang:i}),(0,a.aZ)({name:"app"}),(e,t)=>{const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(a.Ob),(0,a.Wm)(n)],64)}}};const c=d;var u=c,p=(n(8675),n(7380),n(1118),n(539)),m=n.n(p),f=n(5388),g=n.n(f);const y=m().Random;let h=[{id:y.guid(),account:"admin",password:"123456",address:"36918166@qq.com",date:y.date()},{id:y.guid(),account:"ebHoL6",password:"i320Hu74fbn2Gi",address:"48165263@qq.com"}];m().mock("/api/mockGetList","get",(()=>({code:"0",data:h}))),m().mock("/api/protobuf","post",(e=>{const t=g().lookup("TLBluetooth.DeviceFileContentRequest"),n=g().lookup("TLBluetooth.WebResponse");var i=new Uint8Array(e.body),a=(t.decode(i),{code:200,message:"success",returnData:"successsuccesssuccess"}),o=n.create(a),r=n.encode(o).finish();return[...r]})),m().mock("/api/add","post",(e=>{let t=JSON.parse(e.body);return t.id=y.guid(),h.push(t),{code:"0",message:"success",data:h}}));var b={en:{home:"HOME",toast:["Query command issued successfully","Issued successfully","Failed to issue","This camera does not support setting resolution","Searching, please wait..."],picker:["Confirm","Cancel"],carInfo:{label:["Device ID","phone number","license plate number","License plate color","Area Code","Manufacturer No","VIN frame number","License plate classification","Engine number","Agreement Type"],placeholder:["Please enter the device ID","Please enter your mobile number","Please enter the license plate number","Please enter the area code","Please enter the manufacturer number","Please enter VIN frame number","Please enter the license plate category","Please enter the engine number"],columns:"blue,yellow,black,white,green,Yellowish green,Gradual green,other",navTitle:"Vehicle information"},netWork3g4g:{label:["Enable","Telephone number","Access point","user name","password"],placeholder:["Please enter a phone number","Please enter the access point","enter one user name","Please input a password","Please enter MTU"],button:["Factory settings"],navTitle:"Data Network",note:"The phone number is the Internet number provided by the operator, not the local number"},actualTime:{title:["Name: Video Status","Name: Video Input","Name: Network Status","Name: Positioning Status"],value:["Status: None","Status: None","Status: ","Status: "],label:["Info: None","Info: None","Info: ","Info: "],navTitle:"Real time status"},alarm:{title:["IO","Buzzer Enable","Event Name","delay","Number of consecutive shots","Enable","type","Escalation type","Capture mode","Burst interval"],navTitle:"Alarm input status",start:["Not enabled","Enable"],type:["Negative trigger","Positive trigger"],alarm:["Do not report","normal","Emergency alarm"],cameraType:["Single shot","Double beat","Continuous shooting"]},alarmInfo:{label:["Enable","Buzzer","Event Name","type","delayed","Escalation type","Capture mode","Number of consecutive shots","Burst interval","Agreement Type","Logical negation","Switch channel","Alarm video channel","Capture channel"],placeholder:["Please enter the event name","Please enter delay","Please enter the number of consecutive shots","Please enter the continuous shooting interval"],logical:["Enable","Not enable"],radio:["Positive trigger","Negative trigger"],columns2:"Do not report,normal,Emergency alarm",columns3:"Single shot,Double beat,Continuous shooting",channelTitle:"no",navTitle:"Alarm input status"},cameraInfo:{title:["Enable","resolving power","Horizontal Mirror","mirror vertically","Set resolution"],navTitle:["camera "," set up"]},cameraSettings:{title:["Video format"],navTitle:"Camera settings"},demarcate:{button:["ADAS calibration","BSM1 calibration","BSM2 calibration","End Wizard"],navTitle:"Remote calibration"},diskStatus:{title:["name","Disk Status","Total capacity","Remaining capacity","format","Usage status"],diskStatusLang:"--,Unlocked,nothing,--,unformatted,Formatting,not used,error,already expired,cover,On video,normal",navTitle:"Disk Status",load:"format...",alert:["Tips"," The command has been issued. Please check whether the device starts formatting "],alertMsg:["invalid","Formatting ...","Format succeeded"],stateName:"Unlocked,nothing,unformatted,abnormal,normal",tipsConfirm:"Confirm"},platformSettings:{title:["Server","Server IP","Server Port","Server Status","Device status"],navTitle:"Platform configuration",deviceState:["on-line,off-line,Authorization expires,be limited to,conflict,invalid,not enabled"],serveState:["Enable","Not enabled","unknown"],logonState:["Auto","Manual","unknown"]},platformStatus:{title:["platform ","Server IP / domain name","Server Port","Enable","register","Agreement Type","Platform Type","Local standards","Device status"],navTitle:"Platform status",columns3:"808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",columns4:"Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",deviceState:["on-line,off-line,Authorization expires,be limited to,conflict,invalid,not enabled"],serveState:["Enable","Not enabled","unknown"],logonState:["automatic","Manual","unknown"]},rotaTestNsor:{title:["Enable","type","Logical negation","Pulse detection cycle","state","Agreement Type"],placeholder:["Please enter the pulse detection cycle"],radio:["Enable","close"],navTitle:"Forward and reverse rotation sensor",columns2:"Three point magnetic touch,Pulse AD type,Single point magnetic suction type",columns3:"stop,Forward rotation,reversal"},serveInfo:{title:["Enable","register","IP/domain name","port","Agreement Type","Platform Type","Local standards","Device State"],placeholder:["Please enter IP/domain name","Please enter the port"],radio:["Auto","Manual"],navTitle:"Server ",columns3:"808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",columns4:"Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",errorMsg:" IP Cannot be in Chinese"},settingsIP:{title:["Enable","WIFI Name","password","IP type","IP address","Subnet mask","Default Gateway","DNS","DNS Server","Confirm"],button:["Search"],placeholder:["Please enter WIFI name","Please input a password","Please enter the IP address","Please enter the subnet mask","Please enter the default gateway","Please enter DNS server"],radio:["dynamic","Static state","dynamic DNS","Static DNS"],navTitle:"Set WIFI",connectState:"--,Disable,Connected,Not connected",itemList:["wifi Name: ","Require password: "],errorMsg:" WIFI name Cannot be in Chinese"},systemInfo:{navTitle:"System information",cellList:"Equipment model,Equipment serial number,Hardware version number, Software version,MCU version number ,empower ,Name of manufacturer ,Module model ,Module version information ,Module SN No ,SIM card IMSI ,GPS module information ,(ADAS)Product code ,Hardware version number ,Software version number ,Device ID ,ADAS ,DSM,Authorization Status ,running state ,Custom Status "},wifiSettings:{title:["Enable","Module Type","Serial No","WIFI name","state"],navTitle:"WIFI settings",modelValue:"Testing...,Authorized,Unauthorized",warrantValue:"Under inspection,No module,2.4G",wifiStatus:"--,Disable,Connected,Not connected"},newWork:{columns:"nothing,Positioning,locking,Antenna pull out,Antenna short circuit,External GPS online,External GPS anomaly,error!Testing,No module,Unauthorized,have!Not connected,connect!power failure,No module,Testing,abnormal,LTE,EVDO,WCDMA!power failure,Yes - normal locking,Yes - Limited locking,nothing,have,abnormal!power failure,nothing,weak,OK,strong!power failure,connect,Not connected,login has failed,Dialing failed,dialing!Ethernet,WIFI,3G,4G,2G,nothing!nothing,on-line,off-line!off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled",titleColumn:"GPS,WIFI Model,WIFI Status,Model Type,SIM,3G/4G,Dial,NewWork,Video server,Satellites",navTitle:"NewWork",serverName:"Departmental server "},adas:{label:["Vehicle width","Camera to left side of vehicle","Camera installation width","Camera to bumper"],placeholder:["Please enter the vehicle width","Please enter the distance","Please enter the width","Please enter the distance"],button:"Start calibration",navTitle:"ADAS calibration"},dsm:{button:["DSM1 calibration","DSM2 calibration"],navTitle:"DSM calibration",dialog:["Tips","To exit the wizard mode, click OK. If you need to set other functions, click Cancel","Confirm","Cancel"]},oilParam:{label:["Current oil level","Current oil volume","type","Alarm threshold","Number of calibrations","Total capacity","Sensor maximum"],placeholder:["Please enter the current oil level","Please enter the current oil quantity","Please enter the alarm threshold","Please enter the number of calibrations","Please enter the total capacity","Please enter the maximum value of sensor data"],title:"type",navTitle:"Oil sensor"},popupCheckbox:{button:["Cancel","Confirm"]},stickyBottom:{button:["Back","Preservation","Next","Query","Preservation","Completing the wizard"],toast:"No more ~"},tab:{leftText:"Back",rightText:"Log",dialog:["Tips","To end the wizard, click OK. If you need to set other functions, click Cancel","Confirm","Cancel"]}},zh:{home:"首页",toast:["查询指令成功","设置成功","设置失败","该摄像头不支持设置分辨率","正在搜索,请稍等..."],picker:["确认","取消"],carInfo:{label:["设备ID","手机号码","车牌号","车牌颜色","区域代码","制造商编号","VIN车架号","车牌分类","发动机号","协议类型"],placeholder:["请输入设备ID","请输入手机号码","请输入车牌号","请输入区域代码","请输入制造商编号","请输入VIN车架号","请输入车牌分类","请输入发动机号"],columns:"蓝色,黄色,黑色,白色,绿色,黄绿色,渐变绿,其它",navTitle:"车辆信息"},netWork3g4g:{label:["启用","电话号码","接入点","用户名","密码"],placeholder:["请输入电话号码","请输入接入点","请输入用户名","请输入密码","请输入MTU"],button:["出厂设置"],navTitle:"数据网络",note:"电话号码是运营商提供的上网号,不是本机号"},actualTime:{title:["名称: 视频状态","名称: 视频输入","名称: 网络状态","名称: 定位状态"],value:["状态: 无","状态: 无","状态: ","状态: "],label:["信息: 无","信息: 无","信息: ","信息: "],navTitle:"实时状态"},alarm:{title:["IO序号","蜂鸣器启用","事件名称","延迟","连拍张数","启用","类型","上报类型","抓拍模式","连拍间隔"],navTitle:"IO",start:["不启用","启用"],type:["负触发","正触发"],alarm:["不上报","正常","紧急报警"],cameraType:["单拍","双拍","连拍"]},alarmInfo:{label:["启用","蜂鸣器","事件名称","类型","延时","上报类型","抓拍模式","连拍张数","连拍间隔","协议类型","逻辑反","画面切换通道","报警录像通道号","抓拍通道号"],placeholder:["请输入事件名称","请输入延时","请输入连拍张数","请输入连拍间隔"],logical:["使能","不使能"],radio:["正触发","负触发"],columns2:"不上报,正常,紧急报警",columns3:"单拍,双拍,连拍",channelTitle:"否",navTitle:"IO"},cameraInfo:{title:["启用","分辨率","水平镜像","垂直镜像","设置分辨率"],navTitle:["摄像头 "," 设置"]},cameraSettings:{title:["视频制式"],navTitle:"摄像头设置"},demarcate:{button:["ADAS标定","BSM1标定","BSM2标定","结束向导"],navTitle:"远程标定"},diskStatus:{title:["名称","磁盘状态","总容量","剩余容量","格式化","使用状态"],diskStatusLang:"--,未锁,无,--,未格式化,格式化中,未使用,错误,已满,覆盖,录像中,正常",navTitle:"磁盘",load:"格式化...",alert:["提示"," 指令已下发, 请查看设备是否开始格式化 "],alertMsg:["无效","格式化中...","格式化成功"],stateName:"未锁,无,未格式化,异常,正常",tipsConfirm:"确认"},platformSettings:{title:["服务器","服务器IP","服务器端口","服务器状态","设备状态"],navTitle:"平台配置",deviceState:["离线,在线,授权过期,受限,冲突,无效,未启用"],serveState:["启用","禁用","未启用"],logonState:["自动","手动","未知"]},platformStatus:{title:["平台 ","服务器IP / 域名","服务器端口","是否启用","注册","协议类型","平台类型","各地标准","设备状态"],navTitle:"平台",columns3:"808标准协议平台,通天星,三一,星冠,超越,云科,东莞亿程,中车,厦门瑞讯",columns4:"江苏,广东, 新川标,陕西",deviceState:["离线,在线,授权过期,受限,冲突,无效,未启用"],serveState:["启用","禁用","未启用"],logonState:["自动","手动","未知"]},rotaTestNsor:{title:["启用","类型","逻辑反","脉冲检测周期","状态","协议类型"],placeholder:["请输入脉冲检测周期"],radio:["启用","关闭"],navTitle:"正反转传感器",columns2:"三点磁触式,脉冲AD式,单点磁吸式",columns3:"停止,正转,反转"},serveInfo:{title:["启用","注册","IP/域名","端口","协议类型","平台类型","地方标准","设备状态"],placeholder:["请输入IP/域名","请输入端口"],radio:["自动","手动"],navTitle:"服务器 ",columns3:"808标准协议平台,通天星,三一,星冠,超越,云科,东莞亿程,中车,厦门瑞讯",columns4:"江苏,广东, 新川标,陕西",errorMsg:" IP/域名 不能为中文"},settingsIP:{title:["启用","WIFI名称","密码","IP 类型","IP 地址","子网掩码","默认网关","DNS","DNS服务器","确认"],button:["搜索"],placeholder:["请输入WIFI名称","请输入密码","请输入IP 地址","请输入子网掩码","请输入默认网关","请输入DNS服务器"],radio:["动态","静态","动态DNS","静态DNS"],navTitle:"设置WIFI",connectState:"--,禁用,已连接,未连接",itemList:["wifi名称: ","是否需要密码: "],errorMsg:" WIFI名称 不能为中文"},systemInfo:{navTitle:"设备",cellList:"设备型号,设备序列号,硬件版本号,软件版本号 ,MCU版本号 ,授权 ,制造商名称 ,模块型号 ,模块版本信息 ,模块SN号 ,SIM卡IMSI ,GPS模块信息 ,(ADAS)产品代号 ,硬件版本号 ,软件版本号 ,设备ID ,ADAS状态 ,DSM状态,授权状态 ,运行状态 ,定制状态 "},wifiSettings:{title:["启用","模块类型","序号","WIFI名称","状态"],navTitle:"WIFI设置",modelValue:"检测中...,已授权,未授权",warrantValue:"检查中,无模块,2.4G",wifiStatus:"--,禁用,已连接,未连接"},newWork:{columns:"无,定位中,锁定,天线拔出,天线短路,外部GPS在线,外部GPS异常,出错!检测中,无模块,未授权,有!未连接,连接!断电,无模块,检测中,异常,LTE,EVDO,WCDMA!断电,有-锁定正常,有-锁定受限,无,有,异常!断电,无,弱,中,强!断电,连接,未连接,注册失败,拨号失败,拨号中!以太网,WIFI,3G,4G,2G,无!无,在线,离线!离线,在线,授权过期,受限,冲突,无效,未启用",titleColumn:"GPS,WIFI模块,WIFI状态,模块类型,SIM卡,3G/4G信号,拨号,网络类型,视频服务器,卫星数",navTitle:"网络",serverName:"部标服务器 "},adas:{label:["车辆宽度","摄像头到车辆左侧距离","摄像头安装高度","摄像头到车头保险杠距离"],placeholder:["请输入车辆宽度","请输入距离","请输入宽度","请输入距离"],button:"开始标定",navTitle:"ADAS标定"},dsm:{button:["DSM1 标定","DSM2 标定"],dialog:["提示","退出向导模式, 请点击确认 , 如果还需设置其他功能, 请点击取消","确认","取消"],navTitle:"DSM 标定"},oilParam:{label:["当前油位","当前油量","类型","报警阈值","标定数目","总容量","传感器最大值"],placeholder:["请输入当前油位","请输入当前油量","请输入报警阈值","请输入标定数目","请输入总容量","请输入传感器数据最大值"],title:"类型",navTitle:"油感传感器"},popupCheckbox:{button:["取消","确认"]},stickyBottom:{button:["上一步","保存","下一步","查询","保存","完成向导"],toast:"没有更多了~"},tab:{leftText:"返回",rightText:"Log",dialog:["提示","结束向导, 请点击确认, 如果还需设置其他功能, 请点击取消. ","确认","取消"]}},tw:{home:"首頁",toast:["査詢指令下發成功","設定成功","設定失敗","該鏡頭不支持設定分辯率","正在搜索,請稍等..."],picker:["確認","取消"],carInfo:{label:["車機D","手機號碼","車牌號","車牌顏色","區域代碼","製造商編號","VIN車架號","車牌分類","發動機號","協定類型"],placeholder:["請輸入車機ID","請輸入手機號碼","請輸入車牌號","請輸入區域代碼","請輸入製造商編號","請輸入VIN車架號","請輸入車牌分類","請輸入發動機號"],columns:"色,黃色,黑色,白色,綠色,黃綠色,漸變綠,其它",navTitle:"車輛資訊"},netWork3g4g:{label:["啟用","電話號碼","接入點","用戶名","密碼"],placeholder:["請輸入電話號碼","請輸入接入點","請輸入用戶名","請輸入密碼","請輸入MTU"],button:["出廠設定"],navTitle:"數據網絡",note:"電話號碼是運營商提供的上網號,不是本機號"},actualTime:{title:["名稱: 視頻狀態","名稱：視頻輸入","名稱：網絡狀態","名稱：定位狀態"],value:["狀態：無","狀態：無","狀態: ","狀態: "],label:["資訊：無","資訊：無","資訊: ","資訊: "],navTitle:"即時狀態"},alarm:{title:["IO序號","蜂鳴器啟用","事件名稱","延遲","連拍張數","啟用","類型","上報類型","抓拍模式","連拍間隔"],navTitle:"IO",start:["不啟用","啟用"],type:["負觸發","正觸發"],alarm:["不上報","正常","緊急報警"],cameraType:["單拍","雙拍","連拍"]},alarmInfo:{label:["啟用","蜂鳴器","事件名稱","類型","延遲","上報類型","抓拍模式","連拍張數","連拍間隔","協定類型","邏輯反","面切換通道","報警錄影通道號","抓拍通道號"],placeholder:["請輸入事件名稱","請輸入延時","請輸入連拍張數","請輸入連拍間隔"],logical:["使能","不使能"],radio:["正觸發","負觸發"],columns2:"不上報,正常,緊急報警",columns3:"單拍,雙拍,連拍",channelTitle:"否",navTitle:"IO"},cameraInfo:{title:["啟用","分辯率","水准鏡像","垂直鏡像","設定分辯率"],navTitle:["鏡頭 "," 設定"]},cameraSettings:{title:["視頻制式"],navTitle:"鏡頭設定"},demarcate:{button:["ADAS標定","BSM1標定","BSM2標定","結束嚮導"],navTitle:"遠程標定"},diskStatus:{title:["名稱","磁片狀態","總容量","剩餘容量","格式化","使用狀態"],diskStatusLang:"--,未鎖,無,--,未格式化,格式化中,未使用,錯誤,已滿,覆蓋,錄影中,正常",navTitle:"磁片",load:"格式化...",alert:["提示"," 指令已下發, 請查看車機是否開始格式化 "],alertMsg:["無效","格式化中...","格式化成功"],stateName:"未鎖,無,未格式化,异常,正常",tipsConfirm:"確認"},platformSettings:{title:["伺服器","伺服器IP","伺服器端口","伺服器狀態","車機狀態"],navTitle:"平臺配寘",deviceState:["離線,上線,授權過期,受限,衝突,無效,未啟用"],serveState:["啟用","禁用","未啟用"],logonState:["啟用","禁用","未啟用"]},platformStatus:{title:["平臺 ","伺服器IP / 域名","伺服器端口","是否啟用","注册","協定類型","平臺類型","地方標準","車機狀態"],navTitle:"平臺",columns3:"808標準協定平臺,通天星,三一,星冠,超越,雲科,東莞億程,中車,廈門瑞訊",columns4:"江蘇,廣東,新川標,陝西",deviceState:["離線,上線,授權過期,受限,衝突,無效,未啟用"],serveState:["啟用","禁用","未啟用"],logonState:["啟用","禁用","未啟用"]},rotaTestNsor:{title:["啟用","類型","邏輯反","脈衝檢測週期","狀態","協定類型"],placeholder:["請輸入脈衝檢測週期"],radio:["啟用","關閉"],navTitle:"正反轉感測器",columns2:"三點磁觸式,脈衝AD式,單點磁吸式",columns3:"停止,正轉,反轉"},serveInfo:{title:["啟用","注册","IP/域名","端口","協定類型","平臺類型","地方標準","車機狀態"],placeholder:["請輸入IP/域名","請輸入端口"],radio:["自動","手動"],navTitle:"伺服器 ",columns3:"808標準協定平臺,通天星,三一,星冠,超越,雲科,東莞億程,中車,廈門瑞訊",columns4:"江蘇,廣東,新川標,陝西",errorMsg:" IP/域名 不能為中文"},settingsIP:{title:["啟用","WIFI名稱","密碼","IP 類型","IP 地址","子網路遮罩","預設閘道","DNS","DNS伺服器","確認"],button:["搜索"],placeholder:["請輸入WIFI名稱","請輸入密碼","請輸入IP地址","請輸入子網路遮罩","請輸入預設閘道","請輸入DNS伺服器"],radio:["動態","靜態","動態DNS","靜態DNS"],navTitle:"設定WIFI",connectState:"--,禁用,已連接,未連接",itemList:["wifi名稱: ","是否需要密碼: "],errorMsg:" WIFI名稱 不能為中文"},systemInfo:{navTitle:"車機",cellList:"車機型號,車機序號,硬體版本號,軟件版本號,MCU版本號,授權,製造商名稱,模塊型號,模塊版本資訊,模塊SN號,SIM卡IMSI,GPS模塊資訊,（ADAS）產品代號,硬體版本號,軟件版本號,車機ID,ADAS狀態,DSM狀態,授權狀態,運行狀態,定制狀態"},wifiSettings:{title:["啟用","模塊類型","序號","WIFI名稱","狀態"],navTitle:"WIFI設定",modelValue:"檢測中…,已授權,未授權",warrantValue:"檢查中,無模塊,2.4G",wifiStatus:"--,禁用,已連接,未連接"},newWork:{columns:"無,定位中,鎖定,天線拔出,天線短路,外部GPS上線,外部GPS异常,出錯！ 檢測中,無模塊,未授權,有！ 未連接,連接！ 斷電,無模塊,檢測中,异常,LTE,EVDO,WCDMA！ 斷電,有-鎖定正常,有-鎖定受限,無,有,异常！ 斷電,無,弱,中,强！ 斷電,連接,未連接,注册失敗,撥號失敗,撥號中！ 以太網,WIFI,3G,4G,2G,無！ 無,上線,離線！ 離線,上線,授權過期,受限,衝突,無效,未啟用",titleColumn:"GPS,WIFI模塊,WIFI狀態,模塊類型,SIM卡,3G/4G訊號,撥號,網絡類型,視訊伺服器,衛星數",navTitle:"網絡",serverName:"環保機伺服器 "},adas:{label:["車輛寬度","鏡頭到車輛左側距離","鏡頭安裝高度","鏡頭到車頭保險杠距離"],placeholder:["請輸入車輛寬度","請輸入距離","請輸入寬度","請輸入距離"],button:"開始標定",navTitle:"ADAS標定"},dsm:{button:["DSM1 標定","DSM2 標定"],dialog:["提示","退出嚮導模式,請點擊確認,如果還需設定其他功能,請點擊取消","確認","取消"],navTitle:"DSM 標定"},oilParam:{label:["當前油位","當前油量","類型","報警閾值","標定數目","總容量","感測器最大值"],placeholder:["請輸入當前油位","請輸入當前油量","請輸入報警閾值","請輸入標定數目","請輸入總容量","請輸入感測器數據最大值"],title:"類型",navTitle:"油感感測器"},popupCheckbox:{button:["取消","確認"]},stickyBottom:{button:["上一步","保存","下一步","査詢","保存","完成嚮導"],toast:"沒有更多了~"},tab:{leftText:"返回",rightText:"Log",dialog:["提示","結束嚮導,請點擊確認,如果還需設定其他功能,請點擊取消. ","確認","取消"]}}};const S={legacy:!1,locale:"zh",messages:b};function v(e){const t=(0,s.o)(S);e.use(t)}n(5666);(0,i.ri)(u).use(v).use(o.Z).mount("#app")},5388:function(e,t,n){var i=n(5953),a=(i.roots["default"]||(i.roots["default"]=new i.Root)).addJSON({TLBluetooth:{nested:{ProtoCmdId:{values:{ProtoCmdBase:0,HeatBeat:200,ParseDeviceFile:1e4,CollectingRecorder:10001,CollectingSpecifiedFile:10002,ParameterSetting:10003,GPSLocationInfoTest:10004,DataSummary:10005,ConnectCom:11e3,DisConnectCom:11001,ScanCanConnectDevice:11002}},ProtoCmdIdResp:{values:{ProtoCmdRespBase:0,ProtoCmdRespErrResponse:500,CollectingRecorderResp:20001,CollectingSpecifiedFileResp:20002,ParameterSettingResp:20003,GPSLocationInfoTestResp:20004,DataSummaryResp:20005,DeviceCloseResp:20006,ConnectComResp:21e3,DisConnectComResp:21001,ScanCanConnectDeviceResp:21002}},GeneralResponse:{fields:{errType:{type:"uint32",id:1},requestCmdId:{type:"uint32",id:2},errTime:{type:"string",id:3},appType:{type:"string",id:4},errDes:{type:"string",id:5},errCode:{type:"uint32",id:6}}},WebResponse:{fields:{code:{type:"uint32",id:1},message:{type:"string",id:2},returnData:{type:"string",id:3}}},DataResponse:{fields:{data:{type:"string",id:1}}},HttpUserInfo:{fields:{userName:{type:"string",id:1},userGuid:{type:"string",id:2}}},DeviceFileContentRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},fileUid:{type:"string",id:2}}},OneKeyValueInfo:{fields:{key:{type:"string",id:1},value:{type:"string",id:2}}},OneBlockContent:{fields:{blockType:{type:"uint32",id:1},blockDescribe:{type:"string",id:2},blockMsgDataArray:{rule:"repeated",type:"OneKeyValueInfo",id:3}}},DeviceFileContentResponse:{fields:{fileDescribe:{type:"string",id:1},deviceName:{type:"string",id:2},fileBlockDescribe:{type:"string",id:3},blockContArray:{rule:"repeated",type:"OneBlockContent",id:4},fileName:{type:"string",id:5}}},CollectingRecorderRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},executiveStandardYear:{type:"string",id:2}}},CollectingRecorderResponse:{fields:{executiveStandardYear:{type:"string",id:1},execChangeOrderNumber:{type:"string",id:2},recorderTime:{type:"string",id:4},manufactureCertifiCode:{type:"string",id:5},certifiedProductModel:{type:"string",id:6},createYMD:{type:"string",id:7},productSerialNumber:{type:"string",id:8},manufactureAbbr:{type:"string",id:9},productModeAbbr:{type:"string",id:10},deviceNumber:{type:"string",id:11},deviceNumberClassify:{type:"string",id:12},VIN:{type:"string",id:13},serialNumber:{type:"string",id:14},pulseFactor:{type:"uint32",id:15},firstInstallTime:{type:"string",id:16},checkCode:{type:"string",id:17}}},DeviceRecordFileType:{values:{DeviceRecordFileType_Base:0,DeviceRecordFileType_TransportCondition:33,DeviceRecordFileType_AccidentSuspects:34,DeviceRecordFileType_TimeoutDriving:35,DeviceRecordFileType_DrivingInformation:36,DeviceRecordFileType_LogFile:37}},FileInfoRequest:{fields:{fileType:{type:"DeviceRecordFileType",id:1},startTime:{type:"string",id:2},endTime:{type:"string",id:3}}},CollectingSpecifiedFileRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},fileInfoArray:{rule:"repeated",type:"FileInfoRequest",id:2}}},OneRespFileInfo:{fields:{fileType:{type:"DeviceRecordFileType",id:1},fileSize:{type:"uint32",id:2},fileContent:{type:"string",id:3}}},GPSInfo:{fields:{longitude:{type:"uint32",id:1},latitude:{type:"uint32",id:2},height:{type:"uint32",id:3}}},OnOffSignInfo:{fields:{ignition:{type:"uint32",id:1},brake:{type:"uint32",id:2},leftSteering:{type:"uint32",id:3},rightSteering:{type:"uint32",id:4},distance:{type:"uint32",id:5},passingLight:{type:"uint32",id:6},rearFogLamp:{type:"uint32",id:7},backOffCar:{type:"uint32",id:8},carDoor:{type:"uint32",id:9},driverSeatBelt:{type:"uint32",id:10},notUsed5:{type:"uint32",id:11},notUsed4:{type:"uint32",id:12},notUsed3:{type:"uint32",id:13},notUsed2:{type:"uint32",id:14},notUsed1:{type:"uint32",id:15},notUsed0:{type:"uint32",id:16}}},DrivingConditionBlockInfo:{fields:{createTime:{type:"string",id:1},gpsInfo:{type:"GPSInfo",id:2},direction:{type:"uint32",id:3},canSpeed:{type:"uint32",id:4},onOffSignInfo:{type:"OnOffSignInfo",id:5},satelliteSpeed:{type:"uint32",id:6},dataStateBit:{rule:"repeated",type:"uint32",id:7},calibrationCode:{type:"string",id:8}}},AccidentSuspectBlockInfo:{fields:{endTime:{type:"string",id:1},motorVehicleDrivNo:{type:"string",id:2},gpsInfo:{type:"GPSInfo",id:3},canSpeedArray:{rule:"repeated",type:"uint32",id:4},onOffSignArray:{rule:"repeated",type:"OnOffSignInfo",id:5},calibrationCode:{type:"string",id:6}}},DrivingTimeoutBlockInfo:{fields:{motorVehicleDrivNo:{type:"string",id:1},startTime:{type:"string",id:2},startGps:{type:"GPSInfo",id:3},endTime:{type:"string",id:4},endGps:{type:"GPSInfo",id:5},calibrationCode:{type:"string",id:6}}},DrivingInformationBlockInfo:{fields:{currentTime:{type:"string",id:1},name:{type:"string",id:2},MotorVehicleDrivNo:{type:"string",id:3},DriverPicture:{type:"string",id:4}}},LogFileType:{values:{logFileTypeUnknown:0,powerOn:17,powerOff:18,setUpVehiclePlate:33,setUpVehiclePlateClassify:34,setVin:35,setSerialNumber:36,setPulseCoefficient:37,firstInstallTime:38,setUniqueNumber:39,satelliteCorrection:40,selfCheckNormal:49,selfCheckNotComplate:50,installSettingExceltion:51,speedException:52,satelliteSignalExceltion:53,onOffSignalException:54,selfTestNormal:65,selfTestException:66,memoryException:67,satelliteModuleException:68,communicateModuleException:69,signalInputError:70,speedStateNormal:81,speedStateException:82,usbDataExport:97,blueToothExport:98}},LogFileBlockInfo:{fields:{createTime:{type:"string",id:1},logType:{type:"LogFileType",id:2},logDescribe:{type:"string",id:3},calibrationCode:{type:"string",id:4}}},CollectingSpecifiedFileResponse:{fields:{fileInfoArray:{rule:"repeated",type:"OneRespFileInfo",id:1}}},ParameterSettingRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},manufactureCertifiCode:{type:"string",id:2},certifiedProductModel:{type:"string",id:3},createYMD:{type:"string",id:4},productSerialNumber:{type:"string",id:5},manufactureAbbr:{type:"string",id:6},productModeAbbr:{type:"string",id:7},deviceNumber:{type:"string",id:8},deviceNumberClassify:{type:"string",id:9},VIN:{type:"string",id:10},serialNumber:{type:"string",id:11},pulseFactor:{type:"uint32",id:15},firstInstallTime:{type:"string",id:16},dataSummary:{type:"string",id:17}}},GPSLocationInfoTestRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},sendDataDuring:{type:"uint32",id:2},operatorType:{type:"uint32",id:3}}},GGAData:{fields:{time:{type:"string",id:1},locationState:{type:"uint32",id:2},latitude:{type:"string",id:3},latitudeDimension:{type:"string",id:4},longitude:{type:"string",id:5},longitudeDimension:{type:"string",id:6},floorSpeed:{type:"string",id:7},direction:{type:"string",id:8},magnetic:{type:"string",id:9},declination:{type:"string",id:10},modeIndicator:{type:"string",id:11},checkCode:{type:"string",id:12}}},RMCData:{fields:{time:{type:"string",id:1},locationState:{type:"uint32",id:2},latitude:{type:"string",id:3},latitudeDimension:{type:"string",id:4},longitude:{type:"string",id:5},longitudeDimension:{type:"string",id:6},satellitesNumber:{type:"uint32",id:7},horizontalAccuracy:{type:"string",id:8},antennaHeight:{type:"string",id:9},height:{type:"string",id:10},rTCMNumber:{type:"string",id:11},diffBaseStateNumber:{type:"string",id:12},checkCode:{type:"string",id:13}}},GPSLocationInfoTestResponse:{fields:{GGADataArray:{rule:"repeated",type:"GGAData",id:1},RMCDataArray:{rule:"repeated",type:"RMCData",id:2}}},DataSummaryRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},communicationDevTime:{type:"string",id:2}}},DataSummaryResponse:{fields:{recorderTime:{type:"string",id:1},manufactureCertifiCode:{type:"string",id:2},certifiedProductModel:{type:"string",id:3},createYMD:{type:"string",id:4},productSerialNumber:{type:"string",id:5},manufactureAbbr:{type:"string",id:6},productModeAbbr:{type:"string",id:7},deviceNumber:{type:"string",id:8},deviceNumberClassify:{type:"string",id:9},VIN:{type:"string",id:10},serialNumber:{type:"string",id:11},pulseFactor:{type:"uint32",id:12},firstInstallTime:{type:"string",id:13},dataSummary:{type:"string",id:14}}},ConnectComRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},comNumber:{type:"uint32",id:2},computeUniqueSession:{type:"string",id:3},comBaudRate:{type:"uint32",id:4}}},DisComRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1}}},ScanCanConnectDeviceRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1}}},SerialPortDeviceInfo:{fields:{computeName:{type:"string",id:1},userName:{type:"string",id:2},computeUniqueSession:{type:"string",id:3}}},ScanCanConnectDeviceResponse:{fields:{serialPortArray:{rule:"repeated",type:"SerialPortDeviceInfo",id:1}}},UserLogInRequest:{fields:{userName:{type:"string",id:1},userPassword:{type:"string",id:2},lang:{type:"string",id:3},appType:{type:"string",id:4}}},UserLogInResponse:{fields:{sessionId:{type:"string",id:1},userType:{type:"uint32",id:2}}},SendCustomMessageToDeviceRequest:{fields:{httpUserInfo:{type:"HttpUserInfo",id:1},sendCont:{type:"string",id:2},sendHex:{type:"uint32",id:3}}},SendCustomMessageToDeviceResponse:{fields:{recvCont:{type:"string",id:1},sendHex:{type:"uint32",id:2}}}}}});e.exports=a},1120:function(e,t,n){var i=n(1928);const a=()=>Promise.all([n.e(201),n.e(38)]).then(n.bind(n,7038)),o=()=>Promise.all([n.e(201),n.e(914),n.e(924)]).then(n.bind(n,7924)),r=()=>Promise.all([n.e(201),n.e(914),n.e(527)]).then(n.bind(n,7527)),l=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(391)]).then(n.bind(n,2751)),s=()=>Promise.all([n.e(201),n.e(914),n.e(336)]).then(n.bind(n,9336)),d=()=>Promise.all([n.e(201),n.e(947)]).then(n.bind(n,7947)),c=()=>Promise.all([n.e(201),n.e(61)]).then(n.bind(n,4061)),u=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(594)]).then(n.bind(n,2009)),p=()=>Promise.all([n.e(201),n.e(854)]).then(n.bind(n,2854)),m=()=>Promise.all([n.e(201),n.e(521)]).then(n.bind(n,4521)),f=()=>Promise.all([n.e(201),n.e(365)]).then(n.bind(n,9365)),g=()=>Promise.all([n.e(201),n.e(251)]).then(n.bind(n,2251)),y=()=>Promise.all([n.e(201),n.e(938),n.e(700)]).then(n.bind(n,9766)),h=()=>Promise.all([n.e(201),n.e(290)]).then(n.bind(n,6290)),b=()=>Promise.all([n.e(201),n.e(501)]).then(n.bind(n,5501)),S=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(221)]).then(n.bind(n,4963)),v=()=>Promise.all([n.e(201),n.e(10)]).then(n.bind(n,6010)),I=()=>Promise.all([n.e(201),n.e(466)]).then(n.bind(n,3586)),T=()=>Promise.all([n.e(201),n.e(914),n.e(745)]).then(n.bind(n,7745)),P=()=>Promise.all([n.e(201),n.e(866)]).then(n.bind(n,5866)),D=()=>Promise.all([n.e(201),n.e(5)]).then(n.bind(n,8005)),C=()=>Promise.all([n.e(201),n.e(132)]).then(n.bind(n,7132)),N=()=>Promise.all([n.e(201),n.e(938),n.e(678),n.e(636)]).then(n.bind(n,5887)),A=()=>Promise.all([n.e(201),n.e(931)]).then(n.bind(n,5931)),w=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(746)]).then(n.bind(n,1522)),k=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(678),n.e(873)]).then(n.bind(n,4414)),M=()=>Promise.all([n.e(201),n.e(938),n.e(678),n.e(401)]).then(n.bind(n,2670)),R=()=>Promise.all([n.e(201),n.e(914),n.e(481)]).then(n.bind(n,6481)),F=()=>Promise.all([n.e(201),n.e(249)]).then(n.bind(n,5249)),E=()=>Promise.all([n.e(201),n.e(938),n.e(415)]).then(n.bind(n,8530)),G=()=>Promise.all([n.e(201),n.e(328)]).then(n.bind(n,1328)),O=()=>Promise.all([n.e(201),n.e(914),n.e(322)]).then(n.bind(n,8322)),L=()=>Promise.all([n.e(201),n.e(884)]).then(n.bind(n,9884)),U=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(893)]).then(n.bind(n,8479)),W=()=>Promise.all([n.e(201),n.e(938),n.e(678),n.e(724)]).then(n.bind(n,3886)),x=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(547)]).then(n.bind(n,1511)),B=()=>Promise.all([n.e(201),n.e(997)]).then(n.bind(n,9997)),V=()=>Promise.all([n.e(201),n.e(914),n.e(938),n.e(550)]).then(n.bind(n,3269)),q=[{path:"/",component:a,name:"首页"},{path:"/ComInfo",component:W,name:"串口设置 二级"},{path:"/ReversingCamera",component:U,name:"倒车影像"},{path:"/ComSettings",component:L,name:"串口设置"},{path:"/TemperatureSensingStateDetails",component:O,name:"温度传感器"},{path:"/TemperatureSensingState",component:G,name:"温感状态"},{path:"/CodeStreamDetails",component:E,name:"主/子码流 二级页面"},{path:"/CodeStream",component:F,name:"主/子码流"},{path:"/Tyrepressure",component:M,name:"胎压"},{path:"/TyrepressureDerails",component:R,name:"胎压 二级页面"},{path:"/PTZSettings",component:k,name:"云台"},{path:"/LoadSettings",component:w,name:"载重"},{path:"/SessionSettings",component:A,name:"存储设置"},{path:"/BurglarAlarm",component:N,name:"报警器"},{path:"/AlarmOutput",component:C,name:"报警输出"},{path:"/DSM1",component:P,name:"DSM1 标定"},{path:"/DSM2",component:D,name:"DSM2 标定"},{path:"/ADAS",component:T,name:"ADAS 标定"},{path:"/SystemInfo",component:I,name:"系统设置"},{path:"/Demarcate",component:v,name:"远程标定"},{path:"/AlarmInfo",component:S,name:"报警输入设置页"},{path:"/RotaTestNsor",component:x,name:"正反转"},{path:"/OneeireTable",component:B,name:"温度"},{path:"/OilParam",component:V,name:"油感"},{path:"/SettingsIP",component:o,name:"设置IP"},{path:"/BSD",component:r,name:"BSD"},{path:"/CarInfo",component:l,name:"车辆信息"},{path:"/3G4G",component:s,name:"3G/4G"},{path:"/WifiSettings",component:d,name:"WIFI设置"},{path:"/PlatformSettings",component:c,name:"平台配置"},{path:"/ServeInfo",component:u,name:"服务器详细"},{path:"/CameraSettings",component:p,name:"摄像头设置"},{path:"/DiskStatus",component:m,name:"磁盘状态"},{path:"/Network",component:f,name:"网络状态"},{path:"/PlatformStatus",component:g,name:"平台状态"},{path:"/CameraInfo",component:y,name:"摄像头详情"},{path:"/ActualTime",component:h,name:"实时状态"},{path:"/Alarm",component:b,name:"报警输入状态"}],z=(0,i.p7)({routes:q,history:(0,i.PP)()});t["Z"]=z},6312:function(e,t,n){n.d(t,{Wz:function(){return o},b1:function(){return p},dm:function(){return c},eY:function(){return r},hN:function(){return l},k_:function(){return a},nV:function(){return d}});n(2801);function i(e){return decodeURI(decodeURIComponent(atob(e)))}function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.href.substr(1).match(t);if("pass"==e){var a=i(n[2]);return null!=n?a:null}return null!=n?decodeURI(n[2]):null}function o(e){for(var t=window.location.href,n=t.split("?")[1],i={},a=n.split("&"),o=0;o<a.length;o++){var r=a[o].split("=");i[r[0]]=r[1]}return i[e]}function r(e){let t="";if(null!=e&&e.length>=3)for(let n=0;n<e.length/3;n++)t+=String.fromCharCode(e.substr(3*n,3));return t}function l(e){let t="";for(let n=0;n<e.length;n++)t+=s(e[n].charCodeAt(),3);return t}function s(e,t){return(Array(t).join(0)+e).slice(-t)}function d(e,t,n){return e.splice(t-1,1,...e.splice(n-1,1,e[t-1])),e}const c=(e,t)=>{var n=+e,i=u(n.toString(2),t),a=i.split("");return a};function u(e,t){return Array(t>e?t-(""+e).length+1:0).join(0)+e}function p(){const e=["无","透传","云台","油位","TTS","AIS（视霸渔船定制）","COMPASS（视霸渔船定制）","LCD（航大）","LED（航大）","RFID刷卡器","万航广告屏（通立）","485串口协议的油位传感器","LED闪烁灯（LED_M2）","一拖三串口功能（AU100）","华翰LED广告屏","外接GPS数据","通立标准通信协议","角度传感器","胎压","中油瑞飞指定液位仪","GPS数据透传","本安行车记录仪","计价器","川基车顶灯（波特率19200）","JD_LED(波特率19200)@24","微视创LED（波特率9600）","清研ADAS","瑞为ADAS","河南军工ADAS","四川畅云","指纹识别","学生卡抓拍","苏标ADAS","云安ADAS","深圳渣土车 LED","深圳渣土车雷达","超速报警器","硕龙LED","TRANSMIT2-透传到指定服务器","TRANSMIT3-透传到指定服务器","OpenProtocol 控制透传","产测小板专用","中车刷卡器","图软设备","部标机LCD测试","顺禾设备","雄帝读卡器","串口打印保存至文件","BSD声光报警器","AAL100 声光报警器","ACR100 刷卡器","势航四方位客户显示屏","载重传感器","广州正安声光报警器","深圳汽车电子刷卡器","上海埃而生电气","多合一声光报警器","势航雷达","长春骏达","长春骏达客流计数器","海南称芯合意","赛格酒精检测","亿程读卡器","WIC磁条卡读卡器","GBT_19056","天地宏华酒精检测仪","青岛宇新F3协议液位传感器","内蒙旭一雷达","湖北东讯温度传感器"];return e}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],a=e[c][1],o=e[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(l=!1,o<r&&(r=o));if(l){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{5:"73ba8ce0",10:"3ff83aeb",38:"03b86d05",61:"f19efb21",132:"cd9dbe4c",201:"27eb6005",221:"2c993c38",249:"a558051b",251:"caba4fda",290:"eac4537c",322:"605f9a44",328:"1f6b8907",336:"ffb20961",365:"c5cb97d1",391:"72f4c580",401:"822d5b44",415:"3fbf7a7f",466:"b4103e0d",481:"7c93263d",501:"ef0db688",521:"0020e0b1",527:"b6610d6d",547:"93f29a86",550:"743a8343",594:"b0feba1c",636:"ca8f1d05",678:"5bed3077",700:"f68ba472",724:"dcd59c2f",745:"52d1b871",746:"f235f0ef",854:"d1a9ba70",866:"374be56b",873:"5a6b9b7b",884:"dc6721e3",893:"760a847d",914:"1821074c",924:"971f01ca",931:"907cf67c",938:"5a8d3a69",947:"33cf7a87",997:"090841ec"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{5:"d9d8a9b4",10:"b4a9b78d",38:"d30f917d",61:"b4a9b78d",132:"396b6b1e",221:"976e7e07",249:"fc22ce76",290:"6eb9eee0",322:"5c399a96",328:"2f5b3c6b",336:"73a54805",391:"b4a9b78d",401:"bf9b534d",415:"0876e49e",466:"6eb9eee0",481:"2a9efb03",501:"6eb9eee0",547:"976e7e07",550:"976e7e07",594:"b4a9b78d",636:"b0a2522f",700:"976e7e07",724:"7f0289cd",745:"d9d8a9b4",746:"b6450734",854:"976e7e07",866:"d9d8a9b4",873:"d5e31e30",884:"63c83915",893:"3e9e6bd8",924:"b4a9b78d",931:"bb095610",947:"d9d8a9b4",997:"976e7e07"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="yunweibao_ad:";n.l=function(i,a,o,r){if(e[i])e[i].push(a);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=i),e[i]=[a];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var a=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=l,a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){a=r[i],o=a.getAttribute("data-href");if(o===e||o===t)return a}},i=function(i){return new Promise((function(a,o){var r=n.miniCssF(i),l=n.p+r;if(t(r,l))return a();e(i,l,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={5:1,10:1,38:1,61:1,132:1,221:1,249:1,290:1,322:1,328:1,336:1,391:1,401:1,415:1,466:1,481:1,501:1,547:1,550:1,594:1,636:1,700:1,724:1,745:1,746:1,854:1,866:1,873:1,884:1,893:1,924:1,931:1,947:1,997:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,i){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=e[t]=[n,i]}));i.push(a[2]=o);var r=n.p+n.u(t),l=new Error,s=function(i){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],l=i[1],s=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(i);d<r.length;d++)o=r[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},i=self["webpackChunkyunweibao_ad"]=self["webpackChunkyunweibao_ad"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5839)}));i=n.O(i)})();
//# sourceMappingURL=app.a55f11cf.js.map