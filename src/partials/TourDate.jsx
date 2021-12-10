import React from "react";
import Button from './Button';

class TourDate extends React.Component {
    render() {
        return (
            <div className="tour-date-container">
                <div className="date-venue">
                    <span className="show-date">{this.props.show.date}</span>
                    <div className="venue-wrap">
                        <div className="venue-city">
                            <span className="city">{this.props.show.city}</span>
                            <span className="venue">{this.props.show.venue}</span>                       
                        </div>
                    </div>
                    <div className="ticket-btns">
                        <Button 
                            type={this.props.show.tixSoldOut ? "red" : "dark-blue"}
                            copy={this.props.show.tixSoldOut ? "Sold Out" : "Buy Now"}
                            tix={this.props.show.ticketLink}
                        />
                        <Button 
                            type={this.props.show.vipSoldOut ? "red" : "green"}
                            copy={this.props.show.vipSoldOut ? "VIP Sold Out" : "VIP"}
                            tix={this.props.show.vipTicketLink}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TourDate;