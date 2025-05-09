import { useEffect, useState } from "react";
import type { IPokemon } from "../interfaces/interfaces";


export const usePokemon = (url?: string, id?: string) => {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!url && !id) return;

            setLoading(true);
            setError(null);

            try {
                const finalUrl = url ?? `https://pokeapi.co/api/v2/pokemon/${id}`;
                const res = await fetch(finalUrl);
                if (!res.ok) throw new Error("No se pudo cargar el Pokémon");

                const data: IPokemon = await res.json();
                setPokemon(data);
            } catch (err) {
                setError((err as Error).message);
                setPokemon(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [url, id]);

    return { pokemon, loading, error };
};
