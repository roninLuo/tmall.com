-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2022-06-25 17:17:50
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `tmall`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `picture` text NOT NULL,
  `num` int(11) NOT NULL,
  `details` text NOT NULL,
  `type` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `picture`, `num`, `details`, `type`) VALUES
(10003, '【爆款热卖】联想小新Air14 锐龙版 笔记本电脑 14英寸轻薄本便携学生本高性能商务便携办公电脑', 4599, '[\r\n  {\r\n    \"src\":\"/src/img/img2/3/inner/1.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/3/inner/2.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/3/inner/3.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/3/inner/4.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/3/inner/5.jpg\"\r\n  }\r\n]', 4512, '/src/img/img2/3/mainImg.jpg', NULL),
(10002, '宁美国度CR5台式电脑主机i5 10400/12代i5 12400办公电脑家用游戏设计主机台式机高配DIY组装机全套兼容整机', 2499, '[\r\n  {\r\n    \"src\":\"/src/img/img2/2/inner/1.png\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/2/inner/2.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/2/inner/3.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/2/inner/4.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/2/inner/5.jpg\"\r\n  }\r\n]', 487, '/src/img/img2/2/mainImg.png', NULL),
(10001, '宁美国度CR1S电脑主机i3 10100升12代i3 12100办公电脑台式全套企业客服家用游戏设计主机高配DIY组装机整机', 2199, '[\r\n  {\r\n    \"src\":\"/src/img/img2/1/inner/1.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/1/inner/2.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/1/inner/3.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/1/inner/4.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/1/inner/5.jpg\"\r\n  }\r\n]', 5959, '/src/img/img2/1/mainImg.png', NULL),
(10004, '【店铺爆品】ROG幻14 AMD锐龙R9/RTX3060轻薄本手提设计师大学生游戏本笔记本电脑办公玩家国度官方旗舰店', 9999, '[\r\n  {\r\n    \"src\":\"/src/img/img2/4/inner/1.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/4/inner/2.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/4/inner/3.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/4/inner/4.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/4/inner/5.jpg\"\r\n  }\r\n]', 132, '/src/img/img2/4/mainImg.jpg', NULL),
(10005, 'AOC一体机电脑办公家用睿11代八核超薄六核台式整机四核主机全套24英寸i3i5i7游戏型游戏27在线网课学习', 5899, '[\r\n  {\r\n    \"src\":\"/src/img/img2/5/inner/1.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/5/inner/2.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/5/inner/3.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/5/inner/4.jpg\"\r\n  },\r\n  {\r\n    \"src\":\"/src/img/img2/5/inner/5.jpg\"\r\n  }\r\n]', 342, '/src/img/img2/5/mainImg.jpg', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `touxiang` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uname`, `password`, `touxiang`) VALUES
('zhangsan', '123456', './img/touxiang/touxiang1.webp'),
('lisi', '123456', './img/touxiang/touxiang1.webp');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
