import {useDispatch} from 'react-redux'
import {countDown} from '../redux/actions'

export default function ButtonDown(){
    const dispatch = useDispatch()

    return <button onClick={()=>{
        dispatch(countDown())
    }}>down -</button>
}