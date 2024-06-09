import crypto from "crypto"
import { algorithm } from "~/assets/cryptData"

class Encrypted {
  public key: Buffer
  constructor(encryptionKey: string) {
    this.key = crypto.scryptSync(encryptionKey, "salt", 24)
  }

  encrypt(clearText: string) {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(algorithm, this.key, iv)
    const encrypted = cipher.update(clearText, "utf8", "hex")
    return [
      encrypted + cipher.final("hex"),
      Buffer.from(iv).toString("hex"),
    ].join("|")
  }

  decrypt(encryptedText: string) {
    const [encrypted, iv] = encryptedText.split("|")
    if (!iv) throw new Error("IV not found")
    const decipher = crypto.createDecipheriv(
      algorithm,
      this.key,
      Buffer.from(iv, "hex")
    )
    return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8")
  }
}
const encrypter = new Encrypted("encryption-key")
export default () => {
  return encrypter
}
