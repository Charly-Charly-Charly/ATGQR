import React, { useState } from 'react';

function QRCodeForm() {
  const [url, setUrl] = useState('');
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add the logic to insert the data in the MySQL database
  } 

  return (
    <form onSubmit={handleSubmit}>
      <label>
        URL:
        <input className='' type="text" value={url} onChange={e => setUrl(e.target.value)} />
      </label>
      <label>
        Cantidad:
        <input type="number" value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))} />
      </label>
      <button className='bg-clr2 text-white px-6 py-2 rounded-lg mx-5' type="submit" >Submit</button>
    </form>
  );
}


export default QRCodeForm;