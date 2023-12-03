export default function VideoContainer({ src }) {
    { console.log(src, "JEEEF") }
    return (
        <iframe width="640" height="360" src={src} frameBorder="0" allowFullScreen>
        </iframe>
    )
}
