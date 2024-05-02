import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <body>
        <br></br>
        <br></br>
        <p>Temperature : <t></t> {weatherData.main.temp}</p>
        <p>Sunrise : <t></t> {weatherData.sys.sunrise}</p>
        <p>Sunset : <t></t> {weatherData.sys.sunset}</p>
        <p>Description : <t></t> {weatherData.weather[0].description}</p>
        </body>
    </Card.Content>
  </Card>
)


export default CardExampleCard;
