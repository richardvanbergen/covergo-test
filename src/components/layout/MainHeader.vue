<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-white border-gray-200 shadow-sm border-bottom">
    <header
      class="flex content-center justify-between max-w-6xl px-8 py-4 m-auto"
    >
      <div class="flex flex-col items-center gap-1 md:flex-row md:gap-2">
        <img
          alt="Vue logo"
          class="max-h-12 max-w-min"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
        <span class="font-bold heading-3 whitespace-nowrap">Vue Demo</span>
      </div>

      <nav class="flex gap-4">
        <RouterLink to="/" class="inline-flex items-center link"
          >Home</RouterLink
        >
        <RouterLink to="/about" class="inline-flex items-center link"
          >About</RouterLink
        >
      </nav>
    </header>
  </div>
</template>
