export default function formattedDate() {
    const date = new Date();

    const formatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return <p className="text-sm">{formatted}</p>;
}
