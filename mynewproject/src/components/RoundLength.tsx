import { useState } from "react"
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap"
import { writeResult } from "./Count"
import { useNavigate } from "react-router-dom"

const RoundLength: React.FC = () =>
{
  const [comm, setComm] = useState("")
  const [radius, setRadius] = useState("")
  const [roundLength, setLength] = useState("")
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleBack = () => {navigate('/home')}
  const countLength = () =>
    {
      var r : number = +radius * 2 * 3.14 
      let s : string = String(r)
      setLength(s)
      setMessage("")
    }
  const handleWrite = () =>
  {
    if (localStorage.getItem('userid') != null)
      {
        writeResult(roundLength, comm)
        setMessage("Сохранено")
      }
    else {setMessage("Для сохранения требуется авторизация")}
  }
    return(
        <>
        <Navbar data-bs-theme="dark" id="nav">
        <Container>
          <Navbar.Brand href="/home" >Считалочка!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" >Главная</Nav.Link>
            <Nav.Link href="/counts" >Ваши подсчёты</Nav.Link>
            <Nav.Link href="/profile" >Профиль</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <Button id='but' onClick={handleBack}>Назад</Button>{' '}
      <br/>
      <h1>Длина окружности</h1>
      <br/>
      <Form.Control id="form"
          type="number"
          placeholder="Радиус окружности"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}/>
      <br/>
      <Button id='but' onClick={countLength}>Рассчитать</Button>{' '}
      <br/>
      <h1 id="res">Результат={roundLength}</h1>
      <Button id='but' onClick={handleWrite}>Сохранить результат</Button>
      <br/>
      <br/>
      <Form.Control id="form"
          type="text"
          placeholder="Пометка для рассчёта!"
          value={comm}
          onChange={(e) => setComm(e.target.value)}/>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      </>
    )
}
export default RoundLength