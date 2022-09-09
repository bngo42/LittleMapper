import {useState} from "react";
import './loader.scss';

const Loader = () => {
  const [ showLoader, setShowLoader ] = useState(false);

  return (
    <>
    {
      showLoader &&
      <div className="loader">
        <div className="spinner"></div>
      </div>
    }
    </>
  )
}

export default Loader;
