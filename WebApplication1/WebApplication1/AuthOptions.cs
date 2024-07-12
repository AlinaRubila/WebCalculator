using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace WebApplication1
{
    public class AuthOptions
    {
        public const string ISSUER = "AuthServer";
        public const string AUDIENCE = "AuthClient";
        const string KEY = "42_is_an_answer_to_all_of_your_questions!!!";
        public static SymmetricSecurityKey GetSymmetricSecurityKey() =>
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
    }
}
