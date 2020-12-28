import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Room(props) {

    const [display, setDisplay] = useState('none')
    const [productValue, setProductValue] = useState('')

    let saveValue = (e) => {

        setProductValue({ name: e.target.value, color: 'red' })
    }

    let addProduct = () => {

        if (productValue != '') {

            if (productValue.name != 0) {

                if (props.rooms[props.index].product.length >= 5) {
                    alert('יותר מ5 מוצרים')
                }

                else if (productValue.name == 'דוד') {

                    if (props.rooms[props.index].type == 'אמבטיה/שירותים') {

                        props.addProduct(productValue, props.index)
                    }
                    else {

                        alert('דוד אפשר רק בשירותים')
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

                        alert('אפשר רק מערכת סטריאו אחת')
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
    }

    let ChangeButtonColor = (buttonindex) => {

        props.ChangeButtonColor(props.index, buttonindex)
    }

    return (
        <div id='roomDiv'>
            <h3>שם החדר: {props.rooms[props.index].name}</h3>
            <h3>סוג החדר: {props.rooms[props.index].type}</h3>
            <p>לחץ על מוצר כדי להפעיל/לכבות</p>
            <br />
            <br />

            {props.rooms[props.index].product.map((item, buttonindex) => {

                return <button
                    className='itemButtons'
                    style={{ backgroundColor: item.color }}
                    onClick={() => { ChangeButtonColor(buttonindex) }}
                >{item.name}</button>

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
