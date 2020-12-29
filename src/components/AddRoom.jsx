import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import Bedroom from '../img/Bedroom.json'
import bathroom from '../img/bathroom.json'
import kitchen from '../img/kitchen.json'

export default function AddRoom(props) {

    const [select, setSelect] = useState(false)
    const [selectValue, setSelectValue] = useState('')

    const [name, setName] = useState(false)
    const [nameError, setNameError] = useState('')
    const [nameValue, setNameValue] = useState('')

    const [color, setColor] = useState(false)
    const [colorValue, setColorValue] = useState('')

    const [roomAni, setRoomAni] = useState('')


    const BedroomOptions = {
        loop: true,
        autoplay: true,
        animationData: Bedroom,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const bathroomOptions = {
        loop: true,
        autoplay: true,
        animationData: bathroom,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const kitchenOptions = {
        loop: true,
        autoplay: true,
        animationData: kitchen,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    let validSelect = (e) => {
        if (e.target.value == 0) {
            setSelect(false)
        }
        else {
            setSelect(true)
            setSelectValue(e.target.value)

            if (e.target.value == 'חדר שינה') {
                setRoomAni(<Lottie options={BedroomOptions} height={50} width={50} />)
            }
            else if (e.target.value == 'אמבטיה/שירותים') {
                setRoomAni(<Lottie options={bathroomOptions} height={60} width={60} />)
            }
            else if (e.target.value == 'מטבח') {
                setRoomAni(<Lottie options={kitchenOptions} height={55} width={55} />)
            }
        }
    }

    let validRoomName = (e) => {
        setNameError('')

        if (e.target.value.length > 5) {
            setName(false)
            setNameError('שם החדר מוגבל עד 5 תווים')
        }
        else if (e.target.value.length < 1) {
            setName(false)
            setNameError('שם החדר צריכה להיות לפחות תוו אחד')
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
            props.addRoom(selectValue, nameValue, colorValue, roomAni)
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

            <input className='select' id='addInput' autoComplete='off' placeholder="שם החדר" onChange={validRoomName} />
            <div id='nameError'>{nameError}</div>
            <select id='select2' className='select' onChange={validColorSelect}>
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
