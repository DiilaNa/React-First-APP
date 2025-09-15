const MyComponent = (prop:any) => {
    
    const name = prop.name;
    const age = prop.age;
    const email = prop.email;

    return <>
        <hr />
        <h1>{name}</h1>
        <h2>{prop.age}</h2>
        <h3>{email}</h3>
        {prop.children}
        <hr />
        <h1>My Component</h1>
        <p>This is a simple React functional component.</p>
    
    </>;
};

export default MyComponent;
