import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import personaggiFamosi from './personaggi';

function CharDetail() {
  let { charid } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    const personaggio = personaggiFamosi.find(el => el.id.toString() === charid);
    setChar(personaggio);
  }, [charid]);

  if (!char) return null;

  return (
    <section className='mt-10'>
        <div className='flex flex-row gap-10'>
            <img src={char.immagine} alt="" className='object-cover h-[500px] w-[500px]	rounded aspect-square'/>
            <div className='flex flex-col gap-3'>
                <h4 className='text-2xl font-bold'>{char.nome}</h4>
                <p className='text-xl'>{char.descrizione}</p>
            </div>
        </div>
    </section>
  );
}

export default CharDetail;
