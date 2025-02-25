<template>
    <div class="toggle-switch" :class="{ checked: isChecked }" @click="toggle">
        <p class="lang">EN</p>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        required: false,
        type: Boolean
    }
})

const isChecked = ref(false)

const toggle = () => {
    isChecked.value = !isChecked.value
}
</script>

<style lang="scss" scoped>
.toggle-switch {
    background-color: #ddd;
    border-radius: 100px;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset;
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
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08);
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    left: 2px;
    position: absolute;
    top: 2px;
    transition: left 150ms;
    will-change: left;
}

.checked {
    background-color: #aac3f2;
    p.lang {
    right: 28px;
    }
}

.checked::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    left: 30px;
}

.toggle-switch:hover {
    box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
}

.toggle-switch:hover::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0375) 1em);
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}
</style>