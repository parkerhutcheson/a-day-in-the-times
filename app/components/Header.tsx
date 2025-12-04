import formattedDate from "../utils/formattedDate";

export default function Header() {
    return (
        <div>
            <header className="py-6 sm:py-8 bg-white">
                <div className="mx-auto max-w-6xl w-11/12 flex flex-col sm:flex-row sm:justify-center items-center sm:items-center relative">
                    <p
                        className="text-sm font-sans font-medium tracking-tighter mb-2 sm:mb-0 sm:absolute sm:left-0"
                        aria-label={`Today's date is ${formattedDate()}`}
                    >
                        {formattedDate()}
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-serif tracking-wide text-center">
                        A Day in the Times
                    </h1>
                </div>
            </header>
            <div className="w-full flex justify-center">
                <div className="w-11/12 max-w-6xl">
                    <hr className="border-black mb-0.5" />
                    <hr className="border-black" />
                </div>
            </div>
        </div>
    );
}
