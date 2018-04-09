// About Objects
// Arrays are great for lists, but cannot hold a lot of information about one thing. Consider the following array of cats.
// var myCatArray = ["Gideon", "Zelda", "Misty", "Pepper"];
// What if we wanted to know more information about these cats besides just their names? Let's say we wanted to know about the breed, the size, the color, their favorite toys, etc. We could create multiple arrays, but then it's difficult to know more information about each cat because they're in different places. Also, if anything changed, and the information got reorganized then you wouldn't be able to get the different info for each cat.
// Instead, when we want to have a bunch of information together about one thing, we can use an object. Consider the following objects, now we know multiple things about each cat stored in one place.
// var gideon = { name: "Zelda", size: "small", color: "brown", favToy: "hair ties"}
// var zelda = { name: "Gideon", size: "large", color: "orange", favToy: "cat nip carrot"}
// What's the advantage of doing it this way? Well, now if we want all the information about Gideon, we can just use the gideon variable, and have access to all of his info in one place!
// You can think of Objects like keys on a keyring. Each key is for a specific lock and if you have nice identifiers on each key, it's easy to use them to get what you want. In javascript, everything on the left hand side of the : are keys (or properties) and everything on the right side are values. So it's key: value. In our above example the keys are name, size, color, favToy, and the values are what is to the right of the :.
// Objects are often used in conjunction with arrays, to make an array of objects. So arrays hold order, and then the objects can hold all of the info. So you could do the following.
// var cats = [
//     { name: "Zelda", size: "small", color: "brown", favToy: "hair ties"},
//     { name: "Gideon", size: "large", color: "orange", favToy: "cat nip carrot"}
// ]
// Next, we'll talk more in depth about objects, know that you know why you might want to use them.