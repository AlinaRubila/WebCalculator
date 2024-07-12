namespace WebApplication1
{
    public class Count
    {
        public double Value { get; set; }
        public string? Comment {  get; set; }
        public int User_ID {  get; set; }
        public Count(double value, string? comment, int user_ID)
        {
            Value = value;
            Comment = comment;
            User_ID = user_ID;
        }
    }
}
