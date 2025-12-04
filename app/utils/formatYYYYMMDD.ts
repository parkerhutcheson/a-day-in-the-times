export function formatYYYYMMDD(date: Date): string {
    return (
        date.getFullYear().toString() +
        String(date.getMonth() + 1).padStart(2, "0") +
        String(date.getDate()).padStart(2, "0")
    );
}
