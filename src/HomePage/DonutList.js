import React, { useState, useEffect } from 'react';
import Donut from './Donut';
import './styles.css'; 

function DonutList() {
  const [donuts, setDonuts] = useState([]);

  useEffect(() => {
    async function fetchDonuts() {
      try {
        const response = await fetch('http://localhost/Donuts/get_donuts.php');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setDonuts(data);
      } catch (error) {
        console.error("Could not fetch donuts:", error);
      }
    }

    fetchDonuts();
  }, []);

  return (
    <div className="donut">
      {donuts.map(donut => (
        <Donut key={donut.ID} name={donut.Name} description={donut.Description} price={donut.Price} />
      ))}
    </div>
  );
}

export default DonutList;
