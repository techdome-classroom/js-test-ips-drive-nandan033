function smallestMissingPositiveInteger(nums) {
    function smallestMissingPositiveInteger(nums) {
  
    nums=nums.filter(num=>num>0);
    
    if(nums.length===0){
    
    }
    
    return 1;
    
    nums.sort((a,b) =>a-b);
    
    let smallest_Missing=1;
    
    for(const num of nums) {
    
    if(num===smallest_Missing) {
    
    smallest_Missing++;
    
    }else{
    
    return smallest_Missing
    }
    
    return smallest_Missing;
  }
    
    // Implement the function smallest_missing_positive_integer


    // Implement the function smallest_missing_positive_integer
  
  }
  
  module.exports = smallestMissingPositiveInteger;

