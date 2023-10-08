
//logic for checking if the fields on the form are filled out and if the 
//email is valid. Creates error message for user if field is incorrect
export default function Validation(formData) {
    const errors = {};

    const emailVal = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    

    if(formData.name.trim() === "") {
        errors.name = "Name is required!";
    }

    if(formData.email.trim() === "") {
        errors.email = "Email is required!";
    }

    else if(!emailVal.test(formData.email)) {
        errors.email = "Email is invalid" 
    } 

    if(formData.message.trim() === "") {
        errors.message = "Message is required!";
    }

    return errors;
}