USE [master]
GO

/****** Object:  Database [Sistema_Residuos]    Script Date: 19/08/2024 ******/
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
BEGIN
    EXEC [Sistema_Residuos].[dbo].[sp_fulltext_database] @action = 'enable'
END
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

/****** Object:  Table [dbo].[TiposEstabelecimento]    Script Date: 19/08/2024 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposEstabelecimento](
    [TipoEstabelecimentoId] [int] IDENTITY(1,1) NOT NULL UNIQUE,
PRIMARY KEY CLUSTERED 
(
    [TipoEstabelecimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[ResidenciasEstabelecimentos]    Script Date: 19/08/2024 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResidenciasEstabelecimentos](
    [ResidenciaEstabelecimentoId] [int] IDENTITY(1,1) NOT NULL,      
    [TipoEstabelecimentoId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
    [ResidenciaEstabelecimentoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
FOREIGN KEY (TipoEstabelecimentoId) REFERENCES [dbo].[TiposEstabelecimento](TipoEstabelecimentoId)
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[TiposResiduo]    Script Date: 19/08/2024 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposResiduo](
    [TipoResiduoId] [int] IDENTITY(1,1) NOT NULL UNIQUE,
PRIMARY KEY CLUSTERED 
(
    [TipoResiduoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[CalendarioColeta]    Script Date: 19/08/2024 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CalendarioColeta](
    [CalendarioColetaId] [int] IDENTITY(1,1) NOT NULL,
    [TipoResiduoId] [int] NOT NULL,      
    [Horario] [time] NOT NULL,
PRIMARY KEY CLUSTERED 
(
    [CalendarioColetaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
FOREIGN KEY (TipoResiduoId) REFERENCES [dbo].[TiposResiduo](TipoResiduoId)
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Notificacoes]    Script Date: 19/08/2024 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notificacoes](
    [NotificacaoId] [int] IDENTITY(1,1) NOT NULL,
    [Mensagem] [text] NOT NULL,
    [DataEnvio] [datetime] NOT NULL DEFAULT GETDATE(),
    [ResidenciaEstabelecimentoId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
    [NotificacaoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
FOREIGN KEY (ResidenciaEstabelecimentoId) REFERENCES [dbo].[ResidenciasEstabelecimentos](ResidenciaEstabelecimentoId)
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[PontosColeta]    Script Date: 19/08/2024 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PontosColeta](
    [PontoColetaId] [int] IDENTITY(1,1) NOT NULL,      
    [Latitude] [decimal](9, 6) NOT NULL,
    [Longitude] [decimal](9, 6) NOT NULL,
    [TipoResiduoId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
    [PontoColetaId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
FOREIGN KEY (TipoResiduoId) REFERENCES [dbo].[TiposResiduo](TipoResiduoId)
) ON [PRIMARY]
GO

/****** Índices para otimizar consultas e integridade ******/
-- Índice para otimizar buscas por nome em ResidenciasEstabelecimentos
CREATE INDEX idx_residencias_nome ON [dbo].[ResidenciasEstabelecimentos]([NomeResidencia]);

-- Índice composto para busca de localização em PontosColeta
CREATE INDEX idx_pontoscoleta_localizacao ON [dbo].[PontosColeta]([Latitude], [Longitude]);

-- Índice em CalendarioColeta para otimizar buscas por dia da semana e horário
CREATE INDEX idx_calendariocoleta_dia_horario ON [dbo].[CalendarioColeta]([DiaSemana], [Horario]);

-- Índice para otimizar busca de notificações por data de envio
CREATE INDEX idx_notificacoes_dataenvio ON [dbo].[Notificacoes]([DataEnvio]);

/****** Scripts adicionais de integridade ******/
-- Verificação de existência de Notificações para residências/estabelecimentos inexistentes
ALTER TABLE [dbo].[Notificacoes]
ADD CONSTRAINT FK_Notificacoes_ResidenciasEstabelecimentos
FOREIGN KEY ([ResidenciaEstabelecimentoId]) 
REFERENCES [dbo].[ResidenciasEstabelecimentos]([ResidenciaEstabelecimentoId]);

-- Verificação de existência de Coletas para tipos de resíduos inexistentes
ALTER TABLE [dbo].[CalendarioColeta]
ADD CONSTRAINT FK_CalendarioColeta_TiposResiduo
FOREIGN KEY ([TipoResiduoId]) 
REFERENCES [dbo].[TiposResiduo]([TipoResiduoId]);

-- Verificação de existência de Pontos de Coleta para tipos de resíduos inexistentes
ALTER TABLE [dbo].[PontosColeta]
ADD CONSTRAINT FK_PontosColeta_TiposResiduo
FOREIGN KEY ([TipoResiduoId]) 
REFERENCES [dbo].[TiposResiduo]([TipoResiduoId]);

GO