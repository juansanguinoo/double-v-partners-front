import { IResponseUsers } from "../../domain/models/IResponseUsers";
import { UserModel } from "../../domain/models/UserModel";

export const adaptUser = (user: IResponseUsers): UserModel => {
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
    score: user.score,
  };
};

export const adaptUsers = (users: IResponseUsers[]): UserModel[] => {
  return users.map((user) => adaptUser(user));
};
