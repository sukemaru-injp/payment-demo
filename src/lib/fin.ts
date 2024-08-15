import { createFincode } from "@fincode/node"

const fincodeClient = createFincode({
  apiKey: process.env.NEXT_PUBLIC_FINCODE_API_KEY ?? "",
})

export default fincodeClient
