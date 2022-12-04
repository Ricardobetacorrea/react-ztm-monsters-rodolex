import './card.styles.css';

import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className='card-container'>
        <img alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

Card.propTypes = {
  monster: PropTypes.object
}
