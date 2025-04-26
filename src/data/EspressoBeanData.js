const EspressoBeanData = [
    {
        id: 1,
        name: "Etiyopya Yirgacheffe Kochere",
        history: "Yirgacheffe, Etiyopya'nın güneyinde yer alan ve yüksek kaliteli Arabica kahveleriyle ünlü bir bölgedir. Kochere, bu bölgedeki tanınmış mikro bölgelerden biridir. Yüzyıllardır kahve yetiştiriciliğinin yapıldığı bu topraklarda, geleneksel yöntemlerle işlenen çekirdekler dünya çapında takdir görmektedir.",
        roastLevels: [
            {
                level: "Açık Kavrum",
                scale: 2, // 1-10 arası kavrum seviyesi
                tastingNotes: "Çiçeksi (yasemin, bergamot), narenciye (limon, portakal), parlak asidite, zarif gövde.",
            },
            {
                level: "Orta Kavrum",
                scale: 5, // 1-10 arası kavrum seviyesi
                tastingNotes: "Çay benzeri, bal, kayısı, dengeli asidite, orta gövde.",
            },
        ],
    },
    {
        id: 2,
        name: "Kolombiya Supremo",
        history: "Kolombiya, dünyanın en büyük Arabica kahve üreticilerinden biridir ve 'Supremo' derecesi, en büyük ve en kusursuz çekirdekleri ifade eder. Kolombiya'nın zengin volkanik toprakları ve ideal iklimi, dengeli ve aromatik kahvelerin yetişmesine olanak tanır.",
        roastLevels: [
            {
                level: "Orta Kavrum",
                scale: 5, // 1-10 arası kavrum seviyesi
                tastingNotes: "Fındık, karamel, sütlü çikolata, orta asidite, dolgun gövde.",
            },
            {
                level: "Orta-Koyu Kavrum",
                scale: 7, // 1-10 arası kavrum seviyesi
                tastingNotes: "Yoğun çikolata, tatlı baharatlar, kahverengi şeker, düşük asidite, tam gövde.",
            },
        ],
    },
    {
        id: 3,
        name: "Brezilya Fazenda Cachoeria da Grama",
        history: "Brezilya, dünya kahve üretiminde lider konumdadır ve Fazenda Cachoeria da Grama gibi çiftlikler, yüksek kaliteli özel kahveler üretmektedir. Bu bölgenin kahveleri genellikle tatlılığı, fındıksı notaları ve düşük asiditesiyle bilinir.",
        roastLevels: [
            {
                level: "Açık-Orta Kavrum",
                scale: 4, // 1-10 arası kavrum seviyesi
                tastingNotes: "Fındık, badem, karamel, hafif meyvemsilik, düşük asidite, orta gövde.",
            },
            {
                level: "Orta Kavrum",
                scale: 5, // 1-10 arası kavrum seviyesi
                tastingNotes: "Sütlü çikolata, toffee, ceviz, dengeli tatlılık, yumuşak gövde.",
            },
        ],
    },
    {
        id: 4,
        name: "Sumatra Mandheling",
        history: "Sumatra adasının kuzeyinde yetişen Mandheling kahvesi, Endonezya'nın en özel kahvelerinden biridir. Toprak tonları, baharatlı notaları ve düşük asiditesiyle karakterizedir. İşleme yöntemleri bu kahvelere kendine has bir profil kazandırır.",
        roastLevels: [
            {
                level: "Orta-Koyu Kavrum",
                scale: 7, // 1-10 arası kavrum seviyesi
                tastingNotes: "Toprak, sedir ağacı, karanfil, yoğun gövde, düşük asidite.",
            },
            {
                level: "Koyu Kavrum",
                scale: 9, // 1-10 arası kavrum seviyesi
                tastingNotes: "Bitter çikolata, is, baharatlı notalar, yoğun ve kalıcı tat.",
            },
        ],
    },
    {
        id: 5,
        name: "Kenya AA",
        history: "Kenya AA, Kenya'nın en yüksek kalitedeki kahve çekirdeklerini ifade eder. 'AA' derecesi, çekirdeklerin büyüklüğünü ve genel kalitesini gösterir. Kenya kahveleri genellikle parlak asiditeleri, meyvemsi ve şarapsı notalarıyla bilinir.",
        roastLevels: [
            {
                level: "Açık Kavrum",
                scale: 3, // 1-10 arası kavrum seviyesi
                tastingNotes: "Siyah frenk üzümü, böğürtlen, şarapsı, canlı asidite, orta gövde.",
            },
            {
                level: "Orta Kavrum",
                scale: 6, // 1-10 arası kavrum seviyesi
                tastingNotes: "Ahududu, kırmızı şarap, kakao, dengeli asidite, orta gövde.",
            },
        ],
    },
    {
        id: 6,
        name: "Guatemala Antigua",
        history: "Antigua, Guatemala'nın volkanik dağları arasında yer alan tarihi bir bölgedir. Bu bölgenin kahveleri, zengin toprakları ve istikrarlı iklimi sayesinde karmaşık aromalara ve dengeli bir yapıya sahiptir.",
        roastLevels: [
            {
                level: "Orta Kavrum",
                scale: 5,
                tastingNotes: "Kakao, fındık, hafif baharat, dengeli asidite, orta gövde.",
            },
            {
                level: "Orta-Koyu Kavrum",
                scale: 7,
                tastingNotes: "Bitter çikolata, karamel, dolgun gövde, hoş bir tatlılık.",
            },
        ],
    },
    {
        id: 7,
        name: "Costa Rica Tarrazu",
        history: "Tarrazu, Kosta Rika'nın en ünlü kahve yetiştirme bölgelerinden biridir. Yüksek rakım ve ideal iklim koşulları, parlak asiditeye ve belirgin aromalara sahip kahveler üretir.",
        roastLevels: [
            {
                level: "Açık-Orta Kavrum",
                scale: 4,
                tastingNotes: "Bal, narenciye, yeşil elma, parlak asidite, temiz bitiş.",
            },
            {
                level: "Orta Kavrum",
                scale: 6,
                tastingNotes: "Tatlı, dengeli, fındıksı notalar, hoş bir asidite.",
            },
        ],
    },
    {
        id: 8,
        name: "Etiyopya Guji Hambela",
        history: "Guji, Etiyopya'nın Oromia bölgesinde yer alan ve son yıllarda özel kahveleriyle dikkat çeken bir alt bölgedir. Hambela, bu bölgedeki yüksek rakımlı çiftliklerde yetişen, genellikle çiçeksi ve meyvemsi notalara sahip seçkin kahveleri ifade eder.",
        roastLevels: [
            {
                level: "Açık Kavrum",
                scale: 3,
                tastingNotes: "Yasemin, şeftali, bergamot, parlak ve canlı asidite.",
            },
            {
                level: "Orta Kavrum",
                scale: 6,
                tastingNotes: "Çay, limon çiçeği, tatlı meyveler, zarif gövde.",
            },
        ],
    },
    {
        id: 9,
        name: "Peru Finca La Esmeralda",
        history: "Peru'nun yüksek And dağlarında yer alan Finca La Esmeralda gibi çiftlikler, sürdürülebilir tarım uygulamalarıyla yüksek kaliteli Arabica çekirdekleri üretmektedir. Bu kahveler genellikle dengeli tat profilleri ve hoş aromalarıyla bilinir.",
        roastLevels: [
            {
                level: "Orta Kavrum",
                scale: 5,
                tastingNotes: "Karamel, fındık, hafif turunçgil, dengeli asidite.",
            },
            {
                level: "Orta-Koyu Kavrum",
                scale: 7,
                tastingNotes: "Çikolata, badem, tatlı baharatlar, yumuşak bir bitiş.",
            },
        ],
    },
    {
        id: 10,
        name: "Papua Yeni Gine Sigri",
        history: "Papua Yeni Gine'nin batı yaylalarında yetişen Sigri kahvesi, özenli işleme yöntemleri ve benzersiz iklimi sayesinde zengin ve kompleks bir tat profiline sahiptir. Genellikle dolgun gövdesi ve parlak asiditesiyle öne çıkar.",
        roastLevels: [
            {
                level: "Orta Kavrum",
                scale: 6,
                tastingNotes: "Tropikal meyveler, kakao, baharatlı notalar, canlı asidite.",
            },
            {
                level: "Orta-Koyu Kavrum",
                scale: 8,
                tastingNotes: "Yoğun meyvemsilik, bitter çikolata, güçlü gövde.",
            },
        ],
    },
];

export default EspressoBeanData;