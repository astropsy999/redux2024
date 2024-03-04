import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  addCustomerAction,
  removeCustomerAction,
} from './store/customerReducer';
import { fetchCustomers } from './asyncReducers/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <div className="App">
        <div style={{ fontSize: '2rem' }}>Баланс: {cash}</div>
        <div>
          <button onClick={() => addCash(Number(prompt()))}>
            Пополнить счет{' '}
          </button>
          <button onClick={() => getCash(Number(prompt()))}>
            Снять со счета
          </button>
          <button onClick={() => addCustomer(prompt())}>
            Добавить клиента
          </button>

          <button onClick={() => dispatch(fetchCustomers())}>
            Загрузить из базы
          </button>
        </div>
        <div>
          <div
            style={{
              display: 'flex',
            }}
          >
            {customers?.map((customer) => (
              <h2
                style={{
                  margin: '5px',
                  border: '1px solid black',
                  padding: '10px 10px',
                  cursor: 'pointer',
                }}
                key={customer.id}
                onClick={() => removeCustomer(customer)}
              >
                {customer.name}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
