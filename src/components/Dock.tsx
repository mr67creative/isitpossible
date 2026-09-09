import { INITIAL_Z_POSITION, useApp, type AppId } from "#/context/app"

function Dock() {
  const { apps, focusApp, closeApp } = useApp()
  const avg = Math.ceil(Object.keys(apps).length / 2)
  const firstHalfApps = (Object.entries(apps).slice(0, avg))
  const lastHalfApps = (Object.entries(apps).slice(avg))

  const handleClick = (id: AppId) => {
    const app = apps[id]
    if (app.position.z <= INITIAL_Z_POSITION) {
      focusApp(app.id)
    } else {
      closeApp(app.id)
    }
  }

  return (
    <footer className='absolute bottom-0 left-0 w-[40vw] mx-[30vw] mb-4 rounded-full h-10 px-3 flex flex-row items-center justify-between z-20 bg-blue-200'>
      <div className="relative w-full flex flex-row items-center justify-between">
        <section className="w-full flex justify-start items-center gap-6">
          {firstHalfApps.map(([id, app], index) => {
            return (
              <div title={app.name} onClick={() => handleClick(app.id)} className="cursor-pointer">
                App {index + 1}
              </div>
            )
          })}
        </section>
        <section className="absolute right-1/2 translate-x-1/2 rounded-full h-16 w-16 bg-blue-200 flex flex-row items-center justify-center">
          POSSIBLE
        </section>
        <section className="w-full flex justify-end items-center gap-6">
          {lastHalfApps.map(([id, app], index) => {
            return (
              <div title={app.name} onClick={() => handleClick(app.id)} className="cursor-pointer">
                App {avg + index + 1}
              </div>
            )
          })}
        </section>
      </div>
    </footer>
  )
}

export default Dock