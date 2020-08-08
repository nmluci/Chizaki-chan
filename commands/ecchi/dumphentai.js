const { Command } = require('discord.js-commando')
const GameAssets = require('../../libs/GameAssets')
// const HentaiHelper = require('../../libs/HentaiHelper')
let sauce_temp = []
let sauce_link = []
let pnum = 0
let tempnum = 0
let sauce_arr = ['3141', '5926', '5358', '9793', '2384', '6264', '3383', '2795', '0288', '4197', '1693', '9937', '5105', '8209', '7494', '4592', '3078', '1640', '6286', '2089', '9862', '8034', '8253', '4211', '7067', '9821', '4808', '6513', '2823', '0664', '7093', '8446', '0955', '0582', '2317', '2535', '9408', '1284', '8111', '7450', '2841', '0270', '1938', '5211', '0555', '9644', '6229', '4895', '4930', '3819', '6442', '8810', '9756', '6593', '3446', '1284', '7564', '8233', '7867', '8316', '5271', '2019', '0914', '5648', '5669', '2346', '0348', '6104', '5432', '6648', '2133', '9360', '7260', '2491', '4127', '3724', '5870', '0660', '6315', '5881', '7488', '1520', '9209', '6282', '9254', '0917', '1536', '4367', '8925', '9036', '0011', '3305', '3054', '8820', '4665', '2138', '4146', '9519', '4151', '1609', '4330', '5727', '0365', '7595', '9195', '3092', '1861', '1738', '1932', '6117', '9310', '5118', '5480', '7446', '2379', '9627', '4956', '7351', '8857', '5272', '4891', '2279', '3818', '3011', '9491', '2983', '3673', '3624', '4065', '6643', '0860', '2139', '4946', '3952', '2473', '7190', '7021', '7986', '0943', '7027', '7053', '9217', '1762', '9317', '6752', '3846', '7481', '8467', '6694', '0513', '2000', '5681', '2714', '5263', '5608', '2778', '5771', '3427', '5778', '9609', '1736', '3717', '8721', '4684', '4090', '1224', '9534', '3014', '6549', '5853', '7105', '0792', '2796', '8925', '8923', '5420', '1995', '6112', '1290', '2196', '0864', '0344', '1815', '9813', '6297', '7477', '1309', '9605', '1870', '7211', '3499', '9999', '8372', '9780', '4995', '1059', '7317', '3281', '6096', '3185', '9502', '4459', '4553', '4690', '8302', '6425', '2230', '8253', '3446', '8503', '5261', '9311', '8817', '1010', '0031', '3783', '8752', '8865', '8753', '3208', '3814', '2061', '7177', '6691', '4730', '3598', '2534', '9042', '8755', '4687', '3115', '9562', '8638', '8235', '3787', '5937', '5195', '7781', '8577', '8053', '2171', '2268', '0661', '3001', '9278', '7661', '1195', '9092', '1642', '0198', '9380', '9525', '7201', '0654', '8586', '3278', '8659', '3615', '3381', '8279', '6823', '0301', '9520', '3530', '1852', '9689', '9577', '3622', '5994', '1389', '1249', '7217', '7528', '3479', '1315', '1557', '4857', '2424', '5415', '0695', '9508', '2953', '3116', '8617', '2785', '5889', '0750', '9838', '1754', '6374', '6493', '9319', '2550', '6040', '0927', '7016', '7113', '9009', '8488', '2401', '2858', '3616', '0356', '3707', '6601', '0471', '0181', '9429', '5559', '6198', '9467', '6783', '7449', '4482', '5537', '9774', '7268', '4710', '4047', '5346', '4620', '8046', '6842', '5906', '9491', '2933', '1367', '7028', '9891', '5210', '4752', '1620', '5696', '6024', '0580', '3815', '0193', '5112', '5338', '2430', '0355', '8764', '0247', '4964', '7326', '3914', '1992', '7260', '4269', '9227', '9678', '2354', '7816', '3600', '9341', '7216', '4121', '9924', '5863', '1503', '0286', '1829', '7455', '5706', '7498', '3850', '5494', '5885', '8692', '6995', '6909', '2721', '0797', '5093', '0295', '5321', '1653', '4498', '7202', '7559', '6023', '6480', '6654', '9911', '9881', '8347', '9775', '3566', '3698', '0742', '6542', '5278', '6255', '1818', '4175', '7467', '2890', '9777', '7279', '3800', '0816', '4706', '0016', '1452', '4919', '2173', '2172', '1477', '2350', '1414', '4197', '3568', '5481', '6136', '1157', '3525', '5213', '3475', '7418', '4946', '8438', '5233', '2390', '7394', '1433', '3454', '7762', '4168', '6251', '8983', '5694', '8556', '2099', '2192', '2218', '4272', '5502', '5425', '6887', '6717', '9049', '4601', '6534', '6680', '4988', '6272', '3279', '1786', '0857', '8438', '3827', '9679', '7668', '1454', '1009', '5388', '3786', '3609', '5068', '0064', '2251', '2520', '5117', '3929', '8489', '6084', '1284', '8862', '6945', '6042', '4196', '5285', '0222', '1066', '1186', '3067', '4427', '8622', '0391', '9494', '5047', '1237', '1378', '6960', '9563', '6437', '1917', '2874', '6776', '4657', '5739', '6241', '3890', '8658', '3264', '5995', '8133', '9047', '8027', '5900', '9946', '5764', '0789', '5126', '9468', '3983', '5259', '5709', '8258', '2262', '0522', '4894', '0772', '6719', '4782', '6848', '2601', '4769', '9090', '2640', '1363', '9443', '7455', '3050', '6820', '3496', '2524', '5174', '9399', '6514', '3142', '9809', '1906', '5925', '0937', '2216', '9646', '1515', '7098', '5838', '7410', '5978', '8595', '9772', '9754', '9893', '0161', '7539', '2846', '8138', '2686', '8386', '8942', '7741', '5599', '1855', '9252', '4595', '3959', '4310', '4997', '2524', '6808', '4598', '7273', '6446', '9584', '8653', '8367', '3622', '2626', '0991', '2460', '8051', '2438', '8439', '0451', '2441', '3654', '9762', '7807', '9771', '5691', '4359', '9770', '0129', '6160', '8944', '1694', '8685', '5584', '8406', '3534', '2207', '2225', '8284', '8864', '8158', '4560', '2850', '6016', '8427', '3945', '2267', '4676', '7889', '5252', '1385', '2254', '9954', '6667', '2782', '3986', '4565', '9611', '6354', '8862', '3057', '7456', '4980', '3559', '3634', '5681', '7432', '4112', '5150', '7606', '9479', '4510', '9659', '6094', '0252', '2887', '9710', '8931', '4566', '9136', '8672', '2874', '8940', '5601', '0150', '3308', '6179', '2868', '0920', '8747', '6091', '7824', '9385', '8900', '9714', '9096', '7598', '5261', '3655', '4978', '1893', '1297', '8482', '1682', '9989', '4872', '2658', '8048', '5756', '4014', '2704', '7755', '5132', '3796', '4145', '1523', '7462', '3436', '4542', '8584', '4479', '5265', '8678', '2105', '1141', '3547', '3573', '9523', '1134', '2716', '6102', '1359', '6953', '6231', '4429', '5248', '4937', '1871', '1014', '5765', '4035', '9027', '9934', '4037', '4200', '7310', '5785', '3906', '2198', '3874', '4780', '8478', '4896', '8332', '1445', '7138', '6875', '1943', '5064', '3021', '8453', '1910', '4848', '1005', '3706', '1468', '0674', '9192', '7819', '1197', '9399', '5206', '1419', '6634', '2875', '4440', '6437', '4512', '3718', '1921', '7999', '8391', '0159', '1956', '1814', '6751', '4269', '1239', '7489', '4090', '7186', '4942', '3196', '1567', '9452', '0809', '5146', '5502', '2523', '1603', '8819', '3014', '2093', '7621', '3785', '5956', '6389', '3778', '7083', '0390', '6979', '2077', '3467', '2218', '2562', '5996', '6150', '1421', '5030', '6803', '8447', '7345', '4920', '2605', '4146', '6592', '5201', '4974', '4285', '0732', '5186', '6600', '2132', '4340', '8819', '0710', '4863', '3173', '4649', '6514', '5390', '5796', '2685', '6100', '5508', '1066', '5879', '6998', '1635', '7473', '6384', '0525', '7145', '9102', '8970', '6414', '0110', '9712', '0628', '0439', '0397', '5951', '5677', '1577', '0042', '0337', '8699', '3600', '7230', '5587', '6317', '6359', '4218', '7312', '5147', '1205', '3292', '8191', '8261', '8612', '5867', '3215', '7919', '8414', '8488', '2916', '4470', '6095', '7527', '0695', '7220', '9175', '6711', '6722', '9109', '8169', '0915', '2801', '7350', '6712', '7485', '8322', '2871', '8352', '0935', '3965', '7251', '2108', '3579', '1513', '6988', '2091', '4442', '1006', '7510', '3346', '7110', '3141', '2671', '1136', '9908', '6585', '1639', '8315', '0197', '0165', '1511', '6851', '7143', '7657', '6183', '5155', '6508', '8490', '9989', '8599', '8238', '7345', '5283', '3163', '5507', '6479', '1853', '5893', '2261', '8548', '9632', '1329', '3308', '9857', '0642', '0467', '5259', '0709', '1548', '1416', '5498', '5946', '1637', '1802', '7098', '1994', '3099', '2448', '8957', '5712', '8289', '0592', '3233', '2609', '7299', '7120', '8443', '3573', '2654', '8938', '2391', '1932', '5974', '6366', '7305', '8360', '4142', '8138', '8303', '2038', '2490', '3758', '9852', '4374', '4170', '2913', '2765', '6180', '9377', '3444', '0307', '0746', '9211', '2019', '1302', '0330', '3801', '9762', '1101', '1004', '4929', '3215', '1608', '4244', '4859', '6376', '6983', '8952', '2868', '4783', '1235', '5265', '8213', '1449', '5768', '5726', '2433', '4418', '9303', '9686', '4262', '4341', '0773', '2269', '7802', '8073', '1891', '5441', '1010', '4468', '2325', '2716', '2010', '5265', '2272', '1116', '6039', '31415', '92653', '58979', '32384', '62643', '38327', '95028', '84197', '16939', '93751', '05820', '97494', '45923', '07816', '40628', '62089', '98628', '03482', '53421', '17067', '98214', '80865', '13282', '30664', '70938', '44609', '55058', '22317', '25359', '40812', '84811', '17450', '28410', '27019', '38521', '10555', '96446', '22948', '95493', '03819', '64428', '81097', '56659', '33446', '12847', '56482', '33786', '78316', '52712', '01909', '14564', '85669', '23460', '34861', '04543', '26648', '21339', '36072', '60249', '14127', '37245', '87006', '60631', '55881', '74881', '52092', '09628', '29254', '09171', '53643', '67892', '59036', '00113', '30530', '54882', '04665', '21384', '14695', '19415', '11609', '43305', '72703', '65759', '59195', '30921', '86117', '38193', '26117', '93105', '11854', '80744', '62379', '96274', '95673', '51885', '75272', '48912', '27938', '18301', '19491', '29833', '67336', '24406', '56643', '08602', '13949', '46395', '22473', '71907', '02179', '86094', '37027', '70539', '21717', '62931', '76752', '38467', '48184', '67669', '40513', '20005', '68127', '14526', '35608', '27785', '77134', '27577', '89609', '17363', '71787', '21468', '44090', '12249', '53430', '14654', '95853', '71050', '79227', '96892', '58923', '54201', '99561', '12129', '02196', '08640', '34418', '15981', '36297', '74771', '30996', '05187', '07211', '34999', '99983', '72978', '04995', '10597', '31732', '81609', '63185', '95024', '45945', '53469', '08302', '64252', '23082', '53344', '68503', '52619', '31188', '17101', '00031', '37838', '75288', '65875', '33208', '38142', '06171', '77669', '14730', '35982', '53490', '42875', '54687', '31159', '56286', '38823', '53787', '59375', '19577', '81857', '78053', '21712', '26806', '61300', '19278', '76611', '19590', '92164', '20198', '93809', '52572', '01065', '48586', '32788', '65936', '15338', '18279', '68230', '30195', '20353', '01852', '96899', '57736', '22599', '41389', '12497', '21775', '28347', '91315', '15574', '85724', '24541', '50695', '95082', '95331', '16861', '72785', '58890', '75098', '38175', '46374', '64939', '31925', '50604', '00927', '70167', '11390', '09848', '82401', '28583', '61603', '56370', '76601', '04710', '18194', '29555', '96198', '94676', '78374', '49448', '25537', '97747', '26847', '10404', '75346', '46208', '04668', '42590', '69491', '29331', '36770', '28989', '15210', '47521', '62056', '96602', '40580', '38150', '19351', '12533', '82430', '03558', '76402', '47496', '47326', '39141', '99272', '60426', '99227', '96782', '35478', '16360', '09341', '72164', '12199', '24586', '31503', '02861', '82974', '55570', '67498', '38505', '49458', '85869', '26995', '69092', '72107', '97509', '30295', '53211', '65344', '98720', '27559', '60236', '48066', '54991', '19881', '83479', '77535', '66369', '80742', '65425', '27862', '55181', '84175', '74672', '89097', '77727', '93800', '08164', '70600', '16145', '24919', '21732', '17214', '77235', '01414', '41973', '56854', '81613', '61157', '35255', '21334', '75741', '84946', '84385', '23323', '90739', '41433', '34547', '76241', '68625', '18983', '56948', '55620', '99219', '22218', '42725', '50254', '25688', '76717', '90494', '60165', '34668', '04988', '62723', '27917', '86085', '78438', '38279', '67976', '68145', '41009', '53883', '78636', '09506', '80064', '22512', '52051', '17392', '98489', '60841', '28488', '62694', '56042', '41965', '28502', '22106', '61186', '30674', '42786', '22039', '19494', '50471', '23713', '78696', '09563', '64371', '91728', '74677', '64657', '57396', '24138', '90865', '83264', '59958', '13390', '47802', '75900', '99465', '76407', '89512', '69468', '39835', '25957', '09825', '82262', '05224', '89407', '72671', '94782', '68482', '60147', '69909', '02640', '13639', '44374', '55305', '06820', '34962', '52451', '74939', '96514', '31429', '80919', '06592', '50937', '22169', '64615', '15709', '85838', '74105', '97885', '95977', '29754', '98930', '16175', '39284', '68138', '26868', '38689', '42774', '15599', '18559', '25245', '95395', '94310', '49972', '52468', '08459', '87273', '64469', '58486', '53836', '73622', '26260', '99124', '60805', '12438', '84390', '45124', '41365', '49762', '78079', '77156', '91435', '99770', '01296', '16089', '44169', '48685', '55848', '40635', '34220', '72225', '82848', '86481', '58456', '02850', '60168', '42739', '45226', '74676', '78895', '25213', '85225', '49954', '66672', '78239', '86456', '59611', '63548', '86230', '57745', '64980', '35593', '63456', '81743', '24112', '51507', '60694', '79451', '09659', '60940', '25228', '87971', '08931', '45669', '13686', '72287', '48940', '56010', '15033', '08617', '92868', '09208', '74760', '91782', '49385', '89009', '71490', '96759', '85261', '36554', '97818', '93129', '78482', '16829', '98948', '72265', '88048', '57564', '01427', '04775', '55132', '37964', '14515', '23746', '23436', '45428', '58444', '79526', '58678', '21051', '14135', '47357', '39523', '11342', '71661', '02135', '96953', '62314', '42952', '48493', '71871', '10145', '76540', '35902', '79934', '40374', '20073', '10578', '53906', '21983', '87447', '80847', '84896', '83321', '44571', '38687', '51943', '50643', '02184', '53191', '04848', '10053', '70614', '68067', '49192', '78191', '19793', '99520', '61419', '66342', '87544', '40643', '74512', '37181', '92179', '99839', '10159', '19561', '81467', '51426', '91239', '74894', '09071', '86494', '23196', '15679', '45208', '09514', '65502', '25231', '60388', '19301', '42093', '76213', '78559', '56638', '93778', '70830', '39069', '79207', '73467', '22182', '56259', '96615', '01421', '50306', '80384', '47734', '54920', '26054', '14665', '92520', '14974', '42850', '73251', '86660', '02132', '43408', '81907', '10486', '33173', '46496', '51453', '90579', '62685', '61005', '50810', '66587', '96998', '16357', '47363', '84052', '57145', '91028', '97064', '14011', '09712', '06280', '43903', '97595', '15677', '15770', '04203', '37869', '93600', '72305', '58763', '17635', '94218', '73125', '14712', '05329', '28191', '82618', '61258', '67321', '57919', '84148', '48829', '16447', '06095', '75270', '69572', '20917', '56711', '67229', '10981', '69091', '52801', '73506', '71274', '85832', '22871', '83520', '93539', '65725', '12108', '35791', '51369', '88209', '14442', '10067', '51033', '46711', '03141', '26711', '13699', '08658', '51639', '83150', '19701', '65151', '16851', '71437', '65761', '83515', '56508', '84909', '98985', '99823', '87345', '52833', '16355', '07647', '91853', '58932', '26185', '48963', '21329', '33089', '85706', '42046', '75259', '07091', '54814', '16549', '85946', '16371', '80270', '98199', '43099', '24488', '95757', '12828', '90592', '32332', '60972', '99712', '08443', '35732', '65489', '38239', '11932', '59746', '36673', '05836', '04142', '81388', '30320', '38249', '03758', '98524', '37441', '70291', '32765', '61809', '37734', '44030', '70746', '92112', '01913', '02033', '03801', '97621', '10110', '04492', '93215', '16084', '24448', '59637', '66983', '89522', '86847', '83123', '55265', '82131', '44957', '68572', '62433', '44189', '30396', '86426', '24341', '07732', '26978', '02807', '31891', '54411', '01044', '68232', '52716', '20105', '26522', '72111', '66039', '66655', '73092', '54711', '05578', '53763', '46682', '06531', '09896', '52691', '86205', '64769', '31257', '05863', '56620', '18558', '10072', '93606', '59876', '48611', '79104', '53348', '85034', '61136', '57686', '75324', '94416', '68039', '62657', '97877', '18556', '08455', '29654', '12665', '40853', '06143', '44431', '85867', '69751', '45661', '40680', '07002', '37877', '65913', '44017', '12749', '47042', '05622', '30538', '99456', '13140', '71127', '00040', '78547', '33269', '93908', '14546', '64645', '88079', '72708', '26683', '06343', '28587', '85698', '30523', '58089', '33065', '75740', '67954', '57163', '77525', '42021', '14955', '76158', '14002', '50126', '22859', '41302', '16471', '55097', '92592', '30990', '79654', '73761', '25517', '65675', '13575', '17829', '66645', '47791', '74501', '12996', '14890', '30463', '99471', '32962', '10734', '04375', '18957', '35961', '45890', '19389', '71311', '17904', '29782', '85647', '50320', '31986', '91514', '02870', '80859', '90480', '10941', '21472', '21317', '94764', '77726', '22414', '25485', '45403', '32157', '18530', '61422', '88137', '58504', '30633', '21751', '82979', '86622', '37172', '15916', '07716', '69254', '74873', '89866', '54949', '45011', '46540', '62843', '36639', '37900', '39769', '26567', '21463', '85306', '73609', '65712', '09180', '76383', '27166', '41627', '48888', '00786', '92560', '29022', '84721', '04031', '72118', '60820', '41900', '04229', '66171', '19637', '79213', '37575', '11495', '95015', '66049', '63186', '29472', '65473', '64252', '30817', '70367', '51590', '67350', '23507', '28354', '05670', '40386', '74351', '36222', '24771', '58915', '04953', '09844', '48933', '30963', '40878', '07693', '25993', '97805', '41934', '14473', '77441', '84263', '12986', '08099', '88868', '74132', '60472', '314159', '926535', '589793', '323846', '626433', '383279', '950288', '841971', '169399', '937510', '058209', '974944', '459230', '078164', '406286', '620899', '986280', '034825', '534211', '170679', '982148', '808651', '132823', '306647', '709384', '446095', '550582', '223172', '253594', '408128', '848111', '174502', '284102', '270193', '385211', '105559', '964462', '229489', '954930', '038196', '644288', '810975', '566593', '334461', '128475', '564823', '337867', '783165', '527120', '019091', '145648', '856692', '234603', '348610', '045432', '266482', '213393', '360726', '602491', '141273', '372458', '870066', '606315', '558817', '748815', '520920', '096282', '292540', '091715', '536436', '678925', '590360', '001133', '305305', '548820', '046652', '213841', '146951', '194151', '116094', '433057', '727036', '657595', '591953', '309218', '861173', '381932', '261179', '931051', '118548', '807446', '623799', '962749', '956735', '518857', '752724', '489122', '279381', '183011', '194912', '298336', '673362', '244065', '566430', '086021', '139494', '463952', '224737', '719070', '021798', '860943', '370277', '705392', '217176', '629317', '767523', '384674', '481846', '676694', '405132', '200056', '681271', '145263', '356082', '277857', '771342', '275778', '896091', '173637', '717872', '214684', '440901', '122495', '534301', '146549', '958537', '710507', '792279', '968925', '589235', '542019', '995611', '121290', '021960', '086403', '344181', '159813', '362977', '747713', '309960', '051870', '072113', '349999', '999837', '729780', '049951', '105973', '317328', '816096', '631859', '950244', '459455', '534690', '083026', '642522', '230825', '533446', '685035', '526193', '311881', '171010', '000313', '378387', '752886', '658753', '332083', '381420', '061717', '776691', '147303', '359825', '534904', '428755', '546873', '311595', '562863', '388235', '537875', '593751', '195778', '818577', '780532', '217122', '268066', '613001', '192787', '766111', '195909', '921642', '201989', '938095', '525720', '010654', '485863', '327886', '659361', '153381', '182796', '682303', '301952', '203530', '018529', '968995', '577362', '225994', '413891', '124972', '217752', '283479', '913151', '155748', '857242', '245415', '506959', '950829', '953311', '168617', '727855', '588907', '750983', '381754', '463746', '649393', '319255', '506040', '009277', '701671', '113900', '098488', '824012', '285836', '616035', '563707', '766010', '047101', '181942', '295559', '961989', '946767', '783744', '494482', '255379', '977472', '268471', '104047', '753464', '462080', '046684', '425906', '694912', '293313', '367702', '289891', '152104', '475216', '620569', '966024', '405803', '381501', '193511', '125338', '824300', '035587', '764024', '474964', '473263', '391419', '992726', '604269', '992279', '967823', '354781', '163600', '093417', '721641', '121992', '245863', '315030', '028618', '829745', '555706', '674983', '385054', '494588', '858692', '269956', '690927', '721079', '975093', '302955', '532116', '653449', '987202', '275596', '602364', '480665', '549911', '198818', '834797', '775356', '663698', '807426', '654252', '278625', '551818', '841757', '746728', '890977', '777279', '938000', '081647', '706001', '161452', '249192', '217321', '172147', '772350', '014144', '419735', '568548', '816136', '611573', '352552', '213347', '757418', '849468', '843852', '233239', '907394', '414333', '345477', '762416', '686251', '189835', '569485', '556209', '992192', '222184', '427255', '502542', '256887', '767179', '904946', '601653', '346680', '049886', '627232', '279178', '860857', '784383', '382796', '679766', '681454', '410095', '538837', '786360', '095068', '800642', '225125', '520511', '173929', '984896', '608412', '284886', '626945', '560424', '419652', '285022', '221066', '611863', '306744', '427862', '220391', '194945', '504712', '237137', '786960', '095636', '643719', '917287', '746776', '646575', '573962', '241389', '908658', '832645', '599581', '133904', '478027', '759009', '994657', '764078', '895126', '694683', '398352', '259570', '098258', '822620', '052248', '894077', '726719', '947826', '684826', '601476', '699090', '026401', '136394', '443745', '553050', '068203', '349625', '524517', '749399', '965143', '314298', '809190', '065925', '509372', '221696', '646151', '157098', '858387', '741059', '978859', '959772', '297549', '989301', '161753', '392846', '681382', '268683', '386894', '427741', '155991', '185592', '252459', '953959', '943104', '499725', '524680', '084598', '872736', '644695', '584865', '538367', '736222', '262609', '991246', '608051', '124388', '843904', '451244', '413654', '497627', '780797', '771569', '914359', '997700', '012961', '160894', '441694', '486855', '558484', '406353', '342207', '722258', '828488', '864815', '584560', '028506', '601684', '427394', '452267', '746767', '788952', '252138', '852254', '499546', '666727', '782398', '864565', '596116', '635488', '862305', '577456', '649803', '355936', '634568', '817432', '241125', '515076', '606947', '794510', '096596', '609402', '252288', '879710', '089314', '456691', '136867', '722874', '489405', '560101', '150330', '086179', '928680', '092087', '747609', '917824', '493858', '890097', '714909', '967598', '852613', '365549', '978189', '931297', '784821', '168299', '989487', '722658', '880485', '575640', '014270', '047755', '551323', '379641', '145152', '237462', '234364', '454285', '584447', '795265', '586782', '210511', '141354', '473573', '395231', '113427', '716610', '021359', '969536', '623144', '429524', '484937', '718711', '101457', '765403', '359027', '799344', '403742', '200731', '105785', '539062', '219838', '874478', '808478', '848968', '833214', '445713', '386875', '519435', '506430', '021845', '531910', '048481', '100537', '706146', '680674', '491927', '781911', '197939', '995206', '614196', '663428', '875444', '406437', '745123', '371819', '921799', '998391', '101591', '195618', '814675', '514269', '912397', '748940', '090718', '864942', '231961', '156794', '452080', '095146', '655022', '252316', '603881', '193014', '420937', '762137', '785595', '566389', '937787', '708303', '390697', '792077', '734672', '221825', '562599', '966150', '014215', '503068', '803844', '477345', '549202', '260541', '146659', '925201', '149744', '428507', '732518', '866600', '021324', '434088', '819071', '104863', '331734', '464965', '514539', '905796', '626856', '610055', '508106', '665879', '969981', '163574', '473638', '840525', '571459', '910289', '970641', '140110', '097120', '062804', '439039', '975951', '156771', '157700', '042033', '378699', '936007', '723055', '587631', '176359', '942187', '731251', '147120', '053292', '281918', '826186', '612586', '673215', '579198', '841484', '488291', '164470', '060957', '752706', '695722', '209175', '567116', '672291', '109816', '690915', '528017', '735067', '712748', '858322', '228718', '835209', '935396', '657251', '121083', '357915', '513698', '882091', '144421', '100675', '510334', '467110', '031412', '267111', '136990', '086585', '516398', '831501', '197016', '651511', '168517', '714376', '657618', '835155', '565088', '849099', '989859', '998238', '873455', '528331', '163550', '076479', '918535', '589322', '261854', '489632', '213293', '330898', '857064', '420467', '752590', '070915', '548141', '165498', '859461', '163718', '802709', '981994', '430992', '244889', '957571', '128289', '905923', '323326', '609729', '997120', '084433', '357326', '654893', '382391', '119325', '597463', '366730', '058360', '041428', '813883', '303203', '382490', '037589', '985243', '374417', '702913', '327656', '618093', '377344', '440307', '707469', '921120', '019130', '020330', '038019', '976211', '101100', '044929', '932151', '160842', '244485', '596376', '669838', '895228', '868478', '831235', '552658', '821314', '449576', '685726', '624334', '441893', '303968', '864262', '243410', '077322', '269780', '028073', '318915', '544110', '010446', '682325', '527162', '201052', '265227', '721116', '660396', '666557', '730925', '547110', '055785', '537634', '466820', '065310', '098965', '526918', '862056', '647693', '312570', '058635', '566201', '185581', '100729', '936065', '598764', '486117', '791045', '533488', '850346', '611365', '576867', '753249', '944166', '680396', '626579', '978771', '185560', '084552', '296541', '126654', '408530', '061434', '444318', '858676', '697514', '456614', '406800', '070023', '378776', '659134', '440171', '127494', '470420', '056223', '305389', '994561', '131407', '711270', '000407', '785473', '332699', '939081', '145466', '646458', '880797', '727082', '266830', '063432', '285878', '856983', '305235', '580893', '330657', '757406', '679545', '571637', '775254', '420211', '149557', '761581', '140025', '501262', '228594', '413021', '164715', '550979', '925923', '309907', '796547', '737612', '255176', '656751', '135751', '178296', '666454', '477917', '745011', '129961', '148903', '304639', '994713', '329621', '107340', '043751', '189573', '359614', '458901', '193897', '713111', '179042', '297828', '856475', '503203', '319869', '915140', '028708', '808599', '904801', '109412', '214722', '213179', '947647', '777262', '224142', '254854', '454033', '321571', '185306', '614228', '881375', '585043', '306332', '217518', '829798', '866223', '371721', '159160', '077166', '692547', '748738', '898665', '549494', '450114', '465406', '628433', '366393', '379003', '397692', '265672', '214638', '853067', '736096', '657120', '091807', '763832', '271664', '416274', '488880', '007869', '925602', '290228', '847210', '040317', '721186', '608204', '419000', '042296', '661711', '196377', '792133', '375751', '114959', '950156', '660496', '631862', '294726', '654736', '642523', '308177', '703675', '515906', '673502', '235072', '283540', '056704', '403867', '743513', '362222', '247715', '589150', '049530', '098444', '489333', '309634', '408780', '076932', '259939', '978054', '419341', '144737', '774418', '842631', '129860', '080998', '888687', '741326', '604721']
const NanaAPI = require('nana-api')
let henapi = new NanaAPI()

module.exports = class ReadHentaiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dumphentai',
            aliases: ['dh'],
            group: 'ecchi',
            memberName: 'dumphentai',
            description: 'Burden for HEROKU',
            nsfw: true,
            clientPermissions: ['MANAGE_MESSAGES']
        });
    }

    async run(msg) {
        try{
            for (let i of sauce_arr) {
                let x = parseInt(i).toString()
                sauce_temp.push(x)
                // console.log(sauce_temp)
                tempnum++
                if (tempnum == 30) {
                    // console.log('full')
                    // console.log(sauce_temp)
                    await parseHentai(sauce_temp)
                    sauce_temp.length = 0
                    tempnum = 0
                }
            }

            async function parseHentai(arr) {
                try {
                    for (let j of arr) {
                        // console.log(i)
                        let x = parseInt(j).toString()
                        let res = await henapi.g(x)
                        let ctx = `https://www.nhentai.net/g/${res.id} => ${res.title.pretty}`
                        sauce_link.push(ctx)
                        pnum++
                    }
                    await msg.say("```" + sauce_link.join('\n') + "```")
                    sauce_link.length = 0
                } catch (err) {
                    // console.log('NOTFOUND')
                    console.log(err)
                    return err
                }
                // console.log(pnum)
            }
            return await msg.say('D0n3!')
        } catch (err) {
            console.log(`[HEORKU CRASH PERHAPS] ${err}`)
            return msg.say(`Not Found (likely)`)
            
        }
        
    }

    onBlock(msg, reason) {
        if (reason == 'nsfw') {
            msg.say('きゃぁ～、はげしくしないでよ…、あたし、いっちゃううから～')
        }
        if (reason == 'clientPermissions') {
            msg.say('Urghh, もう我慢できない！')
        }
    }
};