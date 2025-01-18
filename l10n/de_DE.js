OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "Unbekannter Modellfehler",
    "Default" : "Standard",
    "Text generation" : "Texterstellung",
    "Image generation" : "Bilderstellung",
    "Audio transcription" : "Audio-Transskription",
    "Unknown" : "Unbekannt",
    "tokens" : "Token",
    "images" : "Bilder",
    "seconds" : "Sekunden",
    "Unknown error while retrieving quota usage." : "Unbekannter Fehler beim Abrufen der Kontingentnutzung.",
    "Text generation quota exceeded" : "Das Kontingent für die Texterstellung wurde überschritten",
    "Unknown text generation error" : "Unbekannter Fehler bei der Texterstellung",
    "Could not read audio file." : "Audio-Datei konnte nicht gelesen werden.",
    "Audio transcription quota exceeded" : "Das Kontingent für Audiotranskription überschritten",
    "Unknown audio trancription error" : "Unbekannter Fehler bei der Audiotransskription",
    "Image generation quota exceeded" : "Das Kontingent für die Bilderstellung wurde überschritten",
    "Unknown image generation error" : "Unbekannter Fehler bei der Bilderstellung",
    "Bad HTTP method" : "Ungültige HTTP-Methode",
    "Bad credentials" : "Falsche Anmeldeinformationen",
    "API request error: " : "Fehler bei der API-Anfrage:",
    "Detect language" : "Sprache erkennen",
    "Friendlier" : "Freundlicher",
    "More formal" : "Mehr formal",
    "Funnier" : "Lustiger",
    "More casual" : "Mehr lässig",
    "More urgent" : "Mehr dringlich",
    "Maximum output words" : "Maximal ausgegebene Wörter",
    "The maximum number of words/tokens that can be generated in the completion." : "Die maximale Anzahl von Wörtern/Tokens, die in der Vervollständigung erzeugt werden können.",
    "Model" : "Modell",
    "The model used to generate the completion" : "Das zur Generierung der Vervollständigung verwendete Modell",
    "Change Tone" : "Ton ändern",
    "Ask a question about your data." : "Stellen Sie eine Frage zu Ihren Daten.",
    "Input text" : "Texteingabe",
    "Write a text that you want the assistant to rewrite in another tone." : "Schreiben Sie einen Text, den der Assistent in einem anderen Ton umschreiben soll.",
    "Desired tone" : "Gewünschter Ton",
    "In which tone should your text be rewritten?" : "In welchem Ton soll Ihre Text umgeschrieben werden?",
    "Generated response" : "Erzeugte Antwort",
    "The rewritten text in the desired tone, written by the assistant:" : "Der umgeschriebene Text im gewünschten Ton, geschrieben von Assistant:",
    "OpenAI's DALL-E 2" : "DALL-E 2 von OpenAI",
    "Size" : "Größe",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Optional. Die Größe der generierten Bilder muss im Format 256x256 sein. Standard ist %s",
    "The model used to generate the images" : "Das zur Generierung der Bilder verwendete Modell",
    "OpenAI and LocalAI integration" : "OpenAI und LocalAI-Integration",
    "Integration of OpenAI and LocalAI services" : "Integration von OpenAI und LocalAI-Diensten",
    "Service URL" : "Service-URL",
    "Example: {example}" : "Beispiel: {example}",
    "Leave empty to use {openaiApiUrl}" : "Leer lassen um {openaiApiUrl} zu verwenden",
    "With the current configuration, the target URL used to get the models is:" : "Bei der aktuellen Konfiguration lautet die Ziel-URL, die zum Abrufen der Modelle verwendet wird:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Diese sollte die Adresse Ihrer LocalAI-Instanz (oder eines beliebigen Dienstes, der eine OpenAI-ähnliche API implementiert) zusammen mit dem Stammpfad der API enthalten. Auf diese URL wird von Ihrem Nextcloud-Server zugegriffen.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Dies kann eine lokale Adresse mit einem Port wie {example} sein. Stellen Sie in diesem Fall sicher, dass 'allow_local_remote_servers' in der config.php auf true gesetzt ist.",
    "Service name (optional)" : "Service-Name (optional)",
    "Example: LocalAI of university ABC" : "Beispiel: LocalAI der Universität ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Dieser Name wird als Anbietername in den AI-Administrationseinstellungen angezeigt",
    "Request timeout (seconds)" : "Anfrage-Zeitüberschreitung (Sekunden)",
    "Timeout for the request to the external API" : "Timeout für die Anfrage an die externe API",
    "Authentication" : "Authentifizierung",
    "Authentication method" : "Authentifizierungsmethode",
    "API key" : "API-Schlüssel",
    "Basic Authentication" : "Basis-Authentifizierung",
    "API key (mandatory with OpenAI)" : "API-Schlüssel (obligatorisch bei OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Sie können einen API-Schlüssel in Ihren OpenAI-Kontoeinstellungen erstellen",
    "Basic Auth user" : "Basic Auth-Benutzer",
    "Basic Auth password" : "Basic Auth-Passwort",
    "Text completion endpoint" : "Endpunkt zur Textvervollständigung",
    "Chat completions" : "Chat-Vervollständigungen",
    "Completions" : "Vervollständigungen",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "Die Auswahl des Chat-/Vervollständigungsendpunkts ist für OpenAI nicht verfügbar, da es implizit Chatvervollständigungen für fein abgestimmte Modelle verwendet, die \"Anweisungen folgen\".",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "Die Verwendung des Chat-Endpunkts kann die Qualität der Texterstellung für fein abgestimmte Modelle zur „Anweisungsbefolgung“ verbessern.",
    "Default completion model to use" : "Zu verwendendes Standard-Vervollständigungsmodell",
    "More information about OpenAI models" : "Weitere Informationen über OpenAI-Modelle",
    "More information about LocalAI models" : "Weitere Informationen über LocalAI-Modelle",
    "Extra completion model parameters" : "Zusätzliche Parameter des Vervollständigungsmodells",
    "Max input tokens per request" : "Maximale Eingabetoken pro Anfrage",
    "Split the prompt into chunks with each chunk being no more than the specified number of tokens (0 disables chunking)" : "Die Eingabeaufforderung in Blöcke aufteilen, wobei jeder Block nicht mehr als die angegebene Anzahl von Tokens umfassen darf (0 deaktiviert das Aufteilen)",
    "Default image generation model to use" : "Zu verwendendes Standard-Bilderzeugungsmodell",
    "No models to list" : "Keine Modelle zum Auflisten",
    "Default image size" : "Standardbildgröße",
    "Default transcription model to use" : "Zu verwendendes Standard-Transkriptionsmodell",
    "Usage limits" : "Nutzungsbeschränkungen",
    "Quota enforcement time period (days)" : "Zeitraum der Kontingentdurchsetzung (Tage)",
    "Usage quotas per time period" : "Nutzungskontingente pro Zeitraum",
    "Quota type" : "Kontingenttyp",
    "Per-user quota / period" : "Kontingent/Zeitraum pro Benutzer",
    "Current system-wide usage / period" : "Aktuelle systemweite Nutzung/Zeitraum",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Ein Limit pro Benutzer für die Nutzung dieses API-Typs (0 für unbegrenzt)",
    "Max new tokens per request" : "Maximale Anzahl neuer Token pro Anfrage",
    "Maximum number of new tokens generated for a single text generation prompt" : "Maximale Anzahl neuer Token, die für eine einzelne Eingabeaufforderung zur Texterstellung erzeugt werden",
    "Use \"{newParam}\" parameter instead of the deprecated \"{deprecatedParam}\"" : "\"{newParam}\"-Parameter anstatt des veralteten \"{deprecatedParam}\" verwenden",
    "Select enabled features" : "Aktivierte Funktionen auswählen",
    "Translation provider (to translate Talk messages for example)" : "Übersetzungsanbieter (zum Beispiel zum Übersetzen von Talk-Nachrichten)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Textverarbeitungsanbieter (zum Generieren von Text, Zusammenfassen, Schreiben im Kontext usw...)",
    "Image generation provider" : "Bilderstellungsanbieter",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Sprache-zu-Text-Anbieter (zum Beispiel zum Transkribieren von Talk-Gesprächsaufzeichnungen)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "JSON-Objekt. Sehen Sie sich die API-Dokumentation an, um eine Liste aller verfügbaren Parameter zu erhalten. Zum Beispiel: {example}",
    "Must be in 256x256 format (default is {default})" : "Muß im Format 256x256 sein (Standard ist {default})",
    "Failed to load models" : "Fehler beim Laden von Modellen",
    "Failed to load quota info" : "Kontingentinformationen konnten nicht geladen werden",
    "OpenAI admin options saved" : "OpenAI-Administrationseinstellungen gespeichert",
    "Failed to save OpenAI admin options" : "Fehler beim Speichern der OpenAI-Administrationseinstellungen",
    "Your administrator defined a custom service address" : "Ihre Administration hat eine benutzerdefinierte Dienstadresse definiert",
    "Leave the API key empty to use the one defined by administrators" : "API-Schlüssel leer lassen, um den von der Administration definierten Schlüssel zu verwenden",
    "You can create a free API key in your OpenAI account settings" : "Sie können in Ihren OpenAI-Kontoeinstellungen einen kostenlosen API-Schlüssel erstellen",
    "Leave the username and password empty to use the ones defined by your administrator" : "Benutzername und Passwort leer lassen, um den von der Administration definierten Schlüssel zu verwenden",
    "Username" : "Benutzername",
    "your Basic Auth user" : "Ihr Basic Auth-Benutzer",
    "Password" : "Passwort",
    "your Basic Auth password" : "Ihr Basic Auth-Passwort",
    "Usage quota info" : "Informationen zum Nutzungskontingent",
    "Usage" : "Verwendung",
    "Specifying your own API key will allow unlimited usage" : "Die Angabe Ihres eigenen API-Schlüssels ermöglicht eine unbegrenzte Nutzung",
    "OpenAI options saved" : "OpenAI-Einstellungen gespeichert",
    "Failed to save OpenAI options" : "Fehler beim Speichern der OpenAI-Einstellungen"
},
"nplurals=2; plural=(n != 1);");
