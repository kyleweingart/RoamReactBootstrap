import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText, CardGroup, Fa } from 'mdbreact';
import './card.css';


class LocationCard extends React.Component {
    render() {
      return (

  <div className="container-fluid cards">        


<Card>
  <CardBody>
    <CardTitle tag="h5">Saved Location</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button className="btn-circle"><Fa icon="map-marker" /></Button>
    <Button className="btn-circle"><Fa icon="trash" /></Button>
  </CardBody>
</Card>

<Card>
  
  <CardBody>
    <CardTitle tag="h5">Saved Location</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button className="btn-circle"><Fa icon="map-marker" /> </Button>
    <Button className="btn-circle"><Fa icon="trash" /></Button>
  </CardBody>
</Card>

<Card>
  
  <CardBody>
    <CardTitle tag="h5">Saved Location</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <Button className="btn-circle"><Fa icon="map-marker" /> </Button>
    <Button className="btn-circle"><Fa icon="trash" /></Button>
  </CardBody>
</Card>



</div>

      );
    }

}

export default LocationCard;