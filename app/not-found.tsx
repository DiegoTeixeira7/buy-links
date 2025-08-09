import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>Não foi possível encontrar o que você estava procurando</p>
      <Link href="/">Voltar para o início</Link>
    </div>
  )
}
