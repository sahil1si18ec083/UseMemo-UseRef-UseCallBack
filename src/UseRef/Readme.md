useRef is a React Hook that lets you reference a value that’s not needed for rendering
WHY DO WE NEED IT?

You want to store some variable but you donot component to re render by its change?

Why cannot we use normal variables let for it?
Becasue changes made via let will not reflect on ui layer

So in order to update those variables for which we donot want react to take care, means you want react to not render when those variables change, we can use useRef for it

const x= useRef(10);

Why we should use useRef in place of normal let variables?

If we update a normal let variable by doing x=x+1 and if you render the component by doing some other state change, then the value of x will be refrshed and it will show the old value only

But If we make a const y=useRef(10), and on pressing counter it does y.current = y.current+1; and the component renders by some other state change , the change made to y.current will not die
like it happened for normal let variables.
So we donot want variables to reset on a render we make a value inside useRef
So that is why we need useRef to keep track of items for which we donot want componnet to render
Ref is an object which has a key current and only that value current gets updated
Changes made to useRef are not reflected until component re renders

Changing a ref does not trigger a re-render.
This means refs are perfect for storing information that doesn’t affect the visual output of your component

If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.

useRef returns a ref object with a single current property initially set to the initial value you provided.

On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.

Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component.
