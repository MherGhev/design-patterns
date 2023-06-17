import Builder from "./Builder";
import House from "./House";
import HouseBuilderError from "./HouseBuilderError";

class HouseBuilder implements Builder<House>{
    public house: House;
    constructor() {
        this.reset();
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
        const result = this.house;
        this.reset();
        return result;
        // or return new House(this.nOfWalls, this.windows, etc...)
    }

    reset = (): void => {
        this.house = new House();
    }
}

export default HouseBuilder;