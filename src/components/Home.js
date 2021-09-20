import { useEffect } from "react";
import Card from "./Card";

const Home = () => {

    const url = 'https://jsonplaceholder.typicode.com/users/1/posts'
    // fetching data menggunakan useEffect
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => { return res.json()s })
    //         .then(data => console.log(data))
    //     .catch(err => {throw err})
    // },[url])

    return (
        <div className="page">
            
        </div>
     );
}
 
export default Home;