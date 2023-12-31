import React, { useState } from "react";
import Head from 'next/head'
import Header from '@components/Header'
import VideoContainer from '@components/VideoContainer'
import Button from '@components/Button'

export default function Home() {
    const [showVideo, setShowVideo] = useState(false);

    function handleShowVideo() {
        setShowVideo(!showVideo);
    }

    return (
        <div className="container" id="penis">
            <Head>
                <title>Nettside</title>
                <link rel="icon" href="/mariusikon2.ico" />
            </Head>

            <main>
                <Header title="Heisann hoppsann!" />
                <p className="description">
                    Klikk på knappen.
                </p>
                <Button title="Gratis V-Bucks!" handleShowVideo={handleShowVideo} />

                {showVideo && (
                    <VideoContainer src={"https://www.youtube.com/embed/6n3pFFPSlW4?autoplay=1&showinfo=0&controls=0&autohide=1"} autoPlay />)
                }

            </main>

        </div>
    )
}
