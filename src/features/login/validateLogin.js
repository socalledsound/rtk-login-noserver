export default function validateLogin(values) {

    let errors = {};

    //email
    if(!values.email){
        errors.email = 'email required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'invalid email address'
    }
    //password
    if(!values.password){
        errors.password = 'password required'
    } else if(values.password.length < 6){
        errors.password = 'password must be at least six characters';
    }
    console.log(errors)
    return errors

}