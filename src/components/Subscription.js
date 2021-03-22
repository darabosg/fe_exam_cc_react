import React, { useState } from 'react'
import LoadingMask from './LoadingMask'

const Subscription = ({ hotel, setIsSubShown }) => {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')

   const fiveSec = (func) => {
       setTimeout(() => {
           func()
       }, 5000);
    }
 
    const submitForm = (e) => {
        e.preventDefault()
        setIsLoading(true)

        fetch('api/hotels/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                hotel: hotel.name,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                data.success ? setMessage('Subscribed') : setMessage('Already subscribed')
                setIsLoading(false)
                fiveSec(setIsSubShown)
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Request more info about </h2>
            {message && <p>{message}</p>}
            {!isLoading && (
                <form onSubmit={submitForm}>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        type='submit'
                        value='Subscribe'
                        disabled={!email.includes('.') || !email.includes('@')}
                    />
                </form>
            )}
            {isLoading && <LoadingMask />}
        </div>
    )
}

export default Subscription
