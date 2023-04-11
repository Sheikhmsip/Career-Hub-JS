


const Blogs = () => {
    return (


        <div>
            <div className='w-10/12 lg:w-8/12 mx-auto mb-12'>
                <h2 className='text-4xl font-bold text-center text-sky-400 my-12'>Questions & Answer</h2>
                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-1: </span>When the context API is used? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        The Context API in React is a tool for managing global state in your application. It allows you to share data between components without having to pass props down through multiple levels of the component tree.
                        Overall, the Context API is a powerful tool for managing global state in your application, and can help to simplify your code and improve performance.
                    </p>
                </div>



                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-2: </span> What is React coustom hook and How is work? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        A custom hook in React is a reusable function that encapsulates stateful logic and can be used across multiple components. It allows you to abstract away common logic that you may need to use in multiple places in your application. Custom hooks are created by using the useEffect and useState hooks, along with any other hooks that you need.

                        When you create a custom hook, you can return any values that you want, such as state variables, functions, or even other hooks. These values can then be used in your components just like any other hook.
                    </p>
                </div>



                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-3: </span> What is useRef and How does is work? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        useRef is a hook in React that returns a mutable ref object. Refs are a way to store a reference to a DOM element or a value that persists across renders without triggering a re-render of the component.

                        You can use the useRef hook to access the underlying DOM element of a component, or to store a value that doesn't trigger a re-render when it changes. The ref object returned by useRef has a property called current, which can be used to access the current value of the ref.
                    </p>
                </div>


                <div className='rounded-md drop-shadow-2xl bg-slate-50 border-2 p-6'>
                    <h2> <span className='font-bold text-sky-500'>Question-4: </span> What is useMemo and How does it work? </h2>
                    <hr />
                    <p className='mt-3 mb-10'>
                        useMemo is a hook in React that allows you to memoize the result of a function so that it is only recomputed when its dependencies change. It is useful for optimizing performance by avoiding unnecessary re-computations of expensive operations or complex calculations.

                        The useMemo hook takes two arguments: a function that returns a value, and an array of dependencies. The value returned by the function is cached and only recomputed when one or more dependencies in the array change. If the dependencies do not change, the cached value is returned instead.
                    </p>
                </div>


            </div>
            <div className='bg-zinc-900 '>

            </div>
        </div>
    )

};

export default Blogs;