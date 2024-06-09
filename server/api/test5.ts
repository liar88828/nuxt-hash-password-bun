import crypto from "crypto"

export default defineEventHandler(async (event) => {
  const text = "hello world 2"
  let algorithm = "aes256" // or any other algorithm supported by OpenSSL
  let key = "ExchangePasswordPasswordExchange" // or any key from .env
  let iv = crypto.randomBytes(8).toString("hex") // or you can add static value from .env

  let cipher = crypto.createCipheriv(algorithm, key, iv)
  let encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex")
  let decipher = crypto.createDecipheriv(algorithm, key, iv)
  let decrypted =
    decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8")

  return {
    cipher,
    encrypted,
    decipher,
    decrypted,
  }
})
