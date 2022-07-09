import style from './Form.module.css'



const Form = () => {
    return(
        <div className={style.Form}>
            <form>
            <label for="name">Name:</label>
            <input type="text" id="name" />
            <label for="email">Email:</label>
            <input type="email" id="email" />
            <label for="phone">Phone:</label>
            <input type="number" id="phone" />
            <label for="adress">Address:</label>
            <input type="text" id="adress" />
            </form>
        </div>
    )
}


export default Form;