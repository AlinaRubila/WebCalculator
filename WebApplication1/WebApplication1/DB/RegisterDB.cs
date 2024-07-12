using MySql.Data.MySqlClient;

namespace WebApplication1.DB
{
    public class RegisterDB
    {
        ConnectionClass connection = new ConnectionClass();
        MySqlCommand command = new MySqlCommand();
        int sameLogin;
        public User RegisterCheck(string name, string login, string password)
        {
            connection.con.Open();
            User user = new User("name", "login", "password");
            string request = $"SELECT COUNT(*) FROM users WHERE Login = '{login}'";
            command.Connection = connection.con;
            command.CommandText = request;
            sameLogin = Convert.ToInt32(command.ExecuteScalar());
            if (sameLogin != 0)
            {
                connection.con.Close();
                return user;
            }
            else
            {
                request = "SELECT ID FROM users ORDER BY ID DESC LIMIT 1";
                command.CommandText = request;
                int count = Convert.ToInt32(command.ExecuteScalar()) + 1;
                request = $"INSERT INTO users (ID, Login, Password, Username) VALUES ({count}, '{login}', '{password}', '{name}')";
                command.CommandText = request;
                command.ExecuteNonQuery();
                user.Id = count;
                user.Name = name;
                user.Email = login;
                connection.con.Close();
                return user;
            }
        }
    }
}
