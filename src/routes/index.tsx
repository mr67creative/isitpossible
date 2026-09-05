import Dock from '#/components/Dock'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <Dock />
    </div>
  )
}
