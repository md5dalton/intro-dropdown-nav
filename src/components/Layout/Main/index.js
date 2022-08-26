import React from 'react'
import Button from '../../UI/Button'
import Icon from '../../UI/Icon'
import Img from '../../UI/Img'
import List from '../../UI/List'
import Picture from '../../UI/Picture'

import "./styles.sass"

const sources = [
    {
        srcSet: "/images/image-hero-desktop.png",
        media: "(min-width: 576px)"
    }
]

const clients = [
    "databiz",
    "audiophile",
    "meet",
    "maker"
]

export default () => (
    <main>
        <section id="hero">
            <div className="col hero">
                <h1>Make <br /> remote work</h1>
                <p>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <Button>learn more</Button>
                <div className="client-images">
                    <List items={clients} itemHandler={(client, index) => <Img key={index} name={`client-${client}.svg`} /> } /> 
                </div>
            </div>
            <div className="col hero-image">
                <Picture sources={sources}>
                    <Img name="image-hero-mobile.png" />
                </Picture>
            </div>
        </section>
    </main>
)