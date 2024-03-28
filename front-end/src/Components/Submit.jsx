import { useState } from "react";

export function Submit({ children, loading }) {
  return (
    <input
      type="submit"
      value={children}
      disabled={loading}
      className="p-2 w-full max-w-72 mt-3 bg-blue-600 text-white font-bold cursor-pointer rounded-md disabled:bg-blue-400 disabled:cursor-default"
    />
  );
}
