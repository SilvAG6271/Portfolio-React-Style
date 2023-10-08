import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
        sendCopy: true,

    });
     

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       

    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Submitted succesfully');
        } else {
            console.error('submission failed');
        }
    } catch (error) {
        console.error('Error occurred');
    }
}
    return (
        <form className='needs-validation' noValidate>
       <h1>Contact Form</h1>
        <div className="form-outline mb-4">
          <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleInput} required/>
          <label className="form-label" htmlFor="name">Name</label>
        </div>
      
        
        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleInput} required/>
          <label className="form-label" htmlFor="email">Email address</label>
        </div>
      
       
        <div className="form-outline mb-4">
          <textarea className="form-control" id="message" rows="4" name="message" value={formData.message} onChange={handleInput} required></textarea>
          <label className="form-label" htmlFor="message">Message</label>
        </div>
      
        
        <div className="form-check d-flex justify-content-center mb-4">
          <input className="form-check-input me-2" type="checkbox" value="" id="message-copy" name="sendCopy" checked={formData.sendCopy} onChange={handleInput}  />
          <label className="form-check-label" htmlFor="message-copy">
            Send me a copy of this message
          </label>
        </div>
      
        
        <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
      </form>
    )
}


