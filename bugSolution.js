import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from './firebase'; // Import your firebase auth instance

const MyComponent = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);
      } else {
        console.log("user is signed out");
      }
    });

    // Cleanup function to unsubscribe
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};
export default MyComponent;