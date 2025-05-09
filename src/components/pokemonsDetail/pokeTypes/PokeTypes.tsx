import type { IPokemon } from "../../../interfaces/interfaces";
import { background } from "../../../utils/BgByType";

interface Props {
    pokemon: IPokemon | null;
}

export default function PokeTypes({ pokemon }: Props) {
    return (
        <div className='flex justify-center gap-6 mb-7'>
            {pokemon?.types.map(({ type: { name } }) => (
                <span
                    key={name}
                    /* @ts-ignore */
                    style={{ background: background[name] }}
                    className='text-white font-medium text-xs capitalize rounded-full py-1 px-3'
                >
                    {name}
                </span>
            ))}
        </div>
    )
}
