document.addEventListener('DOMContentLoaded', () => {
    const App = {
        data: {
            number: null
        },
        generateNumber: () => {
            m.request({
                method: 'GET',
                url: '/generate_number'
            }).then(result => {
                App.data.number = result.number;
                m.redraw();
            });
        },
        view: () => {
            return m('div', [
                m('h1', 'Generátor Náhodných Čísel'),
                m('button', { onclick: App.generateNumber }, 'Generovat číslo'),
                App.data.number !== null
                    ?  m('img', {
                        src: 'frame_0050.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        style: { width: '300px', height: 'auto' } // Optional styling
                    })
                    : null,
                // Adding an image
               
            ]);
        }
    };
        
    m.mount(document.getElementById('app'), App);
});
;