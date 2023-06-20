import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "This is Namaste React 🚀"),
//       React.createElement("h2", {}, "by Akshay Saini"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I'm an h1 tag"),
//       React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//   ])

// create element using JSX
// const heading = (<h1 className="head">
//     Hello world by JSX
//     </h1>);

//react functional component

// const Title = () => (
//     <h1>javascript Title Functional Component</h1>
// ); 
const elem = <span>React element </span>;
const title = (
    <h1>
        {elem}
        javascript Title Functional Component
    </h1>
); 

//Component Composition
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1>javascript Functional Component</h1> 
        <h1>{100 + 200}</h1> 
    </div>
); 


// React Fragment - behaves like an empty tag
// const HeadingComponent = () => (
//     <>
//       <div id="container">
//         <Title />
//         <h1 className="heaidng">Namaste React Fucntional Component</h1>
//       </div>
//       <div id="container-2"></div>
//     </>
//   );
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); 

root.render(<HeadingComponent />); //render react functional component