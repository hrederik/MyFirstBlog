using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace MyFirstBlog.Models.Configuration
{
    public class ArticleConfiguration : IEntityTypeConfiguration<Article>
    {
        public void Configure(EntityTypeBuilder<Article> builder)
        {
            builder.Property(article => article.Title).IsRequired();
            builder.Property(article => article.Text).IsRequired();

            builder.Property(article => article.Date)
                .HasDefaultValueSql("GETDATE()");

            builder.HasOne(article => article.Cathegory)
                .WithMany(cathegory => cathegory.Articles)
                .HasForeignKey(article => article.CathegoryId);
        }
    }
}
