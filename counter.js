counter = () => {
let counter = 0;
let uniqSymbolsCounter = 0;

for (let i = 12345; i < 12999; i++) {
    const iString = i.toString();
    const symbolsArray = iString.split('');
    const uniqSymbols = new Set(symbolsArray);
    if (symbolsArray.length === uniqSymbols.size) {
        uniqSymbolsCounter++
    } else {
        let digitPairs = 0;
        for (let j = 0; j < symbolsArray.length-2; j++ ) {
            if (symbolsArray[j] === symbolsArray[j+1]) {
                console.log('iString: ', iString);
                digitPairs++;
                break;
            }
        }
        if (digitPairs === 0) {
            counter ++
        }
        
    }
}
console.log('uniqSymbolsCounter : ', uniqSymbolsCounter);
console.log('counter : ', counter);
};
