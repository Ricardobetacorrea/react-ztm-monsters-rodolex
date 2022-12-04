import './card-list.styles.css';

import Card from '../card/card.component';
import PropTypes from 'prop-types';

const CardList = ({ monsters }) => {
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

CardList.propTypes = {
  monsters: PropTypes.array
}

export default CardList;