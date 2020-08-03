using Microsoft.EntityFrameworkCore.Migrations;

namespace MyFirstBlog.Migrations
{
    public partial class AddedCathegories : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CathegoryId",
                table: "Articles",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Cathegories",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cathegories", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Articles_CathegoryId",
                table: "Articles",
                column: "CathegoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Articles_Cathegories_CathegoryId",
                table: "Articles",
                column: "CathegoryId",
                principalTable: "Cathegories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Articles_Cathegories_CathegoryId",
                table: "Articles");

            migrationBuilder.DropTable(
                name: "Cathegories");

            migrationBuilder.DropIndex(
                name: "IX_Articles_CathegoryId",
                table: "Articles");

            migrationBuilder.DropColumn(
                name: "CathegoryId",
                table: "Articles");
        }
    }
}
