import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header.jsx/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  

  const dispatch = useDispatch();

  const customers = useSelector(state => state.customers.customers)

  return (
    <div className="App">
      <Header />
      <div className="search_bar_wrapper">
        <div className="input_wrapper">
          <h3 >Введите логин пользователя, которого хотите найти</h3>
          <input 
        
          className="input" type="text" placeholder="find user"  />
        </div>

        <div className="search_popup">
          <h3 className="title_search_popup">Сортировать по</h3>
          <ul className="lists_wrapper" none>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <button onClick={() => dispatch(fetchCustomers())} >Отобразить юзеров</button>
      <div className="content_wrapper">
        {customers .map((el) => (
          <div className="block_user" key={el.id}>
            <div className="img_wrapper">
              <img src={el.avatar_url} alt="img_user" className="img_user" />
            </div>
            <div className="name_user">{el.login}</div>
          </div>
        ))}
      </div>
      <div className="wrapper_user_content">
          <div className="img_wrapper_content">
            <img src="" />
          </div>
          <div className="user_infro_wrapper">
            <h3>Name user</h3>
            <span>Git Url</span>
          </div>
      </div>
    </div>
  );
}

export default App;
