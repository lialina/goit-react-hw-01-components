import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.header}>Type</th>
          <th className={s.header}>Amount</th>
          <th className={s.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr
            key={item.id}
            className={s.row}
            style={{
              backgroundColor:
                items.indexOf(item) % 2 === 0 ? 'white' : 'rgb(228, 228, 228)',
            }}
          >
            <td className={s.type}>{item.type}</td>
            <td className={s.amount}>{item.amount}</td>
            <td className={s.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
