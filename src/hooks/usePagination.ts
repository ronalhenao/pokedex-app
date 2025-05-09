import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePagination = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const pageParam = parseInt(searchParams.get("page") || "1", 10);
        setPage(Number.isNaN(pageParam) ? 1 : pageParam);
    }, [searchParams]);

    const goToPage = (newPage: number) => {
        setPage(newPage);
        navigate(`/?page=${newPage}`);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const nextPage = () => goToPage(page + 1);
    const previousPage = () => goToPage(Math.max(1, page - 1));
    const backToHome = () => goToPage(1);

    return { page, nextPage, previousPage, goToPage, backToHome };
};