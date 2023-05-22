function distanceFromHqInBlocks(distance){
    if(distance <= 42){
        return 42 - distance
    }
    else if(distance >= 42){
        return distance - 42
    }
}


function distanceFromHqInFeet(startingStreet){
    let blocks = distanceFromHqInBlocks(startingStreet)
    return blocks * 264
}

function distanceTravelledInFeet(start, destination){
    if(destination < start){
        return (start - destination) * 264
    }
    else if(destination > start){
        return (destination - start) * 264
    }
  
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400){
        return 0
    }
    else if(distance <= 2000){
        let fare = (distance - 400) * 0.02
        return fare 
    } 
    else if(distance <= 2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}