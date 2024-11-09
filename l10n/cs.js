OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "Neznámá chyba modelů",
    "Default" : "Výchozí",
    "Text generation" : "Vytváření textu",
    "Image generation" : "Vytváření obrázků",
    "Audio transcription" : "Přepis zvuku",
    "Unknown" : "Neznámé",
    "tokens" : "tokeny",
    "images" : "obrázky",
    "seconds" : "sekund",
    "Unknown error while retrieving quota usage." : "Neznámá chyba při získávání kvóty využití.",
    "Text generation quota exceeded" : "Překročena kvóta vytváření textu",
    "Unknown text generation error" : "Neznámá chyba vytváření textu",
    "Could not read audio file." : "Nepodařilo se číst ze zvukového souboru.",
    "Audio transcription quota exceeded" : "Překročena kvóta přepisu ze zvuku",
    "Unknown audio trancription error" : "Nezná chyba přepisu ze zvuku",
    "Image generation quota exceeded" : "Překročena kvóta vytváření obrázků",
    "Unknown image generation error" : "Neznámá chyba při vytváření obrázku",
    "Bad HTTP method" : "Nesprávná HTTP metoda",
    "Bad credentials" : "Nesprávné přihlašovací údaje",
    "API request error: " : "Chyba požadavku na API rozhraní:",
    "Maximum output words" : "Maximální délka výstupu (slova)",
    "The maximum number of words/tokens that can be generated in the completion." : "Nejvyšší počet slov/tokenů, který je možné v dokončování vytvořit.",
    "Model" : "Model",
    "The model used to generate the completion" : "Model použitý pro vytvoření dokončení",
    "OpenAI's DALL-E 2" : "DALL-E 2 od OpenAI",
    "Size" : "Velikost",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Volitelné. Velikost vytvářených obrázků. Je třeba, aby bylo ve formátu 256x256. Výchozí je %s",
    "The model used to generate the images" : "Model použitý pro vytvoření obrázků",
    "Detect language" : "Zjistit jazyk",
    "OpenAI and LocalAI integration" : "Napojení na OpenAI a LocalAI",
    "Integration of OpenAI and LocalAI services" : "Napojení na služby OpenAI a LocalAI",
    "Service URL" : "URL adresa služby",
    "Example: {example}" : "Příklad: {example}",
    "Leave empty to use {openaiApiUrl}" : "Pro využití {openaiApiUrl} nevyplňujte",
    "Service name (optional)" : "Název služby (volitelné)",
    "Example: LocalAI of university ABC" : "Příklad: MístníAI univerzity ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Tento název bude zobrazen jako název poskytovatele v nastavení správy AI",
    "Request timeout (seconds)" : "Časový limit požadavku (sekundy)",
    "Authentication" : "Ověřování se",
    "Authentication method" : "Metoda ověření",
    "API key" : "Klíč k aplikačnímu program. rozhraní (API)",
    "Basic Authentication" : "Základní ověřování",
    "API key (mandatory with OpenAI)" : "Klíč k API (povinné v případě OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Klíč k API je možné si vytvořit v nastavení vašeho účtu u OpenAI",
    "Basic Auth user" : "Basic Auth uživatel",
    "Basic Auth password" : "Basic Auth heslo",
    "Text completion endpoint" : "Koncový bod dokončování textu",
    "Chat completions" : "Dokončování v chatu",
    "Completions" : "Dokončován",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "Výběr koncového bodu pro chat/dokončování není pro OpenAI k dispozici od té doby, co výslovně používá dokončování chatu pro „instrukce následující“ jemně vyladěné modely.",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "Použití koncového bodu chatu může v případě modelů „pokyny následující“ vylepšit kvalitu vytváření textu.",
    "Default completion model to use" : "Výchozí dokončovací model, který použít",
    "More information about OpenAI models" : "Další informace o OpenAI modelech",
    "More information about LocalAI models" : "Další informace o LocalAI modelech",
    "Extra completion model parameters" : "Extra parametry pro model dokončení",
    "Default image generation model to use" : "Výchozí model pro vytváření obrázků",
    "No models to list" : "Žádné modely k vypsání",
    "Default image size" : "Výchozí velikost obrázku",
    "Usage limits" : "Limity využití",
    "Quota enforcement time period (days)" : "Časová perioda (days) vynucování kvóty",
    "Usage quotas per time period" : "Kvóty využití na časové období",
    "Quota type" : "Typ kvóty",
    "Per-user quota / period" : "Kvóta/období pro jednotlivého uživatele",
    "Current system-wide usage / period" : "Stávající celosystémové využití/období",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Limity využívání jednotlivými uživateli tohoto typu API (0 pro neomezeno)",
    "Max new tokens per request" : "Tokenů v jednotlivém požadavků nejvýše",
    "Maximum number of new tokens generated for a single text generation prompt" : "Maximální počet nových tokenů vytvořených pro jedno vyzvání k vytvoření textu",
    "Select enabled features" : "Vyberte zapnuté funkce",
    "Translation provider (to translate Talk messages for example)" : "Poskytovatel překladů (například pro překládání zpráv v Talk)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Poskytovatelé zpracovávání textu (pro jeho vytváření, shrnování, kontextové psaní, atd…)",
    "Image generation provider" : "Poskytovatel vytváření obrázků",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Poskytovatel převodu řeči na text (například pro přepis nahrávek z Talk)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "JSON objekt. Podívejte se do dokumentace k API ohledně seznamu všech dostupných parametrů. Například: {example}",
    "Must be in 256x256 format (default is {default})" : "Je třeba, aby bylo ve formátu 256x256 (výchozí je {default})",
    "Failed to load models" : "Nepodařilo se načíst modely",
    "Failed to load quota info" : "Nepodařilo se načíst informace o kvótě",
    "OpenAI admin options saved" : "Předvolby správy pro OpenAI uloženy",
    "Failed to save OpenAI admin options" : "Nepodařilo se uložit předvolby správy pro OpenAI",
    "Your administrator defined a custom service address" : "Správce definoval jím určenou adresu služby",
    "Leave the API key empty to use the one defined by administrators" : "Pokud chcete využít klíč k API, definovaný správci, pak ho zde nevyplňujte",
    "You can create a free API key in your OpenAI account settings" : "Klíč k API je možné si zdarma vytvořit v nastavení vašeho účtu u OpenAI",
    "Leave the username and password empty to use the ones defined by your administrator" : "Pokud chcete použít ty definované správcem, uživatelské jméno a heslo nevyplňujte",
    "Username" : "Uživatelské jméno",
    "your Basic Auth user" : "váš uživatel pro Basic Auth",
    "Password" : "Heslo",
    "your Basic Auth password" : "vaše heslo pro Basic Auth",
    "Usage quota info" : "Informace o využití kvóty",
    "Usage" : "Využití",
    "Specifying your own API key will allow unlimited usage" : "Zadání vašeho vlastního klíče k API umožní neomezené využívání",
    "OpenAI options saved" : "Předvolby pro OpenAI uloženy",
    "Failed to save OpenAI options" : "Nepodařilo se uložit předvolby pro OpenAI"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
