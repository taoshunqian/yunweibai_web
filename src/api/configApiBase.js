export default function configApiBase() {

    const modelApi = true;

    let apiBase = {
        url: "",
        url2: "",
        userName: "superman",
        userGuid: "8e2d5151-5415-495e-af14-4bdcef941e06"
    }

    function baseFn() {
        if (modelApi) {
            apiBase.url = "";
            apiBase.url2 = "http://116.247.83.156:9341";
        } else {
            apiBase.url = "";
            apiBase.url2 = "http://116.247.83.156:9341";
        }
    }

    baseFn();

    return {
        apiBase
    }
}