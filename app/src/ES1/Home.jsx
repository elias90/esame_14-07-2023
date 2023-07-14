import personaggiFamosi from './personaggi.js'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
            <section className='flex flex-col gap-10 mt-10'>
                {
                    personaggiFamosi.map((el, i) => {
                        return (
                            <div className='flex flex-row gap-10'>
                                <img src={el.immagine} alt="" className='object-cover h-48 w-48	rounded aspect-square'/>
                                <div className='flex flex-col gap-3'>
                                    <h4 className='text-2xl font-bold'>{el.nome}</h4>
                                    <Link to={`/char/${el.id}`}>
                                        <button className='p-2 bg-blue-900 text-left self-start text-white rounded'>More info</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Home