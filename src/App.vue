<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastNotification from './components/layout/ToastNotification.vue'
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import LayoutContainer from './components/layout/LayoutContainer.vue'
import MainContent from './components/layout/MainContent.vue'
</script>

<template>
  <LayoutContainer>
    <MainHeader />
    <MainContent>
      <RouterView />
    </MainContent>
    <MainFooter />
  </LayoutContainer>

  <ToastNotification notification-type="success" />
  <ToastNotification notification-type="error" />
  <ToastNotification notification-type="warning" />
  <ToastNotification notification-type="notice" />
</template>

<style>
@import '@/assets/base.css';
</style>
