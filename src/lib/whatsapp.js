import { school } from '../data/site.js'

export function whatsappLink(message) {
  return `https://wa.me/${school.phoneE164}?text=${encodeURIComponent(message)}`
}
