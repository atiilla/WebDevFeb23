import {v4} from 'uuid';

export default function Linux() {
    console.log(v4(),"unique id")
    const usernames = ['root', 'toor', 'admin']
    return (
        <div>
            {
                usernames.map((name,index) => (
                    <h1 key={v4()}>{name} : {v4()}</h1>
                ))
            }
        </div>
    )
}