let screen = document.getElementById('screen');
        let buttons = document.querySelectorAll('button');
        let screenValue = '';

        for (let item of buttons) {
            item.addEventListener('click', (e) => {
                let buttonText = e.target.innerText;

                if (buttonText === 'C') {
                    screenValue = '';
                    screen.value = screenValue;
                } else if (buttonText === '=') {
                    try {
                        screen.value = eval(screenValue); // Calculate the result
                    } catch (error) {
                        screen.value = 'Error'; // Display error for invalid expressions
                    }
                    screenValue = ''; // Reset screenValue after calculation
                } else {
                    screenValue += buttonText; // Append the button text to screenValue
                    screen.value = screenValue; // Update the screen
                }
            });
        }