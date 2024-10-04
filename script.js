const root = document.getElementById('root');

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
      const details= jjk.forEach((item) => {
        const div = document.createElement('div');
        div.id = `jjk-${item.name}`;
        div.classList.add('jjk-info');
        div.innerHTML = `
          <h2>Name:  ${item.name}</h2>
          <p>Age: ${item.age}</p>
          <p>Cursed Technique: ${item.power}</p>
        `;
        root.appendChild(div);
      });
        
      console.log('hello');