import transactionCss from './Transaction.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({transactions}) => {
    return <table className={transactionCss.transactionHistory}>
        <thead>
      <tr className={transactionCss.head}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
        {transactions.map(({type, amount, currency, id}) => {
           return <tbody className={transactionCss.body} key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>

        })}   
</table>
}

TransactionHistory.protoTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}
