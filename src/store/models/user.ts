import { Action, Computed, Model, Property } from "easy-peasy-decorators";

// The full pronouns format (eg. they/them/their/theirs) split into an array.
type Pronouns = [string, string, string, string];

interface Channel {
  id: string;
  name: string;
  type: "voice" | "text";
}

interface Role {
  id: string;
  name: string;
  color: string;
  // maybe more stuff later
}

interface ServerConfig {
  general: {
    agreeChannel?: Channel;
    easyTranslate: boolean;
    defaultLocale: string;
    disabledCommands: string[];
    prefix?: string;
  };
  roles: {
    assignableRoles: Role[];
    agreeRole?: Role;
    verifiedRole?: Role;
    staffRole?: Role;
    autoRoles: Role[];
    mutedRole?: Role;
  };
  greeting: {
    welcomeChannel?: Channel;
  };
  logging: {
    eventChannel?: Channel;
    messageChannel?: Channel;
    memberChannel?: Channel;
    modChannel?: Channel;
    excludeMessageLogging: Channel[];
    logBotMessages: boolean;
    inviteCaching: boolean;
  };
  music: {
    // maybe move to .roles instead?
    musicRole?: Role;
    musicChannel?: Channel;
    requesterOnlyControl: boolean;
  };
  pinboard: {
    pinboardChannel: boolean;
  };
  sniping: {
    enabled: boolean;
    ignoredChannels: Channel[];
    snipeInvites: boolean;
    staffOnlySniping: boolean;
  };
  automod: {
    antiInvite: boolean;
    antiMassMention: boolean;
    antiNewLines: boolean;
    antiRaid: boolean;
    antiSpam: boolean;
  };
}

interface Server {
  name: string;
  channels: Channel[];
  roles: Role;
  // isInvited: boolean, nope this out, better way is to check whether config is present
  config: ServerConfig | null;
}

// todo
interface User {
  profile: {
    bio: string;
    pronouns: Pronouns;
    locale: string;
    timezone: string;
    hideTimezone: boolean;
    gayness: number;
  };
  discord: {
    username: string;
    tag: string;
    avatar: string;
    servers: Server[];
  };
}

@Model("users")
class UserModel {
  @Property()
  public user: User | null =
    // @ts-ignore
    { discord: { tag: "Mia#0000" } };

  @Action()
  setUser(payload: User | null) {
    this.user = payload;
  }

  @Computed()
  get isAuthenticated() {
    return !!this.user;
  }
}

export { UserModel };
export default UserModel;
