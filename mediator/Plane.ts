import PlaneLocation from "./Location";
import Tower from "./Tower";

class Plane {
    public id: string;
    public model: string;
    public location: PlaneLocation;

    constructor(id: string, model: string, location: PlaneLocation) {
        this.id = id;
        this.model = model;
        this.location = location;
    }

    getOtherPlaneLocations = (tower: Tower) => {
        return tower.locations;
    }

    updateLocation = (tower: Tower) => {
        tower.locations.set(this.id, this.location);
    }
}

export default Plane;