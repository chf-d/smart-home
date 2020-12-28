import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {

    let sendIndex = () => {

        props.getIndex(props.index)
    }

    return (
        <div id='roomButtonsDiv'>
            <Link to='/Room'>
                <button
                    className='roomButton'
                    onClick={sendIndex}
                    style={{ backgroundColor: props.color }}
                >{props.name}</button> </Link>
        </div>
    )
}
