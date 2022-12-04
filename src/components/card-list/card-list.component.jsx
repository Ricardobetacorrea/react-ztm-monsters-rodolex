import './card-list.styles.css';

import Card from '../card/card.component';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardList extends Component {

  render() {
    console.log(this.props);
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {
          monsters.map(monster => (
            <Card key={monster.id}
              monster={monster} />
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  monsters: PropTypes.array
}
