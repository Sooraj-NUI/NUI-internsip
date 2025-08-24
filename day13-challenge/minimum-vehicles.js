const vehicles = [
  { type: "cycle", weightCapacity: 1 },
  { type: "bike", weightCapacity: 5 },
  { type: "auto", weightCapacity: 20 },
  { type: "ace", weightCapacity: 50 },
  { type: "tempo", weightCapacity: 100 },
];
const parcels = [
  { location: "velachery", weight: 30 },
  { location: "madipakkam", weight: 17 },
  { location: "sholinganallur", weight: 240 },
];




const findMinVehicles = (vehicles, parcels, location)=> {


  let selectedVehicles = [];
  parcels.map((parcel) => {

    if (location === parcel.location) {

      let load = parcel.weight;
      console.log(load)

      vehicles.sort(
        (firstVehicle, secondVehicle) =>
          secondVehicle.weightCapacity - firstVehicle.weightCapacity
      );


      for (i = 0; i < vehicles.length; i++) {
        const vehicle = vehicles[i];
        console.log(vehicle)
        console.log(load)
        tempLoad = load - vehicle.weightCapacity;
        console.log(tempLoad)
        let count = 0;
        if (tempLoad >= 0) {
            console.log(load,vehicle.weightCapacity)
          count = parseInt(load / vehicle.weightCapacity); 
          console.log(count)
          load = load - count * vehicle.weightCapacity;
        }

        if (count > 0) {
          selectedVehicles.push({ vehicle: vehicle.type, count: count });
        }
      }
     
    }
  });

  selectedVehicles;
  console.log(selectedVehicles);


}
findMinVehicles(vehicles, parcels, "velachery");
