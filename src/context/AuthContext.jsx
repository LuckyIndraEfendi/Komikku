import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signInAnonymously, createUserWithEmailAndPassword, signInWithEmailLink, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../config/firebase/firebaseConfig";
import swal from "sweetalert";


export const AuthContext = createContext();
export const useAuthContext = () => {
    return useContext(AuthContext)
};

export const AuthProvider = ({ children }) => {
    const [isLoading, setisLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithPopup(Auth, new GoogleAuthProvider())
            swal('Success', 'Login Success', 'success')
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(Auth, user.email, user.password)
            swal('Success', 'Login Success', 'success')
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
        } catch (err) {
            switch (err.code) {
                case "auth/invalid-email":
                    return swal('Error', "Invalid Email", "error")
                case "auth/user-not-found":
                    return swal('Error', "User Not Found", "error")
                case "auth/wrong-password":
                    return swal('Error', "Wrong Password", "error")
                case "auth/network-request-failed":
                    return swal('Error', "Network Error", "error")
                case "auth/too-many-requests":
                    return swal('Error', "Too Many Requests", "error")
                case "auth/user-disabled":
                    return swal('Error', "User Disabled", "error")
                case "auth/operation-not-allowed":
                    return swal('Error', "Operation Not Allowed", "error")
            }
        }
    }


    const handleRegisterFormSubmit = async (e) => {
        try {
            e.preventDefault()
            if (user.password !== user.confirmPassword) return swal('Error', 'Password and Confirm Password must be same', 'error')
            await createUserWithEmailAndPassword((Auth), user.email, user.password)
            setTimeout(() => {
                window.location.href = '/login'
            }, 2000)
        } catch (err) {
            console.log(err)
            switch (err.code) {
                case "auth/invalid-email":
                    return swal('Error', "Invalid Email", "error")
                case "auth/weak-password":
                    return swal('Error', "Password should be at least 6 characters", "error")
                case "auth/email-already-in-use":
                    return swal('Error', "Email Already in use", "error")
                case "auth/network-request-failed":
                    return swal('Error', "Network Error", "error")
            }

        }
    }


    const signInAnonymous = async (e) => {
        e.preventDefault();
        try {
            await signInAnonymously(Auth)
            swal('Success', 'Login Success', 'success')
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await Auth.signOut()
            window.location.href = '/login'
        } catch (err) {
            switch (err.code) {
                case "auth/network-request-failed":
                    return swal('Error', "Network Error", "error")
            }
        }
    }




    useEffect(() => {
        onAuthStateChanged(Auth, (user) => {
            setisLoading(true)

            if (user) {
                setIsLogin(true)
                setUser(user)
                localStorage.setItem('user', JSON.stringify(user))
                console.log('user sudah login')

            } else {
                setIsLogin(false)
                localStorage.removeItem('user')
                console.log('user blm login')
            }
            setisLoading(false)

        })
    }, [])

    return (
        <AuthContext.Provider value={{ handleGoogleLogin, signInAnonymous, setisLoading, isLoading, handleLogout, setUser, user, handleLoginFormSubmit, handleRegisterFormSubmit, isLogin }}>
            {children}
        </AuthContext.Provider>
    )
}