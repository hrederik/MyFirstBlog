using Microsoft.EntityFrameworkCore;
using MyFirstBlog.Models.Configuration;

namespace MyFirstBlog.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public DbSet<Cathegory> Cathegories { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new ArticleConfiguration());
        }
    }
}
