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

// Example usage of in-memory cache

setCache("user_1", { name: "Unsafezero", age: 21 });
console.log(getCache("user_1"));

setCache("user_2", { name: "Priyanshu", age: 30 });
console.log(getCache("user_2"));

removeCache("user_2");
console.log(getCache("user_2"));
clearCache();

console.log(getCache("user_1"));

// Example usage of LRU cache

setLRUCache("session_1", { token: "abc123", userId: "user_1" });
console.log(getLRUCache("session_1"));

setLRUCache("session_2", { token: "def456", userId: "user_2" });
console.log(getLRUCache("session_2"));

removeLRUCache("session_2");
console.log(getLRUCache("session_2"));

clearLRUCache();

console.log(getLRUCache("session_1"));
