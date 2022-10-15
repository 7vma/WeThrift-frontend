import ClassNames from './Dropdown'
import React from 'react'
import '../dist/output.css'

const Edit = ({ handleSubmit, handleChange, updateProfile, val }) => {

    <form className="EditForm" onSubmit={handleSubmit}>
        <label>
            <span>username</span>
            <input type="text" required name="username" placeholder="username" onChange={handleChange} value={updateProfile.username} />
        </label>
        <label>
            <span>email</span>
            <input type="text" required name="email" placeholder="email" onChange={handleChange} value={updateProfile.email} />
        </label>
        <label>
            <span>password</span>
            <input type="text" required name="password" placeholder="password" onChange={handleChange} value={updateProfile.password} />
        </label>
        <input type="submit" value={val} />
    </form>
}

export default Edit