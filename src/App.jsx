
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
    <Navbar></Navbar>
      <div className='text-center my-8'>
        <button className='btn bg-gradient-to-r from-orange-800 to-zinc-800 text-center text-white mx-auto mb-8 text-2xl semi-bold'>Hot Hot Coffee: {coffees.length} </button>
        <div className='grid md:grid-cols-2 gap-2 container mx-auto'>
          {
            coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>
     
      
    </>
  )
}

export default App
