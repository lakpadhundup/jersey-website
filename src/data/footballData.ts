export interface League {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  country: string;
}

export interface Club {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  leagueId: string;
  primaryColor: string;
  secondaryColor: string;
  jerseys: {
    home: JerseyConfig;
    away: JerseyConfig;
    third: JerseyConfig;
  };
}

export interface JerseyConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  pattern?: 'solid' | 'stripes' | 'gradient';
}

export const leagues: League[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    shortName: 'PL',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg',
    country: 'England',
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    shortName: 'LL',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/LaLiga_EA_Sports_2023_Vertical_Logo.svg',
    country: 'Spain',
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'BL',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg',
    country: 'Germany',
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    shortName: 'SA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Serie_A_logo_2022.svg',
    country: 'Italy',
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    shortName: 'L1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ligue1.svg/800px-Ligue1.svg.png',
    country: 'France',
  },
];

export const clubs: Club[] = [
  // Premier League
  {
    id: 'arsenal',
    name: 'Arsenal',
    shortName: 'ARS',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    leagueId: 'premier-league',
    primaryColor: '#EF0107',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#EF0107', secondaryColor: '#FFFFFF', accentColor: '#063672', pattern: 'solid' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#063672', accentColor: '#EF0107', pattern: 'solid' },
      third: { primaryColor: '#063672', secondaryColor: '#EF0107', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    shortName: 'CHE',
    logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
    leagueId: 'premier-league',
    primaryColor: '#034694',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#034694', secondaryColor: '#FFFFFF', accentColor: '#DBA111', pattern: 'solid' },
      away: { primaryColor: '#1E1E1E', secondaryColor: '#FFFFFF', accentColor: '#034694', pattern: 'solid' },
      third: { primaryColor: '#6CABDD', secondaryColor: '#FFFFFF', accentColor: '#034694', pattern: 'gradient' },
    },
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    shortName: 'LIV',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    leagueId: 'premier-league',
    primaryColor: '#C8102E',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#C8102E', secondaryColor: '#FFFFFF', accentColor: '#00A398', pattern: 'solid' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#C8102E', accentColor: '#1E1E1E', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#00A398', accentColor: '#C8102E', pattern: 'solid' },
    },
  },
  {
    id: 'man-city',
    name: 'Manchester City',
    shortName: 'MCI',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    leagueId: 'premier-league',
    primaryColor: '#6CABDD',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#6CABDD', secondaryColor: '#FFFFFF', accentColor: '#1C2C5B', pattern: 'solid' },
      away: { primaryColor: '#1E1E1E', secondaryColor: '#6CABDD', accentColor: '#FFFFFF', pattern: 'solid' },
      third: { primaryColor: '#FFC659', secondaryColor: '#1C2C5B', accentColor: '#6CABDD', pattern: 'solid' },
    },
  },
  {
    id: 'man-utd',
    name: 'Manchester United',
    shortName: 'MUN',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
    leagueId: 'premier-league',
    primaryColor: '#DA291C',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#DA291C', secondaryColor: '#FFFFFF', accentColor: '#FBE122', pattern: 'solid' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#DA291C', accentColor: '#1E1E1E', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#DA291C', accentColor: '#FBE122', pattern: 'solid' },
    },
  },
  {
    id: 'tottenham',
    name: 'Tottenham Hotspur',
    shortName: 'TOT',
    logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg',
    leagueId: 'premier-league',
    primaryColor: '#132257',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#FEFEFE', secondaryColor: '#132257', accentColor: '#132257', pattern: 'solid' },
      away: { primaryColor: '#132257', secondaryColor: '#FFFFFF', accentColor: '#FEFEFE', pattern: 'solid' },
      third: { primaryColor: '#00B2A9', secondaryColor: '#132257', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
  // La Liga
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    shortName: 'BAR',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    leagueId: 'la-liga',
    primaryColor: '#004D98',
    secondaryColor: '#A50044',
    jerseys: {
      home: { primaryColor: '#004D98', secondaryColor: '#A50044', accentColor: '#FFED02', pattern: 'stripes' },
      away: { primaryColor: '#1E1E1E', secondaryColor: '#FFED02', accentColor: '#004D98', pattern: 'solid' },
      third: { primaryColor: '#EDBB00', secondaryColor: '#004D98', accentColor: '#A50044', pattern: 'solid' },
    },
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    shortName: 'RMA',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    leagueId: 'la-liga',
    primaryColor: '#FEFEFE',
    secondaryColor: '#00529F',
    jerseys: {
      home: { primaryColor: '#FEFEFE', secondaryColor: '#00529F', accentColor: '#EE324E', pattern: 'solid' },
      away: { primaryColor: '#00529F', secondaryColor: '#FEFEFE', accentColor: '#EE324E', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#EE324E', accentColor: '#00529F', pattern: 'solid' },
    },
  },
  {
    id: 'atletico',
    name: 'Atlético Madrid',
    shortName: 'ATM',
    logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg',
    leagueId: 'la-liga',
    primaryColor: '#CB3524',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#CB3524', secondaryColor: '#FFFFFF', accentColor: '#272E61', pattern: 'stripes' },
      away: { primaryColor: '#272E61', secondaryColor: '#FFFFFF', accentColor: '#CB3524', pattern: 'solid' },
      third: { primaryColor: '#FEFEFE', secondaryColor: '#CB3524', accentColor: '#272E61', pattern: 'solid' },
    },
  },
  // Bundesliga
  {
    id: 'bayern',
    name: 'Bayern Munich',
    shortName: 'BAY',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg',
    leagueId: 'bundesliga',
    primaryColor: '#DC052D',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#DC052D', secondaryColor: '#FFFFFF', accentColor: '#0066B2', pattern: 'solid' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#DC052D', accentColor: '#1E1E1E', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#DC052D', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
  {
    id: 'dortmund',
    name: 'Borussia Dortmund',
    shortName: 'BVB',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg',
    leagueId: 'bundesliga',
    primaryColor: '#FDE100',
    secondaryColor: '#000000',
    jerseys: {
      home: { primaryColor: '#FDE100', secondaryColor: '#000000', accentColor: '#FFFFFF', pattern: 'solid' },
      away: { primaryColor: '#1E1E1E', secondaryColor: '#FDE100', accentColor: '#FFFFFF', pattern: 'solid' },
      third: { primaryColor: '#FEFEFE', secondaryColor: '#000000', accentColor: '#FDE100', pattern: 'solid' },
    },
  },
  // Serie A
  {
    id: 'juventus',
    name: 'Juventus',
    shortName: 'JUV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg',
    leagueId: 'serie-a',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#000000', secondaryColor: '#FFFFFF', accentColor: '#DBA111', pattern: 'stripes' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#000000', accentColor: '#DBA111', pattern: 'solid' },
      third: { primaryColor: '#DBA111', secondaryColor: '#000000', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
  {
    id: 'ac-milan',
    name: 'AC Milan',
    shortName: 'ACM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg',
    leagueId: 'serie-a',
    primaryColor: '#FB090B',
    secondaryColor: '#000000',
    jerseys: {
      home: { primaryColor: '#FB090B', secondaryColor: '#000000', accentColor: '#FFFFFF', pattern: 'stripes' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#FB090B', accentColor: '#000000', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#FB090B', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
  {
    id: 'inter-milan',
    name: 'Inter Milan',
    shortName: 'INT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg',
    leagueId: 'serie-a',
    primaryColor: '#0068A8',
    secondaryColor: '#000000',
    jerseys: {
      home: { primaryColor: '#0068A8', secondaryColor: '#000000', accentColor: '#FFFFFF', pattern: 'stripes' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#0068A8', accentColor: '#000000', pattern: 'solid' },
      third: { primaryColor: '#FDB913', secondaryColor: '#000000', accentColor: '#0068A8', pattern: 'solid' },
    },
  },
  // Ligue 1
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    shortName: 'PSG',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    leagueId: 'ligue-1',
    primaryColor: '#004170',
    secondaryColor: '#DA291C',
    jerseys: {
      home: { primaryColor: '#004170', secondaryColor: '#DA291C', accentColor: '#FFFFFF', pattern: 'solid' },
      away: { primaryColor: '#FEFEFE', secondaryColor: '#004170', accentColor: '#DA291C', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#DA291C', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
  {
    id: 'marseille',
    name: 'Olympique Marseille',
    shortName: 'OM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg',
    leagueId: 'ligue-1',
    primaryColor: '#2FAEE0',
    secondaryColor: '#FFFFFF',
    jerseys: {
      home: { primaryColor: '#FEFEFE', secondaryColor: '#2FAEE0', accentColor: '#1E1E1E', pattern: 'solid' },
      away: { primaryColor: '#2FAEE0', secondaryColor: '#FFFFFF', accentColor: '#1E1E1E', pattern: 'solid' },
      third: { primaryColor: '#1E1E1E', secondaryColor: '#2FAEE0', accentColor: '#FFFFFF', pattern: 'solid' },
    },
  },
];

export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const jerseyPrice = 89.99;
export const customizationPrice = 15.00;
