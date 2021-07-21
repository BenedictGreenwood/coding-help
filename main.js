// static/main.js
let globals = {
    stimuli_list:                   //List of stimuli ()
['1_female_angry_open_radiate_72_asian',
'1_female_happy_open_radiate_98_asian',
'1_female_neutral_open_radiate_88_asian',
'2_female_angry_closed_radiate_72_asian',
'2_female_happy_closed_radiate_100_asian',
'2_female_neutral_closed_radiate_88_asian',
'3_female_angry_closed_radiate_63_asian',
'3_female_happy_closed_radiate_93_asian',
'3_female_neutral_closed_radiate_93_asian',
'4_female_angry_closed_radiate_64_asian',
'4_female_happy_closed_radiate_56_asian',
'4_female_neutral_closed_radiate_94_asian',
'5_female_angry_open_radiate_96_asian',
'5_female_happy_open_radiate_100_asian',
'5_female_neutral_open_radiate_96_asian',
'6_female_angry_open_radiate_71_asian',
'6_female_happy_open_radiate_100_asian',
'6_female_neutral_open_radiate_85_asian',
'7_female_angry_open_radiate_89_asian',
'7_female_happy_open_radiate_100_asian',
'7_female_neutral_open_radiate_99_asian',
'8_female_angry_closed_radiate_70_asian',
'8_female_happy_closed_radiate_95_asian',
'8_female_neutral_closed_radiate_97_asian',
'9_female_angry_closed_radiate_65_asian',
'9_female_happy_closed_radiate_89_asian',
'9_female_neutral_closed_radiate_97_asian',
'10_male_angry_open_radiate_97_asian',
'10_male_happy_open_radiate_100_asian',
'10_male_neutral_open_radiate_82_asian',
'11_male_angry_closed_radiate_91_asian',
'11_male_happy_closed_radiate_97_asian',
'11_male_neutral_closed_radiate_85_asian',
'12_male_angry_open_radiate_92_asian',
'12_male_happy_open_radiate_96_asian',
'12_male_neutral_open_radiate_90_asian',
'13_male_angry_open_radiate_74_asian',
'13_male_happy_open_radiate_100_asian',
'13_male_neutral_open_radiate_80_asian',
'14_male_angry_closed_radiate_70_asian',
'14_male_happy_closed_radiate_96_asian',
'14_male_neutral_closed_radiate_98_asian',
'15_male_angry_open_radiate_60_asian',
'15_male_happy_open_radiate_100_asian',
'15_male_neutral_open_radiate_82_asian',
'16_male_angry_open_radiate_79_asian',
'16_male_happy_open_radiate_79_asian',
'16_male_neutral_open_radiate_81_asian',
'17_female_angry_closed_radiate_89_afrocaribbean',
'17_female_happy_closed_radiate_97_afrocaribbean',
'17_female_neutral_closed_radiate_93_afrocaribbean',
'18_female_angry_open_radiate_96_afrocaribbean',
'18_female_happy_open_radiate_96_afrocaribbean',
'18_female_neutral_open_radiate_90_afrocaribbean',
'19_female_angry_open_radiate_78_afrocaribbean',
'19_female_happy_open_radiate_98_afrocaribbean',
'19_female_neutral_open_radiate_84_afrocaribbean',
'20_female_angry_closed_radiate_85_afrocaribbean',
'20_female_happy_closed_radiate_91_afrocaribbean',
'20_female_neutral_closed_radiate_95_afrocaribbean',
'21_female_angry_open_radiate_80_afrocaribbean',
'21_female_happy_open_radiate_100_afrocaribbean',
'21_female_neutral_open_radiate_90_afrocaribbean',
'22_female_angry_closed_radiate_89_afrocaribbean',
'22_female_happy_closed_radiate_99_afrocaribbean',
'22_female_neutral_closed_radiate_79_afrocaribbean',
'23_female_angry_open_radiate_89_afrocaribbean',
'23_female_happy_open_radiate_99_afrocaribbean',
'23_female_neutral_open_radiate_79_afrocaribbean',
'24_female_angry_closed_radiate_84_afrocaribbean',
'24_female_happy_closed_radiate_92_afrocaribbean',
'24_female_neutral_closed_radiate_94_afrocaribbean',
'25_female_angry_open_radiate_76_afrocaribbean',
'25_female_happy_open_radiate_89_afrocaribbean',
'25_female_neutral_open_radiate_91_afrocaribbean',
'26_female_angry_open_radiate_66_afrocaribbean',
'26_female_happy_open_radiate_97_afrocaribbean',
'26_female_neutral_open_radiate_68_afrocaribbean',
'27_female_angry_open_radiate_64_afrocaribbean',
'27_female_happy_open_radiate_94_afrocaribbean',
'27_female_neutral_open_radiate_78_afrocaribbean',
'28_male_angry_open_radiate_99_afrocaribbean',
'28_male_happy_open_radiate_100_afrocaribbean',
'28_male_neutral_open_radiate_61_afrocaribbean',
'29_male_angry_open_radiate_93_afrocaribbean',
'29_male_happy_open_radiate_95_afrocaribbean',
'29_male_neutral_open_radiate_93_afrocaribbean',
'30_male_angry_open_radiate_93_afrocaribbean',
'30_male_happy_open_radiate_99_afrocaribbean',
'30_male_neutral_open_radiate_87_afrocaribbean',
'31_male_angry_closed_radiate_74_afrocaribbean',
'31_male_happy_closed_radiate_86_afrocaribbean',
'31_male_neutral_closed_radiate_94_afrocaribbean',
'32_male_angry_open_radiate_96_afrocaribbean',
'32_male_happy_open_radiate_98_afrocaribbean',
'32_male_neutral_open_radiate_92_afrocaribbean',
'33_male_angry_open_radiate_96_afrocaribbean',
'33_male_happy_open_radiate_100_afrocaribbean',
'33_male_neutral_open_radiate_78_afrocaribbean',
'34_male_angry_open_radiate_89_afrocaribbean',
'34_male_happy_open_radiate_97_afrocaribbean',
'34_male_neutral_open_radiate_75_afrocaribbean',
'35_male_angry_open_radiate_95_afrocaribbean',
'35_male_happy_open_radiate_99_afrocaribbean',
'35_male_neutral_open_radiate_67_afrocaribbean',
'36_male_angry_closed_radiate_66_afrocaribbean',
'36_male_happy_closed_radiate_100_afrocaribbean',
'36_male_neutral_closed_radiate_82_afrocaribbean',
'37_male_angry_open_radiate_92_afrocaribbean',
'37_male_happy_open_radiate_100_afrocaribbean',
'37_male_neutral_open_radiate_88_afrocaribbean',
'38_male_angry_closed_radiate_89_afrocaribbean',
'38_male_happy_closed_radiate_93_afrocaribbean',
'38_male_neutral_closed_radiate_97_afrocaribbean',
'39_male_angry_open_radiate_51_afrocaribbean',
'39_male_happy_open_radiate_99_afrocaribbean',
'39_male_neutral_open_radiate_99_afrocaribbean',
'40_male_angry_closed_radiate_74_afrocaribbean',
'40_male_happy_closed_radiate_100_afrocaribbean',
'40_male_neutral_closed_radiate_97_afrocaribbean',
'41_female_angry_open_radiate_74_hispaniclatin',
'41_female_happy_open_radiate_100_hispaniclatin',
'41_female_neutral_open_radiate_94_hispaniclatin',
'42_female_angry_open_radiate_61_hispaniclatin',
'42_female_happy_open_radiate_97_hispaniclatin',
'42_female_neutral_open_radiate_89_hispaniclatin',
'43_female_angry_closed_radiate_75_hispaniclatin',
'43_female_happy_closed_radiate_71_hispaniclatin',
'43_female_neutral_closed_radiate_93_hispaniclatin',
'44_female_angry_closed_radiate_64_hispaniclatin',
'44_female_happy_closed_radiate_80_hispaniclatin',
'44_female_neutral_closed_radiate_96_hispaniclatin',
'45_female_angry_open_radiate_85_hispaniclatin',
'45_female_happy_open_radiate_99_hispaniclatin',
'45_female_neutral_open_radiate_85_hispaniclatin',
'46_female_angry_open_radiate_59_hispaniclatin',
'46_female_happy_open_radiate_99_hispaniclatin',
'46_female_neutral_open_radiate_91_hispaniclatin',
'47_male_angry_open_radiate_79_hispaniclatin',
'47_male_happy_open_radiate_71_hispaniclatin',
'47_male_neutral_open_radiate_81_hispaniclatin',
'48_male_angry_open_radiate_79_hispaniclatin',
'48_male_happy_open_radiate_91_hispaniclatin',
'48_male_neutral_open_radiate_81_hispaniclatin',
'49_male_angry_open_radiate_57_hispaniclatin',
'49_male_happy_open_radiate_83_hispaniclatin',
'49_male_neutral_open_radiate_79_hispaniclatin',
'50_male_angry_open_radiate_90_hispaniclatin',
'50_male_happy_open_radiate_98_hispaniclatin',
'50_male_neutral_open_radiate_92_hispaniclatin',
'51_male_angry_open_radiate_100_hispaniclatin',
'51_male_happy_open_radiate_100_hispaniclatin',
'51_male_neutral_open_radiate_66_hispaniclatin',
'52_male_angry_open_radiate_94_hispaniclatin',
'52_male_happy_open_radiate_98_hispaniclatin',
'52_male_neutral_open_radiate_92_hispaniclatin',
'53_male_angry_open_radiate_91_hispaniclatin',
'53_male_happy_open_radiate_99_hispaniclatin',
'53_male_neutral_open_radiate_87_hispaniclatin',
'54_male_angry_closed_radiate_62_hispaniclatin',
'54_male_happy_closed_radiate_92_hispaniclatin',
'54_male_neutral_closed_radiate_82_hispaniclatin',
'55_male_angry_closed_radiate_92_hispaniclatin',
'55_male_happy_closed_radiate_70_hispaniclatin',
'55_male_neutral_closed_radiate_98_hispaniclatin',
'56_male_angry_open_radiate_84_hispaniclatin',
'56_male_happy_open_radiate_100_hispaniclatin',
'56_male_neutral_open_radiate_58_hispaniclatin',
'57_male_angry_closed_radiate_74_other',
'57_male_happy_closed_radiate_96_other',
'57_male_neutral_closed_radiate_98_other',
'58_female_angry_open_radiate_78_caucasian',
'58_female_happy_open_radiate_98_caucasian',
'58_female_neutral_open_radiate_56_caucasian',
'59_female_angry_open_radiate_79_caucasian',
'59_female_happy_open_radiate_99_caucasian',
'59_female_neutral_open_radiate_75_caucasian',
'60_female_angry_closed_radiate_90_caucasian',
'60_female_happy_closed_radiate_92_caucasian',
'60_female_neutral_closed_radiate_100_caucasian',
'61_female_angry_closed_radiate_84_caucasian',
'61_female_happy_closed_radiate_96_caucasian',
'61_female_neutral_closed_radiate_96_caucasian',
'62_female_angry_open_radiate_74_caucasian',
'62_female_happy_open_radiate_98_caucasian',
'62_female_neutral_open_radiate_74_caucasian',
'63_female_angry_open_radiate_69_caucasian',
'63_female_happy_open_radiate_99_caucasian',
'63_female_neutral_open_radiate_79_caucasian',
'64_female_angry_open_radiate_74_caucasian',
'64_female_happy_open_radiate_98_caucasian',
'64_female_neutral_open_radiate_92_caucasian',
'65_female_angry_closed_radiate_56_caucasian',
'65_female_happy_closed_radiate_91_caucasian',
'65_female_neutral_closed_radiate_64_caucasian',
'66_female_angry_closed_radiate_89_caucasian',
'66_female_happy_closed_radiate_91_caucasian',
'66_female_neutral_closed_radiate_95_caucasian',
'67_female_angry_closed_radiate_84_caucasian',
'67_female_happy_closed_radiate_96_caucasian',
'67_female_neutral_closed_radiate_90_caucasian',
'68_male_angry_closed_radiate_86_caucasian',
'68_male_happy_closed_radiate_96_caucasian',
'68_male_neutral_closed_radiate_94_caucasian',
'69_male_angry_open_radiate_78_caucasian',
'69_male_happy_open_radiate_95_caucasian',
'69_male_neutral_open_radiate_72_caucasian',
'70_male_angry_open_radiate_85_caucasian',
'70_male_happy_open_radiate_97_caucasian',
'70_male_neutral_open_radiate_97_caucasian',
'71_male_angry_open_radiate_89_caucasian',
'71_male_happy_open_radiate_95_caucasian',
'71_male_neutral_open_radiate_97_caucasian',
'72_male_angry_open_radiate_78_caucasian',
'72_male_happy_open_radiate_98_caucasian',
'72_male_neutral_open_radiate_96_caucasian',
'73_male_angry_closed_radiate_53_caucasian',
'73_male_happy_closed_radiate_97_caucasian',
'73_male_neutral_closed_radiate_93_caucasian',
'74_male_angry_open_radiate_70_caucasian',
'74_male_happy_open_radiate_77_caucasian',
'74_male_neutral_open_radiate_72_caucasian',
'75_male_angry_open_radiate_79_caucasian',
'75_male_happy_open_radiate_99_caucasian',
'75_male_neutral_open_radiate_85_caucasian',
'76_male_angry_open_radiate_83_caucasian',
'76_male_happy_open_radiate_93_caucasian',
'76_male_neutral_open_radiate_91_caucasian',
'77_male_angry_open_radiate_89_caucasian',
'77_male_happy_open_radiate_99_caucasian',
'77_male_neutral_open_radiate_85_caucasian',
'78_male_angry_open_radiate_74_caucasian',
'78_male_happy_open_radiate_95_caucasian',
'78_male_neutral_open_radiate_93_caucasian',
'79_male_angry_closed_radiate_91_caucasian',
'79_male_happy_closed_radiate_74_caucasian',
'79_male_neutral_closed_radiate_63_caucasian',
'80_male_angry_closed_maxplanck_70_caucasian',
'80_male_happy_open_maxplanck_99_caucasian',
'80_male_neutral_closed_maxplanck_91_caucasian',
'81_female_angry_closed_maxplanck_80_caucasian',
'81_male_happy_open_maxplanck_98_caucasian',
'81_female_neutral_closed_maxplanck_83_caucasian',
'82_female_angry_closed_maxplanck_93_caucasian',
'82_female_happy_open_maxplanck_100_caucasian',
'82_female_neutral_closed_maxplanck_89_caucasian',
'83_male_angry_closed_maxplanck_88_caucasian',
'83_male_happy_open_maxplanck_97_caucasian',
'83_male_neutral_closed_maxplanck_80_caucasian',
'84_male_angry_closed_maxplanck_94_caucasian',
'84_male_happy_open_maxplanck_95_caucasian',
'84_male_neutral_closed_maxplanck_96_caucasian',
'85_female_angry_closed_maxplanck_98_caucasian',
'85_female_happy_open_maxplanck_99_caucasian',
'85_female_neutral_closed_maxplanck_90_caucasian',
'86_female_angry_closed_maxplanck_93_caucasian',
'86_female_happy_open_maxplanck_100_caucasian',
'86_female_neutral_closed_maxplanck_68_caucasian',
'87_female_angry_closed_maxplanck_80_caucasian',
'87_female_happy_open_maxplanck_97_caucasian',
'87_female_neutral_closed_maxplanck_86_caucasian',
'88_male_angry_closed_maxplanck_94_caucasian',
'88_male_happy_open_maxplanck_98_caucasian',
'88_male_neutral_closed_maxplanck_97_caucasian',
'89_male_angry_closed_maxplanck_88_caucasian',
'89_male_happy_open_maxplanck_97_caucasian',
'89_male_neutral_closed_maxplanck_87_caucasian',
'90_male_angry_closed_maxplanck_70_caucasian',
'90_male_happy_open_maxplanck_98_caucasian',
'90_male_neutral_closed_maxplanck_89_caucasian',
'91_male_angry_closed_maxplanck_94_caucasian',
'91_male_happy_open_maxplanck_97_caucasian',
'91_male_neutral_closed_maxplanck_99_caucasian',
'92_male_angry_closed_maxplanck_69_caucasian',
'92_male_happy_open_maxplanck_97_caucasian',
'92_male_neutral_closed_maxplanck_71_caucasian',
'93_female_angry_closed_maxplanck_92_caucasian',
'93_female_happy_open_maxplanck_98_caucasian',
'93_female_neutral_closed_maxplanck_79_caucasian',
'94_female_angry_closed_maxplanck_94_caucasian',
'94_female_happy_open_maxplanck_98_caucasian',
'94_female_neutral_closed_maxplanck_77_caucasian',
'95_female_angry_closed_maxplanck_80_caucasian',
'95_female_happy_open_maxplanck_96_caucasian',
'95_female_neutral_closed_maxplanck_97_caucasian',
'96_female_angry_closed_maxplanck_89_caucasian',
'96_female_happy_open_maxplanck_96_caucasian',
'96_female_neutral_closed_maxplanck_97_caucasian',
'97_female_angry_closed_maxplanck_79_caucasian',
'97_female_happy_open_maxplanck_94_caucasian',
'97_female_neutral_closed_maxplanck_80_caucasian',
'98_male_angry_closed_maxplanck_94_caucasian',
'98_male_happy_open_maxplanck_97_caucasian',
'98_male_neutral_closed_maxplanck_94_caucasian',
'99_male_angry_closed_maxplanck_88_caucasian',
'99_male_happy_open_maxplanck_98_caucasian',
'99_male_neutral_closed_maxplanck_97_caucasian',
'100_male_angry_closed_maxplanck_69_caucasian',
'100_male_happy_open_maxplanck_100_caucasian',
'100_male_neutral_closed_maxplanck_81_caucasian',
'101_female_angry_closed_maxplanck_97_caucasian',
'101_female_happy_open_maxplanck_99_caucasian',
'101_female_neutral_closed_maxplanck_92_caucasian',
'102_female_angry_closed_maxplanck_92_caucasian',
'102_female_happy_open_maxplanck_100_caucasian',
'102_female_neutral_closed_maxplanck_88_caucasian',
'103_female_angry_closed_maxplanck_79_caucasian',
'103_female_happy_open_maxplanck_100_caucasian',
'103_female_neutral_closed_maxplanck_85_caucasian',
'104_male_angry_closed_maxplanck_94_caucasian',
'104_male_happy_open_maxplanck_99_caucasian',
'104_male_neutral_closed_maxplanck_93_caucasian',
'105_male_angry_closed_maxplanck_88_caucasian',
'105_male_happy_open_maxplanck_100_caucasian',
'105_male_neutral_closed_maxplanck_95_caucasian',
'106_male_angry_closed_maxplanck_69_caucasian',
'106_male_happy_open_maxplanck_100_caucasian',
'106_male_neutral_closed_maxplanck_93_caucasian',
'107_female_angry_closed_maxplanck_97_caucasian',
'107_female_happy_open_maxplanck_98_caucasian',
'107_female_neutral_closed_maxplanck_90_caucasian',
'108_female_angry_closed_maxplanck_92_caucasian',
'108_female_happy_open_maxplanck_93_caucasian',
'108_female_neutral_closed_maxplanck_94_caucasian',
'109_female_angry_closed_maxplanck_79_caucasian',
'109_female_happy_open_maxplanck_98_caucasian',
'109_female_neutral_closed_maxplanck_94_caucasian',
'110_male_angry_closed_maxplanck_94_caucasian',
'110_male_happy_open_maxplanck_97_caucasian',
'110_male_neutral_closed_maxplanck_97_caucasian',
'111_male_angry_closed_maxplanck_87_caucasian',
'111_male_happy_open_maxplanck_97_caucasian',
'111_male_neutral_closed_maxplanck_97_caucasian',
'112_male_angry_closed_maxplanck_68_caucasian',
'112_male_happy_open_maxplanck_99_caucasian',
'112_male_neutral_closed_maxplanck_86_caucasian',
'113_female_angry_closed_maxplanck_84_caucasian',
'113_female_happy_open_maxplanck_94_caucasian',
'113_female_neutral_closed_maxplanck_93_caucasian',
'114_male_angry_closed_maxplanck_86_caucasian',
'114_male_happy_open_maxplanck_96_caucasian',
'114_male_neutral_closed_maxplanck_94_caucasian',
'115_male_angry_closed_maxplanck_68_caucasian',
'115_male_happy_open_maxplanck_97_caucasian',
'115_male_neutral_closed_maxplanck_95_caucasian',
'116_female_angry_closed_maxplanck_92_caucasian',
'116_female_happy_open_maxplanck_100_caucasian',
'116_female_neutral_closed_maxplanck_97_caucasian',
'117_female_angry_closed_maxplanck_98_caucasian',
'117_female_happy_open_maxplanck_100_caucasian',
'117_female_neutral_closed_maxplanck_82_caucasian',
'118_male_angry_closed_maxplanck_87_caucasian',
'118_male_happy_open_maxplanck_99_caucasian',
'118_male_neutral_closed_maxplanck_88_caucasian',
'119_male_angry_closed_maxplanck_68_caucasian',
'119_male_happy_open_maxplanck_100_caucasian',
'119_male_neutral_closed_maxplanck_84_caucasian',
'120_female_angry_closed_maxplanck_78_caucasian',
'120_female_happy_open_maxplanck_93_caucasian',
'120_female_neutral_closed_maxplanck_91_caucasian',
'121_female_angry_closed_maxplanck_97_caucasian',
'121_female_happy_open_maxplanck_100_caucasian',
'121_female_neutral_closed_maxplanck_97_caucasian',
'122_male_angry_closed_maxplanck_94_caucasian',
'122_male_happy_open_maxplanck_95_caucasian',
'122_male_neutral_closed_maxplanck_97_caucasian',
'123_female_angry_closed_maxplanck_91_caucasian',
'123_female_happy_open_maxplanck_98_caucasian',
'123_female_neutral_closed_maxplanck_88_caucasian',
'124_male_angry_closed_maxplanck_86_caucasian',
'124_male_happy_open_maxplanck_100_caucasian',
'124_male_neutral_closed_maxplanck_90_caucasian',
'125_female_angry_closed_maxplanck_91_caucasian',
'125_female_happy_open_maxplanck_100_caucasian',
'125_female_neutral_closed_maxplanck_90_caucasian',
'126_male_angry_closed_maxplanck_67_caucasian',
'126_male_happy_open_maxplanck_97_caucasian',
'126_male_neutral_closed_maxplanck_66_caucasian',
'127_female_angry_closed_maxplanck_97_caucasian',
'127_female_happy_open_maxplanck_98_caucasian',
'127_female_neutral_closed_maxplanck_97_caucasian',
'128_female_angry_closed_maxplanck_78_caucasian',
'128_female_happy_open_maxplanck_97_caucasian',
'128_female_neutral_closed_maxplanck_65_caucasian',
'129_male_angry_closed_maxplanck_86_caucasian',
'129_male_happy_open_maxplanck_97_caucasian',
'129_male_neutral_closed_maxplanck_93_caucasian',
'130_male_angry_closed_maxplanck_98_caucasian',
'130_male_happy_open_maxplanck_97_caucasian',
'130_male_neutral_closed_maxplanck_96_caucasian',
'131_male_angry_closed_maxplanck_86_caucasian',
'131_male_happy_open_maxplanck_96_caucasian',
'131_male_neutral_closed_maxplanck_100_caucasian',
'132_male_angry_closed_maxplanck_66_caucasian',
'132_male_happy_open_maxplanck_92_caucasian',
'132_male_neutral_closed_maxplanck_60_caucasian',
'133_female_angry_closed_maxplanck_78_caucasian',
'133_female_happy_open_maxplanck_94_caucasian',
'133_female_neutral_closed_maxplanck_94_caucasian',
'134_female_angry_closed_maxplanck_91_caucasian',
'134_female_happy_open_maxplanck_100_caucasian',
'134_female_neutral_closed_maxplanck_91_caucasian',
'135_male_angry_closed_maxplanck_94_caucasian',
'135_male_happy_open_maxplanck_97_caucasian',
'135_male_neutral_closed_maxplanck_97_caucasian',
'136_female_angry_closed_maxplanck_97_caucasian',
'136_female_happy_open_maxplanck_99_caucasian',
'136_female_neutral_closed_maxplanck_95_caucasian',
'137_female_angry_closed_maxplanck_91_caucasian',
'137_female_happy_open_maxplanck_95_caucasian',
'137_female_neutral_closed_maxplanck_84_caucasian',
'138_male_angry_closed_maxplanck_66_caucasian',
'138_male_happy_open_maxplanck_97_caucasian',
'138_male_neutral_closed_maxplanck_82_caucasian',
'139_male_angry_closed_maxplanck_94_caucasian',
'139_male_happy_open_maxplanck_100_caucasian',
'139_male_neutral_closed_maxplanck_97_caucasian',
'140_female_angry_closed_maxplanck_78_caucasian',
'140_female_happy_open_maxplanck_97_caucasian',
'140_female_neutral_closed_maxplanck_71_caucasian',
'141_male_angry_closed_maxplanck_86_caucasian',
'141_male_happy_closed_maxplanck_97_caucasian',
'141_male_neutral_closed_maxplanck_90_caucasian',
'142_female_angry_closed_maxplanck_100_caucasian',
'142_female_happy_open_maxplanck_99_caucasian',
'142_female_neutral_closed_maxplanck_95_caucasian',
'143_male_angry_closed_maxplanck_86_caucasian',
'143_male_happy_open_maxplanck_91_caucasian',
'143_male_neutral_closed_maxplanck_87_caucasian',
'144_female_angry_closed_maxplanck_97_caucasian',
'144_female_happy_open_maxplanck_98_caucasian',
'144_female_neutral_closed_maxplanck_94_caucasian',
'145_male_angry_closed_maxplanck_94_caucasian',
'145_male_happy_open_maxplanck_100_caucasian',
'145_male_neutral_closed_maxplanck_99_caucasian',
'146_female_angry_closed_maxplanck_91_caucasian',
'146_female_happy_open_maxplanck_100_caucasian',
'146_female_neutral_closed_maxplanck_79_caucasian',
'147_male_angry_closed_maxplanck_65_caucasian',
'147_male_happy_open_maxplanck_100_caucasian',
'147_male_neutral_closed_maxplanck_91_caucasian',
'148_female_angry_closed_maxplanck_78_caucasian',
'148_female_happy_open_maxplanck_99_caucasian',
'148_female_neutral_closed_maxplanck_76_caucasian',
'149_male_angry_closed_maxplanck_64_caucasian',
'149_male_happy_open_maxplanck_99_caucasian',
'149_male_neutral_closed_maxplanck_76_caucasian',
'150_male_angry_closed_maxplanck_86_caucasian',
'150_male_happy_open_maxplanck_72_caucasian',
'150_male_neutral_closed_maxplanck_92_caucasian',
'151_female_angry_closed_maxplanck_78_caucasian',
'151_female_happy_open_maxplanck_99_caucasian',
'151_female_neutral_closed_maxplanck_98_caucasian',
'152_female_angry_closed_maxplanck_91_caucasian',
'152_female_happy_open_maxplanck_100_caucasian',
'152_female_neutral_closed_maxplanck_85_caucasian',
'153_male_angry_closed_maxplanck_94_caucasian',
'153_male_happy_open_maxplanck_100_caucasian',
'153_male_neutral_closed_maxplanck_97_caucasian',
'154_male_angry_closed_maxplanck_86_caucasian',
'154_male_happy_open_maxplanck_98_caucasian',
'154_male_neutral_closed_maxplanck_90_caucasian',
'155_male_angry_closed_maxplanck_68_caucasian',
'155_male_happy_open_maxplanck_98_caucasian',
'155_male_neutral_closed_maxplanck_84_caucasian',
'156_female_angry_closed_maxplanck_91_caucasian',
'156_female_happy_open_maxplanck_98_caucasian',
'156_female_neutral_closed_maxplanck_91_caucasian',
'157_female_angry_closed_maxplanck_97_caucasian',
'157_female_happy_open_maxplanck_98_caucasian',
'157_female_neutral_closed_maxplanck_81_caucasian',
'158_female_angry_closed_maxplanck_77_caucasian',
'158_female_happy_open_maxplanck_100_caucasian',
'158_female_neutral_closed_maxplanck_80_caucasian',
'159_male_angry_closed_maxplanck_85_caucasian',
'159_male_happy_open_maxplanck_100_caucasian',
'159_male_neutral_closed_maxplanck_99_caucasian',
'160_female_angry_closed_maxplanck_77_caucasian',
'160_female_happy_open_maxplanck_90_caucasian',
'160_female_neutral_closed_maxplanck_66_caucasian',
'161_male_angry_closed_maxplanck_88_caucasian',
'161_male_happy_open_maxplanck_98_caucasian',
'161_male_neutral_closed_maxplanck_94_caucasian',
'162_female_angry_closed_maxplanck_89_caucasian',
'162_female_happy_open_maxplanck_100_caucasian',
'162_female_neutral_closed_maxplanck_95_caucasian',
'163_male_angry_closed_maxplanck_63_caucasian',
'163_male_happy_open_maxplanck_98_caucasian',
'163_male_neutral_closed_maxplanck_83_caucasian',
'164_male_angry_closed_maxplanck_85_caucasian',
'164_male_happy_open_maxplanck_99_caucasian',
'164_male_neutral_closed_maxplanck_80_caucasian',
'165_female_angry_closed_maxplanck_91_caucasian',
'165_female_happy_open_maxplanck_99_caucasian',
'165_female_neutral_closed_maxplanck_88_caucasian',
'166_male_angry_closed_maxplanck_88_caucasian',
'166_male_happy_open_maxplanck_100_caucasian',
'166_male_neutral_closed_maxplanck_54_caucasian',
'167_female_angry_closed_maxplanck_77_caucasian',
'167_female_happy_open_maxplanck_98_caucasian',
'167_female_neutral_closed_maxplanck_83_caucasian',
'168_female_angry_closed_maxplanck_91_caucasian',
'168_female_happy_open_maxplanck_96_caucasian',
'168_female_neutral_closed_maxplanck_90_caucasian',
'169_female_angry_closed_maxplanck_97_caucasian',
'169_female_happy_open_maxplanck_97_caucasian',
'169_female_neutral_closed_maxplanck_97_caucasian',
'170_male_angry_closed_maxplanck_95_caucasian',
'170_male_happy_open_maxplanck_100_caucasian',
'170_male_neutral_closed_maxplanck_91_caucasian',
'171_female_angry_closed_maxplanck_76_caucasian',
'171_female_happy_open_maxplanck_99_caucasian',
'171_female_neutral_closed_maxplanck_95_caucasian',
'172_female_angry_closed_maxplanck_97_caucasian',
'172_female_happy_open_maxplanck_100_caucasian',
'172_female_neutral_closed_maxplanck_94_caucasian',
'173_male_angry_closed_maxplanck_62_caucasian',
'173_male_happy_open_maxplanck_97_caucasian',
'173_male_neutral_closed_maxplanck_88_caucasian',
'174_female_angry_closed_maxplanck_90_caucasian',
'174_female_happy_open_maxplanck_96_caucasian',
'174_female_neutral_closed_maxplanck_91_caucasian',
'175_male_angry_closed_maxplanck_84_caucasian',
'175_male_happy_open_maxplanck_100_caucasian',
'175_male_neutral_closed_maxplanck_94_caucasian',
'176_male_angry_closed_maxplanck_100_caucasian',
'176_male_happy_open_maxplanck_98_caucasian',
'176_male_neutral_closed_maxplanck_92_caucasian',
'177_female_angry_closed_maxplanck_85_caucasian',
'177_female_happy_open_maxplanck_97_caucasian',
'177_female_neutral_closed_maxplanck_99_caucasian',
'178_male_angry_closed_maxplanck_62_caucasian',
'178_male_happy_open_maxplanck_100_caucasian',
'178_male_neutral_closed_maxplanck_91_caucasian',
'179_male_angry_closed_maxplanck_83_caucasian',
'179_male_happy_open_maxplanck_99_caucasian',
'179_male_neutral_closed_maxplanck_97_caucasian',
'180_male_angry_closed_maxplanck_88_caucasian',
'180_male_happy_open_maxplanck_97_caucasian',
'180_male_neutral_closed_maxplanck_95_caucasian',
'181_female_angry_closed_maxplanck_75_caucasian',
'181_female_happy_open_maxplanck_96_caucasian',
'181_female_neutral_closed_maxplanck_82_caucasian',
'182_female_angry_closed_maxplanck_89_caucasian',
'182_female_happy_open_maxplanck_100_caucasian',
'182_female_neutral_closed_maxplanck_95_caucasian',
'183_female_angry_closed_maxplanck_95_caucasian',
'183_female_happy_open_maxplanck_97_caucasian',
'183_female_neutral_closed_maxplanck_86_caucasian',
'184_female_angry_closed_maxplanck_89_caucasian',
'184_female_happy_open_maxplanck_100_caucasian',
'184_female_neutral_closed_maxplanck_96_caucasian',
'185_male_angry_closed_maxplanck_78_caucasian',
'185_male_happy_open_maxplanck_94_caucasian',
'185_male_neutral_closed_maxplanck_94_caucasian',
'186_female_angry_closed_maxplanck_96_caucasian',
'186_female_happy_open_maxplanck_100_caucasian',
'186_female_neutral_closed_maxplanck_97_caucasian',
'187_male_angry_closed_maxplanck_83_caucasian',
'187_male_happy_open_maxplanck_100_caucasian',
'187_male_neutral_closed_maxplanck_91_caucasian',
'188_female_angry_closed_maxplanck_89_caucasian',
'188_female_happy_open_maxplanck_100_caucasian',
'188_female_neutral_closed_maxplanck_97_caucasian',
'189_male_angry_closed_maxplanck_61_caucasian',
'189_male_happy_open_maxplanck_97_caucasian',
'189_male_neutral_closed_maxplanck_91_caucasian',
'190_male_angry_closed_maxplanck_89_caucasian',
'190_male_happy_open_maxplanck_97_caucasian',
'190_male_neutral_closed_maxplanck_97_caucasian',
'191_female_angry_closed_maxplanck_75_caucasian',
'191_female_happy_open_maxplanck_97_caucasian',
'191_female_neutral_closed_maxplanck_61_caucasian',
'192_female_angry_closed_maxplanck_89_caucasian',
'192_female_happy_open_maxplanck_96_caucasian',
'192_female_neutral_closed_maxplanck_91_caucasian',
'193_male_angry_closed_maxplanck_96_caucasian',
'193_male_happy_open_maxplanck_97_caucasian',
'193_male_neutral_closed_maxplanck_93_caucasian',
'194_female_angry_closed_maxplanck_94_caucasian',
'194_female_happy_open_maxplanck_97_caucasian',
'194_female_neutral_closed_maxplanck_87_caucasian',
'195_female_angry_closed_maxplanck_92_caucasian',
'195_female_happy_open_maxplanck_96_caucasian',
'195_female_neutral_closed_maxplanck_94_caucasian',
'196_male_angry_closed_maxplanck_83_caucasian',
'196_male_happy_open_maxplanck_98_caucasian',
'196_male_neutral_closed_maxplanck_96_caucasian',
'197_male_angry_closed_maxplanck_97_caucasian',
'197_male_happy_open_maxplanck_100_caucasian',
'197_male_neutral_closed_maxplanck_99_caucasian',
'198_female_angry_closed_maxplanck_88_caucasian',
'198_female_happy_open_maxplanck_97_caucasian',
'198_female_neutral_closed_maxplanck_68_caucasian',
'199_female_angry_closed_maxplanck_74_caucasian',
'199_female_happy_open_maxplanck_98_caucasian',
'199_female_neutral_closed_maxplanck_68_caucasian',
'200_male_angry_closed_maxplanck_58_caucasian',
'200_male_happy_open_maxplanck_100_caucasian',
'200_male_neutral_closed_maxplanck_88_caucasian',
'201_female_angry_closed_maxplanck_86_caucasian',
'201_female_happy_open_maxplanck_100_caucasian',
'201_female_neutral_closed_maxplanck_91_caucasian',
'202_female_angry_closed_maxplanck_74_caucasian',
'202_female_happy_open_maxplanck_100_caucasian',
'202_female_neutral_closed_maxplanck_96_caucasian',
'203_female_angry_closed_maxplanck_86_caucasian',
'203_female_happy_open_maxplanck_98_caucasian',
'203_female_neutral_closed_maxplanck_78_caucasian',
'204_male_angry_closed_maxplanck_89_caucasian',
'204_male_happy_open_maxplanck_97_caucasian',
'204_male_neutral_closed_maxplanck_95_caucasian',
'205_male_angry_closed_maxplanck_83_caucasian',
'205_male_happy_open_maxplanck_100_caucasian',
'205_male_neutral_closed_maxplanck_92_caucasian',
'206_male_angry_closed_maxplanck_56_caucasian',
'206_male_happy_open_maxplanck_98_caucasian',
'206_male_neutral_closed_maxplanck_74_caucasian',
'207_female_angry_closed_maxplanck_88_caucasian',
'207_female_happy_open_maxplanck_100_caucasian',
'207_female_neutral_closed_maxplanck_96_caucasian',
'208_female_angry_closed_maxplanck_88_caucasian',
'208_female_happy_open_maxplanck_100_caucasian',
'208_female_neutral_closed_maxplanck_97_caucasian',
'209_female_angry_closed_maxplanck_94_caucasian',
'209_female_happy_open_maxplanck_100_caucasian',
'209_female_neutral_closed_maxplanck_93_caucasian',
'210_male_angry_closed_maxplanck_55_caucasian',
'210_male_happy_open_maxplanck_97_caucasian',
'210_male_neutral_closed_maxplanck_95_caucasian',
'211_male_angry_closed_maxplanck_83_caucasian',
'211_male_happy_open_maxplanck_100_caucasian',
'211_male_neutral_closed_maxplanck_98_caucasian',
'212_female_angry_closed_maxplanck_73_caucasian',
'212_female_happy_open_maxplanck_100_caucasian',
'212_female_neutral_closed_maxplanck_93_caucasian',
'213_male_angry_closed_maxplanck_88_caucasian',
'213_male_happy_open_maxplanck_100_caucasian',
'213_male_neutral_closed_maxplanck_97_caucasian',
'214_male_angry_closed_maxplanck_52_caucasian',
'214_male_happy_open_maxplanck_98_caucasian',
'214_male_neutral_closed_maxplanck_89_caucasian',
'215_male_angry_closed_maxplanck_90_caucasian',
'215_male_happy_open_maxplanck_99_caucasian',
'215_male_neutral_closed_maxplanck_92_caucasian',
'216_female_angry_closed_maxplanck_73_caucasian',
'216_female_happy_open_maxplanck_97_caucasian',
'216_female_neutral_closed_maxplanck_89_caucasian',
'217_male_angry_closed_maxplanck_82_caucasian',
'217_male_happy_open_maxplanck_98_caucasian',
'217_male_neutral_closed_maxplanck_87_caucasian',
'218_female_angry_closed_maxplanck_95_caucasian',
'218_female_happy_open_maxplanck_99_caucasian',
'218_female_neutral_closed_maxplanck_76_caucasian',
'219_male_angry_closed_maxplanck_52_caucasian',
'219_male_happy_open_maxplanck_98_caucasian',
'219_male_neutral_closed_maxplanck_82_caucasian',
'220_female_angry_closed_maxplanck_91_caucasian',
'220_female_happy_open_maxplanck_99_caucasian',
'220_female_neutral_closed_maxplanck_91_caucasian',
'221_male_angry_closed_maxplanck_94_caucasian',
'221_male_happy_open_maxplanck_98_caucasian',
'221_male_neutral_closed_maxplanck_97_caucasian',
'222_female_angry_closed_maxplanck_73_caucasian',
'222_female_happy_open_maxplanck_98_caucasian',
'222_female_neutral_closed_maxplanck_92_caucasian',
'223_male_angry_closed_maxplanck_82_caucasian',
'223_male_happy_open_maxplanck_95_caucasian',
'223_male_neutral_closed_maxplanck_80_caucasian',
'224_female_angry_closed_maxplanck_88_caucasian',
'224_female_happy_open_maxplanck_100_caucasian',
'224_female_neutral_closed_maxplanck_97_caucasian',
'225_female_angry_closed_maxplanck_88_caucasian',
'225_female_happy_open_maxplanck_95_caucasian',
'225_female_neutral_closed_maxplanck_92_caucasian',
'226_female_angry_closed_maxplanck_72_caucasian',
'226_female_happy_open_maxplanck_96_caucasian',
'226_female_neutral_closed_maxplanck_80_caucasian',
'227_male_angry_closed_maxplanck_82_caucasian',
'227_male_happy_open_maxplanck_100_caucasian',
'227_male_neutral_closed_maxplanck_94_caucasian',
'228_male_angry_closed_maxplanck_92_caucasian',
'228_male_happy_open_maxplanck_99_caucasian',
'228_male_neutral_closed_maxplanck_94_caucasian',
'229_female_angry_closed_maxplanck_95_caucasian',
'229_female_happy_open_maxplanck_100_caucasian',
'229_female_neutral_closed_maxplanck_88_caucasian',
'230_female_angry_closed_maxplanck_95_caucasian',
'230_female_happy_open_maxplanck_100_caucasian',
'230_female_neutral_closed_maxplanck_96_caucasian',
'231_female_angry_closed_maxplanck_72_caucasian',
'231_female_happy_open_maxplanck_95_caucasian',
'231_female_neutral_closed_maxplanck_81_caucasian',
'232_male_angry_closed_maxplanck_81_caucasian',
'232_male_happy_open_maxplanck_97_caucasian',
'232_male_neutral_closed_maxplanck_95_caucasian',
'233_male_angry_closed_maxplanck_97_caucasian',
'233_male_happy_open_maxplanck_100_caucasian',
'233_male_neutral_closed_maxplanck_88_caucasian',
'234_female_angry_closed_maxplanck_88_caucasian',
'234_female_happy_open_maxplanck_98_caucasian',
'234_female_neutral_closed_maxplanck_52_caucasian',
'235_male_angry_closed_maxplanck_81_caucasian',
'235_male_happy_open_maxplanck_99_caucasian',
'235_male_neutral_closed_maxplanck_57_caucasian',
'236_male_angry_closed_maxplanck_94_caucasian',
'236_male_happy_open_maxplanck_98_caucasian',
'236_male_neutral_closed_maxplanck_86_caucasian',
'237_female_angry_closed_maxplanck_97_caucasian',
'237_female_happy_open_maxplanck_98_caucasian',
'237_female_neutral_closed_maxplanck_91_caucasian',
'238_female_angry_closed_maxplanck_89_caucasian',
'238_female_happy_open_maxplanck_100_caucasian',
'238_female_neutral_closed_maxplanck_100_caucasian',
'239_female_angry_closed_maxplanck_73_caucasian',
'239_female_happy_open_maxplanck_91_caucasian',
'239_female_neutral_closed_maxplanck_80_caucasian',
'240_male_angry_closed_maxplanck_93_caucasian',
'240_male_happy_open_maxplanck_100_caucasian',
'240_male_neutral_closed_maxplanck_93_caucasian',
'241_female_angry_closed_maxplanck_95_caucasian',
'241_female_happy_open_maxplanck_100_caucasian',
'241_female_neutral_closed_maxplanck_92_caucasian',
'242_male_angry_closed_maxplanck_81_caucasian',
'242_male_happy_open_maxplanck_100_caucasian',
'242_male_neutral_closed_maxplanck_94_caucasian',
'243_male_angry_closed_maxplanck_81_caucasian',
'243_male_happy_open_maxplanck_95_caucasian',
'243_male_neutral_closed_maxplanck_96_caucasian',
'244_female_angry_closed_maxplanck_88_caucasian',
'244_female_happy_open_maxplanck_100_caucasian',
'244_female_neutral_closed_maxplanck_88_caucasian',
'245_female_angry_closed_maxplanck_96_caucasian',
'245_female_happy_open_maxplanck_95_caucasian',
'245_female_neutral_closed_maxplanck_99_caucasian',
],
stimuli_list_training:
[
'244_female_angry_closed_maxplanck_88_caucasian',
'244_female_happy_open_maxplanck_100_caucasian',
'244_female_neutral_closed_maxplanck_88_caucasian',
'245_female_angry_closed_maxplanck_96_caucasian',
'245_female_happy_open_maxplanck_95_caucasian',
'245_female_neutral_closed_maxplanck_99_caucasian',
],
    numcells: 8,                    //Number of cells in the grid
    resp_keys: [68, 70, 74, 75, 32],    // D,F,J,K, spacebar
    navigation_keys: [32, 81],      //Spacebar, Q
    fixation_time_max: 600,        //Maximum wait time at start of trial (milliseconds)
    fixation_time_min: 300,         //Minimum wait time at start of trial (milliseconds)
    time_limit: 2000,               //Time limit P has to respond within (milliseconds)
    feedback_time: 2000,            //Length of time feedback is displayed on the screen (milliseconds)
    three_errors_feeback_time: 8000, //Length of time instructions appear on screen if participant gets 3 wrong in a row
    n_trials_main: 50,               //Number of trials in main blocks
    n_trials_training: 8,           //Number of trials in training blocks
    n_blocks_main: 4,               //Number of blocks for each emotion rule
    attention_check_freq: NaN,      //How often the attention check appears (MAKE sure the attention check appears in the middle of a block or else it will mess up the order). If attention check not in use set to NaN
    attention_check_time: NaN,      //Time limit P has to respond within (milliseconds) for attention check
    emotion_order_matrix:                         //Matrix for determining order of emotion conditions
    [['happy', 'angry', 'neutral'], ['happy', 'neutral', 'angry'], ['angry', 'happy', 'neutral'], ['angry', 'neutral', 'happy'], ['neutral', 'happy', 'angry'], ['neutral', 'angry', 'happy'], 
    ['happy', 'angry', 'neutral'], ['happy', 'neutral', 'angry'], ['angry', 'happy', 'neutral'], ['angry', 'neutral', 'happy'], ['neutral', 'happy', 'angry'], ['neutral', 'angry', 'happy']],
    incorrect_resp_limit: 5,         //Number of incorrect responses P can make before being shown rules reminder  
    }
    
    let state = {
        //If running on Gorilla, the next line sets state.randomisation group to the value in Gorilla manipulation called 'randomisation_group'.
        //If not running on gorilla, it chooses a random number between 1 and 12.
        rand_group: primate.manipulation('randomisation_group', _.sample(['1','2','3','4','5','6','7','8','9','10','11','12'])), //Group participant is randomised to (1 to 12).
        trial_nr: null, //Trial number
        block_nr: null, //Block number (this part)
        block_nr_total: null, //Block number (entire experiment)
        part: 1, //Part of the experiment i.e. part 1/2/3 (rules change at the start of part 2 and part 3)
        phase: null, //Phase of the experiment i.e. training_with_rules/training_no_rules/main
        width: null, //Screen width
        height: null, //Screen height
        t_start_experiment: null, //Experiment start time
        stimuli_list_shuffled: null, //Order of stimuli for this participant
        stimuli_list_training_shuffled: null, //Order of training stimuli
        emotion_conditions: ['blank', 'blank', 'blank'], //Order of emotion conditions for this participant (randomly chosen from 6 different orders)
        top_task: null, //Task to be performed if stimulus appears in top quadrants ('emotion' or 'gender' task)
        bottom_task: null, //Task to be performed if stimulus appears in bottom quadrants ('gender' or 'emotion' task)
        emotion_task: null, //Emotion task aim, i.e. does P have to detect 'happy', 'angry' or 'neutral' stimuli
        emotion_task_false: null, //Opposite to target emotion (i.e. if aim is to detect 'happy' stimuli, this will be 'not happy')
        gender_task: 'male', //DO NOT CHANGE, used as a variable in working out correct answer.
        gender_task_false: 'female', //DO NOT CHANGE, used as a variable in working out correct answer.
        stimulus: null, //Filename of stimulus for current trial
        stimulus_parameters: null, //Parts of stimulus file name e.g. [001 male angry 100]
        stim_model: null, //Stimulus model number
        stim_model_1_back: null, //Stimulus model number on previous trial
        stim_gender: null, //Stimulus gender 'male' or 'female'
        stim_emotion: null, //Stimulus emotion ('angry', 'happy' or 'neutral')
        stim_mouth: null, //Stimulus mouth 'open' or 'closed'
        stim_database: null, //Stimulus database ('radiate' or 'maxplanck')
        stim_recognition: null, //Emotion recognition accuracy (% of responders in original database validation who correctly identified emotion)
        stim_ethnicity: null, //Stimulus model ethnicity
        stim_quadrant: null, //Postion of stimulus for current trial (quadrant number)
        stim_quadrant_1_back: null, //Position of stimulus 1 trial ago (last trial)
        stim_quadrant_2_back: null, //Position of stimulus 2 trials ago
        stim_quadrant_3_back: null, //Position of stimulus 3 trials ago
        stim_quadrant_4_back: null, //Position of stimulus 4 trials ago
        accuracy_1_back: null, //Accuracy 1 trial ago
        incorrect_resp_streak: null, //How many incorrect responses you have had in a row
        D: 68, //D      Key code for D
        F: 70, //F      Key code for F
        J: 74, //J      Key code for J
        K: 75, //K      Key code for K
        correct_response: null, //The correct response on this trial (68 70 74 or 75)
        t_start_trial: null, //Time trial started
        t_response: null, //Time participant made a response
        rt: null, //Reaction time
        response: null, //Key participant pressed
        accuracy: null, //Whether participant's response on this trial was correct (1) or incorrect (0)
        trial_nr_block: null, //Trial number this block
        accuracy_block: null, //Running total of number of correct responses this block
        rt_block: null, //Running total of number of the total rt in this block (i.e. 1654 ms + 2435 ms = 4089 ms)
        rt_block_mean: null, //Mean rt for this block (only counting trials where the participant actually responded)
        n_responses_block: null, //Running total of the number of responses (correct and incorrect) P has made this block
        pb_rt: null, //Personal best average rt for a block (only counting trials where the participant actually responded)
        pb_accuracy: null, //Personal best accuracy for a block (%)
        attention_check_response: null, //Response during attention check trials
        attention_check_accuracy: null, //Accuracy of attention check response (1 if person pressed P; 0 if not)
        response_rule: null, //Whether P has to respond based on emotion or gender
        switch_or_repetition: null, //Whether P has to respond based on different (switch) or same (repetition) stimulus feature as previous trial
        trial_cond: null, //Condition of trial (e.g. emotion-happy-switch)
        trial_cond_1_back: null, //Condition on previous trial (e.g. emotion-happy-switch)
        correct_rule_wrong_resp: null, //Whether P responded according to the correct rule but the wrong response
        wrong_rule_correct_resp: null, //Whether P responded according to the wrong rule but the correct response
        wrong_rule_wrong_resp: null, //Whether P responded according to the wrong rule and the wrong response
        error_by_response: null, //Keyboard key corresponding to correct rule wrong response
        error_by_rule: null,     //Keyboard key corresponding to wrong rule correct response
        error_by_rule_and_response: null, //Keyboard key corresponding to wrong rule wrong response
        currentQuestionIndex: null, //Current question number in rules quiz
        isi: null, //Inter-stimulus interval for this trial (jittered) (ms)
        faulty_image: null, //whether target image loads correctly (0) or incorrectly (1)
        n_faulty_images_block: null, //how many images have loaded incorrectly this block
        //Define the questions that will be asked in the rules quiz.
        too_slow: null, //Whether person was too slow to respond
        omission_error: null, //Whether person made an omission error
        questions:
        [{question:'If the image appears in one of the top quadrants, you must respond based on _________.', //Question 1
        answers: [
            {text: 'Emotion', correct: false},
            {text: 'Gender', correct: false}
        ]},
        {question:'If the image appears in one of the bottom quadrants, you must respond based on _________', //Question 2
        answers: [
            {text: 'Emotion', correct: false},
            {text: 'Gender', correct: false}
        ]},
        {question:'What is the gender rule?', //Question 3
        answers: [
            {text: 'Male – Press D \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Female – Press F', correct: false}, //N.B. \xa0 is white space
            {text: 'Female – Press D \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Male – Press F', correct: false},
            {text: 'Male – Press J \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Female – Press K', correct: false},
            {text: 'Female – Press J \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Male – Press K', correct: false}
        ]},
        {question:'What is the emotion rule?', //Question 4
        answers: [
            {text: 'Happy – Press D \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Not happy – Press F', correct: false},
            {text: 'Angry – Press D  \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Not angry – Press F', correct: false},
            {text: 'Neutral – Press D  \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Not neutral – Press F', correct: false},
            {text: 'Happy – Press J  \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Not happy – Press K', correct: false},
            {text: 'Angry – Press J  \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Not angry – Press K', correct: false},
            {text: 'Neutral – Press J  \xa0\xa0\xa0\xa0\xa0\xa0\xa0&\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Not neutral – Press K', correct: false}
        ]},
        {question: "What key should you press if there was a technical issue (i.e. if the image didn't load or if the image loaded gradually)?", //Question 5
        answers: [
            {text: 'D', correct: false},
            {text: 'F', correct: false},
            {text: 'J', correct: false},
            {text: 'K', correct: false},
            {text: 'SPACE', correct: true},
        ]
    }
        ]
        }

        var example_stimulus; //Define outside of function using var to make a global variable
        var target;
        var selectedButton;
        var correct;
        var dice_odds = [];
        var nums;
        var faulty_image;

    // When everything's loaded, call the `Ready` function
    primate.ready(Ready);
    
    function Ready(){
        // Conduct all randomisation of Ps here before begining (randomise Ps to 1 of 12 groups).
        //1) Set top_task to 'emotion' or 'gender' based on value in state.randomisation group
        if (state.rand_group >= 1 && state.rand_group <= 6){  //If person is in randomisation group 1-6, then make top_task 'emotion'
            state.top_task = 'emotion'
        }
        else{state.top_task = 'gender'} //If person is in randomisation group 7-12, then make top_task 'gender'
        //2) Set emotion condition order based on value in state.randomisation group
        state.emotion_conditions = globals.emotion_order_matrix[state.rand_group-1]        
        //3) Shuffle stimuli list
        state.stimuli_list_shuffled = globals.stimuli_list.sort(() => Math.random() - 0.5);
        //4) Generate stimul list for training trials
        state.stimuli_list_training_shuffled = globals.stimuli_list_training.sort(() => Math.random() - 0.5);

        //The ready function does some gorilla stuff 
        primate.populate('#gorilla', 'body', {});
        // Select everything in the gorilla tag and hide it for the timebeing
        $('#gorilla').children().hide();
        on_resize();  // Check window size now
        $( window ).resize(_.debounce(on_resize, 100)); // And every time it changes
        // Select everything in the gorilla tag and show it
        $('#gorilla').show();
        //Log the current time
        state.t_start_experiment = Date.now();
        
        //Show the welcome screen
        $('#welcome').show();
        $('#press_space_bottom').show();
        //Update the task rules i.e. set emotion_task, emotion_task_false and bottom_task
        UpdateTaskRules()
        bind_to_key(FingerPositioning, 32);  // Load the instructions when spacebar is pressed
        target = $('#target'); //Need to define otherwise target sometimes does not load
        example_stimulus = $('#example_stimulus'); //Define example_stimulus variable
        faulty_image = $('#faulty_image'); //Define faulty_image variable
    }
    
    function UpdateTaskRules(){
        state.emotion_task = state.emotion_conditions.shift() //Set emotion_task by taking the first value in state.emotion_conditions (without replacement)
        state.emotion_task_false = 'not ' + state.emotion_task; //Set emotion_task_false
        if (state.top_task == 'emotion'){ //If top task is emotion judegement...
        state.bottom_task = 'gender' //...set bottom task to gender judgement...
        }
        else{
            state.bottom_task = 'emotion' //...otherwise (if top task is gender task), set bottom task to emotion judgement
        }
    }
    
    FingerPositioning()
    
    function FingerPositioning(){
        $('#welcome').hide();
        $('#instructions').hide();
        $('#example_stimulus').hide();
        $('#example_top_text').hide();
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('#press_space_continue').hide();
        $('#press_space_bottom').hide();
        $('#go_back').hide();
        $('#all').hide(); //Hides quiz content
        $('#finger_positioning').show();
        bind_to_key(ExampleTop, 32);  // Load the instructions when spacebar is pressed
    }

    function ExampleTop(){
        UpdateInstructions();
        $('#grid-container-dummy').show();
        $('#grid-container').show();
        $('#target').hide();
        $('#cell1').html(example_stimulus);
        $('#example_stimulus').show();
        if (state.top_task == 'emotion'){
            $('img.example').attr('src', primate.stimuliURL('example_'+state.emotion_task+'.png'));
        }
        else{
            $('img.example').attr('src', primate.stimuliURL('example_male.png'));
        }
        $('#finger_positioning').hide();
        $('#instructions_bottom_box').hide();
        $('#instructions_bottom_text').hide();
        $('#example_bottom_text').hide();
        $('#three_incorrect_responses_message').hide();
        $('#instructions').show();
        $('#instructions_top_box').show();
        $('#instructions_top_text').show();
        $('#press_space_continue').show();
        $('#go_back').show();
        $('#example_top_text').show();
        setTimeout(() => { $('#grid-container-dummy').hide(); }, globals.fixation_time_min); //Load FingerPositioning or ExampleBottom depending on which key person presses
        BackForwardKeys(FingerPositioning, ExampleBottom);    
    }
    
    function BackForwardKeys(back,forward){ //A function for going backwards and forwards between screens. When you call the function, change 'back' and 'forward' to different functions you want to execute when each key is pressed
        $(document).bind("keydown", function(e){ 
            e = e || window.event;
            var charCode = e.which || e.keyCode;
            if(charCode == 81) back(); //If the person presses Q key, call the back function
            if(charCode == 32) forward(); //If the person presses spacebar, call the forward function
        });
    }

    function ExampleBottom(){
        $('#grid-container-dummy').show();
        $('#target').hide();
        $('#cell6').html(example_stimulus);
        if (state.bottom_task == 'emotion'){
            $('img.example').attr('src', primate.stimuliURL('example_'+state.emotion_task+'.png'));
        }
        else{
            $('img.example').attr('src', primate.stimuliURL('example_male.png'));
        }
        $('#instructions_top_box').hide();
        $('#instructions_top_text').hide();
        $('#example_top_text').hide();
        $('#too_slow_error').hide();
        $('#press_space_bottom').hide();
        $('#instructions_error').hide();
        $('#heading_faulty_image').hide();
        $('#instructions_faulty_image').hide();
        $('#faulty_image').hide();
        $('#instructions_bottom_box').show();
        $('#instructions_bottom_text').show();
        $('#press_space_continue').show();
        $('#example_bottom_text').show();
        setTimeout(() => { $('#grid-container-dummy').hide()}, globals.fixation_time_min);
        BackForwardKeys(ExampleTop, InstructionsFaultyImage);
    }
    
    function InstructionsFaultyImage(){
        $('#cell8').html(faulty_image);
        $('#instructions_bottom_box').hide();
        $('#instructions_bottom_text').hide();
        $('#instructions').hide();
        $('#example_bottom_text').hide();
        $('#example_stimulus').hide();
        $('#grid-container').show();
        $('#grid-container-dummy').show();
        $('#instructions_error').hide();
        $('#too_slow_error').hide();
        $('#instructions_training_with_rules').hide();
        $('#heading_faulty_image').show();
        $('#instructions_faulty_image').show();
        $('#faulty_image').show();
        $('#faulty_image_footer').show();
        $('#press_space_continue').show();
        setTimeout(() => { $('#grid-container-dummy').hide()}, globals.fixation_time_min);
        BackForwardKeys(ExampleBottom, InstructionsError);
    }

    function InstructionsError(){
        $('#press_space_continue').hide();
        $('#instructions_training_with_rules').hide();
        $('#heading_faulty_image').hide();
        $('#instructions_faulty_image').hide();
        $('#faulty_image').hide();
        $('#instructions_error').show();
        $('#too_slow_error').show();
        $('#press_space_continue').show();
        $("#response_time_limit").text((globals.time_limit/1000).toFixed(0)); //Use jquery to change time limit to value
        // in globals.time_limit. Units in seconds rounded to the nearest whole number
        BackForwardKeys(InstructionsFaultyImage, InstructionsTrainingWithRules);
    }
    
    function InstructionsTrainingWithRules(){
        $('#all').hide(); //Hides quiz content
        $('#heading_faulty_image').hide();
        $('#instructions_faulty_image').hide();
        $('#faulty_image').hide();
        state.trial_nr_block = null;
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('#press_space_bottom').hide();
        $('#instructions_error').hide();
        $('#too_slow_error').hide();
        $('#rule_change').hide()
        state.phase = 'training_with_rules' //Set phase to training_with_rules
        $('#instructions_training_with_rules').show();
        $('#press_space_continue').show();
        if (state.part == 1){
            BackForwardKeys(InstructionsError, NewRound);
        }
        else {
            BackForwardKeys(RuleChange, NewRound);    
        }
    }
    
    function InstructionsTrainingNoRules(){
        state.trial_nr_block = null;
        $('#too_slow_error').hide();
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('#incorrect_response_training').hide();
        state.phase = 'training_no_rules' //Set phase to training_with_rules
        $('.num_incorrect_resp_limit').text(globals.incorrect_resp_limit); //Change html text to value in globals.incorrect_resp_limit
        $('#instructions_training_no_rules').show();
        $('#press_space_continue').show();
        bind_to_key(NewRound, 32);
    }
    
    function TrainingComplete(){
        $('#all').hide(); //Hides quiz content
        $('#too_slow_error').hide();
        $('#incorrect_response_training').hide();
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('.num_incorrect_resp_limit').text(globals.incorrect_resp_limit); //Change html text to value in globals.incorrect_resp_limit
        if(state.part == 1){
            $('#main_task_part_2_or_3').hide();
            $('#main_task_first_time').show();
        }
        else{
            $('#main_task_part_2_or_3').show();
            $('#main_task_first_time').hide();
        }
        $("#total_num_blocks").text(globals.n_blocks_main*3)
        $("#blocks_per_part").text(globals.n_blocks_main)
        $('#training_complete').show();
        $('#press_space_bottom').show();
        state.phase = 'main';
        state.block_nr = null;
        bind_to_key(PrepareBlock, 32);
    }
    
    //Call this function to update the all the instructions (according to current task conditions)
    function UpdateInstructions(){
        //Use jquery to change instructions based on task conditions in this block
        $("#top_task").text(state.top_task); 
        $("#top_task2").text(state.top_task); 
        $("#top_task3").text(state.top_task);
        $("#top_task4").text(state.top_task);
        $("#bottom_task").text(state.bottom_task);
        $("#bottom_task2").text(state.bottom_task); 
        $("#bottom_task3").text(state.bottom_task);
        $("#bottom_task4").text(state.bottom_task); 
    
        if(state.top_task == 'emotion'){
            $("#D_condition").text(state.emotion_task);
            $("#D_condition_2").text(state.emotion_task);
            $("#F_condition").text(state.emotion_task_false);
        }
        else{
            $("#D_condition").text(state.gender_task);
            $("#D_condition_2").text(state.gender_task);
            $("#F_condition").text(state.gender_task_false);
        }
    
        if(state.bottom_task == 'emotion'){
            $("#J_condition").text(state.emotion_task);
            $("#J_condition_2").text(state.emotion_task);
            $("#K_condition").text(state.emotion_task_false);
        }
        else{
            $("#J_condition").text(state.gender_task);
            $("#J_condition_2").text(state.gender_task);
            $("#K_condition").text(state.gender_task_false);
        }
    }
    


    //This function inserts an element into an array
    function insertAt (array, index, ...insertme){
        array.splice(index, 0, ...insertme)
    }

    //This function generates a random integer between min and max. Use it with the insertAt function to insert an element at a random point in an array
    function getRandomInt(min, max) { 
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
    //Call this function whenever you want to show the instructions (task rules) on the screen
    function Instructions(){ 
        UpdateInstructions();
        $('#instructions').show();
        $('#instructions_top_box').show();
        $('#instructions_bottom_box').show();
        $('#instructions_top_text').show();
        $('#instructions_bottom_text').show();
    }
    
    //This function displays the round number
    function NewRound(){
        $(document).off('keydown');
        ResetScoresThisBlock() //Reset trial_nr_block, stim_quadrant_n_back values, accuracy_n_back values, accuracy, rt_block, rt_block_mean, n_responses_block.
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('#instructions_bottom_box').hide();
        $('#instructions_bottom_text').hide();
        $('#example_stimulus').hide();
        $('#example_bottom_text').hide();
        $('#instructions').hide(); 
        $('#press_space_continue').hide();
        $('#press_space_bottom').hide();
        $('#instructions_training_with_rules').hide();
        $('#instructions_training_no_rules').hide();
        $('#training_complete').hide();
        $('#go_back').hide();
        $('#new_round').show();
        //Show the appropriate text, depending on whether the phase of the experiment is training_with_rules, training_no_rules or main
        if(state.phase == 'training_with_rules'){ 
            $('#new_round_training_with_rules').show()
            $('#new_round_training_no_rules').hide()
            $('#new_round_main').hide()
            setTimeout(Start, 2000)
        }
        else if(state.phase == 'training_no_rules'){
            $('#new_round_training_with_rules').hide()
            $('#new_round_training_no_rules').show()
            $('#new_round_main').hide()
            setTimeout(RulesReminder, 2000)
        }
        else{
            $('#new_round_training_with_rules').hide() //If phase is main...
            $('#new_round_training_no_rules').hide()
            $('#new_round_main').show()
            $("#round_number").text(state.block_nr_total) //...then display the round number (aka block number)
            setTimeout(RulesReminder, 2000)} //Load start screen after 2 seconds
    }
    
    //Reminder of the rules before every block
    function RulesReminder(){
        $('#new_round').hide();
        $('#grid-container-dummy').show();
        Instructions()
        $('#rules_reminder').show();
        $('#press_space_continue').show();
        bind_to_key(Start, 32)
    }
    
    function Start(){ //Run the first trial when the spacebar is pressed 
        $('#instructions').hide();
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('#press_space_continue').hide();
        $('#new_round').hide();
        $('#rules_reminder').hide();
        $('#attention_check').hide();
        $('#attention_check_image').hide();
        $('#start_div').show();
        bind_to_key(PrepareTrial, 32);
    }
    
    function UpdateStateNewTrial(){
                //At start of each trial, update state variables...
                state.trial_nr +=1; //Add 1 to trial number
                state.trial_nr_block +=1 //Add 1 to trial number within this block
                state.stim_quadrant_4_back = state.stim_quadrant_3_back;
                state.stim_quadrant_3_back = state.stim_quadrant_2_back; //Update the state.stim_quadrant_n_back values
                state.stim_quadrant_2_back = state.stim_quadrant_1_back;
                state.stim_quadrant_1_back = state.stim_quadrant;
                state.stim_model_1_back = state.stim_model; //Update stim_model_1_back
                state.trial_cond_1_back = state.trial_cond; //Update trial_cond_1_back
                state.accuracy_1_back = state.accuracy;
                //...and set the following state variables back to null
                state.stim_quadrant = null;
                state.stimulus = null; 
                state.stimulus_parameters = null;
                state.stim_model = null;
                state.stim_gender = null;
                state.stim_emotion = null;
                state.stim_mouth = null;
                state.stim_database = null;
                state.stim_recognition = null;    
                state.t_start_trial = null;
                state.t_response = null;
                state.response = null;
                state.accuracy = null;
                state.rt = null;
                state.correct_response = null;
                state.attention_check_response = null;
                state.attention_check_accuracy = null;
                state.correct_response = null;
                state.correct_rule_wrong_resp = null;
                state.wrong_rule_correct_resp = null;
                state.wrong_rule_wrong_resp = null;
                state.error_by_response = null;
                state.error_by_rule = null;
                state.error_by_rule_and_response = null;
                state.trial_cond = null;
                state.faulty_image = null;
                state.too_slow = null;
                state.omission_error = null;
    }

    //Prepare the next function, which is called PrepareTrial
    function PrepareTrial(){
        $('#grid-container-dummy').show();
        $('#target').show();
        $('#grid-container').show();
        //Hide the start message and the fixation cross
        $('#start_div').hide(); 
        $('#too_slow_error').hide();
        $('#incorrect_response_training').hide();
        $('#three_incorrect_responses_message').hide();
        UpdateStateNewTrial()
        if(state.phase == 'training_with_rules'){
            Instructions()
        }

        if(state.stimuli_list_training_shuffled.length < 1){
            state.stimuli_list_training_shuffled = globals.stimuli_list_training.sort(() => Math.random() - 0.5);
        }

        //Set interstimulus interval for this trial (jittered), based on min and max fixation times and rounded to nearest 100 ms
        state.isi = Math.round(getRandomInt(globals.fixation_time_min, globals.fixation_time_max)/100)*100; 

        //Prepare stimulus
        //1. Choose pseudorandom cell number from 1-8 for target to appear in
            dice_odds = [];
        dice_odds.length = 8;
        nums = [1, 2, 3, 4, 5, 6, 7, 8];
        SetDiceOdds()
        state.stim_quadrant = nums[simulateEvent(dice_odds)];

        //This for loop selects a stimulus, but if the model is the same as last time then it selects a new stimulus
        for(;;){ //Keep doing this loop for eternity (aka until we find a stimulus that is a different model to last time)
            //2. Withdraw first stimulus file name from state.stimuli_list_training_shuffled or stimuli_list_shuffled to use in this trial
            if (state.phase == 'main'){
                state.stimulus = state.stimuli_list_shuffled.shift();
            }
            else{
                state.stimulus = state.stimuli_list_training_shuffled.shift();
            }
            //3. Extract details about stimulus
            state.stimulus_parameters = state.stimulus.split("_") //Splits the value in stimulus at each point there is a _ in the file name
            state.stim_model = state.stimulus_parameters[0] //Record model number
            state.stim_gender = state.stimulus_parameters[1] //Record gender
            state.stim_emotion = state.stimulus_parameters[2] //Record emotion
            state.stim_mouth = state.stimulus_parameters[3] //Record mouth open or closed
            state.stim_database = state.stimulus_parameters[4] //Record stimulus database
            state.stim_recognition = state.stimulus_parameters[5] //Record stimulus recognition accuracy (% emotion recognition from original stimulus validation)
            state.stim_ethnicity = state.stimulus_parameters[6] //Record stimulus model ethnicity
            if(state.phase == 'main' && state.stim_model !== state.stim_model_1_back){ //If the the stimulus model is not the same as last time, then stop the loop
                break;
            }
            else if(state.phase !== 'main'){
                //Reinsert at the end of globals.stimuli_list_training otherwise globals.stimuli_list_training will eventually empty
                insertAt(globals.stimuli_list_training, globals.stimuli_list_training.length+1, state.stimulus);                
                break;
            }
            insertAt(state.stimuli_list_shuffled, getRandomInt(1, state.stimuli_list_shuffled.length), state.stimulus); //If the stimulus model 
            //is the same as last time then insert stimulus back into state.stimuli_list_shuffled at a random position and start loop again
        }
        // Add back to end of globals.stimuli_list
        insertAt(globals.stimuli_list, globals.stimuli_list.length+1, state.stimulus);

        //4. Use jquery to change URL of target to file name saved in "stimulus"
        //***Might be able to skip step by populating straight into cell div. This might speed things up
        $('img.target').attr('src', primate.stimuliURL(state.stimulus+'.png')); //Selects target (in html) and changes the src to 'value in stimulus'.png
        
        //5. Use jquery to change target position to pseudo-randomly chosen cell (value in stim_quadrant)
        $('#cell'+state.stim_quadrant).html(target) //This positions the target in the cell specified in stim_quadrant. e.g. if stim_quadrant = 2, target will be positioned in cell2 
        
        //6. Work out correct response on this trial
        if (state.top_task == 'emotion' && state.stim_quadrant <= 4){ //If top task is emotion judgement and stimulus appears in top quadrant...
        Answers_top_quadrants (state.stim_emotion, state.emotion_task, state.D, state.F)//...tell me whether the correct answer is D or F, based on the stimulus emotion
        } 
        else if (state.top_task == 'emotion' && state.stim_quadrant >= 5){ //If top task is emotion judgement and stimulus appears in bottom quadrant...
            Answers_bottom_quadrants (state.stim_gender, state.gender_task, state.J, state.K) //...tell me whether the correct answer is J or K, based on the stimulus emotion
        }
        else if (state.top_task == 'gender' && state.stim_quadrant <= 4){ //If top task is gender judgement and stimulus appears in top quadrant...
        Answers_top_quadrants (state.stim_gender, state.gender_task, state.D, state.F) //...tell me whether the correct answer is D or F, based on the stimulus emotion
        }
        else if (state.top_task == 'gender' && state.stim_quadrant >= 5){ //If top task is gender judgement and stimulus appears in top quadrant...
            Answers_bottom_quadrants (state.stim_emotion, state.emotion_task, state.J, state.K)//...tell me whether the correct answer is J or K, based on the stimulus emotion
        }

        // Work out the rule P has to follow this trial
            if (state.stim_quadrant <= 4){
                state.response_rule = state.top_task}
            else{state.response_rule = state.bottom_task}

        //Work out if the trial is a switch trial or repetition trial
        if(state.stim_quadrant_1_back == null || state.trial_nr_block == 1 || state.trial_cond_1_back == 'faulty'){
        state.switch_or_repetition = NaN
        }
        else if(state.stim_quadrant <= 4 && state.stim_quadrant_1_back <= 4){
            state.switch_or_repetition = 'repetition'
        }
        else if(state.stim_quadrant >= 5 && state.stim_quadrant_1_back >= 5){
            state.switch_or_repetition = 'repetition'
        }
        else{state.switch_or_repetition = 'switch'}
    
        //Work out trial condition
        state.trial_cond = state.trial_cond = state.response_rule + '-' + state.stim_emotion + '-' + state.switch_or_repetition;
        setTimeout(StartTrial, state.isi); //Wait for amount of time in state.isi (temporal jitter) then start trial.
    }

    function SetDiceOdds(){    
    if (state.stim_quadrant_1_back <=4){
        for( d = 0; d <= 3; d++) {
            dice_odds[d] = 4/24;
        }
        for( i = 4; i <= 7; i++) {
            dice_odds[i] = 3/24;
        }
    }else if(state.stim_quadrant_1_back >= 5 && state.stim_quadrant_1_back <= 8){
        for( d = 0; d <= 3; d++) {
            dice_odds[d] = 3/24;
        }
        for( i = 4; i <= 7; i++) {
            dice_odds[i] = 4/24;
        }
    }else{
    for( d = 0; d <= 7; d++) {
        dice_odds[d] = 1/8;
    }
}
//If last 3 stimuli have appeared in same half then set odds of stimuli appearing in that half to zero
if (state.stim_quadrant_1_back <=4 && state.stim_quadrant_2_back <=4 && state.stim_quadrant_3_back <= 4 && state.stim_quadrant_4_back <= 4){
    for( d = 0; d <= 3; d++) {
        dice_odds[d] = 0;
    }
    for( i = 4; i <= 7; i++) {
        dice_odds[i] = 1/4;
}
}if (state.stim_quadrant_1_back >=5 && state.stim_quadrant_2_back >=5 && state.stim_quadrant_3_back >=5 && state.stim_quadrant_4_back >=5){
    for( d = 0; d <= 3; d++) {
        dice_odds[d] = 1/4;
    }
    for( i = 4; i <= 7; i++) {
        dice_odds[i] = 0;
    }
}
//Set odds of getting the same quadrant again to zero
dice_odds[state.stim_quadrant_1_back-1] = 0;
}

function Answers_top_quadrants(var1, var2, answer1, answer2){ //When stimulus appears in one of the top quadrants,
    //this function tells us whether the correct response is answer 1 (set input to D) or answer 2 (set input to F), 
    //based on whether var1 = var2.
    //Input  stimulus attribute of interest [state.stim_gender or state.stim_gender] as var1.
    //and input task of interest [state.emotion_task or state.gender_task] as var2.
    if (var1 == var2){ 
        state.correct_response = answer1 
    }
    else if(var1 != var2){ 
        state.correct_response = answer2 
    }
}

function Answers_bottom_quadrants(var3, var4, answer3, answer4){ //When stimulus appears in one of the bottom quadrants,
    //this function tells us whether the correct response is answer 3 (set input to J) or answer 4 (set input to K), 
    //based on whether var3 == var4 (aka whether stimulus attribute of interest == input task of interest).
    if (var3 == var4){ 
        state.correct_response = answer3 
    }
    else if(var3 != var4){ 
        state.correct_response = answer4 
    }
}

function simulateEvent(chances) {
    var sum = 0;
    chances.forEach(function(chance) {
        sum+=chance;
    });
    var rand = Math.random();
    var chance = 0;
    for(var i=0; i<chances.length; i++) {
        chance+=chances[i]/sum;
        if(rand<chance) {
            return i;
        }
    }
    
    // should never be reached unless sum of probabilities is less than 1
    // due to all being zero or some being negative probabilities
    return -1;
}
    
    var timer;
    function TimeOn(func, time) { 
        timer = setTimeout(func, time);
    }
    function TimeOff() { 
        clearTimeout(timer);
    }
    
    function StartTrial(){
        // Hide fixation, show target, note time, and bind next stage to
        // the spacebar
        $('#grid-container-dummy').hide();
        state.t_start_trial = Date.now();
        TimeOn(TooSlowFeedback, globals.time_limit);
        $(document).on('keydown', CheckResponse);
    };
    
    function CheckResponse(e){
        // This is the cross-browser way of getting the key code
        let k = (typeof e.which == "number") ? e.which : e.keyCode;
        console.log(k);
        if (globals.resp_keys.indexOf(k) > -1){
            ProcessResponse(k);
        };
    }
    
    function ProcessResponse(k){
        $(document).off('keydown');
        $('#grid-container-dummy').show();
        TimeOff(); //Stop the timer so the next function doesn't run!
        let t = state.t_response = Date.now();
        state.response = k;     // k == globals.resp_keys[1] will be a Boolean (true or false).
        //Converting it to a number (1 or 0) doesn't affect our script, but makes data analysis easier.
        //Work out whether the P's response was correct
        if (state.response == state.correct_response){
            state.accuracy = 1 //If P's response was CORRECT, set state.accuracy to 1
        }
        else if(state.response !== state.correct_response && state.response !== 32){
        state.accuracy = 0;     //If P's response was INCORRECT, set state.accuracy to 0
        }

        if(state.response == 32){
            state.faulty_image = 1;
            state.rt = null;
            state.accuracy = 0;
            state.trial_cond = 'faulty';
        }
        else{state.faulty_image = 0;
            state.rt = state.t_response - state.t_start_trial;
        };

        if (state.top_task == 'emotion' && state.stim_quadrant <= 4){ //If top task is emotion judgement and stimulus appears in top quadrant...
            ErrorTypeCRWR (state.stim_emotion, state.emotion_task, state.F, state.D)//...tell me whether the incorrect response according to emotion is D or F
        } 
        else if (state.top_task == 'emotion' && state.stim_quadrant >= 5){ //If top task is emotion judgement and stimulus appears in bottom quadrant...
            ErrorTypeCRWR (state.stim_gender, state.gender_task, state.K, state.J) //...tell me whether the incorrect response according to gender is J or K
        }
        else if (state.top_task == 'gender' && state.stim_quadrant <= 4){ //If top task is gender judgement and stimulus appears in top quadrant...
            ErrorTypeCRWR (state.stim_gender, state.gender_task, state.F, state.D) //...tell me whether the incorrect response according to gender is D or F
        }
        else if (state.top_task == 'gender' && state.stim_quadrant >= 5){ //If top task is gender judgement and stimulus appears in bottom quadrant...
            ErrorTypeCRWR (state.stim_emotion, state.emotion_task, state.K, state.J)//...tell me whether the incorrect response according to emotion is J or K
        }

        if (state.too_slow !==1 && state.response == state.error_by_response){
            state.correct_rule_wrong_resp       = 1
            state.wrong_rule_correct_resp       = 0
            state.wrong_rule_wrong_resp         = 0
        }
        else{
            state.correct_rule_wrong_resp = 0
        }

        if (state.top_task == 'emotion' && state.stim_quadrant <= 4){ //If top task is emotion judgement and stimulus appears in top quadrant...
            ErrorTypeWRCR (state.stim_gender, state.gender_task, state.J, state.K)//...tell me whether the answer someone would make if they responded based on gender is J or K
        } 
        else if (state.top_task == 'emotion' && state.stim_quadrant >= 5){ //If top task is emotion judgement and stimulus appears in bottom quadrant...
            ErrorTypeWRCR (state.stim_emotion, state.emotion_task, state.D, state.F) //...tell me whether the answer someone would make if they responded based on emotion is D or F
        }
        else if (state.top_task == 'gender' && state.stim_quadrant <= 4){ //If top task is gender judgement and stimulus appears in top quadrant...
            ErrorTypeWRCR (state.stim_emotion, state.emotion_task, state.J, state.K) //...tell me whether the answer someone would make if they responded based on emotion is J or K
        }
        else if (state.top_task == 'gender' && state.stim_quadrant >= 5){ //If top task is gender judgement and stimulus appears in bottom quadrant...
            ErrorTypeWRCR (state.stim_gender, state.gender_task, state.D, state.F)//...tell me whether the answer someone would make if they responded based on gender is D or F
        }

        if (state.response == state.error_by_rule){
            state.correct_rule_wrong_resp       = 0
            state.wrong_rule_correct_resp       = 1
            state.wrong_rule_wrong_resp         = 0
        }
        else{
            state.wrong_rule_correct_resp = 0
        }

        if (state.top_task == 'emotion' && state.stim_quadrant <= 4){ //If top task is emotion judgement and stimulus appears in top quadrant...
            ErrorTypeWRWR (state.stim_gender, state.gender_task, state.K, state.J) //...tell me whether the answer someone would make if they responded based on gender AND picked the wrong gender is J or K
        } 
        else if (state.top_task == 'emotion' && state.stim_quadrant >= 5){ //If top task is emotion judgement and stimulus appears in bottom quadrant...
            ErrorTypeWRWR (state.stim_emotion, state.emotion_task, state.F, state.D) //...tell me whether the answer someone would make if they responded based on emotion AND picked the wrong emotion is J or K
        }
        else if (state.top_task == 'gender' && state.stim_quadrant <= 4){ //If top task is gender judgement and stimulus appears in top quadrant...
            ErrorTypeWRWR (state.stim_emotion, state.emotion_task, state.K, state.J) //...tell me whether the answer someone would make if they responded based on emotion AND picked the wrong emotion is J or K
        }
        else if (state.top_task == 'gender' && state.stim_quadrant >= 5){ //If top task is gender judgement and stimulus appears in bottom quadrant...
            ErrorTypeWRWR (state.stim_gender, state.gender_task, state.F, state.D) //...tell me whether the answer someone would make if they responded based on gender AND picked the wrong gender is D or F
        }

        if (state.too_slow !==1 && state.response == state.error_by_rule_and_response){
            state.correct_rule_wrong_resp       = 0
            state.wrong_rule_correct_resp       = 0
            state.wrong_rule_wrong_resp         = 1
        }
        else{
            state.wrong_rule_wrong_resp = 0
        }

        if(state.too_slow !==1 && state.response !== 32){
            state.n_responses_block += 1; //+1 to the running total of number of responses P has made in this block.
        }
       
        if (state.too_slow == 1 && (state.response == 68 || state.response == 70 || state.response == 72 || state.response == 75 )){
            state.t_response = null;
            state.rt = null;
            state.accuracy = 0;
            state.correct_rule_wrong_resp       = 0;
            state.wrong_rule_correct_resp       = 0;
            state.wrong_rule_wrong_resp         = 0;
            state.omission_error                = 1;
        }
        else if(state.too_slow == 1 && state.response == 32){
            state.accuracy = 0;
            state.omission_error = 0;
        }
        else if(state.too_slow !== 1){
            state.omission_error = 0;
            state.too_slow = 0;
        } 

        if(state.too_slow == 1 && state.phase !== 'training_with_rules' && state.accuracy == 0 && state.response !== 32 && state.incorrect_resp_streak == globals.incorrect_resp_limit-1){
            setTimeout(ThreeIncorrectResponses, 500)
        }
        else if(state.phase !== 'training_with_rules' && state.accuracy == 0 && state.response !== 32 && state.incorrect_resp_streak == globals.incorrect_resp_limit-1){
            ThreeIncorrectResponses()
        }        
        else if(state.phase !== 'main' && state.too_slow !== 1 && state.accuracy == 0 && state.response !== 32){
            IncorrectResponseTraining()
        }
        else if(state.too_slow == 1){
            setTimeout(LogData, 500)
        }

        else{
            LogData()
        }
    }       

    //Define wrong response according to correct rule
    function ErrorTypeCRWR(var9, var10, answer9, answer10){ //When stimulus appears in one of the top quadrants,
        //this function tells us whether the "correct" response according to the other rule is answer 1 (set input to J) or answer 2 (set input to K), 
        //based on whether var1 = var2.
        //Input  stimulus attribute of interest [state.stim_gender or state.stim_gender] as var1.
        //and input task of interest [state.emotion_task or state.gender_task] as var2.
        if (var9 == var10){ 
            state.error_by_response = answer9
        }
        else if(var9 != var10){ 
            state.error_by_response = answer10 
        }
    }

    //Define correct response according to opposite rule
    function ErrorTypeWRCR(var5, var6, answer5, answer6){ //When stimulus appears in one of the top quadrants,
        //this function tells us whether the "correct" response according to the wrong rule is answer 1 (set input to J) or answer 2 (set input to K), 
        //based on whether var1 = var2.
        //Input  stimulus attribute of interest [state.stim_gender or state.stim_gender] as var1.
        //and input task of interest [state.emotion_task or state.gender_task] as var2.
        if (var5 == var6){ 
            state.error_by_rule = answer5 
        }
        else if(var5 != var6){ 
            state.error_by_rule = answer6 
        }
    }
    
    //Define incorrect response according to wrong rule
    function ErrorTypeWRWR(var7, var8, answer7, answer8){ //When stimulus appears in one of the bottom quadrants,
        //this function tells us whether the correct response is answer 3 (set input to J) or answer 4 (set input to K), 
        //based on whether var3 == var4 (aka whether stimulus attribute of interest == input task of interest).
        if (var7 == var8){ 
            state.error_by_rule_and_response = answer7
        }
        else if(var7 != var8){ 
            state.error_by_rule_and_response = answer8 
        }
    }
    
    function IncorrectResponseTraining(){
        $(document).off('keydown');
        $('#incorrect_response_training').show();
        setTimeout(LogData, globals.feedback_time)}
    
    function TooSlowFeedback(){ //Feedback if someone is too slow to respond
        TimeOff();
        $(document).off('keydown');
        $(document).on('keydown', CheckResponse);
        state.accuracy = 0;
        state.too_slow = 1;
        $('#grid-container-dummy').show();
        $('#too_slow_error').show();
        TimeOn(OmissionError, globals.feedback_time)
    }
    
    function ThreeIncorrectResponses(){
        $(document).off('keydown');
        $('#too_slow_error').hide();
        $('.num_incorrect_resp_limit').text(globals.incorrect_resp_limit); //Change html text to value in globals.incorrect_resp_limit
        $('#instructions').show(); //Show the instructions and error message
        $('#instructions_top_box').show();
        $('#instructions_bottom_box').show();
        $('#instructions_top_text').show();
        $('#instructions_bottom_text').show();
        $('#three_incorrect_responses_message').show();
        setTimeout(LogData, globals.three_errors_feeback_time);
    }
    
    function OmissionError(){
        state.error_by_response             = 0;
        state.error_by_rule                 = 0;
        state.error_by_rule_and_response    = 0;
        state.accuracy                      = 0;
        state.correct_rule_wrong_resp       = 0;
        state.wrong_rule_correct_resp       = 0;
        state.wrong_rule_wrong_resp         = 0;
        state.faulty_image                  = 0;
        state.omission_error                = 1;
        if(state.phase !== 'training_with_rules' && state.accuracy == 0 && state.incorrect_resp_streak == globals.incorrect_resp_limit-1){ //If the person has made 5 incorrect responses in a row...
            ThreeIncorrectResponses() //...wait X ms then run the ThreeIncorrectResponses function
        }
        else{
        LogData();
        }
    }

    function BlockFeedback(){ //Feedback at the end of each block
        $(document).off('keydown');
        $('#press_space_continue').hide();
        $('#press_space_bottom').show();
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        //Calculate whether the participant beat their pb scores
        if(state.pb_rt == null || state.rt_block_mean < state.pb_rt){ //If pb_rt is null or if mean rt this block is a new record...
            state.pb_rt = state.rt_block_mean; //...then update pb_rt
            $('#new_pb_rt').show(); //Show new pb messages
            $('#old_pb_rt').hide(); //Hide old pb messages
        }
        else{
            $('#new_pb_rt').hide(); //Hide new pb messages
            $('#old_pb_rt').show(); //Show old pb messages
        }
    
        if(state.pb_accuracy == null || state.accuracy_block*100/(globals.n_trials_main-state.n_faulty_images_block) > state.pb_accuracy){ //If pb_accuracy is null
            //or if mean accuracy this block (limited to trials where image displayed correctly) is a new record...
            state.pb_accuracy = state.accuracy_block*100/(globals.n_trials_main-state.n_faulty_images_block) //...then update pb_accuracy
            $('#new_pb_accuracy').show(); //Show new pb message
            $('#old_pb_accuracy').hide(); //Hide old pb message
        }
        else{
            $('#new_pb_accuracy').hide(); //Hide new pb messages
            $('#old_pb_accuracy').show(); //Show old pb message
        }
    
        //Convert state.rt_block_mean and state.pb_rt to seconds
    
        //Use jquery to change the scores on the screen
        $("#accuracy_block").text(((state.accuracy_block*100/(globals.n_trials_main-state.n_faulty_images_block)).toFixed(2))); 
        $("#rt_block_mean").text((state.rt_block_mean/1000).toFixed(2)); //This converts rt in milliseconds to seconds (to 2 decimal points)
        $("#pb_accuracy").text((state.pb_accuracy.toFixed(2))); 
        $("#pb_rt").text((state.pb_rt/1000).toFixed(2));
        if(state.part == 3 && state.block_nr == globals.n_blocks_main){  //If this is the last block of part 3...
            $('#encouragement').hide(); //...then don't show the encouragement text
        }
        $('#block_feedback').show(); //Show block feedback}
        bind_to_key(PrepareBlock, 32);  // Load the instructions when spacebar is pressed
    }
    
    function PrepareBlock(){
        $('#block_feedback').hide();
        //Reset quadrant variable values so first trial is not counted as switch or repetition 
        state.switch_or_repetition = null;
        state.stim_quadrant_1_back = null;
        state.stim_quadrant_2_back = null;
        state.stim_quadrant_3_back = null;
        state.stim_quadrant_4_back = null;

        if(state.part !== 3 && state.phase == 'main' && state.block_nr == globals.n_blocks_main){
            state.part += 1;
            RuleChange()
        }
        else if(state.part == 3 && state.phase == 'main' && state.block_nr == globals.n_blocks_main){
            EndExperiment()
        }
        else{
            state.block_nr += 1;
            state.block_nr_total += 1;
            NewRound()
        }
    }
    
    function RuleChange(){
        UpdateTaskRules() //Update the task rules i.e. set emotion_task, emotion_task_false and bottom_task
        //Add 1 to value in state.part ()
        $("#part_completed").text(state.part -1); //Use jquery to change the part number and update the html text in line with the new emotion rules
        $(".emotion_target").text(state.emotion_task);
        $(".not_emotion_target").text(state.emotion_task_false);
        state.switch_or_repetition = null; //Reset state.switch_or_repetition
        if(state.top_task == 'emotion'){ //Use jquery to change the colour of the emotions text, based on whether top task is emotion or gender 
            $(".not_emotion_target").css("color", "rgb(68,114,196)") 
            $(".emotion_target").css("color", "rgb(68,114,196)")
            $(".emotion_resp_key").text('D')
            $(".not_emotion_resp_key").text('F')
        }
        else{
            $(".not_emotion_target").css("color", "rgb(192,0,0)") 
            $(".emotion_target").css("color", "rgb(192,0,0)")
            $(".emotion_resp_key").text('J')
            $(".not_emotion_resp_key").text('K')
        }
        $('#instructions_training_with_rules').hide();
        $('#rule_change').show()
        ResetScoresThisBlock() //Set state.trial_nr_block, stim_quadrant_n_back values, state.accuracy_n_back values, accuracy, rt_block, rt_block_mean and n_responses_block.
        $('#press_space_continue').hide();
        $('#press_space_bottom').show();
        bind_to_key(InstructionsTrainingWithRules, 32) //Load instructions with rules on screen function when spacebar is pressed
    }
    
    function ResetScoresThisBlock(){
        state.trial_nr_block = null; //Set state.trial_nr_block (trial number in this block) back to null
        state.stim_quadrant_1_back = null; //Reset stim_quadrant_n_back values so stimulus can appear anywhere.
        state.stim_quadrant_2_back = null;
        state.stim_quadrant_3_back = null;
        state.stim_quadrant_4_back = null;        
        state.accuracy = null;
        state.accuracy_1_back = null; //Reset state.accuracy_n_back values so person won't get error message on next trial.
        state.incorrect_resp_streak = null;
        state.accuracy_block = null; //Reset accuracy, running total rt, mean rt and number of responses this block to null.
        state.rt_block = null; 
        state.rt_block_mean = null;
        state.n_responses_block = null;
        state.n_faulty_images_block = null;
    }
    
    //At the end of each trial
    function LogData(){
        $(document).off('keydown');
        $('#grid-container-dummy').show();
        $('#too_slow_error').hide();
        $('#incorrect_response_training').hide();
        $('#instructions').hide();
        if(state.phase == 'main'){ //If we're in the main phase of the experiment
            state.accuracy_block += state.accuracy; //Add the value in state.accuracy to the running total of correct scores in this block
            state.rt_block += state.rt; //Add the value in state.rt to the running total rt in this block
            state.n_faulty_images_block += state.faulty_image; //Update count of number of faulty images this block
            state.rt_block_mean = state.rt_block/(state.n_responses_block-state.n_faulty_images_block); //Update mean rt for this block so far
        }
        
        primate.metric(state); //log state variables

        //Update the state.incorrect_resp_streak values
        if (state.accuracy == 0 && state.response !== 32){
            state.incorrect_resp_streak+=1;
        }
        else if (state.accuracy == 1){
            state.incorrect_resp_streak = 0;
        }
        
        if(state.incorrect_resp_streak == globals.incorrect_resp_limit){ //If the last X responses were incorrect (and person therefore got rules reminder) then reset the counter
            state.incorrect_resp_streak = null;    
        }



        if(state.trial_nr % globals.attention_check_freq == 0){ //If the trial number is a multiple of attention_check_freq
            $('img.attention_check').attr('src', primate.stimuliURL('attention_check_'+ state.trial_nr/globals.attention_check_freq + '.png')); //Then use jquery to change attention check image url...
            setTimeout(AttentionCheck, globals.fixation_time_min) //...and run AttentionCheck function 
        }
        else if(state.phase == 'training_with_rules' && state.trial_nr_block == globals.n_trials_training){
            InstructionsTrainingNoRules() //If the participant has completed first training phase (rules on screen), then load the second training phase.
        }
        else if (state.phase == 'training_no_rules' && state.trial_nr_block == globals.n_trials_training){ 
            RulesQuiz() //If the participant has completed second training phase (no rules on screen), then load the rules quiz.
        }
        else if(state.phase == 'main' && state.trial_nr_block == globals.n_trials_main){ //If we've reached the maximum number of trials for this block... 
            BlockFeedback(); //...load block feedback
        } else {
            PrepareTrial(); //...otherwise prepare the next trial
        }
    }
    
//CODE FOR ATTENTION CHECK    
    function AttentionCheck(){
        $('#grid-container').hide();
        $('#grid-container-dummy').hide();
        $('#attention_check').show();
        $('#attention_check_image').show();
        TimeOn(Start, globals.attention_check_time);
        $(document).off('keydown').on('keydown', ProcessResponseAttentionCheck);
        //Write code to call Attention check function
        //Write code to log data and move onto next trial
    }
    
$('img.target').attr('src', primate.stimuliURL(state.stimulus+'.png'));

    function ProcessResponseAttentionCheck(e){
        // This is the cross-browser way of getting the key code
        $('#attention_check').hide();
        $('#attention_check_image').hide();
        TimeOff();
        let k = (typeof e.which == "number") ? e.which : e.keyCode;
        $(document).off('keydown');
        state.attention_check_response = k;
        if(state.attention_check_response == 80){ //If the person presses P...
            state.attention_check_accuracy = 1 //Then set attention_check_accuracy as 1
        }
        else{state.attention_check_accuracy = 0} //Otherwise set attention_check_accuracy as 0
        setTimeout(Start, globals.fixation_time_min)
    };

//CODE FOR RULES QUIZ AT END OF TRAINING
//Set which answers are correct based on values in state.top_task and state.emotion_task
function UpdateQuizRules(){
    //Update rules for question 1 + 2
    if(state.top_task == 'emotion'){ //If top_task is 'emotion'...
        state.questions[0].answers[0].correct = true; //Make 'Emotion' the correct answer to Q1...
        state.questions[0].answers[1].correct = false;
        state.questions[1].answers[0].correct = false; //And 'Gender' the correct answer to Q2...
        state.questions[1].answers[1].correct = true;
        } else{                          //If top_task is 'gender', do the opposite
            state.questions[0].answers[0].correct = false; 
            state.questions[0].answers[1].correct = true;
            state.questions[1].answers[0].correct = true;
            state.questions[1].answers[1].correct = false;
        }

    //Update rules for question 3
    state.questions[2].answers[0].correct = false; //First set all question 3 answers to incorrect
    state.questions[2].answers[1].correct = false;
    state.questions[2].answers[2].correct = false;
    state.questions[2].answers[3].correct = false;

    if(state.top_task == 'emotion'){    //If top task is 'emotion' set answer 3 to correct
        state.questions[2].answers[2].correct = true;
    } else{                             //If top task is 'gender' set answer 1 to correct
        state.questions[2].answers[0].correct = true;
    }

    //Update rules for question 4
    state.questions[3].answers[0].correct = false; //First set all question 4 answers to incorrect
    state.questions[3].answers[1].correct = false;
    state.questions[3].answers[2].correct = false;
    state.questions[3].answers[3].correct = false;
    state.questions[3].answers[4].correct = false;
    state.questions[3].answers[5].correct = false;

    if(state.top_task == 'emotion' && state.emotion_task == 'happy'){ //If top task is 'emotion' and emotion rule is 'happy'
        state.questions[3].answers[0].correct = true; //Set answer 1 to correct
    }
    else if(state.top_task == 'emotion' && state.emotion_task == 'angry'){ //If top task is 'emotion' and emotion rule is 'angry'
        state.questions[3].answers[1].correct = true; //Set answer 2 to correct
    }
    else if(state.top_task == 'emotion' && state.emotion_task == 'neutral'){ //If top task is 'emotion' and emotion rule is 'neutral'
        state.questions[3].answers[2].correct = true; //Set answer 3 to correct
    }
    else if(state.top_task == 'gender' && state.emotion_task == 'happy'){ //If top task is 'gender' and emotion rule is 'happy'
        state.questions[3].answers[3].correct = true; //Set answer 4 to correct
    }
    else if(state.top_task == 'gender' && state.emotion_task == 'angry'){ //If top task is 'gender' and emotion rule is 'angry'
        state.questions[3].answers[4].correct = true; //Set answer 5 to correct
    }
    else if(state.top_task == 'gender' && state.emotion_task == 'neutral'){ //If top task is 'gender' and emotion rule is 'neutral'
        state.questions[3].answers[5].correct = true; //Set answer 6 to correct
    }
}

var startButton = $('#start-btn');
var nextButton = $('#next-btn');
var questionContainerElement = $('#question-container');
var questionElement = $('#question');
var answerButtonsElement = $('#answer-buttons');
var everything = $('#all');

function RulesQuiz(){
    //Define buttons/parts of the html doc that we want javascript to act on
    $('#too_slow_error').hide(); //Hide experiment stuff
    $('#incorrect_response_training').hide();
    $('#grid-container').hide();
    $('#grid-container-dummy').hide();
    $('#all').show(); //Show quiz 'all' html div
    $('#quiz_intro').show(); //Show quiz introduction html div
    $('#question-container').addClass("hide"); //Hide questions
    $('#start-btn').removeClass("hide"); //Show start button
    $('#return-btn').addClass('hide');
    $('#endquiz-btn').addClass('hide');
    state.currentQuestionIndex = -1; //set current question index to -1 so when we +1 it becomes 0.
    resetState()
    UpdateQuizRules(); //First update the quiz rules
    $('#start-btn').on('click', StartQuiz); //When someone clicks on start button, run StartQuiz function
}

function StartQuiz(){
    console.log('started quiz');
    $('#quiz_intro').hide(); //Hide quiz introduction html div
    $('#start-btn').addClass('hide'); //Hide the start button by adding the 'hide' class
    $('#question-container').removeClass("hide"); //Show the question container by removing the 'hide' class
    setNextQuestion()
}

function setNextQuestion(){
    $("#next-btn").off();      //Stop recording button clicks
    $('#answer-buttons').off();
    $("#start-btn").off();
    console.log('running setNextQuestion function');
    resetState() //Resets questions and answers to default
    state.currentQuestionIndex += 1; //Add 1 to currentQuestionIndex
    console.log(state.currentQuestionIndex);
    showQuestion() //Run showQuestion function, setting input to questions[currentQuestionIndex] i.e. current question index in 'questions' variable
}

var button;

function showQuestion(){
    console.log('running showQuestion function');
    $("#next-btn").off();      //Stop recording button clicks
    $('#answer-buttons').off();
    $("#start-btn").off();
    $('#question').text(state.questions[state.currentQuestionIndex].question); //Set question text to the value in the'question' subfield of the 'questions' variable
    //Create buttons for your answers
    state.questions[state.currentQuestionIndex].answers.forEach(answer => {
        button = document.createElement('button') //Create a variable for the html button elements
        button.innerText = answer.text          //Set button text to the value in 'answer' subfield of the 'questions' variale 
        $(button).addClass('btn') //Give the new buttons the class 'btn'
        if (answer.correct){                    //If the answer is correct, then set value of 'correct' in dataset to 'correct'
            button.dataset.correct = answer.correct
        }
        $('#answer-buttons').append(button)
        $('#answer-buttons').on('click', selectAnswer); //When someone clicks on answer, run selectAnswer function
    })
}

function resetState(){
    console.log('running resetState function');
    $("#next-btn").off();      //Stop recording button clicks
    $('#answer-buttons').off();
    $("#start-btn").off();
    
    clearStatusClass($('#all')); 
    $('#next-btn').addClass('hide'); //Hide the next button by adding the 'hide' class
        while (
            $('#answer-buttons').children().length > 0){ //If there are child buttons...
                //Alternative $('#answer-buttons').hasChildNodes(){
            $('#answer-buttons').children().remove(); //...then remove them
            // Alternative $('#answer-buttons').empty();
        }
    //Loop through answers
}
//Show question 1 then answer, if correct move onto question 2.

//CORRECTED
function selectAnswer(e){
    $('#answer-buttons').off('click', selectAnswer); //Stop recording clicks on answers
    selectedButton = e.target //Create a variable for the selected button
    correct = selectedButton.dataset.correct  //Create a dataset for the selected button (correct 1 or 0)
    setStatusClass($('#all'), correct) //set class of 'all' div to correct or wrong
    //Loop through other buttons and set class for them
    setStatusClass($(selectedButton), correct)
    $('#return-btn').off('click', InstructionsTrainingWithRules);
    $('#return-btn').off('click', FingerPositioning);//...then send them back to the page showing finger positioning        

    if (correct && state.currentQuestionIndex < state.questions.length-1){
        $('#next-btn').removeClass('hide');         //...show the next button
        $('#next-btn').on('click', setNextQuestion);
    } else if (correct && state.currentQuestionIndex >= state.questions.length-1) {    //Otherise if person got all 4 questions correct...
        $('#endquiz-btn').removeClass('hide');          //...Then show the endquiz button
        $('#endquiz-btn').on('click', TrainingComplete);       //When endquiz button is clicked, run TrainingComplete function
    } else if (state.part !== 1) {
        $('#return-btn').removeClass('hide');
        $('#return-btn').on('click', InstructionsTrainingWithRules); //Otherwise send them back to start of training for this part (part 2 or 3)
    } else if (state.part == 1) {                                    //Otherwise if answer is incorrect
        $('#return-btn').removeClass('hide');           //...Then show the return button
        $('#return-btn').on('click', FingerPositioning);//...then send them back to the page showing finger positioning
    } 
    }


function setStatusClass(element, correct){
    clearStatusClass(element) //Clear classes
    if(correct){
        element.addClass('correct') //If answer is correct set class of html element to 'correct'
    } else {
        element.addClass('wrong') //If answer is incorrect set class of html element to 'wrong'
    }
}

function clearStatusClass(element){ //Clear classes from all elements on the page
    $("#next-btn").off();      //Stop recording button clicks
    $('#answer-buttons').off();
    $("#start-btn").off();
    element.removeClass('correct');
    element.removeClass('wrong');
}

//CODE TO END EXPERIMENT
    function EndExperiment(){
        $('#instructions_bottom_text').hide();
        $('#press_space_bottom').hide();
        $('#end').show();
        setTimeout( e => primate.finish(), 3000); //Calling primate.finish() without any arguments will raise a pop-up window
        //when running on Gorilla, and will redirect to the next node on Gorilla. This is the default behaviour of gorilla.finish().
    }
/*
To do
• Select which stimuli to remove from main task to get down to 600 images
    > Identify any images from pilot in which the gender was identified really badly by everyone.


Bugs
• If P presses key after 2s has elapsed then it does not always log accuracy incorrectly (should be 0) and doesn't log omission error correctly
• Make everything coded as 1 or 0. Avoid missing values.
• n_responses_block increased by 1 each trial irrespective of whether person responds
    */
