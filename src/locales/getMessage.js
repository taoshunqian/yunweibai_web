import phaseTwo from './phaseTwoGetMessage';
import phaseThree from './phaseThreeGetMessage';

export default {
    ru: {
        ...phaseTwo.ru,
        ...phaseThree.ru,
        home: "Главная",
        toast: ["Команда запроса выполнена успешно", "успешно установлен", "Ошибка установки", "Камера не поддерживает установку разрешения", "Идет поиск,Пожалуйста, подождите..."],
        picker: ["Подтвердить", "Отмена"],
        carInfo: {
            label: ["ID устройства", "Номер телефона", "Гос.Номер", "Цвет гос.номера",
                "Код города", "Заводской номер", "VIN", "Классификация номерных знаков", "Номер двигателя", "Тип соглашения"],
            placeholder: [
                "Пожалуйста, введите ID устройства", "Пожалуйста, введите номер телефона", "Пожалуйста, введите гос.номер", "Пожалуйста, введите код города",
                "Пожалуйста, введите номер производителя", "Пожалуйста, введите номер VIN", "Пожалуйста, введите категорию  гос.номер", "Пожалуйста, введите номер двигателя"
            ],
            columns: "Синий, Желтый, Черный, Белый, Зеленый, Желто-зеленый, Зеленый градиент, Другое",
            navTitle: "Информация об автомобиле",

        },
        netWork3g4g: {
            label: ["Включить", "Номер телефона", "Точка доступа", "Имя пользователя", "Пароль"],
            placeholder: ["Введите номер телефона", "Введите точку доступа", "Введите имя пользователя", "Введите пароль", "Введите MTU"
            ],
            button: ["Заводские настройки"],
            navTitle: "Сеть передачи данных",
            note: "Номер телефона – это номер Интернета, предоставленный оператором.,не мой номер телефона"
        },
        actualTime: {
            title: [
                "Имя: Состояние видео", "Имя: Видеовход", "Имя: Состояние сети", "Имя: Состояние позиционирования"
            ],
            value: [
                "Статус: Нет", "Статус: Нет", "Статус: ", "Статус: "
            ],
            label: [
                "Информация: Нет", "Информация: Нет", "Информация: ", "Информация: "
            ],
            navTitle: "Статус в реальном времени",
        },
        alarm: {
            title: [
                "Номер IO", "Включение зуммера", "Имя события", "Задержка", "Количество непрерывных снимков", "Включить", "Тип", "Тип отчета", "Режим моментального снимка", "Интервал серийной съемки"
            ],
            navTitle: "IO",
            start: ["Отключено", "Включено"],
            type: ["Отрицательный триггер", "Положительный триггер"],
            alarm: ["Не сообщать", "Обычный", "Аварийная тревога"],
            cameraType: ["Одиночный снимок", "Двойной снимок", "Серийный снимок"],
        },
        alarmInfo: {
            label: ["Включить", "Зуммер", "Название события", "Тип",
                "Задержка", "Тип отчета", "Режим моментального снимка", "Количество непрерывных снимков", "Интервал непрерывного снимка", "Тип протокола", "Логическая инверсия", "Канал переключения экрана", "Номер канала записи по тревоге", "захват номера канала"],

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
            navTitle: "IO",
        },
        cameraInfo: {
            title: [
                "Включить", "Разрешение", "Горизонтальное зеркало", "Вертикальное зеркало", "Установить разрешение"
            ],
            navTitle: ["Камера", "Настройки"],
        },
        cameraSettings: {
            title: [
                "Формат видео"
            ],
            navTitle: "Настройки камеры",
        },
        demarcate: {
            button: [
                "Калибровка ADAS", "Калибровка BSM1", "Калибровка BSM2", "Завершение работы мастера"
            ],
            navTitle: "Удаленная калибровка",
        },
        diskStatus: {
            title: [
                "Имя", "Статус диска", "Общая емкость", "Оставшаяся емкость", "Формат", "Статус использования"
            ],
            diskStatusLang: "--,Разблокировано, Нет, --, Неформатировано, Форматирование, Неиспользовано, Ошибка, Полное, Перезаписано, Запись, Обычный",
            navTitle: "Диск",
            load: "Формат...",
            alert: ["Подскажите", "Инструкция выдана, Проверьте пожалуйста, Началось ли форматирование устройства"],
            alertMsg: ["Недействительно", "Форматирование...", "Форматирование успешно"],
            stateName: "Разблокировано, Нет, Неформатировано, Исключение, Обычное",
            tipsConfirm: "Подтвердить",
        },
        platformSettings: {
            title: [
                "Сервер", "IP-адрес сервера", "Порт сервера", "Статус сервера", "Статус устройства"
            ],
            navTitle: "Настройка платформы",
            deviceState: ["Не в сети, В сети, Срок действия лицензии истек, Ограничения, Конфликт, Недействителен, Не включен"],
            serveState: ["Включено", "Отключено", "Отключено"],
            logonState: ["Автоматический", "Ручной", "Неизвестный"],
        },
        platformStatus: {
            title: [
                "Платформа", "IP-адрес сервера/имя домена", "Порт сервера", "Включено ли", "Регистрация"
                , "Тип протокола", "Тип платформы", "Региональные стандарты", "Статус устройства"
            ],
            navTitle: "Платформа",
            columns3: "Платформа стандартного протокола 808, Tongtianxing, Sany, Xingguan, Chaoyue, Yunke, Dongguan Yicheng, CRRC, Xiamen Swissquote",
            columns4: "Цзянсу, Гуандун, Синьчуаньбяо, Шэньси",
            deviceState: ["Не в сети, В сети, Срок действия лицензии истек, Ограничения, Конфликт, Недействителен, Не включен"],
            serveState: ["Включено", "Отключено", "Отключено"],
            logonState: ["Автоматический", "Ручной", "Неизвестный"],
        },
        rotaTestNsor: {
            title: [
                "Включить", "Тип", "Логическая инверсия", "Период обнаружения импульса", "Состояние"
                , "Тип соглашения"
            ],
            placeholder: [
                "Пожалуйста, введите период обнаружения пульса"
            ],
            radio: [
                "Включить", "Выключить"
            ],
            navTitle: "Датчик прямого и заднего хода",
            columns2: "Трехточечный магнитный контактный тип, Импульсный тип AD, Одноточечный магнитный всасывающий тип",
            columns3: "Стоп, Вперед, Назад",
        },
        serveInfo: {
            title: [
                "Включить", "Регистрация", "IP/доменное имя", "Порт", "Тип протокола"
                , "Тип платформы", "Местный стандарт", "Статус устройства"
            ],
            placeholder: [
                "Пожалуйста, введите IP/имя домена", "Пожалуйста, введите порт"
            ],
            radio: [
                "Автоматический/Ручной"
            ],
            navTitle: "Сервер ",
            columns3: "Платформа стандартного протокола 808, Tongtianxing, Sany, Xingguan, Chaoyue, Yunke, Dongguan Yicheng, CRRC, Xiamen Swissquote",
            columns4: "Цзянсу, Гуандун, Синьчуаньбяо, Шэньси",
            errorMsg: "IP/имя домена не может быть на китайском",
        },
        settingsIP: {
            title: [
                "Включить", "Имя WIFI", "Пароль", "Тип IP", "IP-адрес"
                , "Маска подсети", "Шлюз по умолчанию", "DNS", "DNS-сервер", "Подтвердить"
            ],
            button: [
                "Поиск"
            ],
            placeholder: [
                "Введите имя WIFI", "Введите пароль", "Введите IP-адрес", "Введите маску подсети", "Введите шлюз по умолчанию", "Введите DNS-сервер",
            ],
            radio: [
                "Динамический", "Статический", "Динамический DNS", "Статический DNS"
            ],
            navTitle: "Настроить Wi-Fi",
            connectState: "--, Отключено, Подключено, Не подключено",
            itemList: ["Имя Wi-Fi: ", "Вам нужен пароль: "],
            errorMsg: "Имя WIFI не может быть китайским",
        },
        systemInfo: {
            navTitle: "Оборудование",
            cellList: "Модель устройства, Серийный номер устройства, Номер версии оборудования, Номер версии программного обеспечения, Номер версии MCU, Авторизация, Имя производителя, Модель модуля, Информация о версии модуля, Номер SN модуля, IMSI SIM-карты, Информация о модуле GPS, Код продукта (ADAS), Номер версии оборудования, Номер версии программного обеспечения, Идентификатор устройства, Статус ADAS, Статус DSM, Статус авторизации, Статус работы, Статус настройки",
        },
        wifiSettings: {
            title: [
                "Включить", "Тип модуля", "Номер", "Имя WIFI", "Статус"
            ],
            navTitle: "Настройки Wi-Fi",
            modelValue: "Обнаружение..., авторизовано, неавторизовано",
            warrantValue: "Проверка, нет модуля, 2.4G",
            wifiStatus: "--, Отключено, Подключено, Не подключено",
        },
        newWork: {
            columns: "Ничего, Позиционирование, Блокировка, Выдвижение антенны, Короткое замыкание антенны, Внешний GPS в сети, Внешняя аномалия GPS, Ошибка! тестирование, Нет модуля, Несанкционированное, Есть! ,EVDO,WCDMA!сбой питания,Да - нормальная блокировка,Да - Ограниченная блокировка,ничего,есть,ненормальный!сбой питания,ничего,слабый,ОК,сильный!сбой питания,подключение,не подключено,сбой входа в систему,сбой набора номера, набор номера!Ethernet,WIFI,3G,4G,2G,ничего!ничего,он-лайн,офлайн!офф-лайн,он-лайн,Срок действия авторизации истекает,быть ограниченным,конфликт,недействительный,не включен",
            titleColumn: "GPS, модуль WIFI, статус WIFI, Тип модуля, SIM-карта, Сигнал 3G/4G, Коммутируемый доступ, Тип сети, Видеосервер, Количество спутников",
            navTitle: "Сеть",
            serverName: "Стандартный сервер министерства "
        },
        adas: {
            label: [
                "Ширина автомобиля", "Расстояние от камеры до левого борта автомобиля", "Высота установки камеры", "Расстояние от камеры до переднего бампера"
            ],
            placeholder: [
                "Введите ширину автомобиля", "Введите расстояние", "Введите ширину", "Введите расстояние"
            ],
            button: "Начать калибровку",
            navTitle: "Калибровка ADAS",
        },
        dsm: {
            button: ["Калибровка DSM1", "Калибровка DSM2"],
            dialog: [
                "Подсказка",
                "Чтобы выйти из режима мастера, нажмите ОК. Если вам нужно установить другие функции, нажмите Отмена",
                "Подтвердить", "Отменить"
            ],
            navTitle: "Калибровка DSM",
        },
        oilParam: {
            label: [
                "Текущий уровень топлива", "Текущее количество топлива", "Тип", "Порог срабатывания сигнализации"
                , "Количество калибровок", "Общая емкость", "Максимум датчика"
            ],
            placeholder: [
                "Введите текущий уровень топлива", "Введите текущий объем топлива", "Введите порог срабатывания сигнализации"
                , "Пожалуйста, Введите номер калибровки", "Пожалуйста, введите общую емкость", "Пожалуйста, Введите максимальные данные датчика"
            ],
            title: "Тип",
            navTitle: "Датчик топлива"
        },
        popupCheckbox: {
            button: [
                "Отмена", "Подтвердить"
            ],
        },
        stickyBottom: {
            button: [
                "Предыдущий", "Сохранить", "Далее", "Запрос", "Сохранить", "Полный мастер"
            ],

            toast: "Не более~"
        },
        tab: {
            leftText: "Вернуть",
            rightText: "Лог",
            dialog: [
                "Советы",
                "Чтобы завершить работу мастера, нажмите ОК. Если вам нужно настроить другие функции, нажмите Отмена",
                "Подтвердить", "Отменить"
            ],
            stateArr: [
                "Нормально", "Подключено успешно", "Отключено", "Повторно подключается", "Время ожидания пульса истекло", "Wi-Fi отключен", "Wi-Fi подключен"
            ]
        }
    },
    en: {
        ...phaseTwo.en,
        ...phaseThree.en,
        home: "HOME",
        toast: ["Query command issued successfully", "Issued successfully", "Failed to issue", "This camera does not support setting resolution", "Searching, please wait..."],
        picker: ["Confirm", "Cancel"],
        carInfo: {
            //  iphone number 修改为 platform number
            label: ["Device ID", "JTID", "license plate number", "License plate color",
                "Area Code", "Manufacturer No", "VIN frame number", "License plate classification", "Engine number", "Protocol"],
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
                "Protocol", "Logical negation", "Switch channel", "Alarm video channel", "Capture channel"],

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
            navTitle: "Alarm input status",
        },
        cameraInfo: {
            title: [
                "Enable", "Resolution", "Horizontal Mirror", "Vertical Mirror", "Set resolution"
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
                "name", "Disk Status", "Total capacity", "Remaining capacity", "format", "Usage status"
            ],
            diskStatusLang: "--,Unlocked,nothing,--,unformatted,Formatting,not used,error,already expired,cover,On video,normal",
            navTitle: "Disk Status",
            load: "format...",
            alert: ["Tips", " The command has been issued. Please check whether the device starts formatting "],
            alertMsg: ["invalid", "Formatting ...", "Format succeeded"],
            stateName: "Unlocked,nothing,unformatted,abnormal,normal",
            tipsConfirm: "Confirm",
        },
        platformSettings: {
            title: [
                "Server", "Server IP", "Server Port", "Server Status", "Device status"
            ],
            navTitle: "Platform configuration",
            // deviceState: ["on-line", "off-line", "unknown"],
            deviceState: ["off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled"],
            serveState: ["Enable", "Not enabled", "unknown"],
            logonState: ["Auto", "Manual", "unknown"],
        },
        platformStatus: {
            title: [
                "platform ", "Server IP / domain name", "Server Port", "Enable", "register"
                , "Protocol", "Platform Type", "Local standards", "Device status"
            ],
            navTitle: "Platform status",
            columns3: "808 Standard protocol platform,Tongtian Star,San Yi,Xing Guan,Chao Yue,Yun Ke,Dongguan Yicheng,Zhong Che,Xiamen Ruixun",
            columns4: "Jiangsu,Guangdong, Xinchuan Biao,Shaanxi",
            //  deviceState: ["on-line", "off-line", "unknown"],
            deviceState: ["off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled"],
            serveState: ["Enable", "Not enabled", "unknown"],
            logonState: ["automatic", "Manual", "unknown"],

        },
        rotaTestNsor: {
            title: [
                "Enable", "type", "Logical negation", "Pulse detection cycle", "state"
                , "Protocol"
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
                "Enable", "register", "IP/domain name", "port", "Protocol"
                , "Platform Type", "Local standards", "Device State"
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
            errorMsg: " IP Cannot be in Chinese",
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
            itemList: ["wifi Name: ", "Require password: "],
            errorMsg: " WIFI name Cannot be in Chinese",
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
            columns: "nothing,Positioning,locking,Antenna pull out,Antenna short circuit,External GPS online,External GPS anomaly,error!Testing,No module,Unauthorized,have!Not connected,connect!power failure,No module,Testing,abnormal,LTE,EVDO,WCDMA!power failure,Yes - normal locking,Yes - Limited locking,nothing,have,abnormal!power failure,nothing,weak,OK,strong!power failure,connect,Not connected,login has failed,Dialing failed,dialing!Ethernet,WIFI,3G,4G,2G,nothing!nothing,on-line,off-line!off-line,on-line,Authorization expires,be limited to,conflict,invalid,not enabled",
            titleColumn: "GPS,WIFI Model,WIFI Status,Model Type,SIM,3G/4G,Dial,NewWork,Video server,Satellites",
            navTitle: "NewWork",
            serverName: "Departmental server "
        },
        adas: {
            label: [
                "Vehicle width", "Camera to left side of vehicle", "Camera installation height", "Camera to bumper"
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
                "Confirm", "Cancel"
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
                "Back", "Preservation", "Next", "Query", "Preservation", "Completing the wizard"
            ],
            toast: "No more ~"
        },
        tab: {
            leftText: "Back",
            rightText: "Log",
            dialog: [
                "Tips",
                "To end the wizard, click OK. If you need to set other functions, click Cancel",
                "Confirm", "Cancel"
            ],
        }
        , icCard: {
            label: [" Driving License Number ", "Driving License validity period ", " Professional Qualification Certificate Number ", "Professional Qualification Certificate Validity period ",
                "Driver's name ", " Driver's code ", " Company ", " gender ", " star rating "],
            placeholder: [
                "Please enter the driving license number ", " Please enter the validity period of the driving license ", "Please enter the employment Qualification Certificate number ", " Please enter the validity period of the Employment Qualification Certificate ",
                "Please enter driver's name", "Please enter company", "Please enter star rating."
            ],
            columns: "Men,women",
            navTitle: "IC card",
            dateShowTitle: " Select Year Month Day",
            star: "Start"
        }
    },
    zh: {
        ...phaseTwo.zh,
        ...phaseThree.zh,
        home: "首页",
        toast: ["查询指令成功", "设置成功", "设置失败", "该摄像头不支持设置分辨率", "正在搜索,请稍等..."],
        picker: ["确认", "取消"],
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
                "延时", "上报类型", "抓拍模式", "连拍张数", "连拍间隔", "协议类型", "逻辑反", "画面切换通道", "报警录像通道号", "抓拍通道号"],

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
                "名称", "磁盘状态", "总容量", "剩余容量", "格式化", "使用状态"
            ],
            diskStatusLang: "--,未锁,无,--,未格式化,格式化中,未使用,错误,已满,覆盖,录像中,正常",
            navTitle: "磁盘",
            load: "格式化...",
            alert: ["提示", " 指令已下发, 请查看设备是否开始格式化 "],
            alertMsg: ["无效", "格式化中...", "格式化成功"],
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
                , "协议类型", "平台类型", "各地标准", "设备状态"
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
                , "平台类型", "地方标准", "设备状态"
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
                "确认", "取消"
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
                "上一步", "保存", "下一步", "查询", "保存", "完成向导"
            ],

            toast: "没有更多了~"
        },
        tab: {
            leftText: "返回",
            rightText: "Log",
            dialog: [
                "提示",
                "结束向导, 请点击确认, 如果还需设置其他功能, 请点击取消. ",
                "确认", "取消"
            ],
            stateArr: [
                "正常", "连接成功", "断开",
                "重连中", "心跳超时", "wifi断开", "wifi连接"
            ]
        }
        , icCard: {
            label: ["驾驶证号码", "驾驶证有效期", "从业资格证号码", "从业资格证有效期",
                "驾驶员姓名", "驾驶员代码", "公司", "性别", "星级"],
            placeholder: [
                "请输入驾驶证号码", "请输入驾驶证有效期", "请输入从业资格证号码", "请输入从业资格证有效期",
                "请输入驾驶员姓名", "请输入公司", "请输入星级"
            ],
            columns: "男,女",
            navTitle: "IC卡",
            dateShowTitle: "选择年月日",
            star: "星"
        }
    },
    tw: {
        ...phaseTwo.tw,
        ...phaseThree.tw,
        home: "首頁",
        toast: ["査詢指令下發成功", "設定成功", "設定失敗", "該鏡頭不支持設定分辯率", "正在搜索,請稍等..."],
        picker: ["確認", "取消"],
        carInfo: {
            label: ["車機D", "手機號碼", "車牌號", "車牌顏色",
                "區域代碼", "製造商編號", "VIN車架號", "車牌分類", "發動機號", "協定類型"],
            placeholder: [
                "請輸入車機ID", "請輸入手機號碼", "請輸入車牌號", "請輸入區域代碼",
                "請輸入製造商編號", "請輸入VIN車架號", "請輸入車牌分類", "請輸入發動機號"
            ],
            columns: "色,黃色,黑色,白色,綠色,黃綠色,漸變綠,其它",
            navTitle: "車輛資訊",

        },
        netWork3g4g: {
            label: ["啟用", "電話號碼", "接入點", "用戶名", "密碼"],
            placeholder: ["請輸入電話號碼", "請輸入接入點"
                , "請輸入用戶名", "請輸入密碼", "請輸入MTU"
            ],
            button: ["出廠設定"],
            navTitle: "數據網絡",
            note: "電話號碼是運營商提供的上網號,不是本機號"
        },
        actualTime: {
            title: [
                "名稱: 視頻狀態", "名稱：視頻輸入", "名稱：網絡狀態", "名稱：定位狀態"
            ],
            value: [
                "狀態：無", "狀態：無", "狀態: ", "狀態: "
            ],
            label: [
                "資訊：無", "資訊：無", "資訊: ", "資訊: "
            ],
            navTitle: "即時狀態",
        },
        alarm: {
            title: [
                "IO序號", "蜂鳴器啟用",
                "事件名稱", "延遲", "連拍張數", "啟用", "類型"
                , "上報類型", "抓拍模式", "連拍間隔"
            ],
            navTitle: "IO",
            start: ["不啟用", "啟用"],
            type: ["負觸發", "正觸發"],
            alarm: ["不上報", "正常", "緊急報警"],
            cameraType: ["單拍", "雙拍", "連拍"],
        },
        alarmInfo: {
            label: ["啟用", "蜂鳴器", "事件名稱", "類型",
                "延遲", "上報類型", "抓拍模式", "連拍張數", "連拍間隔", "協定類型", "邏輯反", "面切換通道", "報警錄影通道號", "抓拍通道號"],

            placeholder: ["請輸入事件名稱", "請輸入延時", "請輸入連拍張數", "請輸入連拍間隔"],
            logical: ["使能", "不使能"],
            radio: ["正觸發", "負觸發"],
            columns2: "不上報,正常,緊急報警",
            columns3: "單拍,雙拍,連拍",
            channelTitle: "否",
            navTitle: "IO",
        },
        cameraInfo: {
            title: [
                "啟用", "分辯率", "水准鏡像", "垂直鏡像", "設定分辯率"
            ],
            navTitle: ["鏡頭 ", " 設定"],
        },
        cameraSettings: {
            title: [
                "視頻制式"
            ],
            navTitle: "鏡頭設定",
        },
        demarcate: {
            button: [
                "ADAS標定", "BSM1標定", "BSM2標定", "結束嚮導"
            ],
            navTitle: "遠程標定",
        },
        diskStatus: {
            title: [
                "名稱", "磁片狀態", "總容量", "剩餘容量", "格式化", "使用狀態"
            ],
            diskStatusLang: "--,未鎖,無,--,未格式化,格式化中,未使用,錯誤,已滿,覆蓋,錄影中,正常",
            navTitle: "磁片",
            load: "格式化...",
            alert: ["提示", " 指令已下發, 請查看車機是否開始格式化 "],
            alertMsg: ["無效", "格式化中...", "格式化成功"],
            stateName: "未鎖,無,未格式化,异常,正常",
            tipsConfirm: "確認",
        },
        platformSettings: {
            title: [
                "伺服器", "伺服器IP", "伺服器端口", "伺服器狀態", "車機狀態"
            ],
            navTitle: "平臺配寘",
            deviceState: ["離線,上線,授權過期,受限,衝突,無效,未啟用"],
            serveState: ["啟用", "禁用", "未啟用"],
            logonState: ["啟用", "禁用", "未啟用"],
        },
        platformStatus: {
            title: [
                "平臺 ", "伺服器IP / 域名", "伺服器端口", "是否啟用", "注册"
                , "協定類型", "平臺類型", "地方標準", "車機狀態"
            ],
            navTitle: "平臺",
            columns3: "808標準協定平臺,通天星,三一,星冠,超越,雲科,東莞億程,中車,廈門瑞訊",
            columns4: "江蘇,廣東,新川標,陝西",
            deviceState: ["離線,上線,授權過期,受限,衝突,無效,未啟用"],
            serveState: ["啟用", "禁用", "未啟用"],
            logonState: ["啟用", "禁用", "未啟用"],
        },
        rotaTestNsor: {
            title: [
                "啟用", "類型", "邏輯反", "脈衝檢測週期", "狀態"
                , "協定類型"
            ],
            placeholder: [
                "請輸入脈衝檢測週期"
            ],
            radio: [
                "啟用", "關閉"
            ],
            navTitle: "正反轉感測器",
            columns2: "三點磁觸式,脈衝AD式,單點磁吸式",
            columns3: "停止,正轉,反轉",
        },
        serveInfo: {
            title: [
                "啟用", "注册", "IP/域名", "端口", "協定類型"
                , "平臺類型", "地方標準", "車機狀態"
            ],
            placeholder: [
                "請輸入IP/域名", "請輸入端口"
            ],
            radio: [
                "自動", "手動"
            ],
            navTitle: "伺服器 ",
            columns3: "808標準協定平臺,通天星,三一,星冠,超越,雲科,東莞億程,中車,廈門瑞訊",
            columns4: "江蘇,廣東,新川標,陝西",
            errorMsg: " IP/域名 不能為中文",
        },
        settingsIP: {
            title: [
                "啟用", "WIFI名稱", "密碼", "IP 類型", "IP 地址"
                , "子網路遮罩", "預設閘道", "DNS", "DNS伺服器", "確認"
            ],
            button: [
                "搜索"
            ],
            placeholder: [
                "請輸入WIFI名稱", "請輸入密碼", "請輸入IP地址", "請輸入子網路遮罩"
                , "請輸入預設閘道", "請輸入DNS伺服器",
            ],
            radio: [
                "動態", "靜態", "動態DNS", "靜態DNS"
            ],
            navTitle: "設定WIFI",
            connectState: "--,禁用,已連接,未連接",
            itemList: ["wifi名稱: ", "是否需要密碼: "],
            errorMsg: " WIFI名稱 不能為中文",
        },
        systemInfo: {
            navTitle: "車機",
            cellList: "車機型號,車機序號,硬體版本號,軟件版本號,MCU版本號,授權,製造商名稱,模塊型號,模塊版本資訊,模塊SN號,SIM卡IMSI,GPS模塊資訊,（ADAS）產品代號,硬體版本號,軟件版本號,車機ID,ADAS狀態,DSM狀態,授權狀態,運行狀態,定制狀態",
        },
        wifiSettings: {
            title: [
                "啟用", "模塊類型", "序號", "WIFI名稱", "狀態"
            ],
            navTitle: "WIFI設定",
            modelValue: "檢測中…,已授權,未授權",
            warrantValue: "檢查中,無模塊,2.4G",
            wifiStatus: "--,禁用,已連接,未連接",
        },
        newWork: {
            columns: "無,定位中,鎖定,天線拔出,天線短路,外部GPS上線,外部GPS异常,出錯！ 檢測中,無模塊,未授權,有！ 未連接,連接！ 斷電,無模塊,檢測中,异常,LTE,EVDO,WCDMA！ 斷電,有-鎖定正常,有-鎖定受限,無,有,异常！ 斷電,無,弱,中,强！ 斷電,連接,未連接,注册失敗,撥號失敗,撥號中！ 以太網,WIFI,3G,4G,2G,無！ 無,上線,離線！ 離線,上線,授權過期,受限,衝突,無效,未啟用",
            titleColumn: "GPS,WIFI模塊,WIFI狀態,模塊類型,SIM卡,3G/4G訊號,撥號,網絡類型,視訊伺服器,衛星數",
            navTitle: "網絡",
            serverName: "環保機伺服器 "
        },
        adas: {
            label: [
                "車輛寬度", "鏡頭到車輛左側距離", "鏡頭安裝高度", "鏡頭到車頭保險杠距離"
            ],
            placeholder: [
                "請輸入車輛寬度", "請輸入距離", "請輸入寬度", "請輸入距離"
            ],
            button: "開始標定",
            navTitle: "ADAS標定",
        },
        dsm: {
            button: ["DSM1 標定", "DSM2 標定"],
            dialog: [
                "提示",
                "退出嚮導模式,請點擊確認,如果還需設定其他功能,請點擊取消",
                "確認", "取消"
            ],
            navTitle: "DSM 標定",
        },
        oilParam: {
            label: [
                "當前油位", "當前油量", "類型", "報警閾值"
                , "標定數目", "總容量", "感測器最大值"
            ],
            placeholder: [
                "請輸入當前油位", "請輸入當前油量", "請輸入報警閾值"
                , "請輸入標定數目", "請輸入總容量", "請輸入感測器數據最大值"
            ],
            title: "類型",
            navTitle: "油感感測器"
        },
        popupCheckbox: {
            button: [
                "取消", "確認"
            ],
        },
        stickyBottom: {
            button: [
                "上一步", "保存", "下一步", "査詢", "保存", "完成嚮導"
            ],

            toast: "沒有更多了~"
        },
        tab: {
            leftText: "返回",
            rightText: "Log",
            dialog: [
                "提示",
                "結束嚮導,請點擊確認,如果還需設定其他功能,請點擊取消. ",
                "確認", "取消"
            ],
            stateArr: [
                "正常", "连接成功", "断开", "重连中", "心跳超时", "wifi断开", "wifi连接"
            ]
        }
        , icCard: {
            label: ["驾驶证号码", "驾驶证有效期", "从业资格证号码", "从业资格证有效期",
                "驾驶员姓名", "驾驶员代码", "公司", "性别", "星级"],
            placeholder: [
                "请输入驾驶证号码", "请输入驾驶证有效期", "请输入从业资格证号码", "请输入从业资格证有效期",
                "请输入驾驶员姓名", "请输入公司", "请输入星级"
            ],
            columns: "男,女",
            navTitle: "IC卡",
            dateShowTitle: "选择年月日"
        }
    },
}
