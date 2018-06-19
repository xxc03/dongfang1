-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 06 月 19 日 00:48
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `dongfang`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`sid`, `url`) VALUES
(1, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180611095206_78.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180611095429_33.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180611100106_85.jpg'),
(2, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608203348_74.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608203529_6.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608203720_31.jpg'),
(3, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608203821_8.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608204012_61.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608204241_71.jpg'),
(4, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608204337_88.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608204526_63.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608204802_56.jpg'),
(5, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608162937_39.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608163130_98.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608163334_23.jpg'),
(6, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608205319_47.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608205728_84.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608205926_84.jpg'),
(7, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180604193332_19.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180604193108_39.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180604193238_58.jpg'),
(8, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608210021_62.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608210116_30.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608210320_24.jpg'),
(9, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180604093102_93.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180604093633_77.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180604094152_93.jpg'),
(10, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608202454_79.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608202626_71.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608202814_33.jpg'),
(11, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180603144258_77.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180601154617_46.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180601154828_45.jpg'),
(12, 'https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11361/13318/1_20180608210739_26.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11362/13319/1_20180608211001_55.jpg,https://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/11363/13320/1_20180608211105_87.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `piclist`
--

CREATE TABLE IF NOT EXISTS `piclist` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(999) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` varchar(15) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `piclist`
--

INSERT INTO `piclist` (`sid`, `url`, `title`, `price`) VALUES
(1, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L1.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L2.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L3.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L4.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L5.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L6.jpg', '慕典 定制成品窗帘（限4m以内墙面）', '1680'),
(2, 'https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-1L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-2L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-3L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-4L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-5L.jpg,https://cdnimg.ocj.com.cn/item_images/item/15/23/6833/15236833-L.jpg', '[超级囤货日]欧派(OUPAI) 高端室内木门', '1680'),
(3, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/2001/15222001-L.jpg', '美意达(MONETA) 煎炒不粘双锅新春感恩组合', '￥258'),
(4, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/7126/15227126L.jpg', '林内(Rinnai) 13升恒温燃气热水器RUS-13QJ04（原价购买）', '￥3198'),
(5, 'https://cdnimg.ocj.com.cn/item_images/item/15/20/1802/15201802-L.jpg', '同福泰 膳食养生之猴头菇黑米粉', '￥328'),
(6, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/6396/15226396L.jpg', '口齿康 蜂胶漱口水超值特惠装', '￥299'),
(7, 'https://cdnimg.ocj.com.cn/item_images/item/15/21/7569/15217569L.jpg', '中粮家佳康精装夏季特惠组', '￥199'),
(8, 'https://cdnimg.ocj.com.cn/item_images/item/15/20/5885/15205885L.jpg', '奇异农庄(KiwiFarm) 新西兰原产牛尾500g*2赠送新西兰原产牛腩500g*2', '￥3445'),
(9, 'https://cdnimg.ocj.com.cn/item_images/item/15/11/8104/15118104L.jpg', '[健康“本”该这样]新生命 鱼油磷脂100粒(3+3)养生组合', '￥298'),
(10, 'https://cdnimg.ocj.com.cn/item_images/item/15/13/6865/15136865L.jpg', '林内(Rinnai) 13升恒温燃气热水器RUS-13QJ04（原价购买）', '￥998'),
(11, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/2860/15192860L.jpg', '（新鲜进口）probiotics story 原装进口丹麦乳', '￥888'),
(12, 'https://cdnimg.ocj.com.cn/item_images/item/15/21/9822/15219822L.jpg', '艾多 冰箱保鲜带盖收纳盒6只装', '￥99'),
(13, 'https://cdnimg.ocj.com.cn/item_images/item/15/20/9519/15209519L.jpg', '空间优品 牛津布收纳箱66L方格三色6件套', '￥219'),
(14, 'https://cdnimg.ocj.com.cn/item_images/item/15/08/7944/15087944L.jpg', '金加瀛二合一桑蚕长丝贡被*2（220*240,1000克+2', '￥2984'),
(15, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/8237/15198237L.jpg', '猫猫 澳洲进口羊毛羊毛被+羊毛床垫(五尺床组)', '￥1058'),
(16, 'https://cdnimg.ocj.com.cn/item_images/item/15/17/4356/15174356L.jpg', 'SIMELO 印象京都系列高真空大师焖烧锅4.5L(帝王金)', '￥1028'),
(17, 'https://cdnimg.ocj.com.cn/item_images/item/15/18/1242/15181242L.jpg', '膳魔师无油空气炸锅', '￥899'),
(18, 'https://cdnimg.ocj.com.cn/item_images/item/15/18/9681/15189681L.jpg', '浪莎 秋冬季舒柔加厚加绒一体裤6件组', '￥298'),
(19, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/7832/15227832L.jpg', '中粮家佳康精装夏季特惠组', '￥199'),
(20, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/1699/15221699L.jpg', '慕典 定制成品窗帘（限4m以内墙面）', '￥89'),
(21, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/1039/15221039L.jpg', '同福泰 膳食养生之猴头菇黑米粉松下(Panasonic) 干湿两剃电动剃须刀 ES-WSL7D', '￥199');

-- --------------------------------------------------------

--
-- 表的结构 `recommend`
--

CREATE TABLE IF NOT EXISTS `recommend` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(300) NOT NULL,
  `price` varchar(15) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `recommend`
--

INSERT INTO `recommend` (`sid`, `url`, `title`, `price`) VALUES
(1, 'https://cdnimg.ocj.com.cn/item_images/item/15/16/2932/15162932L.jpg', '雅萝依 蛋白生物酵素洗剂超值清洁15件组', '￥298'),
(2, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/9167/15229167L.jpg', '中粮家佳康精装夏季特惠组', '￥199'),
(3, 'https://cdnimg.ocj.com.cn/item_images/item/15/23/5908/15235908-L.jpg', '壹食壹品 酥脆猪肉脯礼盒', '￥258'),
(4, 'https://cdnimg.ocj.com.cn/item_images/item/15/17/6358/15176358L.jpg', '哈根达斯 法国原装进口夏季甜蜜组合装', '￥248'),
(5, 'https://cdnimg.ocj.com.cn/item_images/item/15/22/9167/15229167L.jpg', '中粮家佳康精装夏季特惠组', '￥199');

-- --------------------------------------------------------

--
-- 表的结构 `shoplist`
--

CREATE TABLE IF NOT EXISTS `shoplist` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(300) NOT NULL,
  `price` varchar(15) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- 转存表中的数据 `shoplist`
--

INSERT INTO `shoplist` (`sid`, `url`, `title`, `price`) VALUES
(1, 'https://cdnimg.ocj.com.cn/item_images/item/15/16/7846/15167846L.jpg', '[商城]豪雄 黄冰糖454gx4袋', '￥89'),
(2, 'https://cdnimg.ocj.com.cn/item_images/item/49/15/79/491579L.jpg', '豪雄 椴背黑木耳200gx2包', '￥128'),
(3, 'https://cdnimg.ocj.com.cn/item_images/item/15/16/7850/15167850L.jpg', '[商城]豪雄 茶树菇200gx2袋', '￥118'),
(4, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/8623/15198623L.jpg', '[商城]浪莎 男女大红色本命年、结婚、情侣内', '￥79'),
(5, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/1804/15191804L.jpg', '[商城]浪莎 女士深V性感蕾丝无痕调整型聚拢无', '￥66'),
(6, 'https://cdnimg.ocj.com.cn/item_images/item/15/20/9079/15209079L.jpg', '[商城]浪莎 加绒加厚中筒雪地袜5双', '￥89'),
(7, 'https://cdnimg.ocj.com.cn/item_images/item/15/17/4996/15174996L.jpg', '[商城]华为(HUAWEI) Nova青春版 流光水', '￥1,599'),
(8, 'https://cdnimg.ocj.com.cn/item_images/item/15/17/8422/15178422L.jpg', '[商城]糖猫 儿童电话智能手表M1 实时定位 防', '￥798'),
(9, 'https://cdnimg.ocj.com.cn/item_images/item/15/15/9894/15159894L.jpg', '[商城]魔声(Monster) ISPORT WIR', '￥369'),
(10, 'https://cdnimg.ocj.com.cn/item_images/item/15/16/1868/15161868L.jpg', '[商城]PiPi Through 管道疏通剂F两瓶组', '￥79'),
(11, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/0215/15190215L.jpg', '[商城]菲洛施(Frosch) 芦荟润肤洗碗液500', '￥89'),
(12, 'https://cdnimg.ocj.com.cn/item_images/item/15/15/0282/15150282L.jpg', '[商城]伟复 墙体除霉剂650ml', '￥99'),
(13, 'https://cdnimg.ocj.com.cn/item_images/item/15/18/3945/15183945L.jpg', '【会员专享】WOLL 德国制造蓝宝石炒锅特惠装', '￥1270'),
(14, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/7292/15197292L.jpg', '小熊(Bear) YSH-B18T1养生壶(加厚玻璃，分体设', '￥207'),
(15, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/7290/15197290L.jpg', '格兰仕(Galanz) 智能微波炉光波炉 全镜面时尚面板 ', '￥527'),
(16, 'https://cdnimg.ocj.com.cn/item_images/item/15/19/8687/15198687-L.jpg', '北极绒 女士汉麻抗菌纯色棉质中腰内裤 8条装（真', '￥298'),
(17, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9936/11424/1_20171124140456_10.jpg', '乐扣乐扣储物收纳箱三件套', '￥598'),
(18, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9936/11424/1_20180327161044_26.jpg', 'Simelo生活美学深炖锅', '￥258'),
(19, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9937/11425/1_20170930145820_71.jpg', '单件满99元减5元（有效期至6月30日）', '300'),
(20, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9937/11425/1_20180323174612_31.jpg', '单件满199元减20元（有效期至6月30日）', '800'),
(21, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9937/11425/1_20170930150102_26.jpg', '单件满299元减30元（有效期至6月30日）', '1000'),
(22, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9937/11425/1_20171003153400_74.jpg', '单件满499元减50元（有效期至6月30日）', '1500');

-- --------------------------------------------------------

--
-- 表的结构 `smallbanner`
--

CREATE TABLE IF NOT EXISTS `smallbanner` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 转存表中的数据 `smallbanner`
--

INSERT INTO `smallbanner` (`sid`, `url`) VALUES
(1, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180608165047_31.jpg'),
(2, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180608164802_69.jpg'),
(3, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180404135541_1.jpg'),
(4, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180313103359_30.jpg'),
(5, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/10704/12343/2_20180514144510_55.jpg'),
(6, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9920/11193/1_20170630133153_95.jpg'),
(7, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9920/11193/1_20170520094949_61.jpg'),
(8, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9920/11193/1_20170520095015_94.jpg'),
(9, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20180515154556_54.jpg'),
(10, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20170616164648_26.jpg'),
(11, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20161021141539_73.jpg'),
(12, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9921/11199/1_20161010103926_16.jpg'),
(13, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180301183128_35.jpg'),
(14, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20180301182912_100.jpg'),
(15, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20160617140638_42.jpg'),
(16, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9923/11212/1_20170406140747_17.jpg'),
(17, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20180104183153_83.jpg'),
(18, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20170331204511_36.jpg'),
(19, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20170331204418_86.jpg'),
(20, 'http://cdnimg.ocj.com.cn/image_site/shop/conts/8021/6741/9931/11245/1_20170204153101_89.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`sid`, `username`, `password`) VALUES
(1, '18050526035', '96e79218965eb72c92a549dd5a330112'),
(2, '15260933160', 'e3ceb5881a0a1fdaad01296d7554868d'),
(3, '13022222222', '1a100d2c0dab19c4430e7d73762b3423'),
(4, '13111111111', '96e79218965eb72c92a549dd5a330112');
