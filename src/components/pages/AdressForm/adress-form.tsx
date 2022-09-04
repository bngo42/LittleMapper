import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Input from "components/inputs/input";
import {InputType} from "components/inputs/input.model";

import './adress-form.scss';

const AdressForm = () => {
  return (
    <div className="adress-form">
      <h1 className="description">Indiquez votre itinéraire</h1>

      <div className="inputs-container">
        <Input type={ InputType.Text } placeholder="Départ"/>
        <FontAwesomeIcon className="middle-arrow" icon={ faArrowRight }/>
        <Input type={ InputType.Text } placeholder="Arrivé"/>
      </div>
    </div>
  );
}

export default AdressForm;
