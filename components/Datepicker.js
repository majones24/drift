import DatePicker from "react-multi-date-picker";
import { useState } from "react";


export default function Example() {
    const [value, setValue] = useState(new Date())

    return (
        <DatePicker
            value={value}
            onChange={setValue}
        />
    )
}