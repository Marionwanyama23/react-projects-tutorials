//PROPS IN A FUNCTION BASED COMPONENT 
const Profile = (props) => {
    //Destructuring props
    const {firstName, lastName} = props;
    

    return (<h1>Name: {firstName} {lastName}</h1>)
}

export default Profile;