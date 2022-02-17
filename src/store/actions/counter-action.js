/* Création des constantes pour les actions possibles:

- convention d'écriture avec les "/"
- le nom "counter/inncrement" va être récupéré par un autre fichier pour réagir sur le type d'action */

export const COUNTER_INCREMENT = "counter/increment";
export const COUNTER_DECREMENT = "counter/decrement";
export const COUNTER_RESET = "counter/reset";


/* Création de méthode pour générer les objets "action"  */

/* Fonction fléchée "increment" avec la valeur à augmenter */
export const increment = (step) => {

    /* On envoi un objet avec l'action */
    return {
        type: COUNTER_INCREMENT, // le type d'action
        payload: step /* les données qui accompagnent l'action */
    }
}

/* Fonction fléchée "decrement" avec la valeur à diminuer */
export const decrement = (step) => {

    /* On envoi un objet avec l'action */
    return {
        type: COUNTER_DECREMENT, // le type d'action
        payload: step /* les données qui accompagnent l'action */
    }
}

/* Fonction "lambda" reset qui renvoi directement l'objet avec l'action */

export const reset = () => {
    return {
        type: COUNTER_RESET
    };
}

/* Autre écriture de la même fonction lambda */
/* export const reset = () => ({
    type: COUNTER_RESET
}); */