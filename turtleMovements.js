    const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
    const filteredTurtleMovement = turtleMovement.filter(movement => 
        movement[0] >= 0 && movement [1] >= 0
    );
    console.log(filteredTurtleMovement);
    const turtleSteps = filteredTurtleMovement.map(movement => movement[0] + movement[1]);
    console.log(turtleSteps);
    turtleSteps.forEach( step =>
        console.log(step)
    );
    