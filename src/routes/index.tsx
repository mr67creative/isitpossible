import AppWindows from '#/components/AppWindows'
import Dock from '#/components/Dock'
import Screen from '#/components/Screen'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className='h-screen w-screen relative select-none'>
      <Screen />
      <AppWindows />
      <Dock />
    </main>
  )
}
