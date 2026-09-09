import { useApp, type AppId } from "#/context/app"
import { Rnd } from "react-rnd"

function AppWindows() {
  const { apps, closeApp, focusApp, updateRectangle } = useApp()

  const onResizeStop = (event, direction, reference, delta, position: { x: number, y: number }, id: AppId) => {
    updateRectangle(id, {
      x: position.x,
      y: position.y,
      width: parseInt(reference.style.width),
      height: parseInt(reference.style.height)
    })
  }
  const onDragStop = (event, position: { x: number, y: number }, id: AppId) => {
    updateRectangle(id, {
      x: position.x,
      y: position.y
    })
  }

  return (
    <main className="relative h-full w-full">
      {Object.entries(apps).map(([id, app]) => {
        const Render = app.content

        return (
          <Rnd
            key={id}
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
            onResizeStop={(event, direction, reference, delta, position) => onResizeStop(event, direction, reference, delta, position, app.id)}
            onDragStop={(event, position) => onDragStop(event, position, app.id)}
            enableResizing
            minHeight={200}
            minWidth={200}

            // I found this from google and this looks very identical to the real application windows
            dragHandleClassName="window-drag-handle"
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
          >
            <section
              onKeyUp={focusApp.bind(null, app.id)}
              onClick={focusApp.bind(null, app.id)}
              className="bg-blue-200 min-h-full min-w-full cursor-default"
            >
              {app.header.override === false ? (

                <header className="window-drag-handle w-full flex flex-row items-center justify-between px-4 bg-blue-900 text-white cursor-grab">
                  {app.header.content}

                  <nav className="cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    closeApp(app.id)
                  }}>Close</nav>
                </header>

              ) : app.header.content}

              <main>
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