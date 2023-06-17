import Plane from "./Plane";
import Tower from "./Tower";

const tower = new Tower();

const plane1 = new Plane("1", "Lufthansa 787", { x: 189, y: 3000, z: 1000 });
const plane2 = new Plane("2", "Thai DC-8-63", { x: 500, y: 489, z: 1400 });

const planes = [plane1, plane2];

setInterval(() => {
    planes.forEach(plane => {

        plane.updateLocation(tower);

        plane.location.x = Math.floor(Math.random() * 5000);
        plane.location.y = Math.floor(Math.random() * 5000);
        plane.location.z = Math.floor(Math.random() * 5000);
    });
    console.log(plane1.getOtherPlaneLocations(tower));
}, 1000)