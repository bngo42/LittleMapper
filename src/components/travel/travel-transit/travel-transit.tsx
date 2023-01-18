import {useEffect} from "react";
import {TravelProps} from "components/travel/travel.model";
import '../travel-common.scss';
import './travel-transit.scss';

const TravelTransit = ({
  data = {}
}: TravelProps) => {
  // useEffect(() => console.log('transit', data), []);

  return (
    <div className="travel-transit transit" style={{ width: `${ data?.duration_seconds }px` }}>
      {
        (data?.services && data.stops) &&
        <>
          <div className="transit-top">
              <span className="transit-label">
                <img src={data?.services[0].brand.images[0].url} alt="Train icon" height="80%"/>
                <span className="stop-name">{data?.stops[0].name}</span>
              </span>
            <div className="travel-duration">{Math.floor((data?.duration_seconds || 0) / 60)}min</div>
          </div>

          <div className="travel-line" style={{ borderColor: data?.services[0].color }}></div>
        </>
      }
    </div>
  )
}

export default TravelTransit;
