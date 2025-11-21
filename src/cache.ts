import {
  setCache,
  getCache,
  removeCache,
  clearCache,
} from "../cache/in-memory";
import {
  setLRUCache,
  getLRUCache,
  removeLRUCache,
  clearLRUCache,
} from "../cache/lru";
import { setFIFOCache, getFIFOCache, removeFIFOCache, clearFIFOCache, getFullFIFOCache } from "../cache/fifo";

// Example usage of in-memory cache

// setCache("user_1", { name: "Unsafezero", age: 21 });
// console.log(getCache("user_1"));

// setCache("user_2", { name: "Priyanshu", age: 30 });
// console.log(getCache("user_2"));

// removeCache("user_2");
// console.log(getCache("user_2"));
// clearCache();

// console.log(getCache("user_1"));

// Example usage of LRU cache

// setLRUCache("session_1", { token: "abc123", userId: "user_1" });
// console.log(getLRUCache("session_1"));

// setLRUCache("session_2", { token: "def456", userId: "user_2" });
// console.log(getLRUCache("session_2"));

// removeLRUCache("session_2");
// console.log(getLRUCache("session_2"));

// clearLRUCache();

// console.log(getLRUCache("session_1"));

// Example usage of FIFO cache

setFIFOCache("session_1", { token: "abc123", userId: "user_1" });
setFIFOCache("session_2", { token: "def456", userId: "user_2" });
setFIFOCache("session_3", { token: "ghi789", userId: "user_3" });
setFIFOCache("session_4", { token: "jkl012", userId: "user_4" });
setFIFOCache("session_5", { token: "mno345", userId: "user_5" });
setFIFOCache("session_6", { token: "pqr678", userId: "user_6" });
setFIFOCache("session_7", { token: "stu901", userId: "user_7" });
setFIFOCache("session_8", { token: "vwx234", userId: "user_8" });
setFIFOCache("session_9", { token: "yz1234", userId: "user_9" });
setFIFOCache("session_10", { token: "lmn567", userId: "user_10" });
setFIFOCache("session_11", { token: "opq890", userId: "user_11" });

console.log(getFullFIFOCache())