import { useState } from "react";

function Calendario() {
  const [blocchi, setBlocchi] = useState(Array(31).fill([]));
  const [nota, setNota] = useState('');
  const [data, setData] = useState('');

  function aggiungiNota() {
    const indiceData = parseInt(data - 1);
    const blocchiAggiornati = [...blocchi]; // Copia dell'array blocchi

    const bloccoAggiornato = [...blocchiAggiornati[indiceData]]; // Creo una copia dell'array del blocco che voglio aggiornare
    bloccoAggiornato.push(nota); // Aggiungo la nota all'array secondario

    blocchiAggiornati[indiceData] = bloccoAggiornato; // Riassegno il blocco aggiornato all'array principale

    setBlocchi(blocchiAggiornati);
    setNota('');
    setData('');
  }

  return (
    <>
      <section className="flex flex-row gap-5 justify-center mt-5">
        <input
          type="text"
          className="bg-slate-100 rounded p-5 outline-none"
          placeholder="Inserisci nota"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        />
        <input
          type="text"
          className="bg-slate-100 rounded p-5 outline-none"
          placeholder="Inserisci Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className="rounded bg-black text-white p-4" onClick={aggiungiNota}>
          Inserisci Nota
        </button>
      </section>

      <section className="grid grid-cols-4 gap-2 p-4">
        {blocchi.map((el, i) => (
          <div key={i} className="bg-slate-100 rounded p-5 min-h-[100px] flex flex-col gap-2 relative pt-12">
            <span className="bg-red-500 text-white rounded rounded-r-full p-1 absolute top-0 left-0 w-10 h-10 flex justify-center items-center">{i + 1}</span>
            {el.map((nota, index) => (
              <p key={index} className="p-2 rounded bg-green-200">{nota}</p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default Calendario;
