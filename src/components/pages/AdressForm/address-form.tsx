import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import {LocationPointType} from "./address-form.model";
import {debounce} from "utilities/utility";
import {getCoordinatesFromAddress} from "services/location";

import Button from "components/inputs/button/button";
import InputAutocomplete from "components/inputs/input-autocomplete/input-autocomplete";

import './adress-form.scss';

const AddressForm = () => {
  const [ startAutocomplete, setStartAutocomplete ] = useState<string[]>([]);
  const [ endAutocomplete, setEndAutocomplete ] = useState<string[]>([]);

  const canSubmit = () => true;
  const getCoordinates = (address: string, type: LocationPointType) => {
      debounce(() => {
        if (!!address) {
          getCoordinatesFromAddress(address).then(res => {
            const autocomplete = res.features.map(feature => feature.properties.label);

            if (type === LocationPointType.Start) {
              setStartAutocomplete(autocomplete);
            } else if (LocationPointType.End) {
              setEndAutocomplete(autocomplete);
            }
          }, console.error);
        } else {
          if (type === LocationPointType.Start) {
            setStartAutocomplete([]);
          } else if (LocationPointType.End) {
            setEndAutocomplete([]);
          }
        }
      });
  };

  return (
    <div className="address-form">
      <h1 className="description">Indiquez votre itinéraire</h1>

      <div className="inputs-container">
        <InputAutocomplete
          placeholder="Départ"
          onInputValueChange={val => getCoordinates(val, LocationPointType.Start)}
          autocomplete={ startAutocomplete }/>
        <FontAwesomeIcon className="middle-arrow" icon={ faArrowRight }/>
        <InputAutocomplete
          placeholder="Arrivé"
          onInputValueChange={val => getCoordinates(val, LocationPointType.End)}
          autocomplete={ endAutocomplete }/>
      </div>


      <div className="submit-btn">
        <Button disabled={ canSubmit() }>En route !</Button>
      </div>
    </div>
  );
}

export default AddressForm;
