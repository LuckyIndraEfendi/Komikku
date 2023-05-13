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

export const getSearchComic = async (query) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/search/${query}`);
        const data = await res.data;
        return data
    }
    catch (err) {
        console.error(err);
    }
}

export const getChapters = async (name) => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/chapter/ch/${name}`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}

export const getManhua = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/list?filter=manhua`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}

export const getManhwa = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/list?filter=manhwa`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}

export const getListComic = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASEURL}/list`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}