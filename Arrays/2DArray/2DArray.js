/*
1. Manually add each item as first step without loops
2. Later refactor with loops

*/

function hourglassSum(arr) {
    let inputArray = arr;
    let highestSum = 0;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let inputArraySum = 0;
            inputArraySum +=
                inputArray[i][j] + inputArray[i][j + 1] + inputArray[i][j + 2];
                inputArraySum += inputArray[i + 1][j + 1];

                inputArraySum +=
                    inputArray[i + 2][j] +
                    inputArray[i + 2][j + 1] +
                    inputArray[i + 2][j + 2];
            if (inputArraySum > highestSum) {
                highestSum = inputArraySum;
            }
        }
    }
    return highestSum;
}

let sampleArr = [
    [1, 1, 1, 0, 0, 0], // Add index 0, 1, 2 -- Add Index 1, 2, 3 - Add index 2, 3, 4, Add indx 3, 4, 5, NO More after 3
    [0, 1, 0, 0, 0, 0], // Add index 1,         Add index 2,        Add index 3,       Add index 4       No More after 4
    [1, 1, 1, 0, 0, 0], // Add index 0, 1, 2 -- Add Index 1, 2, 3 - Add index 2, 3, 4, Add indx 3, 4, 5, NO More after 3
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];
hourglassSum(sampleArr);
