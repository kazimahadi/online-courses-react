import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 ml-16 mr-16'>
            <div className='border p-5 mb-5'>
                <h1 className='font-bold'>Question: what is the purpose of react router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border p-5 mb-5'>
                <h1 className='font-bold'>Question: how does context api work?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='border p-5 mb-5'>
                <h1 className='font-bold'>Question: how to work use ref in react?</h1>
                <p>Refs are created using React.createRef() and attached to React elements via the ref attribute. Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.</p>
            </div>
        </div>
    );
};

export default Blog;