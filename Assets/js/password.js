
(() => {
const input = document.getElementById('password')
const submit = document.getElementById('password-submit')

if (!input) { 
    return console.error('Password input not found.') 
}

if (!submit) { 
    return console.error('Submit button not found.') 
}
    
const handleSubmit = () => {
    const password = input.value

    if (password === 'userconnection') {
        console.log('Correct password.')
        const target = new URL(window.location.href).searchParams.get('returnTo')

        if (!target) {
            return console.error('Return to target missing')
        }

        if (target === 'wi') {
            window.location.href = 'waymo-interruptions.html'
        } else if (target === 'wrm') {
            window.location.href = 'waymo-rider-metrics.html'
        } else {
            return console.error('Unsupported target')
        }


    } else {
        console.error('Incorrect password.')
        const invalidMessage = document.getElementById('invalid-msg')

        if (invalidMessage) {
            invalidMessage.classList.remove('hidden')
        } else {
            console.error('Invalid message text not found')
        }
    }
}

    
// Submits on Enter
input.addEventListener('keypress', e => {
    if (e.code === 'Enter') {
        handleSubmit()
    }
})   

    // Submits on button click
submit.addEventListener('click', () => handleSubmit())
    
})()