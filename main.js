const player1 = {
    name: 'KITANA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['palka'],
    attack: function(){
        console.log(this.name + ' ' + 'Fight...')
    }
    };
    
    const player2 = {
        name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['palka'],
    attack: function(){
        console.log(this.name + ' ' + 'Fight...')
    }
    };
    
    function createPlayer(){
        const $player1 = document.createElement('div');
        $player1.classList.add('player1');

        const $player2 = document.createElement('div');
        $player2.classList.add('player2')
        
        const $progressbar1 = document.createElement('div');
        $progressbar1.classList.add('progressbar');

        const $progressbar2 = document.createElement('div');
        $progressbar2.classList.add('progressbar');

        const $life1 = document.createElement('div');
        $life1.classList.add('life');
        $life1.style.width = '100%';

        const $life2 = document.createElement('div');
        $life2.classList.add('life');
        $life2.style.width = '100%';

        const $name1 = document.createElement('div');
        $name1.classList.add('name');
        $name1.innerText = player1.name;

        const $name2 = document.createElement('div');
        $name2.classList.add('name');
        $name2.innerText = player2.name;

        const $character1 = document.createElement('div');
        $character1.classList.add('character')

        const $character2 = document.createElement('div');
        $character2.classList.add('character')

        const $img1 = document.createElement('img');
        $img1.src = player1.img;

        const $img2 = document.createElement('img');
        $img2.src = player2.img;
        
        const $arena = document.querySelector('.arenas');
        $arena.appendChild($player1);
        $arena.appendChild($player2);

        const $p1 = document.querySelector('.player1');
        $p1.appendChild($progressbar1);
        $p1.appendChild($character1);

        const $p2 = document.querySelector('.player2');
        $p2.appendChild($progressbar2);
        $p2.appendChild($character2);

        const $progress1 = document.querySelector('.player1 .progressbar');
        $progress1.appendChild($life1);
        $progress1.appendChild($name1);

        const $progress2 = document.querySelector('.player2 .progressbar');
        $progress2.appendChild($life2);
        $progress2.appendChild($name2);

        const $characterr1 = document.querySelector('.player1 .character');
        $characterr1.appendChild($img1);

        const $characterr2 = document.querySelector('.player2 .character');
        $characterr2.appendChild($img2);
    };

    createPlayer('player1', 'KITANA', 50); 
    createPlayer('player2', 'SCORPION', 80); 