const axios = require('axios');
require('dotenv').config();

let names = `aleitch@usc.edu
hantingz@usc.edu
ig_707@usc.edu
jullie@usc.edu
kfatehpu@usc.edu
benja121@msu.edu
haeminle@usc.edu
ezcheung@usc.edu
c.chang673@gmail.com
edaya@usc.edu
npanwar@usc.edu
albertzy@usc.edu
colepjoh@usc.edu
benhwang@usc.edu
victor.work0809@gmail.com
aaron.ahmed71@gmail.com
originallyjoshy@gmail.com
joshlee@usc.edu
leihe@usc.edu
mehtarhe@usc.edu
caliang@usc.edu
jtau@ucsd.edu
changec0205@gmail.com
azamlynny@gatech.edu
joselhernandez1113@csu.fullerton.edu
johnly107@gmail.com
maxl@usc.edu
tue.nguyen004@gmail.com
mjohal3@gatech.edu
agala@usc.edu
tarunravi@gatech.edu
saang@usc.edu
nkchou@usc.edu
haofeiwa@usc.edu
aahuang@berkeley.edu
etcheng@usc.edu
kanishni@usc.edu
shashankperso@gmail.com
mjgabel@ucdavis.edu
gharde.dheeraj@gmail.com
cjchan@usc.edu
whe038@ucr.edu
csl2183@columbia.edu
sychan@usc.edu
ewu000@berkeley.edu
ndfucoding@gmail.com
morvay@usc.edu
asattiraju3@gatech.edu
yehyaqureshi@gmail.com
qlin3628@usc.edu
gloriazh@usc.edu
pinedoa@usc.edu
adbhawal@berkeley.edu
williamhuang@temple.edu
zwang.jacob@gmail.com
emilypan@caltech.edu
qlin3628@usc.edu
ukansal@usc.edu
gjvalenz@usc.edu
tanyache@usc.edu
sanjays2402@gmail.com
knarasim@usc.edu
nidhi.madabhushi@du.edu
nmutha@usc.edu
rahulsharma.7793@gmail.com
khinvasa@usc.edu
padoshi@usc.edu
vincet@iastate.edu
siddharthrunwal08@gmail.com
jainadit@usc.edu
bhorshet@usc.edu
larryx266@gmail.com
ajkim@usc.edu
jrajwani@usc.edu
nguyenhuydanny@gmail.com
mming@usc.edu
ptank@usc.edu
kishangi@usc.edu
pesimpso@usc.edu
mdjun@usc.edu
ryanli@usc.edu
erjiang@usc.edu
hanphill@usc.edu
ashhuss461@gmail.com
wz1509@nyu.edu
terryl@usc.edu
sa64049@usc.edu
alex1100.software@gmail.com
halonasd@gmail.com
adityashende2009@gmail.com
aniketdhole990@gmail.com
kkenyon@usc.edu
benthecoder07@gmail.com
shubhambafna01@gmail.com
gandharv@usc.edu
karajlee@usc.edu
shiqingr@usc.edu
22shaliniqwerty@gmail.com
truongsi@usc.edu
kevindon@usc.edu
nykim@usc.edu
sumedhvkn@gmail.com
abg5853@psu.edu
rgirdhar@usc.edu
bucksers@usc.edu
kpsingh@usc.edu
suryaroshanm@gmail.com
veersing@usc.edu
kuptiman@usc.edu
kharwarm@mcmaster.ca
fstack@usc.edu
ttchen@usc.edu
harsono2@illinois.edu
jtpham@usc.edu
kyg2076@gmail.com
jidayu@usc.edu
adityabhadauriya@hotmail.com
paluckadoshi@gmail.com
hemsharavanan@gmail.com
wenyuez@usc.edu
cva.acharya8@gmail.com
shafeen.rahman@mail.utoronto.ca
aofeinst@usc.edu
singhprasan261404@gmail.com
nmlee@usc.edu
kaob@usc.edu
asgopina@usc.edu
pinkert@usc.edu
kshan@usc.edu
buliag@usc.edu
harjot@usc.edu
kyshahab@usc.edu
bolis@usc.edu
svott@usc.edu
tylersehon@gmail.com
batukuri@usc.edu
vatsavay@usc.edu
skalakon@usc.edu
madamala@usc.edu
ramaraju@usc.edu
arfania@usc.edu
charles.chochos@yahoo.com
sairamba@usc.edu
phuongthaoha63@gmail.com
reddyama@usc.edu
aajagann@usc.edu
yadlapal@usc.edu
zsilver@usc.edu
wangaaro@usc.edu
neeleshg@usc.edu
woosarah@usc.edu
slyu01@mica.edu
swatisahay2018@gmail.com
alalim@usc.edu
asahai2@buffalo.edu
divyamkh@usc.edu
mahakaga@usc.edu
ottan@usc.edu
kdewan@usc.edu
ahson@usc.edu
jolo7671@colorado.edu
abellath@usc.edu
khalidal@usc.edu
alsayedm@usc.edu
yashg@usc.edu
ec.ame250@gmail.com
gautho@usc.edu
yuktigup@usc.edu
aaronww@usc.edu
lingtranhuang@gmail.com
rlampota@usc.edu
dazhizho@usc.edu
chan987@usc.edu
sk72840@usc.edu
abubna@usc.edu
agnasser@usc.edu
sjalali@usc.edu
oscarwu@usc.edu
shradhaagarwal386@gmail.com
sckhatta@usc.edu
dhoka@usc.edu
ankitpur@usc.edu
othong@usc.edu
lunac8@unlv.nevada.edu
brendensmith01@gmail.com
szymulew@usc.edu
maliang@usc.edu
salkhord@usc.com
huaiyach@usc.edu
alisedac@usc.edu
elainegu@usc.edu
jlwang@usc.edu
jlee6488@usc.edu
yashdeep@usc.edu
liruan@usc.edu
yelthima@usc.edu
klizhang@usc.edu
viditjuneja@outlook.com
sinthias@usc.edu
henryesmarks@gmail.com
jabeen@usc.edu
sitharam@usc.edu
sohgoel@ucdavis.edu
svovan@usc.edu
keoliya@usc.edu
emueghrebelloo@gmail.com
saidock@usc.edu
phanjona@usc.edu
sgmotame@usc.edu
ericthai@usc.edu
smerdon@usc.edu
msuraj@usc.edu
phanjona@usc.edu
klolage@usc.edu
musferak@usc.edu
snanjund@usc.edu
mgoel7@asu.edu
nbuxbaum@usc.edu
raskop@usc.edu
maa78271@usc.edu
aloktrip@buffalo.edu
jjobes@usc.edu
nlicea@usc.edu
tsepten@gmail.com
tuachen@ucdavis.edu
ishuagra@usc.edu
mariaach@usc.edu
victotoroia@gmail.com
kabirjun@usc.edu
sjmirand@usc.edu
slingamp@usc.edu
Tiaagrawal101@gmail.com
asguo@usc.edu
ckbarret@usc.edu
mklim@usc.edu
slngo@usc.edu
rputcha@usc.edu
praut@usc.edu
dhananjay.sachdeva@usc.edu
vandhana@usc.edu
adishrig@usc.edu
dhakecha@usc.edu
pvshah@usc.edu
weiwilli@usc.edu
naicihli@usc.edu
qge@usc.edu
nwani@usc.edu
96anmolchandra@gmail.com
oskulkar@usc.edu
katapady@usc.edu
oskulkar@usc.edu
bhavenvi@usc.edu
yashapur@usc.edu
asbery@usc.edu
sayhaansiddiqui@gmail.com
pateltanishq1@gmail.com
widodoalfianto94@gmail.com
chandinimsfall21@gmail.com
ashivara@usc.edu
vineeshaberi1798@gmail.com
sutejsin@usc.edu
lmwilson@mit.edu
zhangeth@usc.edu
ppadwal@usc.edu
abhinavg@usc.edu
sunghyun.cho@usc.edu
malkani@usc.edu
nate@blz.ai
qkarns@usc.edu
wangyira@usc.edu
ziyiwu@usc.edu
adiyer@usc.edu
somodi@usc.edu
garciapl@usc.edu
xiezhuoli771@gmail.com
lynnnguy@usc.edu
rsshukla@usc.edu
ethanjon@usc.edu
hejabi@usc.edu
elondon@usc.edu
aahsan@usc.edu
gavuji@usc.edu
daveadit@usc.edu
duggasan@usc.edu
tgavin@usc.edu
shyampat@usc.edu
dchand@usc.edu
zuoningz@usc.edu
lgarde@usc.edu
shreypatel079@gmail.com
anakajim@usc.edu
sajmaru370@gmail.com
thelmagomes.11@gmail.com
wenku@usc.edu
pennyb@mit.edu
jy_873@usc.edu
ayang119@usc.edu
ramosben@usc.edu
spathak3@buffalo.edu
terberic@gmail.com
mythreye@buffalo.edu
jmhansen@usc.edu
prabhus@usc.edu
amshao@usc.edu
achueh@usc.edu
jtbarnes@usc.edu
thaveesi@usc.edu
lzhou893@usc.edu
alehavi@usc.edu
jaisatis@usc.edu
vasnani@usc.edu
jskaaden@usc.edu
dhwanilh@usc.edu
joshatra@usc.edu
damanimalay@gmail.com
felixchenyijun@gmail.com
rgupta96@usc.edu
jkim4020@usc.edu
bncarter@usc.edu
manc@usc.edu
shah.jam@northeastern.edu
chancey@usc.edu
limingxi_6868@yeah.net
aortez606@gmail.com
spino@usc.edu
yutiffan@usc.edu
wilsonlimsetiawan@gmail.com
ayushimi@usc.edu
kgazzaz@usc.edu
d@nielhe.com
elfawal@usc.com
bubingadigital@gmail.com
msee@usc.edu
lilyperr@usc.edu
jam76378@usc.edu
luykim@usc.edu
Cdbryan@usc.edu
hansonle@usc.edu
kodachi@usc.edu
vinamrasharma5@gmail.com
sudrik@usc.edu
isaacong@berkeley.edu
chagmann@usc.edu
anshaysa@usc.edu
sspatil@usc.edu
aohara@usc.edu
nh2158@nyu.edu
uduraira@usc.edu
avalieva@uci.edu
tkale@usc.edu
adityamangal0202@gmail.com
corellac@usc.edu
rctan@usc.edu
gideon@ucsd.edu
ed_139@usc.edu
yxu70832@usc.edu
cwong7@stanford.edu
ak_984@usc.edu
calebhung@g.ucla.edu
jvillasb@usc.edu
jmccoll@usc.edu
ipekg@usc.edu
toanh@usc.edu
selinone@usc.edu
agouzoun@usc.edu
zwang716@usc.edu
msyed2011@my.fit.edu
ehaque4@gmu.edu
rbo224@nyu.edu
justin.03.tubay@gmail.com
guptapra@usc.edu
alecgoedinghaus@ucla.edu
amsun@usc.edu
soheey@usc.edu
jlee3900@usc.edu
wsfarhat@usc.edu
yendapal@usc.edu
karl.zhu@uwaterloo.ca
cindyh@terpmail.umd.edu
zeynalov@usc.edu
ttp267@nyu.edu
jnogalsk@usc.edu
mynenisp1703@gmail.com
yjaju@usc.edu
jjohn8@stanford.edu
eddiel@usc.edu
aakinbolagbe@gmail.com
kaue@usc.edu
mehrajrajput1999@gmail.com
avinashupadhya99@gmail.com
zhumeich@umich.edu
dhkhoo@usc.edu
biswas.shilpita@gmail.com
dmui@usc.edu
shirleys@usc.edu
stanleysusanto8@gmail.com
mjkim@usc.edu
aadeshba@usc.edu
cmfernan@usc.edu
cwu40309@usc.edu
cckim@usc.edu
vihanraj@usc.edu
annahong@usc.edu
danehy@usc.edu
putubanerjee23@gmail.com
gtdo@usc.edu
nbugarin@usc.edu
jliu0013@berkeley.edu
cvswanso@usc.edu
omui@usc.edu
ehawk@usc.edu
soniakau@usc.edu
tkashina@usc.edu
qzhao015@usc.edu
y.vyas.likhit@gmail.com
jkuang10@gmail.com
ronakpai@usc.edu
arassi@usc.edu
anikatibrewala@gmail.com
bjackson66@student.gsu.edu
morganlu@usc.edu
j2lam@ucsd.edu
dange.nik@gmail.com
mhli@usc.edu
taeza@usc.edu
kennyluuluu@gmail.com
dbermude@usc.edu
abatra@usc.edu
bansalsi@usc.edu
russack@usc.edu
wucrysta@usc.edu
nnsadegh@usc.edu
odu@usc.edu
yuzhew@usc.edu
garidipu@usc.edu
nakaishi@usc.edu
arianang@usc.edu
tekleghi@usc.edu
wonjunle@usc.edu
andrewg9@usc.edu
ikatiyar@usc.edu
johnnyya@usc.edu
coopercb@usc.edu
rrchawla@usc.edu
doupaty@usc.edu
cljeter@usc.edu
sgumbhir@usc.edu
nichilst@usc.edu
jake.hosking.13@gmail.com
akumar35@usc.edu
amartyrr@usc.edu
amkhan@usc.edu
asrao@usc.edu
varun.chopra@usc.edu
anantadr@g.ucla.edu
jrego@usc.edu
iverma@usc.edu
junusong@usc.edu
alwang@usc.edu
ch.leodones@gmail.com
reotseng123@gmail.com
parampat@usc.edu
tjanand@usc.edu
eszabo@usc.edu
nnersisy@usc.edu
eunsooks@usc.edu
hanwar@usc.edu
anntians@usc.edu
imkatiya@usc.edu
allenxu@usc.edu
namihay2@usc.edu
joshtlee@usc.edu
mdalbrig@usc.edu
joannajp@usc.edu
abnere@uci.edu
canyonzh@usc.edu
bnagel@usc.edu
trafique@usc.edu
jlfan@usc.edu
adityaha@usc.edu
syerragu@usc.edu
clkong@usc.edu
dasaria@usc.edu
jason.telanoff@gmail.com
linlj@usc.edu
duquesna@usc.edu
christyko510@gmail.com
dasmohap@usc.edu
kbisani@usc.edu
mbulbul@usc.edu
ktsaiki@usc.edu
jeanty@usc.edu
msyed2011@my.fit.edu
ehaque4@gmu.edu
gr2159@nyu.edu
swerdlowbenjamin@gmail.com
wongpatrick98@gmail.com
qiujames@uw.edu
ardellening@gmail.com
moselee@usc.edu
laln@usc.edu
yow008@ucsd.edu
shivastem@gmail.com
beihaozhou@gmail.com
haeminle@usc.edu
scottmai@usc.edu
adityamangal0202@gmail.com
kanishni@usc.edu
jchen413@usc.edu
arjunpatrawala@berkeley.edu
russack@usc.edu
s73agarw@uwaterloo.ca
jzliu@usc.edu
andablo@usc.edu
tonyxin@berkeley.edu
quinnywu@usc.edu
vmvu@usc.edu
drakelin@berkeley.edu
wahout@usc.edu`.split('\n');

module.exports = {
	name: 'checkin',
	description: 'Check in for the HackSC Battlepass',
	async execute(message, args) {
        console.log(args)
        const userId = message.author.id

        // env
        const url = process.env.BASE_URL || 'https://hacksc.com'

        if (args.length !== 0) {

            // First make sure that the email is valid
            let email = args[0];

            let validEmail = names.includes(email.toLowerCase());

            if (!validEmail) {
                return message.channel.send(`We couldn't find an application with the email ${email}. Try again with a different one or reach out to the organizers.`)
            }



            // Send request
            try {
                const CheckinRes = await axios({
                    method: 'post',
                    url: `${url}/api/checkin?discordId=${userId}&email=${email}`,
                })

                // Check if data has success: true?
                if (!CheckinRes.data.success) {
                    return message.channel.send("Error: " + CheckinRes.data.error);
                }
                return message.channel.send(`Successfully checked in!`)

            }
            catch (err) {
                // Add error handling here
                // Pretty self explanitory.
                if (err.response.status == 404) {
                    return message.channel.send("Oops! Something unexpected happened. Please contact an organizer for help.")
                }
                else {
                    return message.channel.send("Oops! Something unexpected happened. Please contact an organizer for help.")
                }
            }
        }
        else {
            return message.channel.send("Please provide your email you used to sign up for HackSC with.")
        }
	},
};

