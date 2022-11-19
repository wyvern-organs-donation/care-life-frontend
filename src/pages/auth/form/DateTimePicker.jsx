import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function DateTimePicker() {

    const [selectedDate, setSelectedDate] = useState(null)
    return(
        <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy' placeholderText="01/01/1990" 
        className="bg-white my-2 p-1 flex border border-gray-200 roudend
        px-2 apperance-none outline-none w-full text-gray-800" />
    )
}