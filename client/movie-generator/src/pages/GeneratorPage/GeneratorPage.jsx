import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ColorPallete from '../../components/ColorPallete/ColorPallete';

export default function GeneratorPage() {
    const [colors, setColors] = useState([]);
    const [isLoadingList, setLoadingList] = useState(true);
    const { mood } = useParams();
    console.log(mood);

  let baseUrl = "http://localhost:8080/generator"
    useEffect(() => {
        const fetchColors = async() => {
            try {
                const response = await axios.get(`${baseUrl}/${mood}`)
                console.log(response.data);
                setLoadingList(false);

                if(response) {
                    setColors(response.data);
                }
            } catch(e) {
                console.log("Error fetching data", e);
            }
        }
        fetchColors();
    }, []);
    
    console.log(colors);

    
    //if data is still loading, display loading page
    if(isLoadingList) {
        return <div>Loading page ...</div>
    };

  return (
    <section>
        <div>
            <h1>Generator Page</h1>
            <p>Selected mood: {mood}</p>
        </div>
        <div>
            <h2>Your personalized color pallette</h2>
            <ColorPallete colors={colors}/>
        </div>
        <div>
            <h2>Movie Recommendations:</h2>
            <div>
                
            </div>
        </div>
        <div>
            <h2>Playlist Recommendations:</h2>
            <div>
                
            </div>
        </div>
        <div>
            <h2>Recipe Recommendations:</h2>
            <div>
                
            </div>
        </div>
    </section>
  );
}