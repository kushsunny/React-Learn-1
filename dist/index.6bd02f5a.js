const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "clild"
}, [
    React.createElement("h1", {}, "This is h1 tag inside the two div tags"),
    React.createElement("h2", {}, "This is h2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
