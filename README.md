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
│   ├── cache.ts              # Example usage of cache implementations
│   └── rate-limmiter.ts      # Example usage of token bucket rate limiter
├── cache/
│   ├── in-memory.ts          # In-Memory Cache implementation
│   └── lru.ts                # LRU Cache implementation
├── rate-limmiter/
│   └── toke-bucket.ts        # Token Bucket Rate Limiter implementation
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

### Token Bucket Rate Limiter

A rate limiting implementation using the Token Bucket algorithm to control request rates.

**Class: `TokenBucket`**

| Method         | Parameters                             | Returns   | Description                                                 |
| -------------- | -------------------------------------- | --------- | ----------------------------------------------------------- |
| `constructor`  | `capacity: number, refillRate: number` | -         | Initializes bucket with capacity and refill rate per second |
| `allowRequest` | -                                      | `boolean` | Returns `true` if request is allowed, `false` otherwise     |

**Parameters:**

- `capacity`: Maximum number of tokens the bucket can hold
- `refillRate`: Number of tokens added per second

---

## Author

[github](https://github.com/unsafe0x0)
[twitter](https://x.com/unsafezero)
