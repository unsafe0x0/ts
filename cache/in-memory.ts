// In-memory Cache implementation

const MAX_CACHE_SIZE = 100;
const cache = new Map<string, any>();

const setCache = (key: string, value: any): void => {
  try {
    if (cache.has(key)) {
      cache.delete(key);
    }
    if (cache.size >= MAX_CACHE_SIZE) {
      cache.set(key, value);
    } else {
      console.log("Cache size limit reached. Cannot add new item.");
    }
  } catch (error) {
    console.log(`Failed to set cache for key ${key}: ${error}`);
  }
};

const getCache = (key: string): any | null => {
  try {
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      console.log(`Key ${key} not found in cache`);
    }
  } catch (error) {
    console.log(`Failed to get cache for key ${key}: ${error}`);
    return null;
  }
};

const removeCache = (key: string): void => {
  try {
    if (cache.has(key)) {
      cache.delete(key);
    } else {
      console.log(`Key ${key} not found in cache`);
    }
  } catch (error) {
    console.log(`Failed to remove cache for key ${key}: ${error}`);
  }
};

const clearCache = (): void => {
  try {
    if (cache.size > 0) {
      cache.clear();
    } else {
      console.log("Cache is already empty");
    }
  } catch (error) {
    console.log(`Failed to clear cache: ${error}`);
  }
};

export { setCache, getCache, removeCache, clearCache };
