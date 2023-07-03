import { useEffect } from "react";
import { LANGUAGES } from "./languages";


export const List = ({langs}) => {
    useEffect(()=> {
        console.log('List.js:useEffect');

        return () => {
            console.log('List.js:useEffect:unmount')
        }
    });
    return (
        <div>
            {}
            {
                langs.map((lang,index) => {
                    return <div key={index}>{lang}</div>
                })
            }
            <div>リストです</div>
        </div>
    )
}
