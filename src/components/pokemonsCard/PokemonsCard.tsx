import { usePokemon } from "../../hooks/usePokemon";
import { Link } from "react-router-dom";
import { background } from "../../utils/BgByType";
import Loader from "../loader/Loader";

interface Props {
    url: string;
}

export default function PokemonsCard({ url }: Props) {
    const { pokemon } = usePokemon(url);

    /* @ts-ignore */
    const backgroundSelected = background[pokemon?.types[0]?.type?.name];


    return (
        <Link to={`/pokemon/${pokemon?.id}`} className=''>
            <div style={{ borderColor: backgroundSelected }} className=' rounded-lg pointer shadow-[0px_1px_3px_1px_rgba(0,0,0,0.2)] bg-white overflow-hidden border'>

                <span
                    style={{ color: backgroundSelected }}
                    className="text-white font-medium text-xs text-right block pr-4 pt-2">#{String(pokemon?.id).padStart(3, '0')}
                </span>

                {pokemon?.sprites?.other?.dream_world?.front_default ||
                    pokemon?.sprites?.front_default ? (
                    <figure className=" w-26 mx-auto h-36">
                        <img
                            src={
                                pokemon?.sprites?.other?.dream_world?.front_default ||
                                pokemon?.sprites?.front_default
                            }
                            alt={pokemon?.name}
                            className="w-full h-full object-contain"
                        />
                    </figure>
                ) : (
                    <div className=''>
                        <Loader color={backgroundSelected} />
                    </div>
                )}
                <p
                    style={{ background: backgroundSelected }}
                    className='text-center capitalize text-white text-base py-1'>
                    {pokemon?.name}
                </p>
            </div>
        </Link>
    )
}
