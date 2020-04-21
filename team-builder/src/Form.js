import React from 'react'

function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
} = props

return (
    <form  onSubmit={onSubmit} >
        <h2>Friend Form</h2>
        
        <label>Name:
            <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
            ></input></label>

            <br></br>

            <label>Email:
            <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
            ></input></label>   

            <br></br>

            <label>Role:
            <input
            value={values.role}
            onChange={onInputChange}
            name='role'
            type='text'
            ></input></label>
            <br></br>
            {/* Button to submit */}
            <button>Submit</button>
    </form>
)
}
export default Form