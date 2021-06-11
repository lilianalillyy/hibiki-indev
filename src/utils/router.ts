const joinPaths = (...str: string[]) => {
  let s = str
    .map((s) => {
      // If the string starts with /, remove it
      s = s.startsWith("/") ? s.substr(1, s.length) : s;
      // If the string starts with /, remove it
      s = s.endsWith("/") ? s.substr(0, s.length - 1) : s;

      return s;
    })
    // Join paths
    .join("/");

  // Prepend /
  s = `/${s}`;

  return s;
};

export { joinPaths };
