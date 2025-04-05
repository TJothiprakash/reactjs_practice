export const hasPermission = (user, permissionName) => {
  console.log(
    "checking permission for ",
    permissionName,
    "in ",
    user?.permissions
  );
  console.log(`[PERMISSION CHECK] User:`, user);
  console.log(`[PERMISSION CHECK] Required: "${permissionName}"`);
  console.log("returning ", user?.permissionName?.includes(permissionName));
  return user?.permissions?.includes(permissionName);
};
