"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const [permission, setPermission] = useState({ role: "", permission: "" });

  useEffect(() => {
    if (status === "authenticated") {
      setPermission({
        role: session?.user?.role,
        permission: session?.user?.permission,
      });
    }
  }, [session, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {permission.permission === "transaction-table" || permission.role == "admin"? (
        <div>Transaction table</div>
      ) : (
        <div>You have not permission to access this Page</div>
      )}
    </div>
  );
};

export default Page;
