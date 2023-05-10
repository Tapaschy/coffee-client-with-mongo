import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeContent from './component/CoffeeContent';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='bg-[#F4F3F0] p-36'>
      <h1>All coffee are here</h1>
      <h1>Total coffee {coffees.length}</h1>
      <div className='grid md:grid-cols-2'>
        {
          coffees.map(coffee => <CoffeeContent
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeContent>)
        }
      </div>
    </div>
  )
}

export default App
