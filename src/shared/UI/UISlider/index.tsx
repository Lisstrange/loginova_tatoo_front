import React, {Component} from "react";
import Slider from "react-slick";
import styles from "./index.module.scss"
import { SliderPost } from "@/entities/posts/types"


interface ISimpleSliderProps {
    SliderPosts: Array<SliderPost>

}



const SimpleSlider: React.FC<ISimpleSliderProps> = ({SliderPosts}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <h2> Slider Start</h2>
            <Slider {...settings}>
                {/*Вот тут над мапом проходить*/}
                {SliderPosts?.map((SliderPost, i) => (
                    <div className={styles.card}>
                        <h4>SliderPost.Author</h4>
                        <h4>SliderPost.SocialNetworks</h4>
                        <p>
                            SliderPost.text
                        </p>
                    </div>
                ))}
                <div>
                    <div className={styles.card}>
                        <h4>Card 1 Title</h4>
                        <p>
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <h4>Card 1 Title</h4>
                        <p>
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <h4>Card 1 Title</h4>
                        <p>
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                        </p>
                    </div>
                </div>
                <div>
                    <div className={styles.card}>
                        <h4>Card 1 Title</h4>
                        <p>
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                            Lorem ipsum dolor eget etat blah lorem ipsum dolor eget etat blah.
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}


export default SimpleSlider;


