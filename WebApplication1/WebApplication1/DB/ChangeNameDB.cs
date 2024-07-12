using MySql.Data.MySqlClient;

namespace WebApplication1.DB
{
    public class ChangeNameDB
    {
        ConnectionClass connection = new ConnectionClass();
        MySqlCommand command = new MySqlCommand();
        string request = "";
        public void ChangeName(string name, int id)
        {
            connection.con.Open();
            request = $"UPDATE users SET Username = '{name}' WHERE ID = {id}";
            command.Connection = connection.con;
            command.CommandText = request;
            command.ExecuteNonQuery();
            connection.con.Close();
        }
    }
}
