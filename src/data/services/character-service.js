import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "../queries/get-characters"

export const useGetCharacters = () => {
    return useQuery(GET_CHARACTERS);
};

