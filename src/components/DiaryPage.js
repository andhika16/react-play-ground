import { useEffect, useState } from 'react';
import {useParams,useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddForm from './AddForm'
const DiaryPage = () => {
    const { id } = useParams()
    const history = useHistory()
    const [loading,setLoading] = useState(false)
    const [dataDiary,setDataDiary] = useState([])
    const [showForm,setShowForm] = useState(false)
    useEffect(() => {
        const getData = async () => {
            const dataFromServer = await getDataDiary()
            setDataDiary(dataFromServer)
            setLoading(true)
        }
        
        getData()
    },[])

    const getDataDiary = async () => {
        const res = await fetch(`http://localhost:8000/posts/${id}`)
        const data = await res.json()
        return data
    }

    const handleDeleteDiary = async () => {
        await fetch(`http://localhost:8000/posts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'Application/json' },
        })        
        history.push('/')

  }
    

    const handleForm = () => {
        setShowForm(!showForm);

    }

    const {title,body} = dataDiary
    return (
        <div class="diary-page">
            <div className="utility">
                <Link to="/">
                    <button style={{backgroundColor:'#32cf37'}}>Kembali</button>
                </Link>
                <div>
                    <button style={{ backgroundColor: '#d0df00' }}
                        onClick={handleForm}>
                        Edit</button>
                    <button style={{ backgroundColor: '#df0000' }}
                        onClick={handleDeleteDiary}>Delete
                    </button>
                </div>
                
            </div>
            <div className="diary">
                {showForm ? <AddForm edit='edit-form' /> : <></>}
                <div className="diary-body">
                    <h1>{title}</h1>
                    {!loading ? <h1>loading</h1>:''   }
                    <h4>{body}</h4>
                </div>
            </div>
        </div>
     );
}
export default DiaryPage;

