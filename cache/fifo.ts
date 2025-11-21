const MAX_CACHE_SIZE = 10;

const fifoCache = new Map<string, any>();

const setFIFOCache = (key: string, value: any) => {
    try {
        if (fifoCache.size >= MAX_CACHE_SIZE) {
            const firstKey = fifoCache.keys().next().value;
            fifoCache.delete(firstKey as string);
        }
        fifoCache.set(key, value);
    } catch (error) {
        console.log(`Failed to set cache for key ${key}: ${error}`);
    }
}

const getFIFOCache = (key: string) => {
    try {
        if (fifoCache.has(key)) {
            return fifoCache.get(key);
        }
        console.log("Cache miss for key: " + key);
    } catch (error) {
        console.log(`Failed to get cache for key ${key}: ${error}`);
    }
}

const removeFIFOCache = (key: string) => {
    try {
        if (fifoCache.has(key)) {
            fifoCache.delete(key);
        } else {
            console.log(`Key ${key} not found in cache`);
        }
    } catch (error) {
        console.log(`Failed to remove cache for key ${key}: ${error}`);
    }
}

const clearFIFOCache = () => {
    try {
        if (fifoCache.size > 0) {
            fifoCache.clear();
        } else {
            console.log("Cache is already empty");
        }
    } catch (error) {
        console.log(`Failed to clear cache: ${error}`);
    }
}

const getFullFIFOCache = () => {
    try {
        return fifoCache;
    } catch (error) {
        console.log(`Failed to get full cache: ${error}`);
    }
}

export { setFIFOCache, getFIFOCache, removeFIFOCache, clearFIFOCache, getFullFIFOCache };