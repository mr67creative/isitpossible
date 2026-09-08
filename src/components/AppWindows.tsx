import { useApp } from "#/context/app"
import { useRef } from "react"
import { Rnd } from "react-rnd"

function AppWindows() {
  const { apps, closeApp, focusApp } = useApp()

  const rndReference = useRef(null)
  const contentReference = useRef(null)

  const onDrag = () => { }
  const onResizeStop = () => { }
  const onDragStop = () => { }

  return (
    <main className="relative h-full w-full">
      {Object.entries(apps).map(([id, app]) => {
        const Render = app.content
        const Header = app.header.override === false ? (

          <header className="w-full flex flex-row items-center justify-between px-4 bg-blue-900 text-white cursor-grab">
            {app.header.content}

            <nav className="cursor-pointer" onClick={() => closeApp(app.id)}>Close</nav>
          </header>

        ) : app.header.content

        return (
          <Rnd
            ref={rndReference}
            position={{
              x: app.position.x,
              y: app.position.y
            }}
            size={{
              height: app.size.height,
              width: app.size.width
            }}
            style={{
              zIndex: app.position.z
            }}
            onDrag={onDrag}
            onResizeStop={onResizeStop}
            onDragStop={onDragStop}
            enableResizing
            minHeight={200}
            minWidth={200}

            // I found this from google and this looks very identical to the real application windows
            // dragHandleClassName="window-drag-handle"
            resizeHandleStyles={{
              top: { cursor: "ns-resize" },
              bottom: { cursor: "ns-resize" },
              left: { cursor: "ew-resize" },
              right: { cursor: "ew-resize" },
              topLeft: { cursor: "nwse-resize" },
              topRight: { cursor: "nesw-resize" },
              bottomLeft: { cursor: "nesw-resize" },
              bottomRight: { cursor: "nwse-resize" },
            }}

            className="border"
          >
            <section className="bg-blue-200 min-h-full min-w-full cursor-default">
              {Header}

              <main
                ref={contentReference}
                onKeyUp={focusApp.bind(null, app.id)}
                onClick={focusApp.bind(null, app.id)}
              >
                {Render}
              </main>
            </section>
          </Rnd>
        )
      })}
    </main>
  )
}

export default AppWindows