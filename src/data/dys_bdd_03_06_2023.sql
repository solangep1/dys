-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : sam. 03 juin 2023 à 14:27
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dys*bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `exercice`
--

DROP TABLE IF EXISTS `exercice`;
CREATE TABLE IF NOT EXISTS `exercice` (
  `exercice_id` int NOT NULL AUTO_INCREMENT,
  `exercice_title` varchar(255) DEFAULT NULL,
  `exercice_type` varchar(50) DEFAULT NULL,
  `exercice_difficulty` int DEFAULT NULL,
  PRIMARY KEY (`exercice_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `exercice`
--

INSERT INTO `exercice` (`exercice_id`, `exercice_title`, `exercice_type`, `exercice_difficulty`) VALUES
(1, 'Les trois plumes', 'SpellingHistory', 1),
(2, 'Les animaux de la ferme', 'Dooble', 2),
(3, 'Lorem ipsum', 'SpellingHistory', 5);

-- --------------------------------------------------------

--
-- Structure de la table `result`
--

DROP TABLE IF EXISTS `result`;
CREATE TABLE IF NOT EXISTS `result` (
  `result_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `result_date` date DEFAULT NULL,
  `exercice_id` int DEFAULT NULL,
  `result_score` float DEFAULT NULL,
  `result_goodanswer` int DEFAULT NULL,
  `result_badanswer` int DEFAULT NULL,
  PRIMARY KEY (`result_id`),
  KEY `user_id` (`user_id`),
  KEY `exercice_id` (`exercice_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `result`
--

INSERT INTO `result` (`result_id`, `user_id`, `result_date`, `exercice_id`, `result_score`, `result_goodanswer`, `result_badanswer`) VALUES
(1, 1, '2017-06-14', 1, 10, 10, 20),
(2, 1, '2020-06-10', 1, 20, 20, 0),
(3, 2, '2021-06-10', 1, 5, 5, 15),
(4, 2, '2017-06-21', 3, 18, 18, 2);

-- --------------------------------------------------------

--
-- Structure de la table `spellinghistory`
--

DROP TABLE IF EXISTS `spellinghistory`;
CREATE TABLE IF NOT EXISTS `spellinghistory` (
  `sh_id` int NOT NULL AUTO_INCREMENT,
  `exercice_id` int DEFAULT NULL,
  `exercice_title` varchar(255) DEFAULT NULL,
  `exercice_difficulty` int DEFAULT NULL,
  `sh_text` varchar(1000) DEFAULT NULL,
  `sh_result` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sh_id`),
  KEY `exercice_id` (`exercice_id`),
  KEY `exercice_title` (`exercice_title`(250))
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `spellinghistory`
--

INSERT INTO `spellinghistory` (`sh_id`, `exercice_id`, `exercice_title`, `exercice_difficulty`, `sh_text`, `sh_result`) VALUES
(1, 1, 'Les trois plumes\r\n', 1, 'Il était une fois un roi qui avait trois fils. Les deux aînés étaient {intelligents } et {fiers}.Leur jeune frère, lui, ne parlait pas beaucoup, et tout le monde l’appelait le Simplet. Quand le roi, vieillissant, sentit sa fin prochaine, il réunit ses enfants', 'Intelligents / fiers / tapis / mener / souffler'),
(2, 3, 'Lorem ipsum', 5, 'Lorem ipsum {dolor} sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices {diam]. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu {massa}, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue {blandit} sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales {hendrerit}.', 'dolor / diam / massa / blandit / hendrerit');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_lastname` varchar(50) DEFAULT NULL,
  `user_firstname` varchar(50) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_dateofbirth` date DEFAULT NULL,
  `user_mdp` varchar(50) DEFAULT NULL,
  `user_type` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `user_lastname`, `user_firstname`, `user_email`, `user_dateofbirth`, `user_mdp`, `user_type`) VALUES
(1, 'Benjamin', 'Jourdain', 'benjamin@jourdain94@gmail.com', '2008-06-11', '123', 1),
(2, 'Marie', 'Sol', 'Marie.sol@gmail.com', '2023-06-15', 'mariesol', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

