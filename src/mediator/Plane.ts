
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
        const result = new Map<string, PlaneLocation>();
        tower.locations.forEach((location, id) => {
            if (id !== this.id) {
                result.set(id, location)
            }
        })
        return result;
    }

    updateLocation = (tower: Tower) => {
        tower.locations.set(this.id, this.location);
    }
}

export default Plane;