import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SubscriptionsPage from '../pages/SubscriptionsPage/SubscriptionsPage'
import SubscriptionId from "../pages/SubscriptionId/SubscriptionId";
import HomePage from '../pages/HomePage/HomePage'

export default function App() {
  return (
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/subscriptions" element={<SubscriptionsPage/>}/>
        <Route path="/subscriptions/:idPlano" element={<SubscriptionId/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
  
  );
}


