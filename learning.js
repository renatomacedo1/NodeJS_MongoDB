const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Configuração do mongoose

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/learning", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch(err => {
    console.log("An error ocurred: " + err);
  });

// Model Usuários
// Definir Model
//const UsuarioSchema = mongoose.Schema({
const UsuarioSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String,
    require: true
  }
});

//});
// Collection
mongoose.model("usuarios", UsuarioSchema);

const User = mongoose.model("usuarios");

new User({
  nome: "Renato",
  sobrenome: "Macedo",
  email: "macedo.renato@protonmail.com",
  idade: 32,
  pais: "Portugal"
})
  .save()
  .then(() => {
    console.log("User criado com sucesso");
  })
  .catch(err => {
    console.log("Erro: " + err);
  });
