import { Addtransaction } from "components/AddTransaction/AddTransaction";
import { BackDrop , Modal} from "./MobileTransactionModal.styled";
import { useEffect } from "react";

export const MobileTransactionModal =({onClose})=>{

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
          onClose();
        }
      };
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
        }
      }; 

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      });
    return(
        <BackDrop onClick={handleBackdropClick}>
            <Modal>
            <Addtransaction/>
            </Modal>
        </BackDrop>
    )
}