import { useEffect, useState } from "react"
import { Navbar, Container, Nav, Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { GetID } from "./IdText";
import { Count, deleteCount } from "./Count";

const Counts: React.FC = () =>
{
  let i : number = 0
  const navigate = useNavigate();
  const [noData, setNo] = useState('У вас ещё нет сохранённых рассчётов')
  const [data, setData] = useState<Count[]>([])
  //const [newData, setNewData] = useState<Count[]>([])
  const [del, boolDel] = useState(true)
  const readCounts = async() =>
    {
      console.log('readCounts')
      let id : number = Number(localStorage.getItem('userid'))
      var r: GetID = {ID: id}
      try {
        const response = await fetch('https://localhost:7051/Counts', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(r),
        });
        const result = await response.json();
        if (result.length == 0) {throw new Error()}
        if (response.ok) 
        {
          //console.log(result)
          setData(result)
          //console.log("Got Items!")
          setNo("")
        }
        else {throw new Error()}
        }
        catch (error) {
          console.log("Can't get items!");
          setNo("У вас ещё нет сохранённых рассчётов")
          }
    }
  const handleDelete = (result: number, comment: string) =>
  {
    let s : string = String(result)
    deleteCount(s, comment)
    let oldData = data
    var index: number = 0
    while (index < oldData.length)
    {
      if (oldData[index].value == result && oldData[index].comment == comment) {break}
      else {index += 1}
    }
    oldData.splice(index, 1, )
    i = 0
    console.log(oldData)
    //setNewData(oldData)
    if (del == true) {boolDel(false)}
    else {boolDel(true)}
  }
  useEffect(() =>
    {
      if (localStorage.getItem('username') == null || localStorage.getItem('userid') == null) {navigate('/')}
      else
      {
        readCounts()
      }
    }, [])
  useEffect(() => {
    //setData(newData)
    //readCounts()
  }, [del])
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
      <h1>{localStorage.getItem('username')}</h1>
      <br/>
      <h2>Здесь хранятся ваши сохранённые рассчёты</h2>
      <br/>
      <i>{noData}</i>
      {data.map((item: Count) =>
          <>
          <br/>
          <Card key={i++}>
          <Card.Body id="card">
            <></>
            <Card.Title id="cardtitle"> {item.comment}</Card.Title>
            <Card.Text>{item.value}</Card.Text>
            <Button id='but'  onClick={() => handleDelete(item.value, item.comment)}>Удалить</Button>
          </Card.Body>
          </Card></>)}
      
      </>
    )
}
export default Counts