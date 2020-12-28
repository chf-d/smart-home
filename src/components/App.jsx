import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import AddRoom from './AddRoom'
import Room from './Room'
import logo from '../img/logo.svg';
import '../App.css';

function App() {

  const [rooms, setRooms] = useState([])
  const [index, setindex] = useState('')


  const addRoom = (type, name, color) => {
    let newRoom = { type: type, name: name, color: color, product: [] }
    setRooms([...rooms, newRoom])
  }

  let getIndex = (index) => {
    setindex(index)
  }

  let addProduct = (newProduct, index) => {

    let updatedRooms = rooms

    updatedRooms[index].product = [...updatedRooms[index].product, newProduct]

    setRooms(updatedRooms)

  }

  let ChangeButtonColor = (roomIndex, buttonIndex) => {

    let updatedProduct = rooms[roomIndex].product.map((item, index) => {

      if (index == buttonIndex) {

        if (item.color == 'red') {
          return { name: item.name, color: 'green' }
        }
        else {
          return { name: item.name, color: 'red' }
        }
      }

      else {
        return { name: item.name, color: item.color }
      }
    })

    setRooms(

      rooms.map((item, mapIndex) => {

        if (mapIndex == roomIndex) {

          return (

            {
              type: item.type,
              name: item.name,
              color: item.color,
              product: updatedProduct
            }
          )
        }
        else {
          return (

            {
              type: item.type,
              name: item.name,
              color: item.color,
              product: item.product
            }
          )
        }
      })
    )
  }

  return (
    <div className="App">
      <img id='logo' src={logo} />
      <hr />

      <h1 id='logoH1'>בית חכם</h1>

      <hr id='hr2' />

      <Router>
        <Switch>

          <Route exact path='/' component={() => {
            return (
              <div>

                {rooms.map((item, index) => {
                  return <Home
                    name={item.name}
                    color={item.color}
                    index={index}
                    getIndex={getIndex} />
                })}
                <br />
                <Link to='/AddRoom'> <button id='addRoomButton'>צור חדר חדש</button> </Link>
              </div>
            )
          }} />

          <Route path='/AddRoom' component={() => { return <AddRoom addRoom={addRoom} /> }} />

          <Route path='/Room' component={() => {
            return (
              <Room
                rooms={rooms}
                index={index}
                addProduct={addProduct}
                ChangeButtonColor={ChangeButtonColor}
              />
            )
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
