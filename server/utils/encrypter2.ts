import crypto from "crypto"

const algorithm = "aes-256-cbc" //Using AES encryption
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

export default () => {
  //Encrypting text
  function encrypt(text: string) {
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") }
  }

  // Decrypting text
  function decrypt(text: { iv: string; encryptedData: string }) {
    let iv = Buffer.from(text.iv, "hex")
    let encryptedText = Buffer.from(text.encryptedData, "hex")
    let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    return decrypted.toString()
  }
  return {
    encrypt,
    decrypt,
  }
}
