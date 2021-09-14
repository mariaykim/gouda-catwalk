import React from 'react';
import Axios from 'axios';
import NavBar from './product-overview/NavBar.jsx';
import GridContainer from './product-overview/GridContainer.jsx';
import Stars from './rating-review/StarRating';
import RelatedProductCard from './related-items-section/relatedProductCard.jsx';
import Carousel from './carousel/carousel.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <>
        <div
          className="App"
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 64,
          }}
        >
          <NavBar />
          <h2> there is definitely some sort of announcement here! </h2>
          <GridContainer />
          This is our homepage now :D and Maria is the Goudest
          <Stars />
          <Carousel show={4}>
            <div>
              <div style={{
                padding: 8,
              }}
              >
                <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
              </div>
            </div>
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
            <RelatedProductCard />
          </Carousel>
        </div>
      </>
    );
  }
}
