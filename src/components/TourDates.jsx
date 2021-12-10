import React from "react";
import OnSale from '../partials/OnSale';
import TourDate from '../partials/TourDate';

class TourDates extends React.Component {
    render() {
        let onsale = [];
        let tourDates = [];

        for (let i = 0; i < this.props.sale.length; i++) {
            onsale.push(<OnSale item={this.props.sale[i]} />)
        }

        let sortedDates = this.props.shows.sort((a, b) => a.longDate.split('T')[0] > b.longDate.split('T')[0] ? 1 : -1);

        for (let i = 0; i < sortedDates.length; i++) {
            tourDates.push(
                <li className="tour-date-item">
                    <TourDate key={i} show={sortedDates[i]}/>
                </li>
            )            
        }

        return (
            <section className="tour-dates">
                <div className="container tour-dates-content">
                    <h2 className="tour-dates-title">Tour Dates</h2>
                    <div className="onsale-dates">
                        {onsale}   
                    </div>
                    <ul className="tour-dates-list">
                        {tourDates}
                    </ul>
                </div>
            </section>
        )
    }
}

export default TourDates;