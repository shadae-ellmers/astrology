import { ChangeEvent, FormEvent, useState } from 'react'
import { UserData } from '../../common/models'
import { useAppDispatch } from '../hooks/redux'
import { addOneUserThunk } from '../actions/astrology'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function AddChart() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState({} as UserData)

  const { getAccessTokenSilently } = useAuth0()

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = async (evt: FormEvent) => {
    evt.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      dispatch(addOneUserThunk(user, token))
      navigate('/chart')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section>
      <div className="add">
        <h2>Enter your big three: </h2>
        <form onSubmit={submitHandler}>
          <div className="text-item">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              value={user.name}
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div className="text-item">
            <label htmlFor="newSun">Sun Sign: </label>
            <input
              type="text"
              value={user.sun}
              name="sun"
              onChange={changeHandler}
            />
          </div>
          <div className="text-item">
            <label htmlFor="newMoon">Moon Sign: </label>
            <input
              type="text"
              value={user.moon}
              name="moon"
              onChange={changeHandler}
            />
          </div>
          <div className="text-item">
            <label htmlFor="newRising">Rising Sign: </label>
            <input
              type="text"
              value={user.rising}
              name="rising"
              onChange={changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default AddChart
