import { Buffer } from "node:buffer"
import process from "node:process"

globalThis.Buffer = Buffer
globalThis.process = process

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
    },
  }
})
