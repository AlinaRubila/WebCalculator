using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("Change")]
    public class ChangeController : Controller
    {
        DB.ChangeNameDB nameDB = new DB.ChangeNameDB();
        DB.ChangeLoginDB loginDB = new DB.ChangeLoginDB();
        DB.ChangePasswordDB passwordDB = new DB.ChangePasswordDB();
        [HttpDelete]
        public IActionResult ChangeName([FromBody] IDText model)
        {
            if (model.Text.Length < 1) { return BadRequest("too short"); }
            else { nameDB.ChangeName(model.Text, model.ID); }
            return Ok(model.Text);
        }
        [HttpPost]
        public IActionResult ChangeLogin([FromBody] IDText model)
        {
            if (model.Text.Length < 5) { return BadRequest("too short"); }
            else
            {
                bool i = loginDB.ChangeLogin(model.Text, model.ID);
                if (i == false) return BadRequest();
                else return Ok();
            }
        }
        [HttpPut]
        public IActionResult ChangePass([FromBody] PasswordCheck model)
        {
            if (model.NewPassword.Length < 5) { return BadRequest("too short"); }
            else
            {
                string login = loginDB.GetOldLogin(model.ID);
                bool i = passwordDB.CheckOldPassword(model.OldPassword, login);
                if (i == false || model.NewPassword != model.RepeatPassword) { return BadRequest("passwords are not the same"); }
                else { passwordDB.ChangePassword(model.NewPassword, model.ID); }
            }
            return Ok();
        }
    }
}
