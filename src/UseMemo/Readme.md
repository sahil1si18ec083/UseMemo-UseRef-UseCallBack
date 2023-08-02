useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

1. We want react to not render every function when any state changes.
   But the deafult behaviour of react makes it to render every function even if any state chnages that has no relation with that function
   If the functions that are rendered on any state change, doesnot affect the performance of the application but in case if the function is very heavy like calculation 1000 power of a number
   then we can memomise that function.
   In computing, memoization or memoisation is an optimization technique used primarily to
   speed up computer programs by storing the results of expensive function calls to pure functions
   and returning the cached result when the same inputs occur again.
   In UseMemoHook component, when we are toglling the darkmode, on click of button , we donot need to render the primeMover function ,
   so we are memoizing the primeMover function by passing a dependency text , that means when we toggle darkmode, it will render the component, but the
   primeMover function will not be called and this heavy operation can be restricted.
   Only when the text inside the input box changes so we donot need to perform the rendering of primeMover function, so we keep it inside useMemo and pass some dependency whenever you want to render it
   If
   const memo = useMemo(() => primeMover(Number(text)), [text]);

in place of dependency text, if we keep empty array as dependency, then even if text is changing, primeMover function is invoked only one time.
But if you want the function to render only one time on Mount, then keep empty array as dependency

2. When there is a parent and a child componnet and any state of parent chnages that has no relation with child props but still the child component renders .
   This is not a good optimization.
   In order to optimize we can wrap child inside the useMemo so that it can not be rendered unnecessary on any state change of parent and w ecan improve the performance

const children = useMemo(
() => (
<ChildComponent childState={childState} setChildState={setChildState} />
),[]);

