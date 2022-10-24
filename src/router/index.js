import { createRouter, createMemoryHistory } from 'vue-router';


const Home = () => import('@/views/Home.vue');
const SettingsIP = () => import('@/views/SettingsIP.vue');
const BSD = () => import('@/views/BSD.vue');
const CarInfo = () => import('@/views/CarInfo.vue');
const In3G4G = () => import('@/views/3G4G.vue');
const WifiSettings = () => import('@/views/WifiSettings.vue');
const PlatformSettings = () => import('@/views/PlatformSettings.vue');
const ServeInfo = () => import('@/views/ServeInfo.vue');
const CameraSettings = () => import('@/views/CameraSettings.vue');
const DiskStatus = () => import('@/views/DiskStatus.vue');
const Network = () => import('@/views/Network.vue');
const PlatformStatus = () => import('@/views/PlatformStatus.vue');
const CameraInfo = () => import('@/views/CameraInfo.vue');
const ActualTime = () => import('@/views/ActualTime.vue');
const Alarm = () => import('@/views/Alarm.vue');
const AlarmInfo = () => import('@/views/AlarmInfo.vue');
const Demarcate = () => import('@/views/Demarcate.vue');
const SystemInfo = () => import('@/views/SystemInfo.vue');
const ADAS = () => import('@/views/ADAS.vue'); // ADAS
const DSM1 = () => import('@/views/DSM1.vue'); // BSM1
const DSM2 = () => import('@/views/DSM2.vue'); // BSM1


const RotaTestNsor = () => import('@/views/RotaTestNsor.vue'); // 正反转
const OneeireTable = () => import('@/views/OneeireTable.vue'); // 温度
const OilParam = () => import('@/views/OilParam.vue'); // 油感


const routes = [
    {
        path: '/',
        component: Home,
        name: "首页"
    },
    {
        path: '/DSM1',
        component: DSM1,
        name: 'DSM1 标定',
    },
    {
        path: '/DSM2',
        component: DSM2,
        name: 'DSM2 标定',
    },
    {
        path: '/ADAS',
        component: ADAS,
        name: 'ADAS 标定',
    },
    {
        path: '/SystemInfo',
        component: SystemInfo,
        name: '系统设置',
    },
    {
        path: '/Demarcate',
        component: Demarcate,
        name: '远程标定',
    },
    {
        path: '/AlarmInfo',
        component: AlarmInfo,
        name: '报警输入设置页',
    },
    {
        path: '/RotaTestNsor',
        component: RotaTestNsor,
        name: '正反转',
    },
    {
        path: '/OneeireTable',
        component: OneeireTable,
        name: '温度',
    },
    {
        path: '/OilParam',
        component: OilParam,
        name: '油感',
    },
    {
        path: '/SettingsIP',
        component: SettingsIP,
        name: '设置IP',
    },
    {
        path: '/BSD',
        component: BSD,
        name: 'BSD',
    },
    {
        path: '/CarInfo',
        component: CarInfo,
        name: '车辆信息',
    },
    {
        path: '/3G4G',
        component: In3G4G,
        name: '3G/4G',
    },
    {
        path: '/WifiSettings',
        component: WifiSettings,
        name: 'WIFI设置',
    },
    {
        path: '/PlatformSettings',
        component: PlatformSettings,
        name: '平台配置',
    },
    {
        path: '/ServeInfo',
        component: ServeInfo,
        name: '服务器详细',
    },
    {
        path: '/CameraSettings',
        component: CameraSettings,
        name: '摄像头设置',
    },
    {
        path: '/DiskStatus',
        component: DiskStatus,
        name: '磁盘状态',
    },
    {
        path: '/Network',
        component: Network,
        name: '网络状态',
    },
    {
        path: '/PlatformStatus',
        component: PlatformStatus,
        name: '平台状态',
    },
    {
        path: '/CameraInfo',
        component: CameraInfo,
        name: '摄像头详情',
    },
    {
        path: '/ActualTime',
        component: ActualTime,
        name: '实时状态',
    },
    {
        path: '/Alarm',
        component: Alarm,
        name: '报警输入状态',
    }

];

const router = createRouter({
    routes,
    history: createMemoryHistory()
});

export default router;