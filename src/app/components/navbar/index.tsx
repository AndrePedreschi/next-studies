"use client"
import Link from "next/link"
import { Nav, LinkNav, Logo, Name } from "./style"
import Cat from "../../public/cat.png"

export default function Navbar() {
  return (
    <>
      <Nav>
        {/* <img src='/cat.png' alt="" /> */}
        {/* <Logo $urlImage={Cat}></Logo> */}

        <section>
          <Logo></Logo>
          <Name>Cat'nCompany</Name>
        </section>

        <section>
          <Link href="/dashboard" legacyBehavior>
            <LinkNav>Dashboard</LinkNav>
          </Link>
          <Link href="/login" legacyBehavior>
            <LinkNav>Login</LinkNav>
          </Link>
          <Link href="/signup" legacyBehavior>
            <LinkNav>Novo usuário</LinkNav>
          </Link>
        </section>
      </Nav>
    </>
  )
}
