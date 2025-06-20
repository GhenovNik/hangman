
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]
export function Keyboard(){
    return(
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem",
            }}
        >
            {KEYS.map((key)=> {
                return (<button
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                        cursor: "pointer",
                    }}
                    key={key}> {key} </button>)
            })}

        </div>
    )
}