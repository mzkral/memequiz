export interface QuizQuestion {
  id: string;
  category: string;
  sceneTitle: string;
  question: string;
  imageUrl: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  origin: string;
  year?: string;
}

export const MEME_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    category: "Dizi & Kült Replik",
    sceneTitle: "Kuzey Güney Dizisi",
    question: "Kuzey fırında dururken içeri giren adama tam olarak ne dedi?",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsx_ZShZ1BPxcBPXvPWMlytApPKOmxMH3tOHMdM0dJBNs9Cfw-kNlQIB8HehwOYYgHBAhqyBQYwjUnEAFYvgvg0QesagSyIYyFcVNkxcu_iqnLi_S52Jg_G6oYk20ohgdc5U7xO7O2WYf5YWfAmtddzmsCqZbw8jYfgtwMt_6JOiT2c82Jgky2ZrAlUColP04okE3jgLjinfyj1z0uZ5H5fICyAbS-YzQrvngzT7ft-1zUH66y9SI",
    options: [
      "Ekmek kalmadı kardeş, sonra gel.",
      "Kurabiye var simit var neye bakıyon?",
      "Sen bizim fırını mı kesiyorsun bilader?",
      "Biz de birileriyiz yani bilader!"
    ],
    correctIndex: 1,
    explanation: "Kıvanç Tatlıtuğ'un canlandırdığı Kuzey Tekinoğlu karakterinin fırında tezgahta dururken dükkana bakan müşteriye çıkıştığı ve efsaneleşen repliği.",
    origin: "Kanal D · Kuzey Güney",
    year: "2011"
  },
  {
    id: "q2",
    category: "Sokak Röportajı",
    sceneTitle: "Sarı Mikrofon Efsanesi",
    question: "Sokak röportajında 'Nerelisin?' sorusuna verilen en absürt viral cevap hangisidir?",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    options: [
      "Kaplumbağa deden!",
      "Kaplumbağa ninen!",
      "Ben buralıyım ama oralıyım da.",
      "Ankara ayağını denk alsın!"
    ],
    correctIndex: 1,
    explanation: "Röportajda gencin hızlıca ve hiç düşünmeden 'Kaplumbağa ninen!' cevabı verip gülmesi milyonlarca kez paylaşıldı.",
    origin: "Sarı Mikrofon YouTube",
    year: "2016"
  },
  {
    id: "q3",
    category: "Canlı Yayın & TV",
    sceneTitle: "Canlı Yayın Yarışması",
    question: "SMS oylaması sırasında sunucunun dakikalarca bağırdığı o meşhur numara hangisidir?",
    imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
    options: [
      "3340",
      "4380",
      "5555",
      "7890"
    ],
    correctIndex: 1,
    explanation: "Gecenin köründe yayınlanan yarışma programında sunucunun 'Evet 4380'e SMS gönderin, dört bin üç yüz sekseeeen!' haykırışları nostalji meme oldu.",
    origin: "Televizyon Yarışması",
    year: "2008"
  },
  {
    id: "q4",
    category: "Haber Bülteni & Röportaj",
    sceneTitle: "Cami Çıkışı Röportajı",
    question: "Mikrofon uzatılan imam ciddiyetini korumak isterken hangi cümleden sonra kahkahaya boğulmuştur?",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    options: [
      "Ben hocayım, öyle şeylere karışmam.",
      "Ben imamım gülmem!",
      "Cemaate selam olsun.",
      "Kamera önünde konuşmayı sevmem."
    ],
    correctIndex: 1,
    explanation: "Muhabire 'Ben imamım gülmem' dedikten hemen 1 saniye sonra kontrolsüzce kahkaha atan hocamızın samimi karesi.",
    origin: "Ana Haber Bülteni",
    year: "2014"
  },
  {
    id: "q5",
    category: "Amatör Video & Nostalji",
    sceneTitle: "Doğum Günü Kutlaması",
    question: "Pastanın maytabı patlayınca ailenin telaşla bağırdığı o efsanevi isim kimdi?",
    imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    options: [
      "İyi ki doğdun Muzaffer!",
      "Üfle mumu Cengiz!",
      "Kaçın patlayacak!",
      "Pasta yandı anne!"
    ],
    correctIndex: 0,
    explanation: "Ev ortamında doğum günü kutlanırken pasta üstündeki fişeğin alev almasıyla başlayan 'İyi ki doğdun Muzaffeeeer!' çığlıkları tarihe geçti.",
    origin: "Ev Videosu / YouTube",
    year: "2012"
  },
  {
    id: "q6",
    category: "Sokak Röportajı",
    sceneTitle: "Başkent Sokakları",
    question: "Sarı Mikrofon'da genç delikanlının kameraya doğru parmak sallayarak söylediği tehditkar replik nedir?",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
    options: [
      "İstanbul haddini bilsin!",
      "Ankara ayağını denk alsın!",
      "Bizim mahallede kuş uçmaz!",
      "Bize her yer Paris bilader!"
    ],
    correctIndex: 1,
    explanation: "Arkadaşlarıyla sokakta yürürken 'Ankara ayağını denk alsın oğlum' diyerek kamerayı işaret eden delikanlının viral repliği.",
    origin: "Sarı Mikrofon",
    year: "2017"
  },
  {
    id: "q7",
    category: "Araştırmacı Gazetecilik",
    sceneTitle: "Uğur Dündar Efsane Baskını",
    question: "Uğur Dündar'ın villanın demir kapısını yumruklarken söylediği tarihi cümle nedir?",
    imageUrl: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=800&q=80",
    options: [
      "Polis var açın o kapıyı!",
      "Sayın Bezmenler kapıyı açar mısınız lütfen?",
      "Kaçamazsınız hesap vereceksiniz!",
      "Halk adına buradayız!"
    ],
    correctIndex: 1,
    explanation: "Uğur Dündar'ın Amerika'daki villa kapısında 'Sayın Bezmenler kapıyı açar mısınız lütfen?' diyerek tarihe geçen nezaketli ama kararlı baskını.",
    origin: "Arena Programı",
    year: "1994"
  },
  {
    id: "q8",
    category: "Sosyal Medya & Canlı Yayın",
    sceneTitle: "Yayıncı Soru Cevap",
    question: "Yayıncının kendisine yöneltilen 'Kaç metre? Kaç kilo?' gibi sorulara verdiği bıkkın yanıt nedir?",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    options: [
      "Bilmiyorum ki.",
      "Ölçmedim ki mın***",
      "Bunu nereden bileyim?",
      "Tartıya çıkmadım henüz."
    ],
    correctIndex: 1,
    explanation: "Canlı yayında sürekli absürt ölçüler sorulması üzerine gelen ve samimiyetiyle tüm TikTok ve Twitch'e yayılan sansürlü efsane tepki.",
    origin: "Canlı Yayın",
    year: "2021"
  },
  {
    id: "q9",
    category: "Okul & Nostalji",
    sceneTitle: "İlkokul Şiir Okuma",
    question: "Şiir okurken mimikleri ve coşkusuyla devleşen çocuğun okuduğu şiirin adı nedir?",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    options: [
      "Alageyik - Küçüktüm ufacıktım",
      "Benim Güzel Okulum",
      "Sakarya Türküsü",
      "Atatürk Gülümsedi"
    ],
    correctIndex: 0,
    explanation: "'Küçüktüm ufacıktım, top oynadım acıktım' mısralarını teatral bir başkaldırıyla seslendiren küçük kardeşimizin unutulmaz okul performansı.",
    origin: "Okul Müsameresi",
    year: "2010"
  },
  {
    id: "q10",
    category: "Sokak Felsefesi",
    sceneTitle: "Güngören Sokakları",
    question: "Dayının atasözünü kendine has bir üslupla güncelleyerek söylediği o meşhur felsefe nedir?",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    options: [
      "Çok gezen çok bilir.",
      "Çok gezenin ayağına b*k bulaşır.",
      "Evinde oturana kimse karışmaz.",
      "Az yaşayan az yanılır."
    ],
    correctIndex: 1,
    explanation: "Atasözünü 'Çok gezen çok okuyan değil, çok gezenin ayağına b*k bulaşır' şeklinde bitirerek muhabiri şaşkına çeviren amcanın derin hayat tecrübesi.",
    origin: "Sarı Mikrofon",
    year: "2018"
  }
];
