const prompt = require('prompt-sync')({sigint: true});

console.log('Would you like to go [up], [down], [left], or [right]? ');

let x = 0
let y = 0

while (true){

    const action = prompt('');

        if (action === 'up') {
            y = y + 1;
            console.log('You have chosen to go up.');
            console.log('Your coordinates are', x, ',', y);
        }

        else if (action === 'down') {
            y = y - 1;
            console.log('You have chosen to go down.');
            console.log('Your coordinates are', x, ',', y);
        }

        else if (action === 'left') {
            x = x - 1;
            console.log('You have chosen to go left.');
            console.log('Your coordinates are', x, ',', y);
        }

        else if (action === 'right') {
            x = x + 1;
            console.log('You have chosen to go right.');
            console.log('Your coordinates are', x, ',', y);
        }


    if (x === 1 && y === 1){
        console.log('Dolphins are unable to smell');
    }else if (x === 2 && y === 2) {
        console.log('Ancient Romans thought strawberries would cure bad breath and chronic fainting. Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 3 && y === 3) {
        console.log('Ripening bananas glow an intense blue under black light. Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 4 && y === 4) {
        console.log('A day on Venus lasts longer than a year on Venus.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 5 && y === 5) {
        console.log('Miami installed the first ATM for inline skaters.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -1 && y === 1) {
        console.log('Giraffes have the same number of vertebrae as hunams: 7.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -2 && y === 2) {
        console.log('Each year, the Moon moves away from Earth by about four centimeters.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -4 && y === 4) {
        console.log('OMG was added to dictionaries in 2011, but its first known use was in 1917.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -5 && y === 5) {
        console.log('Rubber bands last longer when refigerated.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -1 && y === -1) {
        console.log('There are more fake than real flamingos.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -2 && y === 2) {
        console.log('Hawaiian pizza was actually created in Canada.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -3 && y === 3) {
        console.log('One is the only number with letters in reverse alphabetical order.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -4 && y === 4) {
        console.log('The national animal of Scotland is the Unicorn.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === -5 && y === 5) {
        console.log('You are always looking at your nose, your brain just chosses to ignore it.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 1 && y === -1) {
        console.log('Toe wrestling is a competitive sport.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 2 && y === -2) {
        console.log('Elephants are afraid of bees.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 3 && y === -3) {
        console.log('An avocado is actually a large berry.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 4 && y === -4) {
        console.log('Tennis was originally played with bare hands.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 5 && y === -5) {
        console.log('The only thing that can scratch a diamond is a diamond.  Would you like to go [up], [down], [left], or [right]?');
    }else if (x === 3 && y === -3) {
        console.log('Dogs can make about 10 sounds, while cats make about 100.  Hope you enjoyed all the snapple facts, now heres another fact, you win!.......what do you win you say......uhhhhhh.');
    }    
}