import { useState, useEffect }from 'react'


export const useForm = (initialState = {}, login, validateLogin) => {
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors ] = useState({})
    const [ isSubmitting, setIsSubmitting ] = useState(false)

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            login()
        }
    }, [errors, isSubmitting, login])


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateLogin(formData))
        setIsSubmitting(true)
        
        // onSubmit?.(formData);
        
    }
    return { formData, errors, handleInputChange, handleSubmit }    
}