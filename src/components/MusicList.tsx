import Card from './Card';
import Container from './Container';
import type { Song } from '../types';

const songs: Song[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    image: 'https://via.placeholder.com/300/000000/ffffff?text=Blinding+Lights',
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:24',
    image: 'https://via.placeholder.com/300/111111/ffffff?text=Levitating',
  },
  {
    id: '3',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    duration: '5:01',
    image: 'https://via.placeholder.com/300/222222/ffffff?text=Teen+Spirit',
  },
  {
    id: '4',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    duration: '5:55',
    image: 'https://via.placeholder.com/300/333333/ffffff?text=Bohemian+Rhapsody',
  },
  {
    id: '5',
    title: 'So What',
    artist: 'Miles Davis',
    duration: '9:22',
    image: 'https://via.placeholder.com/300/444444/ffffff?text=So+What',
  },
  {
    id: '6',
    title: 'Take Five',
    artist: 'Dave Brubeck',
    duration: '5:24',
    image: 'https://via.placeholder.com/300/555555/ffffff?text=Take+Five',
  },
  {
    id: '7',
    title: 'Chillhop Vibes',
    artist: 'Lo-Fi Beats',
    duration: '2:55',
    image: 'https://via.placeholder.com/300/666666/ffffff?text=Chillhop',
  },
  {
    id: '8',
    title: 'Night Drive',
    artist: 'Lofi Girl',
    duration: '3:10',
    image: 'https://via.placeholder.com/300/777777/ffffff?text=Night+Drive',
  },
];

const MusicList = () => {
  return (
    <Container>
      <h2 className="text-2xl font-bold mb-6">Recomendaciones</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {songs.map((song) => (
          <Card key={song.id} song={song} />
        ))}
      </div>
    </Container>
  );
};

export default MusicList;
