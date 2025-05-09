import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import type { PokeType } from "../../interfaces/types";
import { background } from "../../utils/BgByType";
import { ChevronDown } from "lucide-react";

export const Filters = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { types, filterSelected, changeTypeSelected } = useContext(PokemonContext);
  const { goToPage } = usePagination();

  const onChangeType = (type: PokeType) => {
    goToPage(1);
    navigate("/?page=1");
    changeTypeSelected(type);
    setOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div
        className="flex items-center justify-between bg-white border border-gray-300 rounded-lg py-2 px-3 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-gray-500 font-normal text-sm capitalize">{filterSelected?.name}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-64 overflow-y-auto">
          {types.map((type: PokeType) => (
            <div
              key={type.name}
              onClick={() => onChangeType(type)}
              className={`capitalize text-sm flex items-center gap-2 px-4 py-1 cursor-pointer hover:bg-gray-100 ${filterSelected.name === type.name ? "font-medium text-gray-900" : "text-gray-700"
                }`}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: background[type.name] || "#ccc" }}
              />
              {type.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
