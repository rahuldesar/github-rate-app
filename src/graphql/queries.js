import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql `
  query Repositories {
    repositories {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          ownerName
          name
          createdAt
          description
          forksCount
          fullName
          language
          ownerAvatarUrl
          reviewCount
          ratingAverage
          stargazersCount
        }
      }
    }
  }
`