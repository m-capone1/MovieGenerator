import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ColorPallete from '../../components/ColorPallete/ColorPallete';

export default function GeneratorPage() {
    const [colors, setColors] = useState([]);
    const [isLoadingList, setLoadingList] = useState(true);
    const [song, setSong] = useState("");
    const [recipe, setRecipe] = useState("");
    const [movie, setMovie] = useState("");
    const { mood } = useParams();

    let baseUrl = "http://localhost:8080/generator";
    
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${mood}`);
                setLoadingList(false);

                if (response) {
                    setColors(response.data);
                }
            } catch (e) {
                console.log("Error fetching data", e);
            }
        };
        fetchColors();
    }, [mood]);

    useEffect(() => {
        const fetchSong = async () => {
            try {
                if (colors) {
                    let stringCols = colors.join();
                    
                    if (stringCols) {
                        const response = await axios.post(`${baseUrl}/${mood}`, { prompt: `Take these hex colors and recommend a song that matches the vibe: ${stringCols}. Don't mention the hex values of the colors in the response. Make the response fun and lighthearted.` });

                        if (response) {
                            setSong(response.data);
                        }
                    }
                }
            } catch (e) {
                console.log("Error fetching data", e);
            }
        };
        fetchSong();

        const fetchMovie = async () => {
            try {
                if (colors) {
                    let stringCols = colors.join();

                    if (stringCols) {
                        const response = await axios.post(`${baseUrl}/${mood}`, { prompt: `Take these hex colors and recommend a movie that matches the vibe: ${stringCols}. Don't mention the hex values of the colors in the response. Make the response fun and lighthearted.` });

                        if (response) {
                            setMovie(response.data);
                        }
                    }
                }
            } catch (e) {
                console.log("Error fetching data", e);
            }
        };
        fetchMovie();

        const fetchRecipe = async () => {
            try {
                if (colors) {
                    let stringCols = colors.join();

                    if (stringCols) {
                        const response = await axios.post(`${baseUrl}/${mood}`, { prompt: `Take these hex colors and recommend a recipe that matches the vibe: ${stringCols}. Don't mention the hex values of the colors in the response. Make the response fun and lighthearted.` });
                        if (response) {
                            setRecipe(response.data);
                        }
                    }
                }
            } catch (e) {
                console.log("Error fetching data", e);
            }
        };
        fetchRecipe();
    }, [colors, mood, baseUrl]);

    // if data is still loading, display loading page
    if (isLoadingList) {
        return <div>Loading page ...</div>;
    }

    return (
        <section className='main'>
            <div>
                <h1>Generator Page</h1>
                <p>Selected mood: {mood}</p>
            </div>
            <div>
                <h2>Your personalized color pallette</h2>
                <ColorPallete colors={colors} />
            </div>
            <div>
                <h2>Song Recommendations:</h2>
                <div>
                    {song}
                </div>
            </div>
            <div>
                <h2>Movie Recommendations:</h2>
                <div>
                    {movie}
                </div>
            </div>
            <div>
                <h2>Recipe Recommendations:</h2>
                <div>
                    {recipe}
                </div>
            </div>
        </section>
    );
}