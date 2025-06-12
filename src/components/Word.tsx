export interface WordProps {
    wordToGuess: string
    guessLetters: string[]
}

export function Word({ wordToGuess, guessLetters }: WordProps) {
    return (
        <div
            style={{
                display: "flex",
                gap: ".25em",
                fontSize: "6rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}>

            {wordToGuess.split("").map((letter, index) => (
                <span style={{ borderBottom: ".1em solid black" }} key={index}>

                    <span
                        style={{ visibility: guessLetters.includes(letter) ? "visible" : "hidden" }}
                    >
                        {letter}
                    </span>

                </span>
            ))}


        </div>

    )
}