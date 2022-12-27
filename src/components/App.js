import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SubscriptionsPage from '../pages/SubscriptionsPage/SubscriptionsPage'
import SubscriptionId from "../pages/SubscriptionId/SubscriptionId";
import HomePage from '../pages/HomePage/HomePage'
import { useEffect, useState } from "react";
import UserInfoContext from '../context/UserInfoContext';

export default function App() {


  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expDate, setExpDate] = useState('');


  const data = localStorage.getItem('token');
  const [token, setToken] = useState(data ? JSON.parse(data) : '');

  const user = localStorage.getItem('userInformation');
  const [userInformation, setUserInformation] = useState(user ? JSON.parse(user) : '');

  const order = localStorage.getItem('orderDetail');
  const [orderDetail, setOrderDetail] = useState(order ? JSON.parse(user) : '');


  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('orderDetail', JSON.stringify(orderDetail));
    localStorage.setItem('userInformation', JSON.stringify(userInformation));
  })




  return (

    <BrowserRouter>
      <UserInfoContext.Provider value={{
        token, setToken, userInformation, setUserInformation, name, setName, cardNumber, setCardNumber, securityCode, setSecurityCode,
        expDate, setExpDate, orderDetail, setOrderDetail
      }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/subscriptions/:idPlano" element={<SubscriptionId />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserInfoContext.Provider>
    </BrowserRouter>

  );
}


