import axios from 'axios';

export const getPopularComic = async (page) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/popular/page/${page}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }
}

export const getPopularComic2 = async (page) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/popular/page/${page}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }


}

export const getRecommendedComic = async (page) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/recommended/page/${page}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }
}


export const getDetailComic = async (id) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/info/manga/${id}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }
}