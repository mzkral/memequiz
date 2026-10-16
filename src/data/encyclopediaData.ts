export interface MemeArchiveItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  origin: string;
  year: string;
  badgeType: 'pink' | 'cyan' | 'amber' | 'emerald' | 'purple';
  longStory: string;
  quote: string;
  viewsEstimate: string;
}

export const MEME_ENCYCLOPEDIA: MemeArchiveItem[] = [
  {
    id: "m89",
    number: "#89",
    category: "Sokak Röportajı",
    title: "Kaplumbağa Ninen",
    description: "Beklenmedik bir soruya verilen efsanevi absürt cevap ve viral mimikler.",
    origin: "YouTube Röportajı",
    year: "2016",
    badgeType: "pink",
    longStory: "Sokakta muhabirin ansızın sorduğu soruya, kafası karışık gencin 'Kaplumbağa ninen!' şeklinde refleks bir yanıt vermesiyle doğdu. Türkçe internette absürt diyalogların ve 'alakasız cevap verme' akımının temel taşı haline geldi.",
    quote: "— Nerelisin kardeş? — Kaplumbağa ninen!",
    viewsEstimate: "45M+ Gösterim"
  },
  {
    id: "m88",
    number: "#88",
    category: "Canlı Yayın",
    title: "4380",
    description: "SMS oylaması ve televizyon yarışmalarından çıkan unutulmaz nostaljik rakam fırtınası.",
    origin: "TV Yarışması",
    year: "2008",
    badgeType: "cyan",
    longStory: "2000'li yılların gece kuşağı televizyon yarışmalarında, sunucunun hipnotize edici ve bağırarak tekrarladığı 'Dört bin üç yüz sekseeeen, 4380!' ses tonu, günümüzde dahi kafada istemsizce çalan bir internet efsanesidir.",
    quote: "Hemen gönder 4380'e, 4-3-8-0!",
    viewsEstimate: "28M+ Gösterim"
  },
  {
    id: "m87",
    number: "#87",
    category: "TV / Röportaj",
    title: "Ben İmamım Gülmem",
    description: "Ciddiyetini korumaya çalışırken kahkahaya boğulan imamın efsane anı.",
    origin: "Haber Bülteni",
    year: "2014",
    badgeType: "amber",
    longStory: "Haber kamerasına tüm ciddiyetiyle konuşurken 'Ben imamım gülmem!' diyerek yüzünü toparlamaya çalışan din görevlisinin, hemen akabinde dayanamayıp gülme krizine girmesi Türk televizyonlarının en samimi anlarından biri olarak kayda geçti.",
    quote: "Ben imamım gülmem... hahaha!",
    viewsEstimate: "35M+ Gösterim"
  },
  {
    id: "m85",
    number: "#85",
    category: "Amatör Video",
    title: "İyi ki doğdun Muzaffer",
    description: "Ev içi doğum günü pastasındaki beklenmedik patlama ve panik dolu bağırışlar.",
    origin: "Ev Videosu",
    year: "2012",
    badgeType: "emerald",
    longStory: "Karanlık bir odada pastanın maytapları yakılmışken sakin başlayan doğum günü şarkısının, alevlerin büyümesiyle bir anda 'İyi ki doğdun Muzaffeeeer!' çığlıklarına ve kaos ortamına dönüşmesi saf komedi örneğidir.",
    quote: "İyi ki doğdun Muzaffeeeer! Anne söndür!",
    viewsEstimate: "60M+ Gösterim"
  },
  {
    id: "m84",
    number: "#84",
    category: "Sosyal Medya",
    title: "Yani bizde birileriyiz",
    description: "Öz güven patlaması ve laf sokma kültürünün zirve yaptığı o meşhur ses kaydı.",
    origin: "TikTok Viral",
    year: "2021",
    badgeType: "purple",
    longStory: "Hafif kırgın ama bir o kadar da iddialı bir tonlamayla kaydedilen 'Biz de birileriyiz yani bilader, bize de kıymet veren var' sözü, sosyal medyada dudak uydurma (lip-sync) akımlarının kralı oldu.",
    quote: "Biz de birileriyiz yani bilader!",
    viewsEstimate: "72M+ Gösterim"
  },
  {
    id: "m82",
    number: "#82",
    category: "Sokak Röportajı",
    title: "Çok Gezenin Ayağına B*k Bulaşır",
    description: "Atasözünü kendine göre yorumlayıp röportajcıyı dumura uğratan amcanın felsefesi.",
    origin: "Sarı Mikrofon",
    year: "2018",
    badgeType: "pink",
    longStory: "'Çok okuyan mı bilir çok gezen mi?' sorusuna verilen en radikal yanıt. Amca derin bir felsefi içgüdüyle atasözünü revize ederek sokak röportajı tarihine altın harflerle geçmiştir.",
    quote: "Çok okuyan bilir oğlum, çok gezenin ayağına b*k bulaşır!",
    viewsEstimate: "50M+ Gösterim"
  },
  {
    id: "m80",
    number: "#80",
    category: "Canlı Yayın",
    title: "Ölçmedim ki",
    description: "Mesafeleri ve boyları sorulduğunda tüm Türkiye'yi güldüren en samimi yanıt.",
    origin: "Twitch / Kick Yayını",
    year: "2020",
    badgeType: "cyan",
    longStory: "Yayıncının kendisine yöneltilen ısrarlı ve mantıksız teknik sorular karşısında patlayarak verdiği argo ama inanılmaz içten cevap. Herhangi bir şeyi bilmediğimizde verdiğimiz ilk tepkiye dönüştü.",
    quote: "Ölçmedim ki mın***!",
    viewsEstimate: "40M+ Gösterim"
  },
  {
    id: "m78",
    number: "#78",
    category: "Nostalji",
    title: "Alageyik Küçüktüm Ufacıktım",
    description: "Şiir okurken coşan ve tonlamalarıyla efsaneye dönüşen okul videosu klasiği.",
    origin: "Okul Etkinliği",
    year: "2010",
    badgeType: "amber",
    longStory: "İlkokul sahnesinde kravatı hafif yana kaymış öğrencinin, 'Küçüktüm ufacıktım!' mısrasını opera sanatçısı edasıyla ve teatral el hareketleriyle haykırması nostaljik internetin başyapıtlarındandır.",
    quote: "Küçüktüm ufacıktım, top oynadım acıktım!",
    viewsEstimate: "32M+ Gösterim"
  },
  {
    id: "m77",
    number: "#77",
    category: "Dizi & Kült Replik",
    title: "Kurabiye var simit var neye bakıyon?",
    description: "Kuzey Güney dizisinde fırın tezgahında geçen efsane racon sahnesi.",
    origin: "Kanal D · Kuzey Güney",
    year: "2011",
    badgeType: "pink",
    longStory: "Kuzey Tekinoğlu'nun fırında dururken dükkanı gözetleyen şüpheli şahsa ani çıkışı. Türk dizi tarihinin en çok taklit edilen ve caps'i yapılan diyaloglarındandır.",
    quote: "Kurabiye var, simit var, poğaça var... Neye bakıyon sen?!",
    viewsEstimate: "85M+ Gösterim"
  },
  {
    id: "m75",
    number: "#75",
    category: "TV Haberciliği",
    title: "Sayın Bezmenler Kapıyı Açar Mısınız?",
    description: "Uğur Dündar'ın villa baskınında kullandığı kibar ama demir yumruk anı.",
    origin: "Arena Haber",
    year: "1994",
    badgeType: "emerald",
    longStory: "Kaçak sanığın kapısını defalarca çalan Uğur Dündar'ın ardından korumalarla kavgaya tutuştuğu ve Türkçe internette efsanevi bir meme'e dönüşen habercilik klasiği.",
    quote: "Sayın Bezmenler kapıyı açar mısınız lütfen?",
    viewsEstimate: "30M+ Gösterim"
  }
];
