import { Button, Card, Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Home: React.FC = () =>
{
  const navigate = useNavigate();
  const handleRect = () => {navigate('/rectangle')}
  const handleParallel = () => {navigate('/parallel')}
  const handleRound = () => {navigate('/round')}
    return(
        <>
        <Navbar data-bs-theme="dark"id="nav">
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
      <Card style={{ width: '18rem' }}>
      <Card.Body id="card">
        <Card.Title id="cardtitle">Площадь прямоугольника</Card.Title>
        <Card.Text>
          Подсчитай площадь своего стола или комнаты в этом прекрасном калькуляторе!
        </Card.Text>
        <Button id='but' onClick={handleRect}>Погнали!</Button>
      </Card.Body>
    </Card> {' '}
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body id="card">
        <Card.Title id="cardtitle">Объём параллелепипеда</Card.Title>
        <Card.Text>
          Сколько воды в твоём аквариуме? А сколько крупы может поместиться в картонной упаковке риса?
        </Card.Text>
        <Button id='but' onClick={handleParallel}>Погнали!</Button>
      </Card.Body>
    </Card> {' '}
    <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body id="card">
        <Card.Title id="cardtitle">Длина окружности</Card.Title>
        <Card.Text>
          Узнай, сколько же тебе придётся пройти по планете, чтобы совершить кругосветку
        </Card.Text>
        <Button id='but' onClick={handleRound}>Погнали!</Button>
      </Card.Body>
    </Card>
        </>
    )
}
export default Home
