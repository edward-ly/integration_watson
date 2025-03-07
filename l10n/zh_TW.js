OC.L10N.register(
    "integration_openai",
    {
    "Invalid models response received" : "收到無效的模型回應",
    "Default" : "預設",
    "Text generation" : "產生文字",
    "Image generation" : "影像產生",
    "Audio transcription" : "音訊轉錄",
    "Unknown" : "未知",
    "tokens" : "詞元",
    "images" : "影像",
    "seconds" : "秒",
    "Unknown error while retrieving quota usage." : "擷取額度使用量時發生未知錯誤。",
    "Text generation quota exceeded" : "已超過文字產生額度",
    "Unknown text generation error" : "未知的產生文字錯誤",
    "Could not read audio file." : "無法讀取音訊檔。",
    "Audio transcription quota exceeded" : "已超過音訊轉錄額度",
    "Unknown audio trancription error" : "未知的音訊轉錄錯誤",
    "Image generation quota exceeded" : "已超過影像產生額度",
    "Unknown image generation error" : "未知的產生影像錯誤",
    "Bad HTTP method" : "錯誤的 HTTP 方法",
    "Bad credentials" : "錯誤的憑證",
    "API request error: " : "API 請求錯誤：",
    "Detect language" : "偵測語言",
    "Friendlier" : "更友善",
    "More formal" : "更正式",
    "Funnier" : "更有趣",
    "More casual" : "更休閒",
    "More urgent" : "更緊急",
    "Maximum output words" : "最大輸出字數",
    "The maximum number of words/tokens that can be generated in the completion." : "補齊中可以產生的最大文字/詞元數。",
    "Model" : "模型",
    "The model used to generate the completion" : "用來產生補齊的模型",
    "Change Tone" : "變更語氣",
    "Ask a question about your data." : "詢問關於您資料的問題。",
    "Input text" : "輸入文字",
    "Write a text that you want the assistant to rewrite in another tone." : "寫一段您希望小幫手以其他語氣重寫的文字。",
    "Desired tone" : "希望的語氣",
    "In which tone should your text be rewritten?" : "您的文字應該以哪種語氣重寫？",
    "Generated response" : "已產生的回應",
    "The rewritten text in the desired tone, written by the assistant:" : "小幫手以您希望的語氣重寫後的文字：",
    "OpenAI's DALL-E 2" : "OpenAI 的DALL-E 2",
    "Size" : "大小",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "選擇性。產生影像的大小。必須為 256x256。預設為 %s",
    "The model used to generate the images" : "用來產生影像的模型",
    "OpenAI and LocalAI integration" : "OpenAI 與 LocalAI 整合",
    "Integration of OpenAI and LocalAI services" : "OpenAI 與 LocalAI 服務的整合",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline, Context Write, Chat, and Reformulate (using any available large language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n* An image generation provider\n\n⚠️ Context Write, Summarize, Headline and Reformulate have mainly been tested with OpenAI.\nThey might work when connecting to other services, without any guarantee.\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance or [Ollama](https://ollama.com/) instance\nor to any service that implements an API similar to the OpenAI one, for example:\n[IONOS AI Model Hub](https://docs.ionos.com/cloud/ai/ai-model-hub), [Plusserver](https://www.plusserver.com/en/ai-platform/) or [MistralAI](https://mistral.ai).\n\n⚠️ This app is mainly tested with OpenAI. We do not guarantee it works perfectly\nwith other services that implement OpenAI-compatible APIs with slight differences.\n\n## Improve AI task pickup speed\n\nTo avoid task processing execution delay, setup at 4 background job workers in the main server (where Nextcloud is installed). The setup process is documented here: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via the OpenAI API: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n* The training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ 智慧型挑選器已從此應用程式中移除，因為它們已包含在[小幫手應用程式](https://apps.nextcloud.com/apps/assistant)中。\n\n此應用程式實作了\n\n* 文字產生提供者：免費提示詞、摘要、標題、情境寫作、聊天與重新表述（使用任何可用的大型語言模型）\n* 翻譯提供者（使用任何可用的語言模型）\n* 語音轉文字提供者（使用 Whisper）\n* 影像產生提供者\n\n⚠️ Context Write、Summarize、Headline 與 Reformulate 主要使用 OpenAI 進行測試。\n當連線到其他服務時，它們可能會正常運作，但並無任何保證。\n\n您也可以連線到自行架設的 [LocalAI](https://localai.io) 站台、[Ollama](https://ollama.com/) 站台或任何實作與 OpenAI 類似的 API 的服務，例如 [IONOS AI Model Hub](https://docs.ionos.com/cloud/ai/ai-model-hub)、[Plusserver](https://www.plusserver.com/en/ai-platform/) 或 [MistralAI](https://mistral.ai)，而非連線到 OpenAI API。\n\n⚠️ 此應用程式主要使用 OpenAI 進行測試。我們並不保證它能與其他服務完美共同運作，\n這些服務實作的 API 與 OpenAI 相容，但仍有微小差異。\n\n## 改善 AI 任務執行速度\n\n為避免任務處理執行延遲，請在主伺服器（安裝 Nextcloud 的地方）設定 4 個背景工作 Worker。設定流程文件在此： https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## 道德人工智慧評分\n### 透過 OpenAI API 使用 ChatGPT 產生文字的評分：🔴\n\n缺點：\n* 此模型的訓練與推理軟體都是專有的，限制了在本機執行或自行訓練的可能性\n* 訓練好的模型並未免費提供，因此模型無法在本機執行\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n\n### 透過 OpenAI API 使用 ChatGPT 翻譯的評分：🔴\n\n缺點：\n* 此模型的訓練與推理軟體都是專有的，限制了在本機執行或自行訓練的可能性\n* 訓練好的模型並未免費提供，因此模型無法在本機執行\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n### 透過 OpenAI API 使用 DALL·E 進行影像產生的評分：🔴\n\n缺點：\n* 此模型的訓練與推理軟體都是專有的，限制了在本機執行或自行訓練的可能性\n* 訓練好的模型並未免費提供，因此模型無法在本機執行\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n\n### 透過 OpenAI API 使用 Whisper 語音轉文字的評分：🟡\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n\n缺點：\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n### 透過 LocalAI 產生文字的評分：🟢\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n* 訓練資料免費提供，可以檢查或糾正偏差，或是最佳化效能與二氧化碳排放量。\n\n\n### 透過 LocalAI 使用 Stable Diffusion 產生影像的評分：🟡\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n\n缺點：\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n\n### 透過 LocalAI 使用 Whisper 語音轉文字的評分：🟡\n\n優點：\n* 此模型的訓練與推理軟體是開放原始碼的\n* 訓練好的模型免費提供，因此可以在本機執行\n\n缺點：\n* 訓練資料並未免費提供，限制了第三方檢查與糾正偏差或最佳化模型效能與二氧化碳使用的能力。\n\n[在我們的部落格上](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)取得更多關於 Nextcloud 道德人工智慧評分的資訊。",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "JSON 物件。看看 API 文件以取得所有可用參數清單。例如：{example}",
    "Must be in 256x256 format (default is {default})" : "必須為 256x256（預設為 {default}）",
    "Failed to load models" : "載入模型失敗",
    "Failed to load quota info" : "載入配額資訊失敗",
    "OpenAI admin options saved" : "OpenAI 管理選項已儲存",
    "Failed to save OpenAI admin options" : "儲存 OpenAI 管理選項失敗",
    "The Assistant app is not enabled. You need it to use the features provided by the OpenAI/LocalAI integration app." : "未啟用小幫手應用程式。您需要它才能使用 OpenAI/LocalAI 整合應用程式。",
    "Assistant app" : "小幫手應用程式",
    "Services with an OpenAI-compatible API:" : "包含 OpenAI 相容 API 的服務：",
    "Service URL" : "服務 URL",
    "Example: {example}" : "範例：{example}",
    "Leave empty to use {openaiApiUrl}" : "留空以使用 {openaiApiUrl}",
    "With the current configuration, the target URL used to get the models is:" : "在目前的組態下，用來取得目標模型的 URL 是：",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "這應該包含您的 LocalAI 站台（或任何實作類似 OpenAI 的 API 的服務）的位置，以及 API 的根路徑。Nextcloud 伺服器將會存取此 URL。",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "這可以是包含連接埠（如 {example}）的本機網址。在者種情況下，請確保 config.php 中的「allow_local_remote_servers」設定為 true。",
    "Service name (optional)" : "服務名稱（選擇性）",
    "Example: LocalAI of university ABC" : "範例：ABC 大學的LocalAI",
    "This name will be displayed as provider name in the AI admin settings" : "該名稱將在 AI 管理設定中顯示為提供者名稱",
    "Request timeout (seconds)" : "請求逾時（秒）",
    "Timeout for the request to the external API" : "向外部 API 提出請求的逾時時間",
    "Authentication" : "驗證",
    "Authentication method" : "認證方式",
    "API key" : "API 金鑰",
    "Basic Authentication" : "基本驗證",
    "API key (mandatory with OpenAI)" : "API 金鑰（使用 OpenAI 時必填）",
    "You can create an API key in your OpenAI account settings" : "您可以在您的 OpenAI 帳號設定中建立 API 金鑰",
    "Basic Auth user" : "基礎驗證使用者",
    "Basic Auth password" : "基礎驗證密碼",
    "Text completion endpoint" : "文字補完端點",
    "Chat completions" : "聊天補齊",
    "Completions" : "補齊",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "為 OpenAI 選取的聊天/完成端點無法使用，因為其隱含使用聊天完成來進行「指令追蹤」微調模型。",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "使用聊天端點可以改善「指令追蹤」微調模型的文字產生品質。",
    "Default completion model to use" : "預設使用的補齊模型",
    "More information about OpenAI models" : "關於 OpenAI 模型的更多資訊",
    "More information about LocalAI models" : "更多關於 LocalAI 模型的資訊",
    "Extra completion model parameters" : "額外補完模型參數",
    "Max input tokens per request" : "每個請求的最大輸入詞元數",
    "Split the prompt into chunks with each chunk being no more than the specified number of tokens (0 disables chunking)" : "將指示分割成小區塊，每個區塊不超過指定的詞元數（設定為 0 以停用分割）",
    "Default image generation model to use" : "預設使用的影像產生模型",
    "No models to list" : "沒有可列出的模型",
    "Default image size" : "預設影像大小",
    "Use authentication for image retrieval request" : "對影像擷取請求使用身份驗證",
    "Default transcription model to use" : "預設使用的轉錄模型",
    "Usage limits" : "使用量限制",
    "Quota enforcement time period (days)" : "配額執行期限（天）",
    "Usage quotas per time period" : "每個時段的使用量配額",
    "Quota type" : "配額類型",
    "Per-user quota / period" : "每個使用者的配額/週期",
    "Current system-wide usage / period" : "在目前系統範圍內的使用量/週期",
    "A per-user limit for usage of this API type (0 for unlimited)" : "每個使用者使用此 API 類型的用量限制（0 為無限制）",
    "Max new tokens per request" : "每個請求的最大新詞元數",
    "Maximum number of new tokens generated for a single text generation prompt" : "單一文字產生提示產生的新詞元最大數量",
    "Use \"{newParam}\" parameter instead of the deprecated \"{deprecatedParam}\"" : "使用「{newParam}」參數而非棄用的「{deprecatedParam}」",
    "Select enabled features" : "選取已啟用的功能",
    "Translation provider (to translate Talk messages for example)" : "翻譯提供者（舉例來說，用來翻譯 Talk 中的訊息）",
    "Text processing providers (to generate text, summarize, context write etc...)" : "文字處理提供者（用來產生文字、摘要、情境寫作等）",
    "Image generation provider" : "影像產生提供者",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "語音轉文字提供者（舉例來說，用來轉錄 Talk 的錄音）",
    "OpenAI options saved" : "OpenAI 選項已儲存",
    "Failed to save OpenAI options" : "儲存 OpenAI 選項失敗",
    "Your administrator defined a custom service address" : "您的管理員定義了自訂的服務位置",
    "Leave the API key empty to use the one defined by administrators" : "將 API 金鑰留空以使用管理員定義的",
    "You can create a free API key in your OpenAI account settings" : "您可以在您的 OpenAI 帳號設定中建立一個免費的 API 金鑰",
    "Leave the username and password empty to use the ones defined by your administrator" : "將使用者名稱與密碼留空以使用您的管理員定義的",
    "Username" : "使用者名稱",
    "your Basic Auth user" : "您的基本驗證使用者",
    "Password" : "密碼",
    "your Basic Auth password" : "您的基本驗證密碼",
    "Usage quota info" : "使用量配額資訊",
    "Usage" : "使用量",
    "Specifying your own API key will allow unlimited usage" : "指定您自己的 API 金鑰可允許無限制的使用量"
},
"nplurals=1; plural=0;");
