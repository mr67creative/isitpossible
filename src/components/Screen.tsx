import { useScreen } from "#/context/screen"

const STARTING_TOP_POSITION = 10
const ANSWER_GAP = 8
const NEXT_CHAT_GAP = 26
const X_POSITION_DELTA = 20

const unusualStyle = ["", "rotate-3", "-rotate-2", "-rotate-3", "scale-0.9"]
const unusualStyleMe = ["", "scale-1.1", "", "-rotate-2", "rotate-1"]

function Screen() {
  const { chats } = useScreen()

  return (
    <main className="absolute inset-0 z-10 h-screen w-full flex flex-col flex-wrap content-start overflow-y-auto bg-[#e7f3ec]">

      {Object.entries(chats).map(([id, chat], index) => {

        const random = Math.floor(Math.random() * unusualStyle.length)

        if (Array.isArray(chat)) {
          return
        }

        return (
          <>
            <div
              style={{
                position: "absolute",
                top: index * NEXT_CHAT_GAP * 4 + STARTING_TOP_POSITION * 4,
                left: 200 + Math.floor(Math.random() * X_POSITION_DELTA * 4)
              }}
              className={unusualStyle[random]}
            >
              <section className=" bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2 w-fit">
                <div className="h-4 w-4 rounded-full bg-black" title="Somebody" />
                <h1 className="text-2xl font-bold">{chat.somebody}</h1>
              </section>
            </div>
            <div
              style={{
                position: "absolute",
                top: index * NEXT_CHAT_GAP * 4 + STARTING_TOP_POSITION * 4 + ANSWER_GAP * 4,
                right: 200 + Math.floor(Math.random() * X_POSITION_DELTA * 4)
              }}
              className={unusualStyleMe[random]}
            >
              <section className="bg-black rounded-2xl px-4 py-2 flex justify-center items-center gap-2 w-fit">
                <p className="text-muted">{chat.me()}</p>
                <div className="h-4 w-4 rounded-full bg-white" title="Me?" />
              </section>
            </div>
          </>
        )
      })}
    </main>
  )
}

export default Screen