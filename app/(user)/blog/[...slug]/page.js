// Catch-all Segments -- blog/[...slug]/page.js : handle dynamic nested routes without define manually each level of path

import React from 'react'

const Blog = (props) => {

  const { slug } = props.params;
  console.log('slug: ', slug);

   slug.forEach((item, index) => {
    console.log("dynamic nested routes: ", item);
  })

  return (
    <div>
      <h1>Dynamic Nested Routes : Catch-all Segments</h1>
        {
          slug.map((route, index) => (
            <p key={index}>Route : /{route}</p>
          ))
        }
    </div>
  )
}

export default Blog