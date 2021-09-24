import { useState } from 'react';
import {useParams,useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddForm from './AddForm'
import Button from './Button';
import UseFetch from './UseFetch';
const DiaryPage = ({showBtn}) => {
    const { id } = useParams()
    const history = useHistory()
    const [showForm, setShowForm] = useState(false)
// ? fungsi ini digunakan untuk memunculkan tombol saat kita click salah satu card
    const buttonShowClick = () => showBtn(true) 
    const { data:diary, isPending } = UseFetch(`http://localhost:8000/posts/${id}`)

 

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

    const {title,body} = diary
    return (
        <div className="diary-page">
            <div className="utility">
                <Link to="/">
                    <Button name="Kembali" color="#32cf37" func={ buttonShowClick}/>
                </Link>
                <div>
                    <Button name="Edit" color="#d0df00" func={ handleForm } />
                    <Button name="Delete" color="#df0000" func={ handleDeleteDiary } />
                </div>
                
            </div>
            <div className="diary">
                {showForm ? <AddForm edit='edit-form' /> : <></>}
                <div className="diary-body">
                    <h1>{title}</h1>
                    {isPending ? <h1>loading</h1>:''   }
                    <h4>{body}</h4>
                </div>
            </div>
        </div>
     );
}
export default DiaryPage;

