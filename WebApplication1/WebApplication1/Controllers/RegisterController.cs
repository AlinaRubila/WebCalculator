using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("Register")]
    public class RegisterController : Controller
    {
        DB.RegisterDB db = new DB.RegisterDB();
        [HttpPut]
        public IActionResult Registration([FromBody] Register model)
        {
            if (model.Password.Length < 5 || model.Email.Length < 5 || model.Name.Length < 1) return BadRequest("слишком коротко");
            User? result = db.RegisterCheck(model.Name, model.Email, model.Password);
            if (result == null)
            {
                return BadRequest("Пользователь с таким логином уже существует!");
            }
            else
            {
                var response = new { username = result.Name, id = result.Id };
                return Ok(response);
            }
        }
    }
}
