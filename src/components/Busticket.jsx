import React,{useState} from 'react'
import LuggageIcon from '@mui/icons-material/Luggage';
import Bus from './Busapi';
const Busticket = () => {
  const [busData, setBusData] = useState('')
  return (
    <>
     <form className='formI'>
      <div className="air_container">
        <div className="fromto">
        <label for="choose">From:</label>
                <select name="cnation" id="cnation" onChange={(e) => setBusData(e.target.value)} className='selebox'>
                    <option >Where are you from?</option>
                    <option>Kathmandu</option>
                    <option>Pokhara</option>
                    <option>Lumbini</option>
                    <option>  Lukla</option>
                    <option>Dhangadi</option>
                    <option>Chitwan</option>
                    <option>Jumla</option>
                    <option>Dolpa</option>
                    <option>Janakpur</option>

                </select>
        </div>
        <div className="fromto">
        <label for="choose">To:</label>
                <select name="cnation" id="cnationto" className='selebox'>
                    <option value="nation">Where are you going?</option>
                    <option value="nepal">Kathmandu</option>
                    <option value="america">Pokhara</option>
                    <option value="australia">Lumbini</option>
                    <option value="india">  Lukla</option>
                    <option value="japan">Dhangadi</option>
                    <option value="germany">Chitwan</option>
                    <option value="france">Jumla</option>
                    <option value="bhutan">Dolpa</option>
                    <option value="uae">Janakpur</option>
                </select>
        </div>
        <div class="check_in">
                <label for="checkin">Departue Date:</label>
                <input type="date" id="cindate" name="cindate"/>
                <button>Search</button>
            </div>
      </div>
     </form>
     {
      Bus.filter((buss)=>buss.from.includes(busData)).map((predata)=>{
        return(
          <div className="fetch_main">
<div className="fetchdata">
        <div className="fetchdata1">
        <div className="cutedata">
          <img src="./Images/bus.png" alt="" />
          <h2>{predata.bus}</h2>
          <h3>{predata.time}</h3>
          
        </div>
        <div className="cutedata">
          <img src="./Images/gbus.png" alt="" />
          <h2>{predata.from}</h2>
          
        </div>
        <div className="cutedata">
          <img src="./Images/arrow.png" alt="" />
          <h2>{predata.rtime}</h2>
          
        </div>
        <div className="cutedata">
          <img src="./Images/sbus.png" alt="" />
          <h2>{predata.to}</h2>
          
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
              <button>Book</button>
            </div>
        </div>
        )
      })
     }
     
    </>
  )
}
export default Busticket;
