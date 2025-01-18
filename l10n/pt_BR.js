OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "Erro de modelos desconhecidos",
    "Default" : "Padrão",
    "Text generation" : "Geração de texto",
    "Image generation" : "Geração de imagem",
    "Audio transcription" : "Transcrição de áudio",
    "Unknown" : "Desconhecido",
    "tokens" : "tokens",
    "images" : "imagens",
    "seconds" : "segundos",
    "Unknown error while retrieving quota usage." : "Erro desconhecido ao recuperar o uso da cota.",
    "Text generation quota exceeded" : "Cota de geração de texto excedida",
    "Unknown text generation error" : "Erro desconhecido de geração de texto",
    "Could not read audio file." : "Não foi possível ler o arquivo de áudio.",
    "Audio transcription quota exceeded" : "Cota de transcrição de áudio excedida",
    "Unknown audio trancription error" : "Erro desconhecido de transcrição de áudio",
    "Image generation quota exceeded" : "Cota de geração de imagens excedida",
    "Unknown image generation error" : "Erro desconhecido ao gerar imagem",
    "Bad HTTP method" : "Método HTTP incorreto",
    "Bad credentials" : "Credenciais inválidas",
    "API request error: " : "Erro de solicitação de API:",
    "Detect language" : "Detect language",
    "Maximum output words" : "Palavras de saída máxima",
    "The maximum number of words/tokens that can be generated in the completion." : "O número máximo de palavras/tokens que podem ser gerados na conclusão.",
    "Model" : "Modelo",
    "The model used to generate the completion" : "O modelo usado para gerar a conclusão",
    "Input text" : "Entrada de texto",
    "OpenAI's DALL-E 2" : "OpenAI's DALL-E 2",
    "Size" : "Tamanho",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Opcional. O tamanho das imagens geradas. Deve estar no formato 256x256. O padrão é %s",
    "The model used to generate the images" : "O modelo usado para gerar as imagens",
    "OpenAI and LocalAI integration" : "Integração OpenAI e LocalAI",
    "Integration of OpenAI and LocalAI services" : "Integração dos serviços OpenAI e LocalAI",
    "Service URL" : "URL do serviço",
    "Example: {example}" : "Exemplo: {example}",
    "Leave empty to use {openaiApiUrl}" : "Deixe em branco para usar {openaiApiUrl}",
    "With the current configuration, the target URL used to get the models is:" : "Com a configuração atual, a URL de destino usada para obter os modelos é:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Isso deve incluir o endereço da sua instância LocalAI (ou qualquer serviço implementando uma API similar à OpenAI) junto com o caminho raiz da API. Esta URL será acessada pelo seu servidor Nextcloud.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Este pode ser um endereço local com uma porta como {example}. Neste caso, certifique-se de que 'allow_local_remote_servers' esteja definido como true em config.php.",
    "Service name (optional)" : "Nome do serviço (opcional)",
    "Example: LocalAI of university ABC" : "Exemplo: LocalAI da universidade ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Este nome será exibido como nome do provedor nas configurações de administração do AI",
    "Request timeout (seconds)" : "Tempo limite para requisição (segundos)",
    "Timeout for the request to the external API" : "Tempo limite para a solicitação para a API externa",
    "Authentication" : "Autenticação",
    "Authentication method" : "Método de autenticação",
    "API key" : "Chave API",
    "Basic Authentication" : "Autenticação Básica",
    "API key (mandatory with OpenAI)" : "Chave API (obrigatória com OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Você pode criar uma chave API nas configurações da sua conta OpenAI",
    "Basic Auth user" : "Usuário de autenticação básica",
    "Basic Auth password" : "Senha de autenticação básica",
    "Text completion endpoint" : "Ponto final de conclusão de texto",
    "Chat completions" : "Conclusões de bate-papo",
    "Completions" : "Conclusões",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "A seleção do endpoint de bate-papo/conclusão não está disponível para OpenAI, pois ele usa implicitamente conclusões de bate-papo para modelos ajustados de \"seguimento de instruções\".",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "O uso do endpoint de bate-papo pode melhorar a qualidade da geração de texto para modelos ajustados de \"seguimento de instruções\".",
    "Default completion model to use" : "Modo padrão de completamento",
    "More information about OpenAI models" : "Mais informação sobre modelos OpenAI",
    "More information about LocalAI models" : "Mais informações sobre os modelos LocalAI",
    "Extra completion model parameters" : "Parâmetros extras do modelo de conclusão",
    "Default image generation model to use" : "Modelo de geração de imagem padrão a ser usado",
    "No models to list" : "Sem modelos a listar",
    "Default image size" : "Tamanho da imagem padrão",
    "Default transcription model to use" : "Modelo de transcrição padrão a ser usado",
    "Usage limits" : "Limites de uso",
    "Quota enforcement time period (days)" : "Período de aplicação da cota (dias)",
    "Usage quotas per time period" : "Cotas de uso por período",
    "Quota type" : "Tipo de cota",
    "Per-user quota / period" : "Cota/período por usuário",
    "Current system-wide usage / period" : "Uso/período atual em todo o sistema",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Um limite por usuário para uso deste tipo de API (0 para ilimitado)",
    "Max new tokens per request" : "Máximo de novos tokens por solicitação",
    "Maximum number of new tokens generated for a single text generation prompt" : "Número máximo de novos tokens gerados para um único prompt de geração de texto",
    "Select enabled features" : "Selecione recursos habilitados",
    "Translation provider (to translate Talk messages for example)" : "Provedor de tradução (para traduzir mensagens do Talk, por exemplo)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Provedores de processamento de texto (para gerar texto, resumir, escrever contexto, etc...)",
    "Image generation provider" : "Provedor de geração de imagens",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Provedor de fala para texto (para transcrever gravações do Talk, por exemplo)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "Objeto JSON. Verifique a documentação da API para obter a lista de todos os parâmetros disponíveis. Por exemplo: {exemplo}",
    "Must be in 256x256 format (default is {default})" : "Deve estar no formato 256x256 (o padrão é {default})",
    "Failed to load models" : "Falha ao carregar modelos",
    "Failed to load quota info" : "Falha ao carregar informações de cota",
    "OpenAI admin options saved" : "Opções de administração OpenAI salvas",
    "Failed to save OpenAI admin options" : "Falha ao salver opções de admin da OpenAI",
    "Your administrator defined a custom service address" : "Seu administrador definiu um endereço de serviço personalizado",
    "Leave the API key empty to use the one defined by administrators" : "Deixe a chave API vazia para usar aquela definida pelos administradores",
    "You can create a free API key in your OpenAI account settings" : "Você pode criar uma chave API gratuita nas configurações da sua conta OpenAI",
    "Leave the username and password empty to use the ones defined by your administrator" : "Deixe o nome de usuário e a senha em branco para usar os definidos pelo seu administrador",
    "Username" : "Nome de usuário",
    "your Basic Auth user" : "seu usuário de autenticação básica",
    "Password" : "Senha",
    "your Basic Auth password" : "sua senha de autenticação básica",
    "Usage quota info" : "Informações de cota de uso",
    "Usage" : "Uso",
    "Specifying your own API key will allow unlimited usage" : "Especificar sua própria chave de API permitirá uso ilimitado",
    "OpenAI options saved" : "Opções do OpenAI salvas",
    "Failed to save OpenAI options" : "Falha ao salvar as opções do OpenAI"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
