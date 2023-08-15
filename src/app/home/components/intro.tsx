import { InternalSymbolName } from "typescript"

const Intro = () => {
    return (
        <div>
            <div className="flex flex-col mt-64 mb-8">
                <h1 className="flex justify-center m-0 font-extrabold pb-3 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                    A new way to
                </h1>
                <h1 className="flex justify-center m-0 font-extrabold pb-3 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                    get your dream job.
                </h1>
            </div>
            <div className="flex justify-center mb-64">
                <p className="text-3xl text-gray-600 w-8/12 text-center">
                    Start keeping track of where you have applied, get curated job recommendations, and stay on top of the game.
                </p>
            </div>
        </div>
    )
}

export default Intro;