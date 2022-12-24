import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SubscriptionsPage from '../pages/SubscriptionsPage/SubscriptionsPage'
import SubscriptionId from "../pages/SubscriptionId/SubscriptionId";
import HomePage from '../pages/HomePage/HomePage'
import { useEffect, useState } from "react";
import UserInfoContext from '../context/UserInfoContext';

export default function App() {
  const [token, setToken] = useState('');
  const [userInformation, setUserInformation] = useState(undefined);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expDate, setExpDate] = useState('');
  const [planBenefit, setPlanBenefit] = useState(undefined);
  const [orderDetail, setOrderDetail] = useState('');


  useEffect(() => {
    const data = localStorage.getItem('token');
    //const order = localStorage.getItem('orderInfo');

    if(data){
      setToken(JSON.parse(data));
      //setOrderDetail(JSON.parse(order));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('orderDetail', JSON.stringify(orderDetail));
  })

  return (

    <BrowserRouter>
      <UserInfoContext.Provider value={{
        token, setToken, userInformation, setUserInformation, name, setName,
        cardNumber, setCardNumber, securityCode, setSecurityCode, expDate, setExpDate,
         planBenefit, setPlanBenefit, orderDetail, setOrderDetail
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


