import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import { Navigate, useNavigate } from 'react-router-dom'


function Browse() {

const user = useSelector((store)=> store.user)
const navigate = useNavigate()

if(!user) {
  navigate('/')
}
 else return (
    <>
    <Header/>
    </>
  )
}

export default Browse
