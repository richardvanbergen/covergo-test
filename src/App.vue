<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastNotification from './components/layout/ToastNotification.vue'
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import LayoutContainer from './components/layout/LayoutContainer.vue'
</script>

<template>
  <LayoutContainer>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </LayoutContainer>
</template>

<style>
@import '@/assets/base.css';
</style>
