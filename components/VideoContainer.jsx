export default function VideoContainer({ src }) {
    { console.log(src, "JEEEF") }
    return (
        <iframe width="640" height="360" src={src} frameborder="0" allowfullscreen>
        </iframe>
    )
}
