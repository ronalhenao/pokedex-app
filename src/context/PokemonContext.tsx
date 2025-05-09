import { createContext, useEffect, useState } from "react";
import type { AllPokemonsResult, PokemonsByTypeResult, PokeType } from "../interfaces/types";

interface ContextProps {
    types: PokeType[]
    filterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const pokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

export const PokemonProvider = ({ children }: any) => {

    const defaultType: PokeType = {
        name: "All",
        url: pokemonsUrl,
    };

    const [allPokemons, setAllPokemons] = useState<string[] | null>(null);
    const [types, setTypes] = useState<PokeType[]>([defaultType]);
    const [pokemonsFiltered, setPokemonsFiltered] = useState<string[] | null>(null);
    const [filterSelected, setFilterSelected] = useState<PokeType>(defaultType);

    const changeTypeSelected = async (type: PokeType) => {
        setFilterSelected(type);

        if (type.name === "All") {
            setPokemonsFiltered(allPokemons);
            return;
        }

        try {
            const res = await fetch(type.url!);
            const data = await res.json();

            const pokemons = data.pokemon.map(
                ({ pokemon }: PokemonsByTypeResult) => pokemon.url
            );

            setPokemonsFiltered(pokemons)

        } catch (error) {
            console.error("Error al filtrar pokemons:", error);
            setPokemonsFiltered([]);
        }
    };

    const getPokemonsType = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/type");
            const data = await res.json();

            setTypes([defaultType, ...data.results]);
        } catch (err) {
            console.error("Error al cargar tipos:", err);
        }
    };

    const getAllPokemons = async () => {
        try {
            const res = await fetch(pokemonsUrl);
            const data = await res.json();

            const all = data.results.map((pokemon: AllPokemonsResult) => pokemon.url);

            setAllPokemons(all);
            setPokemonsFiltered(all);
        } catch (err) {
            console.error("Error al cargar todos los pokemons:", err);
        }
    };

    useEffect(() => {
        getPokemonsType();
        getAllPokemons();
    }, []);

    return (
        <PokemonContext.Provider value={{
            types,
            filterSelected,
            pokemonsFiltered,
            changeTypeSelected,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}