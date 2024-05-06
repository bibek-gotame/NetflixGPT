export const checkValidate = (email, password,name) => {
    // const isNameValid = /([a-zA-Z_\s]+)/.test(name)
    const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) // if validates return true if not return false
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // if(!isNameValid) return 'Name is not Valid'
    if(!isEmailValid) return 'Email is not Valid'
    if(!isPasswordValid) return 'Password is not valid' // This gives and error message
    // return isEmailValid

    return null; // if validates return a null instead of error message
}
