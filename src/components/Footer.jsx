import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="nav-link-container">
                        <a className="nav-links" href="https://www.doctormikemedia.com">Doctor Mike Website</a>
                    </div>
                    <p className="legal">{this.props.copy}</p>
                </div>
            </footer>
        )
    }
}

export default Footer;