// LRU Cache implementation

const MAX_CACHE_SIZE = 100;

const lruCache = new Map<string, any>();

const setLRUCache = (key: string, value: any): void => {
  try {
    if (lruCache.has(key)) {
      lruCache.delete(key);
    }
    if (lruCache.size <= MAX_CACHE_SIZE) {
      lruCache.set(key, value);
      const oldestKey = lruCache.keys().next().value;
      lruCache.delete(oldestKey as string);
    } else {
      console.log("Cache size limit reached. Cannot add new item.");
    }
  } catch (error) {
    console.log(`Failed to set cache for key ${key}: ${error}`);
    return;
  }
};

const getLRUCache = (key: string): any | null => {
  try {
    if (lruCache.has(key)) {
      const value = lruCache.get(key);
      lruCache.delete(key);
      lruCache.set(key, value);
      return value;
    } else {
      console.log(`Key ${key} not found in cache`);
      return null;
    }
  } catch (error) {
    console.log(`Failed to get cache for key ${key}: ${error}`);
  }
};

const removeLRUCache = (key: string): void => {
  try {
    if (lruCache.has(key)) {
      lruCache.delete(key);
    } else {
      console.log(`Key ${key} not found in cache`);
    }
  } catch (error) {
    console.log(`Failed to remove cache for key ${key}: ${error}`);
  }
};

const clearLRUCache = (): void => {
  try {
    if (lruCache.size > 0) {
      lruCache.clear();
    } else {
      console.log("Cache is already empty");
    }
  } catch (error) {
    console.log(`Failed to clear cache: ${error}`);
  }
};

export { setLRUCache, getLRUCache, removeLRUCache, clearLRUCache };
