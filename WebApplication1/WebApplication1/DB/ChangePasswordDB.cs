using MySql.Data.MySqlClient;

namespace WebApplication1.DB
{
    public class ChangePasswordDB
    {
        ConnectionClass connection = new ConnectionClass();
        MySqlCommand command = new MySqlCommand();
        string request = "";
        string? truePass = "";
        public bool CheckOldPassword(string? password, string login)
        {
            connection.con.Open();
            request = $"SELECT Password FROM users WHERE Login = '{login}'";
            command.Connection = connection.con;
            command.CommandText = request;
            truePass = Convert.ToString(command.ExecuteScalar());
            connection.con.Close();
            if (password != truePass) { return false; }
            else { return true; }
        }
        public void ChangePassword(string password, int id)
        {
            connection.con.Open();
            request = $"UPDATE users SET Password = '{password}' WHERE ID = {id}";
            command.Connection = connection.con;
            command.CommandText = request;
            command.ExecuteNonQuery();
            connection.con.Close();
        }
    }
}
