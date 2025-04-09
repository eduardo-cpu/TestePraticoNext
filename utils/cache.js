import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

export const setCache = (key, value) => {
    cache.set(key, value);
};

export const getCache = (key) => {
    return cache.get(key);
};

export const delCache = (key) => {
    cache.del(key);
};

export const flushCache = () => {
    cache.flushAll();
};