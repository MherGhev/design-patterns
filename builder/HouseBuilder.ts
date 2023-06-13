import Builder from "./Builder";
import House from "./House";
import HouseBuilderError from "./HouseBuilderError";

class HouseBuilder implements Builder<House>{
    public house: House;
    constructor() {
        this.house = new House();
    }

    addWalls = (nOfWalls: number): HouseBuilder => {
        this.house.nOfWalls += nOfWalls;
        return this;
    }

    addDoors = (nOfDoors: number): HouseBuilder => {
        if (this.house.nOfDoors + nOfDoors > this.house.nOfWalls) {
            throw new HouseBuilderError("The number of doors should not be more than the number of walls.")
        }
        this.house.nOfDoors += nOfDoors;
        return this;
    }

    addWindows = (nOfWindows: number): HouseBuilder => {
        if (this.house.nOfWindows + nOfWindows > this.house.nOfWalls) {
            throw new HouseBuilderError("The number of windows should not be more than the number of walls.")
        }
        this.house.nOfWindows += nOfWindows;
        return this;
    }

    addRoof = (): HouseBuilder => {
        if (this.house.nOfWalls < 4) {
            throw new HouseBuilderError("Cannot place a roof on a house with less than 4 walls.");
        }
        this.house.roof = true;
        return this;
    }

    addBackyard = (): HouseBuilder => {
        if (this.house.nOfDoors < 2) {
            throw new HouseBuilderError("No door leading to the backyard.");
        }
        this.house.backyard = true;
        return this;
    }

    build = (): House => {
        // reset this.house ?
        return this.house;
    }
}

export default HouseBuilder;