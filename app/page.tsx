// import Image from 'next/image'

import FormConnect from '@/components/organisms/FormConnect/FormConnect'

export default async function Home() {
  return (
    <main>
      <div>
        <h2>Sell your links</h2>
        <p>Protect your link</p>
      </div>
      <FormConnect />
    </main>
  )
}
