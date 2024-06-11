import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries/get-characters";
import { GET_CHARACTER_DETAIL } from "../queries/get-character-detail";

export const useGetCharacters = () => {
  return useQuery(GET_CHARACTERS);
};

export const useGetCharacterById = (variable) => {
  return useQuery(GET_CHARACTER_DETAIL, variable);
};