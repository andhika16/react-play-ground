import Card from "./Card";
import AddForm from "./AddForm";
import UseFetch from './UseFetch';

const Home = ({onAdd ,setBtn}) => {
    const url = 'http://localhost:8000/posts'
    const { data,isError,isPending} = UseFetch(url)
    const buttonClick = () => setBtn(false)

    return (
        <div className="page">
           

            <div className="row">


                {isPending && <h1>Loading</h1>}
                {isError && <h1>{ isError }</h1>}
                {data.map(post =>
                    <div className="col" key={post.id} onClick={ buttonClick }>
                        <Card post={post} />
                    </div>
                )}
            </div>

            <div className="formParent">
                <AddForm handlePost={ onAdd } />
            </div>
           
        </div>
     );
}
 
export default Home;