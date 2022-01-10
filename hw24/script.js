function greenTree(height) {
    for ( let i = 0; i < height ; i++ ) {
        let star = '/';
        let space = ' ';

        for ( let j = 1; j <= i; j++ ) {
            star = star + '/';            
        }
           
        let spacesBefore = space.repeat(height-i-1);
        star = spacesBefore + star;
        console.log(star);
    }
}

let levels = prompt('Число: ');

greenTree(levels);