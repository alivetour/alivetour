import React from "react";

class Description extends React.Component {
    render() {
        return (
            <section className="container description-content">
                <p className="content-copy">
                    {this.props.copy}
                </p>
            </section>
        )
    }
}

export default Description;

