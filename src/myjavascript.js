// import { forEach } from "core-js/core/array";

export const MyFunctions = {
    // makes the colour of the cell equal to that of the car, if one is there
    addCarToCell: function (location, cars) {
        let colour = "";
        cars.forEach((element) => {
            element.position.forEach((e2) => {
                if (e2.join("") === location) {
                    colour = element.colour;
                }
            });
        });
        return colour;
    },


    //checks to see if this cell has a car that has been pressed. if so make border yellow
    isActiveCell: function (location, cars) {
        let cell = location;
        let returnString = "";
        cars.forEach((element) => {
            element.position.forEach((e2) => {
                if (e2.join("") === cell) {
                    if (element.isActiveCar) returnString = "is-active-cell";
                }
            });
        });
        return returnString;
    },

    hasACarBeenLoadedAlready: function (location, startPosition, cars) {
        console.log('hasACarBeenLoadedAlready');
        let carHasBeenLoaded = false;
        //load a car if one hasn't been already
        if (!startPosition) {

            console.log('no it hasnt');
            cars.forEach((element) => {
                element.position.forEach((e2) => {
                    if (e2.join("") === location) {
                        carHasBeenLoaded = true;
                        element.isActiveCar = true;
                        startPosition = location;
                    }
                });
            });
            // return false;

        }
        if (carHasBeenLoaded) return false;
        // console.log('yes it has');
        return true;
    },

    pathForCar: function (location, positionOfCar, typeOfCar) {

        let myPath = [];
        // alert("my path", myPath);
        let l0 = parseInt(location[0]);   //horizontal part of location
        let l1 = parseInt(location[1]);   // vertical part of location
        let carArrayToString = JSON.stringify(positionOfCar);
        //horizontal path to left
        if ((typeOfCar === 'h') && (l0 < positionOfCar[0][0])) {

            for (let i = l0, j = 0; j < positionOfCar.length; j++) {
                // only put the cell in the path if it is not within the original car's coordinates 
                if (carArrayToString.indexOf(JSON.stringify([i, positionOfCar[0][1]])) == -1)
                    myPath.push([i, positionOfCar[0][1]]);
                i++;
            }
        }
        // horizontal path to right
        else if ((typeOfCar === 'h') && (l0 >= positionOfCar[positionOfCar.length - 1][0])) {
            for (let i = l0 - positionOfCar.length + 1; i <= l0; i++) {
                // only put the cell in the path if it is not within the original car's coordinates 
                if (carArrayToString.indexOf(JSON.stringify([i, positionOfCar[0][1]])) == -1)
                    myPath.push([i, positionOfCar[0][1]]);
            }
            console.log("go to right", myPath);
        }
        //vertical path to down
        else if ((typeOfCar === 'v') && (l1 >= positionOfCar[positionOfCar.length - 1][1])) {
            for (let i = l1 - positionOfCar.length + 1; i <= l1; i++) {
                // only put the cell in the path if it is not within the original car's coordinates 
                if (carArrayToString.indexOf(JSON.stringify([positionOfCar[0][0], i])) == -1)
                    myPath.push([positionOfCar[0][0], i]);
            }
            console.log("go down", myPath);
        }
        //vertical path to up
        else if ((typeOfCar === 'v') && (l1 < positionOfCar[0][1])) {
            for (let i = l1, j = 0; j < positionOfCar.length; j++) {
                // only put the cell in the path if it is not within the original car's coordinates 
                if (carArrayToString.indexOf(JSON.stringify([positionOfCar[0][0], i])) == -1)
                    myPath.push([positionOfCar[0][0], i]);
                i++;
            }
            console.log("go up", myPath);
        }
        return myPath;
    },

    isCollision: function (location, positionOfCar, typeOfCar, cars) {
        let path = [];
        path = this.pathForCar(location, positionOfCar, typeOfCar, cars);
        let collision = false;

        cars.forEach((e2) => {
            e2.position.forEach((e3) => {
                path.forEach((element) => {
                    console.log(JSON.stringify(element), JSON.stringify(e3));
                    if (JSON.stringify(element) === JSON.stringify(e3)) {

                        console.log("collision!!!!!!!!!!!!!1",);
                        collision = true;
                    }
                });
            });
        });
        return collision;

    },

    isCarMovePossible: function (location, positionOfCar, typeOfCar, cars) {
        // console.log("isCarMovePossible", location[0], positionOfCar[0][0]);
        let isMovePossible = false;
        let l = location.split('');

        if (positionOfCar[0][1] == l[1]) {
            console.log("horizontal move");
            if (typeOfCar === "h") isMovePossible = true;
            else return false;
        }
        else if (positionOfCar[0][0] == l[0]) {
            console.log("vertical move");
            if (typeOfCar === "v") isMovePossible = true;
            else return false;
        } else { // it is diagonal move so not allowed
            console.log("diagonal move");
            return false;
        }
        if (this.isCollision(location, positionOfCar, typeOfCar, cars)) {
            isMovePossible = false;
        }
        return isMovePossible;

    },

    moveCar: function (location, car) {
        // console.log('moveCar');
        let l0 = parseInt(location[0]); //horizontal location
        let l1 = parseInt(location[1]); //vertical location
        let newCar = [];

        //horizontal move
        if (car.type === "h") {
            // left move 
            if (l0 < car.position[0][0]) {
                for (let i = 0, j = l0; i < car.position.length; i++) {
                    newCar.push([j, car.position[0][1]]);
                    j++;
                }
                car.position = newCar;
            }
            //rightMove
            else if (l0 > car.position[car.position.length - 1][0]) {
                for (let i = 0, j = l0; i < car.position.length; i++) {
                    newCar.push([j, car.position[0][1]]);
                    j--;
                }
                car.position = newCar;
            }
        }
        //vertical move
        if (car.type === "v") {
            // up move 
            if (l1 < car.position[0][1]) {
                for (let i = 0, j = l1; i < car.position.length; i++) {
                    newCar.push([car.position[0][0], j]);
                    j++;
                }
                car.position = newCar;
            }
            //down Move
            else if (l1 > car.position[car.position.length - 1][1]) {
                for (let i = 0, j = l1; i < car.position.length; i++) {
                    newCar.push([car.position[0][0], j]);
                    j--;
                }
                car.position = newCar;
            }
        }
    },
    tryToMoveCar: function (location, startPosition, cars) {
        // console.log("try to move car");
        let activeCar = '';
        let canMoveCar = false
        cars.forEach((element) => {
            if (element.isActiveCar) {    // find the active car and move it to the new position
                activeCar = element;
                if (!this.isCarMovePossible(location, element.position, element.type, cars)) {
                    console.log("move is not possible");
                    element.isActiveCar = !element.isActiveCar;
                }
                else {
                    this.moveCar(location, activeCar);
                    element.isActiveCar = !element.isActiveCar;
                    canMoveCar = true;
                }
            }
        });
        return canMoveCar;
    },


}  // end of MyFunctions