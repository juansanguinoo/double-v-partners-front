import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $login: String
    $id: Int
    $nodeID: String
    $avatarURL: String
    $gravatarID: String
    $url: String
    $htmlURL: String
    $followersURL: String
    $followingURL: String
    $gistsURL: String
    $starredURL: String
    $subscriptionsURL: String
    $organizationsURL: String
    $reposURL: String
    $eventsURL: String
    $receivedEventsURL: String
    $type: String
    $siteAdmin: Boolean
    $name: String
    $company: String
    $blog: String
    $location: String
    $email: String
    $hireable: Boolean
    $bio: String
    $twitterUsername: String
    $publicRepos: Int
    $publicGists: Int
    $followers: Int
    $following: Int
    $createdAt: String
    $updatedAt: String
  ) {
    createUser(
      login: $login
      id: $id
      nodeID: $nodeID
      avatarURL: $avatarURL
      gravatarID: $gravatarID
      url: $url
      htmlURL: $htmlURL
      followersURL: $followersURL
      followingURL: $followingURL
      gistsURL: $gistsURL
      starredURL: $starredURL
      subscriptionsURL: $subscriptionsURL
      organizationsURL: $organizationsURL
      reposURL: $reposURL
      eventsURL: $eventsURL
      receivedEventsURL: $receivedEventsURL
      type: $type
      siteAdmin: $siteAdmin
      name: $name
      company: $company
      blog: $blog
      location: $location
      email: $email
      hireable: $hireable
      bio: $bio
      twitterUsername: $twitterUsername
      publicRepos: $publicRepos
      publicGists: $publicGists
      followers: $followers
      following: $following
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      login
      avatarURL
      htmlURL
    }
  }
`;

export const GET_USERS = gql`
  {
    getAllUsers {
      id
      login
      company
    }
  }
`;
