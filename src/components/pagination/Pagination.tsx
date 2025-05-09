interface Props {
    perPage: number;
    page: number;
    nextPage: () => void;
    previousPage: () => void;
    maxItems: number;
}

export const Pagination = ({
    perPage,
    page,
    nextPage,
    previousPage,
    maxItems,
}: Props) => {
    const lastPage = Math.ceil(maxItems / perPage);

    return (
        <nav className='flex justify-center py-7'>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button
                        disabled={page === 1}
                        onClick={previousPage}
                        className=" cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100   dark:text-gray-400 ">
                        Previous
                    </button>
                </li>
                <li>
                    <span className="flex items-center justify-center px-3 h-8 text-gray-600 border border-gray-300 bg-blue-50 hover:bg-gray-100 hover:text-gray-700 ">{page}</span>
                </li>
                <li>
                    <button
                        disabled={page === lastPage}
                        onClick={nextPage}
                        className="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100  dark:text-gray-400">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};