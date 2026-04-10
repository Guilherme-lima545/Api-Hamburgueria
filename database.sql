-- ===========================================
-- Banco de Dados da Hamburgueria
-- Atualizado no dia 10/04/2026 14:50
-- ===========================================
CREATE DATABASE IF NOT EXISTS hamburgueria;

USE hamburgueria;

-- Tabela de produtos
CREATE TABLE
  `produtos` (
    `id` int (11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(100) NOT NULL,
    `descricao` text DEFAULT NULL,
    `preco` decimal(10, 2) NOT NULL,
    `categoria` varchar(50) DEFAULT NULL,
    `disponivel` tinyint (1) DEFAULT 1,
    PRIMARY KEY (`id`),
    UNIQUE KEY `preco` (`preco`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci

  --Tabela de ordens
CREATE TABLE
  `ordens` (
    `id` int (11) NOT NULL AUTO_INCREMENT,
    `status` varchar(100) NOT NULL,
    `descricao` text DEFAULT NULL,
    `preco` decimal(10, 2) NOT NULL,
    `categoria` varchar(50) DEFAULT NULL,
    `disponivel` tinyint (1) DEFAULT 1,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci
  
  -- Tabela de itens da ordem
CREATE TABLE
  `ordem_lista` (
    `id` int (11) NOT NULL AUTO_INCREMENT,
    `ordem_id` int (11) DEFAULT NULL,
    `produto_id` int (11) DEFAULT NULL,
    `quantidade` int (11) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `ordem_id` (`ordem_id`),
    KEY `produto_id` (`produto_id`),
    CONSTRAINT `ordem_lista_ibfk_1` FOREIGN KEY (`ordem_id`) REFERENCES `ordens` (`id`),
    CONSTRAINT `ordem_lista_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci