import { Component } from "react";
import AttendanceItem from "../AttendanceItem"

import "./index.css"

const testList = 
[{
    id:1,
    branch:"ECE",
    date:"11/11/22",
    timeSlots:{
        p1:{sub:"AWP",pre:false},
        p2:{sub:"MPMC",pre:true},
        p3:{sub:"CS",pre:true},
        p4:{sub:"ADC",pre:false},
        p5:{sub:"OE",pre:true},
        p6:{sub:"-",pre:true},
    }
}]
class Attendance extends Component
{
    state={attendaceList:testList}
    render()
    {
        const {attendaceList} = this.state
        return(
            <div className="bg-con">
                <div>
                <h1 className="clgName">Some College of Engineering</h1>
                <p className="info">The following is student's attendance</p>
                <div className="userInfo">
                    <div className="welcomebod">
                    <p className="welcome">Welcome!</p>
                    </div>
                    <div className="infobody">
                        <ul className="infoList">
                            <li className="eachItem">
                                <p className="ht">HTNO: </p>
                                <p className="roll">1302-98-745-33</p>
                            </li>
                            <li className="eachItem">
                                <p className="ht">Year: </p>
                                <p className="roll">3</p>
                            </li>
                            <li className="eachItem">
                                <p className="ht">Section: </p>
                                <p className="roll">A</p>
                            </li>
                            <li className="eachItem">
                                <p className="ht">Start Date: </p>
                                <p className="roll">13/12/22</p>
                            </li>
                        </ul>
                        <ul className="infoList">
                            <li className="eachItem">
                                <p className="ht">Student Name: </p>
                                <p className="roll">Hackster</p>
                            </li>
                            <li className="eachItem">
                                <p className="ht">Semester: </p>
                                <p className="roll">5</p>
                            </li>
                            <li className="eachItem">
                                <p className="ht">Acad Year: </p>
                                <p className="roll">2022-2023</p>
                            </li>
                            <li className="eachItem">
                                <p className="ht">End Date: </p>
                                <p className="roll">1/4/23</p>
                            </li>
                        </ul>
                        <div className="pfpcon">
                            <img src="logo192.png" className="pfp" />
                        </div>
                    </div>
                </div>
                <div className="noteCon">
                    <p className="note">Note: Blue Background color indicates Absent Class</p>
                </div>
                <div className="attCon">
                    <ul className="header">
                        <li className="item">SNo.</li>
                        <li className="item">Branch</li>
                        <li className="item">Date</li>
                        <li className="item">9:40-10:40</li>
                        <li className="item">10:40-11:40</li>
                        <li className="item">11:40-12:40</li>
                        <li className="item">13:20-14:20</li>
                        <li className="item">14:20-15:20</li>
                        <li className="item">15:20-16:20</li>
                        <li className="item">
                        <p>Daywise</p>
                            <ul className="dayitem">
                                <li>Pre</li>
                                <li>Abs</li>
                                <li>Total</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="fullDetails">
                        {testList.map((each)=>(<AttendanceItem details={each} key={each.id} />))}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default Attendance