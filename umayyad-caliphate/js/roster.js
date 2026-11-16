/* Umayyad caliphs in chronological order: [number, id, English name, Urdu name, khilafat period] */
const ROSTER=[
[
1,
"muawiya-1",
"Muawiya I ibn Abi Sufyan (RA)",
"حضرت امیر معاویہ بن ابی سفیان رضی اللہ عنہ",
"41–60 AH / 661–680 CE"
],
[
2,
"yazid-1",
"Yazid I ibn Muawiya",
"یزید اول بن معاویہ",
"60–64 AH / 680–683 CE"
],
[
3,
"muawiya-2",
"Muawiya II ibn Yazid",
"معاویہ ثانی بن یزید",
"64 AH / 683–684 CE"
],
[
4,
"marwan-1",
"Marwan I ibn al-Hakam",
"مروان اول بن الحکم",
"64–65 AH / 684–685 CE"
],
[
5,
"abdulmalik",
"Abd al-Malik ibn Marwan",
"عبدالملک بن مروان",
"65–86 AH / 685–705 CE"
],
[
6,
"walid-1",
"al-Walid I ibn Abd al-Malik",
"ولید اول بن عبدالملک",
"86–96 AH / 705–715 CE"
],
[
7,
"sulayman",
"Sulayman ibn Abd al-Malik",
"سلیمان بن عبدالملک",
"96–99 AH / 715–717 CE"
],
[
8,
"umar-2",
"Umar ibn Abd al-Aziz (rahimahullah)",
"عمر بن عبدالعزیز رحمہ اللہ",
"99–101 AH / 717–720 CE"
],
[
9,
"yazid-2",
"Yazid II ibn Abd al-Malik",
"یزید ثانی بن عبدالملک",
"101–105 AH / 720–724 CE"
],
[
10,
"hisham",
"Hisham ibn Abd al-Malik",
"ہشام بن عبدالملک",
"105–125 AH / 724–743 CE"
],
[
11,
"walid-2",
"al-Walid II ibn Yazid",
"ولید ثانی بن یزید",
"125–126 AH / 743–744 CE"
],
[
12,
"yazid-3",
"Yazid III ibn al-Walid",
"یزید ثالث بن ولید",
"126 AH / 744 CE"
],
[
13,
"ibrahim",
"Ibrahim ibn al-Walid",
"ابراہیم بن ولید",
"126–127 AH / 744 CE"
],
[
14,
"marwan-2",
"Marwan II ibn Muhammad",
"مروان ثانی بن محمد",
"127–132 AH / 744–750 CE"
]
];
const ALL=ROSTER.map(r=>SULTANS.find(s=>s.n===r[0])||{id:r[1],n:r[0],name:{en:r[2],ur:r[3]},reign:r[4],born:"-",died:"-",epithet:{en:"",ur:""},type:{en:"",ur:""},stub:true,sections:[]});
