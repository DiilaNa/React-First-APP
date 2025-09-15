interface userDetailPropsType{
    name:string,
    age:number,
    email?:string,
    isAdmin: boolean
}



const UserDetails = ({name,age,email,isAdmin}:userDetailPropsType) => {
    return <div>
        <h1> Name: {name}</h1>
        <h2> Age: {age}</h2>
        <h3> Email: {email}</h3>
        <h4> Admin: {isAdmin ? "Yes" : "No"}</h4>
    </div>
}

export default UserDetails; 