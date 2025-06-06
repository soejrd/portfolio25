<template>
  <nav>
    <div class="container">
      <NuxtLink to="#">
        Linkedin
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path
              d="M8.60016 4.41L3.94078 9.0825C3.83578 9.1875 3.71101 9.24 3.56646 9.24C3.42226 9.24 3.29766 9.1875 3.19266 9.0825C3.08766 8.9775 3.03516 8.85273 3.03516 8.70818C3.03516 8.56398 3.08766 8.43938 3.19266 8.33438L7.86516 3.675H3.87516C3.72641 3.675 3.60163 3.62477 3.50083 3.52432C3.40038 3.42352 3.35016 3.29875 3.35016 3.15C3.35016 3.00125 3.40038 2.87648 3.50083 2.77568C3.60163 2.67523 3.72641 2.625 3.87516 2.625H9.12516C9.27391 2.625 9.39851 2.67523 9.49896 2.77568C9.59976 2.87648 9.65016 3.00125 9.65016 3.15V8.4C9.65016 8.54875 9.59976 8.67335 9.49896 8.7738C9.39851 8.8746 9.27391 8.925 9.12516 8.925C8.97641 8.925 8.85181 8.8746 8.75136 8.7738C8.65056 8.67335 8.60016 8.54875 8.60016 8.4V4.41Z"
              fill="black" />
          </g>
        </svg>

      </NuxtLink>
      <div class="meta">
        <div class="main">
          <p>Amsterdam</p>
          <Clock />
        </div>
        <Toggle>p</Toggle>
      </div>
    </div>
  </nav>
  <Fab />
  <main>
    <section id="section-0">
      <!-- <Dots /> -->
      <div class="container">
        <div class="hero">
          <h1 class="h1">Ik ontwerp apps met <b>kwaliteit</b> waar je <b>blij</b> van wordt.</h1>
          <p class="p-l">Gebruiksvriendelijke applicaties en interne systemen om effectiever digitale mankracht te
            kunnen
            leveren. Met <i>expertise</i>, <i>passie</i> en <i>techniek</i>.</p>
          <Button :to="'https://www.linkedin.com/in/sjoerdklatser'">Let's connect</Button>
        </div>
      </div>
    </section>
    <section id="section-1">
      <div class="container">
        <div class="hero">
          <h2 class="h2">Brede interesses met jke moeder lorem ipsum dolor sit amet.</h2>
          <p class="p-m">Leverage the power of serverless architecture to deliver your lorem ipsum dolor moeder ja noe
            euhef.</p>
        </div>
        <Specs />
      </div>
    </section>
    <section id="section-ervaring">
      <div class="container">
        <div class="main">
          <h2 class="h2">Ik werk op dit moment bij
            <NuxtLink to="#">
              Uselab
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M8.60016 4.41L3.94078 9.0825C3.83578 9.1875 3.71101 9.24 3.56646 9.24C3.42226 9.24 3.29766 9.1875 3.19266 9.0825C3.08766 8.9775 3.03516 8.85273 3.03516 8.70818C3.03516 8.56398 3.08766 8.43938 3.19266 8.33438L7.86516 3.675H3.87516C3.72641 3.675 3.60163 3.62477 3.50083 3.52432C3.40038 3.42352 3.35016 3.29875 3.35016 3.15C3.35016 3.00125 3.40038 2.87648 3.50083 2.77568C3.60163 2.67523 3.72641 2.625 3.87516 2.625H9.12516C9.27391 2.625 9.39851 2.67523 9.49896 2.77568C9.59976 2.87648 9.65016 3.00125 9.65016 3.15V8.4C9.65016 8.54875 9.59976 8.67335 9.49896 8.7738C9.39851 8.8746 9.27391 8.925 9.12516 8.925C8.97641 8.925 8.85181 8.8746 8.75136 8.7738C8.65056 8.67335 8.60016 8.54875 8.60016 8.4V4.41Z"
                    fill="currentColor" />
                </g>
              </svg>
            </NuxtLink>
          </h2>
          <p class="p-m">Wij helpen organisaties bij het ontwikkelen van digitale producten en strategieën die waarde toevoegen.</p>
        </div>
        <div class="sub">
          <ul>
            <li class="job">
              <NuxtLink to="#">
                <img src="/uselab.jpg" alt="" width="64px" height="64px" id="img-uselab">
                <div class="text">
                  <h5>
                    Uselab
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="8" height="8" rx="4" fill="#75DD88" />
                    </svg>
                  </h5>
                  <h6>Digital Product Designer</h6>
                  <p>2024 - nu</p>
                </div>
              </NuxtLink>
            </li>
            <li class="job">
              <NuxtLink to="#">
                <img src="/clutch.jpg" alt="" width="64px" height="64px" id="img-clutch">
                <div class="text">
                  <h5>Clutch</h5>
                  <h6>Brand Designer</h6>
                  <p>2024 - nu</p>
                </div>
              </NuxtLink>
            </li>
            <li class="job">
              <NuxtLink to="#">
                <img src="/endeavour.jpg" alt="" width="64px" height="64px" id="img-endeavour">
                <div class="text">
                  <h5>Endeavour</h5>
                  <h6>Digital Designer</h6>
                  <p>2024 - nu</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="section-3">
      <div class="container">
        <h3 class="h3">Geïnteresseerd?</h3>
        <Button :to="'https://www.linkedin.com/in/sjoerdklatser'">Let's connect</Button>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
$color-text-secondary: #6C7176;
$color-text-primary: #131D28;
$color-text-primary-color: #003270;


body {
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Geist, sans-serif;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1200px;
  padding-left: 16px;
  padding-right: 16px;
}

.h1 {
  font-size: 74px;
  font-weight: 400;
  letter-spacing: -2px;
  line-height: 120%;
}

.p-l {
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 120%;
}

nav {
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 99;

  .container {
    width: 100%;
    max-width: 1200px;
    padding-left: 16px;
    padding-right: 16px;
    background-color: transparent;
    padding: 12px;
    border-radius: 120px;
    //backdrop-filter: blur(4px);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all 200ms ease-out;
    //background-color: rgba(from #f2f2f2 r g b / 0.5);

    &:hover {
      backdrop-filter: blur(4px);
      background-color: rgba(from #f2f2f2 r g b / 0.5);
    }

    a {
      text-decoration: none;
      color: black;

      display: block;
      background: linear-gradient(transparent, black);
      background-size: 0% 1px;
      background-repeat: no-repeat;
      background-position: 0% 100%;
      transition: all 200ms ease-out;

      &:hover {
        background: linear-gradient(#76A1E6, #76A1E6);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: 0 100%;
        color: #3367bb;
      }
    }

    .meta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 32px;

      .main {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        opacity: 0.5;
        transition: all 200ms;
        cursor: wait;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

#section-0 {
  height: 100vh;
  background-color: #f2f2f2;

  .hero {
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 1;
    position: relative;
  }
}

#section-1 {
  height: auto;

  .hero {
    max-width: 580px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 64px;

    h2 {

      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      text-align: center;
      color: #000000;

    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 21px;
      line-height: 25px;
      text-align: center;
      color: #808080;

    }
  }

}

#section-ervaring {


  background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(180deg, #B3B5B5 50%, #D9DBDD 100%);




  .container {
    display: flex;
    flex-direction: row;
    gap: 100px;

    .main {
      width: 600px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h2 {

        font-style: normal;
        font-weight: 350;
        font-size: 64px;
        line-height: 77px;
        letter-spacing: -0.02em;
        color: #131D28;

        a {
          color: #003270;
          text-decoration: none;
          font-weight: 350;
          position: relative;

          svg {
            width: 24px;
            height: 24px;
            position: absolute;
            top: 0;
            right: -20px;
            color: $color-text-primary-color;
            opacity: 0.3;
          }
        }
      }

      p {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: #6C7176;


      }
    }

    .sub {
      ul {
        display: flex;
        flex-direction: column;
        gap: 32px;


        li.job {
          list-style: none;
          transition: all 100ms ease-out;

          &:hover {
            transform: scale(1.03);
          }

          a {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 16px;
            min-width: 264px;
            text-decoration: none;
            color: black;

            img {
              &#img-uselab {
                box-shadow: 0px 4px 16px rgba(255, 0, 0, 0.2);
              }

              &#img-clutch {
                box-shadow: 0px 4px 16px rgba(0, 0, 255, 0.2);
              }

              &#img-endeavour {
                box-shadow: 0px 4px 16px rgba(69, 0, 76, 0.2);
              }
            }

            .text {
              display: flex;
              flex-direction: column;
              gap: 2px;
              flex-grow: 1;

              h5 {
                font-size: 16px;
                font-weight: 600;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 6px;
              }

              h6 {
                color: $color-text-primary;
                font-size: 14px;
                font-weight: 400;
                padding-bottom: 2px;
                color: #131D28;
              }

              p {
                font-size: 14px;
                color: $color-text-secondary;
                font-weight: 400;
                line-height: 18px;
                letter-spacing: -0.01em;
              }
            }
          }
        }
      }
    }
  }
}

#section-3 {
  h3 {
    text-align: center;
    font-size: 36px;
  }
}

#section-1,
#section-ervaring,
#section-3 {
  border-top: 1px solid red;
  height: 100vh;
  background-color: #f2f2f2;
}
</style>