import { NavLink } from "react-router-dom";
import pokeball from '../../assets/pokeball_gray.svg';
import { Filters } from "../filters/Filters";


export default function Header() {
    return (
        <header className="pt-2.5 pb-5 flex gap-[10px] flex-col flex-nowrap justify-start items-center ">
            <div>
                <NavLink to='/' className=' flex items-center gap-2.5'>
                    <img src={pokeball} alt="pokeball" />
                    <h1 className="text-gray-400 font-bold text-2xl">Pokédex</h1>
                </NavLink>
            </div>
            <Filters />
        </header>
    )
}
