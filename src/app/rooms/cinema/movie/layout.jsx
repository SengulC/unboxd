import { Suspense } from "react"

export default async function Layout({ children }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      { children }
    </Suspense>
  )
}