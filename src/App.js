import { useState, useEffect, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );

  function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }
}

// From the Use Effect Lesson

// function App() {
//   // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     console.log("resource changed");

//     return () => {
//       console.log("return from resource change");
//     };
//   }, [resourceType]);

//   // useEffect(() => {
//   //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//   //     .then((response) => response.json())
//   //     .then((json) => setItems(json));
//   // }, [resourceType]);

//   // const handleResize = () => {
//   //   setWindowWidth(window.innerWidth);

//   //   return () => {
//   //     window.removeEventListener("resize", handleResize);
//   //   };
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("resize", handleResize);
//   // }, []);

//   return (
//     // <div>{windowWidth}</div>

//     <>
//       <div>
//         <button onClick={() => setResourceType("posts")}>Posts</button>
//         <button onClick={() => setResourceType("users")}>Users</button>
//         <button onClick={() => setResourceType("comments")}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item)}</pre>;
//       })}
//     </>
//   );
// }

export default App;
