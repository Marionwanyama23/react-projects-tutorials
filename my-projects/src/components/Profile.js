//PROPS IN A FUNCTION BASED COMPONENT 
const Profile = (props) => {
    console.log(props)
    return <h1>Name: {props.name}</h1>;
}

export default Profile;