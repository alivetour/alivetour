import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
class OnSale extends React.Component {
    render() {
        return (
            <div className="on-sale-content">
                <h3 className="on-sale-title">{this.props.item.onSaleTitle}</h3>
                <ReactMarkdown className="on-sale-copy">{this.props.item.onSaleDetails}</ReactMarkdown>
            </div>
        )
    }
}

export default OnSale;