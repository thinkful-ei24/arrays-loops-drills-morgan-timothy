function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;

    return function(location){
        warningCounter++;
        let times = warningCounter === 1 ? 'time' : 'times';
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
    };
}

const rocksWarning = hazardWarningCreator("Rocks on the Road");
const iceWarning = hazardWarningCreator("Ice on the Road");
const oilWarning = hazardWarningCreator("Oil on the Road");

rocksWarning("Main St and Pacific Ave");
iceWarning("Alvarado and Montrose");
oilWarning("Alhambra and Main");
rocksWarning("1st and 2nd");
rocksWarning("3rd and 4th");
iceWarning("5th and 6th");