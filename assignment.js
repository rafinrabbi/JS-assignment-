function feetToMile(feet){
    if(feet < 0){
        return "Feet won't be negative. Please drop a positive Value";
    }
    else{
        var mile= feet * 0.00018939;
        return mile;
    }
}


function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0  || bed < 0 ){
        return "Quantity won't be negative. Please drop a positive Quantity";
    }
    else {
        var chairWood = chair * 1;
        var tableWood = table * 3;
        var bedWood = bed * 5;
        var totalWood = chairWood + tableWood + bedWood;
        return totalWood;
    }
}


function brickCalculator(floor){
    if(floor < 0){
        return "floor number won't be negative. Please drop a positive number";
    }
    else if(floor <= 10){
        var totalFeet= floor*15;
        return totalFeet*1000;
    }
    else if(floor <= 20 && floor > 10 ){
        var firstPartFeet= 10*15;
        var secondPartFeet= (floor-10)*12;
        var totalFeet= firstPartFeet + secondPartFeet;
        return totalFeet*1000;
    }
    else{
        var firstPartFeet= 10*15;
        var secondPartFeet= 10*12;
        var thirdPartFeet= (floor-20)*10;
        var totalFeet= firstPartFeet + secondPartFeet + thirdPartFeet;
        return totalFeet*1000;
    }
}


function tinyFriend(friendName){
    var tinyFriendLength = friendName[0].length;
    var tinyFriendName = friendName[0];
    for(var i=0 ; i< friendName.length ; i++){
        if(tinyFriendLength > friendName[i].length){
            tinyFriendLength = friendName[i].length;
            tinyFriendName = friendName[i];
        }
    }
    if(tinyFriendName == ''){
        return 'empty String is the smallest name in this array';
    }
    else {
        return tinyFriendName;
    }
}


console.log(feetToMile(40000));
console.log(WoodCalculator(1,0,6));
console.log(brickCalculator(34));
console.log(tinyFriend(['ab','saju', 'kaee','dul','ekk']));