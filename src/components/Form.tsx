'use client'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { toast } from 'sonner'
import confetti from 'canvas-confetti'

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, message } = Object.fromEntries(formData.entries())

    // llamar a la api
    fetch('/api/kv-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Mensaje enviado con exito')
      form.reset()
      confetti()
    }).catch(() => {
      toast.error('Error al enviar el mensaje')
    })
  }

  return (
    <form onSubmit={handleSubmit} className='min-w-[400px] space-y-8 p-8 border rounded border-white/10'>
      <Input
        name='email'
        id='email'
        label='Email:'
        type='email'
        placeholder='example@gmail.com'
      />

      <Input
        name='name'
        id='name'
        label='Nombre:'
        type='text'
        placeholder='Ivan Martinez'
      />

      <Input
        name='message'
        id='message'
        label='Mensaje:'
        type='text'
        placeholder='Este es el mensaje que quiero enviar'
      />

      <Button>Enviar Mansaje</Button>
    </form>

  )
}
