
function browserVersion() {
    var u = navigator.userAgent;
    return {//移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    };
}
const browser = browserVersion();

export class postAN {

    static ANSend(cmd) {
        console.log("发送指令 " + cmd);

        try {
            if (browser.android) {
                // eslint-disable-next-line no-undef
                AN.sendSelect(cmd);
            } else {
                // eslint-disable-next-line no-undef
                // IosSendSelect.postMessage(cmd);
                window.flutter_inappwebview.callHandler("IosSendSelect", cmd);
            }
        } catch (e) {
            console.log(e);
        }
    }
    //  获取版本号
    static ANVersion() {
        var version = "";
        if (browser.android) {
            // eslint-disable-next-line no-undef
            version = AN.getParam("version");
        }
        return version;
    }

    // 设置指令
    static ANsendSetting(cmds) {

        if (browser.android) {
            // eslint-disable-next-line no-undef
            AN.sendSetting(cmds);
        } else {
            // eslint-disable-next-line no-undef
            // JsLog.postMessage("cmd --------" + cmd);
            // eslint-disable-next-line no-undef
            // IosSendSetting.postMessage(cmd);
            window.flutter_inappwebview.callHandler("IosSendSetting", cmds);
        }

    }
    static ANsendSelectPhoto(image) {
        console.log(image)
        if (browser.android) {
            // eslint-disable-next-line no-undef
            AN.sendSelectPhoto("$SNAPSHOT," + image + ",5");
        } else {
            // eslint-disable-next-line no-undef
            // JsLog.postMessage("cmd --------" + cmd);
            // eslint-disable-next-line no-undef
            // IosSendSetting.postMessage(cmd);
            window.flutter_inappwebview.callHandler("sendSelectPhoto", "$SNAPSHOT," + image + ",5");
        }
        
    }
    // 倒车影响
    static ANStartBack(channel) {
        console.log(channel);
        
        if (browser.android) {
            // eslint-disable-next-line no-undef
            AN.start_Back(channel);
        } else {
            // eslint-disable-next-line no-undef
            // JsLog.postMessage("cmd --------" + cmd);
            // eslint-disable-next-line no-undef
            // IosSendSetting.postMessage(cmd);
            window.flutter_inappwebview.callHandler("IosReversingCamera", channel);
        }
    }
    // 安卓标定
    static calibrationFn(num, cmds) {
        var title = "";
        var cmd = "";
        switch (num) {
            case 1:
                title = "ADAS";
                cmd = "ADAS";
                break;
            case 2:
                title = "DSM 1";
                cmd = "DSM1";
                break;
            case 3:
                title = "DSM 2";
                cmd = "DSM2";
                break;
                case 4:
                title = "BSD 1";
                cmd = "BSD1";
                break;
                case 5:
                title = "BSD 2";
                cmd = "BSD2";
                break;
                case 6:
                title = "BSD 3";
                cmd = "BSD3";
                break;
        }
        // console.log(cmds);
        if (browser.android) {
            // eslint-disable-next-line no-undef
            AN.startAI(title, cmd, cmds);
        } else {
            window.flutter_inappwebview.callHandler("startAI", cmds);
        }


    }
    static finishWeb() {

        if (browser.android) {
            // eslint-disable-next-line no-undef
            AN.finishWeb();
        } else {
            // eslint-disable-next-line no-undef
            // JsLog.postMessage("55555")
            // eslint-disable-next-line no-undef
            // IosFinishWeb.postMessage("2222");
            window.flutter_inappwebview.callHandler("IosFinishWeb", "true");
        }

    }

    static setTitle(title) {
        try {
            // eslint-disable-next-line no-undef
            IosFinishWeb.postMessage(title);
        } catch (e) {
            window.flutter_inappwebview.callHandler("IosFinishWeb", "你好");
        }

    }
}