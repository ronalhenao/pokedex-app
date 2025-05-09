import { useParams } from "react-router-dom"
import { usePokemon } from "../hooks/usePokemon";
import PokemonsDetail from "../components/pokemonsDetail/PokemonsDetail";
import Spinner from "../components/spinner/Spinner";

export default function Detail() {
    const { id } = useParams<{ id: string }>();

    const { pokemon, loading, error } = usePokemon(undefined, id);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    }

    if (error || !pokemon) {
        return (
            <div className="text-center p-8 text-gray-500">
                No se encontró el Pokémon.
            </div>
        );
    }

    return (
        <PokemonsDetail pokemon={pokemon} />
    )
}
