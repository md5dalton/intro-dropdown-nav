import React from "react"

export default ({ sources, children }) => (
    <picture>
        {
            sources.map(({ srcSet, media }, index) => <source key={index} srcSet={srcSet} media={media} />)
        }
        {
            children
        }
    </picture>
)