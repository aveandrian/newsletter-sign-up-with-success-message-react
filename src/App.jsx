import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e){
    setError(null)
    setEmail(e.target.value)
  }

  function handleSubmit(){
    if(email == ''){
      setError('Value cannot be empty')
      return;
    }
    if(!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
      setError('Valid email required')
      return;
    }

    setIsSuccess(true)
  }

  function reset(){
    setEmail('')
    setIsSuccess(false)
    setError(null)
  }

  return (
    <>  
      {isSuccess ? (
        <main className='success-container'>
          <img className='success-img' src='/images/icon-success.svg' alt='Success icon'></img>
          <h1 className='success-title'>Thanks for subscribing!</h1>
          <p className='success-text'>
            A confirmation email has been sent to <span className='email'>{email}</span>. 
            Please open it and click the button inside to confirm your subscription.
          </p>
          <button className='success-btn' onClick={reset}>Dismiss message</button>
        </main>
      ) : 
      (
        <main>
          <section className='main-section'>
            <h1 className='main-title'>Stay updated!</h1>
            <p className='main-text'>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className='list-container'>
              <div className='list-item-container'>
                <img src='/images/icon-list.svg' className='icon-list' alt='List icon'></img>
                <p>Product discovery and building what matters</p>
              </div>
              <div className='list-item-container'>
                <img src='/images/icon-list.svg' className='icon-list' alt='List icon'></img>
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className='list-item-container'>
                <img src='/images/icon-list.svg' className='icon-list' alt='List icon'></img>
                <p>And much more!</p>
              </div>
            </div>
            

            <div className='input-container'>
              <div className='input-text'>
                <p className='input-label'>Email address</p>
                {error && <p className='error'>{error}</p>}
              </div>
              <input type='text' name='email' placeholder='email@company.com' onChange={handleChange} value={email}></input>
            </div>

            <button className='main-btn' onClick={handleSubmit}>Subscribe to monthly newsletter</button>
          </section>
          <section className='main-picture-section'>
            <picture>
              <source srcset="/images/illustration-sign-up-mobile.svg"media="(max-width: 950px)"></source>
              <img className='main-img' src='/images/illustration-sign-up-desktop.svg' alt='Main image'></img>
            </picture>
          </section>
        </main>
      )
      }
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
