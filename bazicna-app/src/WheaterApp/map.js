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

this.current = {};
this.currentSR = {};
this.currentMap ={cloud:'oblaci',feelslike_c:'licni osecaj',humidity:'vlaznost',pressure_mm:'pritisak',temp_c:'temperatura',
vis_km:'vidljivost',wind_dir:'pravac vetra',wind_kph:'brzina vetra'};

for(var q in this.current){
  console.log(q);
  for(var qq in this.currentMap){
      if(q==qq){
        var key=this.currentMap[q]
       this.currentSR[key]=this.current[q]
      }
  }
}