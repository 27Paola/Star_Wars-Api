import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query GetCharacters {
        allPeople {
            edges {
                node {
                    id
                    name
                }
            }
        }
    } 
`;
