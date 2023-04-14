export const proto = `
var msgArr = [];
var match = /message (\\S*) {/;

// 控制如果生成相同的message 名称，不进行再次添加
const filterMessage = (data, str) => {
    var bool = false;
    data.filter((value) => {
        var message = value.match(match)[1];
        if (message == str) {
            bool = true;
        }
    })
    return bool;
}

// 数组内使用 message时，动态生成 message 名称
function randCode() {
    var str = "";
    for (var i = 0; i < 10; i++) {
        str += String.fromCharCode(
            Math.floor(Math.random() * 26) + "a".charCodeAt(0)
        )
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

// 处理 数组结构
const filterArr = (data, callBack) => {
    var type = "string";
    var strMsg = "";
    var isFirst = true;
    if (data.length > 0) {
        data.forEach((item, index) => {
            if (typeof item == "object") {
                if (isFirst) {
                    var random = 'Ass' + randCode();
                    strMsg = 'message ' + random + ' {' + encodeMessage(item, callBack) + '}';
                    callBack(strMsg)
                    type = random;
                    isFirst = true;
                }
            } else {
                type = typeof item == "number" ? "uint32" : "string";
            }
        })
    }
    return type;
}

// 区分值生成不同的key value
function encodeMessage(data, callBack) {
    var strProto = "";
    var num = 1;
    for (var i in data) {
        if (typeof data[i] == "object") {
            if (data[i] instanceof Array) {
                strProto += 'repeated ' + filterArr(data[i], callBack) + ' ' + i + ' = ' + num + ';';
            } else {
                var strMsg = "";
                var UpperCaseStr = i.slice(0, 1).toUpperCase() + i.slice(1);
                strMsg +=  'message ' + UpperCaseStr + ' { ' + encodeMessage(data[i], callBack) + '}';
                if (!filterMessage(msgArr, UpperCaseStr)) {
                    callBack(strMsg)
                }
                strProto += UpperCaseStr + '  ' + i + '  ' + num + ';';
            }
        } else if (typeof data[i] == "number") {
            strProto += 'uint32 ' + i + ' = ' + num + ';';
        } else if (typeof data[i] == "string") {
            strProto += 'string ' + i + ' = ' + num + ';';
        } else if (typeof data[i] == "boolean") {
            strProto += 'bool ' + i + ' = ' + num + ';';
        }
        num++;
    }
    return strProto;
}
// 动态生成 message
exports.encodeMsg = function(data) {
    var msgArr = [];
    var message = encodeMessage(data, (msg) => {
        msgArr.push(msg)
    });
    var strProto = msgArr.join(" ") + ' message  Demo { '+ message + '}';
    return { msgArr, message, strProto };
}
`;