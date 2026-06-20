export function formatTime(isoString?: string | null) : string{
    if (!isoString) return "";
    const data = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - data.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return "just now";
    if (diffHours < 1) return `${diffMins}m ago`;
    if (diffDays < 1) {
        return data.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: true})
    }
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) {
        return data.toLocaleDateString([], { weekday: "short" });
    }
    return data.toLocaleDateString([], { month: "short", day: "numeric"})
}