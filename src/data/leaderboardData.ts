export interface LeaderboardUser {
  rank: number;
  initials: string;
  name: string;
  title: string;
  stats: string;
  score: string;
  accuracy: string;
  badgeColor?: string;
  isCurrentUser?: boolean;
}

export type Timeframe = 'today' | 'week' | 'month' | 'all';

export const LEADERBOARD_DATA: Record<Timeframe, LeaderboardUser[]> = {
  today: [
    { rank: 1, initials: 'AY', name: 'Ahmet Y.', title: 'Meme Profesörü', stats: '10/10 Doğru', score: '14.250', accuracy: '98%', badgeColor: '#ffb95f' },
    { rank: 2, initials: 'BE', name: 'Boran_E', title: 'Caps Nostaljisti', stats: '10/10 Doğru', score: '13.890', accuracy: '95%', badgeColor: '#cbd5e1' },
    { rank: 3, initials: 'SD', name: 'SedaDundar', title: 'Viral Avcısı', stats: '9/10 Doğru', score: '12.740', accuracy: '90%', badgeColor: '#b45309' },
    { rank: 4, initials: 'MO', name: 'mert_online', title: 'Kuzeyci', stats: '9/10 Doğru', score: '11.950', accuracy: '89%' },
    { rank: 5, initials: 'GZ', name: 'Gizem_Z', title: 'Meme Dedektifi', stats: '9/10 Doğru', score: '11.420', accuracy: '87%' },
    { rank: 6, initials: 'TK', name: 'Tolga_K', title: 'Vine Ustası', stats: '8/10 Doğru', score: '10.810', accuracy: '84%' },
    { rank: 7, initials: 'BC', name: 'Berke_Can', title: 'Sokak Felsefecisi', stats: '8/10 Doğru', score: '9.950', accuracy: '82%' }
  ],
  week: [
    { rank: 1, initials: 'SD', name: 'SedaDundar', title: 'Viral Avcısı', stats: '70/70 Doğru', score: '94.200', accuracy: '99%', badgeColor: '#ffb95f' },
    { rank: 2, initials: 'AY', name: 'Ahmet Y.', title: 'Meme Profesörü', stats: '68/70 Doğru', score: '91.850', accuracy: '97%', badgeColor: '#cbd5e1' },
    { rank: 3, initials: 'MO', name: 'mert_online', title: 'Kuzeyci', stats: '65/70 Doğru', score: '87.120', accuracy: '93%', badgeColor: '#b45309' },
    { rank: 4, initials: 'BE', name: 'Boran_E', title: 'Caps Nostaljisti', stats: '63/70 Doğru', score: '84.400', accuracy: '90%' },
    { rank: 5, initials: 'EM', name: 'Emre_Kral', title: 'Replik Ustası', stats: '61/70 Doğru', score: '81.900', accuracy: '88%' }
  ],
  month: [
    { rank: 1, initials: 'AY', name: 'Ahmet Y.', title: 'Meme Profesörü', stats: '290/300 Doğru', score: '412.000', accuracy: '97%', badgeColor: '#ffb95f' },
    { rank: 2, initials: 'SD', name: 'SedaDundar', title: 'Viral Avcısı', stats: '284/300 Doğru', score: '398.500', accuracy: '95%', badgeColor: '#cbd5e1' },
    { rank: 3, initials: 'GZ', name: 'Gizem_Z', title: 'Meme Dedektifi', stats: '270/300 Doğru', score: '375.200', accuracy: '92%', badgeColor: '#b45309' },
    { rank: 4, initials: 'BE', name: 'Boran_E', title: 'Caps Nostaljisti', stats: '265/300 Doğru', score: '360.100', accuracy: '89%' }
  ],
  all: [
    { rank: 1, initials: 'AY', name: 'Ahmet Y.', title: 'Ebedi Meme İmparatoru', stats: '1.420 Doğru', score: '1.980.400', accuracy: '98%', badgeColor: '#ffb95f' },
    { rank: 2, initials: 'SD', name: 'SedaDundar', title: 'Büyük Üstat', stats: '1.380 Doğru', score: '1.870.200', accuracy: '96%', badgeColor: '#cbd5e1' },
    { rank: 3, initials: 'BE', name: 'Boran_E', title: 'Tarihçi', stats: '1.290 Doğru', score: '1.740.000', accuracy: '94%', badgeColor: '#b45309' }
  ]
};
