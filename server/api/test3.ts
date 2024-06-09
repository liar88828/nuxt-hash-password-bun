import { textValue } from "~/assets/cryptData"
import encrypter from "../utils/encrypter"

export default defineEventHandler(async (event) => {
  const { encrypt, decrypt } = encrypter()
  const encrypted = encrypt(textValue)
  // const decrypted = decrypt(encrypt(textValue))
  return {
    text: textValue,
    // encrypted,
    // decrypted,
  }
})
