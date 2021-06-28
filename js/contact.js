const contactForm = document.getElementById('contact-form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const form = document.forms['form-validate']['fullname', 'email', 'phone', 'subject', 'message'].value;

    if(form == '') {
        Swal.fire(
            'All fields are required!',
            'Please fill-out the form',
            'error'
        )
        
        return false;
    } else {
        // Fire the sending text
        submitBtn.innerHTML = "Sending..."

        // Get the form data in an array and pass to email method
        const formData = {
            fullname: fullname.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            message: message.value
        }

        // Get the data and transport to email
        Email.send({
            Host: "smtp.gmail.com",
            Username : "information.cloud365@gmail.com",
            Password : "gqpptqkatjgljmxb",
            Port: 587,
            Tls: true,
            To : 'info@millennial-resorts.com',
            Cc : ['mpcaneda.gca@gmail.com', 'solutions@gocloud.asia'],
            From : email.value,
            Subject : subject.value,
            Body : message.value,
        }).then(function(){
            Swal.fire(
                'Email has been sent!',
                'Thank you for contacting us',
                'success'
            )

            submitBtn.innerHTML = "Send Message"
        });

        // Reset the email after sending
        contactForm.reset();
        
        return true;
    }
});