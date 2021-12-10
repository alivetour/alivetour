import React from "react";

class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <picture className="hero-picture">
                    <source media="(max-width: 768px)" srcSet="DoctorMike_small.jpg, DoctorMike_small_2x.jpg 2x"></source>
                    <source media="(min-width: 769px) and (max-width: 1024px)" srcSet="DoctorMike_medium.jpg, DoctorMike_medium_2x.jpg 2x"></source>
                    <source media="(min-width: 1025px)" srcSet="DoctorMike_large.jpg, DoctorMike_large_2x.jpg 2x"></source>
                    <img className="hero-image" src="DoctorMike_large.jpg" srcSet="DoctorMike_large.jpg, DoctorMike_large_2x.jpg 2x" alt=""/>
                </picture>
            </section>
        )
    }
}

export default Hero;