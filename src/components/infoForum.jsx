import React from 'react';
import '../assets/style/infoForum.scss';
import Img from '../assets/images/info-img.png';

function InfoForum() {
    return (
        <div>
            <article className='article'>
                <figure className='article_figure'>
                    <img className='article_figure_img' src={Img} alt="img"/>
                </figure>
                <figcaption className='article_figcaption'>
                    <h1 className='article_figcaption_title'> Welcome to eLEARNING</h1>
                    <span className='article_figcaption_description'>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                        Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                        Tempor erat elitr rebum at clita.
                        Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                        sed stet lorem sit clita duo justo magna dolore erat amet
                    </span>
                </figcaption>
            </article>
        </div>
    );
}

export default InfoForum;