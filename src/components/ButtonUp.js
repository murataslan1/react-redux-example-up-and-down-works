import {useDispatch} from 'react-redux'
import {countUp} from '../redux/actions'

export default function ButtonUp(){
    const dispatch = useDispatch()

    return <button onClick={()=>{ dispatch(countUp()) }} >up +</button>
}