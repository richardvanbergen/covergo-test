// @ts-expect-error missing types
import { notify as notiwind } from 'notiwind'

export type NotificationType = 'success' | 'error' | 'notice' | 'warning'

export function notify(group: NotificationType, title: string, text: string) {
  notiwind({
    group,
    title,
    text,
  })
}
