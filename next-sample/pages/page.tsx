import { useRouter } from "next/router"
import { useEffect } from "react"


const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/sample')
  })
  return <span>{router.pathname}</span>
}

export default Page
