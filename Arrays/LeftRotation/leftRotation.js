function rotLeft(a, d) {
    const rotatedArray = [...a];
    
    for (let i = 0; i < d; i++) {
    // Take off the first item from the array
    let frontItem = rotatedArray.shift();
    
    // Push the item moved from the front to the back
    rotatedArray.push(frontItem)
    }

    return rotatedArray;
}

rotageLeft([1, 2, 3, 4, 5], 4);
