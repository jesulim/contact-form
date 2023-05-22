import { Inter } from 'next/font/google'
import { Form } from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={`${inter.className} flex min-h-screen flex-col p-24`}>
      <h1 className='text-4xl font-extrabold tracking-tight text-center mb-12'>Contacta  conmigo</h1>
      <div className='flex max-w-2xl mx-auto'>
        <Form />
      </div>
    </main>
  )
}
