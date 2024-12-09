function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Example usage:
async function example() {
    console.log('Start');
    await delay(1000);  // Wait for 1000 ms (1 second)
    console.log('After 1 second');
    await delay(2000);  // Wait for another 2000 ms (2 seconds)
    console.log('After 2 more seconds');
}

example();
