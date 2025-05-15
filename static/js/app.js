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
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0000.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0050.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0100.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0150.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0200.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0250.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0300.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0350.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0400.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0450.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0500.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0550.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0600.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0650.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0700.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img..simulace', {
                        src: 'static/frame_0750.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                       
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0800.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0850.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0900.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0950.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                m("div"),
                    App.data.number !== null
                    ?  m('img.simulace', {
                        src: 'static/frame_0999.png', // Replace with your image path
                        alt: 'Popis obrázku', // Description of the image
                        
                    })
                    : null,
                    App.data.number = null
                    
                // Adding an image
               
            ]);
        }
    };
        
    m.mount(document.getElementById('app'), App);
});
;