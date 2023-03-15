import statisticsCss from './Statistics.module.css';
import { getRandomColor } from '../functions/getRandomColor';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={statisticsCss.statistics}>
      {' '}
      <h2>{title}</h2>{' '}
      <ul className={statisticsCss.statList}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li
              className="item"
              style={{ backgroundColor: getRandomColor() }}
              key={id}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
