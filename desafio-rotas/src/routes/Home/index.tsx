import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {
  <Header />;
  return (
    <>
      <div className="container mt20">
        <h1>Bem vindos !</h1>
      </div>

      <Outlet />
    </>
  );
}
