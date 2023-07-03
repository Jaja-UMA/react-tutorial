import { LANGUAGES } from "./languages";


export const List = ({langs}) => {
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
