import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store/ui/uiSlice';

export const useUiStore = () => {

  const { isDateOpenModal } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const openDateModal = () => {
    dispatch( onOpenDateModal() );
  };
  const closeDateModal = () => {
    dispatch( onCloseDateModal() );
  };
  const toggleDateModal = () =>{
    ( isDateOpenModal() ) ? openDateModal : closeDateModal
  }

  return {
    //* Propiedades
    isDateOpenModal,

    //* Metodos
    openDateModal,
    closeDateModal,
    toggleDateModal
  };
};
