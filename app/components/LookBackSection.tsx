"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useHistoricalArticle } from "../hooks/useHistoricalArticle";
import Image from "next/image";

const TIME_PERIODS = [10, 25, 50, 100] as const;

export default function LookBackSection() {
    const { loading, error, article, fetchArticle } = useHistoricalArticle();

    const handleClick = async (yearsAgo: number) => {
        await fetchArticle(yearsAgo);
    };

    return (
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12 space-y-10">
            <div className="space-y-4">
                <h3 className="text-xl italic">Look back on this day...</h3>

                <div className="flex gap-3 flex-wrap">
                    {TIME_PERIODS.map((years) => (
                        <button
                            key={years}
                            onClick={() => handleClick(years)}
                            disabled={loading}
                            className="px-4 py-2 border border-black rounded hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Loading..." : `${years} years ago`}
                        </button>
                    ))}
                </div>

                {error && (
                    <div className="space-y-1">
                        {/* Simple client-facing message */}
                        <p className="text-red-600 text-sm">
                            An error occurred when attempting to fetch an article. Wait a few moments, and try again.
                        </p>

                        {/* (Optional) Original detailed error for you */}
                        <p className="text-red-600 text-xs opacity-70">{error}</p>
                    </div>
                )}
            </div>

            <AnimatePresence mode="wait">
                {article && (
                    <motion.section
                        key={article._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="border-t border-gray-300 pt-10"
                    >
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="w-full sm:w-1/3">
                                {article.multimedia?.default?.url ? (
                                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={article.multimedia.default.url}
                                            alt={article.headline?.main || "Article image"}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, 33vw"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full aspect-[4/3] bg-gray-200 rounded flex items-center justify-center text-sm text-gray-500 italic">
                                        No image available
                                    </div>
                                )}
                            </div>

                            <div className="w-full sm:w-2/3 space-y-4">
                                <h2 className="text-2xl font-serif font-bold leading-snug">
                                    {article.headline?.main}
                                </h2>

                                {article.byline?.original && (
                                    <p className="text-sm text-gray-700 italic">
                                        {article.byline.original}
                                    </p>
                                )}

                                <p className="text-gray-800 leading-relaxed">
                                    {article.abstract || article.snippet}
                                </p>

                                <a
                                    href={article.web_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 underline text-sm hover:text-blue-900"
                                >
                                    Read the full article →
                                </a>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </main>
    );
}
