import React from "react";

class VIP extends React.Component {
    render() {
        const listItems = [];

        for (let i = 0; i < this.props.copy.vipDetails.length; i++) {
                listItems.push(<li className="vip-list-item" key={i}>{this.props.copy.vipDetails[i]}</li>)
        }

        return (
            <section className="vip-container">
                <div className="container vip-content">
                    <h2 className="vip-title">{this.props.copy.vipTitle}</h2>
                    <ul className="vip-list">
                        {listItems}
                    </ul>
                </div>
            </section>
        )
    }
}

export default VIP;