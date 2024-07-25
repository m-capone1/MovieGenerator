import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ColorPallete from '../../components/ColorPallete/ColorPallete';

export default function GeneratorPage() {
    const [colors, setColors] = useState([]);
    const [isLoadingList, setLoadingList] = useState(true);
    const { mood } = useParams();

  let baseUrl = "http://localhost:8080/generator"
    useEffect(() => {
        const fetchColors = async() => {
            try {
                const response = await axios.get(`${baseUrl}/${mood}`);
                setLoadingList(false);

                if(response) {
                    setColors(response.data);
                }
            } catch(e) {
                console.log("Error fetching data", e);
            }
        }
        fetchColors();

        const fetchSong = async() => {
            try {
                const response = await axios.post(`${baseUrl}/${mood}`, {prompt: "Take these hex colors and recommend a song that matches the vibe #F3FEB8, #FFDE4D, #FFB22C, #FF4C4C"})
                console.log(response);
                // setLoadingList(false);

                // if(response) {
                //     setColors(response.data);
                // }
            } catch(e) {
                console.log("Error fetching data", e);
            }
        }
        fetchSong();

    }, []);

    
    //if data is still loading, display loading page
    if(isLoadingList) {
        return <div>Loading page ...</div>
    };

  return (
    <section className='main'>
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
            <h2>Song Recommendations:</h2>
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