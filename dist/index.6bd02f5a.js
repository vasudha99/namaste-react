// print hello world using js
// const heading = React.createElement(
//     "h1", 
//     {id: "heading"},
//     "Hello world by React"
//     ); 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); 
// to render the object to html that browser understands
// to create nested element using div 
// const parent = React.createElement(
//     "div", 
//     {id: "parent"}, 
//     React.createElement(
//         "div", 
//         {id: "child"},
//         React.createElement("h1", {}, "Hey bro !")
//     )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// to add multiple siblings 
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hey bro by h1 !"),
    React.createElement("h2", {}, "Hey bro by h2 !")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
