import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define a type for the items you expect to receive
type Item = {
  id: number;
  name: string;
};

export default function App() {
  const [result, setResult] = useState<Item[]>([]); // Use the defined type

  useEffect(() => {
    
    (async () => {
      try {
        
        const response = await axios.get<Item[]>('http://localhost:5050/data');
        setResult(response.data); 
      } catch (error) {
        console.error('There was an error fetching the data:', error);
        
      }
    })();
  }, []);

  return (
    <div>
      {result.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
