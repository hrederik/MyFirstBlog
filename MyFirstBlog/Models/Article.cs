using System;
namespace MyFirstBlog.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Date { get; set; }

        public int? CathegoryId { get; set; }
        public Cathegory Cathegory { get; set; }
    }
}