import "../scss/home.scss";

function Home(params) {
  const heroNature = "https://cdn.wallpapersafari.com/13/23/wl2VZh.jpg";
  return (
    <div>
      <div className="hero--nature">
        {/* <h1>HOME</h1> */}
        <img src={heroNature} alt="hero-nature"></img>;
        <h2>WELCOME TO THE NATURE WORLD</h2>
      </div>
    </div>
  );
}
export default Home;