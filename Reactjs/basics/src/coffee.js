export default function Button(props) {
    return <button className={`btn btn-${props.color}`}>{props.buttonName}</button>
}