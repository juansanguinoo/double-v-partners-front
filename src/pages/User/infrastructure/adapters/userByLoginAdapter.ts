import { IResponseUser } from "../../domain/models/IResponseUser";
import { UserByLoginModel } from "../../domain/models/UserByLoginModel";

export const adaptUserByLogin = (user: IResponseUser): UserByLoginModel => {
  return {
    login: user.login,
    id: user.id,
    nodeID: user.node_id,
    avatarURL: user.avatar_url,
    gravatarID: user.gravatar_id,
    url: user.url,
    htmlURL: user.html_url,
    followersURL: user.followers_url,
    followingURL: user.following_url,
    gistsURL: user.gists_url,
    starredURL: user.starred_url,
    subscriptionsURL: user.subscriptions_url,
    organizationsURL: user.organizations_url,
    reposURL: user.repos_url,
    eventsURL: user.events_url,
    receivedEventsURL: user.received_events_url,
    type: user.type,
    siteAdmin: user.site_admin,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    email: user.email,
    hireable: user.hireable,
    bio: user.bio,
    twitterUsername: user.twitter_username,
    publicRepos: user.public_repos,
    publicGists: user.public_gists,
    followers: user.followers,
    following: user.following,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
};

export const adaptUsersByLogin = (
  users: IResponseUser[]
): UserByLoginModel[] => {
  return users.map((user) => adaptUserByLogin(user));
};
