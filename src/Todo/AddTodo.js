import React, {useState} from 'react'
import PropTypes from 'prop-types'


const styles = {
    buttons: {
       top: 0,
       marginBottom: '1rem'
    },
    button: {
        marginRight: '1rem',
        width: '30rem'

    }
}

function AddTodo({onCreate, todo}) {
    const [value, setValue] = useState('')

    function submitHandler (event) {
        //Отменяем дефолтное поведение, чтобы не перезагружалась страница
        event.preventDefault()        

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
  

 return(
     <form style={{marginBottom: '1rem'}} onSubmit ={submitHandler}>
         <div style={styles.buttons}>
         <button style={styles.button} type='submit'> + Добавить заметку </button>
         </div>
         <textarea cols="64" rows="10" value={value} onChange={event => setValue(event.target.value)}/> 
         
     </form>
 )   
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo