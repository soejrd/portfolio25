<template>
        <div class="specs">
          <div class="specs-buttons">
            <form action="#">
              <input type="radio" name="radio" id="radio-1" checked>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2246_1925" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2246_1925)">
                  <path
                    d="M6 20.9997C5.25 20.9997 4.50833 20.8164 3.775 20.4497C3.04167 20.0831 2.45 19.5997 2 18.9997C2.43333 18.9997 2.875 18.8289 3.325 18.4872C3.775 18.1456 4 17.6497 4 16.9997C4 16.1664 4.29167 15.4581 4.875 14.8747C5.45833 14.2914 6.16667 13.9997 7 13.9997C7.83333 13.9997 8.54167 14.2914 9.125 14.8747C9.70833 15.4581 10 16.1664 10 16.9997C10 18.0997 9.60833 19.0414 8.825 19.8247C8.04167 20.6081 7.1 20.9997 6 20.9997ZM6 18.9997C6.55 18.9997 7.02083 18.8039 7.4125 18.4122C7.80417 18.0206 8 17.5497 8 16.9997C8 16.7164 7.90417 16.4789 7.7125 16.2872C7.52083 16.0956 7.28333 15.9997 7 15.9997C6.71667 15.9997 6.47917 16.0956 6.2875 16.2872C6.09583 16.4789 6 16.7164 6 16.9997C6 17.3831 5.95417 17.7331 5.8625 18.0497C5.77083 18.3664 5.65 18.6664 5.5 18.9497C5.58333 18.9831 5.66667 18.9997 5.75 18.9997H6ZM11.75 14.9997L9 12.2497L17.95 3.29972C18.1333 3.11639 18.3625 3.02055 18.6375 3.01222C18.9125 3.00389 19.15 3.09972 19.35 3.29972L20.7 4.64972C20.9 4.84972 21 5.08305 21 5.34972C21 5.61639 20.9 5.84972 20.7 6.04972L11.75 14.9997Z"
                    fill="#FCF5FF" />
                </g>
              </svg>
              </input>
              <input type="radio" name="radio" id="radio-2" />
              <input type="radio" name="radio" id="radio-3" />
              <input type="radio" name="radio" id="radio-4" />
              <input type="radio" name="radio" id="radio-5" />
              <label class="radio-container">One
                <input type="radio" checked="checked" name="radio">
                <span class="checkmark"></span>
              </label>
            </form>
          </div>
          <div class="specs-cards">
            <div class="specs-card">
              <h4 class="h4">Designer at heart</h4>
              <p>Lorem ipsum dolor sit met mit dem. achmed lorem tada et. Lorem ipsum dolor sit met mit dem. achmed
                lorem tada et. dolor sit met mit dem.</p>
            </div>
          </div>
        </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .specs {
    &-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 16px;

      form {
        input {
          width: 56px;
          height: 56px;
          background-color: blue;

          &:checked {}
        }
      }
    }
  }
  </style>