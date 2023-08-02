import { useState, useMemo } from "react";
import ChildComponent from "./ChildComponent";
const UseMemoHook = () => {
  const [text, setText] = useState("");
  const [childState, setChildState] = useState(null);

  function primeMover(n) {
    console.log("going inside the function");
    var primes = [2];
    var x = 3;
    var count = 0;
    do {
      for (var y = 2; y < x; y++) {
        if (x % y === 0) {
          count++;
        }
      }
      if (count === 0) {
        primes.push(x);
        x++;
      } else {
        x++;
        count = 0;
      }
    } while (primes.length < n);
    return primes[primes.length - 1];
  }
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log("componnet is re rendering");
  // heavy operation
  const memo = useMemo(() => primeMover(Number(text)), [text]);
  console.log(memo);
  // Here we are doing memoisation of child component by wrapping it inside useMmemo

  const children = useMemo(
    () => (
      <ChildComponent childState={childState} setChildState={setChildState} />
    ),
    []
  );
  return (
    <>
      <div
        className="demo"
        style={{ background: isDarkMode ? "black" : "white" }}
      >
        <button
          onClick={() => {
            setIsDarkMode((prev) => !prev);
          }}
        >
          Click
        </button>
        <div>
          <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <p style={{ color: isDarkMode ? "white" : "black" }}>{memo}</p>
          {children}
        </div>
      </div>
    </>
  );
};
export default UseMemoHook;
