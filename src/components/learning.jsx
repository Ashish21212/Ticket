// import React, { useState } from 'react'
// import Air from './Airapi';
// const Airticket = () => {
//   const [airData, setAirData] = useState({
//     from: '',
//     to: '',
//     date: ''
//   })
//   const [airDatas, setAirDatas] = useState(Air);


//   const eventFirst = (event) => {
//     const { value, name } = event.target;
//     setAirData((olddata) => {
//       return {
//         ...olddata,
//         [name]: value
//       }

//     })



//   }
//   let { from, to, date } = airData;
//   const Click = (e) => {
//     setAirDatas([...airDatas, { from, to, date }]);
//     e.preventDefault();


//   }
//   return (
//     <>
//       <form className='formI' >
//         <div className="air_container">
//           <div className="fromto">
//             <label>From:</label>
//             <select name="from" value={airData.from} onChange={eventFirst} id="cnation" className='selebox'>
//               <option selecte>Where are you from?</option>
//               <option>Kathmandu</option>
//               <option>Pokhara</option>
//               <option>Lumbini</option>
//               <option>Lukla</option>
//               <option>Dhangadi</option>
//               <option>Chitwan</option>
//               <option>Jumla</option>
//               <option>Dolpa</option>
//               <option>Janakpur</option>

//             </select>
//           </div>
//           <div className="fromto">
//             <label for="choose">To:</label>
//             <select name="to" id="cnationto" value={airData.to} onChange={eventFirst} className='selebox'>
//               <option selected>Where are you going?</option>
//               <option >Kathmandu</option>
//               <option>Pokhara</option>
//               <option>Lumbini</option>
//               <option>Lukla</option>
//               <option>Dhangadi</option>
//               <option>Chitwan</option>
//               <option>Jumla</option>
//               <option>Dolpa</option>
//               <option>Janakpur</option>

//             </select>
//           </div>
//           <div class="check_in">
//             <label for="checkin">Departue Date:</label>
//             <input type="date" id="cindate" onChange={eventFirst} name="date" />
//             <button onClick={Click}>Search</button>
//           </div>
//         </div>
//       </form>
//       {

//         airDatas.map((preval) => {
        
//           return (
           
//             <div className="fetchdata">

//               <div className="fetchdata1">
//                 <div className="cutedata">
//                   <img src="./Images/planelogo.png" alt="" />
//                   <h2>U3210</h2>
//                   <h3>6:00 AM</h3>

//                 </div>
//                 <div className="cutedata">
//                   <img src="./Images/planetakeoff.png" alt="" />
//                   <h2>{preval.from}</h2>

//                 </div>
//                 <div className="cutedata">
//                   <img src="./Images/arrow.png" alt="" />
//                   <h2>{preval.time}</h2>

//                 </div>
//                 <div className="cutedata">
//                   <img src="./Images/planeland.png" alt="" />
//                   <h2>{preval.to}</h2>

//                 </div>
//                 <div className="cutedata">
//                   <img src="./Images/suitcase.png" alt="" />
//                   <h2>20kg</h2>

//                 </div>
//                 <div className="cutedata">
//                   <img src="./Images/handcarry.png" alt="" />
//                   <h2>15kg</h2>
//                   <h3>{preval.date}</h3>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//       }


//     </>
//   )
// }

// export default Airticket;
