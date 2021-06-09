const name = "Hibiki";

const slogan = "The ultimate all-in-one Discord bot.";

const kofi = "https://ko-fi.com/sysdotini";

const redirects: Record<string, string> = {
  "/invite": "https://discord.com/login?redirect_to=/oauth2/authorize?client_id=493904957523623936&scope=bot&permissions=1581116663",
  "/discord": "/support",
  "/support": "https://discord.com/invite/gZEj4sM",
  "/contribute": "https://github.com/sysdotini/hibiki",
  "/login": "/invite", // TODO
  "/vote": "https://top.gg/bot/493904957523623936/vote",
  "/privacy": "https://github.com/sysdotini/hibiki/blob/main/.github/PRIVACY_POLICY.md",
  "/kofi": kofi,
};

// Some helpers
const external = {
  target: "_blank",
  rel: "noopenner noreferrer",
};

const asExternal = (obj: object) => ({ ...obj, ...external });

export { name, slogan, redirects, kofi, external, asExternal };
