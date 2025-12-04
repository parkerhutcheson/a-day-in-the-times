import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-10 px-4 border-black">
            <div className="w-full flex justify-center mb-6">
                <div className="w-11/12 max-w-6xl">
                    <hr className="border-gray-500 mb-0.5" />
                    <hr className="border-gray-500" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-sm leading-relaxed text-black">
                    A project written by{" "}
                    <Link
                        href="https://www.linkedin.com/in/parkerhutcheson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline decoration-black"
                    >
                        Parker Hutcheson
                    </Link>
                    . All articles are provided by the New York Times Company.
                </p>

                <Link
                    href="https://developer.nytimes.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354"
                        height={40}
                        width={200}
                        alt="NYT API Logo"
                        className="object-contain"
                    />
                </Link>
            </div>
        </footer>
    );
}