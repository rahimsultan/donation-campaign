

const DonatonCard = () => {
  return (
    <div className="flex items-center gap-10 border-2">
        <div className="w-[40%]">
            <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
        </div>
        <div>
            <h1>Title</h1>
            <button
                type="button"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Button text
            </button>
        </div>
    </div>
  )
}

export default DonatonCard