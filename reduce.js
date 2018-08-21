const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const decodedSentence = input.split(" ").reduce((previousValue, currentValue) => {
        if(currentValue.length === 3) {
            return previousValue + ' '; 
        } else {
            const lastCharacter = currentValue[currentValue.length-1];
            return previousValue + lastCharacter;
        }
    }   
, '');

console.log(decodedSentence);