// 解析设备版本号
export function getVersion(str, callback) {
    var version = "";
    if (str != undefined && str != "" && str != null && str.indexOf("WEB3VERSION")) {
        version = str.split(",")[1].substring(3);
        var versionArr = version.split(".");
        var vers = "";
        if (versionArr[1] == 0 && versionArr[0] == 3) {
            vers = `${versionArr.slice(2).join("")}`;
        } else {
            vers = `${versionArr[0]}.${versionArr.slice(1).join("")}`;
        }
        version = parseFloat(vers);
        localStorage.version = version;
        callback(version);
    }
}

// 多指令解析,队列
export function encodeCmd(cmds, data) {
    var content = data.split("!");
    var cmdArr = new Array(cmds.length);
    for (var i = 0; i < cmds.length; i++) {
        for (var j = 0; j < content.length; j++) {
            var index = content[j].indexOf(cmds[i]);
            if (index !== -1) {
                cmdArr[i] = content[j].split(";")[0];
            }
        }
    }
    cmdArr[0] = content[0].split(";")[0];
    return cmdArr;
}