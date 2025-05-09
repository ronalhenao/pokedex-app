import { Link } from "react-router-dom";
import type { IPokemon } from "../../../interfaces/interfaces";

import { MoveLeft } from 'lucide-react';

interface Props {
    pokemon: IPokemon | null;
}

export default function Header({ pokemon }: Props) {

    return (
        <header className="flex items-center gap-3 justify-between pt-10 pb-10">
            <div className='flex items-center gap-3'>
                <Link to={`/`}><MoveLeft color="white" size={30} /></Link>
                <h1 className="text-white font-bold text-3xl capitalize">{pokemon?.name}</h1>
            </div>
            <span className="text-white font-bold text-base">#{String(pokemon?.id).padStart(3, '0')}</span>
        </header>
    )
}
