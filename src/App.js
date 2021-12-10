import { useState, useEffect } from "react";
import './App.scss';
import NavBar from './components/Nav';
import Hero from './components/Hero';
import Description from './components/Description';
import VIP from './components/Vip';
import TourDates from './components/TourDates';
import Footer from './components/Footer';

const query = `
{
  descriptionCollection {
    items {
      description
    }
  },
  vipCollection {
    items {
      vipTitle,
      vipDetails
    }
  },
  onSaleCollection(order: sys_id_ASC) {
    items {
      onSaleTitle,
      onSaleDetails 
    }
  },
  tourDateCollection {
    items {
      date,
      city,
      venue,
      ticketLink,
      tixSoldOut,
      vipTicketLink,
      vipSoldOut,
      longDate
    }
  },
  legalCollection {
    items {
      legalCopy
    }
  }
}`


function App() {
  const [description, setDescription] = useState(null);
  const [vip, setVip] = useState(null);
  const [onsale, setOnsale] = useState(null);
  const [tourdates, setTourDates] = useState(null);
  const [legal, setLegal] = useState(null);


  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CDI}`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors}) => {
        if (errors) {
          console.error(errors);
        }

        setDescription(data.descriptionCollection.items[0]);
        setVip(data.vipCollection.items[0]);
        setOnsale(data.onSaleCollection.items);
        setTourDates(data.tourDateCollection.items);
        setLegal(data.legalCollection.items[0]);
      });
  }, []);

  if (!description || !vip || !onsale || !tourdates || !legal) {
    return "loading...";  
  }

  return (
    <div className="App">
        <NavBar/>
        <Hero />
        <Description copy={description.description}/>
        <VIP copy={vip} />
        <TourDates sale={onsale} shows={tourdates}/>
        <Footer copy={legal.legalCopy}/>
    </div>
  );
}

export default App;
