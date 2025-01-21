import { useState } from "react";
import {usePostContext} from "./postContext"
export const Navbar = () => {
  const { savedPosts, resetPosts } = usePostContext();
  const [showSavedList, setShowSavedList] = useState(false);

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts.length}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={resetPosts}>Reset</button>
    </div>
  );
};
