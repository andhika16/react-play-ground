import Button from "./Button";

const Headers = ({showBtn}) => {
    const addDiaryButton = () => {
        const slide = document.querySelector('.formParent');
        const addButton = document.querySelector('.button')
        slide.classList.toggle('active')
        
    }


    return (
        <div className="head">
            <h1>My Diary</h1>
            {
                showBtn ? <Button name="Add Diary" color="#32cf37" func={ addDiaryButton }/> : null
            }
           

          
            
        </div>
     );
}
 
export default Headers;