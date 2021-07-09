import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser, selectUserInfo, deleteUserInfo } from '../login/loginSlice';
import './HomePage.css'

const HomePage = () => {

    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser)
    const userInfo = useSelector(selectUserInfo)


    return ( 
        <React.Fragment>
        <div className="bg-main" >
        {!currentUser ? (
            <div className="intro-container">
                <p>You know why you're here.  Click the login button in the header and let's do this.</p>
            </div>
         ) : (
             <div className="logged-in-container">
                <p style={{color: 'yellow'}}> hello { currentUser}.  thanks for logging in.</p>  
                <p style={{color: 'yellow'}}> your email: { userInfo.email}</p>  
                <p style={{color: 'yellow'}}> your password: {userInfo.password}</p>  
                <div>
                    <button 
                        className='delete-button'
                        onClick={() => dispatch(deleteUserInfo())}
                    >
                            delete my info, please
                    </button>
                </div>
            </div>
         )
        }
        
        </div>
    </React.Fragment>
     );
}
 
export default HomePage
