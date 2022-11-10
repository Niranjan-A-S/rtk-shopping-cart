import { useSelector } from "react-redux";
import { CartContainer } from "./components/CartContainer";
import { Modal } from "./components/Modal";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
