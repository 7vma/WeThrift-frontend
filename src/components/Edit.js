import ClassNames from './Dropdown'
import React from 'react'
import '../dist/output.css'

const Edit = ({ handleSubmit, handleChange, updateProduct, val }) => {

    <form className="EditForm" onSubmit={handleSubmit}>
        <label>
            <span>username</span>
            <input type="text" required name="username" placeholder="username" onChange={handleChange} value={updateProduct.title} />
        </label>
        <label>
            <span>email</span>
            <input type="text" required name="email" placeholder="email" onChange={handleChange} value={updateProduct.description} />
        </label>
        <label>
            <span>password</span>
            <input type="text" required name="password" placeholder="password" onChange={handleChange} value={updateProduct.price} />
        </label>
        <input type="submit" value={val} />
    </form>
}

export default Edit