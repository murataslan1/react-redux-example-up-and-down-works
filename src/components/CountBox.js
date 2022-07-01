import { useSelector } from "react-redux"

export default function CountBox(){

    const state = useSelector(state=>state.counter)

    return <div>{state.count}</div>
}