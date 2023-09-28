import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore"
import { db } from "../firebase/config";


const ItemDetailContainer = () => {
    const id = useParams().id;
    

    const [item, setItem] = useState(null);


    useEffect(() => {
        const docRef = doc(db, "porductos", id);
        getDoc(docRef)
            .then((resp)=>{
                setItem(
                    {...resp.data(), id: resp.id}
                )
            })
        }, [id])

    return (
        <div>
            {item &&  <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer