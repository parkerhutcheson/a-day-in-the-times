import formattedDate from "../utils/formattedDate";

export default function Header() {
    return (
        <>
            <header className="py-8">
                <div className="relative mx-auto max-w-6xl w-11/12 flex justify-center items-center">
                    <p className="absolute left-0 text-sm font-sans font-medium tracking-tighter">
                        {formattedDate()}
                    </p>

                    <h1 className="text-4xl tracking-wide">A Day in the Times</h1>
                </div>
            </header>

            <div className="w-full flex justify-center">
                <div className="w-11/12 max-w-6xl">
                    <hr className="border-black mb-0.5" />
                    <hr className="border-black" />
                </div>
            </div>
        </>
    );
}
