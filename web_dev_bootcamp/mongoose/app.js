const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

connectDB().catch((err) => console.log(err));

// creating a schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 30,
  favoriteFruit: pineapple,
});

// pineapple
//   .save()
//   .then(async () => {
//     const data = await Fruit.find({});
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

person
  .save()
  .then(async () => {
    const data = await Person.find({});
    console.log(data);
  })
  .catch((err) => console.log(err));

// creating a model
// const Blog = mongoose.model("Blog", BlogSchema);

async function updateData() {
  try {
    const result = await Blog.updateOne(
      { _id: "67e63871a734319ef85846e4" }, //item to be updated
      { title: "changing title2 again" }
    );
    console.log(result);

    fetchData();
  } catch (err) {
    console.log(err);
  }
}

async function deleteData() {
  try {
    const res = await Fruit.deleteOne({ _id: "67e6434466d66124aceb97c6" });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

deleteData();
