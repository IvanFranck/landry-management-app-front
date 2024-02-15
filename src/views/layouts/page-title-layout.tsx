import { useMatches } from "react-router-dom";

export function PagetitleLayout() {
    const matches = useMatches()
        .filter((match) => Boolean(match.handle?.pageTitle))
        .map((match) => match.handle.pageTitle(match.params))
    return (
        <>
            {matches.map((match, index) => (
                <div className="w-full" key={index}>
                    {match}
                </div>
            ))}
        </>
    )
}