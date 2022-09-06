import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import {LocationPointType} from "./address-form.model";
import {debounce} from "utilities/utility";
import {getCoordinatesFromAddress} from "services/location";
import {getTransitionDirection} from "services/citymapper";

import Button from "components/inputs/button/button";
import InputAutocomplete from "components/inputs/input-autocomplete/input-autocomplete";

import './adress-form.scss';

const AddressForm = () => {
  const [ startAutocomplete, setStartAutocomplete ] = useState<any[]>([]);
  const [ endAutocomplete, setEndAutocomplete ] = useState<any[]>([]);
  const [ startLocation, setStartLocation ] = useState(null);
  const [ endLocation, setEndLocation ] = useState(null);

  const isSubmitDisabled = () => !startLocation || !endLocation;
  const getCoordinates = (address: string, type: LocationPointType) => {
      debounce(() => {
        if (!!address) {
          getCoordinatesFromAddress(address).then(res => {
            const autocomplete = res.features.map(feature => {
              return {
                id: feature.properties.id,
                lng: feature.geometry.coordinates[0],
                lat: feature.geometry.coordinates[1],
                label: feature.properties.label
              };
            });
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

  const getInstruction = () => {
    if (startLocation && endLocation) {
      const startPoint = `${startLocation['lat']},${startLocation['lng']}`;
      const endPoint = `${endLocation['lat']},${endLocation['lng']}`;

      getTransitionDirection(startPoint, endPoint).then(console.log, console.error);
    }
  };

  return (
    <div className="address-form">
      <h1 className="description">Indiquez votre itinéraire</h1>

      <div className="inputs-container">
        <InputAutocomplete
          placeholder="Départ"
          onInputValueChange={val => getCoordinates(val, LocationPointType.Start)}
          autocomplete={ startAutocomplete }
          onAutocompleteValuePicked={ setStartLocation }/>
        <FontAwesomeIcon className="middle-arrow" icon={ faArrowRight }/>
        <InputAutocomplete
          placeholder="Arrivé"
          onInputValueChange={val => getCoordinates(val, LocationPointType.End)}
          autocomplete={ endAutocomplete }
          onAutocompleteValuePicked={ setEndLocation }/>
      </div>

      <div className="submit-btn">
        <Button
            disabled={isSubmitDisabled()}
            click={ getInstruction }>
          En route !
        </Button>
      </div>
    </div>
  );
}

export default AddressForm;
