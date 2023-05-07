import React, { useContext, useState, useEffect } from "react";
import { getPopularComic, getPopularComic2, getRecommendedComic } from "../api/Api"

export const StateContext = React.createContext();

export const useGlobalContext = () => {
    return useContext(StateContext);
}

export const StateProvider = ({ children }) => {

    let arr = ["4-KOMA", "ACTION", "ADVENTURE", "COMEDY", "COOKING", "CRIME", "DEMON", "DEMONS"]
    const [active, setActive] = useState(1);
    let [num, setNum] = useState(0)
    const pages = [
        { page: num + 1 },
        { page: num + 2 },
        { page: num + 3 },
        { page: num + 4 },
    ]

    let [nums, setNums] = useState(0)
    const pagess = [
        { page: nums + 1 },
        { page: nums + 2 },
        { page: nums + 3 },
        { page: nums + 4 },
    ]


    const [popular, setPopular] = useState([])
    const [popular2, setPopular2] = useState([])

    // Recomendation
    const [recomendation, setRecomendation] = useState([])
    const [actives, setActives] = useState(1);



    const handlePagination2 = (item) => {
        setActives(item.page)

        const recomedation = async () => {
            const data = await getRecommendedComic(item.page)
            setRecomendation(data)
        }
        recomedation()
    }


    const handlePagination = (item) => {
        setActive(item.page)

        const popular2 = async () => {
            const data = await getPopularComic2(item.page)
            setPopular2(data)
        }
        popular2()
    }

    useEffect(() => {
        const fetchData = async () => {
            const [popularData, popular2Data, recommendationData] = await Promise.all([
                getPopularComic(1),
                getPopularComic2(1),
                getRecommendedComic(1)
            ]);

            setPopular(popularData);
            setPopular2(popular2Data);
            setRecomendation(recommendationData);
        };

        fetchData();

    }, [])

    const handleDesc = (desc) => {
        localStorage.setItem('desc', JSON.stringify(desc))
    }


    return (
        <StateContext.Provider value={{ pagess, nums, setNums, arr, pages, num, active, setActive, handlePagination, handlePagination2, popular, popular2, recomendation, actives, setNum, handleDesc }}>
            {children}
        </StateContext.Provider>
    )
}