import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncAction/customers';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customer.customers);

  const addCash = (cash) => {
    if (typeof cash === 'number' && !isNaN(cash))
      dispatch({type: "ADD_CASH", payload: cash});
    else
      alert("Неверный ввод");
  }

  const getCash = (cash) => {
    if (typeof cash === 'number' && !isNaN(cash))
      dispatch({type: "GET_CASH", payload: cash});
    else
      alert("Неверный ввод")
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className={'app'} style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <div style={{ fontSize: "3em" }}>{cash}</div>
      <div style={{display: "flex", justifyContent: "space-around", width: "50%"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer =>
            <div 
              key={customer.id}
              onClick={() => removeCustomer(customer)} 
              style={{fontSize: "20px", border: "1px solid black", padding: "10px", marginTop: 10}}>
              {customer.name}
            </div>
          )}
        </div>
        :
        <div style={{fontSize: "20px", marginTop: 20}}>
          Клиенты отсутствуют
        </div>
      }
    </div>
  );
}

export default App;
