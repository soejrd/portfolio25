<template>
    <p ref="time" class="time">
        {{hour}}<span class="colon">:</span>{{minute}}
    </p>
</template>

<script setup>

const time = ref(null);
const hour = ref(null);
const minute = ref(null);
const formattedTime = ref(null);

const updateClock = () => {
    const amsterdamTime = new Date()
    const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
    });
    formattedTime.value = formatter.format(amsterdamTime);
    hour.value = formattedTime.value.slice(0, 2);
    minute.value = formattedTime.value.slice(3, 5);
    setTimeout(updateClock, 1000 - (amsterdamTime % 1000))
}

onMounted(() => {
    updateClock();

})

</script>

<style lang="scss" scoped>
@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.colon {
    animation: blink 1.5s step-start infinite;
}
</style>