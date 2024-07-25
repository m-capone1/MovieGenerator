import { useParams } from 'react-router-dom';

export default function GeneratorPage() {
  const { mood } = useParams();

  return (
    <div>
      <h1>Generator Page</h1>
      <p>Mood: {mood}</p>
    </div>
  );
}