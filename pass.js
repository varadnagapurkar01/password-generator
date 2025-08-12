document.addEventListener('DOMContentLoaded', (event) => {
    const passwordOutput = document.getElementById('int');
    const copyButton = document.getElementById('copy_button');
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const generateButton = document.getElementById('create_button');
    const lowercaseCheckbox = document.getElementById('lowercasecb');
    const uppercaseCheckbox = document.getElementById('uppercasecb');
    const digitsCheckbox = document.getElementById('digitscb');
    const specialsCheckbox = document.getElementById('specialscb');

    lengthSlider.addEventListener('input', (e) => {
        lengthValue.textContent = e.target.value;
    });

    copyButton.addEventListener('click', () => {
        passwordOutput.select();
        document.execCommand('copy');
    });

    generateButton.addEventListener('click', () => {
        const length = lengthSlider.value;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeUppercase = uppercaseCheckbox.checked;
        const includeDigits = digitsCheckbox.checked;
        const includeSpecials = specialsCheckbox.checked;

        passwordOutput.value = generatePassword(length, includeLowercase, includeUppercase, includeDigits, includeSpecials);
    });

    function generatePassword(length, includeLowercase, includeUppercase, includeDigits, includeSpecials) {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const digits = '0123456789';
        const specials = '!@#$%^&*()_+[]{}|;:,.<>?';
        let characters = '';
        if (includeLowercase) characters += lowercase;
        if (includeUppercase) characters += uppercase;
        if (includeDigits) characters += digits;
        if (includeSpecials) characters += specials;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }
});
