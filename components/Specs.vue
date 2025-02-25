<template>
    <div class="specs-component">
        <div class="button-container">
            <div v-for="(button, index) in buttons" :key="index" :class="{
                'selector-button': true,
                'selected': selectedButtonIndex === index,
            }" @click="selectButton(index)">
                <span v-html="button.icon"></span>
                <!-- <div class="connector-line"></div> -->
            </div>
        </div>
        <div class="connector-lines">
            <svg width="498" height="84" viewBox="0 0 498 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :stroke="selectedButtonIndex === 0 ? '#616BFF' : 'rgba(0, 0, 0, 0.1)'"
                    d="M217 84V84C217 65.6655 202.137 50.8024 183.802 50.8024H51.8024C23.745 50.8024 1 28.0574 1 0V0" />

                <path :stroke="selectedButtonIndex === 1 ? '#616BFF' : 'rgba(0, 0, 0, 0.1)'"
                    d="M233 84V84C233 56.2204 210.48 33.7006 182.701 33.7006H158.701C140.088 33.7006 125 18.6123 125 0V0" />

                <path :stroke="selectedButtonIndex === 2 ? '#616BFF' : 'rgba(0, 0, 0, 0.1)'"
                    d="M249 84C249 51.196 249 32.804 249 0" />
                <path :stroke="selectedButtonIndex === 3 ? '#616BFF' : 'rgba(0, 0, 0, 0.1)'"
                    d="M265 84V84C265 56.2204 287.52 33.7006 315.299 33.7006H339.299C357.912 33.7006 373 18.6123 373 0V0" />

                <path :stroke="selectedButtonIndex === 4 ? '#616BFF' : 'rgba(0, 0, 0, 0.1)'"
                    d="M281 84V84C281 65.6655 295.863 50.8024 314.198 50.8024H446.198C474.255 50.8024 497 28.0574 497 0V0" />
            </svg>
        </div>

        <div class="card-container">
                <div v-for="(button, index) in buttons" :key="index" class="card" :class="{
                    'selected-card': selectedButtonIndex === index,
                    'card-adjacent-left': selectedButtonIndex === index + 1,
                    'card-adjacent-right': selectedButtonIndex === index - 1,
                    'card-outer-left': selectedButtonIndex === index + 2,
                    'card-outer-right': selectedButtonIndex === index - 2,
                }">
                    <div class="card-content">
                        <h4 class="h4">{{ button.cardTitle }}</h4>
                        <p>{{ button.cardText }}</p>
                    </div>
                </div>
                <div class="card-downward-line"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedButtonIndex = ref(0); // Initialize to 0 for first button selected

const buttons = ref([
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_2246_1925" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"> <rect width="24" height="24" fill="currentColor"/></mask><g mask="url(#mask0_2246_1925)"><path d="M6 20.9997C5.25 20.9997 4.50833 20.8164 3.775 20.4497C3.04167 20.0831 2.45 19.5997 2 18.9997C2.43333 18.9997 2.875 18.8289 3.325 18.4872C3.775 18.1456 4 17.6497 4 16.9997C4 16.1664 4.29167 15.4581 4.875 14.8747C5.45833 14.2914 6.16667 13.9997 7 13.9997C7.83333 13.9997 8.54167 14.2914 9.125 14.8747C9.70833 15.4581 10 16.1664 10 16.9997C10 18.0997 9.60833 19.0414 8.825 19.8247C8.04167 20.6081 7.1 20.9997 6 20.9997ZM6 18.9997C6.55 18.9997 7.02083 18.8039 7.4125 18.4122C7.80417 18.0206 8 17.5497 8 16.9997C8 16.7164 7.90417 16.4789 7.7125 16.2872C7.52083 16.0956 7.28333 15.9997 7 15.9997C6.71667 15.9997 6.47917 16.0956 6.2875 16.2872C6.09583 16.4789 6 16.7164 6 16.9997C6 17.3831 5.95417 17.7331 5.8625 18.0497C5.77083 18.3664 5.65 18.6664 5.5 18.9497C5.58333 18.9831 5.66667 18.9997 5.75 18.9997H6ZM11.75 14.9997L9 12.2497L17.95 3.29972C18.1333 3.11639 18.3625 3.02055 18.6375 3.01222C18.9125 3.00389 19.15 3.09972 19.35 3.29972L20.7 4.64972C20.9 4.84972 21 5.08305 21 5.34972C21 5.61639 20.9 5.84972 20.7 6.04972L11.75 14.9997Z" fill="currentColor"/></g></svg>`,
        cardTitle: 'Designer at heart',
        cardText: 'Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.',
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_2246_1925" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"> <rect width="24" height="24" fill="currentColor"/></mask><g mask="url(#mask0_2246_1925)"><path d="M6 20.9997C5.25 20.9997 4.50833 20.8164 3.775 20.4497C3.04167 20.0831 2.45 19.5997 2 18.9997C2.43333 18.9997 2.875 18.8289 3.325 18.4872C3.775 18.1456 4 17.6497 4 16.9997C4 16.1664 4.29167 15.4581 4.875 14.8747C5.45833 14.2914 6.16667 13.9997 7 13.9997C7.83333 13.9997 8.54167 14.2914 9.125 14.8747C9.70833 15.4581 10 16.1664 10 16.9997C10 18.0997 9.60833 19.0414 8.825 19.8247C8.04167 20.6081 7.1 20.9997 6 20.9997ZM6 18.9997C6.55 18.9997 7.02083 18.8039 7.4125 18.4122C7.80417 18.0206 8 17.5497 8 16.9997C8 16.7164 7.90417 16.4789 7.7125 16.2872C7.52083 16.0956 7.28333 15.9997 7 15.9997C6.71667 15.9997 6.47917 16.0956 6.2875 16.2872C6.09583 16.4789 6 16.7164 6 16.9997C6 17.3831 5.95417 17.7331 5.8625 18.0497C5.77083 18.3664 5.65 18.6664 5.5 18.9497C5.58333 18.9831 5.66667 18.9997 5.75 18.9997H6ZM11.75 14.9997L9 12.2497L17.95 3.29972C18.1333 3.11639 18.3625 3.02055 18.6375 3.01222C18.9125 3.00389 19.15 3.09972 19.35 3.29972L20.7 4.64972C20.9 4.84972 21 5.08305 21 5.34972C21 5.61639 20.9 5.84972 20.7 6.04972L11.75 14.9997Z" fill="currentColor"/></g></svg>`,
        cardTitle: 'Card Two Title',
        cardText: 'Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.',
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_2246_1925" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"> <rect width="24" height="24" fill="currentColor"/></mask><g mask="url(#mask0_2246_1925)"><path d="M6 20.9997C5.25 20.9997 4.50833 20.8164 3.775 20.4497C3.04167 20.0831 2.45 19.5997 2 18.9997C2.43333 18.9997 2.875 18.8289 3.325 18.4872C3.775 18.1456 4 17.6497 4 16.9997C4 16.1664 4.29167 15.4581 4.875 14.8747C5.45833 14.2914 6.16667 13.9997 7 13.9997C7.83333 13.9997 8.54167 14.2914 9.125 14.8747C9.70833 15.4581 10 16.1664 10 16.9997C10 18.0997 9.60833 19.0414 8.825 19.8247C8.04167 20.6081 7.1 20.9997 6 20.9997ZM6 18.9997C6.55 18.9997 7.02083 18.8039 7.4125 18.4122C7.80417 18.0206 8 17.5497 8 16.9997C8 16.7164 7.90417 16.4789 7.7125 16.2872C7.52083 16.0956 7.28333 15.9997 7 15.9997C6.71667 15.9997 6.47917 16.0956 6.2875 16.2872C6.09583 16.4789 6 16.7164 6 16.9997C6 17.3831 5.95417 17.7331 5.8625 18.0497C5.77083 18.3664 5.65 18.6664 5.5 18.9497C5.58333 18.9831 5.66667 18.9997 5.75 18.9997H6ZM11.75 14.9997L9 12.2497L17.95 3.29972C18.1333 3.11639 18.3625 3.02055 18.6375 3.01222C18.9125 3.00389 19.15 3.09972 19.35 3.29972L20.7 4.64972C20.9 4.84972 21 5.08305 21 5.34972C21 5.61639 20.9 5.84972 20.7 6.04972L11.75 14.9997Z" fill="currentColor"/></g></svg>`,
        cardTitle: 'Card Three Title',
        cardText: 'Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.',
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_2246_1925" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"> <rect width="24" height="24" fill="currentColor"/></mask><g mask="url(#mask0_2246_1925)"><path d="M6 20.9997C5.25 20.9997 4.50833 20.8164 3.775 20.4497C3.04167 20.0831 2.45 19.5997 2 18.9997C2.43333 18.9997 2.875 18.8289 3.325 18.4872C3.775 18.1456 4 17.6497 4 16.9997C4 16.1664 4.29167 15.4581 4.875 14.8747C5.45833 14.2914 6.16667 13.9997 7 13.9997C7.83333 13.9997 8.54167 14.2914 9.125 14.8747C9.70833 15.4581 10 16.1664 10 16.9997C10 18.0997 9.60833 19.0414 8.825 19.8247C8.04167 20.6081 7.1 20.9997 6 20.9997ZM6 18.9997C6.55 18.9997 7.02083 18.8039 7.4125 18.4122C7.80417 18.0206 8 17.5497 8 16.9997C8 16.7164 7.90417 16.4789 7.7125 16.2872C7.52083 16.0956 7.28333 15.9997 7 15.9997C6.71667 15.9997 6.47917 16.0956 6.2875 16.2872C6.09583 16.4789 6 16.7164 6 16.9997C6 17.3831 5.95417 17.7331 5.8625 18.0497C5.77083 18.3664 5.65 18.6664 5.5 18.9497C5.58333 18.9831 5.66667 18.9997 5.75 18.9997H6ZM11.75 14.9997L9 12.2497L17.95 3.29972C18.1333 3.11639 18.3625 3.02055 18.6375 3.01222C18.9125 3.00389 19.15 3.09972 19.35 3.29972L20.7 4.64972C20.9 4.84972 21 5.08305 21 5.34972C21 5.61639 20.9 5.84972 20.7 6.04972L11.75 14.9997Z" fill="currentColor"/></g></svg>`,
        cardTitle: 'Card Four Title',
        cardText: 'Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.',
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_2246_1925" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"> <rect width="24" height="24" fill="currentColor"/></mask><g mask="url(#mask0_2246_1925)"><path d="M6 20.9997C5.25 20.9997 4.50833 20.8164 3.775 20.4497C3.04167 20.0831 2.45 19.5997 2 18.9997C2.43333 18.9997 2.875 18.8289 3.325 18.4872C3.775 18.1456 4 17.6497 4 16.9997C4 16.1664 4.29167 15.4581 4.875 14.8747C5.45833 14.2914 6.16667 13.9997 7 13.9997C7.83333 13.9997 8.54167 14.2914 9.125 14.8747C9.70833 15.4581 10 16.1664 10 16.9997C10 18.0997 9.60833 19.0414 8.825 19.8247C8.04167 20.6081 7.1 20.9997 6 20.9997ZM6 18.9997C6.55 18.9997 7.02083 18.8039 7.4125 18.4122C7.80417 18.0206 8 17.5497 8 16.9997C8 16.7164 7.90417 16.4789 7.7125 16.2872C7.52083 16.0956 7.28333 15.9997 7 15.9997C6.71667 15.9997 6.47917 16.0956 6.2875 16.2872C6.09583 16.4789 6 16.7164 6 16.9997C6 17.3831 5.95417 17.7331 5.8625 18.0497C5.77083 18.3664 5.65 18.6664 5.5 18.9497C5.58333 18.9831 5.66667 18.9997 5.75 18.9997H6ZM11.75 14.9997L9 12.2497L17.95 3.29972C18.1333 3.11639 18.3625 3.02055 18.6375 3.01222C18.9125 3.00389 19.15 3.09972 19.35 3.29972L20.7 4.64972C20.9 4.84972 21 5.08305 21 5.34972C21 5.61639 20.9 5.84972 20.7 6.04972L11.75 14.9997Z" fill="currentColor"/></g></svg>`,
        cardTitle: 'Card Five Title',
        cardText: 'Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed lorem tada et.  dolor sit met mit dem.',
    },
]);

const selectButton = (index) => {
    selectedButtonIndex.value = index;
};

const generateCurve = (index) => {
    const startX = 10 + index * 80; // Start position varies per button
    return `M ${startX},10 C ${startX},50 50,80 100,100`;
};

</script>

<style lang="scss">
$blue: #616BFF;


.specs-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
}

.button-container {
    display: flex;
    justify-content: space-between;
    width: 552px;
    gap: 20px;
    margin-bottom: 4px;
}

.selector-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: all 150ms ease-out;
    box-shadow: 0px 0px 5px rgba(97, 107, 255, 0);

    svg {
        color: #333333;
    }



    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 5px rgba(97, 107, 255, 0.1);

        svg {
            color: $blue;
        }


    }

    &.selected {
        background-color: $blue;

        svg {
            color: white;
        }
    }
}

.connector-lines {
    height: 84px;
}

.card-container {
    display: flex;
    justify-content: center;
    position: relative;
    background-color: blue;
    min-height: 165px;


        .card {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 32px;
            position: absolute;
            top: 0;
            transition: all 0.3s ease;
            width: 360px;
            height: 165px;
            text-align: left;
            border: 1px solid rgba(0, 0, 0, .1);

            &.selected-card {
                z-index: 10;
                /* Highest z-index for selected card */
                transform: scale(1);
            }

            &.card-adjacent-left,
            &.card-adjacent-right {
                z-index: 5;
                /* Medium z-index for adjacent cards */
                transform: scale(0.95) translateX(0);
            }

            &.card-outer-left,
            &.card-outer-right {
                z-index: 1;
                /* Lowest z-index for outer cards */
                transform: scale(0.9) translateX(0);
            }

            &.card-adjacent-left {
                transform: scale(0.95) translateX(-20px);
                /* Adjust translation as needed */
            }

            &.card-adjacent-right {
                transform: scale(0.95) translateX(20px);
                /* Adjust translation as needed */
            }

            &.card-outer-left {
                transform: scale(0.9) translateX(-40px);
                /* Adjust translation as needed */
            }

            &.card-outer-right {
                transform: scale(0.9) translateX(40px);
                /* Adjust translation as needed */
            }


            &.card:not(.selected-card) {
                pointer-events: none;
                /* Make unselected cards non-interactive */
            }

            .card-content {
                .h4 {
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 12px;
                }

                p {
                    font-weight: 300;
                    font-size: 14px;
                    color: #808080;
                }
            }
        }
    


}






.card-connector-line {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 40px;
    background-color: #6750a4;
    display: none;
}

.card.selected-card .card-connector-line {
    display: block;
}

.card-downward-line {
    position: absolute;
    top: calc(163px + 0px);
    /* Position just below the card container */
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100px;
    /* Adjust height as needed */
    background: linear-gradient(to top, transparent, rgba(0, 0, 0, .1));
    /* Purple color */
}
</style>