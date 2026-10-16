import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Meme yarışması nedir?",
    a: "Meme Yarışması, Türk internet kültürünün viral video memelerini ne kadar iyi tanıdığını ölçen ücretsiz bir bilgi yarışmasıdır. Her soruda bir meme videosu ya da görseli çıkar; o memenin hangi sözle meşhur olduğunu dört şık arasından bulursun. Sorular dizilerden, sokak röportajlarından, spor programlarından ve TikTok canlı yayınlarından memeleşmiş sözlerden hazırlanır."
  },
  {
    q: "Meme yarışmasını oynamak ücretsiz mi?",
    a: "Evet, tamamen ücretsizdir! Herhangi bir abonelik veya ödeme talep edilmez. Tüm oyun modlarına sınırsız ve anında erişebilirsiniz."
  },
  {
    q: "Nasıl kayıt olabilirim?",
    a: "Kayıt olmak için sadece bir kullanıcı adı, geçerli bir e-posta ve şifre yeterlidir. Tek başına oynamak ve Günlük Mücadele'ye katılmak için üyelik zorunlu değildir; fakat 1v1 düellolarda skorunu kaydetmek ve lider tablosunda yer almak için kayıt olmanız önerilir."
  },
  {
    q: "Hangi oyun modları var?",
    a: "Klasik Mod (kendi hızında), Hız Modu (soru başı 10 saniye), Sonsuz Mod (sorular bitene kadar), Hardcore Mod (3 can hakkı) ve Arkadaşlarla Oyna (1v1 canlı düello) modları bulunmaktadır."
  },
  {
    q: "Arkadaşımla nasıl yarışırım?",
    a: "1v1 Düello modunda 'Hemen Eşleş' butonuna basarak anında rastgele bir rakiple eşleşebilir ya da özel oda bağlantısı alarak arkadaşını düelloya davet edebilirsin. İkiniz aynı anda soruları çözer ve anlık skor tablosunu görürsünüz."
  },
  {
    q: "Sorular hangi konulardan geliyor?",
    a: "Türk dizi sahneleri (Kuzey Güney, Kurtlar Vadisi, Ezel vb.), YouTube sokak röportajları (Sarı Mikrofon vb.), unutulmaz spor programı tartışmaları, nostaljik ana haber bülteni gafları ve TikTok/Twitch canlı yayın akımlarından derlenmektedir."
  },
  {
    q: "Meme ansiklopedisi nedir?",
    a: "Yarışmadaki her memenin ne anlama geldiğini, ne zaman ve hangi kanalda çıktığını belgeleyen interaktif bir arşivdir. Kökeni, kültürel etkisi ve doğru repliği detaylıca incelenir."
  },
  {
    q: "Kendi meme önerimde bulunabilir miyim?",
    a: "Evet! 'Meme Öner' butonu üzerinden video linkini, doğru repliği ve şıkları göndererek yarışma soru havuzuna katkıda bulunabilirsin. Onaylanan sorular isminle birlikte yayınlanır."
  },
  {
    q: "Lider tablosu nasıl çalışır?",
    a: "Skor tablosu tamamlanan yarışmaları takma adla listeler: Bugün, Son 7 Gün, Son 30 Gün ve Tüm Zamanlar olarak 4 farklı zaman diliminde filtrelenebilir. Puanlar doğruluk sayısı ve cevap hızına göre hesaplanır."
  },
  {
    q: "Mobilde oynayabilir miyim?",
    a: "Kesinlikle. Uygulama indirmenize gerek yoktur. Telefon, tablet veya masaüstü bilgisayarınızın web tarayıcısından tek tıkla tam ekran akıcı şekilde oynayabilirsiniz."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-[#0d0c1d]" id="sss-bolumu">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#1f1e2f] border border-white/5 flex items-center justify-center text-[#4cd7f6]">
            <span className="material-symbols-outlined text-[20px]">help_center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#f8fafc] uppercase tracking-tight">
            SIKÇA SORULAN SORULAR
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Meme Yarışması nasıl oynanır, kurallar ve merak edilen tüm cevaplar burada.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="flex flex-col gap-2.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#141226] border border-white/5 overflow-hidden shadow-sm transition-all text-left"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-[#1f1e2f] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-white">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#94a3b8] transition-transform duration-200 shrink-0 ml-2 ${
                      isOpen ? 'rotate-180 text-[#f751a1]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#94a3b8] leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
