// import { signInWithGooglePopUp } from "../../utils/firebase/firebase.utils"

// const SignIn =()=>{

//     const logGoogleUser = async ()=>{
//         const response = await signInWithGooglePopUp()
//         console.log(response)
//     }

//     return(
//         <div>
//             <h1>Sign In Page</h1>
//         {   
//              <button onClick={logGoogleUser}>
//              Sign In with Google 
//             </button>
//         }
        
//         </div>
//     )
// }
// export default SignIn

import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)

    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    );
};

export default SignIn;