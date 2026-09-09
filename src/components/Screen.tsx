function Screen() {
  return (
    <main className="absolute inset-0 z-10 h-screen w-full flex flex-col flex-wrap content-start overflow-y-auto bg-[#e7f3ec]">
      <div className="absolute left-50 top-10 -rotate-2">
        <section className=" bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2 w-fit">
          <div className="h-4 w-4 rounded-full bg-black" title="Somebody" />
          <h1 className="text-2xl font-bold">Who the HELL is Possible?</h1>
        </section>
      </div>
      <div className="absolute right-50 top-18">
        <section className="bg-black rounded-2xl px-4 py-2 flex justify-center items-center gap-2 w-fit">
          <p className="text-muted">Sorry to say but its me (aka Sambhav Aryal)</p>
          <div className="h-4 w-4 rounded-full bg-white" title="Me?" />
        </section>
      </div>

      <div className="absolute left-70 top-36 rotate-3">
        <section className=" bg-white rounded-2xl px-4 py-2 flex justify-center items-center gap-2 w-fit">
          <div className="h-4 w-4 rounded-full bg-black" title="Somebody" />
          <h1 className="text-2xl font-bold">What do you handle?</h1>
        </section>
      </div>
      <div className="absolute right-60 top-44 scale-[1.1] rotate-2">
        <section className="bg-black rounded-2xl px-4 py-2 flex justify-center items-center gap-2 w-fit">
          <p className="text-muted">I am handled by Github lol</p>
          <div className="h-4 w-4 rounded-full bg-white" title="Me?" />
        </section>
      </div>


    </main>
  )
}

export default Screen