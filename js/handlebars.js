const context = {
    destinations: [
        {
            image: './reise-fotos/gallery/hanoi.jpg', 
            alt: 'Rooftop-Aussicht auf Hanoi, Vietnam', 
            overlay: 'Hanoi, Vietnam', 
            caption: 'Lässt sich bereits vom Rooftop erahnen. (Verkehrs-)Chaos pur und auch deshalb absolut sehenswert. Irgendwie funktioniert\'s auch so in Hanoi.'
        },
        {
            image: './reise-fotos/gallery/shirakawa-go.jpg', 
            alt: 'Bauernhaus in Shirakawa-go, Japan', 
            overlay: 'Shirakawa-go, Japan',
            caption: 'Auf einer geführten Japan-Rundreise in diesem historischen Dorf gelandet. Shirakawa-go wurde von der UNESCO zum Weltkulturerbe erklärt.'
        }, 
        {
            image: './reise-fotos/gallery/brokenbay.jpg', 
            alt: 'Drohnen-Aufnahme der Broken Bay auf Nusa Penida, Indonesien', 
            overlay: 'Broken Bay, Nusa Penida, Indonesien',
            caption: 'Die Broken Bay auf Nusa Penida aus der Vogel-, eh, Drohnen-Perspektive. Neben der Kelingking-Beach ein Must-see auf dieser Insel vor Bali.'
        },
        {
            image: './reise-fotos/gallery/tanahlot.jpg', 
            alt: 'Tempel von Tanah Lot in Bali, Indonesien', 
            overlay: 'Tanah Lot, Bali, Indonesien', 
            caption: 'Im Sonnenuntergang gilt «no-filter-needed». Umwerfend schön und während der Flut von Wasser umgeben: der Tempel von Tanah Lot auf Bali.'
        },
        {
            image: './reise-fotos/gallery/roemer.jpg', 
            alt: 'Römer in Frankfurt, Deutschland', 
            overlay: 'Römer, Frankfurt, Deutschland',
            caption: 'Der Römer ist das Rathaus von Frankfurt. Foto, und eine Sehenswürdigkeit weniger auf der Liste ;-)'
        },
        {
            image: './reise-fotos/gallery/dallas.jpg', 
            alt: 'Dallas-Skyline, USA', 
            overlay: 'Dallas, USA', 
            caption: 'Vom Reunion Tower die tolle Aussicht auf die Skyline von Dallas geniessen.'
        },
        {
            image: './reise-fotos/gallery/matterhorn.jpg', 
            alt: 'Matternhorn in Zermatt, Schweiz', 
            overlay: 'Matterhorn, Zermatt, Schweiz', 
            caption: 'Hat tatsächlich 30 Jahre gedauert, bis ich das Matterhorn zum ersten Mal gesehen habe. Foto-Spot liegt auf dem Wanderweg zwischen Zermatt und dem Gornergrat.'
        },
        {
            image: './reise-fotos/gallery/bangkok.jpg', 
            alt: 'Rooftop-Aussicht auf Bangkok by Night, Thailand', 
            overlay: 'Bangkok, Thailand', 
            caption: 'Bangkok by Night. Die Nacht zum Tag machen. Nuff said.'
        },
        {
            image: './reise-fotos/gallery/paris.jpg', 
            alt: 'Arc de Triomphe de l’Étoile in Paris, Frankreich', 
            overlay: 'Arc de Triomphe de l’Étoile, Paris, Frankreich', 
            caption: 'Der Triumphbogen hat offenbar eine Aussichtsplattform. Dort könnte man also hoch.'
        },
        {
            image: './reise-fotos/gallery/saintpetersburg.jpg', 
            alt: 'Auferstehungskirche in Sankt Petersburg, Russland', 
            overlay: 'Auferstehungskirche, Sankt Petersburg, Russland', 
            caption: 'Nicht die Basilius-Kathedrale in Moskau, aber definitiv Russland. In Sankt Petersburg findet man die Auferstehungskirche. Charakteristisch auch hier: die Zwiebeltürmchen.'

        },
        {
            image: './reise-fotos/gallery/budapest.jpg', 
            alt: 'Kettenbrücke in Budapest, Ungarn', 
            overlay: 'Kettenbrücke, Budapest, Ungarn', 
            caption: 'Die Kettenbrücke in Budapest verbindet die beiden Stadtseiten Buda und Pest. Buda ist die hügelige Stadtseite rechts der Donau (auf dem Foto zu sehen) und Pest die flache, linke.'
        },
        {
            image: './reise-fotos/gallery/helsinki.jpg', 
            alt: 'Moderne Architektur in Helsinki, Finnland', 
            overlay: 'Helsinki, Finnland', 
            caption: 'Modernes skandinavisches Design – aussen und wahrscheinlich auch innen.'
        },
        {
            image: './reise-fotos/gallery/sanfrancisco.jpg', 
            alt: 'Golden Gate Gridge in San Francisco, USA', 
            overlay: 'Golden Gate Bridge, San Francisco, USA', 
            caption: 'Die Golden Gate Bridge ist immer noch auf Platz 14 der längsten Hängebrücken der Welt.'
        },
        {
            image: './reise-fotos/gallery/yosemite.jpg', 
            alt: 'Blick ins Yosemite Valley, USA', 
            overlay: 'Yosemite Valley, Kalifornien, USA', 
            caption: 'Wohl noch bekannter geworden durch das Apple Desktop-Betriebssystem OS X 10.10. Der «Yosemite»-Nationalpark in Kalifornien.'
        },
        {
            image: './reise-fotos/gallery/chicago.jpg', 
            alt: 'Cloud Gate in Chicago, USA', 
            overlay: 'Cloud Gate, Chicago, USA', 
            caption: 'Im Millennium Park in Chicago: Das Cloud Gate aka «The Bean».'
        },
        {
            image: './reise-fotos/gallery/cairo.jpg', 
            alt: 'Die Grosse Sphinx von Gizeh, Ägypten', 
            overlay: 'Die Grosse Sphinx von Gizeh, Kairo, Ägypten', 
            caption: 'Sphinx und Chephren-Pyramide im Hintergrund. Zweck der Sphinx ist bis heute ungeklärt.'
        }
    ]
};

const source = document.getElementById('handlebars').innerHTML;

const template = Handlebars.compile(source);

const compiledHtml = template(context);

const fill = document.getElementById('wrapper');

fill.innerHTML = compiledHtml;