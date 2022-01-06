import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css'


export default function Form() {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    return (
        <>
            <h1 className="text-center">Select your best plan</h1>
            <div className="date-title">
                <h4>Coverage dates</h4>
            </div>
            <div className="date-container">
                <DatePicker
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText='select start date'
                    onChange={date => setStartDate(date)}
                />
                <i className="fas fa-arrow-right"></i>
                <DatePicker
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText='select end date'
                    onChange={date => setEndDate(date)}
                />
            </div>

            <div className="age-box text-center my-4">
                <label>Age: </label>
                <input type="number" onInput={maxLengthCheck} maxLength="2" min="1" max="99" />
            </div>

            <div className="policy-container text-center my-2">
                <h4 className="text-center">Policy Max (Per Person)</h4>
                <select className="text-center">
                    <option value="text">--Choose your policy--</option>
                    <option value="text">50000</option>
                    <option value="text">100000</option>
                    <option value="text">250000</option>
                    <option value="text">500000</option>
                </select>
            </div>

            <div className="policy-container text-center my-4">
                <h4 className="text-center">Citizenship</h4>
                <select className="text-center">
                    <option value="text">--Nationality--</option>
                    <option value="text">United States</option>
                    <option value="text">Canada</option>
                    <option value="text">China</option>
                    <option value="text">Mexico</option>
                </select>
            </div>


        </>
    )
}
