var nums = Math.floor(Math.random() * 17) + 4;

function findEven(nums) {
    if (nums % 2 == 0) {
        console.log(nums)
    }
    else {
        return findEven(nums - 1)
    }
}
findEven(nums)