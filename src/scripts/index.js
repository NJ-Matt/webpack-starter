import '../styles/index.scss';

let intervalId = setInterval( function() {
    console.log('1 second passed...');  
}, 1000);

clearInterval(intervalId);

// console.log('Breakpoint');
// console.log(window.innerWidth);
// console.log(window.innerHeight);