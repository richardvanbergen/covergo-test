<script setup lang="ts">
const typographyHeadingPreformatted = `Typography
plugin styling`
</script>

<template>
  <section class="max-w-[80ch] mx-auto">
    <h2
      class="mt-12 mb-12 font-sans text-6xl font-extrabold leading-tight whitespace-pre-line"
      v-html="typographyHeadingPreformatted"
    />

    <article class="typography-plugin">
      <h1>Many that live deserve death. Some that die deserve life.</h1>
      <p>
        Woodlands payment <strong>Osgiliath tightening</strong>. Barad-dur
        follow belly comforts tender tough bell? Many that live deserve death.
      </p>
      <h2>Didn't melt fairer keepsakes since Fellowship elsewhere.</h2>
      <p>
        <a href="https://www.google.com">See some links</a>
      </p>
      <p>
        Woodlands payment <strong>Osgiliath tightening</strong>. Barad-dur
        follow belly comforts tender tough bell? Many that live deserve death.
        Some that die deserve life. Outwitted teatime grasp defeated before
        stones reflection corset seen animals Saruman's call?
      </p>
      <h3>
        Tad survive ensnare joy mistake courtesy Bagshot Row. Tender respectable
        success Valar impressive unfriendly bloom scraped?
      </h3>
      <p>
        Ligulas step drops both?
        <em>
          You shall not pass! Tender respectable success Valar impressive
          unfriendly bloom scraped?
        </em>
        Branch hey-diddle-diddle pony trouble'll sleeping during jump Narsil.
      </p>
      <h4>
        North valor overflowing sort Iáve mister kingly money? Curse you and all
        the halflings!
      </h4>
      <p>
        Curse you and all the halflings! Deserted anytime Lake-town burned caves
        balls. Smoked lthilien forbids Thrain?
      </p>
      <ul class="list-disc list-inside">
        <li>Adamant.</li>
        <li>Southfarthing!</li>
        <li>Witch-king.</li>
        <li>Precious.</li>
        <li>Gaffer's!</li>
      </ul>
    </article>

    <h2 class="mt-8 mb-4 font-sans text-6xl font-extrabold">Custom styling</h2>

    <article class="test-typography">
      <h2 class="mb-4 heading-lg">
        Didn't melt fairer keepsakes since Fellowship elsewhere. (heading-lg)
      </h2>
      <h3 class="heading-md">
        Tad survive ensnare joy mistake courtesy Bagshot Row. Tender respectable
        success Valar impressive unfriendly bloom scraped? (heading-md)
      </h3>
      <h4 class="heading-sm">
        North valor overflowing sort Iáve mister kingly money? Curse you and all
        the halflings! (heading-sm)
      </h4>
      <p>
        Curse you and all the
        <a href="https://www.googe.com" class="link">halflings (link)</a>!
        Deserted anytime Lake-town burned caves balls. Smoked lthilien forbids
        Thrain? Many that live deserve death. Some that die deserve life.
        Outwitted teatime grasp defeated before stones reflection corset seen
        animals Saruman's call?
      </p>
    </article>
  </section>
</template>

<style>
.test-typography > * {
  @apply mb-4;
}
</style>
