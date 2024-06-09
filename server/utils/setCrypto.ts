import crypto from "crypto"
import { algorithm, secret } from "~/assets/cryptData"

export default (text: string) => {
  const key = crypto.scryptSync(secret, "salt", 24) //create key
  const iv = crypto.randomBytes(16) // generate different ciphertext every time
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex") // encrypted text

  const decipher = crypto.createDecipheriv(algorithm, key, iv)
  let decrypted =
    decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8") //deciphered text
  return {
    text,
    encrypted,
    decrypted,
  }
}
