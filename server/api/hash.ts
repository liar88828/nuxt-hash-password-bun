import getCrypto from "../utils/getCrypto"
import setCrypto from "../utils/setCrypto"

export default defineEventHandler(async (event) => {
  const text = "hello world"
  const { hash, compare } = getCrypto()
  const encode = hash(text)
  return {
    text,
    encode,
    compare: compare(text, "ae07423e99edb12dce3ba913db7a3736"),
  }
})
