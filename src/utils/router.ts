const joinPaths = (...str: string[]) => {
  let s = str
    .map((s) => {
      // If the string starts with /, remove it
      s = s.startsWith("/") ? s.substr(0, s.length) : s;
      // If the string starts with /, remove it
      s = s.endsWith("/") ? s.substr(0, s.length - 1) : s;

      return s;
    })
    // Join paths
    .join("/");

  // Remove ending /
  s = s.substr(0, s.length - 1);

  return s;
};

export { joinPaths };
