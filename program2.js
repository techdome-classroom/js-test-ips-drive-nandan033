function longestSubstring(s) {
    function longestSubstring(s) {
    
        let n = s.length;

        if (n === 0) return 0;


        let maxlenth = 0;


        const seen = {};


        let start = 0;

        M


        for (let end = 0; end < n; end++) {


            if (s[end] in seen && start <= seen[s[end]]) {

                start = seen[s[end]] + 1;

            }

            else {

                maxlenth - Math.max(maxlenth, end - start + 1);

            }

            seen[s[end]] - end

        }

        // Implementation of longestSubstring function

        return maxlenth;


    // Implementation of longestSubstring function
}

module.exports = { longestSubstring };
