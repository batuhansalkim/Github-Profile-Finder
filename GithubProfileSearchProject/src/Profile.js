import React,{useState} from "react";
import DisplayTable from "./DisplayTable";

const Profile=()=>{
    const [data,setData]= useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories]  = useState([]);
    const onChangeHandler = e=>{
        setUsername(e.target.value);
        console.log(username);
    }
    
    const submitHandler = async e=>{
        e.preventDefault();
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson =await profile.json();
       // console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson =await repositories.json();
        //console.log(repoJson);

        if(profileJson){
            setData(profileJson);
            setRepositories(repoJson);
        }
    }
    console.log(repositories);
    // const submitHandler =async e=>{
    //     e.preventDefault();

    //     const profile = await fetch(`https://api.github.com/users/${username}`);
    //     const profileJson = profile.json();
    //     console.log(profileJson);
    // }
    return(
        <>
            <div style={{padding:20}}>
                <div className="ui search">
                    
                    <div className="ui icon input">
                        <i className="search icon"></i>
                        <input className="prompt" placeholder="search username here..." type="text" onChange={onChangeHandler} />
                    </div>
                    <button type="submit" onClick={submitHandler} className="ui primary button">
                        <i className="github icon">Search</i>
                    </button>
                    <DisplayTable data={data} repositories={repositories}/>
                </div>
            </div>
            
        </>
        
        // <div> 
        //     <input type="text"  value={username} onChange={onChangeHandler}/>
        //     <button type="submit" onClick={submitHandler} >Search</button>
        // </div>
    )

}
export default Profile;

