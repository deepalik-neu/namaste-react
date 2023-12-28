const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("h1",{id:"child"},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")

]
)


const heading = React.createElement("h1",{id:"heading"},"Hello World in React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);