const root = document.getElementById('root');
const container = document.getElementById('container');
const  select = document.getElementById('select');

      const jjk =[
        {
            name: 'yuji',
            age: 15,
            power: 'shrine',
            nickname: 'Strongest of tomorrows',
            grade: '1'
        },
        {
            name: 'megumi',
            age: 15,
            power: '10 shadows',
            nickname: 'Potential man',
            grade: 'semi-1'
        },
        {
            name: 'nobara',
            age: 16,
            power: 'hammer',
            nickname: 'Blood Queen',
            grade: '3'
        },
        {
            name: 'gojo',
            age: 28,
            power: 'infinity',
            nickname: 'Strongest Jujutsu Sorcerer',
            grade: 'special grade'
        },
        {
            name: 'maki',
            age: 16,
            power: 'heavenly restriction',
            nickname: 'next toji',
            grade: '1'
        },
        {
            name: 'panda',
            age: 'unknown',
            power: 'unknown',
            nickname: 'Cursed corpse',
            grade: '2'
        },
        {
            name: 'sukuna',
            age: '1000s',
            power: 'shrine',
            nickname: 'King of Curses',
            grade: 'special grade'
        },
        {
            name: 'mahoraga',
            age: 'unknown',
            power: 'rct',
            nickname: 'shikigami',
            grade: 'special grade'
        },
        {
            name: 'toji',
            age: 31,
            power: 'heavenly restriction',
            nickname: 'Sorcerer Killer',
            grade: 'special grade'
        },
        {
            name: 'nanami',
            age: 27,
            power: 'ratio technique',
            nickname: 'Duty-bound Sorcerer',
            grade: '1'
        },
        {
            name: 'yuta',
            age: 17,
            power: 'Copy',
            nickname: 'TheCursed Child',
            grade: 'special grade'
        },
        {
            name: 'kashimo',
            age: '400s',
            power: 'Mythical East Amber',
            nickname: 'Strongest of the Edo peroid',
            grade: 'special grade'
        },
        {
            name: 'kirira',
            age: '19',
            power: 'stars',
            nickname: 'hikari girlfriend',
            grade: '2'
        },
        {
            name: 'mechamaru',
            age: '18',
            power: 'doll',
            nickname: 'mechamaru',
            grade: 'semi-2'
        },
        {
            name: 'miwa',
            age: '17',
            power: 'new shadow style',
            nickname: "mechamaru's girl",
            grade: '4'
        },
        

      ];
      const gradeOrder = ['special grade', '1', 'semi-1', '2', 'semi-2', '3', '4'];
      
    

const renderCharacters = (characters) => {
    container.innerHTML = '';
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('jjk-info');
        characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>Age: ${character.age}</p>
            <p>Power: ${character.power}</p>
            <p>Nickname: ${character.nickname}</p>
            <p>Grade: ${character.grade}</p>
        `;
        container.appendChild(characterElement);
        
    });
}
renderCharacters(jjk);
const nobara = document.getElementById('nobara');
const nobara_audio = new Audio('audio/you-drop-even-one-of-those-bags-and-ill-kill-you-101soundboards.mp3');
     nobara.addEventListener('mouseenter', () => {
        nobara_audio.play();
     });
     nobara.addEventListener('mouseleave', () => {
        nobara_audio.pause();
        nobara_audio.currentTime = 0;
     });
const gojo = document.getElementById('gojo');
const gojo_audio = new Audio('audio/Voicy_gojo saturo .mp3');
     gojo.addEventListener('mouseenter', () => {
        gojo_audio.play();
     });
     gojo.addEventListener('mouseleave', () => {
        gojo_audio.pause();
        gojo_audio.currentTime = 0;
     });
     const yuta = document.getElementById('yuta');
     const yuta_audio = new Audio('audio/it’s-pure-love-(yuta-and-rika-vs-geto)-made-with-Voicemod.mp3');
     yuta.addEventListener('mouseenter', () => {
        yuta_audio.play();
     });
     yuta.addEventListener('mouseleave', () => {
        yuta_audio.pause();
        yuta_audio.currentTime = 0;
     });

      select.addEventListener('change', () => {
        const selectedValue = select.value;
        if(selectedValue === 'all') {
           
          renderCharacters(jjk);
        }else if(selectedValue === 'grade') {
          const sortedCharacters = [...jjk].sort((a, b) => gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade));
          renderCharacters(sortedCharacters);
        } else if(selectedValue === 'special grade') {
          const filteredCharacters = jjk.filter(character => character.grade === 'special grade');
          renderCharacters(filteredCharacters);
        }
        
      })
     