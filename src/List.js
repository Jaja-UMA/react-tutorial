import { lazy } from "react";

const LAUNGAGE = [
    'Javascript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
];
export const List = ({title}) => {
    return (
        <div>
            {}
            {
                LAUNGAGE.map((lang,index) => {
                    return <div key={index}>{lang}</div>
                })
            }
            <div>リストです</div>
        </div>
    )
}
