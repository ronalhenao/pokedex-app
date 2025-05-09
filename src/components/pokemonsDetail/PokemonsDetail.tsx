import type { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/BgByType";
import BaseStats from "./baseStats/BaseStats";
import Header from "./header/Header";
import PokeTypes from "./pokeTypes/PokeTypes";
import Stats from "./stats/Stats";
import Title from "./title/Title";
import Spinner from "../spinner/Spinner";

interface Props {
    pokemon: IPokemon | null;
}

export default function PokemonsDetail({ pokemon }: Props) {
    let backgroundSelected = "#ccc"; // Color por defecto
    const typeName = pokemon?.types?.[0]?.type?.name;

    if (typeName && (background as Record<string, string>)[typeName]) {
        backgroundSelected = (background as Record<string, string>)[typeName];
    }

    if (!pokemon) {
        return (
            <div
                style={{ background: backgroundSelected }}
                className='min-h-screen flex items-center justify-center'
            >
                <Spinner />
            </div>
        );
    }

    return (
        <div style={{ background: backgroundSelected }} className='min-h-screen'>
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-2/4 mx-auto pb-4 px-2">
                <Header pokemon={pokemon} />
                <figure className="relative transform translate-y-[50px] w-50 h-50 md:w-70 md:h-70 mx-auto">
                    <img
                        src={
                            pokemon.sprites?.other?.dream_world?.front_default ||
                            pokemon.sprites?.front_default
                        }
                        alt={pokemon.name}
                        className="relative z-10 w-full h-full object-contain"
                    />
                </figure>
                <div className=' bg-white rounded-lg pt-16 pb-8 px-8 md:px-16 shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)]'>
                    <PokeTypes pokemon={pokemon} />
                    <Title content="About" backgroundSelected={backgroundSelected} />
                    <Stats pokemon={pokemon} />
                    <Title content="Base Stats" backgroundSelected={backgroundSelected} />
                    <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
                </div>
            </div>
        </div>
    )
}
