import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import AddRoom from './AddRoom'
import Room from './Room'
import Lottie from 'react-lottie'
import logoAnimationData from '../img/logo.json'
import AddRoomAnimationData from '../img/addRoom.json'
import AirConditionerOn from '../img/Air conditioner on.json'
import AirConditionerOff from '../img/Air-conditioner-off.jpg'
import BoilerOn from '../img/boiler on.json'
import BoilerOff from '../img/boiler-off.jpg'
import StereoOn from '../img/Stereo on.json'
import StereoOff from '../img/Stereo-off.jpg'
import LightOn from '../img/light on.json'
import LightOff from '../img/light-off.jpg'
import '../App.css';

function App() {

  const [rooms, setRooms] = useState([])
  const [index, setindex] = useState('')

  const logoDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logoAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  const AddRoomDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AddRoomAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
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


  const addRoom = (type, name, color, roomAnimation) => {
    let newRoom = { type: type, name: name, color: color, roomAnimation: roomAnimation, product: [] }
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

  let turnOffOn = (roomIndex, buttonIndex) => {

    let updatedProduct = rooms[roomIndex].product.map((item, index) => {

      if (index == buttonIndex) {
        if (item.name == 'מזגן') {

          let off = <img id='AirConditionerOff' src={AirConditionerOff} />
          let on = <Lottie options={AirConditioner} height={50} width={100} />

          if (item.show.type == "img") {

            return { name: item.name, show: on }

          }
          else {
            return { name: item.name, show: off }
          }
        }
        else if (item.name == 'דוד') {

          let off = <img id='BoilerOff' src={BoilerOff} />
          let on = <Lottie options={Boiler} height={100} width={75} />

          if (item.show.type == "img") {

            return { name: item.name, show: on }

          }
          else {
            return { name: item.name, show: off }
          }
        }
        else if (item.name == 'מערכת סטריאו') {

          let off = <img id='StereoOff' src={StereoOff} />
          let on = <Lottie options={Stereo} height={50} width={100} />

          if (item.show.type == "img") {

            return { name: item.name, show: on }

          }
          else {
            return { name: item.name, show: off }
          }
        }
        else if (item.name == 'מנורה') {

          let off = <img id='LightOff' src={LightOff} />
          let on = <Lottie options={Light} height={50} width={50} />

          if (item.show.type == "img") {

            return { name: item.name, show: on }

          }
          else {
            return { name: item.name, show: off }
          }
        }

      }

      else {
        return { name: item.name, show: item.show }
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
              roomAnimation: item.roomAnimation,
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
              roomAnimation: item.roomAnimation,
              product: item.product
            }
          )
        }
      })
    )
  }

  return (
    <div className="App">
      <Lottie
        options={logoDefaultOptions}
        height={170}
        width={170}
      />
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
                    roomAnimation={item.roomAnimation}
                    index={index}
                    getIndex={getIndex} />
                })}
                <br />

                <Link to='/AddRoom'>
                  <Lottie
                    options={AddRoomDefaultOptions}
                    height={100}
                    width={100}
                  />
                </Link>
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
                turnOffOn={turnOffOn}
              />
            )
          }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
