<template>
    <div class="fab-menu">
        <div class="fab-menu__button" @click="active = !active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2257_183" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                    height="24">
                    <rect x="0.966309" y="0.208008" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2257_183)">
                    <path
                        d="M12.9663 22.208C11.5996 22.208 10.308 21.9455 9.09131 21.4205C7.87464 20.8955 6.81214 20.1788 5.90381 19.2705C4.99548 18.3622 4.27881 17.2997 3.75381 16.083C3.22881 14.8663 2.96631 13.5747 2.96631 12.208C2.96631 10.8247 3.23714 9.52467 3.77881 8.30801C4.32048 7.09134 5.05381 6.03301 5.97881 5.13301C6.90381 4.23301 7.98298 3.52051 9.21631 2.99551C10.4496 2.47051 11.7663 2.20801 13.1663 2.20801C14.4996 2.20801 15.758 2.43717 16.9413 2.89551C18.1246 3.35384 19.1621 3.98717 20.0538 4.79551C20.9455 5.60384 21.6538 6.56217 22.1788 7.67051C22.7038 8.77884 22.9663 9.97467 22.9663 11.258C22.9663 13.1747 22.383 14.6455 21.2163 15.6705C20.0496 16.6955 18.633 17.208 16.9663 17.208H15.1163C14.9663 17.208 14.8621 17.2497 14.8038 17.333C14.7455 17.4163 14.7163 17.508 14.7163 17.608C14.7163 17.808 14.8413 18.0955 15.0913 18.4705C15.3413 18.8455 15.4663 19.2747 15.4663 19.758C15.4663 20.5913 15.2371 21.208 14.7788 21.608C14.3205 22.008 13.7163 22.208 12.9663 22.208ZM7.46631 13.208C7.89964 13.208 8.25798 13.0663 8.54131 12.783C8.82464 12.4997 8.96631 12.1413 8.96631 11.708C8.96631 11.2747 8.82464 10.9163 8.54131 10.633C8.25798 10.3497 7.89964 10.208 7.46631 10.208C7.03298 10.208 6.67464 10.3497 6.39131 10.633C6.10798 10.9163 5.96631 11.2747 5.96631 11.708C5.96631 12.1413 6.10798 12.4997 6.39131 12.783C6.67464 13.0663 7.03298 13.208 7.46631 13.208ZM10.4663 9.20801C10.8996 9.20801 11.258 9.06634 11.5413 8.78301C11.8246 8.49967 11.9663 8.14134 11.9663 7.70801C11.9663 7.27467 11.8246 6.91634 11.5413 6.63301C11.258 6.34967 10.8996 6.20801 10.4663 6.20801C10.033 6.20801 9.67464 6.34967 9.39131 6.63301C9.10798 6.91634 8.96631 7.27467 8.96631 7.70801C8.96631 8.14134 9.10798 8.49967 9.39131 8.78301C9.67464 9.06634 10.033 9.20801 10.4663 9.20801ZM15.4663 9.20801C15.8996 9.20801 16.258 9.06634 16.5413 8.78301C16.8246 8.49967 16.9663 8.14134 16.9663 7.70801C16.9663 7.27467 16.8246 6.91634 16.5413 6.63301C16.258 6.34967 15.8996 6.20801 15.4663 6.20801C15.033 6.20801 14.6746 6.34967 14.3913 6.63301C14.108 6.91634 13.9663 7.27467 13.9663 7.70801C13.9663 8.14134 14.108 8.49967 14.3913 8.78301C14.6746 9.06634 15.033 9.20801 15.4663 9.20801ZM18.4663 13.208C18.8996 13.208 19.258 13.0663 19.5413 12.783C19.8246 12.4997 19.9663 12.1413 19.9663 11.708C19.9663 11.2747 19.8246 10.9163 19.5413 10.633C19.258 10.3497 18.8996 10.208 18.4663 10.208C18.033 10.208 17.6746 10.3497 17.3913 10.633C17.108 10.9163 16.9663 11.2747 16.9663 11.708C16.9663 12.1413 17.108 12.4997 17.3913 12.783C17.6746 13.0663 18.033 13.208 18.4663 13.208Z"
                        fill="#1C1B1F" />
                </g>
            </svg>

        </div>
        <div class="fab-menu__items" :class="{ 'fab-menu__items--active': active }">
            <div v-for="i in 5" :key="i" class="fab-menu__item" @click="active = false">
            </div>
        </div>

    </div>
</template>

<script setup>
const active = ref(false);


</script>

<style lang="scss" scoped>
* {
    //border: 1px solid red;
    cursor: pointer;
}

.fab-menu {
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index: 99;

    &__button {
        width: 48px;
        height: 48px;
        background-color: white;
        border-radius: 100%;
        align-content: center;
        user-select: all;
        z-index: 1;
        position: relative;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        transition: all 100ms ease-out;
        
        svg {
            margin: 0 auto;
            display: block;
        }

        &:hover {
            transform: translateY(-4px);
            box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.1);
        }
    }

    &__items {
        position: absolute;
        left: 0;
        top: 0;

        &--active {
            transform: rotate(0deg);
            .fab-menu__item {
                opacity: 1;
                user-select: all;
                @for $i from 0 through 8 {
                    &:nth-child(#{$i}) {
                        transform: rotate($i * 30deg - 90deg) translate(-48px, -48px);
                    }
                }
            }
        }

        &__item {
            width: 24px;
            height: 24px;
            background-color: rgb(218, 192, 158);
            border: 2px solid white;
            border-radius: 100%;
            transform-origin: center;
            position: absolute;
            top: 11px;
            left: 11px;
            transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            opacity: 0;
            user-select: none;
            z-index: 0;
            cursor: not-allowed;

            @for $i from 0 through 8 {
                &:nth-child(#{$i}) {
                    transform: rotate($i * 30deg - 120deg) translate(0, 0);
                }
            }
            &:nth-child(1) {
                background: linear-gradient(45deg, #82d7eb 0%, #d9e9ff 100%);
                cursor: pointer;
            }
            &:nth-child(2){
                background-color: black;
            }
            &:nth-child(3){
                background-color: rgb(255, 216, 23);
            }
            &:nth-child(4){
                background-color: rgb(163, 163, 163);
            }
                        &:nth-child(5){
                background-color: rgb(122, 163, 96);
            }
        }

    }
}
</style>
