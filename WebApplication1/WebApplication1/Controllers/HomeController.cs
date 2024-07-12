using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MySqlX.XDevAPI.Common;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("Login")]
    public class HomeController : Controller //если не заработает, опять поменяем на Controller
    {
        DB.AuthDB db = new DB.AuthDB();
        [HttpPost]
        public IActionResult LogIn([FromBody] Login model)
        {
            if (model.Email.Length < 5 || model.Password.Length < 5) return BadRequest();
            User? check = db.AuthCheck(model.Email, model.Password);
            if (check == null) return BadRequest("Неверный e-mail или пароль!");
            var response = new { username = check.Name, id = check.Id};
            return Ok(response);
        }
    }
}
