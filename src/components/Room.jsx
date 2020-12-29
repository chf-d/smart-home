import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AirConditionerOn from '../img/Air conditioner on.json'
import AirConditionerOff from '../img/Air-conditioner-off.jpg'
import BoilerOn from '../img/boiler on.json'
import BoilerOff from '../img/boiler-off.jpg'
import StereoOn from '../img/Stereo on.json'
import StereoOff from '../img/Stereo-off.jpg'
import LightOn from '../img/light on.json'
import LightOff from '../img/light-off.jpg'

export default function Room(props) {

    const [display, setDisplay] = useState('none')
    const [productValue, setProductValue] = useState('0')

    const AirConditioner = {
        loop: true,
        autoplay: true,
        animationData: AirConditionerOn,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const Boiler = {
        loop: true,
        autoplay: true,
        animationData: BoilerOn,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const Stereo = {
        loop: true,
        autoplay: true,
        animationData: StereoOn,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const Light = {
        loop: true,
        autoplay: true,
        animationData: LightOn,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    let saveValue = (e) => {


        if (e.target.value == 'מזגן') {
            setProductValue({
                name: e.target.value,
                show: <img id='AirConditionerOff' src={AirConditionerOff} />
            })
        }
        else if (e.target.value == 'דוד') {
            setProductValue({
                name: e.target.value,
                show: <img id='BoilerOff' src={BoilerOff} />
            })
        }
        else if (e.target.value == 'מערכת סטריאו') {
            setProductValue({
                name: e.target.value,
                show: <img id='StereoOff' src={StereoOff} />
            })
        }
        else if (e.target.value == 'מנורה') {
            setProductValue({
                name: e.target.value,
                show: <img id='LightOff' src={LightOff} />
            })
        }
    }

    let addProduct = () => {


        if (productValue != 0) {

            if (props.rooms[props.index].product.length >= 5) {
                alert('אפשר רק 5 מוצרים לחדר')
            }

            else if (productValue.name == 'דוד') {

                if (props.rooms[props.index].type == 'אמבטיה/שירותים') {

                    props.addProduct(productValue, props.index)
                }
                else {

                    alert('דוד אפשר רק בשירותים/אמבטיה')
                }
            }

            else if (productValue.name == 'מערכת סטריאו') {

                let counter = 0
                props.rooms[props.index].product.map((item) => {

                    if (item.name == 'מערכת סטריאו') {

                        counter++
                    }
                })

                if (counter != 0) {

                    alert('אפשר רק מערכת סטריאו אחת לחדר')
                }
                else {

                    props.addProduct(productValue, props.index)
                }
            }

            else {
                props.addProduct(productValue, props.index)
            }

            setDisplay('none')
        }

    }

    let turnOffOn = (buttonIndex) => {

        props.turnOffOn(props.index, buttonIndex)
    }

    return (
        <div id='roomDiv'>
            <h3>שם החדר: {props.rooms[props.index].name}</h3>
            <h3>סוג החדר: {props.rooms[props.index].type}</h3>
            <p>לחץ על מוצר כדי להפעיל/לכבות</p>
            <br />
            <br />

            {props.rooms[props.index].product.map((item, buttonIndex) => {

                return <button
                    className='itemButtons'
                    onClick={() => { turnOffOn(buttonIndex) }}
                >{item.show}</button>

            })}

            <br />
            <Link to='/'> <button className='roomButtons'>חזור לחדרים</button> </Link>

            <button className='roomButtons' onClick={() => { setDisplay('block') }}>הוסף מוצר</button>

            <div style={{ display: display }}>
                <select className='select' id='selectItens' onChange={saveValue}>
                    <option value="0">בחר מוצר</option>
                    <option value='מזגן'>מזגן</option>
                    <option value="דוד">דוד</option>
                    <option value="מערכת סטריאו">מערכת סטריאו</option>
                    <option value="מנורה">מנורה</option>
                </select>

                <button id='addItem' onClick={addProduct}>הוסף</button>
            </div>
        </div>
    )
}
