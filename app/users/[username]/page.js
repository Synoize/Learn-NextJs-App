const singleProfile = async(props) => {
    const user = await props.params
    console.log(user);
    
    return <h1>Username: {user.username}</h1>
}

export default singleProfile;