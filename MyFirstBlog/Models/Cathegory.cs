using System.Collections.Generic;

namespace MyFirstBlog.Models
{
    public class Cathegory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Article> Articles { get; set; }
    }
}
