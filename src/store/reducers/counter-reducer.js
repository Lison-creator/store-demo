import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from "./../actions/counter-action"

/* Définir l'état initial  */

const initialState = {
    count: 0
};

/* Création de la méthode "reducer" qui peut résoudre les actions
= > C'est une méthode d'accumulation qui prends en paramètres:
        - le State et son état
        - l'action */

export const counterReducer = (state = initialState, action) => {

    /* Switch avec la résolution des actions */

    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                /* "...state" clone l'objet connu. Permet de ne pas perdre de valeur de state */
                ...state,
                count: state.count + action.payload
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            };
        case COUNTER_RESET:
            return {
                ...state,
                count: initialState.count /* Ou 0, tout simplement */
            };

        default:
            return state; /* TOUJOURS envoyer le state dans le default */
            break;
    }

}

