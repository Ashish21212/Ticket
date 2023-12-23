import React, { useState } from 'react'
import Air from './Airapi';
const Airticket = () => {
  const [airData, setAirData] = useState('')
const Book=()=>{
  alert(`Booked ${airData} to ${Air.to}`);
}



  return (
    <>
      <form className='formI' >
        <div className="air_container">
          <div className="fromto">
            <label>From:</label>
            <select name="from" onChange={(e) => setAirData(e.target.value)} id="cnation" className='selebox'>
              <option selected>Where are you from?</option>
              <option>Kathmandu</option>
              <option>Pokhara</option>
              <option>Lumbini</option>
              <option>Lukla</option>
              <option>Dhangadi</option>
              <option>Chitwan</option>
              <option>Jumla</option>
              <option>Dolpa</option>
              <option>Janakpur</option>

            </select>
            {/* <input type="text" onChange={(e)=>setAirData(e.target.value)} /> */}
          </div>
          <div className="fromto">
            <label for="choose">To:</label>
            <select name="to" id="cnationto"  className='selebox'>
              <option selected>Where are you going?</option>
              <option >Kathmandu</option>
              <option>Pokhara</option>
              <option>Lumbini</option>
              <option>Lukla</option>
              <option>Dhangadi</option>
              <option>Chitwan</option>
              <option>Jumla</option>
              <option>Dolpa</option>
              <option>Janakpur</option>

            </select>
          </div>
          
        </div>



      </form>
      {

        Air.filter((uir) => uir.from.includes(airData)).map((preval)  => {

          return (
            <div className="fetch_main">
            <div className="fetchdata" key={preval.id}>

              <div className="fetchdata1">
                <div className="cutedata">
                  <img src="./Images/planelogo.png" alt="" />
                  <h2>{preval.plane}</h2>
                  <h3>{preval.time}</h3>

                </div>
                <div className="cutedata">
                  <img src="./Images/planetakeoff.png" alt="" />
                  <h2>{preval.from}</h2>

                </div>
                <div className="cutedata">
                  <img src="./Images/arrow.png" alt="" />
                  <h2>{preval.rtime}</h2>

                </div>
                <div className="cutedata">
                  <img src="./Images/planeland.png" alt="" />
                  <h2>{preval.to}</h2>

                </div>
                <div className="cutedata">
                  <img src="./Images/suitcase.png" alt="" />
                  <h2>20kg</h2>

                </div>
                <div className="cutedata">
                  <img src="./Images/handcarry.png" alt="" />
                  <h2>15kg</h2>

                </div>
              </div>

            </div>
            <div className="cost">
              <h2>Price:Rs 2000</h2>
              <button onClick={Book}>Book</button>
            </div>
            </div>
          )
        })
      }


    </>
  )
}

export default Airticket;
