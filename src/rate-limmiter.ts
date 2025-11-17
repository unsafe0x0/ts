import TokenBucket from "../rate-limmiter/toke-bucket";
import { setCache, getCache, removeCache } from "../cache/in-memory";

const limmiter = new TokenBucket(5, 5);
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const tokens = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

const rateLimitToken = async () => {
  for (let i = 0; i < tokens.length; i++) {
    while (!limmiter.allowRequest()) {
      await wait(10);
    }

    setCache(`token_${tokens[i]}`, tokens[i]);
    const token = getCache(`token_${tokens[i]}`);
    console.log(`Token ${token} processed.`);
    removeCache(`token_${tokens[i]}`);
  }
};

rateLimitToken();
