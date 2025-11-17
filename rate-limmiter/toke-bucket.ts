// Token Bucket Rate Limiter Implementation

class TokenBucket {
  private capacity: number; // maximum number of tokens
  private tokens: number; // current number of tokens
  private refillRate: number; // tokens added per second
  private lastRefillTimestamp: number; // last refill time

  // initialize the token bucket with a given capacity and refill rate
  constructor(capacity: number, refillRate: number) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate;
    this.lastRefillTimestamp = Date.now();
  }

  // check if a request can be allowed
  allowRequest(): boolean {
    const now = Date.now();
    const elapsed = (now - this.lastRefillTimestamp) / 1000;

    const refill = elapsed * this.refillRate;

    // refill tokens based on elapsed time
    if (refill > 0) {
      this.tokens = Math.min(this.capacity, this.tokens + refill);
      this.lastRefillTimestamp = now;
    }

    // check if there are enough tokens for a request
    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }
    return false;
  }
}

export default TokenBucket;
