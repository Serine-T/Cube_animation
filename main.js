function animationFunc(layerName, animationName1, animationName2) {
    const cubes = document.querySelector(`.${layerName}`).children;

    for (let i = 0; i < cubes.length; i++) {
        i % 2 === 0 ? cubes[i].style.animation = `${animationName1} 5s ease-in-out infinite alternate` : cubes[i].style.animation = `${animationName2} 5s ease-in-out infinite alternate`;
    }
}

animationFunc('first', 'cube_anim_1', 'cube_anim_2');
animationFunc('second', 'cube_anim_3', 'cube_anim_4');
animationFunc('third', 'cube_anim_5', 'cube_anim_6');