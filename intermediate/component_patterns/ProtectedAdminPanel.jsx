import WithPermissions from "./WithPermissions";
import AdminPanel from "./AdminPanel";
import React from "react";

const ProtectedAdminPanel =  WithPermissions('admin')(AdminPanel); 
export default ProtectedAdminPanel;