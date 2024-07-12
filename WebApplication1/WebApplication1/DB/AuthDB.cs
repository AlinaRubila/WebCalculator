using MySql.Data.MySqlClient;

namespace WebApplication1.DB
{
    public class AuthDB
    {
        ConnectionClass connection = new ConnectionClass();
        MySqlCommand command = new MySqlCommand();
        string request = "";
        string? password2;
        public User? AuthCheck(string? login, string? password)
        {
            connection.con.Open();
            request = $"SELECT Password FROM users WHERE Login = '{login}'";
            command.Connection = connection.con;
            command.CommandText = request;
            password2 = Convert.ToString(command.ExecuteScalar());
            if (password2 != password)
            {
                connection.con.Close();
                return null;
            }
            else
            {
                User user = new User("name", "login", "password");
                request = $"SELECT ID, Username, Login FROM users WHERE Login = '{login}'";
                command.CommandText = request;
                MySqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    user.Id = Convert.ToInt32(reader[0]);
                    user.Name = reader[1].ToString() ?? "";
                    user.Email = reader[2].ToString() ?? "";
                }
                connection.con.Close();
                return user;
            }
        }
    }
}
