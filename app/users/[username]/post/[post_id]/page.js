// MAke this using client component

"use client"

import { use } from "react";


const singlePost = (props) => {

    const data = use(props.params)
    console.log(data);

    return (
        <div>
            <h1>Username: {data.username}</h1>
            <h1>Post Id: {data.post_id}</h1>
        </div>
    )
}

export default singlePost;