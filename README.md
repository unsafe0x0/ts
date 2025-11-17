this repo is just for chilling and doing things in TypeScript

if you wanna try out things inside of repo you can do so by following the instructions below

or if you wanna add more stuff feel free to open a pr

## Installation

```bash
# Clone the repository
git clone https://github.com/unsafe0x0/ts.git
cd ts

# Install dependencies
bun install
```

- Run the example files:

```bash
bun run src/file-name.ts
```

## Project Structure

```
├── src/
│   └── cache.ts           # Example usage of both cache implementations
├── cache/
│   ├── in-memory.ts       # In-Memory Cache implementation
│   └── lru.ts             # LRU Cache implementation
├── package.json
├── tsconfig.json
└── README.md
```

### In-Memory Cache Functions

| Function      | Parameters                | Returns       | Description                       |
| ------------- | ------------------------- | ------------- | --------------------------------- |
| `setCache`    | `key: string, value: any` | `void`        | Stores a value in the cache       |
| `getCache`    | `key: string`             | `any \| null` | Retrieves a value from the cache  |
| `removeCache` | `key: string`             | `void`        | Removes a specific key from cache |
| `clearCache`  | -                         | `void`        | Clears all entries from cache     |

### LRU Cache Functions

| Function         | Parameters                | Returns       | Description                                |
| ---------------- | ------------------------- | ------------- | ------------------------------------------ |
| `setLRUCache`    | `key: string, value: any` | `void`        | Stores a value in LRU cache                |
| `getLRUCache`    | `key: string`             | `any \| null` | Retrieves and marks value as recently used |
| `removeLRUCache` | `key: string`             | `void`        | Removes a specific key from LRU cache      |
| `clearLRUCache`  | -                         | `void`        | Clears all entries from LRU cache          |

---

## Author

[github](https://github.com/unsafe0x0)
[twitter](https://x.com/unsafezero)
