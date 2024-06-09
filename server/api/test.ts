import { textValue } from "~/assets/cryptData"
import setCrypto from "../utils/setCrypto"

export default defineEventHandler(async (event) => {
  const { decrypted, encrypted } = setCrypto("test")
  return {
    text: textValue,
    encrypted,
    decrypted,
  }
})
