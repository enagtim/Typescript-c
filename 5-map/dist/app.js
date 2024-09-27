"use strict";
class HashMap {
    constructor(bucketSize = 16) {
        this.buckets = new Array(bucketSize).fill(null).map(() => []);
        this.size = bucketSize;
    }
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) - hash + key.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash) % this.size;
    }
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (typeof bucket === 'undefined') {
            throw new Error('Not have backet');
        }
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i] || [];
            if (existingKey === key) {
                bucket[i] = [key, value];
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (typeof bucket === 'undefined') {
            throw new Error('Not have backet');
        }
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey, value] = bucket[i] || [];
            if (existingKey === key) {
                return value;
            }
        }
        return undefined;
    }
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (typeof bucket === 'undefined') {
            throw new Error('Not have backet');
        }
        for (let i = 0; i < bucket.length; i++) {
            const [existingKey] = bucket[i] || [];
            if (existingKey === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
    clear() {
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }
}
const map = new HashMap();
map.set("apple", 1);
map.set("banana", 2);
console.log(map.get("apple"));
map.delete("apple");
console.log(map.get("apple"));
map.clear();
console.log(map.get("banana"));
