<script setup lang="ts">
import { NotificationType } from '@/lib/notify'
import { computed } from 'vue'
import { PhWarning, PhSmiley, PhHandWaving, PhSmileySad } from 'phosphor-vue'

const props = defineProps<{
  notificationType: NotificationType
}>()

const notificationStyle = computed(() => {
  switch (props.notificationType) {
    case 'success':
      return {
        bg: 'bg-green-500',
        text: 'text-green-500',
        border: 'border-green-500',
        icon: PhSmiley,
      }
    case 'error':
      return {
        bg: 'bg-red-500',
        text: 'text-red-500',
        border: 'border-red-500',
        icon: PhSmileySad,
      }
    case 'warning':
      return {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
        icon: PhWarning,
      }
    default:
      return {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
        icon: PhHandWaving,
      }
  }
})
</script>

<template>
  <NotificationGroup :group="notificationType">
    <div
      class="fixed inset-0 flex items-end justify-end p-6 pointer-events-none"
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
            :class="notificationStyle.border"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div
              class="flex items-center justify-center py-2 px-4"
              :class="notificationStyle.bg"
            >
              <component
                :is="notificationStyle.icon"
                class="text-white"
                size="35"
              />
            </div>

            <div class="px-4 py-2">
              <div class="mx-3">
                <span
                  class="font-semibold leading-none"
                  :class="notificationStyle.text"
                  >{{ notification.title }}</span
                >
                <p class="text-sm text-gray-600 mb-2">
                  {{ notification.text }}
                </p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
</template>
