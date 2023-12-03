export default function Button({ title, handleShowVideo }) {
    function handleClick() {
        console.log("Button Clicked");
	    handleShowVideo();
    }
    return (
        <button
            style={{
                color: "red",

            }}
            onClick={handleClick}
        >
            {title}
        </button >
    )
}
