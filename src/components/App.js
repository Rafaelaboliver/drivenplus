import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SubscriptionsPage from '../pages/SubscriptionsPage/SubscriptionsPage'
import SubscriptionId from "../pages/SubscriptionId/SubscriptionId";
import HomePage from '../pages/HomePage/HomePage'
import { useEffect, useState } from "react";
import { UserInfoContext } from '../context/UserInfoContext';

export default function App() {
  const [token, setToken] = useState('');
  const [membershipInformation, setMembershipInformation] = useState(undefined);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expDate, setExpDate] = useState('');
  const [membershipId, setMembershipId] = useState ('');
  const [planBenefit, setPlanBenefit] = useState(undefined);

  useEffect(() => {

    const loggedInUser = localStorage.getItem('userData');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser).token
      setToken(foundUser);

    } else {
      alert('Realize login!')
    }
  }, []);

  return (

    <BrowserRouter>
      <UserInfoContext.Provider value={{
        token, setToken, membershipInformation, setMembershipInformation, name, setName,
        cardNumber, setCardNumber, securityCode, setSecurityCode, expDate, setExpDate,
        membershipId, setMembershipId, planBenefit, setPlanBenefit
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


