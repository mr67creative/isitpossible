function Dock() {
  return (
    <footer className='absolute bottom-0 left-0 w-[40vw] mx-[30vw] mb-4 rounded-full h-10 px-3 flex flex-row items-center justify-between z-20 bg-blue-200'>
      <div className="relative w-full flex flex-row items-center justify-between">
        <section>
          APPS
        </section>
        <section className="absolute right-1/2 translate-x-1/2 rounded-full h-16 w-16 bg-blue-200 flex flex-row items-center justify-center">
          LOGO
        </section>
        <section>
          APPS
        </section>
      </div>
    </footer>
  )
}

export default Dock