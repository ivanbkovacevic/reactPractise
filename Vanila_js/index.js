var json = [{
    "category_id": "1",
    "category_title": "Samsung",
    "category_product": [{
            "id": "1",
            "title": "Galaxy S9",
            "weight": "120g"
        },
        {
            "id": "2",
            "title": "Galaxy S7",
            "weight": "100g"
        },
        {
            "id": "3",
            "title": "Galaxy Ss7",
            "weight": "150g"
        }
    ]
},
{
    "category_id": "2",
    "category_title": "HTC",
    "category_product": [{
            "id": "1",
            "title": "Model 9",
            "weight": "150g"
        },
        {
            "id": "2",
            "title": "Model 4",
            "weight": "130g"
        }
    ]
},
{
    "category_id": "3",
    "category_title": "Iphone",
    "category_product": [{
            "id": "1",
            "title": "Iphone 4S",
            "weight": "123g"
        },
        {
            "id": "2",
            "title": "Iphone 6S+",
            "weight": "100g"
        }
    ]
},
{
    "category_id": "4",
    "category_title": "Huawei",
    "category_product": [{
        "id": "1",
        "title": "Honor 7a",
        "weight": "120g"
    }]
},
{
    "category_id": "5",
    "category_title": "Alcatel",
    "category_product": [{
        "id": "1",
        "title": "Hon 7a",
        "weight": "120g"
    }]
}
];

// console.log(json);
 var niz = ["a","b","c","d"];
// var noviNiz = [];
// for(var i in json){
//     // console.log(i);
//     // console.log(json[i]);
//     var item = json[i];
//     // console.log(item.category_product.length);
//     // console.log(item.category_title);
// var categorija = {
//     title:item.category_title,
//     productNum: item.category_product.length
// }

// noviNiz.push(categorija);
//     // for( var j in item.category_product){
//     //     var product = item.category_product[j];
//     //     console.log(product.title);
//     // }
// }

// console.log(noviNiz);
console.log(json);
var noviNiz2= [];
for( var u in json){
   // var item = json[u];
    console.log(json[u]);
  //  console.log(item.category_product.length);

    for( var y in json[u].category_product){
        json[u].category_product[y];
        console.log(json[u].category_product[y]); 
       // console.log(json[u].category_product[y].id); 

        var Model = {
        naziv : json[u].category_product[y].title,
        tezina: json[u].category_product[y].weight,
        broj: json[u].category_product[y].id
    }
    
    }
    noviNiz2.push(Model);
    console.log(noviNiz2);
}

for(var i in noviNiz2){
  var n =  noviNiz2[i];
    console.log(n.naziv);
}

noviNiz2.push("nesto");
console.log(noviNiz2);

var spojeno = noviNiz2.concat(niz);
console.log(spojeno);

var joinovano = niz.join(' * ');
console.log(joinovano);

var brojevi = [1,2,3,4,5];
var slova = ["a","b","c","d","e"];
console.log(brojevi);
//var plus10 = brojevi[5].map(x=> x +10 );

// for(var i in brojevi){
//     var br = brojevi[i];
//  //   console.log(br);
//   for(var j in brojevi[5]){
//       console.log(brojevi[5][j])
//   }
// }




var novaSlova = slova.slice(2,4);
console.log(novaSlova);


   