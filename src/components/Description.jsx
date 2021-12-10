import React from "react";

class Description extends React.Component {
    render() {
        return (
            <section className="container description-content">
                <p className="content-copy">
                    {this.props.copy}
                    TEST OF DEPLOY
                </p>
            </section>
        )
    }
}

export default Description;

