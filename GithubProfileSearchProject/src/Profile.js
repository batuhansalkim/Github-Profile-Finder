import React,{useState} from "react";

const Profile=()=>{
    const [data,setData]= useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories]  = useState([]);
    const onChangeHandler = e=>{
        setUsername(e.target.value);
    }
    
    const submitHandler = async ()=>{
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = profile.json();

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = repositories.json();
        console.log(repoJson);
    }

    // const submitHandler =async e=>{
    //     e.preventDefault();

    //     const profile = await fetch(`https://api.github.com/users/${username}`);
    //     const profileJson = profile.json();
    //     console.log(profileJson);
    // }
    return(
        <div>
            <input type="text" onChange={onChangeHandler}/>
            <button type="submit" onClick={submitHandler}>Search</button>
        </div>
        // <div> 
        //     <input type="text"  value={username} onChange={onChangeHandler}/>
        //     <button type="submit" onClick={submitHandler} >Search</button>
        // </div>
    )

}
export default Profile;

