use("db_patissier")
db.createCollection("cake")

db.cake.insertMany(
  {_id:ObjectId(1), nome:"Red Velvet", Peso: "5kg", preço: 900,
  ingredientes:[{nome: "trigo", quantidade:"3 copos"},
  {nome: "ovo", quantidade:"três"},
  {nome: "morango", quantidade:"400g"}]
},
{_id:ObjectId(2), nome:"bento cake", Peso: "3kg", preço: 300,
  ingredientes:[{nome: "trigo", quantidade:"2 copos"},
  {nome: "ovo", quantidade:"dois"},
  {nome: "leite em pó", quantidade:"1 copo"}]
},
  {_id:ObjectId(3), nome:"vulcão", Peso: "2kg", preço: 60,
  ingredientes:[{nome: "trigo", quantidade:"2 copos"},
  {nome: "chocolate", quantidade:"300g"},
  {nome: "creme de leite", quantidade:"300ml"}]
},
{_id:ObjectId(4), nome:"Pão de ló", Peso: "2kg", preço: 100,
  ingredientes:[{nome: "açucar", quantidade:"150g"},
  {nome: "ovo", quantidade:"três"},
  {nome: "morango", quantidade:"200g"}]
}
)
use("db_patissier");
db.cake.find({_id:ObjectId("3")})

//3
use("db_patissier");
db.cake.deleteOne({_id:Object("1")});

//4
use("db_patissier");
db.cake.find({},{nome:true, preco:true});

//5
use("db_patissier");
db.cake.find({preco: {$lte:100.00}}, {nome: true, preco:true});

//6
use("db_patissier");
db.cake.updateOne(
  {_id:ObjectId("2")},
  {
    $set:{
      nome:"Bolo de chocolate",
      peso:"3kg"
    },
    $push:{
      ingredientes:{nome:"ganache", quantidade:"500g"}
    }
  }
);

//7
use("db_patissier");
db.cake.update({_id:ObjectId("3"), "ingredientes.nome"}
  {
    $set:{
      "ingredientes.$.nome":"ovo",
      "ingredientes.$.quantidade":"4"
    }
  }
)