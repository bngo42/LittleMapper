import {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPersonWalking} from "@fortawesome/free-solid-svg-icons";
import {TravelProps} from "components/travel/travel.model";
import '../travel-common.scss';
import './travel-walk.scss';

const TravelWalk = ({
  data = {},
  nextData = {}
}: TravelProps) => {
  useEffect(() => console.log('walk', data, nextData), []);
  return (
    <div className="travel-walk transit" style={{ width: `${ data?.duration_seconds || 0 }px` }}>
      <div className="walk-top">
        <div className="walk-label">
          <FontAwesomeIcon icon={ faPersonWalking }/>
          <div className="walk-name">
            <span>Marcher jusqu'a </span>
            {
              nextData?.stops &&
              <span>{ nextData.stops[0].name }</span>
            }
          </div>
        </div>
        <div className="travel-duration">
          {Math.floor((data?.duration_seconds || 0) / 60)} min
        </div>
      </div>

      <div className="travel-line"></div>
    </div>
  )
}

export default TravelWalk;
