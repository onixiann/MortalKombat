const player1 = {
    name: 'KITANA',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['palka'],
    attack: function(){
        console.log(this.name + ' ' + 'Fight...')
    }
    };
    
const player2 = {
    name: 'SCORPION',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['palka'],
    attack: function(){
        console.log(this.name + ' ' + 'Fight...')
    }
    };

    
    
    function createPlayer(playerClass, playerName, hp, img){
        const $player = document.createElement('div');
        $player.classList.add(playerClass);
        
        const $progressbar = document.createElement('div');
        $progressbar.classList.add('progressbar');

        const $life = document.createElement('div');
        $life.classList.add('life');
        $life.style.width = hp+'%';

        const $name = document.createElement('div');
        $name.classList.add('name');
        $name.innerText = playerName;

        const $character = document.createElement('div');
        $character.classList.add('character')

        const $img = document.createElement('img');
        $img.src = img;
        
        const $arena = document.querySelector('.arenas');
        $arena.appendChild($player);

        const $p = document.querySelector('.'+playerClass);
        $p.appendChild($progressbar);
        $p.appendChild($character);

        $progressbar.appendChild($name);
        $progressbar.appendChild($life);

        $character.appendChild($img);

    };

    createPlayer('player1', player1.name, player1.hp, player1.img); 
    createPlayer('player2', player2.name, player2.hp, player2.img); 