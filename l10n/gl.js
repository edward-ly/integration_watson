OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "Produciuse un erro descoñecido nos modelos",
    "Default" : "Predeterminado",
    "Text generation" : "Xeración de texto",
    "Image generation" : "Xeración de imaxes",
    "Audio transcription" : "Transcrición de son",
    "Unknown" : "Descoñecido",
    "tokens" : "testemuños",
    "images" : "Imaxes",
    "seconds" : "segundos",
    "Unknown error while retrieving quota usage." : "Produciuse un erro descoñecido ao recuperar o uso da cota.",
    "Text generation quota exceeded" : "Superouse a cota de xeración de texto",
    "Unknown text generation error" : "Produciuse un erro descoñecido de xeración de texto",
    "Could not read audio file." : "Non foi posíbel ler o ficheiro de son",
    "Audio transcription quota exceeded" : "Superouse a cota de transcrición de son",
    "Unknown audio trancription error" : "Produciuse un erro descoñecido de xeración de transcrición de son",
    "Image generation quota exceeded" : "Superouse a cota de xeración de imaxes",
    "Unknown image generation error" : "Produciuse un erro descoñecido de xeración de imaxe",
    "Bad HTTP method" : "Método HTTP incorrecto",
    "Bad credentials" : "Credenciais incorrectas",
    "API request error: " : "Produciuse un erro na solicitude da API:",
    "Maximum output words" : "Máximo de palabras de saída",
    "The maximum number of words/tokens that can be generated in the completion." : "O número máximo de palabras/testemuños que se poden xerar na conclusión.",
    "Model" : "Modelo",
    "The model used to generate the completion" : "O modelo utilizado para xerar a conclusión",
    "OpenAI's DALL-E 2" : "DALL-E 2 de OpenAI",
    "Size" : "Tamaño",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Opcional. O tamaño das imaxes xeradas. Debe estar en formato 256 x 256. O predeterminado é %s",
    "The model used to generate the images" : "O modelo utilizado para xerar as imaxes",
    "Detect language" : "Detectar o idioma",
    "OpenAI and LocalAI integration" : "Integración de OpenAI e LocalAI",
    "Integration of OpenAI and LocalAI services" : "Integración de servizos de OpenAI e LocalAI",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline, Context Write, Chat, and Reformulate (using any available large language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n* An image generation provider\n\n⚠️ Context Write, Summarize, Headline and Reformulate have mainly been tested with OpenAI.\nThey might work when connecting to other services, without any guarantee.\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance or [Ollama](https://ollama.com/) instance\nor to any service that implements an API similar to the OpenAI one, for example: [Plusserver](https://www.plusserver.com/en/ai-platform/) or [MistralAI](https://mistral.ai).\n\n⚠️ This app is mainly tested with OpenAI. We do not guarantee it works perfectly\nwith other services that implement OpenAI-compatible APIs with slight differences.\n\n## Improve AI task pickup speed\n\nTo avoid task processing execution delay, setup at 4 background job workers in the main server (where Nextcloud is installed). The setup process is documented here: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via the OpenAI API: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n* The training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ Elimináronse os selectores intelixentes desta aplicación\nxa que agora están incluídos na [aplicación Asistente](https://apps.nextcloud.com/apps/assistant).\n\nEsta aplicación incorpora:\n\n* Provedores de xeración de texto: indicación libre, resumo, título, escritura de contexto, parola e reformulación (usando calquera gran modelo de linguaxe dispoñíbel)\n* Un provedor de tradución (usando calquera modelo de linguaxe dispoñíbel)\n* Un provedor de procesamento de voz a texto «SpeechToText» (usando Whisper)\n* Un provedor de xeración de imaxes\n\n⚠️ A escritura de contexto, o resumo, o título e a reformulación foron probados principalmente con OpenAI.\nPoden funcionar cando se conectan a outros servizos, sen ningunha garantía.\nEn troques de conectarse á API de OpenAI, tamén pode conectarse a unha instancia [LocalAI](https://localai.io) en aloxamento autónomo ou a instancia [Ollama](https://ollama.com/)\ntamén a calquera servizo que incorpore unha API semellante á de OpenAI, por exemplo: [Plusserver](https://www.plusserver.com/en/ai-platform/) ou [MistralAI](https://mistral.ai ).\n\n⚠️ Esta aplicación está probada principalmente con OpenAI. Non garantimos que funcione perfectamente con outros servizos que incorporen API compatíbeis con OpenAI con pequenas diferenzas\n\n## Mellorar a velocidade de recollida de tarefas da IA\n\nPara evitar o atraso na execución do procesamento de tarefas, configure 4 traballadores en segundo plano no servidor principal (onde está instalado Nextcloud). O proceso de configuración está documentado aquí: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Avaliación ética da IA\n### Avaliación para a xeración de texto usando ChatGPT a través da API de OpenAI: 🔴\n\nNegativa:\n* O software para o adestramento e inferencia deste modelo é propietario, limitando a súa execución local ou o  adestramento por si mesmo\n* O modelo adestrado non está dispoñíbel de xeito libre, polo que o modelo non se pode executar en instalacións\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\n\n### Avaliación para a tradución usando ChatGPT a través da API de OpenAI: 🔴\n\nNegativa:\n* O software para o adestramento e inferencia deste modelo é propietario, limitando a súa execución local ou o adestramento por si mesmo\n* O modelo adestrado non está dispoñíbel de xeito libre, polo que o modelo non se pode executar en instalacións\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\n### Clasificación para a xeración de imaxes usando DALL·E a través da API de OpenAI: 🔴\n\nNegativa:\n* O software para o adestramento e inferencia deste modelo é propietario, limitando a súa execución local ou o adestramento por si mesmo\n* O modelo adestrado non está dispoñíbel de xeito libre, polo que o modelo non se pode executar en instalacións\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\n\n### Avaliación de «voz a texto» usando Whisper a través da API de OpenAI: 🟡\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, por tanto, pódese executar en instalacións\n\nNegativa:\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\n### Clasificación para a xeración de texto a través de LocalAI: 🟢\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, por tanto, pódese executar en instalacións\n* Os datos de adestramento están dispoñíbeis de xeito libre, o que permite comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\n\n### Avaliación para a xeración de imaxes usando Stable Diffusion a través de LocalAI : 🟡\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, por tanto, pódese executar en instalacións\n\nNegativa:\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\n\n### Avaliación de «voz a texto» usando Whisper a través de LocalAI: 🟡\n\nPositiva:\n* O software para o adestramento e inferencia deste modelo é de código aberto\n* O modelo adestrado está dispoñíbel de xeito libre e, por tanto, pódese executar en instalacións\n\nNegativa:\n* Os datos de adestramento non están dispoñíbeis de xeito libre, o que limita a capacidade de partes externas para comprobar e corrixir nesgos ou optimizar o rendemento do modelo e o uso de CO2.\n\nObteña máis información sobre a avaliación de IA Ética de Nextcloud [no noso blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "Service URL" : "URL do servizo",
    "Example: {example}" : "Exemplo: {example}",
    "Leave empty to use {openaiApiUrl}" : "Deixe o campo baleiro para usar {openaiApiUrl}",
    "With the current configuration, the target URL used to get the models is:" : "Coa configuración actual, o URL de destino utilizado para obter os modelos é:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Isto debería incluír o enderezo da súa instancia de LocalAI (ou calquera servizo que implemente unha API semellante a OpenAI) xunto coa ruta raíz da API. O seu servidor Nextcloud accederá a este URL.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Este pode ser un enderezo local cun porto como {example}. Neste caso, asegúrese de que «allow_local_remote_servers» estea definido como true (verdadeiro) en config.php.",
    "Service name (optional)" : "Nome do servizo (opcional)",
    "Example: LocalAI of university ABC" : "Exemplo: LocalAI da universidade ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Este nome amosarase como nome do provedor na configuración do administrador da IA",
    "Request timeout (seconds)" : "Tempo de espera da solicitude (segundos)",
    "Authentication" : "Autenticación",
    "Authentication method" : "Método de autenticación",
    "API key" : "Chave da API",
    "Basic Authentication" : "Autenticación básica",
    "API key (mandatory with OpenAI)" : "Chave da API (obrigatoria con OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Pode crear unha chave API nos axustes da súa conta OpenAI",
    "Basic Auth user" : "Usuario de autenticación básica",
    "Basic Auth password" : "Contrasinal de autenticación básica",
    "Text completion endpoint" : "Punto final de conclusión do texto",
    "Chat completions" : "Conclusións da parola",
    "Completions" : "Conclusións",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "A selección do punto final de parola/conclusión non está dispoñíbel para OpenAI xa que utiliza implícitamente as conclusións da parola para os modelos axustados de «seguimento de instrucións».",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "Usar o punto final de parola pode mellorar a calidade da xeración de texto para os modelos afinados que «seguen instrucións».",
    "Default completion model to use" : "Modelo predeterminado de conclusión a empregar",
    "More information about OpenAI models" : "Máis información sobre os modelos OpenAI",
    "More information about LocalAI models" : "Máis información sobre os modelos LocalAI",
    "Extra completion model parameters" : "Parámetros adicionais do modelo de remate",
    "Default image generation model to use" : "Modelo de xeración de imaxes predeterminado a empregar",
    "No models to list" : "Non hai modelos para enumerar",
    "Default image size" : "Tamaño predeterminado de imaxe",
    "Usage limits" : "Límites de uso",
    "Quota enforcement time period (days)" : "Período de execución da cota (días)",
    "Usage quotas per time period" : "Cotas de uso por período de tempo",
    "Quota type" : "Tipo de cota",
    "Per-user quota / period" : "Cota/período por usuario",
    "Current system-wide usage / period" : "Uso/período actual en todo o sistema",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Un límite por usuario para o uso deste tipo de API (0 para ilimitado)",
    "Max new tokens per request" : "Máximo de testemuños novos por solicitude",
    "Maximum number of new tokens generated for a single text generation prompt" : "Número máximo de testemuños novos xerados para unha única indicación de xeración de texto",
    "Select enabled features" : "Seleccione as funcionalidades activadas",
    "Translation provider (to translate Talk messages for example)" : "Provedor de tradución (para traducir mensaxes de Talk, por exemplo)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Provedor de procesamento de texto (para xerar texto, resumir, escribir contexto, etc…)",
    "Image generation provider" : "Provedor de xeración de imaxes",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Provedor de conversión de voz a texto (para transcribir as gravacións de Talk, por exemplo)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "Obxecto JSON. Consulte a documentación da API para obter a lista de todos os parámetros dispoñíbeis. Por exemplo: {example}",
    "Must be in 256x256 format (default is {default})" : "Debe estar en formato 256 x 256 (o predeterminado é {default})",
    "Failed to load models" : "Produciuse un fallo ao cargar os modelos",
    "Failed to load quota info" : "Produciuse un fallo ao cargar a información da cota",
    "OpenAI admin options saved" : "Gardáronse as opcións de administración de OpenAI",
    "Failed to save OpenAI admin options" : "Produciuse un fallo ao gardar as opcións de administración de OpenAI",
    "Your administrator defined a custom service address" : "A administración da instancia definiu un enderezo de servizo personalizado",
    "Leave the API key empty to use the one defined by administrators" : "Deixe a chave API baleira para usar a definida pola administración da instancia",
    "You can create a free API key in your OpenAI account settings" : "Pode crear unha chave API nos axustes da súa conta OpenAI:",
    "Leave the username and password empty to use the ones defined by your administrator" : "Deixe o nome de usuario e o contrasinal baleiros para usar os definidos pola administración da instancia",
    "Username" : "Nome de usuario",
    "your Basic Auth user" : "o seu usuario de autenticación básica",
    "Password" : "Contrasinal",
    "your Basic Auth password" : "o seu contrasinal de autenticación básica",
    "Usage quota info" : "Información sobre a cota de uso",
    "Usage" : "Uso",
    "Specifying your own API key will allow unlimited usage" : "Especificar a súa propia chave da API permitiralle un uso ilimitado",
    "OpenAI options saved" : "Gardáronse as opcións de OpenAI",
    "Failed to save OpenAI options" : "Produciuse un fallo ao gardar as opcións de OpenAI"
},
"nplurals=2; plural=(n != 1);");
