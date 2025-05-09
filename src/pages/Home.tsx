import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { usePagination } from "../hooks/usePagination";

import Header from "../components/header/Header";
import PokemonsList from "../components/pokemonsList/PokemonsList";
import { Pagination } from "../components/pagination/Pagination";
import Spinner from "../components/spinner/Spinner";

export default function Home() {
    const { pokemonsFiltered } = useContext(PokemonContext);
    const { page, nextPage, previousPage } = usePagination();

    let perPage = 18;

    // Si aún no están los pokemones, muestra el spinner
    if (!pokemonsFiltered) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <main className="w-full mx-auto px-4 max-w-screen-xl">
                <Header />
                <PokemonsList
                    page={page}
                    perPage={perPage}
                    pokemonsUrls={pokemonsFiltered}
                />
                <Pagination
                    page={page}
                    perPage={perPage}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    maxItems={pokemonsFiltered?.length!}
                />
            </main>
        </>
    )
}
