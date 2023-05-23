import PlaneLocation from "./Location";
import Plane from "./Plane";


class Tower{
    locations: Map<string, PlaneLocation>

    constructor() {
        this.locations = new Map<string, PlaneLocation>
    }

    getAllLocations = () => {
        return this.locations;
    }

}


export default Tower;