import { useApp } from "#/context/app"

function AppWindows() {
  const { apps } = useApp()
  return (
    <main className="relative h-full w-full">
      {Object.entries(apps).map(([id, app]) => {
        const Render = app.content
        const Header = app.header.override === false ? (
          <header className="w-full flex flex-row items-center justify-between px-4">
            {app.header.content}
            <nav>Close</nav>
          </header>
        ) : app.header.content

        return (
          <section style={{
            width: app.size.width,
            height: app.size.height,
            top: app.position.y,
            left: app.position.x,
            zIndex: app.position.z
          }} className="absolute bg-blue-200">
            {Header}
            {Render}
          </section>
        )
      })}
    </main>
  )
}

export default AppWindows