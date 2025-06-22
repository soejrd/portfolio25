<template>
    <div class="toggle-switch" :class="{ checked: isChecked }" @click="toggle">
        <p class="lang">{{ isChecked ? 'EN' : 'NL' }}</p>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useI18n();

const isChecked = ref(locale.value === 'en');

const toggle = () => {
    isChecked.value = !isChecked.value;
    setLocale(isChecked.value ? 'en' : 'nl');
};
</script>
<style lang="scss" scoped>
* {
    
}
.toggle-switch {
    background-color: #ddd;
    border-radius: 100px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.08) inset;
    cursor: pointer;
    flex: none;
    height: 24px;
    position: relative;
    transition: background-color 150ms;
    width: 52px;
    
    p.lang {
        user-select: none;
        position: absolute;
        bottom: 12px;
        right: 8px;
        display: inline;
        line-height: 0;
        font-size: 12px;
        font-weight: bold;
        opacity: 0.5;
        transition: right 150ms;
    }
}

.toggle-switch::before {
    background: #fff;
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    border-radius: 0.625em;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    left: 2px;
    position: absolute;
    top: 2px;
    will-change: left;
    transition: all 150ms ease-out;
}

.checked {
    background-color: #aac3f2;
    p.lang {
    right: 28px;
    }
}

.toggle-switch:not(.checked) p.lang {
    right: 8px;
}

.checked::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    left: 30px;
}

.toggle-switch:hover {
    //box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15) inset;

}

.toggle-switch:hover::before {
    background-image: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.1));
    //box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}
</style>
