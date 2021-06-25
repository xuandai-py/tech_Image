import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import './gallery.css';

const Gallery = () => {

    const data = useStaticQuery(
        graphql`
        query CloudinaryImage {
            allCloudinaryMedia {
            edges {
                node {
                    secure_url
                    context {
                        custom {
                            alt
                            caption
                        }
                    }
                    resource_type
                }
            }
            }
        }`
    );

    const images = data.allCloudinaryMedia.edges;
    return (
        <div className="container">
            {
                images.map((image, index) => (
                    <figure className="wave" key={`${index}`}>
                        <img src={image.node.secure_url}
                            alt="imageg"></img>
                        {/* <figcaption>{image.node.context.custom.caption}</figcaption>           */}
                    </figure>
                ))
            }
        </div>
    )
}

export default Gallery
