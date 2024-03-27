OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "خطأ نماذج غير محدد",
    "Text generation" : "توليد النص",
    "Image generation" : "توليد الصورة",
    "Audio transcription" : "الترقين الصوتي Audio transcription",
    "Unknown" : "غير معروف",
    "tokens" : "أَمَارَات tokens",
    "images" : "صِوَر",
    "seconds" : "ثوانٍ",
    "Unknown error while retrieving quota usage." : "حدث خطأ غير محدد أثناء استرجاع باقي الحصة ",
    "Text generation quota exceeded" : " حصة توليد النصوص تمّ تجاوزها",
    "Unknown text generation error" : "حدث خطأ غير محدد عند توليد النصوص",
    "Could not read audio file." : "تعذّرت قراءة الملف الصوتي.",
    "Audio transcription quota exceeded" : "حصة الترقين الصوتي تمّ تجاوزها",
    "Unknown audio trancription error" : "حدث خطأ غير محدد عند الترقين الصوتي",
    "Image generation quota exceeded" : "حصة توليد الصور تمّ تجاوزها",
    "Unknown image generation error" : "خطأ غير محدد عند توليد الصور",
    "Bad HTTP method" : "دالة HTTP  غير صحيحة",
    "Bad credentials" : "معلومات تسجيل الدخول غير صحيحة",
    "API request error: " : "خطأ طلب API: ",
    "Unknown API request error." : "خطأ غير محدد عند طلب API",
    "Connected accounts" : "حسابات مترابطة",
    "OpenAI's Whisper Speech-To-Text" : "تطبيق \"ويسبر\" الهامس Whisper لتحويل الكلام إلي نص من OpenAI",
    "LocalAI's Whisper Speech-To-Text" : "تحويل الكلام إلى نص بالذكاء االاصطناعي محليّاً باستعمال تطبيق \"الهامس\" Whisper",
    "OpenAI integration" : "تكامل OpenAI",
    "LocalAI integration" : "مُكاملة الذكاء الاصطناعي محليّاً LocalAI",
    "Reformulate" : "أعِد الصياغة",
    "Formulate text in a different way." : "صياغة النص بطريقة مختلفة",
    "OpenAI's DALL-E 2 Text-To-Image" : "من نص إلى صورة بواسطة DALL-E 2 من OpenAI",
    "LocalAI's stable diffusion Text-To-Image" : "من نص إلى صورة بواسطة stable diffusion من LocalAI",
    "OpenAI and LocalAI integration" : "مُكاملة OpenAI و LocalAI",
    "Integration of OpenAI and LocalAI services" : "مُكامَلة خِدْمَات OpenAI و LocalAI",
    "LocalAI URL (leave empty to use openai.com)" : "عنوان URL لقاعدة بيانات LocalAI (اتركه فارغًا لاستخدام openai.com)",
    "example:" : "مثال:",
    "This should be the address of your LocalAI instance from the point of view of your Nextcloud server. This can be a local address with a port like http://localhost:8080" : "يجب أن يكون هذا هو عنوان مثييل لوكال أيه آي الخاص بك من وجهة نظر خادم نكست كلود الخاص بك. ويمكن أن يكون هذا عنوانًا محليًا بمنفذ مثل http://localhost:8080",
    "Choose endpoint: " : "إختَر النقطة الحدِّيّة endpoint ـ : ",
    "Chat completions" : "إستكمالات الدردشة",
    "Completions" : "إستكمالات",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "إستعمال النقطة الحدِّيّة للدردشة chat endpoint يُمكن أن يُحسِّن من كفاءة توليد النصوص للنماذج المُناغَمَة file-tuned models المُتَّبِعَة للأوامر \"instruction following\".",
    "Default completion model to use" : "نموذج الإكمال الافتراضي لاستخدامه",
    "More information about OpenAI models" : "مزيد من المعلومات حول نماذج OpenAI",
    "More information about LocalAI models" : "معلومات أكثر حول نماذج LocalAI",
    "Request timeout (seconds)" : "مُهلة تنفيذ الطلب (بالثواني)",
    "Authentication" : "مصادقة",
    "Authentication method" : "أسلوب التحقُّق من الهويّة",
    "API key" : "مفتاح واجهة برمجة التطبيقات API key",
    "Basic Authentication" : "التحقُّق المبدئي من الهُويَّة ",
    "API key (optional with LocalAI)" : "مفتاح API ـ (إختياري مع LocalAI)",
    "your API key" : "مفتاحك لواجهة برمجة التطبيقات ",
    "You can create an API key in your OpenAI account settings:" : "يُمكنك إنشاء مفتاح لـ API في إعدادات حسابك على OpenAI:",
    "Username" : "إسم المستخدم",
    "your Basic Auth user" : "التحقُّق المبدئي من شخصيتك",
    "Password" : "كلمة المرور",
    "your Basic Auth password" : "التحقُّق المبدئي من كلمة مرورك",
    "Usage limits" : "حدود الاستعمال",
    "Quota enforcement time period (days)" : "الفترة الزمنية لإنفاذ الحصص (بالأيام)",
    "Usage quotas per time period" : "حصص الاستخدام لكل فترة زمنية",
    "Quota type" : "نوع الحصة",
    "Per-user quota / period" : "الحصة / الفترة لكل مستخدم",
    "Current system-wide usage / period" : "الحصة/ الفترة على مستوى النظام حاليّاً",
    "A per-user limit for usage of this API type (0 for unlimited)" : "تقييد لحصة كل مستخدِم عند استعمال هذا الـ API ـ ( 0 تعني .حصة غير محددة) ",
    "Max new tokens per request" : "أقصى عدد من الأَمَارَات tokens الجديدة لكل طلب",
    "Maximum number of new tokens generated for a single text generation prompt" : "أقصى عدد من الأَمَارَات tokens الجديدة المولدة لكل طلب مفرد لتوليد نص",
    "Select enabled features" : "إختَر الخصائص المُمَكّنة",
    "Translation provider (to translate Talk messages for example)" : "مزود الترجمة (لترجمة رسائل تطبيق Talk على سبيل المثال)",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "مزود تحويل الكلام إلى نص Speech-to-text (لاستكتاب تسجيلات تطبيق Talk على سبيل المثال)",
    "Failed to load quota info" : "تعذّر تحميل معلومات الحصص",
    "OpenAI admin options saved" : "تمّ حفظ خيارات مُشرِف OpenAI",
    "Failed to save OpenAI admin options" : "فشل في حفظ خيارات مُشرِف OpenAI",
    "Your administrator defined a custom service address" : "حدد المسؤول الخاص بك عنوان خدمة مخصص",
    "Leave the API key empty to use the one defined by administrators" : "أترُك مفتاح واجهة برمجة التطبيقات فارغًا ليتم استخدام المفتاح الذي حدده المشرف",
    "You can create a free API key in your OpenAI account settings:" : "يمكنك إنشاء مفتاح واجهة برمجة التطبيقات مجاني في إعدادات حسابك على OpenAI: ",
    "Leave the username and password empty to use the ones defined by your administrator" : "أُترُك خانتيْ اسم المستخدِم و كلمة المرور فارغتين ليتم استعمال ما قام مشرفك بتعريفه.",
    "Usage quota info" : "معلومات حصص الاستعمال",
    "Usage" : "الاستعمال",
    "Specifying your own API key will allow unlimited usage" : "سيسمح تحديد مفتاح API الخاص بك باستعمال غير محدد الحصة",
    "OpenAI options saved" : "تمّ حفظ خيارات OpenAI",
    "Failed to save OpenAI options" : "فشل في حفظ خيارات OpenAI"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
