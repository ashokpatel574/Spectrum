import { useEffect } from "react";

export const useClickedOutsideDropBox = (
  dropBoxstate,
  setDropBoxState,
  refState
) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        dropBoxstate &&
        refState.current &&
        !refState.current.contains(e.target)
      ) {
        setDropBoxState(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropBoxstate, refState, setDropBoxState]);
};
