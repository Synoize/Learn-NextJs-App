// Make this using client component

"use client"

import { use } from "react";


const singlePost = (props) => {

    // http://localhost:3000/users/ram/post/101?likes=100&views=5000
    const searchData = use(props.searchParams)
    const data = use(props.params)

    console.log(data);
    console.log(searchData);

    return (
        <div>
            <h1>Username: {data.username}</h1>
            <h1>Post Id: {data.post_id}</h1>
        </div>
    )
}

export default singlePost;