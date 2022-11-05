-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: groupomania_db
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int DEFAULT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `postId` (`postId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES (1,'Thank you for joining Groupamania',NULL,'2022-10-31 13:31:49','2022-10-31 13:31:49',1,1),(2,'We are very happy to join Groupomania !',NULL,'2022-10-31 14:26:03','2022-10-31 14:26:03',1,1),(3,'Wouaw ?',NULL,'2022-10-31 17:32:14','2022-10-31 17:32:14',3,4);
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int DEFAULT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  KEY `postId` (`postId`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes`
--

LOCK TABLES `Likes` WRITE;
/*!40000 ALTER TABLE `Likes` DISABLE KEYS */;
INSERT INTO `Likes` VALUES (11,'2022-10-31 16:57:16','2022-10-31 16:57:16',3,3),(14,'2022-10-31 16:57:48','2022-10-31 16:57:48',2,4),(15,'2022-10-31 16:57:58','2022-10-31 16:57:58',2,1),(16,'2022-10-31 16:58:01','2022-10-31 16:58:01',2,3),(17,'2022-10-31 16:58:03','2022-10-31 16:58:03',2,2),(28,'2022-10-31 17:04:11','2022-10-31 17:04:11',1,2),(29,'2022-10-31 17:05:30','2022-10-31 17:05:30',3,1),(31,'2022-11-01 15:26:35','2022-11-01 15:26:35',3,4),(33,'2022-11-01 18:40:53','2022-11-01 18:40:53',1,3),(37,'2022-11-01 19:02:43','2022-11-01 19:02:43',1,4),(39,'2022-11-01 19:10:00','2022-11-01 19:10:00',1,1),(41,'2022-11-05 12:52:32','2022-11-05 12:52:32',1,35),(44,'2022-11-05 12:53:34','2022-11-05 12:53:34',2,35),(45,'2022-11-05 12:57:32','2022-11-05 12:57:32',3,36),(46,'2022-11-05 12:58:03','2022-11-05 12:58:03',2,36);
/*!40000 ALTER TABLE `Likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `like` int DEFAULT '0',
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Hey we are on groupomania ! ? ?','http://localhost:3000/public/images/image_1667218596061.jpg',3,0,'2022-10-31 12:16:36','2022-11-05 12:48:37',1),(2,'This my new car !! ?','http://localhost:3000/public/images/image_1667234747123.jpeg',2,0,'2022-10-31 16:45:47','2022-10-31 17:05:46',2),(3,'Amazing Car ? ','http://localhost:3000/public/images/image_1667235021690.jpeg',3,0,'2022-10-31 16:50:21','2022-11-05 12:40:00',2),(4,'Look my collection !!','http://localhost:3000/public/images/image_1667235429743.jpeg',3,0,'2022-10-31 16:57:09','2022-11-01 19:02:43',3),(35,'Look my new place for work ! ?','http://localhost:3000/public/images/image_1667652619442.jpg',2,0,'2022-11-05 12:50:19','2022-11-05 12:53:34',1),(36,'I love travel in Santorini ❤️','http://localhost:3000/public/images/image_1667653046318.jpeg',2,0,'2022-11-05 12:57:26','2022-11-05 12:58:03',3);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT 'http://localhost:3000/public/default/profiledefault.jpg',
  `isAdmin` enum('Administrateur','Modérateur','Utilisateur') DEFAULT 'Utilisateur',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Luc','Laurent','luc@gmail.com','$2a$10$FZ27HHu/CpxhxuelAWC9S.XwjqeTcpKt4Xwrwt9go4p0N0NyWe6U6','Developper Web','http://localhost:3000/public/default/profiledefault.jpg','Administrateur','2022-10-31 11:44:38','2022-11-05 10:50:41'),(2,'Noriane','Cariou','noriane@gmail.com','$2a$10$c5CmY3aWGSj40uRY9fv9O.bqGbnclrgHdcyCpW63jetNfhzg0qNTq','Self Employer','http://localhost:3000/public/default/profiledefault.jpg','Utilisateur','2022-10-31 16:44:56','2022-10-31 16:44:56'),(3,'Sofiane','Cariou','sofiane@gmail.com','$2a$10$I0OXKDd8G6WLNGWPpAKRlO7AjtHkC4x/5K.gv8957z0sZ/vzi3SZq','Non employed','http://localhost:3000/public/default/profiledefault.jpg','Utilisateur','2022-10-31 16:54:05','2022-10-31 16:54:05');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-05 14:15:56
