import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Models from '../../common/models'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import {
  delOneUserThunk,
  getUsersThunk,
  updOneUserThunk,
} from '../actions/astrology'
import { useAuth0 } from '@auth0/auth0-react'

function Charts() {
  const dispatch = useAppDispatch()
  const chartList = useAppSelector((state) => state.user as Models.User[])
  const [editForm, setEditForm] = useState(false)
  const [editData, setEditData] = useState({
    sun: '',
    moon: '',
    rising: '',
  } as Models.User)

  const { getAccessTokenSilently } = useAuth0()

  const deleteHandler = async (id: number) => {
    try {
      const token = await getAccessTokenSilently()
      dispatch(delOneUserThunk(id, token))
    } catch (error) {
      console.error(error)
    }
  }

  const updateButtonHandler = (user: Models.User) => {
    setEditData(user)
    setEditForm(!editForm)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = async (evt: FormEvent) => {
    evt.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      dispatch(updOneUserThunk(editData, token))
      setEditForm(!editForm)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

  return (
    <section>
      <div className="description">
        <h2>Big Three Signs</h2>
      </div>
      <h3>
        Here is where you can list your big three in your natal chart, and learn
        about what it means for you. A few examples have been provided.
      </h3>
      <div>
        {editForm ? (
          <form onSubmit={submitHandler}>
            <div className="text-item">
              <label htmlFor="newSun">Sun Sign: </label>
              <input
                type="text"
                value={editData.sun}
                name="sun"
                onChange={changeHandler}
              />
            </div>
            <div className="text-item">
              <label htmlFor="newMoon">Moon Sign: </label>
              <input
                type="text"
                value={editData.moon}
                name="moon"
                onChange={changeHandler}
              />
            </div>
            <div className="text-item">
              <label htmlFor="newRising">Rising Sign: </label>
              <input
                type="text"
                value={editData.rising}
                name="rising"
                onChange={changeHandler}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="users">
            {chartList.map((user) => (
              <div className="users__each" key={user.id}>
                <h3 className="name">{user.name}</h3>
                <div className="text-item">
                  <h3>Sun: </h3>
                  <p>{user.sun}</p>
                </div>
                <div className="text-item">
                  <h3>Moon: </h3>
                  <p>{user.moon}</p>
                </div>
                <div className="text-item">
                  <h3>Rising: </h3>
                  <p>{user.rising}</p>
                </div>
                <button onClick={() => deleteHandler(user.id)}>Delete</button>
                <button onClick={() => updateButtonHandler(user)}>
                  Update
                </button>
              </div>
            ))}
            <div className="nav-button">
              <Link to="/add">Add Yours</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Charts
