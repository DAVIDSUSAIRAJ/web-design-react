import pipal from "../images/pipal-tree.png";
import fly from "../images/flying-birds.png";
import "../scss/about.scss";
function About(params) {
  return (
    <div>
      <div className="about">
        <div className="about--img">
          <img src={fly} alt="flying-birds" className="flying-birds"></img>
          <img src={pipal} alt="pipal-tree" className="pipal-tree"></img>
        </div>

        <div className="about--content">
          <h4>The Tree of Life</h4>
          <p>
            A tree of life ( The Tree of Life ) is a human life science,
            religion, philosophy, and according to the legend of a tree
            evolutionary compared valarcciyotu. The origin of man living on
            earth remains a mystery that has not yet been discovered by any
            research
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
