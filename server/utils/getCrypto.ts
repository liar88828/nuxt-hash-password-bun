import crypto from "crypto"
import { algorithm, secret } from "~/assets/cryptData"

export default () => {
  const iv = crypto.randomBytes(16) // generate different ciphertext everytime
  const key = crypto.scryptSync(secret, "salt", 24) //create key
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  const hash = (value: string) =>
    cipher.update(value, "utf8", "hex") + cipher.final("hex")

  const compare = (value: string, hash: string) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    const decrypted =
      decipher.update(hash, "hex", "utf8") + decipher.final("utf8")
    return decrypted === value
  }

  return {
    // setEncrypt,
    // setDecrypt,
    hash,
    compare,
  }
}
