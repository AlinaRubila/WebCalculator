using MySql.Data.MySqlClient;

namespace WebApplication1.DB
{
    public class ChangeLoginDB
    {
        ConnectionClass connection = new ConnectionClass();
        MySqlCommand command = new MySqlCommand();
        string request = "";
        public string GetOldLogin(int id)
        {
            connection.con.Open();
            request = $"SELECT Login FROM users WHERE ID = {id}";
            command.Connection = connection.con;
            command.CommandText = request;
            return Convert.ToString(command.ExecuteScalar()) ?? "";
        }
        public bool ChangeLogin(string login, int id)
        {
            connection.con.Open();
            request = $"SELECT COUNT(*) FROM users WHERE Login = '{login}'";
            command.Connection = connection.con;
            command.CommandText = request;
            if (Convert.ToInt32(command.ExecuteScalar()) != 0)
            {
                connection.con.Close();
                return false;
            }
            else
            {
                request = $"UPDATE users SET Login = '{login}' WHERE ID = {id}";
                command.Connection = connection.con;
                command.CommandText = request;
                command.ExecuteNonQuery();
                connection.con.Close();
                return true;
            }
        }
    }
}
