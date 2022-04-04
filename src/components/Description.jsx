import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

class Description extends React.Component {
    render() {
        return (
            <section className="container description-content">
                <p className="content-copy">
                    <ReactMarkdown>{this.props.copy}</ReactMarkdown>
                </p>
            </section>
        )
    }
}

export default Description;

