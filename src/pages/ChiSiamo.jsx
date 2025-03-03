import React from 'react'

const ChiSiamo = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center text-gray-800 block opacity-100">Chi Siamo</h1>

            <p className="text-center text-gray-600 mt-2">La piattaforma perfetta per trovare il tuo prossimo alloggio</p>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">La nostra storia</h2>
                <p className="mt-2 text-gray-700">
                    Siamo un team appassionato di tecnologia e immobiliare, con l'obiettivo di semplificare la ricerca di appartamenti per affitti brevi e lunghi.
                    Il nostro sito permette agli utenti di visualizzare immobili disponibili, confrontare prezzi e leggere recensioni, tutto in un’unica piattaforma intuitiva.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">La nostra mission</h2>
                <p className="mt-2 text-gray-700">
                    Vogliamo rendere la ricerca di una casa o un alloggio temporaneo un processo semplice, sicuro e trasparente. Crediamo nella qualità, nella fiducia e nella facilità di utilizzo.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Come funziona?</h2>
                <ul className="mt-2 text-gray-700 list-disc pl-6">
                    <li>Cerca tra centinaia di appartamenti disponibili.</li>
                    <li>Filtra per prezzo, posizione e recensioni.</li>
                    <li>Contatta direttamente i proprietari per maggiori informazioni.</li>
                    <li>Lascia una recensione dopo il soggiorno.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Dove ci troviamo?</h2>
                <p className="mt-2 text-gray-700 flex items-center">
                    📍 Via Fittizia 123, 00100 Roma, Italia
                </p>
                <div className="mt-4">
                    <iframe
                        title="Mappa"
                        className="w-full h-64 rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.6371224030324!2d12.492231815700698!3d41.89021017922192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f605e8c5b5b23%3A0x7dd8dc7d97447b91!2sColosseo!5e0!3m2!1sit!2sit!4v1700000000000"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p className="mt-2">
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=41.890210,12.492231"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Ottieni indicazioni
                    </a>
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800">Contattaci</h2>
                <p className="mt-2 text-gray-700">
                    Per qualsiasi informazione, puoi scriverci a:
                    <br />
                    <a href="mailto:info@affittiboolbnb.com" className="text-blue-500">info@affittiboolbnb.com</a>
                    <br />oppure seguirci sui nostri canali social:
                </p>

                <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-blue-600">Facebook</a>
                    <a href="#" className="text-blue-400">Twitter</a>
                    <a href="#" className="text-pink-600">Instagram</a>
                </div>
            </section>
        </div>
    )
}

export default ChiSiamo