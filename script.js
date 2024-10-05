const root = document.getElementById('root');
const container = document.getElementById('container');
      const jjk =[
        {
            name: 'yuji',
            age: 15,
            power: 'shrine',
            nickname: 'Strongest of tomorrows'
        },
        {
            name: 'megumi',
            age: 15,
            power: '10 shadows',
            nickname: 'Potential man'
        },
        {
            name: 'nobara',
            age: 16,
            power: 'hammer',
            nickname: 'Blood Queen'
        },
        {
            name: 'gojo',
            age: 28,
            power: 'infinity',
            nickname: 'Strongest Jujutsu Sorcerer'
        },
        {
            name: 'maki',
            age: 16,
            power: 'heavenly restriction',
            nickname: 'next toji'
        },
        {
            name: 'panda',
            age: 'unknown',
            power: 'unknown',
            nickname: 'Cursed corpse'
        },
        {
            name: 'sukuna',
            age: '1000s',
            power: 'shrine',
            nickname: 'King of Curses'
        },
        {
            name: 'mahoraga',
            age: 'unknown',
            power: 'rct',
            nickname: 'shikigami'
        },
        {
            name: 'toji',
            age: 31,
            power: 'heavenly restriction',
            nickname: 'Sorcerer Killer'
        },
        {
            name: 'nanami',
            age: 27,
            power: 'ratio technique',
            nickname: 'Duty-bound Sorcerer'
        },
        {
            name: 'yuta',
            age: 17,
            power: 'Copy',
            nickname: 'TheCursed Child'
        },
        {
            name: 'kashimo',
            age: '400s',
            power: 'Mythical East Amber',
            nickname: 'Strongest of the Edo peroid'
        }

      ];
      jjk.forEach((item) => {
        const div = document.createElement('div');
        div.id = `${item.name}`;
        div.classList.add('jjk-info');
        div.innerHTML = `
          <h2>Name:  ${item.name}</h2>
          <p>Age: ${item.age}</p>
          <p>Cursed Technique: ${item.power}</p>
        `;
        container.appendChild(div);
      });
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
