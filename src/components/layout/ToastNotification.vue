<script setup lang="ts">
import { NotificationType } from '@/lib/notify'
import { computed } from 'vue'

const props = defineProps<{
  notificationType: NotificationType
}>()

const colors = computed(() => {
  switch (props.notificationType) {
    case 'success':
      return {
        bg: 'bg-green-500',
        text: 'text-green-500',
        border: 'border-green-500',
      }
    case 'error':
      return {
        bg: 'bg-red-500',
        text: 'text-red-500',
        border: 'border-red-500',
      }
    case 'warning':
      return {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
      }
    default:
      return {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
      }
  }
})
</script>

<template>
  <div
    class="fixed inset-0 flex items-end justify-end p-6 px-4 py-6 pointer-events-none"
  >
    <div class="w-full max-w-sm">
      <div
        class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-lg border border-red-500"
      >
        <div class="flex items-center justify-center w-12" :class="colors.bg">
          <svg
            class="w-6 h-6 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
            />
          </svg>
        </div>

        <div class="px-4 py-2">
          <div class="mx-3">
            <span class="font-semibold leading-none" :class="colors.text"
              >Title</span
            >
            <p class="text-sm text-gray-600">Some other text</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NotificationGroup :group="notificationType">
    <div
      class="fixed inset-0 flex items-end justify-end p-6 px-4 py-6 pointer-events-none"
    >
      <div class="w-full max-w-sm">
        <Notification
          v-slot="{ notifications }"
          enter="transform ease-out duration-300 transition"
          enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
          enter-to="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
          move="transition duration-500"
          move-delay="delay-300"
        >
          <div
            class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-lg border"
            :class="colors.border"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div
              class="flex items-center justify-center w-12"
              :class="colors.bg"
            >
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                />
              </svg>
            </div>

            <div class="px-4 py-2">
              <div class="mx-3">
                <span class="font-semibold leading-none" :class="colors.text">{{
                  notification.title
                }}</span>
                <p class="text-sm text-gray-600">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
