export interface Count
{
    value: number
    comment: string
    user_ID: number
}
export const writeResult = async (r: string, c: string) =>
{
  let result : number = Number(r)
  let id : number = Number(localStorage.getItem('userid'))
  var count: Count = {value: result, comment: c, user_ID: id}
    try {
        const response = await fetch('https://localhost:7051/Counts', {
          method: 'PUT',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(count),
        });
        if (response.ok) {console.log("Added item!")}
        else {throw new Error()}
        }
        catch (error) {
            console.log("Can't add this item!");
          }
}
export const deleteCount = async (r: string, c: string) =>
{
  console.log('trying')
  let result : number = Number(r)
  let id : number = Number(localStorage.getItem('userid'))
  var count: Count = {value: result, comment: c, user_ID: id}
    try {
        const response = await fetch('https://localhost:7051/Counts', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(count),
        });
        if (response.ok) {console.log("Deleted item!")}
        else {throw new Error()}
        }
        catch (error) {console.log("Can't delete this item!");}
}

