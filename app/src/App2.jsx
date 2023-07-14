import React, { useState } from 'react';

function App2() {
  const [sliderValue1, setSliderValue] = useState(5);
  const [sliderValue2, setSliderValue2] = useState(5);

  function cambiaValore(e, setValue) {
    setValue(parseInt(e.target.value));
  };

  return (
    <>
      <section className='flex flex-col justify-center items-center h-screen gap-5'>
      <div>
        <div className="slidecontainer">
            <input
            type="range"
            min="1"
            max="10"
            value={sliderValue1}
            className="slider"
            onChange={(e) => {cambiaValore(e, setSliderValue)}}
            />
        </div>
        <p>Voto di Mario: {sliderValue1}</p>
      </div>
      <div>
        <div className="slidecontainer">
            <input
            type="range"
            min="1"
            max="10"
            value={sliderValue2}
            className="slider"
            onChange={(e) => {cambiaValore(e, setSliderValue2)}}
            />
        </div>
        <p>Voro di Riccardo: {sliderValue2}</p>
      </div>
      <div className='bg-slate-100 rounded p-2'>
        {sliderValue1 == sliderValue2 ? 'Sono pari' : sliderValue1 > sliderValue2 ? 'Mario è in vantaggio' : 'Riccardo è in vantaggio'}
      </div>
      </section>
    </>
  );
}

export default App2;
