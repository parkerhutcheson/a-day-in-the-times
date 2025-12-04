export default function FormattedDate(): string {
    const date = new Date();

    const formatted: string = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return formatted;
}
