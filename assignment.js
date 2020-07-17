//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}


//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalResult = chairCount + tableCount + bedCount;
    return totalResult;
}


//brickCalculator
function brickCalculator(floor){
    var brick = 1000;
    var totalBrick1;
    var totalBrick2;
    var totalBrick3;

    if(floor <= 10){
        var totalBrick1 = brick * 15 * floor;
        return totalBrick1;
    }
    else if (floor >= 11 && floor<-20){
        var totalBrick2 = brick * 12 * floor;
        return totalBrick2;
    }
    else if(floor >= 21){
        var totalBrick3 = brick * 10 * floor;
    }
    var totalBrick = totalBrick1 + totalBrick2 + totalBrick3;
    return totalBrick;
}


//tinyFriend
function tinyFriend(names){
    var tiny = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < tiny.length){
            tiny = currentName;
        }
    }
    return tiny;
}