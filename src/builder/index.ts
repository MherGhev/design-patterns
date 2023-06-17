import House from "./House";
import HouseBuilder from "./HouseBuilder";


const builder1 = new HouseBuilder();
const house1: House = builder1.addWalls(4).addDoors(3).addWindows(2).addRoof().addBackyard().build();


// const builder2 = new HouseBuilder();
// const house2: House = builder2.addWalls(4).addBackyard().build(); // will throw an error (No door leading to the backyard)

// console.log(house1);
// console.log(house2);
