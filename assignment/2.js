/**
 * Finds two numbers in an array that add up to a specific target.
 * @param {number[]} nums - The array of integers.
 * @param {number} target - The target sum to find.
 * @returns {number[]} - Indices of the two numbers that add up to the target.
 * @throws {Error} - Throws an error if no solution exists.
 */
function twoSum(nums, target) {
    // Create a Map to store array values and their indices for quick lookup.
    const numMap = new Map();

    // Iterate over the array.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that would sum to the target.
        const complement = target - nums[i];

        // Check if the complement exists in the Map.
        if (numMap.has(complement)) {
            // If found, return the indices of the complement and the current number.
            return [numMap.get(complement), i];
        }

        // Otherwise, add the current number and its index to the Map.
        numMap.set(nums[i], i); // Map ensures O(1) lookup time.

        // Explanation: The Map prevents redundant nested iterations, making the solution O(n).
    }

    // If no solution exists, throw an error to handle edge cases.
    throw new Error("No two sum solution exists");
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
