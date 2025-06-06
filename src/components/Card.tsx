import type { Song } from '../types';

type Props = {
  song: Song;
};

const Card = ({ song }: Props) => {
  return (
    <div className="bg-zinc-800 text-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={song.image} alt={song.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.artist}</p>
        <p className="text-xs text-gray-500">{song.duration}</p>
        <button className="mt-3 w-full py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded">▶️ Play</button>
      </div>
    </div>
  );
};

export default Card;
