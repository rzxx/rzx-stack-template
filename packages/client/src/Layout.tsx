import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <div className="w-full px-8 py-4">
        <p className="font-semibold">rzx Stack App</p>
      </div>
      <Outlet />
    </>
  )
}

export default Layout
