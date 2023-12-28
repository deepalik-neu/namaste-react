import React from "react"
import ReactDom from "react-dom"

//react element
const heading = React.createElement("h1",{id:"heading"},"Hello World in React!");

//react element using jsx
const JsxHeading = ()=>{ return <h1 id="heading" className="header">Hello World in React!</h1>}

//React funcitonal component syntax examples
const Fn = ()=>{
    return <h1 id="heading" className="header">this is a functional component</h1>;
}

const Fn1 = ()=>(
    <div className="container">
        <JsxHeading />
        <h1 id="heading" className="header">this is a functional component</h1>
    </div>
)
//<fn2/> this is a react element
const Fn2 = ()=> true;

//React Dom will create a root for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Fn1/>);

//Example to create nested html elements using react
const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("h1",{id:"child"},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag here")

]
)
