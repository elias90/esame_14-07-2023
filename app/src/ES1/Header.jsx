import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <header className="bg-slate-200 rounded p-5 flex flex-row justify-between items-center">
                <h1 className="text-4xl">Digitafilm</h1>
                <nav>
                    <Link to="/"><span className="text-2xl">Home</span></Link>
                </nav>
            </header>
        </>
    )
}

export default Header