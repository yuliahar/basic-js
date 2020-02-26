module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        let maxDepth = depth;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i], depth + 1));
            }
        }
        return maxDepth;
    }
};