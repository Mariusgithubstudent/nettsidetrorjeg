export default function Button({ title, handleShowVideo }) {
    function handleClick() {
        console.log("Button Clicked");
    }
    return (
        <button
            style={{
                color: "red",

            }}
            onClick={handleShowVideo

            }
        >
            {title}
        </button >
    )
}
