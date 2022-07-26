import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>

    <PlanLayout>
        <Routes> 
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/invite" element={<PhoneConfirmation />}></Route>
        <Route exact path="/Code_Confirm" element={<CodeConfirm />}></Route>
        <Route exact path="/allow_notification" element={<AllowNotification />}></Route>
        </Routes>
    </PlanLayout>
    <AppLayout>
      <Routes>
      <Route exact path="/home" element={<Home/>}></Route>
      </Routes>
    </AppLayout>

    </BrowserRouter> 
  );
}
export default App;
