import './form.css'

const Form = () => {
    return (
        <div className='form-cover'>
            <form action="" className='form'>
                <label htmlFor="" className='label'>Username</label>
                <input type="text" className='input' placeholder='Username'/>
                <label htmlFor="" className='label'>Phone</label>
                <input type="text" className='input' placeholder='Phone'/>
                <label htmlFor="" className='label'>Password</label>
                <input type="text" className='input' placeholder='Password'/>
                <div className='submit'>
                    <button className='sign-in'>Sign In</button>
                    <button className='forgot'>Forgot Password?</button>
                </div>
            </form>
        </div>
    )
}

export default Form