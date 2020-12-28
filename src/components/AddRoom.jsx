import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddRoom(props) {

    const [select, setSelect] = useState(false)
    const [selectValue, setSelectValue] = useState('')

    const [name, setName] = useState(false)
    const [nameValue, setNameValue] = useState('')

    const [color, setColor] = useState(false)
    const [colorValue, setColorValue] = useState('')

    let validSelect = (e) => {
        if (e.target.value == 0) {
            setSelect(false)
        }
        else {
            setSelect(true)
            setSelectValue(e.target.value)
        }
    }

    let validRoomName = (e) => {
        if (e.target.value.length > 5) {
            setName(false)
        }
        else if (e.target.value.length < 1) {
            setName(false)
        }
        else {
            setName(true)
            setNameValue(e.target.value)
        }
    }

    let validColorSelect = (e) => {
        if (e.target.value == 0) {
            setColor(false)
        }
        else {
            setColor(true)
            setColorValue(e.target.value)
        }
    }

    let add = () => {

        if (select != true || name != true || color != true) {
            alert('לא נבחר כל הפרטים')
        }
        else {
            props.addRoom(selectValue, nameValue, colorValue)
        }
    }

    return (
        <div>
            <select className='select' onChange={validSelect}>
                <option value="0">בחר חדר חדש</option>
                <option value="חדר שינה" >חדר שינה</option>
                <option value="אמבטיה/שירותים">אמבטיה/שירותים</option>
                <option value="מטבח">מטבח</option>
            </select>
            <br />
            <input className='select' id='addInput' autoComplete='off' placeholder="שם החדר" onChange={validRoomName} />
            <br />
            <select className='select' onChange={validColorSelect}>
                <option value="0">בחר צבע חדר</option>
                <option value="blue">כחול</option>
                <option value="red">אדום</option>
                <option value="green">ירוק</option>
            </select>

            <br />
            <Link to='/'> <button className='select' id='addButton' onClick={add}>הוסף את החדר</button> </Link>
        </div>
    )
}
