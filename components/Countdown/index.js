import Completionist from './Completionist'
import { zeroPad } from "react-countdown";

const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      return (<Completionist />)
    } else {
      return (
        <div className="flex text-6xl sm:text-2xl">
          <div className="flex items-center">
            <div className="flex flex-col m-5 space-y-5 items-center">
              <h5 className="text-center">Days</h5>
              <span>{days}</span>
            </div>
            <div className="flex flex-col m-5 space-y-5 items-center">
              <h5 className="text-center">Hours</h5>
              <span>{zeroPad(hours)}</span>
            </div>
            <div className="flex flex-col m-5 space-y-5 items-center">
              <h5 className="text-center">Minutes</h5>
              <span>{zeroPad(minutes)}</span>
            </div>
            <div className="flex flex-col m-5 space-y-5 items-center">
              <h5 className="text-center">Seconds</h5>
              <span>{zeroPad(seconds)}</span>
            </div>
          </div>
        </div>
      )
    }
}

export default renderer;