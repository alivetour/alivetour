import React from "react";
import ReactGA from 'react-ga'

class Button extends React.Component {
    render() {
        return (
            <ReactGA.OutboundLink
                eventLabel="myLabel"
                to={this.props.tix}
                target="_blank"
                className={'btn ' + this.props.type}
                role="button"
            >
                {this.props.copy}
            </ReactGA.OutboundLink>
        )
    }
}

export default Button;