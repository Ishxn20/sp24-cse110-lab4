let statistics = {
    redCars: 21, 
    bluecars: 45, 
    greencars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
    };

    for (let i in statistics) {
        if (i.startsWith('r') || statistics[i] % 2 !== 0) {
            console.log(statistics[i]);
        }
    }