/* eslint-disable vue/multi-word-component-names */
import { defineComponent, computed } from "vue";
import { Button } from "vant";

export default defineComponent({
    props: {
        modelValue: { type: Object }
    },
    emits: ['update:modelValue'],
    setup(props, ctx) {
        const data = computed({
            get() {
                return props.modelValue;
            },
            set(newValue) {
                ctx.emit('update:modelValue', newValue);
            }
        });

        const setData = () => {
            data.value = {
                "name": "111",
                "age": 19
            }
        }

        return () => <div class="chat">
            <Button onClick={e => setData(e)}>按钮 { data.value.age }</Button>
        </div>
    }
});