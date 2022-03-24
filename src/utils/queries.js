import { gql } from "@apollo/client";

export const getOffices = gql`
  query allOffices {
    escritorios {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          content_escritorio {
            summary
            label
            link
          }
        }
      }
    }
  }
`;

export const getLocations = gql`
  query allLocations {
    escritorios {
      edges {
        node {
          id
          title
          content_escritorio {
            summary
          }
        }
      }
    }
  }
`;

export const getProducts = gql`
  query allProducts {
    produtos {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`;

export const getQualitiesAndPrizes = gql`
  query allPrizesAndQualities {
    premios {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    valores {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`;

export const getAllNationalDestinations = gql`
  query allNationalDestinations {
    destinosNacionais {
      edges {
        node {
          custom_destinations_fields {
            stateCountry
            summary
          }
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          slug
          title
        }
      }
    }
  }
`;

export const getAllNationalDestinationsSlugs = gql`
  query allNationalDestinations {
    destinosNacionais {
      nodes {
        slug
      }
    }
  }
`;

export const getNationalDestinationBySlug = gql`
  query nationalDestinationBySlug($slug: String!) {
    destinoNacionalBy(slug: $slug) {
      custom_destinations_fields {
        content
      }
      title
    }
  }
`;
