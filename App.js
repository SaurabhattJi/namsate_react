const head = React.createElement(
  "h1", // this is the tag
  { id: "heading" }, // it is the place where you will give attributes to the tag
  "hello world from React" // it is what we have to put inside the h1 tag
);
console.log(head);

// when we did  React.createElement it basically creates a js object / react element.

const root = ReactDOM.createRoot(document.getElementById("root"));

// we are paasing an object to the render file.

root.render(head);

// render method is responsible for take the object from head and convert into a heading tag & put it in DOM
