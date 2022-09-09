import {Route, Routes, Navigate} from "react-router-dom";

import Header from 'components/header/header';
import AddressForm from "components/pages/AdressForm/address-form";
import Direction from "components/pages/Direction/Direction";
import Loader from "components/loader/loader";

import './App.scss';

const App = () => {
  return (
    <>
      <Loader/>
      <div className="wrapper">
        <Header/>

        <div className="main-content">
          <Routes>
            <Route path="/" element={ <AddressForm/> }/>
            <Route path="/direction" element={ <Direction/> }/>
            <Route path="*" element={ <Navigate replace to="/" /> }/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
