using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sistema_Residuos_MODEL.Migrations
{
    /// <inheritdoc />
    public partial class TestHorarioConversion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TiposEstabelecimento",
                columns: table => new
                {
                    TipoEstabelecimentoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__TiposEst__FA95A1FF5EF7371A", x => x.TipoEstabelecimentoId);
                });

            migrationBuilder.CreateTable(
                name: "TiposResiduo",
                columns: table => new
                {
                    TipoResiduoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__TiposRes__C9AE64543FF14DB3", x => x.TipoResiduoId);
                });

            migrationBuilder.CreateTable(
                name: "ResidenciasEstabelecimentos",
                columns: table => new
                {
                    ResidenciaEstabelecimentoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TipoEstabelecimentoId = table.Column<int>(type: "int", nullable: false),
                    nomeResidencia = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Residenc__7D5516AEE0B5C2F4", x => x.ResidenciaEstabelecimentoId);
                    table.ForeignKey(
                        name: "FK__Residenci__TipoE__398D8EEE",
                        column: x => x.TipoEstabelecimentoId,
                        principalTable: "TiposEstabelecimento",
                        principalColumn: "TipoEstabelecimentoId");
                });

            migrationBuilder.CreateTable(
                name: "CalendarioColeta",
                columns: table => new
                {
                    CalendarioColetaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TipoResiduoId = table.Column<int>(type: "int", nullable: true),
                    Horario = table.Column<TimeOnly>(type: "time", nullable: false),
                    DiaSemana = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Calendar__D356C6628AB9F36E", x => x.CalendarioColetaId);
                    table.ForeignKey(
                        name: "FK__Calendari__TipoR__3F466844",
                        column: x => x.TipoResiduoId,
                        principalTable: "TiposResiduo",
                        principalColumn: "TipoResiduoId");
                });

            migrationBuilder.CreateTable(
                name: "PontosColeta",
                columns: table => new
                {
                    PontoColetaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Latitude = table.Column<decimal>(type: "decimal(9,6)", nullable: false),
                    Longitude = table.Column<decimal>(type: "decimal(9,6)", nullable: false),
                    TipoResiduoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__PontosCo__CAA22F7505950A60", x => x.PontoColetaId);
                    table.ForeignKey(
                        name: "FK__PontosCol__TipoR__45F365D3",
                        column: x => x.TipoResiduoId,
                        principalTable: "TiposResiduo",
                        principalColumn: "TipoResiduoId");
                });

            migrationBuilder.CreateTable(
                name: "Notificacoes",
                columns: table => new
                {
                    NotificacaoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mensagem = table.Column<string>(type: "text", nullable: false),
                    DataEnvio = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())"),
                    ResidenciaEstabelecimentoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Notifica__FB9B787CB2C2698D", x => x.NotificacaoId);
                    table.ForeignKey(
                        name: "FK__Notificac__Resid__4316F928",
                        column: x => x.ResidenciaEstabelecimentoId,
                        principalTable: "ResidenciasEstabelecimentos",
                        principalColumn: "ResidenciaEstabelecimentoId");
                });

            migrationBuilder.CreateIndex(
                name: "idx_calendariocoleta_dia_horario",
                table: "CalendarioColeta",
                columns: new[] { "DiaSemana", "Horario" });

            migrationBuilder.CreateIndex(
                name: "IX_CalendarioColeta_TipoResiduoId",
                table: "CalendarioColeta",
                column: "TipoResiduoId");

            migrationBuilder.CreateIndex(
                name: "idx_notificacoes_dataenvio",
                table: "Notificacoes",
                column: "DataEnvio");

            migrationBuilder.CreateIndex(
                name: "IX_Notificacoes_ResidenciaEstabelecimentoId",
                table: "Notificacoes",
                column: "ResidenciaEstabelecimentoId");

            migrationBuilder.CreateIndex(
                name: "idx_pontoscoleta_localizacao",
                table: "PontosColeta",
                columns: new[] { "Latitude", "Longitude" });

            migrationBuilder.CreateIndex(
                name: "IX_PontosColeta_TipoResiduoId",
                table: "PontosColeta",
                column: "TipoResiduoId");

            migrationBuilder.CreateIndex(
                name: "idx_residencias_nome",
                table: "ResidenciasEstabelecimentos",
                column: "nomeResidencia");

            migrationBuilder.CreateIndex(
                name: "IX_ResidenciasEstabelecimentos_TipoEstabelecimentoId",
                table: "ResidenciasEstabelecimentos",
                column: "TipoEstabelecimentoId");

            migrationBuilder.CreateIndex(
                name: "UQ__TiposEst__FA95A1FEB6543652",
                table: "TiposEstabelecimento",
                column: "TipoEstabelecimentoId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "UQ__TiposRes__C9AE645581A4E1EB",
                table: "TiposResiduo",
                column: "TipoResiduoId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CalendarioColeta");

            migrationBuilder.DropTable(
                name: "Notificacoes");

            migrationBuilder.DropTable(
                name: "PontosColeta");

            migrationBuilder.DropTable(
                name: "ResidenciasEstabelecimentos");

            migrationBuilder.DropTable(
                name: "TiposResiduo");

            migrationBuilder.DropTable(
                name: "TiposEstabelecimento");
        }
    }
}
