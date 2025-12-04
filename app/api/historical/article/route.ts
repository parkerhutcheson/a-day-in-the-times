import { NextRequest, NextResponse } from "next/server";
import { subtractYearsSafe } from "../../../utils/subtractYearsSafe";
import { formatYYYYMMDD } from "../../../utils/formatYYYYMMDD";

export async function POST(request: NextRequest) {
    try {
        const { date, yearsAgo } = await request.json();

        const yyyy = Number(date.slice(0, 4));
        const mm = Number(date.slice(4, 6)) - 1;
        const dd = Number(date.slice(6, 8));

        const todayDate = new Date(yyyy, mm, dd);

        const targetDate = subtractYearsSafe(todayDate, yearsAgo);

        const beginDate = formatYYYYMMDD(targetDate);
        const endDate = formatYYYYMMDD(
            new Date(targetDate.getTime() + 24 * 60 * 60 * 1000)
        );

        const nytURL =
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=${beginDate}` +
            `&end_date=${endDate}` +
            `&api-key=${process.env.NYT_API_KEY}`;

        const articleSearch = await fetch(nytURL);

        if (!articleSearch.ok) {
            throw new Error(`NYT API error: ${articleSearch.status}`);
        }

        const nytData = await articleSearch.json();

        const numberOfArticles = nytData.response.docs.length;
        const randomNumber = Math.floor(Math.random() * numberOfArticles);
        const aRandomArticleFromThatDay = nytData.response.docs[numberOfArticles > 0 ? randomNumber : 0];

        return NextResponse.json(aRandomArticleFromThatDay, { status: 200 });

    } catch (error) {
        console.error("Error fetching from the NYT API", error);

        return NextResponse.json(
            {
                error: "Internal Server Error",
                details: error instanceof Error
                    ? error.message
                    : String(error),
            },
            { status: 500 }
        );
    }
}
