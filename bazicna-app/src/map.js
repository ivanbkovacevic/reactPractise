var animal = {};
var animalMap={sound:'zvuk',age:'godiste',place:'mesto',food:'hrana',hobi:'pec'};
// Add keys to the hashmap
animal = { sound: 'meow', age:18, place:'pancova',hobi:'fishing',boja:'siva',food:'pomfrit' };
var animalSR={};

for(var x in animal){
  console.log('animal x - '+x+' - '+animal[x])
  for(var xx in animalMap){
     if(x ==xx){
       var key=animalMap[x]
       animalSR[key]=animal[x]
     }
  }
}