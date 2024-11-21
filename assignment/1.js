/**
 * Finds the length of the longest increasing subsequence in an array.
 * @param {number[]} nums - An array of integers.
 * @returns {number} - The length of the longest increasing subsequence.
 */
function lengthOfLIS(nums) {
    // If the input array is empty, the result is 0 because there are no subsequences.
    if (nums.length === 0) return 0;

    // Initialize a DP array where dp[i] represents the length of the longest increasing subsequence ending at index i.
    const dp = Array(nums.length).fill(1); // Fill with 1 since the minimum LIS for any single element is itself.

    // Traverse the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // Compare the current element with all previous elements.
        for (let j = 0; j < i; j++) {
            // If nums[i] > nums[j], it can form an increasing subsequence.
            if (nums[i] > nums[j]) {
                // Update dp[i] with the maximum LIS ending at index i.
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Return the maximum value in the DP array, which represents the LIS length.
    return Math.max(...dp); // Use spread operator to find the maximum.
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
