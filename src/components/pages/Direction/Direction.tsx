import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {
      CM_DirectionApiResponse,
      CM_DirectionLegsConfig,
      DirectionTravelMode
} from "models/citymapper.model";
import {getTransitionDirection} from "services/citymapper";
import {example} from "./Direction-data";

import TravelWalk from "components/travel/travel-walk/travel-walk";
import TravelTransit from "components/travel/travel-transit/travel-transit";

import './Direction.scss';


interface DirectionParams {
  'end-address': string | null;
  'end-coord': string | null;
  'start-address': string | null;
  'start-coord': string | null;
}

const Direction = () => {
  const [directionDesc, setDirectionDesc] = useState<DirectionParams | null>(null);
  const [directionData, setDirectionData] = useState<CM_DirectionApiResponse | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const data: DirectionParams = {
      'end-address': searchParams.get('end-address'),
      'start-address': searchParams.get('start-address'),
      'end-coord': searchParams.get('end-coord'),
      'start-coord': searchParams.get('start-coord'),
    };

    setDirectionDesc(data);
    // Using hard data to avoid api usage
    // getTransitionDirection(data["start-coord"], data["end-coord"]).then(
    //   (res) => setDirectionData(res),
    //   (err) => console.error(err)
    // )
    setDirectionData(example);
  }, []);

  const processTransitData = (data: CM_DirectionLegsConfig) => {
    switch (data.travel_mode) {
      case DirectionTravelMode.Walk:
        return <TravelWalk/>;
      case DirectionTravelMode.Transit:
        return <TravelTransit/>;
      default:
        return 'No data';
    }
  };

  return (
    <div className="direction">
      <div className="direction-header">
        {
          directionDesc &&
          <h2 className="direction-title">
            <span>{directionDesc["start-address"]}</span>
            <FontAwesomeIcon className="direction-separator" icon={faChevronRight}/>
            <span>{directionDesc["end-address"]}</span>
          </h2>
        }
      </div>

      <div className="direction-body">
        {
          directionData?.routes[0]?.legs.map((legData, index) => {
            return <div key={index}>{ processTransitData(legData) }</div>
          })
        }
      </div>
    </div>
  )
}

export default Direction;
