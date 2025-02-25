<template>
  <nav>
    <div class="container">
      <NuxtLink to="#">Linkedin</NuxtLink>
      <div class="meta">
        <p>Amsterdam</p>
        <Clock />
        <Toggle>p</Toggle>
      </div>
    </div>
  </nav>
  <Fab />
  <main>
    <section id="section-0">
      <Dots/>
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
    <section id="section-2">
      <div class="container">
        <h2 class="h2">Ik werk op dit moment bij Uselab</h2>
        <p class="p-m">Wij helpen organisaties bij het ontwikkelen van digitale strategieën en producten die waarde
          creëren.</p>
        <NuxtLink to="#">Let's connect</NuxtLink>
      </div>
    </section>
    <section id="section-3">
      <div class="container">
        <h3 class="h3">Geïnteresseerd?</h3>
        <NuxtLink to="#">Let's connect</NuxtLink>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
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
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .meta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
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

#section-1,
#section-2,
#section-3 {
  border-top: 1px solid red;
  height: 100vh;
  background-color: #f2f2f2;
}
</style>