import { ref } from 'vue';
export default function stickyBottom () {
    const disabled = ref(false);
    const loading = ref(false);
    // 设置禁用
    const setDisabled = () => {
        disabled.value = true;
        loading.value = true;
        setTimeout(() => {
            disabled.value = false;
            loading.value = false;
        }, 1000);
    };
    return {
        setDisabled,
        loading,
        disabled
    }
}