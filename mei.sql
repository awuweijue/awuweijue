/*
Navicat MySQL Data Transfer

Source Server         : wuwejue
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mei

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-27 15:54:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for buybag
-- ----------------------------
DROP TABLE IF EXISTS `buybag`;
CREATE TABLE `buybag` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `dataid` int(12) DEFAULT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `size` int(12) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `qty` int(12) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buybag
-- ----------------------------

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `count` double(11,1) DEFAULT NULL,
  PRIMARY KEY (`name`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '黑色男童休闲鞋', '../img/goodlist/1.jpg', '499.00', 'nike耐克', '婴童', '4.0');
INSERT INTO `goodlist` VALUES ('2', 'STAN SMITH白色冲孔蓝尾女士休闲鞋', '../img/goodlist/2.jpg', '699.00', 'adidas阿迪达斯', '女士', '4.5');
INSERT INTO `goodlist` VALUES ('3', 'SUPERSTAR 80S黑色系带男女款运动鞋', '../img/goodlist/3.jpg', '799.00', 'adidas阿迪达斯', '男士', '3.5');
INSERT INTO `goodlist` VALUES ('4', 'DISC BLAZE黑色男女款休闲鞋', '../img/goodlist/4.jpg', '599.00', 'puma彪马', '女士', '4.5');
INSERT INTO `goodlist` VALUES ('5', '保湿隔离修饰乳（10号） 30ml', '../img/goodlist/5.jpg', '489.00', 'chanel香奈儿', '女士', '5.5');
INSERT INTO `goodlist` VALUES ('6', '黑色男童休闲鞋', '../img/goodlist/6.jpg', '581.00', 'nike耐克', '婴童', '3.0');
INSERT INTO `goodlist` VALUES ('7', '黑色男童休闲鞋', '../img/goodlist/7.jpg', '569.00', 'nike耐克', '婴童', '7.0');
INSERT INTO `goodlist` VALUES ('8', '黑色男童休闲鞋', '../img/goodlist/8.jpg', '557.00', 'nike耐克', '婴童', '9.0');
INSERT INTO `goodlist` VALUES ('9', '黑色男童休闲鞋', '../img/goodlist/9.jpg', '545.00', 'nike耐克', '婴童', '2.0');
INSERT INTO `goodlist` VALUES ('10', '黑色男童休闲鞋', '../img/goodlist/10.jpg', '533.00', 'nike耐克', '婴童', '5.0');
INSERT INTO `goodlist` VALUES ('11', '黑色男童休闲鞋', '../img/goodlist/11.jpg', '521.00', 'nike耐克', '婴童', '6.0');
INSERT INTO `goodlist` VALUES ('12', '黑色男童休闲鞋', '../img/goodlist/12.jpg', '509.00', 'nike耐克', '婴童', '8.0');
INSERT INTO `goodlist` VALUES ('13', '黑色男童休闲鞋', '../img/goodlist/13.jpg', '497.00', 'nike耐克', '婴童', '3.0');
INSERT INTO `goodlist` VALUES ('14', '黑色男童休闲鞋', '../img/goodlist/14.jpg', '485.00', 'nike耐克', '婴童', '5.0');
INSERT INTO `goodlist` VALUES ('15', '黑色男童休闲鞋', '../img/goodlist/15.jpg', '473.00', 'nike耐克', '婴童', '6.0');
INSERT INTO `goodlist` VALUES ('16', '紫红色系带女童保暖雪地靴', '../img/goodlist/16.jpg', '467.00', 'nike耐克', '男士', '4.0');
INSERT INTO `goodlist` VALUES ('17', '红色LOGO饰女小童气垫运动鞋', '../img/goodlist/17.jpg', '876.00', 'nike耐克', '男士', '7.0');
INSERT INTO `goodlist` VALUES ('18', '亮红色毛毛虫儿童运动鞋', '../img/goodlist/18.jpg', '433.00', 'nike耐克', '男士', '8.0');
INSERT INTO `goodlist` VALUES ('19', '男士Air Zoom Spirimic 系带运动鞋', '../img/goodlist/19.jpg', '458.00', 'nike耐克', '男士', '3.0');
INSERT INTO `goodlist` VALUES ('20', '男士Lab Air zoom sertig 16 黑白运动鞋', '../img/goodlist/20.jpg', '651.00', 'nike耐克', '男士', '9.0');
INSERT INTO `goodlist` VALUES ('21', '黑红撞色织物拼接男幼童运动鞋', '../img/goodlist/21.jpg', '509.00', 'adidas阿迪达斯', '女士', '4.5');
INSERT INTO `goodlist` VALUES ('22', '粉色织物拼接女幼童运动鞋', '../img/goodlist/22.jpg', '569.00', 'adidas阿迪达斯', '女士', '5.5');
INSERT INTO `goodlist` VALUES ('23', 'FURY蓝白黑撞色拼接男女运动鞋', '../img/goodlist/23.jpg', '651.00', 'puma彪马', '女士', '8.5');
INSERT INTO `goodlist` VALUES ('24', 'FURY深蓝色拼接男女款运动鞋', '../img/goodlist/24.jpg', '433.00', 'puma彪马', '女士', '3.5');

-- ----------------------------
-- Table structure for home
-- ----------------------------
DROP TABLE IF EXISTS `home`;
CREATE TABLE `home` (
  `Imgurl` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count` double(30,1) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of home
-- ----------------------------
INSERT INTO `home` VALUES ('img/index/1.jpg', '1', '5.0', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/2.jpg', '2', '6.0', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/3.jpg', '3', '3.0', '男士皮衣 秋冬时髦先机抢先看');
INSERT INTO `home` VALUES ('img/index/4.jpg', '4', '5.0', '男士初冬必备外套');
INSERT INTO `home` VALUES ('img/index/5.jpg', '5', '4.0', '举手投足奢侈体验   男士精选大牌');
INSERT INTO `home` VALUES ('img/index/6.jpg', '6', '5.0', 'JOCKEY   有态度的男士内衣');
INSERT INTO `home` VALUES ('img/index/7.jpg', '7', '5.0', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/8.jpg', '8', '9.0', '女士外套');
INSERT INTO `home` VALUES ('img/index/9.jpg', '9', '9.0', '女士鞋履');
INSERT INTO `home` VALUES ('img/index/10.jpg', '10', '9.0', 'MAX MARA   新品上新 低调抢镜');
INSERT INTO `home` VALUES ('img/index/11.jpg', '11', '4.0', '女士包袋');
INSERT INTO `home` VALUES ('img/index/12.jpg', '12', '5.0', '举手投足奢侈体验   男士精选大牌');
INSERT INTO `home` VALUES ('img/index/13.jpg', '13', '6.0', 'MAX MARA   新品上新 低调抢镜');
INSERT INTO `home` VALUES ('img/index/14.jpg', '14', '4.0', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/15.jpg', '15', '4.0', '男士皮衣 秋冬时髦先机抢先看');
INSERT INTO `home` VALUES ('img/index/16.jpg', '16', '5.5', '男士初冬必备外套');
INSERT INTO `home` VALUES ('img/index/17.jpg', '17', '6.0', '举手投足奢侈体验   男士精选大牌');
INSERT INTO `home` VALUES ('img/index/18.jpg', '18', '7.0', 'JOCKEY   有态度的男士内衣');
INSERT INTO `home` VALUES ('img/index/19.jpg', '19', '6.5', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/20.jpg', '20', '8.0', '女士外套');
INSERT INTO `home` VALUES ('img/index/21.jpg', '21', '4.0', '女士鞋履');
INSERT INTO `home` VALUES ('img/index/22.jpg', '22', '3.0', 'MAX MARA   新品上新 低调抢镜');
INSERT INTO `home` VALUES ('img/index/23.jpg', '23', '4.0', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/24.jpg', '24', '3.0', '男士皮衣 秋冬时髦先机抢先看');
INSERT INTO `home` VALUES ('img/index/25.jpg', '25', '2.0', '男士初冬必备外套');
INSERT INTO `home` VALUES ('img/index/26.jpg', '26', '6.0', '举手投足奢侈体验   男士精选大牌');
INSERT INTO `home` VALUES ('img/index/27.jpg', '27', '8.0', 'JOCKEY   有态度的男士内衣');
INSERT INTO `home` VALUES ('img/index/28.jpg', '28', '3.5', '女士羊绒羊毛专场');
INSERT INTO `home` VALUES ('img/index/29.jpg', '29', '5.5', '女士外套');
INSERT INTO `home` VALUES ('img/index/30.jpg', '30', '6.0', '女士鞋履');
INSERT INTO `home` VALUES ('img/index/31.jpg', '31', '7.0', 'MAX MARA   新品上新 低调抢镜');
INSERT INTO `home` VALUES ('img/index/32.jpg', '32', '8.0', '女士包袋');
INSERT INTO `home` VALUES ('img/index/33.jpg', '33', '4.5', 'MARYLING   干练有型，冷都十足 高定女装');
INSERT INTO `home` VALUES ('img/index/34.jpg', '34', '6.0', '男士千元穿搭攻略【跨境】');
INSERT INTO `home` VALUES ('img/index/35.jpg', '35', '2.5', 'LUCIA BERUTTO   情迷蕾丝女士家居服');
INSERT INTO `home` VALUES ('img/index/36.jpg', '36', '4.0', ' LAYTEX\r\nLAYTEX   泰国乳胶枕专场');
INSERT INTO `home` VALUES ('img/index/37.jpg', '37', '6.0', '周三清仓专场   女士千元穿搭攻略【跨境】');
INSERT INTO `home` VALUES ('img/index/38.jpg', '38', '5.5', '男士千元穿搭攻略【跨境】');
INSERT INTO `home` VALUES ('img/index/39.jpg', '39', '3.0', ' 女士千元鞋包推荐【跨境】');
INSERT INTO `home` VALUES ('img/index/40.jpg', '40', '6.0', 'MAX MARA   新品上新 低调抢镜');
INSERT INTO `home` VALUES ('img/index/41.jpg', '41', '8.5', 'LUCIA BERUTTO   情迷蕾丝女士家居服');
INSERT INTO `home` VALUES ('img/index/42.jpg', '42', '8.0', '男士千元穿搭攻略【跨境】');
INSERT INTO `home` VALUES ('img/index/43.jpg', '43', '9.0', '男士千元穿搭攻略【跨境】 女士千元鞋包推荐【跨境】');
INSERT INTO `home` VALUES ('img/index/44.jpg', '44', '3.0', '周三清仓专场   女士千元穿搭攻略【跨境】');
INSERT INTO `home` VALUES ('img/index/45.jpg', '45', '2.5', '女士鞋履');
INSERT INTO `home` VALUES ('img/index/46.jpg', '46', '4.0', 'LUCIA BERUTTO   情迷蕾丝女士家居服');
INSERT INTO `home` VALUES ('img/index/47.jpg', '47', '5.0', '男士千元穿搭攻略【跨境】');
INSERT INTO `home` VALUES ('img/index/48.jpg', '48', '8.0', ' 女士千元鞋包推荐【跨境】');
INSERT INTO `home` VALUES ('img/index/49.jpg', '49', '6.0', ' LAYTEX\r\nLAYTEX   泰国乳胶枕专场');
INSERT INTO `home` VALUES ('img/index/50.jpg', '50', '2.0', 'MAX MARA   新品上新 低调抢镜');
INSERT INTO `home` VALUES ('img/index/51.jpg', '51', '0.5', '男士千元穿搭攻略【跨境】');

-- ----------------------------
-- Table structure for phone
-- ----------------------------
DROP TABLE IF EXISTS `phone`;
CREATE TABLE `phone` (
  `uname` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `psw` varchar(255) NOT NULL,
  PRIMARY KEY (`uname`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of phone
-- ----------------------------
INSERT INTO `phone` VALUES ('15770745648', '1', '11111111');
INSERT INTO `phone` VALUES ('15555555555', '2', '11111111');
INSERT INTO `phone` VALUES ('13333333333', '3', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('15555555556', '4', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('15770745647', '5', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('16666666666', '14', '11111111');
INSERT INTO `phone` VALUES ('17777777777', '15', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('18888888888', '16', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('18888888889', '17', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('18882888888', '18', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('17777665555', '19', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('14444442424', '20', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('14567844444', '21', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('13444300023', '22', 'aaaaaaaaaaaaa');
INSERT INTO `phone` VALUES ('14567855555', '23', 'aaaaaaaaaaaaa');
SET FOREIGN_KEY_CHECKS=1;
