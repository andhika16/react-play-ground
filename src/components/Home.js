import Card from "./Card";
import AddForm from "./AddForm";
const Home = ({data,onAdd}) => {

   


    return (
        <div className="page">
            
            <div className="row">
                {data.map(post => 
                <div className="col" key={ post.id }>
                        <Card post={post} />
                </div>
                )}
            </div>
            <div className="formParent">
                <AddForm handlePost={ onAdd }/>
            </div>

        </div>
     );
}
 
export default Home;