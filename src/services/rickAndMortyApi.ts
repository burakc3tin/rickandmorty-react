import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Error from "../components/Common/Error";

export interface Character {
    id: number;
    name: string;
    image: string;
    episode: string[];
}

const rickAndMortyApi = {
    isRequesting: false,
    getCharacters: async (): Promise<Character[]> => {
        if (rickAndMortyApi.isRequesting) {
            return [];
        }

        try {
            rickAndMortyApi.isRequesting = true;

            await new Promise((resolve) => setTimeout(resolve, 2500));

            const response = await axios.get(
                "https://rickandmortyapi.com/api/character"
            );
            const charactersWithExtras = response.data.results.map(
                (character: Character) => ({
                    ...character,
                    image: character.image || "default-image-url",
                    episodeCount: character.episode.length,
                })
            );

            return charactersWithExtras;
        } catch (error) {
            Error("An error occurred while fetching characters. Please try again.");
            return [];
        } finally {
            rickAndMortyApi.isRequesting = false;
        }
    },
};

export default rickAndMortyApi;
