
import { useAuth } from "../context/authContext"


export function Home() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }

  };

  if (loading) return <h1>Loading...</h1>;





  return (

    <div>
      <h1>Welcome</h1>
      <p>{user.displayName ||user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
