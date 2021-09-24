import { useState } from "react";
import { useHistory } from 'react-router-dom'

const AddForm = ({edit}) => {
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault()
        const date = new Date().toLocaleDateString();// ? memasukkan tanggal ke dalam diary yang ditambahkan
        const diary = { title, body, date };
        
        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body : JSON.stringify(diary)
            
            
        }).then(() => {
            setTitle('')
            setBody('')
            history.push('/')
            console.log(diary);
        })
        
        
       
    }


    
    return (

        <div className={edit ? "edit-form" : "form"} >
            <form action="/" onSubmit={onSubmit}>
                <div className="button-exit">
                    <h1>Add Form</h1>
                </div>
                <label >Title</label>
                <input type="text" name="title" placeholder="title"
                     value={title} onChange={ e => setTitle(e.target.value)  }
                />

                <label >Diary</label>
                <textarea type="text" name="body" placeholder="what happen today"
                     value={body} onChange={ e => setBody(e.target.value)  }
                />

               
                <input type="submit" value="submit" />
            </form>
        </div>
     );
}
 
export default AddForm;

