import React from "react";
import { hasPermission } from "./utils/Permissions";

// This is a curried function: first we pass the permissionName, then the component
const WithPermissions = (permissionName) => (WrappedComponent) => {
  return function WithPermissionWrapper(props) {
    const { user } = props;

    console.log("User inside HOC:", user);
    console.log("Permission needed:", permissionName);

    if (hasPermission(user, permissionName)) {
      return <WrappedComponent {...props} />;
    }

    return (
      <div style={{ color: "red" }}>
        Access Denied: Missing "{permissionName}" permission
      </div>
    );
  };
};

export default WithPermissions;
