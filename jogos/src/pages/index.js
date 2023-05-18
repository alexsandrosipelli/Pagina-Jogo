
import { Inter } from 'next/font/google'


import Titulo from "@/components/Titulo";
import Cardjogo from '@/components/CardJogo';
export default function Home() {
  const jogosList = [
    {
      titulo: "super mario",
      nota: "8.9",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
    },
    {
      titulo: "super mario",
      nota: "8.9",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">

      <Titulo> Jogos em alta </Titulo>

     <secaoJogos jogo={jogosList}/>

      <Titulo>mini jogos  em alta </Titulo>
    </main > //JSX
  )
}
