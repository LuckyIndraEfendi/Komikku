import axios from 'axios';
import { baseURL } from '../constans/baseURL';
export const getPopularComic = async (page) => {
    try {
        const res = await axios.get(`${baseURL}/popular/page/${page}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }
}

export const getPopularComic2 = async (page) => {
    try {
        const res = await axios.get(`${baseURL}/popular/page/${page}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }


}

export const getRecommendedComic = async (page) => {
    try {
        const res = await axios.get(`${baseURL}/recommended/page/${page}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }
}


export const getDetailComic = async (id) => {
    try {
        const res = await axios.get(`${baseURL}/info/manga/${id}`);
        const data = await res.data;
        return data.data
    }
    catch (err) {
        console.error(err);
    }
}

export const getSearchComic = async (query) => {
    try {
        const res = await axios.get(`${baseURL}/search/${query}`);
        const data = await res.data;
        return data
    }
    catch (err) {
        console.error(err);
    }
}

export const getChapters = async (name) => {
    try {
        const res = await axios.get(`${baseURL}/chapter/ch/${name}`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}

export const getManhua = async () => {
    try {
        const res = await axios.get(`${baseURL}/list?filter=manhua`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}

export const getManhwa = async () => {
    try {
        const res = await axios.get(`${baseURL}/list?filter=manhwa`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}

export const getListComic = async () => {
    try {
        const res = await axios.get(`${baseURL}/list`);
        const data = await res.data
        return data.data
    } catch (err) {
        console.error(err);
    }
}