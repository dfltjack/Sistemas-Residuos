USE [master]
GO
/****** Object:  Database [Sistema_Residuos]    Script Date: 01/11/2024 20:04:56 ******/
CREATE DATABASE [Sistema_Residuos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Sistema_Residuos', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Sistema_Residuos.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Sistema_Residuos_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Sistema_Residuos_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Sistema_Residuos] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Sistema_Residuos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Sistema_Residuos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET ARITHABORT OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Sistema_Residuos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Sistema_Residuos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Sistema_Residuos] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Sistema_Residuos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Sistema_Residuos] SET  MULTI_USER 
GO
ALTER DATABASE [Sistema_Residuos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Sistema_Residuos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Sistema_Residuos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Sistema_Residuos] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Sistema_Residuos] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Sistema_Residuos] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [Sistema_Residuos] SET QUERY_STORE = OFF
GO
USE [Sistema_Residuos]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CalendarioColeta]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CalendarioColeta](
	[CalendarioColetaId] [int] IDENTITY(1,1) NOT NULL,
	[TipoResiduoId] [int] NULL,
	[Horario] [time](7) NOT NULL,
	[DiaSemana] [varchar](20) NOT NULL,
 CONSTRAINT [PK__Calendar__D356C6628AB9F36E] PRIMARY KEY CLUSTERED 
(
	[CalendarioColetaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notificacoes]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notificacoes](
	[NotificacaoId] [int] IDENTITY(1,1) NOT NULL,
	[Mensagem] [text] NOT NULL,
	[DataEnvio] [datetime] NOT NULL,
	[ResidenciaEstabelecimentoId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[NotificacaoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PontosColeta]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PontosColeta](
	[PontoColetaId] [int] IDENTITY(1,1) NOT NULL,
	[Latitude] [varchar](50) NOT NULL,
	[Longitude] [varchar](50) NOT NULL,
	[TipoResiduoId] [int] NULL,
 CONSTRAINT [PK__PontosCo__CAA22F7505950A60] PRIMARY KEY CLUSTERED 
(
	[PontoColetaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ResidenciasEstabelecimentos]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResidenciasEstabelecimentos](
	[ResidenciaEstabelecimentoId] [int] IDENTITY(1,1) NOT NULL,
	[TipoEstabelecimentoId] [int] NOT NULL,
	[nomeResidencia] [varchar](100) NOT NULL,
 CONSTRAINT [PK__Residenc__7D5516AEE0B5C2F4] PRIMARY KEY CLUSTERED 
(
	[ResidenciaEstabelecimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TiposEstabelecimento]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposEstabelecimento](
	[TipoEstabelecimentoId] [int] IDENTITY(1,1) NOT NULL,
	[Tipo] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[TipoEstabelecimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[TipoEstabelecimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TiposResiduo]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposResiduo](
	[TipoResiduoId] [int] IDENTITY(1,1) NOT NULL,
	[Resíduo] [varchar](50) NULL,
	[fotoResiduo] [image] NULL,
PRIMARY KEY CLUSTERED 
(
	[TipoResiduoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[TipoResiduoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tokens]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tokens](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TokenValue] [nvarchar](500) NOT NULL,
	[CreatedDate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 01/11/2024 20:04:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[UsuarioId] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Senha] [nvarchar](255) NOT NULL,
	[Role] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[UsuarioId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_calendariocoleta_dia_horario]    Script Date: 01/11/2024 20:04:56 ******/
CREATE NONCLUSTERED INDEX [idx_calendariocoleta_dia_horario] ON [dbo].[CalendarioColeta]
(
	[DiaSemana] ASC,
	[Horario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [idx_notificacoes_dataenvio]    Script Date: 01/11/2024 20:04:56 ******/
CREATE NONCLUSTERED INDEX [idx_notificacoes_dataenvio] ON [dbo].[Notificacoes]
(
	[DataEnvio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_pontoscoleta_localizacao]    Script Date: 01/11/2024 20:04:56 ******/
CREATE NONCLUSTERED INDEX [idx_pontoscoleta_localizacao] ON [dbo].[PontosColeta]
(
	[Latitude] ASC,
	[Longitude] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [idx_residencias_nome]    Script Date: 01/11/2024 20:04:56 ******/
CREATE NONCLUSTERED INDEX [idx_residencias_nome] ON [dbo].[ResidenciasEstabelecimentos]
(
	[nomeResidencia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Notificacoes] ADD  DEFAULT (getdate()) FOR [DataEnvio]
GO
ALTER TABLE [dbo].[Tokens] ADD  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Usuarios] ADD  DEFAULT ('cliente') FOR [Role]
GO
ALTER TABLE [dbo].[CalendarioColeta]  WITH CHECK ADD  CONSTRAINT [FK__Calendari__TipoR__3F466844] FOREIGN KEY([TipoResiduoId])
REFERENCES [dbo].[TiposResiduo] ([TipoResiduoId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[CalendarioColeta] CHECK CONSTRAINT [FK__Calendari__TipoR__3F466844]
GO
ALTER TABLE [dbo].[CalendarioColeta]  WITH CHECK ADD  CONSTRAINT [FK_CalendarioColeta_TiposResiduo] FOREIGN KEY([TipoResiduoId])
REFERENCES [dbo].[TiposResiduo] ([TipoResiduoId])
GO
ALTER TABLE [dbo].[CalendarioColeta] CHECK CONSTRAINT [FK_CalendarioColeta_TiposResiduo]
GO
ALTER TABLE [dbo].[Notificacoes]  WITH CHECK ADD  CONSTRAINT [FK__Notificac__Resid__4316F928] FOREIGN KEY([ResidenciaEstabelecimentoId])
REFERENCES [dbo].[ResidenciasEstabelecimentos] ([ResidenciaEstabelecimentoId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Notificacoes] CHECK CONSTRAINT [FK__Notificac__Resid__4316F928]
GO
ALTER TABLE [dbo].[Notificacoes]  WITH CHECK ADD  CONSTRAINT [FK_Notificacoes_ResidenciasEstabelecimentos] FOREIGN KEY([ResidenciaEstabelecimentoId])
REFERENCES [dbo].[ResidenciasEstabelecimentos] ([ResidenciaEstabelecimentoId])
GO
ALTER TABLE [dbo].[Notificacoes] CHECK CONSTRAINT [FK_Notificacoes_ResidenciasEstabelecimentos]
GO
ALTER TABLE [dbo].[PontosColeta]  WITH CHECK ADD  CONSTRAINT [FK__PontosCol__TipoR__45F365D3] FOREIGN KEY([TipoResiduoId])
REFERENCES [dbo].[TiposResiduo] ([TipoResiduoId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PontosColeta] CHECK CONSTRAINT [FK__PontosCol__TipoR__45F365D3]
GO
ALTER TABLE [dbo].[PontosColeta]  WITH CHECK ADD  CONSTRAINT [FK_PontosColeta_TiposResiduo] FOREIGN KEY([TipoResiduoId])
REFERENCES [dbo].[TiposResiduo] ([TipoResiduoId])
GO
ALTER TABLE [dbo].[PontosColeta] CHECK CONSTRAINT [FK_PontosColeta_TiposResiduo]
GO
ALTER TABLE [dbo].[ResidenciasEstabelecimentos]  WITH CHECK ADD  CONSTRAINT [FK__Residenci__TipoE__398D8EEE] FOREIGN KEY([TipoEstabelecimentoId])
REFERENCES [dbo].[TiposEstabelecimento] ([TipoEstabelecimentoId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ResidenciasEstabelecimentos] CHECK CONSTRAINT [FK__Residenci__TipoE__398D8EEE]
GO
USE [master]
GO
ALTER DATABASE [Sistema_Residuos] SET  READ_WRITE 
GO
