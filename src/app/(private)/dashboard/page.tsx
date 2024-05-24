"use client"
import { Button } from "./style"
import { redirect, useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  //redirect('/')
  function voltar(id?: string) {
    if (!id) {
      console.log("Redirecionando")
      router.push("/")
    } else {
      console.log(id)
    }
  }

  return (
    <div>
      <p>Dashboard</p>
      <Button onClick={() => router.push("/")}>Voltar com useRouter</Button>
      <Button onClick={() => router.push("/blog/234234")}>Tela do blog</Button>
      <Button onClick={() => voltar()}>Voltar com redirect function</Button>
    </div>
  )
}
