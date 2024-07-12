using MySql.Data.MySqlClient;

namespace WebApplication1
{
    public class ConnectionClass
    {
        static string conString = "server=localhost;user=root;database=mydb;password=niceMeow;";
        public MySqlConnection con = new MySqlConnection(conString);
    }
}
