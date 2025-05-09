import PokemonsCard from "../pokemonsCard/PokemonsCard";

interface Props {
    pokemonsUrls?: string[] | null;
    page: number;
    perPage: number
}

export default function PokemonsList({ pokemonsUrls, page, perPage }: Props) {
    return (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {pokemonsUrls
                ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                .map((pokemonUrl) => (
                    <PokemonsCard key={pokemonUrl} url={pokemonUrl} />
                ))
            }
        </section>
    )
}
