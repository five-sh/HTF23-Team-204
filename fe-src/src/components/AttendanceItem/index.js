import IndiItem from "../IndiItem/index"

import "./index.css"

const AttendanceItem = (props)=>
{
    const {details} =  props
    const {id,branch,date,timeSlots} = details
    const{p1,p2,p3,p4,p5,p6} = timeSlots
    const attList = [p1,p2,p3,p4,p5,p6]
    let preCount=0
    attList.forEach((each)=>(each.pre? preCount=preCount+1:preCount=preCount))

    return(
        <li className="eitem">
            <p>{id}</p>
            <p>{branch}</p>
            <p>{date}</p>
            {attList.map((each)=>(<IndiItem details={each} />))}

        </li>
    )
}

export default AttendanceItem