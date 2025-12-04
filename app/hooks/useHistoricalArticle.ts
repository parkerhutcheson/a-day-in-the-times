import { useState } from "react";
import { formatYYYYMMDD } from "../utils/formatYYYYMMDD";

interface UseHistoricalArticleReturn {
    loading: boolean;
    error: string | null;
    article: any | null;
    fetchArticle: (yearsAgo: number) => Promise<void>;
}

export function useHistoricalArticle(): UseHistoricalArticleReturn {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [article, setArticle] = useState<any | null>(null);

    const fetchArticle = async (yearsAgo: number): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const today = new Date();
            const formattedDate = formatYYYYMMDD(today);

            const response = await fetch("/api/historical/article", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: formattedDate,
                    yearsAgo,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setArticle(data);

        } catch (err) {
            const errorMessage = err instanceof Error
                ? err.message
                : "An unknown error occurred";

            setError(errorMessage);
            console.error("Failed to fetch historical article:", err);

        } finally {
            setLoading(false);
        }
    };

    return { loading, error, article, fetchArticle };
}
