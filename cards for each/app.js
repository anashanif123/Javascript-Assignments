var items = document.getElementById("list");
var animals = [{
  name: "cow",
  title: "pyari cow",
  type: ["australian", "gulabi", "ghani"],
  image: "https://images.unsplash.com/photo-1556997685-309989c1aa82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZ1bm55JTIwY293c3xlbnwwfHwwfHx8MA%3D%3D"
},
{
  name: "goat",
  title: "Special bakra",
  type: ["gulabi", "bhoo bakra", "tadi"],
  image: "https://static.vecteezy.com/system/resources/previews/029/268/738/non_2x/generative-ai-funky-antelope-stylish-shades-on-a-pastel-playground-free-photo.jpg"
},
{
  name: "sheep",
  title: "axha gosht",
  type: ["chaki wala", "bina chaki wala"],
  image: "https://static.vecteezy.com/system/resources/previews/022/335/081/non_2x/funny-sheep-take-a-selfie-on-the-farm-generative-ai-photo.jpeg "
},
{
  name: "camel",
  title: "bhot lamba",
  type: ["white", "2 khoan wala"],
  image: "https://img.freepik.com/free-photo/joyful-camel-having-fun_23-2151058766.jpg"
},
{
  name: "buffalo",
  title: "khatarnak",
  type: ["nagpuri", "carabao", "surti buffalo"],
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSV7mqytuXg4Cmh_utZFt4xvR3FT5VxOqePw&usqp=CAU"
},
{
  name: "deer",
  title: "fastest",
  type: ["moose", "alke", "mule deer"],
  image: "https://t3.ftcdn.net/jpg/06/69/28/66/360_F_669286627_DUQO0eWR4XpXnFGui8inpUiBTxWG7WkW.jpg"
},
];
animals.forEach(function (data, ind) {
  var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
  <div class="flex relative h-64">
    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
    <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 class="tracking-widest text-xl font-medium text-indigo-500 mb-1">${data.name}</h2>
      <h1 class="font-medium text-2xl text-gray-900 mb-3">${data.title}</h1>
      <p class="leading-relaxed">${data.type.join(", ")}</p>
      <p class="leading-relaxed">${data.desc}</p>
      <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onclick="updateDesc(this)"><i class="fa-solid fa-pencil"></i></button>
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteCard(this)"><i class="fa-solid fa-trash-can"></i></button>
    </div>
  </div>
</div>`;
  items.innerHTML += ele;
});

function updateDesc(ele) {

  var index = ele.parentElement.id;
  animals[index].desc = prompt("Desc");

  items.innerHTML = "";
  animals.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
    <div class="flex relative h-64">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
      <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl font-medium text-indigo-500 mb-1">${data.name}</h2>
        <h1 class="font-medium text-2xl text-gray-900 mb-3">${data.title}</h1>
        <p class="leading-relaxed">${data.type.join(", ")}</p>
        <p class="leading-relaxed">${data.desc}</p>
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onclick="updateDesc(this)"><i class="fa-solid fa-pencil"></i></button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteCard(this)"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  </div>`;
    items.innerHTML += ele;
  });

}

function deleteCard(ele) {
  var index = ele.parentElement.id;
  animals.splice(index, 1);
  items.innerHTML = "";
  animals.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
    <div class="flex relative h-64">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
      <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl font-medium text-indigo-500 mb-1">${data.name}</h2>
        <h1 class="font-medium text-2xl text-gray-900 mb-3">${data.title}</h1>
        <p class="leading-relaxed">${data.type.join(", ")}</p>
        <p class="leading-relaxed">${data.desc}</p>
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onclick="updateDesc(this)"><i class="fa-solid fa-pencil"></i></button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteCard(this)"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  </div>`;
    items.innerHTML += ele;
  });
}
