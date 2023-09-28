import data from "../data/data.json"

export const pedirDatos = () => {

    return new Promise ((resolve, rejet) => {
        setTimeout ( () => {
            resolve(data);
        }, 500)
    }) 
}


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) =>{

        const item = data.find((el) => el.id === id);

        if (item) {
            resolve(item); 
        } else {
            reject ({
                error: "no se encontro el prododucto"
            })
        }
    })
}