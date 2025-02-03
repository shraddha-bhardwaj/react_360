// const heading = React.createElement("h1", {id:'heading'}, "Hello from React!"); // this {} is the place where we can give attributes to the tag
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // it will take this object and creates a tag and put it inside the root
// console.log(heading) //it is an object

// nested div -->

const parent = React.createElement( // this parent is an object , it's a react element
  "div",
  { id: "parent" },
  [
  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1",{id: "sibling1",key:1},"Nested tag"), // Each child in a list should have a unique "key" prop.
    React.createElement("h2", { id: "sibling2",key:2}, "Nested tag 2")] // array of siblings which are on the same level
  ),  React.createElement(
    "div",
    { id: "child" },
   [ React.createElement("h1",{id: "sibling1",key:1},"Nested tag"), 
    React.createElement("h2", { id: "sibling2",key:2}, "Nested tag 2")] 
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root")); // react will render only inside this root 
root.render(parent);
console.log(parent)
