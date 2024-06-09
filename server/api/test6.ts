import Cryptr from "cryptr"
const cryptr = new Cryptr("myTotallySecretKey")
export default defineEventHandler(async (event) => {
  const text = "hello world"
  const encryptedString = cryptr.encrypt(text)
  const encryptedStringStatic =
    "b7bb211301401b97922516b43e5a21e3949110c42a58ba5b640794470d1cb56481c68d8be3c67b0ecbc6b3a17990569cef1fb730238088ccd4261f1b1e0773d17c2ba447cd4df7b56d20e2558e8e0aeaa6a8cc76bcb9d302caabc83ce7087736492f164501db5babba2ecc"
  // const decryptedString = cryptr.decrypt(encryptedString)
  // const decryptedStringStatic = cryptr.decrypt(encryptedString)

  return {
    text,
    encrypted: encryptedString,
    encryptedLength: encryptedString.length,
    decrypted: cryptr.decrypt(encryptedString),
    test: "-------------------",
    encryptedStatic: encryptedStringStatic,
    encryptedStaticLength: encryptedStringStatic.length,
    decryptedStatic: cryptr.decrypt(encryptedStringStatic),
  }
})
