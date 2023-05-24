-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 24 mai 2023 à 09:28
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
-- Structure de la table `result`
--

DROP TABLE IF EXISTS `result`;
CREATE TABLE IF NOT EXISTS `result` (
  `result_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `result_date` date NOT NULL,
  `result_exercice_id` int NOT NULL,
  `result_score` float NOT NULL,
  `result_goodanswer` int NOT NULL,
  `result_badanswer` int NOT NULL,
  PRIMARY KEY (`result_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `result`
--

INSERT INTO `result` (`result_id`, `user_id`, `result_date`, `result_exercice_id`, `result_score`, `result_goodanswer`, `result_badanswer`) VALUES
(1, 1, '2023-05-23', 1, 15, 15, 20),
(2, 1, '2023-05-01', 1, 10, 10, 10),
(3, 2, '2023-05-17', 1, 18, 18, 2);

-- --------------------------------------------------------

--
-- Structure de la table `spelling_history`
--

DROP TABLE IF EXISTS `spelling_history`;
CREATE TABLE IF NOT EXISTS `spelling_history` (
  `sh_id` int NOT NULL AUTO_INCREMENT,
  `sh_title` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `sh_text` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `sh_world` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `sh_difficulty` int NOT NULL,
  PRIMARY KEY (`sh_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `spelling_history`
--

INSERT INTO `spelling_history` (`sh_id`, `sh_title`, `sh_text`, `sh_world`, `sh_difficulty`) VALUES
(1, 'Les trois plumes', 'Il était une fois un roi qui avait trois fils. Les deux aînés étaient {intelligents } et {fiers}.Leur jeune frère, lui, ne parlait pas beaucoup, et tout le monde l’appelait le Simplet. Quand le roi, vieillissant, sentit sa fin prochaine, il réunit ses enf', 'Intelligents / fiers / tapis / mener / souffler', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_nom` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_prenom` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_naissance` date NOT NULL,
  `user_mdp` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_type` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`user_id`, `user_nom`, `user_prenom`, `user_email`, `user_naissance`, `user_mdp`, `user_type`) VALUES
(1, 'Jourdain', 'Benjamin', 'benjamin.jourdain94@gmail.com', '2023-05-09', '123', 1),
(2, 'Sol', 'Marie', 'marie.sol.mechante@gmail.com', '2016-05-04', 'mariesol', 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `result`
--
ALTER TABLE `result`
  ADD CONSTRAINT `result_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
