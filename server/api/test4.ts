export default defineEventHandler(async (event) => {
  const text = "hello world 2"

  const { encrypt, decrypt } = encrypter2()
  const encrypted = encrypt(text)
  const decrypted = decrypt(encrypt(text))
  return {
    text,
    encrypted,
    decrypted,
  }
})
