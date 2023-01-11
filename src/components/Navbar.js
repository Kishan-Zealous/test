import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const home = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)
    const signup = useRef(null)
    const login = useRef(null)


    function activeLinkHandler(ref){
        switch (ref) {
            case home:
                home.current.classList.add("active")
                about.current.classList.remove("active")
                contact.current.classList.remove("active")
                signup.current.classList.remove("active")
                login.current.classList.remove("active")
                break;
            case about:
                home.current.classList.remove("active")
                about.current.classList.add("active")
                contact.current.classList.remove("active")
                signup.current.classList.remove("active")
                login.current.classList.remove("active")
                break;
            case contact:
                home.current.classList.remove("active")
                about.current.classList.remove("active")
                contact.current.classList.add("active")
                signup.current.classList.remove("active")
                login.current.classList.remove("active")
                break;
            case signup:
                home.current.classList.remove("active")
                about.current.classList.remove("active")
                contact.current.classList.remove("active")
                signup.current.classList.add("active")
                login.current.classList.remove("active")
                break;
            case login:
                home.current.classList.remove("active")
                about.current.classList.remove("active")
                contact.current.classList.remove("active")
                signup.current.classList.remove("active")
                login.current.classList.add("active")
                break;
                default:
                    home.current.classList.add("active")

        }
    }

    return (
        <header>
            <div className='container'>
                <nav className='navbar'>
                    <div className='nav-links'>
                        <Link ref={home} className='links' onClick={() => activeLinkHandler(home)} to="/">Home</Link>
                        <Link ref={about} className='links' onClick={() => activeLinkHandler(about)} to="/about">About us</Link>
                        <Link ref={contact} className='links' onClick={() => activeLinkHandler(contact)} to="/contact">Contact us</Link>
                    </div>
                    <div className='nav-links'>
                        <Link ref={signup} className='links' onClick={() => activeLinkHandler(signup)} to="/signup">Signup</Link>
                        <Link ref={login} className='links' onClick={() => activeLinkHandler(login)} to="/login">Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
