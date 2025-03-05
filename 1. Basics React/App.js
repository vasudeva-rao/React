/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hi from h1</h1>
 *          <h2>Hi from h2</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi from h1"),
    React.createElement("h2", {}, "Hi from h2"),
  ])
);

// console.log(parent) // -> React Element => JS object
// const heading = React.createElement("h1", {}, "Hi");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
