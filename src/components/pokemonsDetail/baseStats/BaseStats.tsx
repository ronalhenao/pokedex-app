import type { IPokemon } from "../../../interfaces/interfaces";

interface Props {
    pokemon: IPokemon | null;
    backgroundSelected: string;
}

export default function BaseStats({ pokemon, backgroundSelected }: Props) {
    const maxStat = 255;

    const baseStatsNames = {
        hp: "hp",
        attack: "atk",
        defense: "def",
        "special-attack": "satk",
        "special-defense": "sdef",
        speed: "spd",
    };
    return (
        <div>

            {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
                return (
                    <div key={name} className='flex items-center w-full'>
                        <span
                            style={{ color: backgroundSelected }}
                            className="text-right pr-2 font-medium text-xs uppercase my-2 mr-2 border-r border-gray-300 min-w-10"
                        >
                            {/* @ts-ignore */}
                            {baseStatsNames[name]}
                        </span>
                        <p className="text-xs min-w-5 my-2 mr-2">0{base_stat}</p>
                        <div
                            className="flex-1 h-1 rounded overflow-hidden"
                            style={{ background: `${backgroundSelected}40` }}>
                            <div
                                className="h-full transition-all duration-300"
                                style={{
                                    width: `${(base_stat / maxStat) * 100}%`,
                                    background: backgroundSelected,
                                }}
                            />
                        </div>
                    </div>

                );
            })}
        </div>
    )
}
