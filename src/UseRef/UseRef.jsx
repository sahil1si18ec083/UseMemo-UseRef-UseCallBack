import { useEffect, useRef, useState } from "react";
const UseRef = () => {
  // let x = 10;
  const x = useRef(10);
  const [y, setY] = useState(20);
  const handleUpdate = () => {
    // x++;
    // you cannot update the let variable like this
    // you have to use useRef hook and update the current property
    x.current = x.current + 1;
    console.log(x);
  };
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Namaste React" + Math.random());
    }, 3000);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="demo">
        <div>
          <h1>{x.current}</h1>
          <button onClick={() => handleUpdate()}>Increase x </button>
          <button
            onClick={() => {
              setY((prev) => prev + 1);
            }}
          >
            Increase y {y}
          </button>
        </div>
      </div>
    </>
  );
};

export default UseRef;
