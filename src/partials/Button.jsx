import React from "react";

class Button extends React.Component {
    render() {
        return (
            <a className={'btn ' + this.props.type} href={this.props.tix} role="button">
                {this.props.copy}
            </a>
        )
    }
}

export default Button;