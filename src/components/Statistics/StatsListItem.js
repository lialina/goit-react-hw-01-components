import PropTypes from 'prop-types';
import s from './StatsListItem.module.css';

function StatsListItem({ stat }) {
  return (
    <li className={s.item}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}</span>
    </li>
  );
}

StatsListItem.propTypes = {
  stat: PropTypes.object,
};

export default StatsListItem;
