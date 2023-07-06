/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ "./src/router/index.js");
/* harmony import */ var _utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utlis/QueryStr */ "./src/utlis/QueryStr.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-i18n */ "./node_modules/_vue-i18n@9.2.2@vue-i18n/dist/vue-i18n.esm-bundler.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'App',
  setup: function setup(__props) {
    var _useI18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_3__.useI18n)(),
        locale = _useI18n.locale; // 全局控制 参数 -------------------

    /*
      逻辑概况说明: 
      1. 向导模式 [ 国内 国际 ]
      2. 普通模式 [ 国内 国际 ]
      3. locale : 版本    : false === 国内版  true === 国际版, 
      4. guide : 向导模式 ： true === 向导模式  false === 普通模式
      5. [多条指令  单条指令]
    */


    var model = true; // 生产 true 测试 false

    var lang = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true); //  false === 国内版  true === 国际版
    // ---------------------------------

    console.log(window.location.href);

    try {
      // 生产模式
      if (model) {
        var hash = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__.getQueryString)("hash");
        _router__WEBPACK_IMPORTED_MODULE_1__["default"].push("/" + hash); // 跳转路由

        locale.value = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__.getQueryString)("la"); // 设置语言

        lang.value = locale.value == "zh" ? true : false; // true 当前为 为国内版   false 国际版
      } else {
        // 测试模式
        locale.value = "tw"; // 设置语言

        lang.value = true;
        var route = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__.getQueryString)("hash");

        if (route == undefined) {
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push("/");
        } else {
          // router.push("/" + route);
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push("/decodeProto");
        } // router.push("/AlarmIoInfo"); // 跳转路由

      }

      var modele = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__.getQueryString)("model");
      sessionStorage.model = modele;
    } catch (e) {
      console.warn(e);
    } // 全局路由和组件可用


    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)("lang", {
      lang: lang
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
      name: "app"
    });
    return function (_ctx, _cache) {
      var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.KeepAlive), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 64);
    };
  }
});

/***/ }),

/***/ "./src/locales/getMessage.js":
/*!***********************************!*\
  !*** ./src/locales/getMessage.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _phaseTwoGetMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phaseTwoGetMessage */ "./src/locales/phaseTwoGetMessage.js");
/* harmony import */ var _phaseThreeGetMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phaseThreeGetMessage */ "./src/locales/phaseThreeGetMessage.js");
/* harmony import */ var _phaseFourGetMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phaseFourGetMessage */ "./src/locales/phaseFourGetMessage.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  ru: (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _phaseTwoGetMessage__WEBPACK_IMPORTED_MODULE_1__["default"].ru), _phaseThreeGetMessage__WEBPACK_IMPORTED_MODULE_2__["default"].ru), _phaseFourGetMessage__WEBPACK_IMPORTED_MODULE_3__["default"].ru), {}, {
    home: "Главная",
    toast: ["Команда запроса выполнена успешно", "успешно установлен", "Ошибка установки", "Камера не поддерживает установку разрешения", "Идет поиск,Пожалуйста, подождите..."],
    picker: ["Подтвердить", "Отмена"],
    carInfo: {
      label: ["ID устройства", "Номер телефона", "Гос.Номер", "Цвет гос.номера", "Код города", "Заводской номер", "VIN", "Классификация номерных знаков", "Номер двигателя", "Тип соглашения"],
      placeholder: ["Пожалуйста, введите ID устройства", "Пожалуйста, введите номер телефона", "Пожалуйста, введите гос.номер", "Пожалуйста, введите код города", "Пожалуйста, введите номер производителя", "Пожалуйста, введите номер VIN", "Пожалуйста, введите категорию  гос.номер", "Пожалуйста, введите номер двигателя"],
      columns: "Синий, Желтый, Черный, Белый, Зеленый, Желто-зеленый, Зеленый градиент, Другое",
      navTitle: "Информация об автомобиле"
    },
    netWork3g4g: {
      label: ["Включить", "Номер телефона", "Точка доступа", "Имя пользователя", "Пароль"],
      placeholder: ["Введите номер телефона", "Введите точку доступа", "Введите имя пользователя", "Введите пароль", "Введите MTU"],
      button: ["Заводские настройки"],
      navTitle: "Сеть передачи данных",
      note: "Номер телефона – это номер Интернета предоставленный оператором.,не мой номер телефона"
    },
    actualTime: {
      title: ["Имя: Состояние видео", "Имя: Видеовход", "Имя: Состояние сети", "Имя: Состояние позиционирования"],
      value: ["Статус: Нет", "Статус: Нет", "Статус: ", "Статус: "],
      label: ["Информация: Нет", "Информация: Нет", "Информация: ", "Информация: "],
      navTitle: "Статус в реальном времени"
    },
    alarm: {
      title: ["Номер IO", "Включение зуммера", "Имя события", "Задержка", "Количество непрерывных снимков", "Включить", "Тип", "Тип отчета", "Режим моментального снимка", "Интервал серийной съемки"],
      navTitle: "IO",
      start: ["Отключено", "Включено"],
      type: ["Отрицательный триггер", "Положительный триггер"],
      alarm: ["Не сообщать", "Обычный", "Аварийная тревога"],
      cameraType: ["Одиночный снимок", "Двойной снимок", "Серийный снимок"]
    },
    alarmInfo: {
      label: ["Включить", "Зуммер", "Название события", "Тип", "Задержка", "Тип отчета", "Режим моментального снимка", "Количество непрерывных снимков", "Интервал непрерывного снимка", "Тип протокола", "Логическая инверсия", "Канал переключения экрана", "Номер канала записи по тревоге", "захват номера канала"],
      // ----------- 2023/02/16 二期新增
      labelTwo: ["Канал IO", "Функция"],
      channelColumn: "Канал 1, Канал 2, Канал 3, Канал 4, Канал 5, Канал 6, Канал 7, Канал 8",
      filtersCOlumns: "Функция не настроена",
      channelColumns3: "Опрос",
      // ------------------
      placeholder: ["Пожалуйста, введите название события", "Пожалуйста, введите задержку", "Пожалуйста, введите количество непрерывных снимков", "Пожалуйста, введите непрерывный интервал"],
      logical: ["Включить", "Выключить"],
      radio: ["Положительный триггер", "Отрицательный триггер"],
      columns2: "Нет отчета, Нормальный, Срочный сигнал тревоги",
      columns3: "Одиночный снимок, Двойной снимок, Серийный снимок",
      channelTitle: "Нет",
      navTitle: "IO"
    },
    cameraInfo: {
      title: ["Включить", "Разрешение", "Горизонтальное зеркало", "Вертикальное зеркало", "Установить разрешение"],
      navTitle: ["Камера", "Настройки"]
    },
    cameraSettings: {
      title: ["Формат видео"],
      navTitle: "Настройки камеры"
    },
    demarcate: {
      button: ["Калибровка ADAS", "Калибровка BSM1", "Калибровка BSM2", "Завершение работы мастера"],
      navTitle: "Удаленная калибровка"
    },
    diskStatus: {
      title: ["Имя", "Статус диска", "Общая емкость", "Оставшаяся емкость", "Формат", "Статус использования"],
      diskStatusLang: "--,Разблокировано, Нет, --, Неформатировано, Форматирование, Неиспользовано, Ошибка, Полное, Перезаписано, Запись, Обычный",
      navTitle: "Диск",
      load: "Формат...",
      alert: ["Подскажите", "Инструкция выдана, Проверьте пожалуйста, Началось ли форматирование устройства"],
      alertMsg: ["Недействительно", "Форматирование...", "Форматирование успешно"],
      stateName: "Разблокировано, Нет, Неформатировано, Исключение, Обычное",
      tipsConfirm: "Подтвердить"
    },
    platformSettings: {
      title: ["Сервер", "IP-адрес сервера", "Порт сервера", "Статус сервера", "Статус устройства"],
      navTitle: "Настройка платформы",
      deviceState: ["Не в сети, В сети, Срок действия лицензии истек, Ограничения, Конфликт, Недействителен, Не включен"],
      serveState: ["Включено", "Отключено", "Отключено"],
      logonState: ["Автоматический", "Ручной", "Неизвестный"]
    },
    platformStatus: {
      title: ["Платформа", "IP-адрес сервера/имя домена", "Порт сервера", "Включено ли", "Регистрация", "Тип протокола", "Тип платформы", "Региональные стандарты", "Статус устройства"],
      navTitle: "Платформа",
      columns3: "Платформа стандартного протокола 808, Tongtianxing, Sany, Xingguan, Chaoyue, Yunke, Dongguan Yicheng, CRRC, Xiamen Swissquote",
      columns4: "Цзянсу, Гуандун, Синьчуаньбяо, Шэньси",
      deviceState: ["Не в сети, В сети, Срок действия лицензии истек, Ограничения, Конфликт, Недействителен, Не включен"],
      serveState: ["Включено", "Отключено", "Отключено"],
      logonState: ["Автоматический", "Ручной", "Неизвестный"]
    },
    rotaTestNsor: {
      title: ["Включить", "Тип", "Логическая инверсия", "Период обнаружения импульса(s)", "Состояние", "Тип соглашения"],
      placeholder: ["Пожалуйста, введите период обнаружения пульса"],
      radio: ["Включить", "Выключить"],
      navTitle: "Датчик прямого и заднего хода",
      columns2: "Трехточечный магнитный контактный тип, Импульсный тип AD, Одноточечный магнитный всасывающий тип",
      columns3: "Стоп, Вперед, Назад"
    },
    serveInfo: {
      title: ["Включить", "Регистрация", "IP/доменное имя", "Порт", "Тип протокола", "Тип платформы", "Местный стандарт", "Статус устройства"],
      placeholder: ["Пожалуйста, введите IP/имя домена", "Пожалуйста, введите порт"],
      radio: ["Автоматический", "Ручной"],
      navTitle: "Сервер ",
      columns3: "Платформа стандартного протокола 808, Tongtianxing, Sany, Xingguan, Chaoyue, Yunke, Dongguan Yicheng, CRRC, Xiamen Swissquote",
      columns4: "Цзянсу, Гуандун, Синьчуаньбяо, Шэньси",
      errorMsg: "IP/имя домена не может быть на китайском"
    },
    settingsIP: {
      title: ["Включить", "Имя WIFI", "Пароль", "Тип IP", "IP-адрес", "Маска подсети", "Шлюз по умолчанию", "DNS", "DNS-сервер", "Подтвердить"],
      button: ["Поиск"],
      placeholder: ["Введите имя WIFI", "Введите пароль", "Введите IP-адрес", "Введите маску подсети", "Введите шлюз по умолчанию", "Введите DNS-сервер"],
      radio: ["Динамический", "Статический", "Динамический DNS", "Статический DNS"],
      navTitle: "Настроить Wi-Fi",
      connectState: "--, Отключено, Подключено, Не подключено",
      itemList: ["Имя Wi-Fi: ", "Вам нужен пароль: "],
      errorMsg: "Имя WIFI не может быть китайским"
    },
    systemInfo: {
      navTitle: "Оборудование",
      cellList: "Модель устройства, Серийный номер устройства, Номер версии оборудования, Номер версии программного обеспечения, Номер версии MCU, Авторизация, Имя производителя, Модель модуля, Информация о версии модуля, Номер SN модуля, IMSI SIM-карты, Информация о модуле GPS, Код продукта (ADAS), Номер версии оборудования, Номер версии программного обеспечения, Идентификатор устройства, Статус ADAS, Статус DSM, Статус авторизации, Статус работы, Статус настройки"
    },
    wifiSettings: {
      title: ["Включить", "Тип модуля", "Номер", "Имя WIFI", "Статус"],
      navTitle: "Настройки Wi-Fi",
      modelValue: "Обнаружение..., авторизовано, неавторизовано",
      warrantValue: "Проверка, нет модуля, 2.4G",
      wifiStatus: "--, Отключено, Подключено, Не подключено"
    },
    newWork: {
      columns: "Нет,Позиция.,Блокировка,Вытаскивание антенны,антенное короткое замыкание,Внешний GPS онлайн,Внешние GPS аномалии,Ошибка!Проверено.,Нет модулей,Не санкционирована,Есть.!Не подключен,Подключение!Отключение электроэнергии,Нет модулей,Проверено.,Необычные,LTE,EVDO,WCDMA!Отключение электроэнергии,Да - блокировка нормальная.,Есть - блокировка ограничена,Нет,Есть.,Необычные!Отключение электроэнергии,Нет,Слабый,Чжун,Цзян!Отключение электроэнергии,Подключение,Не подключен,Ошибка регистрации,Ошибка набора,Набираем.!Эфир,WIFI,3G,4G,2G,Нет!Нет,Онлайн,В автономном режиме!В автономном режиме,Онлайн,Срок действия разрешения,Ограничения,Конфликт,Неверный,Не включено",
      // columns: "Ничего, Позиционирование, Блокировка, Выдвижение антенны, Короткое замыкание антенны, Внешний GPS в сети, Внешняя аномалия GPS, Ошибка! тестирование, Нет модуля, Несанкционированное, Есть! ,EVDO,WCDMA!сбой питания,Да - нормальная блокировка,Да - Ограниченная блокировка,ничего,есть,ненормальный!сбой питания,ничего,слабый,ОК,сильный!сбой питания,подключение,не подключено,сбой входа в систему,сбой набора номера, набор номера!Ethernet,WIFI,3G,4G,2G,ничего!ничего,он-лайн,офлайн!офф-лайн,он-лайн,Срок действия авторизации истекает,быть ограниченным,конфликт,недействительный,не включен",
      titleColumn: "GPS, модуль WIFI, статус WIFI, Тип модуля, SIM-карта, Сигнал 3G/4G, Коммутируемый доступ, Тип сети, Видеосервер, Количество спутников",
      navTitle: "Сеть",
      serverName: "Стандартный сервер министерства "
    },
    adas: {
      label: ["Ширина автомобиля", "Расстояние от камеры до левого борта автомобиля", "Высота установки камеры", "Расстояние от камеры до переднего бампера"],
      placeholder: ["Введите ширину автомобиля", "Введите расстояние", "Введите ширину", "Введите расстояние"],
      button: "Начать калибровку",
      navTitle: "Калибровка ADAS"
    },
    dsm: {
      button: ["Калибровка DSM", "Калибровка HOD", "Калибровка BSD", "Калибровка BSD2", "Калибровка BSD3"],
      dialog: ["Подсказка", "Чтобы выйти из режима мастера, нажмите ОК. Если вам нужно установить другие функции, нажмите Отмена", "Подтвердить", "Отменить"],
      navTitle: "Калибровка"
    },
    oilParam: {
      label: ["Текущий уровень топлива", "Текущее количество топлива", "Тип", "Порог срабатывания сигнализации", "Количество калибровок", "Общая емкость", "Максимум датчика"],
      placeholder: ["Введите текущий уровень топлива", "Введите текущий объем топлива", "Введите порог срабатывания сигнализации", "Пожалуйста, Введите номер калибровки", "Пожалуйста, введите общую емкость", "Пожалуйста, Введите максимальные данные датчика"],
      title: "Тип",
      navTitle: "Датчик топлива"
    },
    popupCheckbox: {
      button: ["Отмена", "Подтвердить"]
    },
    stickyBottom: {
      button: ["Предыдущий", "Сохранить", "Далее", "Запрос", "Сохранить", "Мастер выхода"],
      toast: "Не более~"
    },
    tab: {
      leftText: "Вернуть",
      rightText: "Лог",
      dialog: ["Советы", "Нажмите для подтверждения, Мастер окончания", "Подтвердить", "Отменить"],
      stateArr: ["Нормально", "Подключено успешно", "Отключено", "Повторно подключается", "Время ожидания пульса истекло", "Wi-Fi отключен", "Wi-Fi подключен"]
    }
  }),
  en: (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _phaseTwoGetMessage__WEBPACK_IMPORTED_MODULE_1__["default"].en), _phaseThreeGetMessage__WEBPACK_IMPORTED_MODULE_2__["default"].en), _phaseFourGetMessage__WEBPACK_IMPORTED_MODULE_3__["default"].en), {}, {
    home: "HOME",
    toast: ["Query command issued successfully", "Issued successfully", "Failed to issue", "This camera does not support setting resolution", "Searching, please wait..."],
    picker: ["Confirm", "Cancel"],
    carInfo: {
      //  iphone number 修改为 platform number
      label: ["Device ID", "JTID", "license plate number", "License plate color", "Area Code", "Manufacturer No", "VIN frame number", "License plate classification", "Engine number", "Protocol"],
      placeholder: ["Please enter the device ID", "Please enter your mobile number", "Please enter the license plate number", "Please enter the area code", "Please enter the manufacturer number", "Please enter VIN frame number", "Please enter the license plate category", "Please enter the engine number"],
      columns: "blue,yellow,black,white,green,Yellowish green,Gradual green,other",
      navTitle: "Vehicle information"
    },
    netWork3g4g: {
      label: ["Enable", "Telephone number", "Access point", "user name", "password"],
      placeholder: ["Please enter a phone number", "Please enter the access point", "enter one user name", "Please input a password", "Please enter MTU"],
      button: ["Factory settings"],
      navTitle: "Data Network",
      note: "The phone number is the Internet number provided by the operator, not the local number"
    },
    actualTime: {
      title: ["Name: Video Status", "Name: Video Input", "Name: Network Status", "Name: Positioning Status"],
      value: ["Status: None", "Status: None", "Status: ", "Status: "],
      label: ["Info: None", "Info: None", "Info: ", "Info: "],
      navTitle: "Real time status"
    },
    alarm: {
      title: ["IO", "Buzzer Enable", "Event Name", "delay", "Number of consecutive shots", "Enable", "type", "Escalation type", "Capture mode", "Burst interval"],
      navTitle: "Alarm input status",
      start: ["Not enabled", "Enable"],
      type: ["Negative trigger", "Positive trigger"],
      alarm: ["Do not report", "normal", "Emergency alarm"],
      cameraType: ["Single shot", "Double beat", "Continuous shooting"]
    },
    alarmInfo: {
      label: ["Enable", "Buzzer", "Event Name", "type", "delayed", "Escalation type", "Capture mode", "Number of consecutive shots", "Burst interval", "Protocol", "Logical negation", "Switch channel", "Alarm video channel", "Capture channel"],
      // ----------- 2023/02/16 二期新增
      labelTwo: ["IO channel", "function"],
      channelColumn: "channel 1,channel 2,channel 3,channel 4,channel 5,channel 6,channel 7,channel 8",
      filtersCOlumns: "Feature not configured",
      channelColumns3: "polling",
      // ------------------
      placeholder: ["Please enter the event name", "Please enter delay", "Please enter the number of consecutive shots", "Please enter the continuous shooting interval"],
      logical: ["Enable", "Not enable"],
      radio: ["Positive trigger", "Negative trigger"],
      columns2: "Do not report,normal,Emergency alarm",
      columns3: "Single shot,Double beat,Continuous shooting",
      channelTitle: "no",
      navTitle: "Alarm input status"
    },
    cameraInfo: {
      title: ["Enable", "Resolution", "Horizontal Mirror", "Vertical Mirror", "Set resolution"],
      navTitle: ["camera ", " set up"]
    },
    cameraSettings: {
      title: ["Video format"],
      navTitle: "Camera settings"
    },
    demarcate: {
      button: ["ADAS calibration", "BSM1 calibration", "BSM2 calibration", "End Wizard"],
      navTitle: "Remote calibration"
    },
    diskStatus: {
      title: ["name", "Disk Status", "Total capacity", "Remaining capacity", "format", "Usage status"],
      diskStatusLang: "--,Unlocked,nothing,--,unformatted,Formatting,not used,error,already expired,cover,On video,normal",
      navTitle: "Disk Status",
      load: "format...",
      alert: ["Tips", " The command has been issued. Please check whether the device starts formatting "],
      alertMsg: ["invalid", "Formatting ...", "Format succeeded"],
      stateName: "Unlocked,nothing,unformatted,abnormal,normal",
      tipsConfirm: "Confirm"
    },
    platformSettings: {
      title: ["Server", "Server IP", "Server Port", "Server Status", "Device status"],
      navTitle: "Platform configuration",
      // deviceState: ["on-line", "off-line", "unknown"],
      deviceState: ["off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled"],
      serveState: ["Enable", "Not enabled", "unknown"],
      logonState: ["Auto", "Manual", "unknown"]
    },
    platformStatus: {
      title: ["platform ", "Server IP / domain name", "Server Port", "Enable", "register", "Protocol", "Platform Type", "Local standards", "Device status"],
      navTitle: "Platform status",
      columns3: "808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",
      columns4: "Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",
      //  deviceState: ["on-line", "off-line", "unknown"],
      deviceState: ["off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled"],
      serveState: ["Enable", "Not enabled", "unknown"],
      logonState: ["automatic", "Manual", "unknown"]
    },
    rotaTestNsor: {
      title: ["Enable", "type", "Logical negation", "Pulse detection cycle(s)", "state", "Protocol"],
      placeholder: ["Please enter the pulse detection cycle"],
      radio: ["Enable", "close"],
      navTitle: "Forward and reverse rotation sensor",
      columns2: "Three point magnetic touch,Pulse AD type,Single point magnetic suction type",
      columns3: "stop,Forward rotation,reversal"
    },
    serveInfo: {
      title: ["Enable", "register", "IP/domain name", "port", "Protocol", "Platform Type", "Local standards", "Device State"],
      placeholder: ["Please enter IP/domain name", "Please enter the port"],
      radio: ["Auto", "Manual"],
      navTitle: "Server ",
      columns3: "808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",
      columns4: "Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",
      errorMsg: " IP Cannot be in Chinese"
    },
    settingsIP: {
      title: ["Enable", "WIFI Name", "password", "IP type", "IP address", "Subnet mask", "Default Gateway", "DNS", "DNS Server", "Confirm"],
      button: ["Search"],
      placeholder: ["Please enter WIFI name", "Please input a password", "Please enter the IP address", "Please enter the subnet mask", "Please enter the default gateway", "Please enter DNS server"],
      radio: ["dynamic", "Static state", "dynamic DNS", "Static DNS"],
      navTitle: "Set WIFI",
      connectState: "--,Disable,Connected,Not connected",
      itemList: ["wifi Name: ", "Require password: "],
      errorMsg: " WIFI name Cannot be in Chinese"
    },
    systemInfo: {
      navTitle: "System information",
      cellList: "Equipment model,Equipment serial number,Hardware version number, Software version,MCU version number ,empower ,Name of manufacturer ,Module model ,Module version information ,Module SN No ,SIM card IMSI ,GPS module information ,(ADAS)Product code ,Hardware version number ,Software version number ,Device ID ,ADAS ,DSM,Authorization Status ,running state ,Custom Status "
    },
    wifiSettings: {
      title: ["Enable", "Module Type", "Serial No", "WIFI name", "state"],
      navTitle: "WIFI settings",
      modelValue: "Testing...,Authorized,Unauthorized",
      warrantValue: "Under inspection,No module,2.4G",
      wifiStatus: "--,Disable,Connected,Not connected"
    },
    newWork: {
      columns: "nothing,Positioning,locking,Antenna pull out,Antenna short circuit,External GPS online,External GPS anomaly,error!Testing,No module,Unauthorized,have!Not connected,connect!power failure,No module,Testing,abnormal,LTE,EVDO,WCDMA!power failure,Yes - normal locking,Yes - Limited locking,nothing,have,abnormal!power failure,nothing,weak,OK,strong!power failure,connect,Not connected,login has failed,Dialing failed,dialing!Ethernet,WIFI,3G,4G,2G,nothing!nothing,on-line,off-line!off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled",
      titleColumn: "GPS,WIFI Model,WIFI Status,Model Type,SIM,3G/4G,Dial,NewWork,Video server,Satellites",
      navTitle: "NewWork",
      serverName: "Departmental server "
    },
    adas: {
      label: ["Vehicle width", "Camera to left side of vehicle", "Camera installation height", "Camera to bumper"],
      placeholder: ["Please enter the vehicle width", "Please enter the distance", "Please enter the width", "Please enter the distance"],
      button: "Start calibration",
      navTitle: "ADAS calibration"
    },
    dsm: {
      button: ["DSM calibration", "HOD calibration", "BSD calibration", "BSD2 calibration", "BSD3 calibration"],
      navTitle: "calibration",
      dialog: ["Tips", "To exit the wizard mode, click OK. If you need to set other functions, click Cancel", "Confirm", "Cancel"]
    },
    oilParam: {
      label: ["Current oil level", "Current oil volume", "type", "Alarm threshold", "Number of calibrations", "Total capacity", "Sensor maximum"],
      placeholder: ["Please enter the current oil level", "Please enter the current oil quantity", "Please enter the alarm threshold", "Please enter the number of calibrations", "Please enter the total capacity", "Please enter the maximum value of sensor data"],
      title: "type",
      navTitle: "Oil sensor"
    },
    popupCheckbox: {
      button: ["Cancel", "Confirm"]
    },
    stickyBottom: {
      button: ["Back", "Preservation", "Next", "Query", "Preservation", "Exit Wizard"],
      toast: "No more ~"
    },
    tab: {
      leftText: "Back",
      rightText: "Log",
      dialog: ["Tips", "Click OK to end the wizard", "OK", "Cancel"],
      stateArr: ["normal", "Successfully connected", "break", "Reconnection", "Heartbeat Timeout", "WiFi disconnected", "WiFi connection"]
    }
  }),
  zh: (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _phaseTwoGetMessage__WEBPACK_IMPORTED_MODULE_1__["default"].zh), _phaseThreeGetMessage__WEBPACK_IMPORTED_MODULE_2__["default"].zh), _phaseFourGetMessage__WEBPACK_IMPORTED_MODULE_3__["default"].zh), {}, {
    home: "首页",
    toast: ["查询指令成功", "设置成功", "设置失败", "该摄像头不支持设置分辨率", "正在搜索,请稍等..."],
    picker: ["确认", "取消"],
    carInfo: {
      label: ["设备ID", "手机号码", "车牌号", "车牌颜色", "区域代码", "制造商编号", "VIN车架号", "车牌分类", "发动机号", "协议类型"],
      placeholder: ["请输入设备ID", "请输入手机号码", "请输入车牌号", "请输入区域代码", "请输入制造商编号", "请输入VIN车架号", "请输入车牌分类", "请输入发动机号"],
      columns: "蓝色,黄色,黑色,白色,绿色,黄绿色,渐变绿,其它",
      navTitle: "车辆信息"
    },
    netWork3g4g: {
      label: ["启用", "电话号码", "接入点", "用户名", "密码"],
      placeholder: ["请输入电话号码", "请输入接入点", "请输入用户名", "请输入密码", "请输入MTU"],
      button: ["出厂设置"],
      navTitle: "数据网络",
      note: "电话号码是运营商提供的上网号,不是本机号"
    },
    actualTime: {
      title: ["名称: 视频状态", "名称: 视频输入", "名称: 网络状态", "名称: 定位状态"],
      value: ["状态: 无", "状态: 无", "状态: ", "状态: "],
      label: ["信息: 无", "信息: 无", "信息: ", "信息: "],
      navTitle: "实时状态"
    },
    alarm: {
      title: ["IO序号", "蜂鸣器启用", "事件名称", "延迟", "连拍张数", "启用", "类型", "上报类型", "抓拍模式", "连拍间隔"],
      navTitle: "IO",
      start: ["不启用", "启用"],
      type: ["负触发", "正触发"],
      alarm: ["不上报", "正常", "紧急报警"],
      cameraType: ["单拍", "双拍", "连拍"]
    },
    alarmInfo: {
      label: ["启用", "蜂鸣器", "事件名称", "类型", "延时", "上报类型", "抓拍模式", "连拍张数", "连拍间隔", "协议类型", "逻辑反", "画面切换通道", "报警录像通道号", "抓拍通道号"],
      // ----------- 2023/02/16 二期新增
      labelTwo: ["IO通道", "功能"],
      channelColumn: "通道 1,通道 2,通道 3,通道 4,通道 5,通道 6,通道 7,通道 8",
      filtersCOlumns: "未配置功能",
      channelColumns3: "轮询",
      // ------------------
      placeholder: ["请输入事件名称", "请输入延时", "请输入连拍张数", "请输入连拍间隔"],
      logical: ["使能", "不使能"],
      radio: ["正触发", "负触发"],
      columns2: "不上报,正常,紧急报警",
      columns3: "单拍,双拍,连拍",
      channelTitle: "否",
      navTitle: "IO"
    },
    cameraInfo: {
      title: ["启用", "分辨率", "水平镜像", "垂直镜像", "设置分辨率"],
      navTitle: ["摄像头 ", " 设置"]
    },
    cameraSettings: {
      title: ["视频制式"],
      navTitle: "摄像头设置"
    },
    demarcate: {
      button: ["ADAS标定", "BSM1标定", "BSM2标定", "结束向导"],
      navTitle: "远程标定"
    },
    diskStatus: {
      title: ["名称", "磁盘状态", "总容量", "剩余容量", "格式化", "使用状态"],
      diskStatusLang: "--,未锁,无,--,未格式化,格式化中,未使用,错误,已满,覆盖,录像中,正常",
      navTitle: "磁盘",
      load: "格式化...",
      alert: ["提示", " 指令已下发, 请查看设备是否开始格式化 "],
      alertMsg: ["无效", "格式化中...", "格式化成功"],
      stateName: "未锁,无,未格式化,异常,正常",
      tipsConfirm: "确认"
    },
    platformSettings: {
      title: ["服务器", "服务器IP", "服务器端口", "服务器状态", "设备状态"],
      navTitle: "平台配置",
      deviceState: ["离线,在线,授权过期,受限,冲突,无效,未启用"],
      serveState: ["启用", "禁用", "未启用"],
      logonState: ["自动", "手动", "未知"]
    },
    platformStatus: {
      title: ["平台 ", "服务器IP / 域名", "服务器端口", "是否启用", "注册", "协议类型", "平台类型", "各地标准", "设备状态"],
      navTitle: "平台",
      columns3: "808标准协议平台,通天星,三一,星冠,超越,云科,东莞亿程,中车,厦门瑞讯",
      columns4: "江苏,广东, 新川标,陕西",
      deviceState: ["离线,在线,授权过期,受限,冲突,无效,未启用"],
      serveState: ["启用", "禁用", "未启用"],
      logonState: ["自动", "手动", "未知"]
    },
    rotaTestNsor: {
      title: ["启用", "类型", "逻辑反", "脉冲检测周期(秒)", "状态", "协议类型"],
      placeholder: ["请输入脉冲检测周期"],
      radio: ["启用", "关闭"],
      navTitle: "正反转传感器",
      columns2: "三点磁触式,脉冲AD式,单点磁吸式",
      columns3: "停止,正转,反转"
    },
    serveInfo: {
      title: ["启用", "注册", "IP/域名", "端口", "协议类型", "平台类型", "地方标准", "设备状态"],
      placeholder: ["请输入IP/域名", "请输入端口"],
      radio: ["自动", "手动"],
      navTitle: "服务器 ",
      columns3: "808标准协议平台,通天星,三一,星冠,超越,云科,东莞亿程,中车,厦门瑞讯",
      columns4: "江苏,广东, 新川标,陕西",
      errorMsg: " IP/域名 不能为中文"
    },
    settingsIP: {
      title: ["启用", "WIFI名称", "密码", "IP 类型", "IP 地址", "子网掩码", "默认网关", "DNS", "DNS服务器", "确认"],
      button: ["搜索"],
      placeholder: ["请输入WIFI名称", "请输入密码", "请输入IP 地址", "请输入子网掩码", "请输入默认网关", "请输入DNS服务器"],
      radio: ["动态", "静态", "动态DNS", "静态DNS"],
      navTitle: "设置WIFI",
      connectState: "--,禁用,已连接,未连接",
      itemList: ["wifi名称: ", "是否需要密码: "],
      errorMsg: " WIFI名称 不能为中文"
    },
    systemInfo: {
      navTitle: "设备",
      cellList: "设备型号,设备序列号,硬件版本号,软件版本号 ,MCU版本号 ,授权 ,制造商名称 ,模块型号 ,模块版本信息 ,模块SN号 ,SIM卡IMSI ,GPS模块信息 ,(ADAS)产品代号 ,硬件版本号 ,软件版本号 ,设备ID ,ADAS状态 ,DSM状态,授权状态 ,运行状态 ,定制状态 "
    },
    wifiSettings: {
      title: ["启用", "模块类型", "序号", "WIFI名称", "状态"],
      navTitle: "WIFI设置",
      modelValue: "检测中...,已授权,未授权",
      warrantValue: "检查中,无模块,2.4G",
      wifiStatus: "--,禁用,已连接,未连接"
    },
    newWork: {
      columns: "无,定位中,锁定,天线拔出,天线短路,外部GPS在线,外部GPS异常,出错!检测中,无模块,未授权,有!未连接,连接!断电,无模块,检测中,异常,LTE,EVDO,WCDMA!断电,有-锁定正常,有-锁定受限,无,有,异常!断电,无,弱,中,强!断电,连接,未连接,注册失败,拨号失败,拨号中!以太网,WIFI,3G,4G,2G,无!无,在线,离线!离线,在线,授权过期,受限,冲突,无效,未启用",
      titleColumn: "GPS,WIFI模块,WIFI状态,模块类型,SIM卡,3G/4G信号,拨号,网络类型,视频服务器,卫星数",
      navTitle: "网络",
      serverName: "部标服务器 "
    },
    adas: {
      label: ["车辆宽度", "摄像头到车辆左侧距离", "摄像头安装高度", "摄像头到车头保险杠距离"],
      placeholder: ["请输入车辆宽度", "请输入距离", "请输入宽度", "请输入距离"],
      button: "开始标定",
      navTitle: "ADAS标定"
    },
    dsm: {
      button: ["DSM 标定", "HOD 标定", "BSD 标定", "BSD2 标定", "BSD3 标定"],
      dialog: ["提示", "退出向导模式, 请点击确认 , 如果还需设置其他功能, 请点击取消", "确认", "取消"],
      navTitle: "标定"
    },
    oilParam: {
      label: ["当前油位", "当前油量", "类型", "报警阈值", "标定数目", "总容量", "传感器最大值"],
      placeholder: ["请输入当前油位", "请输入当前油量", "请输入报警阈值", "请输入标定数目", "请输入总容量", "请输入传感器数据最大值"],
      title: "类型",
      navTitle: "油感传感器"
    },
    popupCheckbox: {
      button: ["取消", "确认"]
    },
    stickyBottom: {
      button: ["上一步", "保存", "下一步", "查询", "保存", "退出向导"],
      toast: "没有更多了~"
    },
    tab: {
      leftText: "返回",
      rightText: "Log",
      dialog: ["提示", "点击确认, 结束向导", "确认", "取消"],
      stateArr: ["正常", "连接成功", "断开", "重连中", "心跳超时", "wifi断开", "wifi连接"]
    }
  }),
  tw: (0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _phaseTwoGetMessage__WEBPACK_IMPORTED_MODULE_1__["default"].tw), _phaseThreeGetMessage__WEBPACK_IMPORTED_MODULE_2__["default"].tw), _phaseFourGetMessage__WEBPACK_IMPORTED_MODULE_3__["default"].tw), {}, {
    home: "首頁",
    toast: ["査詢指令下發成功", "設定成功", "設定失敗", "該鏡頭不支持設定分辯率", "正在搜索,請稍等..."],
    picker: ["確認", "取消"],
    carInfo: {
      label: ["車機D", "手機號碼", "車牌號", "車牌顏色", "區域代碼", "製造商編號", "VIN車架號", "車牌分類", "發動機號", "協定類型"],
      placeholder: ["請輸入車機ID", "請輸入手機號碼", "請輸入車牌號", "請輸入區域代碼", "請輸入製造商編號", "請輸入VIN車架號", "請輸入車牌分類", "請輸入發動機號"],
      columns: "色,黃色,黑色,白色,綠色,黃綠色,漸變綠,其它",
      navTitle: "車輛資訊"
    },
    netWork3g4g: {
      label: ["啟用", "電話號碼", "接入點", "用戶名", "密碼"],
      placeholder: ["請輸入電話號碼", "請輸入接入點", "請輸入用戶名", "請輸入密碼", "請輸入MTU"],
      button: ["出廠設定"],
      navTitle: "數據網絡",
      note: "電話號碼是運營商提供的上網號,不是本機號"
    },
    actualTime: {
      title: ["名稱: 視頻狀態", "名稱：視頻輸入", "名稱：網絡狀態", "名稱：定位狀態"],
      value: ["狀態：無", "狀態：無", "狀態: ", "狀態: "],
      label: ["資訊：無", "資訊：無", "資訊: ", "資訊: "],
      navTitle: "即時狀態"
    },
    alarm: {
      title: ["IO序號", "蜂鳴器啟用", "事件名稱", "延遲", "連拍張數", "啟用", "類型", "上報類型", "抓拍模式", "連拍間隔"],
      navTitle: "IO",
      start: ["不啟用", "啟用"],
      type: ["負觸發", "正觸發"],
      alarm: ["不上報", "正常", "緊急報警"],
      cameraType: ["單拍", "雙拍", "連拍"]
    },
    alarmInfo: {
      label: ["啟用", "蜂鳴器", "事件名稱", "類型", "延遲", "上報類型", "抓拍模式", "連拍張數", "連拍間隔", "協定類型", "邏輯反", "面切換通道", "報警錄影通道號", "抓拍通道號"],
      placeholder: ["請輸入事件名稱", "請輸入延時", "請輸入連拍張數", "請輸入連拍間隔"],
      logical: ["使能", "不使能"],
      radio: ["正觸發", "負觸發"],
      columns2: "不上報,正常,緊急報警",
      columns3: "單拍,雙拍,連拍",
      channelTitle: "否",
      navTitle: "IO"
    },
    cameraInfo: {
      title: ["啟用", "分辯率", "水准鏡像", "垂直鏡像", "設定分辯率"],
      navTitle: ["鏡頭 ", " 設定"]
    },
    cameraSettings: {
      title: ["視頻制式"],
      navTitle: "鏡頭設定"
    },
    demarcate: {
      button: ["ADAS標定", "BSM1標定", "BSM2標定", "結束嚮導"],
      navTitle: "遠程標定"
    },
    diskStatus: {
      title: ["名稱", "磁片狀態", "總容量", "剩餘容量", "格式化", "使用狀態"],
      diskStatusLang: "--,未鎖,無,--,未格式化,格式化中,未使用,錯誤,已滿,覆蓋,錄影中,正常",
      navTitle: "磁片",
      load: "格式化...",
      alert: ["提示", " 指令已下發, 請查看車機是否開始格式化 "],
      alertMsg: ["無效", "格式化中...", "格式化成功"],
      stateName: "未鎖,無,未格式化,异常,正常",
      tipsConfirm: "確認"
    },
    platformSettings: {
      title: ["伺服器", "伺服器IP", "伺服器端口", "伺服器狀態", "車機狀態"],
      navTitle: "平臺配寘",
      deviceState: ["離線,上線,授權過期,受限,衝突,無效,未啟用"],
      serveState: ["啟用", "禁用", "未啟用"],
      logonState: ["啟用", "禁用", "未啟用"]
    },
    platformStatus: {
      title: ["平臺 ", "伺服器IP / 域名", "伺服器端口", "是否啟用", "注册", "協定類型", "平臺類型", "地方標準", "車機狀態"],
      navTitle: "平臺",
      columns3: "808標準協定平臺,通天星,三一,星冠,超越,雲科,東莞億程,中車,廈門瑞訊",
      columns4: "江蘇,廣東,新川標,陝西",
      deviceState: ["離線,上線,授權過期,受限,衝突,無效,未啟用"],
      serveState: ["啟用", "禁用", "未啟用"],
      logonState: ["啟用", "禁用", "未啟用"]
    },
    rotaTestNsor: {
      title: ["啟用", "類型", "邏輯反", "脈衝檢測週期(秒)", "狀態", "協定類型"],
      placeholder: ["請輸入脈衝檢測週期"],
      radio: ["啟用", "關閉"],
      navTitle: "正反轉感測器",
      columns2: "三點磁觸式,脈衝AD式,單點磁吸式",
      columns3: "停止,正轉,反轉"
    },
    serveInfo: {
      title: ["啟用", "注册", "IP/域名", "端口", "協定類型", "平臺類型", "地方標準", "車機狀態"],
      placeholder: ["請輸入IP/域名", "請輸入端口"],
      radio: ["自動", "手動"],
      navTitle: "伺服器 ",
      columns3: "808標準協定平臺,通天星,三一,星冠,超越,雲科,東莞億程,中車,廈門瑞訊",
      columns4: "江蘇,廣東,新川標,陝西",
      errorMsg: " IP/域名 不能為中文"
    },
    settingsIP: {
      title: ["啟用", "WIFI名稱", "密碼", "IP 類型", "IP 地址", "子網路遮罩", "預設閘道", "DNS", "DNS伺服器", "確認"],
      button: ["搜索"],
      placeholder: ["請輸入WIFI名稱", "請輸入密碼", "請輸入IP地址", "請輸入子網路遮罩", "請輸入預設閘道", "請輸入DNS伺服器"],
      radio: ["動態", "靜態", "動態DNS", "靜態DNS"],
      navTitle: "設定WIFI",
      connectState: "--,禁用,已連接,未連接",
      itemList: ["wifi名稱: ", "是否需要密碼: "],
      errorMsg: " WIFI名稱 不能為中文"
    },
    systemInfo: {
      navTitle: "車機",
      cellList: "車機型號,車機序號,硬體版本號,軟件版本號,MCU版本號,授權,製造商名稱,模塊型號,模塊版本資訊,模塊SN號,SIM卡IMSI,GPS模塊資訊,（ADAS）產品代號,硬體版本號,軟件版本號,車機ID,ADAS狀態,DSM狀態,授權狀態,運行狀態,定制狀態"
    },
    wifiSettings: {
      title: ["啟用", "模塊類型", "序號", "WIFI名稱", "狀態"],
      navTitle: "WIFI設定",
      modelValue: "檢測中…,已授權,未授權",
      warrantValue: "檢查中,無模塊,2.4G",
      wifiStatus: "--,禁用,已連接,未連接"
    },
    newWork: {
      columns: "無,定位中,鎖定,天線拔出,天線短路,外部GPS上線,外部GPS异常,出錯！ 檢測中,無模塊,未授權,有！ 未連接,連接！ 斷電,無模塊,檢測中,异常,LTE,EVDO,WCDMA！ 斷電,有-鎖定正常,有-鎖定受限,無,有,异常！ 斷電,無,弱,中,强！ 斷電,連接,未連接,注册失敗,撥號失敗,撥號中！ 以太網,WIFI,3G,4G,2G,無！ 無,上線,離線！ 離線,上線,授權過期,受限,衝突,無效,未啟用",
      titleColumn: "GPS,WIFI模塊,WIFI狀態,模塊類型,SIM卡,3G/4G訊號,撥號,網絡類型,視訊伺服器,衛星數",
      navTitle: "網絡",
      serverName: "環保機伺服器 "
    },
    adas: {
      label: ["車輛寬度", "鏡頭到車輛左側距離", "鏡頭安裝高度", "鏡頭到車頭保險杠距離"],
      placeholder: ["請輸入車輛寬度", "請輸入距離", "請輸入寬度", "請輸入距離"],
      button: "開始標定",
      navTitle: "ADAS標定"
    },
    dsm: {
      button: ["DSM 標定", "HOD 標定", "BSD 標定", "BSD2 標定", "BSD3 標定"],
      dialog: ["提示", "退出嚮導模式,請點擊確認,如果還需設定其他功能,請點擊取消", "確認", "取消"],
      navTitle: "標定"
    },
    oilParam: {
      label: ["當前油位", "當前油量", "類型", "報警閾值", "標定數目", "總容量", "感測器最大值"],
      placeholder: ["請輸入當前油位", "請輸入當前油量", "請輸入報警閾值", "請輸入標定數目", "請輸入總容量", "請輸入感測器數據最大值"],
      title: "類型",
      navTitle: "油感感測器"
    },
    popupCheckbox: {
      button: ["取消", "確認"]
    },
    stickyBottom: {
      button: ["上一步", "保存", "下一步", "査詢", "保存", "退出嚮導"],
      toast: "沒有更多了~"
    },
    tab: {
      leftText: "返回",
      rightText: "Log",
      dialog: ["提示", "點擊確認，結束嚮導", "確認", "取消"],
      stateArr: ["正常", "连接成功", "断开", "重连中", "心跳超时", "wifi断开", "wifi连接"]
    }
  })
});

/***/ }),

/***/ "./src/locales/phaseFourGetMessage.js":
/*!********************************************!*\
  !*** ./src/locales/phaseFourGetMessage.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ru: {
    "SystemTime": {
      "title": "Системное время",
      "template": "Формат даты,Дата системы,Системное время,Синхронизация времени,Выберите часовой пояс,Время,Б",
      "gps": "Нет,GNSS",
      "timeZone": "Восточное время,Западный часовой пояс",
      "toast": "Синхронизация завершена"
    },
    "Dst": {
      "title": "Летнее время",
      "template": "Включить,Время начала,Время окончания,Месяц,Текущая неделя,Неделя,Время(mm:ss)",
      "month": "Январь,Февраль,Март,Апрель,Май,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь",
      "number": "Первый, второй, третий, четвертый, последний",
      "week": "Воскресенье, понедельник, вторник, среда, четверг, пятница, суббота"
    }
  },
  en: {
    "SystemTime": {
      "title": "system time",
      "template": "date format,system date,system time,Time synchronization,Select Time Zone,time,divide",
      "gps": "no,GNSS",
      "timeZone": "Eastern Time Zone,West Time Zone",
      "toast": "Sync successful"
    },
    "Dst": {
      "title": "daylight saving time",
      "template": "Enable, Start Time, End Time, Month, Current Week, Week, Time (mm: ss)",
      "month": "January, February, March, April, May, June, July, August, September, October, November, December",
      "number": "First, second, third, fourth, and last",
      "week": "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
    }
  },
  zh: {
    "SystemTime": {
      "title": "系统时间",
      "template": "日期格式,系统日期,系统时间,时间同步,选择时区,时,分",
      "gps": "否,北斗",
      "timeZone": "东时区,西时区",
      "toast": "同步完成"
    },
    "Dst": {
      "title": "夏令时",
      "template": "启用,开始时间,结束时间,月份,当前周,星期,时间(mm:ss)",
      "month": "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月",
      "number": "第一个,第二个,第三个,第四个,最后一个",
      "week": "星期日,星期一,星期二,星期三,星期四,星期五,星期六"
    }
  },
  tw: {
    "SystemTime": {
      "title": "系統時間",
      "template": "日期格式，系統日期，系統時間，時間同步，選擇時區，時，分",
      "gps": "否,北斗",
      "timeZone": "東時區，西時區",
      "toast": "同步完成"
    },
    "Dst": {
      "title": "夏令時",
      "template": "啟用,開始時間,結束時間,月份,當前周,星期,時間(mm:ss)",
      "month": "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月",
      "number": "第一個,第二個,第三個,第四個,最後一個",
      "week": "星期日,星期一,星期二,星期三,星期四,星期五,星期六"
    }
  }
});

/***/ }),

/***/ "./src/locales/phaseThreeGetMessage.js":
/*!*********************************************!*\
  !*** ./src/locales/phaseThreeGetMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ru: {
    "AnalogTrigger": {
      "template": ["模拟速度"],
      "navTitle": "模拟触发",
      "adas": "ADAS,0,0x01*\u524D\u5411\u78B0\u649E\u62A5\u8B66!ADAS,0,0x02*\u8F66\u9053\u504F\u79BB\u62A5\u8B66!ADAS,0,0x03*\u8F66\u8DDD\u8FC7\u8FD1\u62A5\u8B66!ADAS,0,0x04*\u884C\u4EBA\u78B0\u649E\u62A5\u8B66!ADAS,0,0x05*\u9891\u7E41\u53D8\u9053\u62A5\u8B66!ADAS,0,0x07*\u969C\u788D\u7269\u62A5\u8B66!ADAS,0,0x10*\u9053\u8DEF\u6807\u5FD7\u8BC6\u522B\u4E8B\u4EF6!ADAS,0,0x11*adas\u6293\u62CD\u4E8B\u4EF6",
      "dsm1": "DSM,0,0x01*\u75B2\u52B3\u9A7E\u9A76\u62A5\u8B66\u54C8\u6B20!DSM,0,0xFE*\u95ED\u773C!DSM,0,0x02*\u63A5\u6253\u7535\u8BDD\u62A5\u8B66!DSM,0,0x03*\u62BD\u70DF\u62A5\u8B66!DSM,0,0x04*\u5206\u795E\u9A7E\u9A76\u62A5\u8B66!DSM,0,0x05*\u9A7E\u9A76\u5458\u5F02\u5E38\u62A5\u8B66!DSM,0,0x07*\u8BF7\u52FF\u906E\u6321\u6444\u50CF\u5934!DSM,0,0x10*dsm\u6293\u62CD\u4E8B\u4EF6!DSM,0,0x11*\u9A7E\u9A76\u5458\u53D8\u66F4!DSM,0,0x12*IC \u6293\u62CD\u4E8B\u4EF6!DSM,0,0x20*\u6293\u62CD\u4E8B\u4EF6!DSM,0,0x1F*\u7EA2\u5916\u963B\u65AD",
      "dsm2": "DSM,1,0x0A*\u672A\u7CFB\u5B89\u5168\u5E26!DSM,1,0x0C*\u53CC\u624B\u8131\u79BB\u65B9\u5411\u76D8!DSM,1,0x0D*\u73A9\u624B\u673A",
      "bsd1": "BSD,0,0x03*\u76F2\u533A\u62A5\u8B66",
      "bsd2": "BSD,1,0x04*\u76F2\u533A\u62A5\u8B66",
      "fail": "参数输入有误"
    },
    "AudioFrequency": {
      "navTitle": "音频设置",
      "template": "\u8F93\u5165\u589E\u76CA!\u8F93\u51FA\u589E\u76CA!TTS\u97F3\u91CF!\u58F0\u5149\u62A5\u8B66\u5668\u97F3\u91CF!\u9884\u89C8\u58F0\u97F3\u53E0\u52A0"
    },
    "BootPreview": {
      "navTitle": "开机预览",
      "template": "轮询间隔,延迟间隔,预览通道,显示模式",
      "model": "单画面*0,四画面1-4*1,六画面*,八画面*3,九画面*4,四画面5-8*5,垂直分割的两画面*6,水平分割的两画面*7,上一下二的三画面*8,垂直H的四画面*9,水平H的四画面*10,五画面*11,五画面(IPC)*12,川字形的三画面*13,上二下一的三画面*14,十二画面*15,三分割六画面*16",
      // "pollingAndDelayed": `否*0!5 s*1!10 s*2!20 s*3!30 s*4!1 min*5!2 min*6!5 min*7!`,
      "pollingAndDelayed": "no*0,5 s*1,10 s*2,20 s*3,30 s*4,1 min*5,2 min*6,5 min*7"
    },
    "PowerSettings": {
      "navTitle": "电源设置",
      "template": "当前电压,电源类型,关机电压,开机电压,关机电压,开机电压,当前电源类型",
      "powerType": "12V,24V,自动",
      "fail": "参数输入有误"
    },
    "PreviewOverlay": {
      "navTitle": "预览叠加",
      "title": "叠加",
      "template": "\u8F66\u724C\u53F7\u7801*1,\u901A\u9053\u540D*2,\u65E5\u671F\u65F6\u95F4*3,\u7ECF\u7EAC\u5EA6*4,GPS\u901F\u5EA6*5,\u8D85\u901F\u62A5\u8B66*6,IO\u6D88\u606F*7,\u78C1\u76D8\u72B6\u6001*8,\u75B2\u52B3\u9A7E\u9A76*9,\u89C6\u9891\u77ED\u8DEF*10,\u6E29\u5EA6*11,\u8FDE\u7EED\u9A7E\u9A76\u65F6\u95F4*12,\u884C\u9A76\u8BB0\u5F55\u901F\u5EA6*13,\u6B63\u53CD\u8F6C\u4F20\u611F\u5668*14,\u7AD9\u540D*15,"
    },
    "ShutDown": {
      "navTitle": "开关机",
      "template": "\u5EF6\u65F6\u5173\u673A,\u5EF6\u65F6\u5173\u673A,\u4E0D\u5173\u673A,\u5EF6\u65F6\u65F6\u957F,\u4F11\u7720,\u4F4D\u7F6E\u4E0A\u62A5\u95F4\u9694,\u5B9A\u65F6\u5F00\u5173\u673A,\u65E5\u671F,\u65F6\u95F4\u6BB5,\u4F7F\u80FD,\u5F00\u673A\u65F6\u95F4,\u5F00\u673A\u65F6\u957F,\u9009\u62E9\u65F6\u95F4,\u6BCF\u5929",
      "date": "周一,周二,周三,周四,周五,周六,周日"
    },
    "TextSend": {
      "sendMsg": "下发",
      "sendPlace": "请输入文本指令",
      "getMsg": "获取到",
      "confrim": "发送",
      "search": "设置",
      "navTitle": "文本下发"
    }
  },
  en: {
    "AnalogTrigger": {
      "template": ["simulation speed"],
      "navTitle": "analog trigger",
      "adas": "ADAS,0,0x01*Forward collision alarm!ADAS,0,0x02*lane departure warning!ADAS,0,0x03*Alarm for close proximity!ADAS,0,0x04*Pedestrian collision alarm!ADAS,0,0x05*Frequent lane change alarm!ADAS,0,0x07*Obstacle alarm!ADAS,0,0x10*Road sign recognition event!ADAS,0,0x11*Adas capture event",
      "dsm1": "DSM,0,0x01*Fatigue driving warning yawn!DSM,0,0xFE*close the eyes!DSM,0,0x02*Call the police on the phone!DSM,0,0x03*Smoking alarm!DSM,0,0x04*Distracted driving alarm!DSM,0,0x05*Driver abnormal alarm!DSM,0,0x07*Do not block the camera!DSM,0,0x10*DSM capture event!DSM,0,0x11*Driver change!DSM,0,0x12*IC Capture events!DSM,0,0x20*Capture events!DSM,0,0x1F*Infrared blocking",
      "dsm2": "DSM,1,0x0A*Not wearing a seat belt!DSM,1,0x0C*Hands off the steering wheel!DSM,1,0x0D*play with the smarthphone",
      "bsd1": "BSD,0,0x03*Blind zone alarm",
      "bsd2": "BSD,1,0x04*Blind zone alarm",
      "fail": "Parameter input error"
    },
    "AudioFrequency": {
      "navTitle": "audio setup",
      "template": "Input Gain!Output Gain!TTS volume!Audible and visual alarm volume!Preview sound overlay"
    },
    "BootPreview": {
      "navTitle": "Boot Preview",
      "template": "polling interval,delay interval,Preview Channel,display mode",
      "model": "Single screen*0,Four screens 1-4*1,Six screens*2,Eight screens*3,Nine screens*4,Four screens 5-8*5,Two vertically divided screens*6,Two horizontally divided screens*7,Three scenes from the previous two*8,Four screens of vertical H*9,Four screens of horizontal H*10,Five screens*11,Five screens(IPC)*12,Three screens in the Sichuan style*13,Three screens of top two and bottom one*14,Twelve screens*15,Three Divisions and Six Screens*16",
      "pollingAndDelayed": "no*0,5 s*1,10 s*2,20 s*3,30 s*4,1 min*5,2 min*6,5 min*7"
    },
    "PowerSettings": {
      "navTitle": "Power settings",
      "template": "Current Voltage,Power source,Shutdown voltage,power voltage,Shutdown voltage,power voltage,Current power supply type",
      "powerType": "12V,24V,automatic",
      "fail": "Parameter input error"
    },
    "PreviewOverlay": {
      "navTitle": "Preview Overlay",
      "title": "superposition",
      "template": "license plate*1,channel name*2,Date Time*3,latitude and longitude*4,GPS speed*5,OVERSPEED*6,IO Message*7,Disk Status*8,fatigue driving*9,Video short circuit*10,temperature*11,Continuous driving time*12,Driving Record Speed*13,Forward and reverse sensors*14,station name*15,"
    },
    "ShutDown": {
      "navTitle": "on/off",
      "template": "Delayed shutdown,Delayed shutdown,Do not shut down,Delay duration(HH:MM),hibernate,Location reporting interval(S),Timing on/off machine,date,time slot,enable,on time,Boot time,Timing,every day",
      "date": "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday"
    },
    "TextSend": {
      "sendMsg": "Send",
      "sendPlace": "Please enter text instructions",
      "getMsg": "Obtain",
      "confrim": "Send",
      "search": "setUp",
      "navTitle": "Text distribution"
    }
  },
  zh: {
    "AnalogTrigger": {
      "template": ["模拟速度"],
      "navTitle": "模拟触发",
      "adas": "ADAS,0,0x01*\u524D\u5411\u78B0\u649E\u62A5\u8B66!ADAS,0,0x02*\u8F66\u9053\u504F\u79BB\u62A5\u8B66!ADAS,0,0x03*\u8F66\u8DDD\u8FC7\u8FD1\u62A5\u8B66!ADAS,0,0x04*\u884C\u4EBA\u78B0\u649E\u62A5\u8B66!ADAS,0,0x05*\u9891\u7E41\u53D8\u9053\u62A5\u8B66!ADAS,0,0x07*\u969C\u788D\u7269\u62A5\u8B66!ADAS,0,0x10*\u9053\u8DEF\u6807\u5FD7\u8BC6\u522B\u4E8B\u4EF6!ADAS,0,0x11*adas\u6293\u62CD\u4E8B\u4EF6",
      "dsm1": "DSM,0,0x01*\u75B2\u52B3\u9A7E\u9A76\u62A5\u8B66\u54C8\u6B20!DSM,0,0xFE*\u95ED\u773C!DSM,0,0x02*\u63A5\u6253\u7535\u8BDD\u62A5\u8B66!DSM,0,0x03*\u62BD\u70DF\u62A5\u8B66!DSM,0,0x04*\u5206\u795E\u9A7E\u9A76\u62A5\u8B66!DSM,0,0x05*\u9A7E\u9A76\u5458\u5F02\u5E38\u62A5\u8B66!DSM,0,0x07*\u8BF7\u52FF\u906E\u6321\u6444\u50CF\u5934!DSM,0,0x10*dsm\u6293\u62CD\u4E8B\u4EF6!DSM,0,0x11*\u9A7E\u9A76\u5458\u53D8\u66F4!DSM,0,0x12*IC \u6293\u62CD\u4E8B\u4EF6!DSM,0,0x20*\u6293\u62CD\u4E8B\u4EF6!DSM,0,0x1F*\u7EA2\u5916\u963B\u65AD",
      "dsm2": "DSM,1,0x0A*\u672A\u7CFB\u5B89\u5168\u5E26!DSM,1,0x0C*\u53CC\u624B\u8131\u79BB\u65B9\u5411\u76D8!DSM,1,0x0D*\u73A9\u624B\u673A",
      "bsd1": "BSD,0,0x03*\u76F2\u533A\u62A5\u8B66",
      "bsd2": "BSD,1,0x04*\u76F2\u533A\u62A5\u8B66",
      "fail": "参数输入有误"
    },
    "AudioFrequency": {
      "navTitle": "音频设置",
      "template": "\u8F93\u5165\u589E\u76CA!\u8F93\u51FA\u589E\u76CA!TTS\u97F3\u91CF!\u58F0\u5149\u62A5\u8B66\u5668\u97F3\u91CF!\u9884\u89C8\u58F0\u97F3\u53E0\u52A0"
    },
    "BootPreview": {
      "navTitle": "开机预览",
      "template": "轮询间隔,延迟间隔,预览通道,显示模式",
      "model": "单画面*0,四画面1-4*1,六画面*,八画面*3,九画面*4,四画面5-8*5,垂直分割的两画面*6,水平分割的两画面*7,上一下二的三画面*8,垂直H的四画面*9,水平H的四画面*10,五画面*11,五画面(IPC)*12,川字形的三画面*13,上二下一的三画面*14,十二画面*15,三分割六画面*16",
      "pollingAndDelayed": "否*0,5 秒*1,10 秒*2,20 秒*3,30 秒*4,1 分钟*5,2 分钟*6,5 分钟*7"
    },
    "PowerSettings": {
      "navTitle": "电源设置",
      "template": "当前电压,电源类型,关机电压,开机电压,关机电压,开机电压,当前电源类型",
      "powerType": "12V,24V,自动",
      "fail": "参数输入有误"
    },
    "PreviewOverlay": {
      "navTitle": "预览叠加",
      "title": "叠加",
      "template": "\u8F66\u724C\u53F7\u7801*1,\u901A\u9053\u540D*2,\u65E5\u671F\u65F6\u95F4*3,\u7ECF\u7EAC\u5EA6*4,GPS\u901F\u5EA6*5,\u8D85\u901F\u62A5\u8B66*6,IO\u6D88\u606F*7,\u78C1\u76D8\u72B6\u6001*8,\u75B2\u52B3\u9A7E\u9A76*9,\u89C6\u9891\u77ED\u8DEF*10,\u6E29\u5EA6*11,\u8FDE\u7EED\u9A7E\u9A76\u65F6\u95F4*12,\u884C\u9A76\u8BB0\u5F55\u901F\u5EA6*13,\u6B63\u53CD\u8F6C\u4F20\u611F\u5668*14,\u7AD9\u540D*15,"
    },
    "ShutDown": {
      "navTitle": "开关机",
      "template": "\u5EF6\u65F6\u5173\u673A,\u5EF6\u65F6\u5173\u673A,\u4E0D\u5173\u673A,\u5EF6\u65F6\u65F6\u957F(\u65F6:\u5206),\u4F11\u7720,\u4F4D\u7F6E\u4E0A\u62A5\u95F4\u9694(\u79D2),\u5B9A\u65F6\u5F00\u5173\u673A(\u65F6:\u5206),\u65E5\u671F,\u65F6\u95F4\u6BB5,\u4F7F\u80FD,\u5F00\u673A\u65F6\u95F4,\u5F00\u673A\u65F6\u957F,\u9009\u62E9\u65F6\u95F4,\u6BCF\u5929",
      "date": "周一,周二,周三,周四,周五,周六,周日"
    },
    "TextSend": {
      "sendMsg": "下发",
      "sendPlace": "请输入文本指令",
      "getMsg": "获取到",
      "confrim": "发送",
      "search": "设置",
      "navTitle": "文本下发"
    }
  },
  tw: {
    "AnalogTrigger": {
      "template": ["模拟速度"],
      "navTitle": "模拟触发",
      "adas": "ADAS,0,0x01*\u524D\u5411\u78B0\u649E\u62A5\u8B66!ADAS,0,0x02*\u8F66\u9053\u504F\u79BB\u62A5\u8B66!ADAS,0,0x03*\u8F66\u8DDD\u8FC7\u8FD1\u62A5\u8B66!ADAS,0,0x04*\u884C\u4EBA\u78B0\u649E\u62A5\u8B66!ADAS,0,0x05*\u9891\u7E41\u53D8\u9053\u62A5\u8B66!ADAS,0,0x07*\u969C\u788D\u7269\u62A5\u8B66!ADAS,0,0x10*\u9053\u8DEF\u6807\u5FD7\u8BC6\u522B\u4E8B\u4EF6!ADAS,0,0x11*adas\u6293\u62CD\u4E8B\u4EF6",
      "dsm1": "DSM,0,0x01*\u75B2\u52B3\u9A7E\u9A76\u62A5\u8B66\u54C8\u6B20!DSM,0,0xFE*\u95ED\u773C!DSM,0,0x02*\u63A5\u6253\u7535\u8BDD\u62A5\u8B66!DSM,0,0x03*\u62BD\u70DF\u62A5\u8B66!DSM,0,0x04*\u5206\u795E\u9A7E\u9A76\u62A5\u8B66!DSM,0,0x05*\u9A7E\u9A76\u5458\u5F02\u5E38\u62A5\u8B66!DSM,0,0x07*\u8BF7\u52FF\u906E\u6321\u6444\u50CF\u5934!DSM,0,0x10*dsm\u6293\u62CD\u4E8B\u4EF6!DSM,0,0x11*\u9A7E\u9A76\u5458\u53D8\u66F4!DSM,0,0x12*IC \u6293\u62CD\u4E8B\u4EF6!DSM,0,0x20*\u6293\u62CD\u4E8B\u4EF6!DSM,0,0x1F*\u7EA2\u5916\u963B\u65AD",
      "dsm2": "DSM,1,0x0A*\u672A\u7CFB\u5B89\u5168\u5E26!DSM,1,0x0C*\u53CC\u624B\u8131\u79BB\u65B9\u5411\u76D8!DSM,1,0x0D*\u73A9\u624B\u673A",
      "bsd1": "BSD,0,0x03*\u76F2\u533A\u62A5\u8B66",
      "bsd2": "BSD,1,0x04*\u76F2\u533A\u62A5\u8B66"
    },
    "AudioFrequency": {
      "navTitle": "音频设置",
      "template": "\u8F93\u5165\u589E\u76CA!\u8F93\u51FA\u589E\u76CA!TTS\u97F3\u91CF!\u58F0\u5149\u62A5\u8B66\u5668\u97F3\u91CF!\u9884\u89C8\u58F0\u97F3\u53E0\u52A0"
    },
    "BootPreview": {
      "navTitle": "开机预览",
      "template": "轮询间隔,延迟间隔,预览通道,显示模式",
      "model": "\u5355\u753B\u9762*0!\u56DB\u753B\u97621-4*1!\u516D\u753B\u9762*2!\u516B\u753B\u9762*3!\u4E5D\u753B\u9762*4!\u56DB\u753B\u97625-8*5!\u5782\u76F4\u5206\u5272\u7684\u4E24\u753B\u9762*6!\u6C34\u5E73\u5206\u5272\u7684\u4E24\u753B\u9762*7!\u4E0A\u4E00\u4E0B\u4E8C\u7684\u4E09\u753B\u9762*8!\u5782\u76F4H\u7684\u56DB\u753B\u9762*9!\u6C34\u5E73H\u7684\u56DB\u753B\u9762*10!\u4E94\u753B\u9762*11!\u4E94\u753B\u9762(IPC)*12!\u5DDD\u5B57\u5F62\u7684\u4E09\u753B\u9762*13!\u4E0A\u4E8C\u4E0B\u4E00\u7684\u4E09\u753B\u9762*14!\u5341\u4E8C\u753B\u9762*15!\u4E09\u5206\u5272\u516D\u753B\u9762*16",
      "pollingAndDelayed": "\u5426*0!5 s*1!10 s*2!20 s*3!30 s*4!1 min*5!2 min*6!5 min*7!"
    },
    "PowerSettings": {
      "navTitle": "电源设置",
      "template": "当前电压,电源类型,关机电压,开机电压,关机电压,开机电压,当前电源类型",
      "powerType": "12V,24V,自动"
    },
    "PreviewOverlay": {
      "navTitle": "预览叠加",
      "title": "叠加",
      "template": "\u8F66\u724C\u53F7\u7801*1,\u901A\u9053\u540D*2,\u65E5\u671F\u65F6\u95F4*3,\u7ECF\u7EAC\u5EA6*4,GPS\u901F\u5EA6*5,\u8D85\u901F\u62A5\u8B66*6,IO\u6D88\u606F*7,\u78C1\u76D8\u72B6\u6001*8,\u75B2\u52B3\u9A7E\u9A76*9,\u89C6\u9891\u77ED\u8DEF*10,\u6E29\u5EA6*11,\u8FDE\u7EED\u9A7E\u9A76\u65F6\u95F4*12,\u8F66\u8F86\u8109\u51B2\u901F\u5EA6*13,\u6B63\u53CD\u8F6C\u4F20\u611F\u5668*14,\u7AD9\u540D*15,"
    },
    "ShutDown": {
      "navTitle": "开关机",
      "template": "\u5EF6\u65F6\u5173\u673A,\u5EF6\u65F6\u5173\u673A,\u4E0D\u5173\u673A,\u5EF6\u65F6\u65F6\u957F,\u4F11\u7720,\u4F4D\u7F6E\u4E0A\u62A5\u95F4\u9694(\u79D2),\u5B9A\u65F6\u5F00\u5173\u673A,\u65E5\u671F,\u65F6\u95F4\u6BB5,\u4F7F\u80FD,\u5F00\u673A\u65F6\u95F4,\u5F00\u673A\u65F6\u957F,\u9009\u62E9\u65F6\u95F4",
      "date": "周一,周二,周三,周四,周五,周六,周日"
    },
    "TextSend": {
      "sendMsg": "下发",
      "sendPlace": "请输入文本指令",
      "getMsg": "获取到",
      "confrim": "发送",
      "search": "设置",
      "navTitle": "文本下发"
    }
  }
});

/***/ }),

/***/ "./src/locales/phaseTwoGetMessage.js":
/*!*******************************************!*\
  !*** ./src/locales/phaseTwoGetMessage.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ru: {
    "ConfigConst": {
      "columnsCheckbits": "Нет четности, нечетная четность, четная четность",
      "columnImage": "Плохое, плохое, среднее, хорошее, очень хорошее, лучшее",
      "colimnBitrate": "Фиксированная кодовая скорость, переменная кодовая скорость",
      "columnCom": "\u041D\u0435\u0442, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430, PTZ, \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0442\u043E\u043F\u043B\u0438\u0432\u0430, TTS, AIS (\u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0440\u044B\u0431\u0430\u0446\u043A\u043E\u0439 \u043B\u043E\u0434\u043A\u043E\u0439 Shiba),\n            \u041A\u041E\u041C\u041F\u0410\u0421 (\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0440\u044B\u0431\u0430\u0446\u043A\u043E\u0439 \u043B\u043E\u0434\u043A\u0438 Shiba), \u0416\u041A-\u0434\u0438\u0441\u043F\u043B\u0435\u0439 (Hangda), \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434 (Hangda), \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u0430\u0440\u0442 RFID, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D Wanhang (Tongli, \u0434\u0430\u0442\u0447\u0438\u043A \u0443\u0440\u043E\u0432\u043D\u044F \u0442\u043E\u043F\u043B\u0438\u0432\u0430 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u0442\u0430 485, \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0439 \u043C\u0438\u0433\u0430\u044E\u0449\u0438\u0439 \u0441\u0432\u0435\u0442 (LED_M2),\n             \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u0442\u0430 \u043E\u0442 \u043E\u0434\u043D\u043E\u0433\u043E \u0434\u043E \u0442\u0440\u0435\u0445 (AU100), \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D Huahan, \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 GPS, \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0441\u0432\u044F\u0437\u0438, \u0434\u0430\u0442\u0447\u0438\u043A \u0443\u0433\u043B\u0430, \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u0448\u0438\u043D\u0430\u0445, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438 CNPC Ruifei, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 GPS,\n             \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0432\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u0442\u0430\u043A\u0441\u043E\u043C\u0435\u0442\u0440, \u043F\u043E\u0442\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0444\u043E\u043D\u0430\u0440\u044C Chuanji (\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 19200 \u0431\u043E\u0434), JD_LED (\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 19200 \u0431\u043E\u0434), \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434 Micro Vision (\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 9600 \u0431\u043E\u0434), Qingyan ADAS, Ruiwei ADAS, Henan Military ADAS,\n             Sichuan Changyun, \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0442\u043F\u0435\u0447\u0430\u0442\u043A\u043E\u0432 \u043F\u0430\u043B\u044C\u0446\u0435\u0432, \u0437\u0430\u0445\u0432\u0430\u0442 \u0441\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0431\u0438\u043B\u0435\u0442\u0430, Subiao ADAS, Yunan ADAS, \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u044B\u0439 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0430\u043C\u043E\u0441\u0432\u0430\u043B\u043E\u0432 \u0432 \u0428\u044D\u043D\u044C\u0447\u0436\u044D\u043D\u0435, \u0440\u0430\u0434\u0430\u0440 \u0434\u043B\u044F \u0441\u0430\u043C\u043E\u0441\u0432\u0430\u043B\u043E\u0432 \u0432 \u0428\u044D\u043D\u044C\u0447\u0436\u044D\u043D\u0435, \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434 Shuolong,\n             TRANSMIT2-\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043D\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, TRANSMIT3-\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043D\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440, \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F OpenProtocol, \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043F\u043B\u0430\u0442, \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u0430\u0440\u0442 CRRC, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439, \u0442\u0435\u0441\u0442 LCD \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430, \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 Shunhe,\n             \u0421\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u0430\u0440\u0442 Xiongdi, \u043F\u0435\u0447\u0430\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u0442 \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432 \u0444\u0430\u0439\u043B, \u0437\u0432\u0443\u043A\u043E\u0432\u0430\u044F \u0438 \u0441\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F BSD, \u0437\u0432\u0443\u043A\u043E\u0432\u0430\u044F \u0438 \u0441\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F AAL100, \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0447\u0442\u0435\u043D\u0438\u044F \u043A\u0430\u0440\u0442 ACR100, \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0439 \u044D\u043A\u0440\u0430\u043D \u0434\u0438\u0441\u043F\u043B\u0435\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 Shihang, \u0434\u0430\u0442\u0447\u0438\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438,\n             \u0417\u0432\u0443\u043A\u043E\u0432\u0430\u044F \u0438 \u0441\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F Guangzhou Zhengan, \u0428\u044D\u043D\u044C\u0447\u0436\u044D\u043D\u044C\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0445 \u043A\u0430\u0440\u0442, Shanghai Ersheng Electric, \u041C\u043D\u043E\u0433\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0432\u0443\u043A\u043E\u0432\u0430\u044F \u0438 \u0441\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F, \u0420\u0430\u0434\u0430\u0440 Shihang, Changchun Junda, \u0421\u0447\u0435\u0442\u0447\u0438\u043A \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u043E\u043F\u043E\u0442\u043E\u043A\u0430 Changchun Junda, Hainan Zhixinheyi,\n             \u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F SEG, \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u0430\u0440\u0442 Yicheng, \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u0430\u0440\u0442 \u0441 \u043C\u0430\u0433\u043D\u0438\u0442\u043D\u043E\u0439 \u043F\u043E\u043B\u043E\u0441\u043E\u0439 WIC, GBT_19056, \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F Tiandi Honghua, \u0434\u0430\u0442\u0447\u0438\u043A \u0443\u0440\u043E\u0432\u043D\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438 \u043F\u043E \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 Qingdao Yuxin F3, \u0440\u0430\u0434\u0430\u0440 Xuyi \u0432\u043E \u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u041C\u043E\u043D\u0433\u043E\u043B\u0438\u0438, \u0434\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B Hubei Dongxun\n             ",
      "AlarmInfo": "\u0411\u043B\u0438\u0436\u043D\u0438\u0439 \u0441\u0432\u0435\u0442, \u0434\u0430\u043B\u044C\u043D\u0438\u0439 \u0441\u0432\u0435\u0442, \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043D\u0430\u043F\u0440\u0430\u0432\u043E, \u043F\u043E\u0432\u043E\u0440\u043E\u0442 \u043D\u0430\u043B\u0435\u0432\u043E, \u0437\u0430\u0434\u043D\u0438\u0439 \u0445\u043E\u0434, \u0442\u043E\u0440\u043C\u043E\u0437, \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0442\u0443\u043C\u0430\u043D\u043D\u044B\u0435 \u0444\u0430\u0440\u044B, \u043A\u0440\u044B\u043B\u044C\u0446\u043E, \u0437\u0432\u0443\u043A\u043E\u0432\u043E\u0439 \u0441\u0438\u0433\u043D\u0430\u043B, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u0430, \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0438\u0433\u043D\u0430\u043B, \u0440\u0430\u0431\u043E\u0442\u0430 \u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044F,\n             ABS \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0441\u0446\u0435\u043F\u043B\u0435\u043D\u0438\u044F, \u043F\u0435\u0440\u0435\u0434\u043D\u044F\u044F \u0434\u0432\u0435\u0440\u044C, \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u0434\u0432\u0435\u0440\u044C, \u0437\u0430\u0434\u043D\u044F\u044F \u0434\u0432\u0435\u0440\u044C, \u0434\u0432\u0435\u0440\u044C \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F, \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C,\n             \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430, \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u0438\u0442 1, \u0437\u0430\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u0438\u0442 2, \u0441\u0438\u0433\u043D\u0430\u043B \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u043A\u0440\u044B\u0448\u0438, \u0441\u0438\u0433\u043D\u0430\u043B \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u043F\u043E\u0434\u044A\u0435\u043C\u0430"
    },
    "AlarmConfigComponents": {
      "titleColumns": ["Модель", "Скорость передачи", "Биты данных", "Стоповые биты", "Контрольная цифра", "Тип уровня топлива"],
      "showPickerFn": "Модель можно выбрать только по уровню топлива",
      "onConfirm": "Уровень топлива",
      "defultVal": "Пожалуйста выберите"
    },
    "AComConfigComponents": {
      "titleColumns": ["Модель", "Скорость передачи", "Биты данных", "Стоповые биты", "Контрольная цифра", "Тип уровня топлива"],
      "defultVal": "Пожалуйста выберите"
    },
    "AlarmPicker": {
      "template": ['Подтвердить', 'Отменить']
    },
    "AlarmConfig": {
      "title": "Серийный номер IO ",
      "columns": "Ближний свет, дальний свет, поворот направо, поворот налево, задний ход, тормоз, противотуманные фары, освещение на крыльце, звуковой сигнал, состояние кондиционера, нейтральный сигнал, работа ретардера, работа ABS, работа обогревателя, состояние сцепления, передняя дверь, средняя дверь, задняя дверь, дверь водителя, нестандартная дверь, груз, зарезервированное положение 1, зарезервированное положение 2, сигнал датчика крыши, сигнал датчика подъема",
      "navTitle": "Верхняя крышка",
      "filtersCOlumnsTitle": "Функция не настроена"
    },
    "AlarmOutput": {
      "content": ["Вывод", "Удаленный", "Вручную", "Связь", "Переключатель"],
      "navTitle": "IO выход"
    },
    "CodeStream": {
      "template": ["Общий размер хранилища", "Канал", "Разрешение", "Частота кадров", "Аудио", "Стандарт кодирования", "Качество", "Размер хранилища"],
      "audioType": ['Включен', 'Отключен'],
      "navTitle": "Основной/Дополнительный поток",
      "androidStatus": ['Основной поток', 'Дополнительный поток']
    },
    "CodeStreamDetails": {
      "template": ["Наложение звука", "Разрешение", "Частота кадров", "Тип скорости передачи", "Скорость передачи", "Качество изображения", "Стандарт кодирования", "Размер хранилища"],
      "navTitle": "Основной/Дополнительный поток",
      "androidStatus": ["Канал основного потока", "Канал дополнительного потока"]
    },
    "ComInfo": {
      "navTitle": "Серийный номер ",
      "failMsg": 'Текущее устройство не поддерживает звуковую и световую сигнализацию.',
      "callJSResult": ['Звуковой сигнал', 'Текущее устройство не поддерживает звуковую и световую сигнализацию.', 'Текущее устройство не поддерживает звуковую и световую сигнализацию.', 'Картридер', 'Текущее устройство не поддерживает кард-ридер', 'Текущее устройство не поддерживает картридер']
    },
    "ComSettings": {
      "template": ["Число", "Функция", "Скорость передачи", "Биты данных", "Стоповые биты", "Проверочные биты"],
      "navTitle": "Настройки последовательного порта",
      "filterABtn": ["Нет четности", "Нечетная четность", "Четная четность"]
    },
    "LoadSettings": {
      "navTitle": "Нагрузка",
      "template": ["Модель", "Напряжение тока", "Вес тока", "Номер калибровки", "Удалить", "Добавить", "Серийный номер", "величина напряжения", "Калиброванный вес"],
      "model": "последовательно",
      "templatePlaceholder": ["Пожалуйста, введите", "Пожалуйста, введите", "Пожалуйста, введите количество калибровки", "Пожалуйста, введите", "Пожалуйста входите"],
      "fail": ["До 15 групп"]
    },
    "PTZInfo": {
      "template": ["Тип протокола", "Адрес декодера", "Введите адрес декодера", "Управление потоком"],
      "navTitle": "PTZ-канал ",
      "statusValue": "Нет",
      "columnShowItem": "PTZ",
      "callJSResult": "PTZ"
    },
    "PTZSettings": {
      "template": ["Канал", "Скорость передачи", "Биты данных", "Стоповые биты", "Проверочные биты", "Тип протокола", "Адрес декодера", "Кусочек"],
      "navTitle": "PTZ"
    },
    "ReversingCamera": {
      "template": ["Включить", "Видеоканал", "Триггерный переключатель", "Видео выход", "Время ожидания", "Введите время ожидания", "Область настройки", "Подтвердить отмену", "Отменить"],
      "navTitle": "Обратное изображение",
      "columnChannel": "Канал",
      "columnVideoOutput": ["Не часто", "Часто"],
      "columnTime": "30 секунд, 1 минута, 2 минуты, 5 минут"
    },
    "SessionSettings": {
      "template": ["Циклическое покрытие", "Основной поток", "Дополнительный поток", "Основной поток", "Дополнительный поток"],
      "navTitle": "Настройки хранения"
    },
    "TemperatureSensingState": {
      "template": ["Температура", "Статус", "Имя", "Температура"],
      "navTitle": "Тепло",
      "filterStatus": "Отключен, Отсутствует, Нормальный",
      "fail": ["Устройство не имеет настраиваемой функции датчика температуры"]
    },
    "TemperatureSensingStateDetails": {
      "template": ["Включить", "ID", "Имя", "Функция сигнализации верхнего предела температуры", "Верхний предел температуры", "Функция сигнализации нижнего предела температуры", "Нижний предел температуры", "Зуммер", "Частота отчета", "Выбор IO"],
      "templatePlaceholder": ["ID", "Пожалуйста, введите имя", "Пожалуйста, введите значение верхнего предела", "Пожалуйста, введите нижнее предельное значение", "Пожалуйста, введите частоту отчетов"],
      "navTitle": "Датчик температуры ",
      "fail": ["Устройство не имеет настраиваемых температурных датчиков."]
    },
    "ToilLevel": {
      "template": ["Тип", "Общее количество топлива", "Текущее количество топлива", "Текущий уровень топлива", "Максимальное значение данных датчика", "Порог тревоги", "Номер калибровки", "Удалить", "Добавить", "Номер", "Приращение калибровки", "Уровень калибровочного топлива"],
      "templatePlaceholder": ["Пожалуйста, введите", "Пожалуйста, введите номер калибровки", "Пожалуйста, введите", "Пожалуйста входите"],
      "navTitle": "Уровень топлива",
      "addCalibrationInfoFn": "До 20 групп" // -------------

    },
    "Oil3011": {
      "template": ["Серийный номер датчика ", "Серийный номер", "Тип", "Текущий уровень нефти", "Лозунги", "Общий объем", "Текущий объем нефти", "Топливный бак"],
      "navTitle": "Уровень масла"
    },
    "OilBefore3011": {
      "template": ["Серийный номер ", "Топливный бак", "Нет", "Уровень масла"],
      "navTitle": "Топливный бак "
    },
    "Tyrepressure": {
      "template": ["Номер датчика", "Имя датчика", "Текущее давление в шинах", "Текущая температура шин"],
      "navTitle": "Давление в шинах"
    },
    "TyrepressureDerails": {
      "template": ["Включить", "Имя датчика", "Минимальное давление в шинах", "Максимальное давление в шинах", "Минимальная температура в шинах", "Максимальная температура в шинах", "Наложение предварительного просмотра", "Зуммер", "Тревожный выход"],
      "templatePlaceholder": ["Введите имя", "Введите давление в шинах", "Введите давление в шинах", "Введите температуру шин", "Введите температуру шин"],
      "navTitle": "Датчик давления в шинах"
    },
    "AlarmInfoTwo": {
      "selectChannel": ["Поднять", "Верхняя крышка"],
      "toast": ["Не найдено,Канал IO Выбрать текущую функцию, Автоматическое согласование с каналом ", "Каналы "],
      "channelInfo": "Канал "
    },
    icCard: {
      label: ["номер водительского удостоверения", "срок действия водительского удостоверения", "номер квалификационного удостоверения", "срок действия удостоверения о рабочем квалификационном удостоверении", "имя водителя", "код водителя", "компания", "пол", "звездный рейтинг"],
      placeholder: ["Введите номер водительского удостоверения", "Введите срок действия водительского удостоверения", "Введите номер водительского удостоверения", "Введите срок действия водительского удостоверения", "Пожалуйста, введите имя водителя", "Пожалуйста укажите компанию", "Пожалуйста введите звездный рейтинг"],
      columns: "Муж.,Жен.",
      navTitle: "IC-карта",
      dateShowTitle: "Выберите год месяц день",
      star: "Звезда",
      icCardTitle: "Введите идентификационную карту"
    }
  },
  en: {
    "ConfigConst": {
      "columnsCheckbits": "None,Odd Parity,Even Parity",
      "columnImage": "Poor,Fair,General,Good,Great,Excellent",
      "colimnBitrate": "CBR,VBR",
      "columnCom": "None,Pass-through,Camera Pan,Fuel,TTS,AIS,\n            COMPASS,LCD ,LED,RFID CR,WH_Advertising Screen,LED_M2,\n            AU100,HH_LED_Advertising Screen,GPS,TL_protocol,Angle,PSI,ZY_Fuel,GPS Pass-through,\n            BenAN,Taximeter,Chuanjiche,JD_LED,WSC_LED,QY_ADAS,RuiWei_ADAS,HNJG_ADAS,\n            Changyun,FingerPrint,Student_card_snap,Subiao_ADAS,Yunan_ADAS,SZ_muck_truck_LED,SZ_muck_truck_radar,Overspeed Alarm,Shuolong_LED,\n            TRANSMIT2-\u900F\u4F20\u5230\u6307\u5B9A\u670D\u52A1\u5668,TRANSMIT3-\u900F\u4F20\u5230\u6307\u5B9A\u670D\u52A1\u5668,OpenProtocol_\u63A7\u5236\u900F\u4F20,Production_test_boards,Zhongche_CR,Turuan,Bubiaoji_LCD_Test,Shunhe,\n            Xiongdi_CR,\u4E32\u53E3\u6253\u5370\u4FDD\u5B58\u81F3\u6587\u4EF6,BSD_Audible,AAL100_Audible,ACR100_CR,Shi_Hang,Load,\n            GZ_ZhengAn_Audible,SZ_AE_CR,ALson,Multi_in_one_Audible,ShiHang_radar,JunDa,JunDa_counter,\u6D77\u5357\u79F0\u82AF\u5408\u610F,\n            \u8D5B\u683C_Alcohol detection,\u4EBF\u7A0BCR,WIC_magnetic stripe card_CR,GBT_19056,\u5929\u5730\u5B8F\u534E_Alcohol detection,\u9752\u5C9B\u5B87\u65B0_Fuel,\u5185\u8499\u65ED\u4E00_radar,\u6E56\u5317\u4E1C\u8BAF_Temperature sensor\n            ",
      "AlarmInfo": "passing beam,high beam,turn right,turn left,back car,braking,fog light,corridor light,\n\t\t\tloudspeaker,Air conditioning status,neutral signal,retarder operation,ABS,\n\t\t\tHeater,Cluth,front door, middle door, rear door, driver's door, custom door, \n\t\t\tload, reserved position 1, reserved position 2, top cap sensor signal, lift sensor signal"
    },
    "AlarmConfigComponents": {
      "titleColumns": ["Model", "Baud Rate", "Word Size", "Stop Bits", "Parity Bit", "Fuel_Type"],
      "showPickerFn": "Can only be checked if the type is Fuel.",
      "onConfirm": "Fuel",
      "defultVal": "Please select"
    },
    "AComConfigComponents": {
      "titleColumns": ["Model", "Baud Rate", "Word Size", "Stop Bits", "Parity Bit", "Fuel_Type"],
      "defultVal": "Please select"
    },
    "AlarmPicker": {
      "template": ['Confirm', 'Cancel']
    },
    "AlarmConfig": {
      "title": "IO ID ",
      "columns": "passing beam,high beam,turn right,turn left,back car,braking,fog light,\n\t\t\tcorridor light,loudspeaker,Air conditioning status,neutral signal,retarder operation,ABS,\n\t\t\tHeater,Cluth,front door, middle door, rear door, driver's door, custom door,\n\t\t\tload, reserved position 1, reserved position 2, top cap sensor signal, lift sensor signal",
      "navTitle": "top cap",
      "filtersCOlumnsTitle": "Feature is not configured"
    },
    "AlarmOutput": {
      "content": ["Output", "Remote", "Manual", "Linkaged", "switch"],
      "navTitle": "IO Output"
    },
    "CodeStream": {
      "template": ['Total Storage Size', 'Channel ', 'Resolution', 'Frame Rate', 'Audio', 'Coding Standard', 'Picture Quality', 'Storage Size'],
      "audioType": ['On', 'Off'],
      "navTitle": "Main/Sub_stream",
      "androidStatus": ['Main_stream', 'Sub_stream']
    },
    "CodeStreamDetails": {
      "template": ['Audio', 'Resolution', 'Frame Rate', 'Bit Rate Type', 'Bit Rate', 'Picture Quality', 'Coding Standard', 'Storage Size'],
      "navTitle": "Main/Sub_stream",
      "androidStatus": ['Main_stream Channel', 'Sub_stream Channel']
    },
    "ComInfo": {
      "navTitle": "Serial Port ID ",
      "failMsg": "The current device doesn't support audible.",
      "callJSResult": ['Audible', "The current device doesn't support audible", "The current device doesn't support audible", 'Card Reader', "The current device doesn't support Card Reader", "The current device doesn't support Card Reader"]
    },
    "ComSettings": {
      "template": ["ID ", "Function", "Baud Rate", "Word Size", "Stop Bits", "Parity Bit"],
      "navTitle": "Serial Port Setting",
      "filterABtn": ['None', 'Odd Parity', 'Even Parity']
    },
    "LoadSettings": {
      "navTitle": "LoadSettings",
      "template": ["Model ", "Current voltage", "Current weight", "Quantity of Calibration", "Delete", "Add", 'ID', 'Current voltage', 'Calibrated weight'],
      "model": "COM",
      "templatePlaceholder": ["Please enter", "Please enter", "Please enter the Quantity of Calibration", "Please enter", "Please enter"],
      "fail": ["Up to 15 groups"]
    },
    "PTZInfo": {
      "template": ["Protocol type ", "Decoder address", "Please enter the decoder address", "Flow control"],
      "navTitle": "Camera PanChannel ",
      "columnShowItem": "Camera Pan",
      "statusValue": "NO",
      "callJSResult": "Camera Pan"
    },
    "PTZSettings": {
      "template": ["Channel ", "Baud Rate", "Word Size", "Stop Bits", "Parity Bit", "Protocol type", "Decoder address", " Bit"],
      "navTitle": "Camera Pan"
    },
    "ReversingCamera": {
      "template": ["On", "Video Channel", "Trigger Switch", "Video Output", "Waiting time", "Please enter the waiting time", "Setting", "Confirm", "Cancel"],
      "navTitle": "RVC",
      "columnChannel": "Channel",
      "columnVideoOutput": ["Empty", "Exist"],
      "columnTime": "30 s,1 min,2 min,5 min"
    },
    "SessionSettings": {
      "template": ["Loop Coverage", "Main_stream", "Sub_stream", "Main_stream", "Sub_stream"],
      "navTitle": "Storage Settings"
    },
    "TemperatureSensingState": {
      "template": ["Temperature Sensing", "Status", "Name", "Temperature"],
      "navTitle": "Temperature Sensing",
      "filterStatus": "Off,Lose,Normal",
      "fail": ["The device does not have customized temperature sensing function"]
    },
    "TemperatureSensingStateDetails": {
      "template": ["On", "ID", "Name", "Temperature upper limit alarm Function", "Upper limit", "Temperature Lower limit alarm Function", "Lower limit", "Buzzer", "Reporting frequency", "Select IO"],
      "templatePlaceholder": ["ID ", "Please enter Name", "Please enter the upper limit", "Please enter the lower value", "Please enter the reporting frequency"],
      "navTitle": "Temperature sensor ",
      "fail": ["The device has no customized temperature sensing function"]
    },
    "ToilLevel": {
      "template": ["Tpye", "Total burn-off", "Current fuel volume", "Current Fuel", "Sensor data maximum", "Alarm threshold", "Quantity of Calibration", "Delete", "Add", "ID", "Calibrated increment", "Calibrated Fuel"],
      "templatePlaceholder": ["Please enter", "Please enterQuantity of Calibration", "Please enter", "Please enter"],
      "navTitle": "Fuel",
      "addCalibrationInfoFn": "Up to 20 groups"
    },
    "Oil3011": {
      "template": ["Sensor serial number ", "Serial port number", "type", "Current oil level", "Substring slogan", "Total capacity", "Current oil volume", "tank"],
      "navTitle": "oil"
    },
    "OilBefore3011": {
      "template": ["Serial port number ", "tank", "Not", "oil level"],
      "navTitle": "tank "
    },
    "Tyrepressure": {
      "template": ["sensorID", "sensorName", "CurrentPSI", "Current tire temperature"],
      "navTitle": "PSI"
    },
    "TyrepressureDerails": {
      "template": ["On", "SensorName", "The lowest PSI", "The highest PSI", "The lowest tire temperature", "The highest tire temperature", "Preview Overlay", "Buzzer", "Alarm Output"],
      "templatePlaceholder": ["Please enterName", "Please enterPSI", "Please enterPSI", "Please entertire temperature", "Please entertire temperature"],
      "navTitle": "PSIsensor"
    },
    "AlarmInfoTwo": {
      "selectChannel": ["lift", "top cap"],
      "toast": ["Can't detect! The IO Channel is selecting current function and automatically matching to Channel ", "Channel "],
      "channelInfo": "Channel "
    },
    icCard: {
      label: [" Driving License Number ", "Driving License validity period ", " Professional Qualification Certificate Number ", "Professional Qualification Certificate Validity period ", "Driver's name ", " Driver's code ", " Company ", " gender ", " star rating "],
      placeholder: ["Please enter the driving license number ", " Please enter the validity period of the driving license ", "Please enter the employment Qualification Certificate number ", " Please enter the validity period of the Employment Qualification Certificate ", "Please enter driver's name", "Please enter company", "Please enter star rating."],
      columns: "Men,women",
      navTitle: "IC card",
      dateShowTitle: " Select Year Month Day",
      star: "Start",
      icCardTitle: "Please enter the IC card"
    }
  },
  zh: {
    "ConfigConst": {
      "columnsCheckbits": "无校验,奇校验,偶校验",
      "columnImage": "很差,较差,一般,好,很好,最好",
      "colimnBitrate": "定码率,变码率",
      "columnCom": "\u65E0,\u900F\u4F20,\u4E91\u53F0,\u6CB9\u4F4D,TTS,AIS(\u89C6\u9738\u6E14\u8239\u5B9A\u5236),COMPASS(\u89C6\u9738\u6E14\u8239\u5B9A\u5236),LCD (\u822A\u5927),LED(\u822A\u5927),RFID\u5237\u5361\u5668,\u4E07\u822A\u5E7F\u544A\u5C4F\uFF08\u901A\u7ACB,485\u4E32\u53E3\u534F\u8BAE\u7684\u6CB9\u4F4D\u4F20\u611F\u5668,LED\u95EA\u70C1\u706F(LED_M2),\u4E00\u62D6\u4E09\u4E32\u53E3\u529F\u80FD(AU100),\u534E\u7FF0LED\u5E7F\u544A\u5C4F,\u5916\u63A5GPS\u6570\u636E,\u901A\u7ACB\u6807\u51C6\u901A\u4FE1\u534F\u8BAE,\u89D2\u5EA6\u4F20\u611F\u5668,\u80CE\u538B,\u4E2D\u6CB9\u745E\u98DE\u6307\u5B9A\u6DB2\u4F4D\u4EEA,GPS\u6570\u636E\u900F\u4F20,\u672C\u5B89\u884C\u8F66\u8BB0\u5F55\u4EEA,\u8BA1\u4EF7\u5668,\u5DDD\u57FA\u8F66\u9876\u706F(\u6CE2\u7279\u738719200),JD_LED(\u6CE2\u7279\u738719200),\u5FAE\u89C6\u521BLED(\u6CE2\u7279\u73879600),\u6E05\u7814ADAS,\u745E\u4E3AADAS,\u6CB3\u5357\u519B\u5DE5ADAS,\u56DB\u5DDD\u7545\u4E91,\u6307\u7EB9\u8BC6\u522B,\u5B66\u751F\u5361\u6293\u62CD,\u82CF\u6807ADAS,\u4E91\u5B89ADAS,\u6DF1\u5733\u6E23\u571F\u8F66 LED,\u6DF1\u5733\u6E23\u571F\u8F66\u96F7\u8FBE,\u8D85\u901F\u62A5\u8B66\u5668,\u7855\u9F99LED,TRANSMIT2-\u900F\u4F20\u5230\u6307\u5B9A\u670D\u52A1\u5668,TRANSMIT3-\u900F\u4F20\u5230\u6307\u5B9A\u670D\u52A1\u5668,OpenProtocol \u63A7\u5236\u900F\u4F20,\u4EA7\u6D4B\u5C0F\u677F\u4E13\u7528,\u4E2D\u8F66\u5237\u5361\u5668,\u56FE\u8F6F\u8BBE\u5907,\u90E8\u6807\u673ALCD\u6D4B\u8BD5,\u987A\u79BE\u8BBE\u5907,\u96C4\u5E1D\u8BFB\u5361\u5668,\u4E32\u53E3\u6253\u5370\u4FDD\u5B58\u81F3\u6587\u4EF6,BSD\u58F0\u5149\u62A5\u8B66\u5668,AAL100 \u58F0\u5149\u62A5\u8B66\u5668,ACR100 \u5237\u5361\u5668,\u52BF\u822A\u56DB\u65B9\u4F4D\u5BA2\u6237\u663E\u793A\u5C4F,\u8F7D\u91CD\u4F20\u611F\u5668,\u5E7F\u5DDE\u6B63\u5B89\u58F0\u5149\u62A5\u8B66\u5668,\u6DF1\u5733\u6C7D\u8F66\u7535\u5B50\u5237\u5361\u5668,\u4E0A\u6D77\u57C3\u800C\u751F\u7535\u6C14,\u591A\u5408\u4E00\u58F0\u5149\u62A5\u8B66\u5668,\u52BF\u822A\u96F7\u8FBE,\u957F\u6625\u9A8F\u8FBE,\u957F\u6625\u9A8F\u8FBE\u5BA2\u6D41\u8BA1\u6570\u5668,\u6D77\u5357\u79F0\u82AF\u5408\u610F,\u8D5B\u683C\u9152\u7CBE\u68C0\u6D4B,\u4EBF\u7A0B\u8BFB\u5361\u5668,WIC\u78C1\u6761\u5361\u8BFB\u5361\u5668,GBT_19056,\u5929\u5730\u5B8F\u534E\u9152\u7CBE\u68C0\u6D4B\u4EEA,\u9752\u5C9B\u5B87\u65B0F3\u534F\u8BAE\u6DB2\u4F4D\u4F20\u611F\u5668,\u5185\u8499\u65ED\u4E00\u96F7\u8FBE,\u6E56\u5317\u4E1C\u8BAF\u6E29\u5EA6\u4F20\u611F\u5668\n            ",
      "AlarmInfo": "\u8FD1\u5149,\u8FDC\u5149,\u53F3\u8F6C,\u5DE6\u8F6C,\u5012\u8F66,\u5236\u52A8,\u96FE\u706F,\u793A\u5ECA\u706F,\u5587\u53ED,\u7A7A\u8C03\u72B6\u6001,\u7A7A\u6321\u4FE1\u53F7,\u7F13\u901F\u5668\u5DE5\u4F5C,\n            ABS \u5DE5\u4F5C,\u52A0\u70ED\u5668\u5DE5\u4F5C,\u79BB\u5408\u72B6\u6001,\u524D\u95E8,\u4E2D\u95E8,\u540E\u95E8,\u9A7E\u9A76\u5E2D\u95E8,\u81EA\u5B9A\u4E49\u95E8,\n            \u8F7D\u91CD,\u4FDD\u7559\u4F4D1,\u4FDD\u7559\u4F4D2,\u9876\u76D6\u4F20\u611F\u5668\u4FE1\u53F7,\u4E3E\u5347\u4F20\u611F\u5668\u4FE1\u53F7"
    },
    "AlarmConfigComponents": {
      "titleColumns": ["型号", "波特率", "数据位", "停止位", "校验位", "油位类型"],
      "showPickerFn": "型号为油位才可勾选",
      "onConfirm": "油位",
      "defultVal": "请选择"
    },
    "AComConfigComponents": {
      "titleColumns": ["型号", "波特率", "数据位", "停止位", "校验位", "油位类型"],
      "defultVal": "请选择"
    },
    "AlarmPicker": {
      "template": ['确认', '取消']
    },
    "AlarmConfig": {
      "title": "IO序号 ",
      "columns": "近光,远光,右转,左转,倒车,制动,雾灯,示廊灯,喇叭,空调状态,空挡信号,缓速器工作,ABS 工作,加热器工作,离合状态,前门,中门,后门,驾驶席门,自定义门,载重,保留位1,保留位2,顶盖传感器信号,举升传感器信号",
      "navTitle": "顶盖",
      "filtersCOlumnsTitle": "未配置功能"
    },
    "AlarmOutput": {
      "content": ["输出", "远程", "手动", "联动", "开关"],
      "navTitle": "IO 输出"
    },
    "CodeStream": {
      "template": ['总计存储大小', '通道 ', '分辨率', '帧率', '音频', '编码标准', '画质', '存储大小'],
      "audioType": ['启用', '禁用'],
      "navTitle": "主/子码流",
      "androidStatus": ['主码流', '子码流']
    },
    "CodeStreamDetails": {
      "template": ['音频叠加', '分辨率', '帧率', '位率类型', '位率', '画质', '编码标准', '存储大小'],
      "navTitle": "主/子码流",
      "androidStatus": ['主码流 通道', '子码流 通道']
    },
    "ComInfo": {
      "navTitle": "串口序号 ",
      "failMsg": '当前设备不支持声光报警器',
      "callJSResult": ['声光报警', '当前设备不支持声光报警器', '当前设备不支持声光报警器', '刷卡器', '当前设备不支持刷卡器', '当前设备不支持刷卡器']
    },
    "ComSettings": {
      "template": ["序号 ", "功能", "波特率", "数据位", "停止位", "校验位"],
      "navTitle": "串口设置",
      "filterABtn": ['无校验', '奇校验', '偶校验']
    },
    "LoadSettings": {
      "navTitle": "载重",
      "template": ["型号 ", "当前电压值", "当前重量", "标定数目", "删除", "添加", '序号', '电压值', '标定重量'],
      "model": "串口",
      "templatePlaceholder": ["请输入", "请输入", "请输入标定数目", "请输入", "请输入"],
      "fail": ["最多15组"]
    },
    "PTZInfo": {
      "template": ["协议类型 ", "解码器地址", "请输入解码器地址", "流控"],
      "navTitle": "云台通道 ",
      "columnShowItem": "云台",
      "statusValue": "无",
      "callJSResult": "云台"
    },
    "PTZSettings": {
      "template": ["通道 ", "波特率", "数据位", "停止位", "校验位", "协议类型", "解码器地址", " 位"],
      "navTitle": "云台"
    },
    "ReversingCamera": {
      "template": ["启用", "视频通道", "触发开关", "视频输出", "等待时长", "请输入等待时长", "设置区域", "确认", "取消"],
      "navTitle": "倒车影像",
      "columnChannel": "通道",
      "columnVideoOutput": ["常无", "常有"],
      "columnTime": "30 秒,1 分钟,2 分钟,5 分钟"
    },
    "SessionSettings": {
      "template": ["循环覆盖", "主码流", "子码流", "主码流", "子码流"],
      "navTitle": "存储设置"
    },
    "TemperatureSensingState": {
      "template": ["温感", "状态", "名称", "温度"],
      "navTitle": "温感",
      "filterStatus": "禁用,丢失,正常",
      "fail": ["该设备未定制温感功能"]
    },
    "TemperatureSensingStateDetails": {
      "template": ["启用", "ID", "名称", "温度上限报警功能", "温度上限", "温度下限报警功能", "温度下限", "蜂鸣器", "上报频率", "选择IO"],
      "templatePlaceholder": ["ID ", "请输入名称", "请输入上限值", "请输入下限值", "请输入上报频率"],
      "navTitle": "温度传感器 ",
      "fail": ["该设备没有定制的温度传感功能"]
    },
    "ToilLevel": {
      "template": ["类型", "总油量", "当前油量", "当前油位", "传感器数据最大值", "报警阀值", "标定数目", "删除", "添加", "序号", "标定增量", "标定油位"],
      "templatePlaceholder": ["请输入", "请输入标定数目", "请输入", "请输入"],
      "navTitle": "油位",
      "addCalibrationInfoFn": "最多20组" // -------------

    },
    "Oil3011": {
      "template": ["传感器序号 ", "串口号", "类型", "当前油位", "子串口号", "总容量", "当前油量", "油箱"],
      "navTitle": "油位"
    },
    "OilBefore3011": {
      "template": ["串口号 ", "油箱", "无", "油位"],
      "navTitle": "油箱 "
    },
    "Tyrepressure": {
      "template": ["传感器序号", "传感器名称", "当前胎压", "当前胎温"],
      "navTitle": "胎压"
    },
    "TyrepressureDerails": {
      "template": ["启用", "传感器名称", "最低胎压", "最高胎压", "最低胎温", "最高胎温", "预览叠加", "蜂鸣器", "报警输出"],
      "templatePlaceholder": ["请输入名称", "请输入胎压", "请输入胎压", "请输入胎温", "请输入胎温"],
      "navTitle": "胎压传感器"
    },
    "AlarmInfoTwo": {
      "selectChannel": ["举升", "顶盖"],
      "toast": ["未检测到,IO 通道选中当前功能, 自动匹配到通道 ", "通道 "],
      "channelInfo": "通道 "
    },
    icCard: {
      label: ["驾驶证号码", "驾驶证有效期", "从业资格证号码", "从业资格证有效期", "驾驶员姓名", "驾驶员代码", "公司", "性别", "星级"],
      placeholder: ["请输入驾驶证号码", "请输入驾驶证有效期", "请输入从业资格证号码", "请输入从业资格证有效期", "请输入驾驶员姓名", "请输入公司", "请输入星级"],
      columns: "男,女",
      navTitle: "IC卡",
      dateShowTitle: "选择年月日",
      star: "星",
      icCardTitle: "请输入IC卡"
    }
  },
  tw: {
    "ConfigConst": {
      "columnsCheckbits": "无校验,奇校验,偶校验",
      "columnImage": "很差,较差,一般,好,很好,最好",
      "colimnBitrate": "定码率,变码率",
      "columnCom": "\u65E0,\u900F\u4F20,\u4E91\u53F0,\u6CB9\u4F4D,TTS,AIS(\u89C6\u9738\u6E14\u8239\u5B9A\u5236),\n            COMPASS(\u89C6\u9738\u6E14\u8239\u5B9A\u5236),LCD (\u822A\u5927),LED(\u822A\u5927),RFID\u5237\u5361\u5668,\u4E07\u822A\u5E7F\u544A\u5C4F\uFF08\u901A\u7ACB,485\u4E32\u53E3\u534F\u8BAE\u7684\u6CB9\u4F4D\u4F20\u611F\u5668,LED\u95EA\u70C1\u706F(LED_M2),\n            \u4E00\u62D6\u4E09\u4E32\u53E3\u529F\u80FD(AU100),\u534E\u7FF0LED\u5E7F\u544A\u5C4F,\u5916\u63A5GPS\u6570\u636E,\u901A\u7ACB\u6807\u51C6\u901A\u4FE1\u534F\u8BAE,\u89D2\u5EA6\u4F20\u611F\u5668,\u80CE\u538B,\u4E2D\u6CB9\u745E\u98DE\u6307\u5B9A\u6DB2\u4F4D\u4EEA,GPS\u6570\u636E\u900F\u4F20,\n            \u672C\u5B89\u884C\u8F66\u8BB0\u5F55\u4EEA,\u8BA1\u4EF7\u5668,\u5DDD\u57FA\u8F66\u9876\u706F(\u6CE2\u7279\u738719200),JD_LED(\u6CE2\u7279\u738719200),\u5FAE\u89C6\u521BLED(\u6CE2\u7279\u73879600),\u6E05\u7814ADAS,\u745E\u4E3AADAS,\u6CB3\u5357\u519B\u5DE5ADAS,\n            \u56DB\u5DDD\u7545\u4E91,\u6307\u7EB9\u8BC6\u522B,\u5B66\u751F\u5361\u6293\u62CD,\u82CF\u6807ADAS,\u4E91\u5B89ADAS,\u6DF1\u5733\u6E23\u571F\u8F66 LED,\u6DF1\u5733\u6E23\u571F\u8F66\u96F7\u8FBE,\u8D85\u901F\u62A5\u8B66\u5668,\u7855\u9F99LED,\n            TRANSMIT2-\u900F\u4F20\u5230\u6307\u5B9A\u670D\u52A1\u5668,TRANSMIT3-\u900F\u4F20\u5230\u6307\u5B9A\u670D\u52A1\u5668,OpenProtocol \u63A7\u5236\u900F\u4F20,\u4EA7\u6D4B\u5C0F\u677F\u4E13\u7528,\u4E2D\u8F66\u5237\u5361\u5668,\u56FE\u8F6F\u8BBE\u5907,\u90E8\u6807\u673ALCD\u6D4B\u8BD5,\u987A\u79BE\u8BBE\u5907,\n            \u96C4\u5E1D\u8BFB\u5361\u5668,\u4E32\u53E3\u6253\u5370\u4FDD\u5B58\u81F3\u6587\u4EF6,BSD\u58F0\u5149\u62A5\u8B66\u5668,AAL100 \u58F0\u5149\u62A5\u8B66\u5668,ACR100 \u5237\u5361\u5668,\u52BF\u822A\u56DB\u65B9\u4F4D\u5BA2\u6237\u663E\u793A\u5C4F,\u8F7D\u91CD\u4F20\u611F\u5668,\n            \u5E7F\u5DDE\u6B63\u5B89\u58F0\u5149\u62A5\u8B66\u5668,\u6DF1\u5733\u6C7D\u8F66\u7535\u5B50\u5237\u5361\u5668,\u4E0A\u6D77\u57C3\u800C\u751F\u7535\u6C14,\u591A\u5408\u4E00\u58F0\u5149\u62A5\u8B66\u5668,\u52BF\u822A\u96F7\u8FBE,\u957F\u6625\u9A8F\u8FBE,\u957F\u6625\u9A8F\u8FBE\u5BA2\u6D41\u8BA1\u6570\u5668,\u6D77\u5357\u79F0\u82AF\u5408\u610F,\n            \u8D5B\u683C\u9152\u7CBE\u68C0\u6D4B,\u4EBF\u7A0B\u8BFB\u5361\u5668,WIC\u78C1\u6761\u5361\u8BFB\u5361\u5668,GBT_19056,\u5929\u5730\u5B8F\u534E\u9152\u7CBE\u68C0\u6D4B\u4EEA,\u9752\u5C9B\u5B87\u65B0F3\u534F\u8BAE\u6DB2\u4F4D\u4F20\u611F\u5668,\u5185\u8499\u65ED\u4E00\u96F7\u8FBE,\u6E56\u5317\u4E1C\u8BAF\u6E29\u5EA6\u4F20\u611F\u5668\n            ",
      "AlarmInfo": "\u8FD1\u5149,\u8FDC\u5149,\u53F3\u8F6C,\u5DE6\u8F6C,\u5012\u8F66,\u5236\u52A8,\u96FE\u706F,\u793A\u5ECA\u706F,\u5587\u53ED,\u7A7A\u8C03\u72B6\u6001,\u7A7A\u6321\u4FE1\u53F7,\u7F13\u901F\u5668\u5DE5\u4F5C,\n            ABS \u5DE5\u4F5C,\u52A0\u70ED\u5668\u5DE5\u4F5C,\u79BB\u5408\u72B6\u6001,\u524D\u95E8,\u4E2D\u95E8,\u540E\u95E8,\u9A7E\u9A76\u5E2D\u95E8,\u81EA\u5B9A\u4E49\u95E8,\n            \u8F7D\u91CD,\u4FDD\u7559\u4F4D1,\u4FDD\u7559\u4F4D2,\u9876\u76D6\u4F20\u611F\u5668\u4FE1\u53F7,\u4E3E\u5347\u4F20\u611F\u5668\u4FE1\u53F7"
    },
    "AlarmConfigComponents": {
      "titleColumns": ["型号", "波特率", "数据位", "停止位", "校验位", "油位类型"],
      "showPickerFn": "型号为油位才可勾选",
      "onConfirm": "油位",
      "defultVal": "请选择"
    },
    "AComConfigComponents": {
      "titleColumns": ["型号", "波特率", "数据位", "停止位", "校验位", "油位类型"],
      "defultVal": "请选择"
    },
    "AlarmPicker": {
      "template": ['确认', '取消']
    },
    "AlarmConfig": {
      "title": "IO序号 ",
      "columns": "近光,远光,右转,左转,倒车,制动,雾灯,示廊灯,喇叭,空调状态,空挡信号,缓速器工作,ABS 工作,加热器工作,离合状态,前门,中门,后门,驾驶席门,自定义门,载重,保留位1,保留位2,顶盖传感器信号,举升传感器信号",
      "navTitle": "顶盖",
      "filtersCOlumnsTitle": "未配置功能"
    },
    "AlarmOutput": {
      "content": ["输出", "远程", "手动", "联动", "開關"],
      "navTitle": "IO 输出"
    },
    "CodeStream": {
      "template": ['总计存储大小', '通道 ', '分辨率', '帧率', '音频', '编码标准', '画质', '存储大小'],
      "audioType": ['启用', '禁用'],
      "navTitle": "主/子码流",
      "androidStatus": ['主码流', '子码流']
    },
    "CodeStreamDetails": {
      "template": ['音频叠加', '分辨率', '帧率', '位率类型', '位率', '画质', '编码标准', '存储大小'],
      "navTitle": "主/子码流",
      "androidStatus": ['主码流 通道', '子码流 通道']
    },
    "ComInfo": {
      "navTitle": "串口序号 ",
      "failMsg": '当前设备不支持声光报警器',
      "callJSResult": ['声光报警', '当前设备不支持声光报警器', '当前设备不支持声光报警器', '刷卡器', '当前设备不支持刷卡器', '当前设备不支持刷卡器']
    },
    "ComSettings": {
      "template": ["序号 ", "功能", "波特率", "数据位", "停止位", "校验位"],
      "navTitle": "串口设置",
      "filterABtn": ['无校验', '奇校验', '偶校验']
    },
    "LoadSettings": {
      "navTitle": "载重",
      "template": ["型号 ", "当前电压值", "当前重量", "标定数目", "删除", "添加", '序号', '电压值', '标定重量'],
      "templatePlaceholder": ["请输入", "请输入", "请输入标定数目", "请输入", "请输入"],
      "fail": ["最多15组"] // -------------

    },
    "PTZInfo": {
      "template": ["协议类型 ", "解码器地址", "请输入解码器地址", "流控"],
      "navTitle": "云台通道 ",
      "columnShowItem": "云台",
      "statusValue": "无",
      "callJSResult": "云台"
    },
    "PTZSettings": {
      "template": ["通道 ", "波特率", "数据位", "停止位", "校验位", "协议类型", "解码器地址", " 位"],
      "navTitle": "云台"
    },
    "ReversingCamera": {
      "template": ["启用", "视频通道", "触发开关", "视频输出", "等待时长", "请输入等待时长", "设置区域", "确认", "取消"],
      "navTitle": "倒车影像",
      "columnChannel": "通道",
      "columnVideoOutput": ["常无", "常有"],
      "columnTime": "30 秒,1 分钟,2 分钟,5 分钟"
    },
    "SessionSettings": {
      "template": ["循环覆盖", "主码流", "子码流", "主码流", "子码流"],
      "navTitle": "存储设置"
    },
    "TemperatureSensingState": {
      "template": ["温感", "状态", "名称", "温度"],
      "navTitle": "温感",
      "filterStatus": "禁用,丢失,正常",
      "fail": ["该设备未定制温感功能"] // -------------

    },
    "TemperatureSensingStateDetails": {
      "template": ["启用", "ID", "名称", "温度上限报警功能", "温度上限", "温度下限报警功能", "温度下限", "蜂鸣器", "上报频率", "选择IO"],
      "templatePlaceholder": ["ID ", "请输入名称", "请输入上限值", "请输入下限值", "请输入上报频率"],
      "navTitle": "温度传感器 ",
      "fail": ["该设备没有定制的温度传感功能"]
    },
    "ToilLevel": {
      "template": ["类型", "总油量", "当前油量", "当前油位", "传感器数据最大值", "报警阀值", "标定数目", "删除", "添加", "序号", "标定增量", "标定油位"],
      "templatePlaceholder": ["请输入", "请输入标定数目", "请输入", "请输入"],
      "navTitle": "油位",
      "addCalibrationInfoFn": "最多20组"
    },
    "Oil3011": {
      "template": ["感測器序號 ", "串口號", "類型", "當前油比特", "子串口號", "總容量", "當前油量", "油箱"],
      "navTitle": "油比特"
    },
    "OilBefore3011": {
      "template": ["串口號 ", "油箱", "無", "油比特"],
      "navTitle": "油箱 "
    },
    "Tyrepressure": {
      "template": ["传感器序号", "传感器名称", "当前胎压", "当前胎温"],
      "navTitle": "胎压"
    },
    "TyrepressureDerails": {
      "template": ["启用", "传感器名称", "最低胎压", "最高胎压", "最低胎温", "最高胎温", "预览叠加", "蜂鸣器", "报警输出"],
      "templatePlaceholder": ["请输入名称", "请输入胎压", "请输入胎压", "请输入胎温", "请输入胎温"],
      "navTitle": "胎压传感器"
    },
    "AlarmInfoTwo": {
      "selectChannel": ["举升", "顶盖"],
      "toast": ["未检测到,IO 通道选中当前功能, 自动匹配到通道 ", "通道 "],
      "channelInfo": "通道 "
    },
    icCard: {
      label: ["驾驶证号码", "驾驶证有效期", "从业资格证号码", "从业资格证有效期", "驾驶员姓名", "驾驶员代码", "公司", "性别", "星级"],
      placeholder: ["请输入驾驶证号码", "请输入驾驶证有效期", "请输入从业资格证号码", "请输入从业资格证有效期", "请输入驾驶员姓名", "请输入公司", "请输入星级"],
      columns: "男,女",
      navTitle: "IC卡",
      dateShowTitle: "选择年月日",
      star: "星",
      icCardTitle: "请输入IC卡"
    }
  }
});

/***/ }),

/***/ "./src/locales/setupI18n.js":
/*!**********************************!*\
  !*** ./src/locales/setupI18n.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i18n": function() { return /* binding */ i18n; }
/* harmony export */ });
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/_vue-i18n@9.2.2@vue-i18n/dist/vue-i18n.esm-bundler.js");
/* harmony import */ var _getMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMessage */ "./src/locales/getMessage.js");

 // import messages from './ywb/index';
//注册i8n实例并引入语言文件

var localeData = {
  legacy: false,
  locale: 'zh',
  messages: _getMessage__WEBPACK_IMPORTED_MODULE_0__["default"]
};
var i18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_1__.createI18n)(localeData);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _kangc_v_md_editor_lib_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kangc/v-md-editor/lib/preview */ "./node_modules/_@kangc_v-md-editor@2.3.15@@kangc/v-md-editor/lib/preview.js");
/* harmony import */ var _kangc_v_md_editor_lib_preview__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kangc_v_md_editor_lib_preview__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kangc_v_md_editor_lib_style_preview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kangc/v-md-editor/lib/style/preview.css */ "./node_modules/_@kangc_v-md-editor@2.3.15@@kangc/v-md-editor/lib/style/preview.css");
/* harmony import */ var _kangc_v_md_editor_lib_theme_github_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kangc/v-md-editor/lib/theme/github.js */ "./node_modules/_@kangc_v-md-editor@2.3.15@@kangc/v-md-editor/lib/theme/github.js");
/* harmony import */ var _kangc_v_md_editor_lib_theme_github_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kangc_v_md_editor_lib_theme_github_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kangc_v_md_editor_lib_theme_style_github_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kangc/v-md-editor/lib/theme/style/github.css */ "./node_modules/_@kangc_v-md-editor@2.3.15@@kangc/v-md-editor/lib/theme/style/github.css");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/router/index */ "./src/router/index.js");
/* harmony import */ var _locales_setupI18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locales/setupI18n */ "./src/locales/setupI18n.js");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vant/lib/index.css */ "./node_modules/_vant@3.6.2@vant/lib/index.css");







 // import '../mock/mockServe';



_kangc_v_md_editor_lib_preview__WEBPACK_IMPORTED_MODULE_1___default().use((_kangc_v_md_editor_lib_theme_github_js__WEBPACK_IMPORTED_MODULE_3___default()), {
  Hljs: (highlight_js__WEBPACK_IMPORTED_MODULE_5___default())
}); // eslint 严格校验 + ts 语法 + setup语法糖
// import { useI18n } from "vue-i18n";
// const { locale } = useI18n();
// locale.value = "zh";

(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_6__["default"]).use((_kangc_v_md_editor_lib_preview__WEBPACK_IMPORTED_MODULE_1___default())).use(_locales_setupI18n__WEBPACK_IMPORTED_MODULE_8__.i18n).use(_router_index__WEBPACK_IMPORTED_MODULE_7__["default"]).mount('#app');

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/_vue-router@4.1.5@vue-router/dist/vue-router.mjs");







var Home = function Home() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_Home_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/Home.vue */ "./src/views/Home.vue"));
};

var SettingsIP = function SettingsIP() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_SettingsIP_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/SettingsIP.vue */ "./src/views/SettingsIP.vue"));
};

var BSD = function BSD() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_BSD_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/BSD.vue */ "./src/views/BSD.vue"));
};

var CarInfo = function CarInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_CarInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/CarInfo.vue */ "./src/views/CarInfo.vue"));
};

var In3G4G = function In3G4G() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_3G4G_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/3G4G.vue */ "./src/views/3G4G.vue"));
};

var WifiSettings = function WifiSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_WifiSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/WifiSettings.vue */ "./src/views/WifiSettings.vue"));
};

var PlatformSettings = function PlatformSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_PlatformSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/PlatformSettings.vue */ "./src/views/PlatformSettings.vue"));
};

var ServeInfo = function ServeInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_ServeInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/ServeInfo.vue */ "./src/views/ServeInfo.vue"));
};

var CameraSettings = function CameraSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell_index_mjs-node_modules__vant_3_6_2_vant_es_grid-item_in-c68f54"), __webpack_require__.e("src_views_CameraSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/CameraSettings.vue */ "./src/views/CameraSettings.vue"));
};

var DiskStatus = function DiskStatus() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_DiskStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/DiskStatus.vue */ "./src/views/DiskStatus.vue"));
};

var Network = function Network() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_Network_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/Network.vue */ "./src/views/Network.vue"));
};

var PlatformStatus = function PlatformStatus() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_PlatformStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/PlatformStatus.vue */ "./src/views/PlatformStatus.vue"));
};

var CameraInfo = function CameraInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_CameraInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/CameraInfo.vue */ "./src/views/CameraInfo.vue"));
};

var ActualTime = function ActualTime() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_ActualTime_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/ActualTime.vue */ "./src/views/ActualTime.vue"));
};

var Alarm = function Alarm() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_Alarm_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/Alarm.vue */ "./src/views/Alarm.vue"));
};

var AlarmInfo = function AlarmInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_AlarmInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/AlarmInfo.vue */ "./src/views/AlarmInfo.vue"));
};

var Demarcate = function Demarcate() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_Demarcate_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/Demarcate.vue */ "./src/views/Demarcate.vue"));
};

var SystemInfo = function SystemInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_SystemInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/SystemInfo.vue */ "./src/views/SystemInfo.vue"));
};

var ADAS = function ADAS() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_ADAS_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/ADAS.vue */ "./src/views/ADAS.vue"));
}; // ADAS


var DSM1 = function DSM1() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_DSM1_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/DSM1.vue */ "./src/views/DSM1.vue"));
}; // BSM1


var DSM2 = function DSM2() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_DSM2_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/DSM2.vue */ "./src/views/DSM2.vue"));
}; // BSM1


var AlarmOutput = function AlarmOutput() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_AlarmOutput_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/AlarmOutput.vue */ "./src/views/phaseTwo/AlarmOutput.vue"));
};

var BurglarAlarm = function BurglarAlarm() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_components_AlarmConfig_vue"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell_index_mjs-node_modules__vant_3_6_2_vant_es_grid-item_in-c68f54"), __webpack_require__.e("src_views_phaseTwo_BurglarAlarm_vue-src_components_AlarmConfig_vue-src_components_Alarm_Alarm-b40f5c")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/BurglarAlarm.vue */ "./src/views/phaseTwo/BurglarAlarm.vue"));
};

var SessionSettings = function SessionSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_SessionSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/SessionSettings.vue */ "./src/views/phaseTwo/SessionSettings.vue"));
};

var LoadSettings = function LoadSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_components_ComConfig_vue-node_modules_core-js_modules_es_array_filter_js-node_modules__va-fce7b1"), __webpack_require__.e("src_views_phaseTwo_LoadSettings_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComCo-4f92f9")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/LoadSettings.vue */ "./src/views/phaseTwo/LoadSettings.vue"));
};

var PTZSettings = function PTZSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_PTZSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/PTZSettings.vue */ "./src/views/phaseTwo/PTZSettings.vue"));
};

var Tyrepressure = function Tyrepressure() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_Tyrepressure_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/Tyrepressure.vue */ "./src/views/phaseTwo/Tyrepressure.vue"));
};

var TyrepressureDerails = function TyrepressureDerails() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_phaseTwo_TyrepressureDerails_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/TyrepressureDerails.vue */ "./src/views/phaseTwo/TyrepressureDerails.vue"));
};

var CodeStream = function CodeStream() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_CodeStream_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/CodeStream.vue */ "./src/views/phaseTwo/CodeStream.vue"));
};

var CodeStreamDetails = function CodeStreamDetails() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_phaseTwo_CodeStreamDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/CodeStreamDetails.vue */ "./src/views/phaseTwo/CodeStreamDetails.vue"));
};

var TemperatureSensingState = function TemperatureSensingState() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_TemperatureSensingState_vue-src_components_stickyBottom_vue-src_components-2885e2")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/TemperatureSensingState.vue */ "./src/views/phaseTwo/TemperatureSensingState.vue"));
};

var TemperatureSensingStateDetails = function TemperatureSensingStateDetails() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_phaseTwo_TemperatureSensingStateDetails_vue-src_components_stickyBottom_vue-src_com-d0ca76")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/TemperatureSensingStateDetails.vue */ "./src/views/phaseTwo/TemperatureSensingStateDetails.vue"));
};

var ComSettings = function ComSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_ComSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/ComSettings.vue */ "./src/views/phaseTwo/ComSettings.vue"));
};

var ReversingCamera = function ReversingCamera() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_phaseTwo_ReversingCamera_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/ReversingCamera.vue */ "./src/views/phaseTwo/ReversingCamera.vue"));
};

var ComInfo = function ComInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_components_AlarmConfig_vue"), __webpack_require__.e("src_views_phaseTwo_ComInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-84499e")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/ComInfo.vue */ "./src/views/phaseTwo/ComInfo.vue"));
};

var PTZInfo = function PTZInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_components_AlarmConfig_vue"), __webpack_require__.e("src_views_phaseTwo_PTZInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-42ceee")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/PTZInfo.vue */ "./src/views/phaseTwo/PTZInfo.vue"));
};

var ToilLevel = function ToilLevel() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_components_ComConfig_vue-node_modules_core-js_modules_es_array_filter_js-node_modules__va-fce7b1"), __webpack_require__.e("src_components_Oil_OilBefore3011_vue"), __webpack_require__.e("src_views_phaseTwo_ToilLevel_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComConfi-51e5d7")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/ToilLevel.vue */ "./src/views/phaseTwo/ToilLevel.vue"));
};

var AlarmConfigDetails = function AlarmConfigDetails() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_AlarmConfigDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/AlarmConfigDetails.vue */ "./src/views/phaseTwo/AlarmConfigDetails.vue"));
};

var AlarmConfig = function AlarmConfig() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_phaseTwo_AlarmConfig_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/AlarmConfig.vue */ "./src/views/phaseTwo/AlarmConfig.vue"));
};

var OilParam = function OilParam() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_OilParam_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/OilParam.vue */ "./src/views/OilParam.vue"));
}; // 油感


var AlarmIoInfo = function AlarmIoInfo() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_phaseTwo_AlarmIoInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseTwo/AlarmIoInfo.vue */ "./src/views/phaseTwo/AlarmIoInfo.vue"));
}; // 油感


var RotaTestNsor = function RotaTestNsor() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_RotaTestNsor_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/RotaTestNsor.vue */ "./src/views/RotaTestNsor.vue"));
}; // 正反转


var OneeireTable = function OneeireTable() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_OneeireTable_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/OneeireTable.vue */ "./src/views/OneeireTable.vue"));
}; // 温度


var OilBefore3011 = function OilBefore3011() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_components_ComConfig_vue-node_modules_core-js_modules_es_array_filter_js-node_modules__va-fce7b1"), __webpack_require__.e("src_components_Oil_OilBefore3011_vue"), __webpack_require__.e("src_components_Alarm_AlarmPicker_vue-src_components_ComConfig_vue-src_components_Oil_OilBefor-d0c916")]).then(__webpack_require__.bind(__webpack_require__, /*! @/components/Oil/OilBefore3011.vue */ "./src/components/Oil/OilBefore3011.vue"));
}; // 温度


var icCardView = function icCardView() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_datetime-picker_index_mjs"), __webpack_require__.e("src_views_IcCard_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/IcCard.vue */ "./src/views/IcCard.vue"));
}; // IC
// 测试


var MockView = function MockView() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules_core-js_internals_array-iteration_js-node_modules_core-js_modules_es_typed-array-bdceb6"), __webpack_require__.e("node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_array_is-ar-9239ff"), __webpack_require__.e("src_api_http_js"), __webpack_require__.e("src_views_mockTest_mock_vue-node_modules_core-js_modules_es_parse-float_js-node_modules_core--945fe1")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/mockTest/mock.vue */ "./src/views/mockTest/mock.vue"));
}; // 模拟数据


var decodeProto = function decodeProto() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules_core-js_internals_array-iteration_js-node_modules_core-js_modules_es_typed-array-bdceb6"), __webpack_require__.e("node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_array_is-ar-9239ff"), __webpack_require__.e("src_api_http_js"), __webpack_require__.e("src_views_decode_decodeProto_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/decode/decodeProto.vue */ "./src/views/decode/decodeProto.vue"));
}; // 动态解析proto


var EventSource = function EventSource() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules_core-js_internals_array-iteration_js-node_modules_core-js_modules_es_typed-array-bdceb6"), __webpack_require__.e("src_views_test_EventSource_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/test/EventSource.vue */ "./src/views/test/EventSource.vue"));
}; // http stream 流
// const h265 = () => import('@/views/h265.vue'); // 模拟数据
// ----------------- 三期


var BootPreview = function BootPreview() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_plaseThree_BootPreview_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/BootPreview.vue */ "./src/views/plaseThree/BootPreview.vue"));
}; // 开机预览


var AudioFrequency = function AudioFrequency() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_plaseThree_AudioFrequency_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/AudioFrequency.vue */ "./src/views/plaseThree/AudioFrequency.vue"));
}; // 音频设置


var ShutDown = function ShutDown() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_datetime-picker_index_mjs"), __webpack_require__.e("src_views_plaseThree_ShutDown_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/ShutDown.vue */ "./src/views/plaseThree/ShutDown.vue"));
}; // 开关机设置


var PowerSettings = function PowerSettings() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("src_views_plaseThree_PowerSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/PowerSettings.vue */ "./src/views/plaseThree/PowerSettings.vue"));
}; // 电源设置


var AnalogTrigger = function AnalogTrigger() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_plaseThree_AnalogTrigger_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/AnalogTrigger.vue */ "./src/views/plaseThree/AnalogTrigger.vue"));
}; // 模拟触发


var PreviewOverlay = function PreviewOverlay() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("src_views_plaseThree_PreviewOverlay_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/PreviewOverlay.vue */ "./src/views/plaseThree/PreviewOverlay.vue"));
}; // 预览叠加


var TextSend = function TextSend() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_field_index_mjs"), __webpack_require__.e("src_views_plaseThree_TextSend_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/plaseThree/TextSend.vue */ "./src/views/plaseThree/TextSend.vue"));
}; // 预览叠加
// ----------------- 四期


var SystemTime = function SystemTime() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_datetime-picker_index_mjs"), __webpack_require__.e("src_views_phaseFour_SystemTime_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseFour/SystemTime.vue */ "./src/views/phaseFour/SystemTime.vue"));
}; // 预览叠加


var Dst = function Dst() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3"), __webpack_require__.e("src_mixins_index_js"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_datetime-picker_index_mjs"), __webpack_require__.e("src_views_phaseFour_Dst_vue-src_components_stickyBottom_vue-src_components_tab_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/phaseFour/Dst.vue */ "./src/views/phaseFour/Dst.vue"));
}; // 预览叠加


var Chat = function Chat() {
  return Promise.all(/*! import() */[__webpack_require__.e("node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e"), __webpack_require__.e("node_modules__vant_3_6_2_vant_es_button_index_mjs"), __webpack_require__.e("node_modules_core-js_internals_array-iteration_js-node_modules_core-js_modules_es_typed-array-bdceb6"), __webpack_require__.e("node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_array_is-ar-9239ff"), __webpack_require__.e("src_views_test_Chat_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! @/views/test/Chat.vue */ "./src/views/test/Chat.vue"));
}; // chatGpt


var routes = [{
  path: '/',
  component: Home,
  // Home
  name: "首页"
}, {
  path: '/Dst',
  component: Dst,
  name: "Dst"
}, {
  path: '/SystemTime',
  component: SystemTime,
  name: "SystemTime"
}, {
  path: '/Chat',
  component: Chat,
  name: "Chat"
}, {
  path: '/EventSource',
  component: EventSource,
  name: "EventSource"
}, {
  path: '/TextSend',
  component: TextSend,
  name: "TextSend"
}, // {
//     path: '/h265',
//     component: h265, // 
//     name: "h265"
// },
{
  path: '/decodeProto',
  component: decodeProto,
  name: "解析proto"
}, {
  path: '/PreviewOverlay',
  component: PreviewOverlay,
  name: "预览叠加"
}, {
  path: '/PowerSettings',
  component: PowerSettings,
  name: "电源设置"
}, {
  path: '/AnalogTrigger',
  component: AnalogTrigger,
  name: "模拟触发"
}, {
  path: '/ShutDown',
  component: ShutDown,
  name: "开关机"
}, {
  path: '/AudioFrequency',
  component: AudioFrequency,
  name: "音频设置"
}, {
  path: '/BootPreview',
  component: BootPreview,
  name: "开机预览"
}, {
  path: '/OilBefore3011',
  component: OilBefore3011,
  name: 'OilBefore3011'
}, {
  path: '/AlarmIoInfo',
  component: AlarmIoInfo,
  name: 'AlarmIoInfo'
}, {
  path: '/AlarmConfigDetails',
  component: AlarmConfigDetails,
  name: 'AlarmConfigDetails'
}, {
  path: '/AlarmConfig',
  component: AlarmConfig,
  name: 'IO'
}, {
  path: '/ToilLevel',
  component: ToilLevel,
  name: '油位'
}, {
  path: '/PTZInfo',
  component: PTZInfo,
  name: '云台 二级'
}, {
  path: '/ComInfo',
  component: ComInfo,
  name: '串口设置 二级'
}, {
  path: '/ReversingCamera',
  component: ReversingCamera,
  name: '倒车影像'
}, {
  path: '/ComSettings',
  component: ComSettings,
  name: '串口设置'
}, {
  path: '/TemperatureSensingStateDetails',
  component: TemperatureSensingStateDetails,
  name: '温度传感器'
}, {
  path: '/TemperatureSensingState',
  component: TemperatureSensingState,
  name: '温感状态'
}, {
  path: '/CodeStreamDetails',
  component: CodeStreamDetails,
  name: '主/子码流 二级页面'
}, {
  path: '/CodeStream',
  component: CodeStream,
  name: '主/子码流'
}, {
  path: '/Tyrepressure',
  component: Tyrepressure,
  name: '胎压'
}, {
  path: '/TyrepressureDerails',
  component: TyrepressureDerails,
  name: '胎压 二级页面'
}, {
  path: '/PTZSettings',
  component: PTZSettings,
  name: '云台'
}, {
  path: '/LoadSettings',
  component: LoadSettings,
  name: '载重'
}, {
  path: '/SessionSettings',
  component: SessionSettings,
  name: '存储设置'
}, {
  path: '/BurglarAlarm',
  component: BurglarAlarm,
  name: '报警器'
}, {
  path: '/AlarmOutput',
  component: AlarmOutput,
  name: '报警输出'
}, {
  path: '/MockView',
  component: MockView,
  name: "mock 测试"
}, {
  path: '/DSM1',
  component: DSM1,
  name: 'DSM1 标定'
}, {
  path: '/DSM2',
  component: DSM2,
  name: 'DSM2 标定'
}, {
  path: '/ADAS',
  component: ADAS,
  name: 'ADAS 标定'
}, {
  path: '/SystemInfo',
  component: SystemInfo,
  name: '系统设置'
}, {
  path: '/Demarcate',
  component: Demarcate,
  name: '远程标定'
}, {
  path: '/AlarmInfo',
  component: AlarmInfo,
  name: '报警输入设置页'
}, {
  path: '/RotaTestNsor',
  component: RotaTestNsor,
  name: '正反转'
}, {
  path: '/OneeireTable',
  component: OneeireTable,
  name: '温度'
}, {
  path: '/OilParam',
  component: OilParam,
  name: '油感'
}, {
  path: '/SettingsIP',
  component: SettingsIP,
  name: '设置IP'
}, {
  path: '/BSD',
  component: BSD,
  name: 'BSD'
}, {
  path: '/CarInfo',
  component: CarInfo,
  name: '车辆信息'
}, {
  path: '/3G4G',
  component: In3G4G,
  name: '3G/4G'
}, {
  path: '/WifiSettings',
  component: WifiSettings,
  name: 'WIFI设置'
}, {
  path: '/PlatformSettings',
  component: PlatformSettings,
  name: '平台配置'
}, {
  path: '/ServeInfo',
  component: ServeInfo,
  name: '服务器详细'
}, {
  path: '/CameraSettings',
  component: CameraSettings,
  name: '摄像头设置'
}, {
  path: '/DiskStatus',
  component: DiskStatus,
  name: '磁盘状态'
}, {
  path: '/Network',
  component: Network,
  name: '网络状态'
}, {
  path: '/PlatformStatus',
  component: PlatformStatus,
  name: '平台状态'
}, {
  path: '/CameraInfo',
  component: CameraInfo,
  name: '摄像头详情'
}, {
  path: '/ActualTime',
  component: ActualTime,
  name: '实时状态'
}, {
  path: '/Alarm',
  component: Alarm,
  name: '报警输入状态'
}, {
  path: '/icCard',
  component: icCardView,
  name: 'IC卡'
}];
var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({
  routes: routes,
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createMemoryHistory)()
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/utlis/ConfigConst.js":
/*!**********************************!*\
  !*** ./src/utlis/ConfigConst.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlarmInfo": function() { return /* binding */ AlarmInfo; },
/* harmony export */   "colimnBitrate": function() { return /* binding */ colimnBitrate; },
/* harmony export */   "columnAgreementType": function() { return /* binding */ columnAgreementType; },
/* harmony export */   "columnCom": function() { return /* binding */ columnCom; },
/* harmony export */   "columnImage": function() { return /* binding */ columnImage; },
/* harmony export */   "columnOilType": function() { return /* binding */ columnOilType; },
/* harmony export */   "columnPower": function() { return /* binding */ columnPower; },
/* harmony export */   "columnVideo": function() { return /* binding */ columnVideo; },
/* harmony export */   "columnsBps": function() { return /* binding */ columnsBps; },
/* harmony export */   "columnsCheckbits": function() { return /* binding */ columnsCheckbits; },
/* harmony export */   "columnsCheckbitsIndex": function() { return /* binding */ columnsCheckbitsIndex; },
/* harmony export */   "columnsCom": function() { return /* binding */ columnsCom; },
/* harmony export */   "columnsComStopbits": function() { return /* binding */ columnsComStopbits; },
/* harmony export */   "columnsDatabits": function() { return /* binding */ columnsDatabits; },
/* harmony export */   "columnsStopbits": function() { return /* binding */ columnsStopbits; },
/* harmony export */   "ipcPower": function() { return /* binding */ ipcPower; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utlis/QueryStr */ "./src/utlis/QueryStr.js");
/* harmony import */ var _locales_setupI18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/setupI18n */ "./src/locales/setupI18n.js");




var _i18n$global = _locales_setupI18n__WEBPACK_IMPORTED_MODULE_3__.i18n.global,
    t = _i18n$global.t,
    locale = _i18n$global.locale;
locale.value = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_2__.getQueryString)("la");
var columnsBps = ["115200", "57600", "38400", "19200", "9600", "4800", "2400", "1200", "300"]; // 波特率

var columnsDatabits = ["8", "7", "6"]; // 波特率

var columnsStopbits = ["1", "2"]; // 停止位 

var columnsComStopbits = ["1", "2"]; // 串口停止位 

var columnsCheckbits = t("ConfigConst.columnsCheckbits").split(","); // 停止位

var columnsCheckbitsIndex = ["78", "79", "69"]; // 停止位

var columnOilType = ["TUB", "N08", "PLUG", "ITALON", "GX"];
var columnsCom = ["1", "2", "3", "4"]; // 波特率

var columnAgreementType = ["Pelco-D", "Pelco-p", "B01", "Samsung"];
var columnPower = ["D1", "CIF", "QCIF", "960H", "HALF_D1", "720P", "1080P", "1080N", "720N", "960P"];
var columnImage = t("ConfigConst.columnImage").split(",");
var columnVideo = ["H264", "H264+", "H265", "H265+"];
var colimnBitrate = t("ConfigConst.colimnBitrate").split(","); // 位率类型

var ipcPower = ["1920x1080", "1280x720"];
var AlarmInfo = t("ConfigConst.AlarmInfo").split(",");
var columnCom = t("ConfigConst.columnCom").split(","); // 全部产品
// [
//     "无",
//     "透传",
//     "云台",
//     "油位",
//     "TTS",
//     "AIS（视霸渔船定制）",
//     "COMPASS（视霸渔船定制）",
//     "LCD（航大）",
//     "LED（航大）",
//     "RFID刷卡器",
//     "万航广告屏（通立）",
//     "485串口协议的油位传感器",
//     "LED闪烁灯（LED_M2）",
//     "一拖三串口功能（AU100）",
//     "华翰LED广告屏",
//     "外接GPS数据",
//     "通立标准通信协议",
//     "角度传感器",
//     "胎压",
//     "中油瑞飞指定液位仪",
//     "GPS数据透传",
//     "本安行车记录仪",
//     "计价器",
//     "川基车顶灯（波特率19200）",
//     "JD_LED(波特率19200)@24",
//     "微视创LED（波特率9600）",
//     "清研ADAS",
//     "瑞为ADAS",
//     "河南军工ADAS",
//     "四川畅云",
//     "指纹识别",
//     "学生卡抓拍",
//     "苏标ADAS",
//     "云安ADAS",
//     "深圳渣土车 LED",
//     "深圳渣土车雷达",
//     "超速报警器",
//     "硕龙LED",
//     "TRANSMIT2-透传到指定服务器",
//     "TRANSMIT3-透传到指定服务器",
//     "OpenProtocol 控制透传",
//     "产测小板专用",
//     "中车刷卡器",
//     "图软设备",
//     "部标机LCD测试",
//     "顺禾设备",
//     "雄帝读卡器",
//     "串口打印保存至文件",
//     "BSD声光报警器",
//     "AAL100 声光报警器",
//     "ACR100 刷卡器",
//     "势航四方位客户显示屏",
//     "载重传感器",
//     "广州正安声光报警器",
//     "深圳汽车电子刷卡器",
//     "上海埃而生电气",
//     "多合一声光报警器",
//     "势航雷达",
//     "长春骏达",
//     "长春骏达客流计数器",
//     "海南称芯合意",
//     "赛格酒精检测",
//     "亿程读卡器",
//     "WIC磁条卡读卡器",
//     "GBT_19056",
//     "天地宏华酒精检测仪",
//     "青岛宇新F3协议液位传感器",
//     "内蒙旭一雷达",
//     "湖北东讯温度传感器",
//   ];

/***/ }),

/***/ "./src/utlis/QueryStr.js":
/*!*******************************!*\
  !*** ./src/utlis/QueryStr.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrIndexExchange": function() { return /* binding */ arrIndexExchange; },
/* harmony export */   "baseChange": function() { return /* binding */ baseChange; },
/* harmony export */   "baseChangeAlarm": function() { return /* binding */ baseChangeAlarm; },
/* harmony export */   "byteChange": function() { return /* binding */ byteChange; },
/* harmony export */   "byteChangeAlarm": function() { return /* binding */ byteChangeAlarm; },
/* harmony export */   "columnComInfo": function() { return /* binding */ columnComInfo; },
/* harmony export */   "filterABtn": function() { return /* binding */ filterABtn; },
/* harmony export */   "getQueryString": function() { return /* binding */ getQueryString; },
/* harmony export */   "getQueryString2": function() { return /* binding */ getQueryString2; },
/* harmony export */   "getWifiASC": function() { return /* binding */ getWifiASC; },
/* harmony export */   "getWifiASCFormat": function() { return /* binding */ getWifiASCFormat; },
/* harmony export */   "keepDecimal": function() { return /* binding */ keepDecimal; },
/* harmony export */   "pad": function() { return /* binding */ pad; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/_@babel_runtime@7.21.0@@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.repeat.js */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ConfigConst__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ConfigConst */ "./src/utlis/ConfigConst.js");


















 //解码

function b64Decode(str) {
  return decodeURI(decodeURIComponent(atob(str)));
}

function getQueryString2(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.href.substr(1).match(reg);

  if (name == "pass") {
    var pass = b64Decode(r[2]);
    if (r != null) return pass;
    return null;
  } else {
    if (r != null) return decodeURI(r[2]);
    return null;
  }
} // 生产模式

function getQueryString(name) {
  var url = window.location.href;

  if (url.indexOf("?") != -1) {
    var str = url.split("?")[1];
    var obj = {};
    var items = str.split("&");

    for (var i = 0; i < items.length; i++) {
      var item = items[i].split("=");
      obj[item[0]] = item[1];
    }

    return obj[name];
  } else {
    return "";
  }
}
function getWifiASC(nameWifi) {
  var wifiTemp = "";

  if (nameWifi != null && nameWifi.length >= 3) {
    for (var i = 0; i < nameWifi.length / 3; i++) {
      wifiTemp += String.fromCharCode(nameWifi.substr(i * 3, 3));
    }
  }

  return wifiTemp;
} // 转ASCII

function getWifiASCFormat(nameWifi) {
  var wifiTemp = "";

  for (var i = 0; i < nameWifi.length; i++) {
    wifiTemp += PrefixInteger(nameWifi[i].charCodeAt(), 3);
  }

  return wifiTemp;
}

function PrefixInteger(num, m) {
  return (Array(m).join(0) + num).slice(-m);
} // 互换 位置


function arrIndexExchange(array, x, y) {
  array.splice.apply(array, [x - 1, 1].concat((0,D_aEJ_apache_tomcat_9_0_54_webapps_yunweibao_ad_node_modules_babel_runtime_7_21_0_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array.splice(y - 1, 1, array[x - 1]))));
  return array;
} // 十进制转二进制 8位

var baseChange = function baseChange(value) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var number = +value;
  var num = pad(number.toString(2), max);
  var strArr = num.split("");
  return strArr;
};
function pad(num, n) {
  return Array(n > num ? n - ('' + num).length + 1 : 0).join(0) + num;
} // 保留小数

function keepDecimal(str, num) {
  return str.substr(0, str.indexOf(".") + num);
}
var filterABtn = function filterABtn(num) {
  var str = "";

  function PtzBtn(num) {
    switch (num) {
      case "0":
        str = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnsCheckbits[0];
        break;

      case "1":
        str = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnsCheckbits[1];
        break;

      case "2":
        str = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnsCheckbits[2];
        break;
    }

    return str;
  }

  switch (num) {
    case "78":
      str = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnsCheckbits[0];
      break;

    case "79":
      str = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnsCheckbits[1];
      break;

    case "69":
      str = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnsCheckbits[2];
      break;

    default:
      str = PtzBtn(num);
  }

  return str;
};
function columnComInfo() {
  var columnIndex = _ConfigConst__WEBPACK_IMPORTED_MODULE_17__.columnCom;
  return columnIndex;
} // 十进制转二进制 8位

var baseChangeAlarm = function baseChangeAlarm(value) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var leng = value.length;
  var number = max - leng;
  var str = "";

  for (var i = 0; i < number; i++) {
    str += "0";
  }

  str += value;
  var select = str.split("").reverse();
  var selectItem = [];

  for (var j = 0; j < select.length; j++) {
    if (select[j] != "0") {
      selectItem.push(j + 1);
    }
  }

  return selectItem;
}; // 二进制转十进制

var byteChange = function byteChange(value) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var str = "";
  console.log(value);

  for (var i = 0; i < max; i++) {
    if (value.indexOf(i) == -1) {
      str += "0";
    } else {
      str += "1";
    }
  }

  var btn = str.split("").reverse().join("");

  if (btn.length < 8) {
    var leng = 8 - btn.length;
    var str2 = "0";
    btn = str2.repeat(leng) + btn;
  }

  var val = parseInt(btn, 2);
  return val;
}; // 二进制转十进制

var byteChangeAlarm = function byteChangeAlarm(value) {
  // console.warn(value.toString());
  var arr = new Array(9);
  var str = "";

  for (var i = 1; i < arr.length; i++) {
    if (value.indexOf(i) === -1) {
      str += "0";
    } else {
      str += "1";
    }
  }

  var val = parseInt(str.split("").reverse().join(""), 2);
  return val;
};

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=js */ "./src/App.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_3e85f9aa_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css */ "./src/App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css");



;

const __exports__ = _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/App.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************!*\
  !*** ./src/App.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../node_modules/babel-loader/lib/index.js??clonedRuleSet-41!../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&setup=true&lang=js */ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_17_0_0_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_3e85f9aa_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css");


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=3e85f9aa&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"node_modules___babel_runtime_7_21_0_babel_runtime_helpers_esm_asyncToGenerator_js-node_module-66bc3e":"7dcd500a","node_modules__vant_3_6_2_vant_es_button_index_mjs":"809d80ea","node_modules_core-js_modules_es_parse-float_js-node_modules_core-js_modules_web_timers_js-nod-67d2d3":"2d766950","src_mixins_index_js":"d70e80ba","src_views_Home_vue-src_components_stickyBottom_vue-src_components_tab_vue":"f28d8e22","node_modules__vant_3_6_2_vant_es_field_index_mjs":"952b4785","src_views_SettingsIP_vue-src_components_stickyBottom_vue-src_components_tab_vue":"64731e28","src_views_BSD_vue-src_components_stickyBottom_vue-src_components_tab_vue":"0baa2b3d","node_modules__vant_3_6_2_vant_es_cell-group_index_mjs-node_modules__vant_3_6_2_vant_es_picker-800d8a":"7bd0e143","src_views_CarInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"07444bd5","src_views_3G4G_vue-src_components_stickyBottom_vue-src_components_tab_vue":"441cb855","src_views_WifiSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"c48a0b3f","src_views_PlatformSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"f8345c03","src_views_ServeInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ce8c351f","node_modules__vant_3_6_2_vant_es_cell_index_mjs-node_modules__vant_3_6_2_vant_es_grid-item_in-c68f54":"c4d0c98f","src_views_CameraSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"b74d8726","src_views_DiskStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue":"e43d3e36","src_views_Network_vue-src_components_stickyBottom_vue-src_components_tab_vue":"33f77fd2","src_views_PlatformStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue":"3ce52f87","src_views_CameraInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"c538ae97","src_views_ActualTime_vue-src_components_stickyBottom_vue-src_components_tab_vue":"46c28f36","src_views_Alarm_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ab3ec9c8","src_views_AlarmInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"1dae0cee","src_views_Demarcate_vue-src_components_stickyBottom_vue-src_components_tab_vue":"a3327a15","src_views_SystemInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"0e84244e","src_views_ADAS_vue-src_components_stickyBottom_vue-src_components_tab_vue":"32f2019b","src_views_DSM1_vue-src_components_stickyBottom_vue-src_components_tab_vue":"1024a968","src_views_DSM2_vue-src_components_stickyBottom_vue-src_components_tab_vue":"9ca9251b","src_views_phaseTwo_AlarmOutput_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ee7b5706","src_components_AlarmConfig_vue":"f52871e4","src_views_phaseTwo_BurglarAlarm_vue-src_components_AlarmConfig_vue-src_components_Alarm_Alarm-b40f5c":"264e204d","src_views_phaseTwo_SessionSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"bb704914","src_components_ComConfig_vue-node_modules_core-js_modules_es_array_filter_js-node_modules__va-fce7b1":"38991506","src_views_phaseTwo_LoadSettings_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComCo-4f92f9":"49725758","src_views_phaseTwo_PTZSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"9f745d95","src_views_phaseTwo_Tyrepressure_vue-src_components_stickyBottom_vue-src_components_tab_vue":"a6f0e757","src_views_phaseTwo_TyrepressureDerails_vue-src_components_stickyBottom_vue-src_components_tab_vue":"09442328","src_views_phaseTwo_CodeStream_vue-src_components_stickyBottom_vue-src_components_tab_vue":"2b400301","src_views_phaseTwo_CodeStreamDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue":"8b7a9ca9","src_views_phaseTwo_TemperatureSensingState_vue-src_components_stickyBottom_vue-src_components-2885e2":"edc6acdc","src_views_phaseTwo_TemperatureSensingStateDetails_vue-src_components_stickyBottom_vue-src_com-d0ca76":"eaaa85d2","src_views_phaseTwo_ComSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"708b0cb6","src_views_phaseTwo_ReversingCamera_vue-src_components_stickyBottom_vue-src_components_tab_vue":"7f98627d","src_views_phaseTwo_ComInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-84499e":"f5d38d38","src_views_phaseTwo_PTZInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-42ceee":"e14c91d7","src_components_Oil_OilBefore3011_vue":"dc870c55","src_views_phaseTwo_ToilLevel_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComConfi-51e5d7":"fd5bbc11","src_views_phaseTwo_AlarmConfigDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue":"dca4985b","src_views_phaseTwo_AlarmConfig_vue-src_components_stickyBottom_vue-src_components_tab_vue":"2db3d7b9","src_views_OilParam_vue-src_components_stickyBottom_vue-src_components_tab_vue":"28a9590f","src_views_phaseTwo_AlarmIoInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"553adbbb","src_views_RotaTestNsor_vue-src_components_stickyBottom_vue-src_components_tab_vue":"321903a5","src_views_OneeireTable_vue-src_components_stickyBottom_vue-src_components_tab_vue":"b6edb791","src_components_Alarm_AlarmPicker_vue-src_components_ComConfig_vue-src_components_Oil_OilBefor-d0c916":"f1bd4e3e","node_modules__vant_3_6_2_vant_es_datetime-picker_index_mjs":"6d278b5b","src_views_IcCard_vue-src_components_stickyBottom_vue-src_components_tab_vue":"33fbdd64","node_modules_core-js_internals_array-iteration_js-node_modules_core-js_modules_es_typed-array-bdceb6":"1bb9c16a","node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_array_is-ar-9239ff":"a4d3d6e5","src_api_http_js":"1388f23c","src_views_mockTest_mock_vue-node_modules_core-js_modules_es_parse-float_js-node_modules_core--945fe1":"d0e5703e","src_views_decode_decodeProto_vue":"afb19fe7","src_views_test_EventSource_vue-src_components_stickyBottom_vue-src_components_tab_vue":"56745bc2","src_views_plaseThree_BootPreview_vue-src_components_stickyBottom_vue-src_components_tab_vue":"da1eface","src_views_plaseThree_AudioFrequency_vue-src_components_stickyBottom_vue-src_components_tab_vue":"75c4464a","src_views_plaseThree_ShutDown_vue-src_components_stickyBottom_vue-src_components_tab_vue":"07d8d337","src_views_plaseThree_PowerSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ef604878","src_views_plaseThree_AnalogTrigger_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ad1101b6","src_views_plaseThree_PreviewOverlay_vue-src_components_stickyBottom_vue-src_components_tab_vue":"1a7b7692","src_views_plaseThree_TextSend_vue-src_components_stickyBottom_vue-src_components_tab_vue":"730ffafa","src_views_phaseFour_SystemTime_vue-src_components_stickyBottom_vue-src_components_tab_vue":"544a23b1","src_views_phaseFour_Dst_vue-src_components_stickyBottom_vue-src_components_tab_vue":"defbd1d0","src_views_test_Chat_vue":"d3c81db7"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"src_views_Home_vue-src_components_stickyBottom_vue-src_components_tab_vue":"c4dde35f","src_views_SettingsIP_vue-src_components_stickyBottom_vue-src_components_tab_vue":"346908cf","src_views_BSD_vue-src_components_stickyBottom_vue-src_components_tab_vue":"6e5186e0","src_views_CarInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_3G4G_vue-src_components_stickyBottom_vue-src_components_tab_vue":"a933bbe3","src_views_WifiSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"554acf94","src_views_PlatformSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_ServeInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_CameraSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_DiskStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_Network_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_PlatformStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_CameraInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_ActualTime_vue-src_components_stickyBottom_vue-src_components_tab_vue":"411f1ac6","src_views_Alarm_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_AlarmInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_Demarcate_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_SystemInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_ADAS_vue-src_components_stickyBottom_vue-src_components_tab_vue":"554acf94","src_views_DSM1_vue-src_components_stickyBottom_vue-src_components_tab_vue":"d058c988","src_views_DSM2_vue-src_components_stickyBottom_vue-src_components_tab_vue":"d058c988","src_views_phaseTwo_AlarmOutput_vue-src_components_stickyBottom_vue-src_components_tab_vue":"d845b5ec","src_views_phaseTwo_BurglarAlarm_vue-src_components_AlarmConfig_vue-src_components_Alarm_Alarm-b40f5c":"a2525d5b","src_views_phaseTwo_SessionSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"47676665","src_views_phaseTwo_LoadSettings_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComCo-4f92f9":"9245ade8","src_views_phaseTwo_PTZSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"9ebd0c89","src_views_phaseTwo_Tyrepressure_vue-src_components_stickyBottom_vue-src_components_tab_vue":"72be65cf","src_views_phaseTwo_TyrepressureDerails_vue-src_components_stickyBottom_vue-src_components_tab_vue":"29c63735","src_views_phaseTwo_CodeStream_vue-src_components_stickyBottom_vue-src_components_tab_vue":"f99edc28","src_views_phaseTwo_CodeStreamDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue":"02aa21fc","src_views_phaseTwo_TemperatureSensingState_vue-src_components_stickyBottom_vue-src_components-2885e2":"70d9bd80","src_views_phaseTwo_TemperatureSensingStateDetails_vue-src_components_stickyBottom_vue-src_com-d0ca76":"b64acc79","src_views_phaseTwo_ComSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"44af3ec5","src_views_phaseTwo_ReversingCamera_vue-src_components_stickyBottom_vue-src_components_tab_vue":"d68be2a9","src_views_phaseTwo_ComInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-84499e":"69025b75","src_views_phaseTwo_PTZInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-42ceee":"868f1e2c","src_views_phaseTwo_ToilLevel_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComConfi-51e5d7":"56f2df28","src_views_phaseTwo_AlarmConfigDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue":"5c10f377","src_views_phaseTwo_AlarmConfig_vue-src_components_stickyBottom_vue-src_components_tab_vue":"1f87c5a3","src_views_OilParam_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_phaseTwo_AlarmIoInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":"4ae2c009","src_views_RotaTestNsor_vue-src_components_stickyBottom_vue-src_components_tab_vue":"65bce956","src_views_OneeireTable_vue-src_components_stickyBottom_vue-src_components_tab_vue":"411f1ac6","src_components_Alarm_AlarmPicker_vue-src_components_ComConfig_vue-src_components_Oil_OilBefor-d0c916":"8b8ccb7f","src_views_IcCard_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_decode_decodeProto_vue":"b7374e77","src_views_test_EventSource_vue-src_components_stickyBottom_vue-src_components_tab_vue":"282f0a59","src_views_plaseThree_BootPreview_vue-src_components_stickyBottom_vue-src_components_tab_vue":"f8aad2ab","src_views_plaseThree_AudioFrequency_vue-src_components_stickyBottom_vue-src_components_tab_vue":"b88cb71a","src_views_plaseThree_ShutDown_vue-src_components_stickyBottom_vue-src_components_tab_vue":"bcee3b2b","src_views_plaseThree_PowerSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":"1e439f27","src_views_plaseThree_AnalogTrigger_vue-src_components_stickyBottom_vue-src_components_tab_vue":"3ea14fa0","src_views_plaseThree_PreviewOverlay_vue-src_components_stickyBottom_vue-src_components_tab_vue":"599567f2","src_views_plaseThree_TextSend_vue-src_components_stickyBottom_vue-src_components_tab_vue":"ddbcf0b6","src_views_phaseFour_SystemTime_vue-src_components_stickyBottom_vue-src_components_tab_vue":"a933bbe3","src_views_phaseFour_Dst_vue-src_components_stickyBottom_vue-src_components_tab_vue":"a933bbe3"}[chunkId] + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "yunweibao_ad:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"src_views_Home_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_SettingsIP_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_BSD_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_CarInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_3G4G_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_WifiSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_PlatformSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_ServeInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_CameraSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_DiskStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_Network_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_PlatformStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_CameraInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_ActualTime_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_Alarm_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_AlarmInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_Demarcate_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_SystemInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_ADAS_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_DSM1_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_DSM2_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_AlarmOutput_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_BurglarAlarm_vue-src_components_AlarmConfig_vue-src_components_Alarm_Alarm-b40f5c":1,"src_views_phaseTwo_SessionSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_LoadSettings_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComCo-4f92f9":1,"src_views_phaseTwo_PTZSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_Tyrepressure_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_TyrepressureDerails_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_CodeStream_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_CodeStreamDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_TemperatureSensingState_vue-src_components_stickyBottom_vue-src_components-2885e2":1,"src_views_phaseTwo_TemperatureSensingStateDetails_vue-src_components_stickyBottom_vue-src_com-d0ca76":1,"src_views_phaseTwo_ComSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_ReversingCamera_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_ComInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-84499e":1,"src_views_phaseTwo_PTZInfo_vue-src_components_AlarmConfig_vue-src_components_Alarm_AlarmPicke-42ceee":1,"src_views_phaseTwo_ToilLevel_vue-src_components_Alarm_AlarmPicker_vue-src_components_ComConfi-51e5d7":1,"src_views_phaseTwo_AlarmConfigDetails_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_AlarmConfig_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_OilParam_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseTwo_AlarmIoInfo_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_RotaTestNsor_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_OneeireTable_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_components_Alarm_AlarmPicker_vue-src_components_ComConfig_vue-src_components_Oil_OilBefor-d0c916":1,"src_views_IcCard_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_decode_decodeProto_vue":1,"src_views_test_EventSource_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_BootPreview_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_AudioFrequency_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_ShutDown_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_PowerSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_AnalogTrigger_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_PreviewOverlay_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_plaseThree_TextSend_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseFour_SystemTime_vue-src_components_stickyBottom_vue-src_components_tab_vue":1,"src_views_phaseFour_Dst_vue-src_components_stickyBottom_vue-src_components_tab_vue":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("src_components_Alarm_AlarmPicker_vue-src_components_ComConfig_vue-src_components_Oil_OilBefor-d0c916" != chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.c6f58dec.js.map