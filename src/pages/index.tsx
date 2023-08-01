import Image from 'next/image'
import { Inter } from 'next/font/google'
import ModaL from '../../components/ModaL'
import NavBar from '../../components/NavBar'
import TypeWriter from '../../components/TypeWriter'

export default function Home() {
  return (
    <main>
      <NavBar/>
      <TypeWriter/>
    </main>
  )
}
