-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 13 2019 г., 01:15
-- Версия сервера: 8.0.15
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `books`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `qua_stock` int(5) NOT NULL,
  `qua_page` int(5) NOT NULL,
  `image` int(2) NOT NULL,
  `id_autor` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `books`
--

INSERT INTO `books` (`id`, `name`, `description`, `cost`, `qua_stock`, `qua_page`, `image`, `id_autor`) VALUES
(0, 'Евгений Онегин', 'Описание', '800.22', 5, 400, 3, 1),
(1, 'Война и мир Том1', 'Описание', '1050.00', 20, 500, 3, 2),
(2, 'Матрёнин двор', 'Описание', '150.00', 80, 50, 3, 3),
(3, 'Отцы и дети', 'Описание', '500.00', 3, 500, 3, 4),
(4, 'Настенька', 'Описание', '200.00', 50, 60, 3, 3),
(5, 'Тучи', 'Природа', '50.00', 30, 1, 1, 1),
(6, 'Программирование', 'Описание', '1800.00', 50, 600, 3, 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
