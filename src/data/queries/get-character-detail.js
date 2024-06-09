import { gql } from "@apollo/client";

export const GET_CHARACTER_DETAIL = gql`
  query GetCharacterDetail($id: ID!) {
    person(id: $id) {
      name
      height
      mass
      birthYear
      eyeColor
      gender
      hairColor
      skinColor
      homeworld {
        name
      }
      filmConnection {
        edges {
          node {
            title
            director
            releaseDate
            planetConnection {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
