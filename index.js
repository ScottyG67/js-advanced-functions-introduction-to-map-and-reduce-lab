// Your code here

function transform(sourceArray,actionNumber) {
    for(let i=0; i<sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i]*actionNumber;
    }
    return sourceArray;
}

function mapToNegativize(sourceArray) {
    transform(sourceArray,-1)
    return sourceArray;
}

function mapToNoChange(sourceArray){
    transform(sourceArray,0)
    return sourceArray;

}

function mapToDouble(sourceArray){ 
    transform(sourceArray,2)
    return sourceArray;
}

function mapToSquare(sourceArray){
    for(let i=0; i<sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i]**2;
    }
    return sourceArray

}

function reduceLike(){

}

function reduceToTotal(sourceArray, startingPoint){
    if (typeof startingPoint !== 'undefined'){
        for(let i=0; i<sourceArray.length; i++) {
            startingPoint += sourceArray[i];
        }
        return startingPoint;
    } else {
        let newStartingPoint = 0;
        for(let i=0; i<sourceArray.length; i++) {
            newStartingPoint += sourceArray[i];
        }
        return newStartingPoint
    }
    
}

function reduceToAllTrue(sourceArray) {
    for( let i=0; i<sourceArray.length; i++){
        if (!sourceArray[i]){
            return false;
        }
    }
    return true

}

function reduceToAnyTrue(sourceArray) {
    for( let i=0; i<sourceArray.length; i++){
        if (sourceArray[i]){
            return true;
        }
    }
    return false

}