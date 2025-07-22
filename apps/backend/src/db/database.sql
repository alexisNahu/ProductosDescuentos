-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: todo
-- ------------------------------------------------------
-- Server version	8.4.5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cashbox`
--

DROP TABLE IF EXISTS `cashbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cashbox` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `stand_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `fk_cashbox_stands1_idx` (`stand_id`),
  CONSTRAINT `fk_cashbox_stands1` FOREIGN KEY (`stand_id`) REFERENCES `stands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cashbox`
--

LOCK TABLES `cashbox` WRITE;
/*!40000 ALTER TABLE `cashbox` DISABLE KEYS */;
INSERT INTO `cashbox` VALUES (1,'Caja Principal',1),(2,'Caja Gaseosas',2);
/*!40000 ALTER TABLE `cashbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discounts`
--

DROP TABLE IF EXISTS `discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `discount_rate` decimal(10,4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discounts`
--

LOCK TABLES `discounts` WRITE;
/*!40000 ALTER TABLE `discounts` DISABLE KEYS */;
INSERT INTO `discounts` VALUES (1,0.0000),(2,0.7800),(4,0.9000),(5,0.3000),(6,0.7000),(37,0.5400),(38,0.4300);
/*!40000 ALTER TABLE `discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (9,'create product'),(13,'create sale'),(1,'create stand'),(5,'create user'),(12,'delete product'),(4,'delete stand'),(8,'delete user'),(10,'list product'),(14,'list sale'),(2,'list stand'),(6,'list user'),(11,'update product'),(3,'update stand'),(7,'update user'),(15,'view report');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discount_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_discounts_id_fk` (`discount_id`),
  CONSTRAINT `products_discounts_id_fk` FOREIGN KEY (`discount_id`) REFERENCES `discounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Pajagua Mascada',5000,1),(2,'Chipa Guasu',60,6),(4,'Sopa Paraguaya',6000,1),(7,'Chicharô Trenzado',5500,1),(8,'Chipa Almidón',3000,1),(9,'chorizo',100,1),(10,'mani',4555,1),(11,'alexis',233,1),(12,'alexis',233,1),(13,'aa',220,1),(15,'gi',5000,1),(16,'pan',3000,1),(17,'pedro',4500,NULL),(18,'terere',5422,2),(20,'sanchez',7855,4),(21,'ajsñdfk',83987,4),(22,'asdf',2342,5),(36,'chorizo',4500,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_type` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `on_table` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reports_users_id_fk` (`user_id`),
  CONSTRAINT `reports_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (1,'INSERT',1,'PRODUCTS'),(2,'INSERT',NULL,'discounts'),(3,'INSERT',NULL,'discounts'),(4,'INSERT',NULL,'products'),(5,'INSERT',NULL,'discounts'),(6,'UPDATE',NULL,'products'),(7,'UPDATE',NULL,'products'),(8,'DELETE',NULL,'products'),(9,'INSERT',NULL,'products'),(10,'INSERT',NULL,'products'),(11,'INSERT',NULL,'discounts'),(12,'INSERT',NULL,'discounts'),(13,'INSERT',NULL,'discounts'),(14,'INSERT',NULL,'discounts'),(15,'INSERT',NULL,'discounts'),(16,'UPDATE',NULL,'discounts'),(17,'INSERT',NULL,'discounts'),(18,'INSERT',NULL,'discounts'),(19,'INSERT',NULL,'discounts'),(20,'INSERT',NULL,'discounts'),(21,'INSERT',NULL,'discounts'),(22,'INSERT',NULL,'discounts'),(23,'INSERT',NULL,'discounts'),(24,'INSERT',NULL,'discounts'),(25,'DELETE',NULL,'discounts'),(26,'DELETE',NULL,'discounts'),(27,'DELETE',NULL,'discounts'),(28,'INSERT',NULL,'discounts'),(29,'INSERT',NULL,'discounts'),(30,'INSERT',NULL,'discounts'),(31,'INSERT',NULL,'discounts'),(32,'INSERT',NULL,'discounts'),(33,'INSERT',NULL,'discounts'),(34,'INSERT',NULL,'discounts'),(35,'INSERT',NULL,'discounts'),(36,'INSERT',NULL,'discounts'),(37,'INSERT',NULL,'discounts'),(38,'INSERT',NULL,'discounts'),(39,'INSERT',NULL,'discounts'),(40,'INSERT',NULL,'discounts'),(41,'DELETE',NULL,'discounts'),(42,'DELETE',NULL,'discounts'),(43,'DELETE',NULL,'discounts'),(44,'DELETE',NULL,'discounts'),(45,'DELETE',NULL,'discounts'),(46,'DELETE',NULL,'discounts'),(47,'DELETE',NULL,'discounts'),(48,'DELETE',NULL,'discounts'),(49,'DELETE',NULL,'discounts'),(50,'DELETE',NULL,'discounts'),(51,'DELETE',NULL,'discounts'),(52,'DELETE',NULL,'discounts'),(53,'DELETE',NULL,'discounts'),(54,'DELETE',NULL,'discounts'),(55,'DELETE',NULL,'discounts'),(56,'DELETE',NULL,'discounts'),(57,'DELETE',NULL,'discounts'),(58,'DELETE',NULL,'discounts'),(59,'DELETE',NULL,'discounts'),(60,'DELETE',NULL,'discounts'),(61,'DELETE',NULL,'discounts'),(62,'DELETE',NULL,'discounts'),(63,'DELETE',NULL,'discounts'),(64,'DELETE',NULL,'discounts'),(65,'UPDATE',NULL,'discounts'),(66,'INSERT INTO discounts (id, discount_rate) VALUES (37, 0.5400);',NULL,'discounts'),(67,'INSERT INTO discounts (id, discount_rate) VALUES (38, 0.4300);',NULL,'discounts'),(68,'INSERT: id=36, name=chorizo, price=4500, discount_id=2',1,'products');
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permissions`
--

DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permissions` (
  `roles_id` int NOT NULL,
  `permissions_id` int NOT NULL,
  KEY `fk_role_permissions_roles1_idx` (`roles_id`),
  KEY `fk_role_permissions_permissions1_idx` (`permissions_id`),
  CONSTRAINT `fk_role_permissions_permissions1` FOREIGN KEY (`permissions_id`) REFERENCES `permissions` (`id`),
  CONSTRAINT `fk_role_permissions_roles1` FOREIGN KEY (`roles_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador'),(2,'Vendedor');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(100) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `cashbox_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sales_cashbox1_idx` (`cashbox_id`),
  KEY `fk_sales_users1_idx` (`user_id`),
  CONSTRAINT `fk_sales_cashbox1` FOREIGN KEY (`cashbox_id`) REFERENCES `cashbox` (`id`),
  CONSTRAINT `fk_sales_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_details`
--

DROP TABLE IF EXISTS `sales_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sale_id` int NOT NULL,
  `product_id` int NOT NULL,
  `amount` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sales_details_sales1_idx` (`sale_id`),
  KEY `fk_sales_details_products1_idx` (`product_id`),
  CONSTRAINT `fk_sales_details_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_sales_details_sales1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_details`
--

LOCK TABLES `sales_details` WRITE;
/*!40000 ALTER TABLE `sales_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stands`
--

DROP TABLE IF EXISTS `stands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stands`
--

LOCK TABLES `stands` WRITE;
/*!40000 ALTER TABLE `stands` DISABLE KEYS */;
INSERT INTO `stands` VALUES (1,'Stand 1 - Payagua'),(2,'Stand 2 - Bebidas');
/*!40000 ALTER TABLE `stands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tokens`
--

DROP TABLE IF EXISTS `user_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `token` text NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_user_tokens_users_idx` (`user_id`),
  CONSTRAINT `fk_user_tokens_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tokens`
--

LOCK TABLES `user_tokens` WRITE;
/*!40000 ALTER TABLE `user_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(150) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'vendedora1','$2b$10$3s9XjyL2mJvMP7lLO4tpVe/VbJ2Q1cRvCsGFtoR17CaFxl6SD1XEK','Juan Pérez'),(2,'admin','$2b$10$3s9XjyL2mJvMP7lLO4tpVe/VbJ2Q1cRvCsGFtoR17CaFxl6SD1XEK','María López');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-20 20:42:16
