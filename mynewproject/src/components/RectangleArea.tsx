import { useState } from "react"
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap"
import { writeResult } from "./Count"
import { useNavigate } from "react-router-dom"

const RectangleArea : React.FC = () =>
{
  const [comm, setComm] = useState("")
  const [width, setWidth] = useState("")
  const [length, setLength] = useState("")
  const[square, setSquare] = useState("")
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleBack = () => {navigate('/home')}
  const countSquare = () =>
    {
      let w : number = +width
      let r : number = +length * w
      let s : string = String(r)
      setSquare(s)
      setMessage("")
    }
    const handleWrite = () =>
      {
        if (localStorage.getItem('userid') != null)
          {
            writeResult(square, comm)
            setMessage("Сохранено")
          }
          else {setMessage("Для сохранения требуется авторизация")}
      }
    return (
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
      <h1>Площадь прямоугольника</h1>
      <br/>
      <Form.Control id="form"
          type="number"
          placeholder="Длина"
          value={length}
          onChange={(e) => setLength(e.target.value)}/>
      <br/>
      <Form.Control id="form"
          type="number"
          placeholder="Ширина"
          value={width}
          onChange={(e) => setWidth(e.target.value)}/>
      <br/>
      <Button id='but' onClick={countSquare}>Рассчитать</Button>{' '}
      <br/>
      <h1 id="res">Результат={square}</h1>
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
export default RectangleArea