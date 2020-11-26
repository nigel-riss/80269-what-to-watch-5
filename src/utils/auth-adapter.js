const parseAuth = (authInfo) => ({
  userAvatarUrl: authInfo[`avatar_url`],
});


export {parseAuth};
