import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import {FaHandSparkles} from 'react-icons/fa'
 import {FaSackDollar} from 'react-icons/fa6'
 import {CgNotes} from 'react-icons/cg'
 import {CiCoins1} from 'react-icons/ci'
 import {PiHandbag} from 'react-icons/pi'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line  ,PieChart, Pie, Sector} 
 from 'recharts';
function Home() {
  
     const data = [
         {
           name: 'Jan',
          //uv: 4000,
           pv: 0,
           amt:70,
         },
        {
        name: 'Feb',
           //uv: 3000,
           pv: 0,
           amt:50,
         },
         {
           name: 'Mar',
          // uv: 2000,
           pv: 0,
          amt: 100,
         },
         {
         name: 'Apr',
          //uv: 2780,
          pv: 0,
          amt: 80,
         },
         {
           name: 'May',
         // uv: 1890,
         pv: 0,
         amt: 90,
         },
         {
           name: 'june',
           //uv: 2390,
           pv: 0,
           amt:40,
         },
         {
           name: 'July',
          // uv: 3490,
          pv: 0,
          amt: 80,
         },
         {
            name: 'Aug',
           // uv: 3490,
           pv: 100,
           amt: 100,
          },
          {
            name: 'Sep',
           // uv: 3490,
           pv: 0,
           amt: 95,
          },
          {
            name: 'Oct',
           // uv: 3490,
           pv: 0,
           amt: 75,
          },
          {
            name: 'Nov',
           // uv: 3490,
           pv: 0,
           amt: 70,
          },
          {
            name: 'Dec',
           // uv: 3490,
           pv: 0,
           amt: 85,
          },
       ];
     

  return (
   
        <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Shahrukh <FaHandSparkles className='card_icon'/>,</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <FaSackDollar className='card_icon'/><br></br>
                    <h5>Earning</h5><br></br>
                </div>
                <div>
                <h2>$198k</h2>
                </div>
                <div>
                <h5> ↑ 37.8% this month</h5>
                </div>
                
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                <CgNotes className='card_icon'/><br></br>
                    <h5>Orders</h5><br></br>
                </div>
                <div>
                <h2>$2.4k</h2>
                </div>
                <div>
                <h5> ↓ 2% this month</h5>
                </div>
                
               
            </div>
            <div className='card'>
                <div className='card-inner'>
                <CiCoins1 className='card_icon'/><br></br>
                    <h5>Balance</h5><br></br>
                </div>
                <div>
                <h2>$2.4k</h2>
                </div>
                <div>
                <h5> ↓ 2% this month</h5>
                </div>
                
               
            </div>
           <div className='card'>
                <div className='card-inner'>
                <PiHandbag className='card_icon'/><br></br>
                    <h5>Total Sales</h5><br></br>
                </div>
                <div>
                <h2>$89k</h2>
                </div>
                <div>
                <h5> ↑ 11% this month</h5>
                </div>
                
               
            </div>
        </div>
        
        <div  className='charts' >
       <h3>Overview</h3><br></br>
            <p><ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
            
                {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
            </ResponsiveContainer>
           </p>



            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
               {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>

        </div> 
        <div>
            
            <h3>Product Sell</h3>
            <h6></h6>
            <table>
                <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
                </tr>
                
                <tr>
                <td><b>Abstract 3D</b></td>
                <td>32 in stock</td>
                <td><b>$45.99</b></td>
                <td>20</td>
                </tr>
                <tr>
               <td><b>Sarphens illistration</b></td>
                <td>32 in stock</td>
               <td><b>45.99</b></td>
                <td>20</td>
                
                </tr>
            </table>
        </div>
    </main>
    
  )
}

export default Home