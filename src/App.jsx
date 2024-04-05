import './App.css'
import avatarJessica from '../public/avatar-jessica.jpeg'

function App() {

  return (
    <>
      <div className="conteiner">
        <div className="form">
          <div className="imagen">
            <img src={avatarJessica}></img>
          </div>
          <div className="nombre">
            <p>Jessica Randall</p>
          </div>
          <div className="lugar">
            <p>London, United Kingdom</p>
          </div>
          <div className="descrip">
            <p>"Front-end developer and avid reader."</p>
          </div>
          <button className="buttons">GitHub</button>
          <button className="buttons">Frontered Mentor</button>
          <button className="buttons">LinkedIn</button>
          <button className="buttons">Twitter</button>
          <button className="buttons">Instagram</button>
        </div>
      </div>
    </>
  )
}

export default App
