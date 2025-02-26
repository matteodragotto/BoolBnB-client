

const Assistenza = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <p className="text-lg text-gray-700 mb-4">
                    Se hai bisogno di supporto o hai domande sul funzionamento del nostro sito, sei nel posto giusto! Qui troverai tutte le informazioni necessarie per utilizzare al meglio tutte le funzionalità offerte da <strong>Bool B&B</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Come utilizzare il nostro sito:</h2>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 mr-2">1. Visualizzare Immobili:</span>
                        <p className="text-gray-600">Puoi facilmente cercare e visualizzare immobili per affittare, esplorando le opzioni per località, prezzo e altro.</p>
                    </div>

                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 mr-2">2. Aggiungere il Tuo Immobile:</span>
                        <p className="text-gray-600">Hai un immobile da affittare? Puoi aggiungerlo direttamente sul nostro sito per renderlo visibile ai potenziali inquilini.</p>
                    </div>

                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 mr-2">3. Prezzi per Notte:</span>
                        <p className="text-gray-600">Ogni immobile ha un prezzo specifico per notte che può variare in base alla stagione, alla posizione e alla disponibilità.</p>
                    </div>

                    <div className="flex items-center">
                        <span className="font-bold text-gray-700 mr-2">4. Recensioni:</span>
                        <p className="text-gray-600">Dopo il tuo soggiorno, puoi lasciare una recensione sull'immobile per aiutare altri utenti a fare una scelta informata.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hai bisogno di ulteriore assistenza?</h2>
                <p className="text-gray-700 mb-4">Se hai domande o necessiti di supporto, puoi consultare le domande frequenti (FAQ) o contattarci direttamente per risolvere il tuo problema.</p>

                <p className="text-blue-500 underline cursor-pointer"><a href="#faq">Vai alle FAQ</a></p>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Contatti</h3>
                    <p className="text-gray-700">
                        <strong>Email:</strong> supporto@boolbnb.com
                    </p>
                    <p className="text-gray-700">
                        <strong>Telefono:</strong> +39 123 456 7890
                    </p>
                    <p className="text-gray-700">
                        <strong>Orari di lavoro:</strong> Lunedì - Venerdì 9:00 - 18:00
                    </p>
                </div>
            </div>

            <div id="faq" className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Domande Frequenti (FAQ)</h2>
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-700">1. Come posso aggiungere un immobile?</span>
                        <p className="text-gray-600">Per aggiungere un immobile, vai alla sezione "Affitta con BoolB&B" nel menu del sito. Inserisci tutte le informazioni richieste, come titolo, descrizione, foto e prezzo. Una volta salvato, il tuo immobile sarà visibile a tutti gli utenti.</p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-gray-700">2. Come posso lasciare una recensione?</span>
                        <p className="text-gray-600">Dopo il tuo soggiorno in un immobile, puoi lasciare una recensione direttamente sulla pagina dell'immobile. Vai alla sezione recensioni e compila il modulo con la tua valutazione e commento.</p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-gray-700">3. Come vengono determinati i prezzi per notte?</span>
                        <p className="text-gray-600">I prezzi per notte degli immobili vengono determinati in base a vari fattori, tra cui la posizione, la stagione, la domanda e la disponibilità. Puoi vedere il prezzo aggiornato direttamente sulla pagina dell'immobile.</p>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold text-gray-700">4. Cosa fare se voglio cambiare una recensione?</span>
                        <p className="text-gray-600">Se desideri modificare o rimuovere una recensione che hai lasciato, contatta il nostro supporto. Saranno felici di aiutarti con la gestione della tua recensione.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Assistenza