using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("Counts")]
    public class CountsController : Controller
    {
        DB.CountDB db = new DB.CountDB();
        [HttpPost]
        public IActionResult GetCounts([FromBody] GetID model)
        {
            List<Count>? counts = db.GetCounts(model.ID);
            if (counts == null) return BadRequest();
            else
            {
                var response = counts.ToArray();
                return Ok(response);
            }
        }
        [HttpPut]
        public IActionResult Add([FromBody] CountForm model)
        {
            db.AddCount(model.User_ID, model.Comment, model.Value);
            return Ok();
        }
        [HttpDelete]
        public IActionResult RemoveCount([FromBody] CountForm model)
        {
            db.DeleteCount(model.User_ID, model.Value, model.Comment);
            return Ok();
        }
    }
}
