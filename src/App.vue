<script setup lang="ts">
import { RouterView } from 'vue-router'
import ToastNotification from './components/layout/ToastNotification.vue'
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import LayoutContainer from './components/layout/LayoutContainer.vue'
import { notify } from './lib/notify'

setTimeout(() => {
  console.log('notify')
  notify('success', 'Success', 'You are a winner.')
})

setTimeout(() => {
  console.log('error')
  notify('error', 'Error', 'You broke something, idiot.')
}, 3000)
</script>

<template>
  <LayoutContainer>
    <MainHeader />
    <RouterView />
    <MainFooter />
  </LayoutContainer>

  <ToastNotification notification-type="success" />
  <ToastNotification notification-type="error" />
</template>

<style>
@import '@/assets/base.css';
</style>
