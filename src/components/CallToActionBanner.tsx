import React from 'react';

interface CallToActionBannerProps {
  onStartQuiz: () => void;
  onInviteFriend: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onStartQuiz, onInviteFriend }) => {
  return (
    <section className="w-full px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#f751a1]/20 via-[#141226] to-[#4cd7f6]/20 border border-white/10 p-8 sm:p-14 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#f751a1] text-white flex items-center justify-center shadow-[0_0_25px_rgba(247,81,161,0.5)]">
          <span className="material-symbols-outlined text-[36px]">devices</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-2xl leading-tight">
          İndirme Yok. Kurulum Yok. <br />
          <span className="bg-gradient-to-r from-[#f751a1] via-[#ffb0cd] to-[#4cd7f6] bg-clip-text text-transparent">
            Tarayıcından Tek Tıkla
          </span>{' '}
          Yarışa Başla!
        </h2>

        <p className="text-base sm:text-lg text-[#94a3b8] max-w-xl leading-relaxed">
          Uygulama mağazalarında vakit kaybetme. Telefonunda, tabletinde ya da bilgisayarında tarayıcıyı aç ve hemen canlı oyna.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onStartQuiz}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#f751a1] to-[#b4136d] hover:brightness-110 active:scale-95 text-white font-bold text-base shadow-[0_0_30px_rgba(247,81,161,0.5)] transition-all hover:scale-105 cursor-pointer"
          >
            Hemen Ücretsiz Oyna
          </button>
          <button
            onClick={onInviteFriend}
            className="px-8 py-3.5 rounded-xl bg-[#29283a] hover:bg-[#39374a] text-white font-bold text-base transition-all hover:scale-105 active:scale-95 border border-white/5 cursor-pointer"
          >
            Arkadaşını Davet Et
          </button>
        </div>
      </div>
    </section>
  );
};
