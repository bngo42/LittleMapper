import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import {InputType} from "components/inputs/input/input.model";
import {LocationPointType} from "./address-form.model";
import {debounce} from "utilities/utility";
import {getCoordinatesFromAddress} from "services/location";

import Input from "components/inputs/input/input";
import Button from "components/inputs/button/button";

import './adress-form.scss';

const AddressForm = () => {
  const [ startAutocomplete, setStartAutocomplete ] = useState([]);
  const [ endAutocomplete, setEndAutocomplete ] = useState([]);

  const canSubmit = () => true;
  const getCoordinates = (address: string, type: LocationPointType) => {
    if (!!address) {
      debounce(() => {
        getCoordinatesFromAddress(address).then(res => {
          if (type === LocationPointType.Start) {
            setStartAutocomplete(res.features);
          } else if (LocationPointType.End) {
            setEndAutocomplete(res.features);
          }
        }, console.error);
      });
    }
  };

  return (
    <div className="adress-form">
      <h1 className="description">Indiquez votre itinéraire</h1>

      <div className="inputs-container">
        <Input
          type={ InputType.Text }
          onValueChange={ val => getCoordinates(val, LocationPointType.Start) }
          placeholder="Départ"/>
        <FontAwesomeIcon className="middle-arrow" icon={ faArrowRight }/>
        <Input
          type={ InputType.Text }
          onValueChange={ val => getCoordinates(val, LocationPointType.End) }
          placeholder="Arrivé"/>
      </div>

      <div className="submit-btn">
        <Button disabled={ canSubmit() }>En route !</Button>
      </div>
    </div>
  );
}

export default AddressForm;
