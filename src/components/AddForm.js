import { useState } from "react";

const AddForm = ({handlePost}) => {
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const date = new Date()

        
        

        handlePost({ title,body,date })
        
        setTitle('')
        setBody('')
    }


    
    return (
        <div className="form">
            <form action="#" onSubmit={onSubmit}>   
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