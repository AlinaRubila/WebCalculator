using Google.Protobuf.WellKnownTypes;
using Microsoft.IdentityModel.Tokens;
using MySql.Data.MySqlClient;
using System.Xml.Linq;

namespace WebApplication1.DB
{
    public class CountDB
    {
        ConnectionClass connection = new ConnectionClass();
        MySqlCommand command = new MySqlCommand();
        string request = "";
        public int GetLastID()
        {
            connection.con.Open();
            request = "SELECT idcounts FROM counts ORDER BY idcounts DESC LIMIT 1";
            command.Connection = connection.con;
            command.CommandText = request;
            int last = Convert.ToInt32(command.ExecuteScalar());
            connection.con.Close();
            return last;
        }
        public void AddCount(int userID, string? comment, double value)
        {
            int id = GetLastID() + 1;
            if (comment.IsNullOrEmpty()) { comment = $"Подсчёт{id}"; }
            string s_value = value.ToString().Replace(',', '.');
            connection.con.Open();
            request = $"INSERT INTO counts (idcounts, user_ID, value, comment) VALUES ({id}, {userID}, {s_value}, '{comment}')";
            command.Connection = connection.con;
            command.CommandText = request;
            command.ExecuteNonQuery();
            connection.con.Close();
        }
        public void DeleteCount(int userID, double value, string? comment)
        {
            connection.con.Open();
            string s_value = value.ToString().Replace(',', '.');
            request = $"DELETE FROM counts WHERE user_ID={userID} AND value={s_value} AND comment='{comment}'";
            command.Connection = connection.con;
            command.CommandText = request;
            command.ExecuteNonQuery();
            connection.con.Close();
        }
        public List<Count> GetCounts(int userID)
        {
            List<Count> counts = new List<Count>();
            connection.con.Open();
            request = $"SELECT value, comment FROM counts WHERE user_id={userID} ORDER BY value ASC";
            command.Connection = connection.con;
            command.CommandText = request;
            MySqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                Count count = new Count(Convert.ToDouble(reader[0]), reader[1].ToString() ?? "", userID );
                counts.Add(count);
            }
            connection.con.Close();
            return counts;
        }
    }
}
