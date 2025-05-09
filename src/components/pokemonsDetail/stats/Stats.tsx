import type { IPokemon } from "../../../interfaces/interfaces";

import { Ruler, Weight } from 'lucide-react';

interface Props {
    pokemon: IPokemon | null;
}

export default function Stats({ pokemon }: Props) {
    return (
        <div className='flex flex-wrap md:flex-nowrap items-center justify-center mb-8'>
            <div className=' text-center relative px-12 py-3 border-b-1 md:border-b-0 md:border-r-1 border-gray-300'>
                <div className="flex gap-3 items-center mb-5">
                    <Weight size={16} />
                    {pokemon?.weight && (
                        <span className="text-sm">{pokemon.weight / 10} Kg </span>
                    )}
                </div>
                <p className="text-xs font-light text-gray-500">Weight</p>
            </div>
            <div className='text-center relative px-12 py-3 border-b-1 md:border-b-0 md:border-r-1 border-gray-300'>
                <div className="flex gap-3 items-center mb-5">
                    <Ruler size={16} />
                    {pokemon?.height && (
                        <span className="text-sm">{pokemon.height / 10} m </span>
                    )}
                </div>
                <p className="text-xs font-light text-gray-500">Height</p>
            </div>
            <ul className="text-center w-40">
                {pokemon?.abilities.map(({ ability: { name } }) => (
                    <li
                        key={name}
                        className="capitalize text-center text-sm"
                    >{name}</li>
                ))}
                <p className="text-xs font-light text-gray-500">Moves</p>
            </ul>
        </div>
    )
}
