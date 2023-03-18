score = 0;
state = true;
state1 = true;
life = true;

bgm = new Audio('./music/bgm.mp3');
gameover = new Audio('./music/game-over.mp3');
bubbles = new Audio('./music/bubbles.mp3');

setTimeout(() => {
    bgm.play();
}, 1000);

document.onkeydown = function(e) {
    console.log("Key code pressed: ",e.keyCode);

    if(e.keyCode == 37){
        diver = document.querySelector('.diver');
        diverX = parseInt(window.getComputedStyle(diver, null).getPropertyValue('left'));
        diver.style.left = diverX - 100 + "px";
    }
    if(e.keyCode == 39){
        diver = document.querySelector('.diver');
        diverX = parseInt(window.getComputedStyle(diver, null).getPropertyValue('left'));
        diver.style.left = diverX + 100 + "px";
    }
    if(e.keyCode == 38){
        diver = document.querySelector('.diver');
        diverX = parseInt(window.getComputedStyle(diver, null).getPropertyValue('bottom'));
        diver.style.bottom = diverX + 100 + "px";
    }
    if(e.keyCode == 40){
        diver = document.querySelector('.diver');
        diverX = parseInt(window.getComputedStyle(diver, null).getPropertyValue('bottom'));
        diver.style.bottom = diverX - 100 + "px";
    }
}

setInterval(() => {

    diver = document.querySelector('.diver');
    f1 = document.querySelector('.f1');
    f2 = document.querySelector('.f2');
    f3 = document.querySelector('.f3');
    f4 = document.querySelector('.f4');
    f5 = document.querySelector('.f5');
    shark = document.querySelector('.shark');

    dx = parseInt(window.getComputedStyle(diver, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(diver, null).getPropertyValue('top'));

    sx = parseInt(window.getComputedStyle(shark, null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(shark, null).getPropertyValue('top'));

    f1x = parseInt(window.getComputedStyle(f1, null).getPropertyValue('left'));
    f1y = parseInt(window.getComputedStyle(f1, null).getPropertyValue('top'));

    f2x = parseInt(window.getComputedStyle(f2, null).getPropertyValue('left'));
    f2y = parseInt(window.getComputedStyle(f2, null).getPropertyValue('top'));

    f3x = parseInt(window.getComputedStyle(f3, null).getPropertyValue('left'));
    f3y = parseInt(window.getComputedStyle(f3, null).getPropertyValue('top'));

    f4x = parseInt(window.getComputedStyle(f4, null).getPropertyValue('left'));
    f4y = parseInt(window.getComputedStyle(f4, null).getPropertyValue('top'));

    f5x = parseInt(window.getComputedStyle(f5, null).getPropertyValue('left'));
    f5y = parseInt(window.getComputedStyle(f5, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - sx);
    offsetY = Math.abs(dy - sy);

    offsetf1X = Math.abs(dx - f1x);
    offsetf1Y = Math.abs(dy - f1y);

    offsetf2X = Math.abs(dx - f2x);
    offsetf2Y = Math.abs(dy - f2y);

    offsetf3X = Math.abs(dx - f3x);
    offsetf3Y = Math.abs(dy - f3y);

    offsetf4X = Math.abs(dx - f4x);
    offsetf4Y = Math.abs(dy - f4y);

    offsetf5X = Math.abs(dx - f5x);
    offsetf5Y = Math.abs(dy - f5y);

    if((offsetX < 52 && offsetY < 52) || score < 0){
        life = false;
        heading.innerHTML = "You died! Reload to try again.";
        bgm.pause();
        gameover.play();
        setTimeout(() => {
            gameover.pause();
        }, 7000);
        shark.classList.remove('animate-shark');
        f1.classList.remove('animate-fish-1');
        f2.classList.remove('animate-fish-2');
        f3.classList.remove('animate-fish-3');
        f4.classList.remove('animate-fish-4');
        f5.classList.remove('animate-fish-5');
    }

    else if((offsetf1X < 52 && offsetf1Y < 52) || (offsetf2X < 52 && offsetf2Y < 52) || (offsetf3X < 52 && offsetf3Y < 52) || (offsetf4X < 52 && offsetf4Y < 52) || (offsetf5X < 52 && offsetf5Y < 52)){

        bubbles.play();
        setTimeout(() => {
            bubbles.pause();
        }, 1000);

        if(state1 && life){
            state1 = false;
            score -= 1;
            updateScore(score);
            setTimeout(() => {
                state1 = true; 
            }, 3000);
        }
        
    }

    else if(state && life){
        state = false;
        score += 1;
        updateScore(score);
        setTimeout(() => {
            state = true;
        }, 10000);
    }    
    
},10);

function updateScore(score){
    myscore.innerHTML = "Score: " + score;
}
