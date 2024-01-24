
import { useAuth } from "../context/authContext"
import logo from '../assets/img/logo.png';



export function Home() {
  const { logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }

  };

  if (loading) return <h1>Loading...</h1>;



  return (
    <>






    
    <nav class="navbar navbar-dark bg-primary">
    <div className="container">
        <button className="btn btn-danger " onClick={handleLogout}>Logout</button>
      </div>
</nav>


   
      <img src={logo} alt="logo" className="mx-auto d-block w-14 h-13" />


      <h4 className="text-center mt-4 text-primary"> Bienvenidos a puntos Bet-el</h4>
      <h6 className="text-center mt-4 text-primary"> Aqui podras ver los puntos de los equipos </h6>
      <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button">Añadir equipos (colores)</button>

</div>




     
    </>


  );
}

