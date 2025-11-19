'use strict';

const userName = prompt('Enter your name', '');

if (userName) {
    const showGreeting = confirm(`Hi ${userName}!, Do you want to see a greeting?`);

    if (showGreeting) {
        alert(`Hello, ${userName}! How are you?`);
    }
}add