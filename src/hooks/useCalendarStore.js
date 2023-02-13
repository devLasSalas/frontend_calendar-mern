import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar)
    const dispatch = useDispatch();

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) )
    };

    const startSavingEvent = ( calendarEvent ) => {
        //TODO: llegar al backend

        //Todo bien
        if( calendarEvent._id) {
            // Actualizando
            dispatch( onUpdateEvent({ ...calendarEvent }))
        }else {
            // Creando
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
        }
    }

    return {

        //* Propiedades
        events,
        activeEvent,

        //* Metodos
        setActiveEvent,
        startSavingEvent


    }
}