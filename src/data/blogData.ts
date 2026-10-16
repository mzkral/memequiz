export interface BlogPost {
  id: string;
  tag: string;
  tagColor: 'cyan' | 'pink' | 'amber';
  subtitle: string;
  title: string;
  imageUrl: string;
  readTime: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    tag: "VERİ ANALİZİ",
    tagColor: "cyan",
    subtitle: "51.680 Cevaptan Çıkan Liste",
    title: "Düellolarda En Zor Memeler: Oyuncuların En Çok Yanıldığı 10 Replik",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuApSf2LSfaA9XLotHXfQtcvegafjdceLAYoTQJOC3owgkp0X4F5VaSt29A8wSba8DP868BH-0bH1V2-Pxp0RqFMePkgXc-qjU323TGe3bHB_s525Ezb-W_poZVWSmbo5WtHyR3Nd2BWyK9obCzjYXNsyocARE3lIOqGcq3ayZ6lsgn4vznKdXktJTlDHxHXW3-0mF0eCU9yzoahgfgWuAe_UMc6VRtlt87w5tEmk4CI4DgovBPThEs",
    readTime: "4 dk okuma",
    content: [
      "Meme Yarışması arenasında bugüne kadar çözülen 51.000'den fazla 1v1 düello kaydını inceledik. Ortaya çıkan veri tablosu oldukça şaşırtıcı!",
      "Oyuncuların %64'ü 'Kaplumbağa deden' ile 'Kaplumbağa ninen' arasındaki farkta tereddüt edip yanlış şıkka basıyor. Benzer şekilde 2000'lerin SMS numarası olan '4380' sorulduğunda, kullanıcılar çoğunlukla 3340 veya 5555 şıklarını işaretliyor.",
      "İkinci en çok karıştırılan kategori ise Türk dizi replikleri. 'Kuzey Güney' fırın sahnesinde repliğin 'Kurabiye var simit var neye bakıyon?' şeklindeki tam sıralaması, heyecan ve süre baskısı altında oyuncuları yanıltabiliyor.",
      "Tavsiyemiz: Hız modunda acele etmek puan getirir ancak hardcore modunda can kaybetmemek için videodaki mimiklere ve sahneye 2 saniye odaklanmak kazanma şansınızı %40 artırıyor."
    ]
  },
  {
    id: "blog-2",
    tag: "TARİHÇE",
    tagColor: "pink",
    subtitle: "Caps'ten Video Memelere",
    title: "Türk Meme Kültürünün Evrimi: 2010 Kırmızı Şeritlerden 2025 Canlı Yayınlarına",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_sESM1-ASUNufJuQchlGMybJLr_aPryty_aPaScZtyONxvhedretIks9D5EC8vmYi98wYxb6VZbb6NAgy4ZrJBb_hePMMx2T6mKR3pkGlJvHRyw3kAY5ANVYBA0JwSdp6Ob-L64OyXSzLRMWVD8VuQkKkDIpHuCnf3DwiPDpMl8byTFGL9-vnIo9E-1sHTtwha-Ny2CO3UpSkOM8krFTt4DxqKI50wGfdu8HQGMMyvZonRkXXXA",
    readTime: "6 dk okuma",
    content: [
      "Türkiye'de dijital mizah kültürü, 2010'lu yılların başında Bobiler ve ardından meşhur 'kırmızı şeritli caps' dalgasıyla patlak verdi. Paint ile kırpılmış fotoğrafların altına beyaz Comic Sans fontuyla yazılan 'öyle bir şey yok ama olsaydı fena olurdu' esprileri bütün ülkeyi sardı.",
      "2015 sonrasında YouTube'un yükselişiyle birlikte sokak röportajları birer mizah fabrikasına dönüştü. Sarı Mikrofon gibi kanalların halkın içine inmesi, beklenmedik anlarda doğaçlama efsanelerin doğmasını sağladı.",
      "Bugün ise TikTok ve Twitch gibi canlı platformlarda, anlık tepkiler ve 3 saniyelik ses kayıtları saatler içerisinde milyonlarca videoya arka plan sesi oluyor. Meme kültürü artık statik bir görsel değil, yaşayan bir dil haline geldi."
    ]
  },
  {
    id: "blog-3",
    tag: "REHBER",
    tagColor: "amber",
    subtitle: "Üretici Tavsiyeleri",
    title: "Meme Nasıl Yapılır? İnternette Viral Olacak İçerik Üretmenin 5 Altın Kuralı",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd3BHbRkmknCZBsyHCtOv6IIa8Y4mHblqDkb770Ue_gieJNkkG3kxDl76UOBUciTcXHAq-3yvgVfJNlwDoFIhwlkscOQt5gjRzIw1wLp5TnQiNeyfOv8S7q0g8PIFhxk6NAUM2aEZpJ7SxDbte9N1WHrWPygOojWv4J16WQUTac5Xhu706y2ygSxYwvOdIrLl_IC-8634zYlxHF9bmPSxJ1KyJs9fiCAzax829HCrInLhH2YcWvHw",
    readTime: "5 dk okuma",
    content: [
      "1. Doğallık Zirvedir: Zorlama komedi asla tutmaz. En çok paylaşılan memeler, tamamen plansız ve içten anlardan çıkar.",
      "2. Kısa ve Öz Replikler: İnsanların günlük konuşma dilinde taklit edebileceği tek cümlelik kalıplar (Örn: 'Biz de birileriyiz yani', 'Ölçmedim ki') akılda kalır.",
      "3. Ses ve Ritim Uyumu: TikTok ve Reels'ta sesin vurucu ritmi, izleyicinin videoyu tekrar tekrar dinlemesini sağlar.",
      "4. Zamanlama ve Bağlam: Toplumun o an tartıştığı veya hissettiği bir duyguya tercüman olmak viralliği 10'a katlar.",
      "5. Meme Yarışması'na Gönderin: Kendi keşfettiğiniz veya kurguladığınız viral klibi sitemizin 'Meme Öner' panelinden göndererek topluluğun oylamasına sunun!"
    ]
  }
];
