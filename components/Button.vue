<template>
    <NuxtLink :to=to target="_blank">
        <div class="button">
            <div class="bg"></div>
            <div class="profile">
                <div class="status"></div>
            </div>
            <div class="text">
                <slot></slot>
            </div>
            <div class="linkedin">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2263_710)">
                        <g filter="url(#filter0_i_2263_710)">
                            <path
                                d="M4.18998 5.79077H0.576455C0.416081 5.79077 0.286133 5.92078 0.286133 6.08109V17.6898C0.286133 17.8502 0.416081 17.9801 0.576455 17.9801H4.18998C4.35036 17.9801 4.48031 17.8502 4.48031 17.6898V6.08109C4.48031 5.92078 4.35036 5.79077 4.18998 5.79077Z"
                                fill="#70A7FF" />
                            <path
                                d="M2.38448 0.0197754C1.06966 0.0197754 0 1.08828 0 2.40164C0 3.71558 1.06966 4.78449 2.38448 4.78449C3.69825 4.78449 4.76704 3.71552 4.76704 2.40164C4.7671 1.08828 3.69825 0.0197754 2.38448 0.0197754Z"
                                fill="#70A7FF" />
                            <path
                                d="M13.3812 5.5022C11.9299 5.5022 10.857 6.1261 10.2063 6.83501V6.08104C10.2063 5.92073 10.0763 5.79072 9.91595 5.79072H6.45536C6.29499 5.79072 6.16504 5.92073 6.16504 6.08104V17.6898C6.16504 17.8501 6.29499 17.9801 6.45536 17.9801H10.061C10.2214 17.9801 10.3513 17.8501 10.3513 17.6898V11.9461C10.3513 10.0107 10.877 9.25665 12.2262 9.25665C13.6956 9.25665 13.8124 10.4654 13.8124 12.0457V17.6898C13.8124 17.8502 13.9423 17.9801 14.1027 17.9801H17.7097C17.87 17.9801 18 17.8502 18 17.6898V11.3222C18 8.44427 17.4512 5.5022 13.3812 5.5022Z"
                                fill="#70A7FF" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_i_2263_710" x="0" y="0.0197754" width="19" height="18.9604"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="1" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.250989 0 0 0 0 0.652572 0 0 0 1 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2263_710" />
                        </filter>
                        <clipPath id="clip0_2263_710">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        default: '/',
    }
})


</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    width: fit-content;
    //color: #333333;
    position: relative;
    z-index: 10;
}

.button {
    width: fit-content;
    background-color: white;
    border-radius: 128px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    padding: 8px;
    background: linear-gradient(117.02deg, #FAFAFA 26.19%, #F5F5F5 66.89%);
    //box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.05);
    //box-shadow: inset 1px 1px 1px white, inset -1px -1px 1px rgba(0, 0, 0, .1), 8px 8px 8px rgba(0, 0, 0, 0.05);
    transition: all 100ms ease-out;
    position: relative;
    z-index: 10;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 128px;
        background: linear-gradient(117.02deg, #FAFAFA 26.19%, #F5F5F5 66.89%);
        box-shadow: inset 1px 1px 1px white, inset -1px -1px 1px rgba(0, 0, 0, .1), 8px 8px 8px rgba(0, 0, 0, 0.05);

        z-index: -1;
        transition: all 100ms ease-out;

    }

    .profile {
        width: 48px;
        height: 48px;
        background-color: #76A1E6;
        border-radius: 128px;
        background-image: url('profile.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;

        .status {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 8px;
            height: 8px;
            border-radius: 100%;
            background-color: #00FF00;
            outline: 2px solid #f8f8f8;
        }
    }

    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        background-color: #565656;
        text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
    }

    .linkedin {
        padding-left: 4px;
        padding-right: 12px;

    }

    &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        box-shadow: inset -2px -2px 8px rgba(0, 0, 0, 0.3);
        z-index: -2;
        border-radius: 128px;
        transition: all 100ms ease-out;
        //opacity: 0;
    }

    &:hover {
        transform: translateY(-4px);

        .bg {
            
            box-shadow: inset 1px 1px 1px white, inset -1px -1px 1px rgba(0, 0, 0, .1), 8px 12px 8px rgba(0, 0, 0, 0.05);
        }

        &::before {
            transform: translateY(4px);
        }

    }

    &:active {
        transform: translateY(2px);
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        .bg {
            box-shadow: inset -1px -1px 1px white, inset 4px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0);
            
        }

        &::before {
            transform: translateY(-2px);
            opacity: 0;
        }


    }
}
</style>