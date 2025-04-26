const CoffeData = [
    {
        id: 1,
        img: "1.png",
        name: "Chemex",
        make: "Chemex, hem görsel olarak etkileyici hem de sonuç olarak son derece lezzetli ve berrak kahveler demleyen özel bir kahve demleme aracıdır.",
        description:
            "Chemex, 1941 yılında kimyager Peter Schlumbohm tarafından icat edilmiştir. Kum saati şeklindeki tasarımı ve kalın kağıt filtreleri sayesinde diğer demleme yöntemlerine göre daha berrak ve tortusuz bir kahve elde edilir. Genellikle orta veya iri öğütülmüş kahve kullanılır ve demleme süresi yaklaşık 4-6 dakika sürer. Chemex ile demlenen kahveler, ince ve zarif aromaları ön plana çıkarır. Özellikle tek kökenli (single-origin) kahvelerin kompleks tatlarını deneyimlemek için idealdir.",
        url: "https://youtu.be/-1OP3NnjLRA",

        howToBrew: [
            "Kalın Chemex filtresini hazırlayın ve Chemex'in üst kısmına yerleştirin.",
            "Filtreyi sıcak su ile ıslatın ve suyu boşaltın (bu, kağıt tadını giderir ve Chemex'i ısıtır).",
            "Orta veya iri öğütülmüş kahveyi (genellikle 1:15 veya 1:16 kahve/su oranı) filtreye ekleyin.",
            "Bir miktar sıcak suyu (yaklaşık iki katı kadar kahve miktarı) kahvenin üzerine dökün ve 30 saniye kadar 'çiçeklenme' (blooming) için bekleyin.",
            "Kalan sıcak suyu yavaşça ve dairesel hareketlerle kahvenin üzerine dökün. Toplam demleme süresi 4-6 dakika olmalıdır.",
            "Demleme tamamlandığında filtreyi çıkarın ve kahvenizin tadını çıkarın.",
        ],
    },
    {
        id: 2,
        img: "2.png",
        name: "V-60",
        make: "V60, kahve demleme sürecinde kontrolü seven ve dengeli, aromatik bir fincan kahve elde etmek isteyenler için harika bir seçenektir.",
        description:
            "Hario V60, konik şekli ve iç yüzeyindeki spiral oluklar sayesinde suyun kahveyle temas süresini ve akışını optimize eder. Farklı demleme tekniklerine olanak tanır ve demleyiciye demleme sürecinde yüksek kontrol imkanı sunar. Genellikle orta öğütülmüş kahve kullanılır ve demleme süresi kişisel tercihlere göre ayarlanabilir. V60 ile demlenen kahveler, geniş bir aroma yelpazesi sunabilir. Özellikle farklı kavrulma seviyelerindeki kahvelerin nüanslarını keşfetmek için uygundur.",
        url: "https://youtu.be/XUte2_sGHRQ",

        howToBrew: [
            "V60 demleyiciyi bir servis kabı veya fincanın üzerine yerleştirin.",
            "Kağıt filtreyi V60'a yerleştirin ve sıcak su ile ıslatıp suyu boşaltın.",
            "Orta öğütülmüş kahveyi (genellikle 1:15 veya 1:16 kahve/su oranı) filtreye ekleyin ve düzeltin.",
            "Bir miktar sıcak suyu (yaklaşık iki katı kadar kahve miktarı) kahvenin üzerine dökün ve 30 saniye kadar 'çiçeklenme' için bekleyin.",
            "Kalan sıcak suyu yavaşça ve farklı dökme teknikleriyle (dairesel, zikzak vb.) kahvenin üzerine dökün. Toplam demleme süresi 2-3 dakika arasında olabilir.",
            "Demleme tamamlandığında V60'ı kaldırın ve kahvenizin tadını çıkarın.",
        ],
    },
    // Diğer kahve demleme yöntemleri için de benzer şekilde "description" ve "howToBrew" alanlarını ekleyin...
    {
        id: 3,
        img: "3.png",
        name: "Aeropress",
        make: "Aeropress, hızı, pratikliği, temizliği ve çok yönlülüğü bir arada sunan yenilikçi bir kahve demleme yöntemidir.",
        description:
            "Aeropress, basınç uygulayarak kahve demleyen kompakt ve taşınabilir bir araçtır. Kısa demleme süresi (genellikle 1-3 dakika) sayesinde acı tatların oluşumu minimize edilir. Farklı öğütme seviyeleri ve demleme teknikleriyle çeşitli tat profilleri elde etmek mümkündür. Aeropress ile demlenen kahveler genellikle temiz, pürüzsüz ve yoğun bir tada sahiptir. Seyahatlerde veya hızlı bir demleme gerektiğinde idealdir.",
        url: "https://youtu.be/-1OP3NnjLRA",

        howToBrew: [
            "Aeropress'i ters çevirin (piston yukarıda, kapak aşağıda olacak şekilde).",
            "Orta veya ince öğütülmüş kahveyi (genellikle 1:15 veya 1:16 kahve/su oranı) Aeropress'e ekleyin.",
            "Sıcak suyu (önerilen sıcaklıkta) kahvenin üzerine dökün.",
            "Kısa bir süre karıştırın (yaklaşık 10 saniye).",
            "Pistonu yavaşça aşağı doğru itin (yaklaşık 20-30 saniye sürmeli).",
            "Demlenmiş kahveyi fincanınıza aktarın ve tadını çıkarın.",
            "(Alternatif olarak, standart yöntemle de demleyebilirsiniz: filtre takılı kapak aşağıda, kahve ve su ekleyip pistonu itin.)",
        ],
    },
    {
        id: 4,
        img: "4.png",
        name: "French Press",
        make: "French Press, kahvenin tüm zenginliğini ve aromasını basit bir yöntemle elde etmek isteyenler için harika bir seçenektir.",
        description:
            "French Press (Filtre Kahve Presi), iri öğütülmüş kahvenin sıcak suyla belirli bir süre demlendikten sonra metal bir filtre yardımıyla posasından ayrılması prensibine dayanır. Bu yöntem, kahvenin yağlarının ve ince tortularının fincana geçmesine izin verdiği için daha dolgun ve yoğun bir tat profili sunar. Demleme süresi genellikle 4-5 dakika arasındadır. Özellikle gövdeli ve zengin kahve sevenler için idealdir.",
        url: "https://youtu.be/-1OP3NnjLRA",

        howToBrew: [
            "French Press'in içine iri öğütülmüş kahveyi (genellikle 1:15 veya 1:16 kahve/su oranı) ekleyin.",
            "Sıcak suyu (önerilen sıcaklıkta) kahvenin üzerine dökün ve hafifçe karıştırın.",
            "Kapağı kapatın ancak pistonu henüz aşağı itmeyin. 4 dakika kadar demlemeye bırakın.",
            "Demleme süresi dolunca pistonu yavaşça ve sabit bir şekilde aşağı doğru itin.",
            "Kahveyi hemen servis edin (uzun süre French Press içinde bekletmek acılaşmaya neden olabilir).",
        ],
    },
    {
        id: 5,
        img: "5.png",
        name: "Syphon",
        make: "Syphon, hem demleme süreci hem de elde edilen kahve açısından özel bir yere sahip, büyüleyici bir kahve demleme yöntemidir.",
        description:
            "Syphon (Vakumlu Kahve Demleyici), ısı ve vakum prensiplerini kullanarak kahve demleyen görsel olarak etkileyici bir araçtır. İki cam haznesi bulunur; alt hazne ısıtılır ve oluşan buhar basıncı suyu üst hazneye iter, burada kahveyle karışır ve ardından ısı kesildiğinde vakum etkisiyle alt hazneye geri döner. Syphon ile demlenen kahveler genellikle berrak, temiz ve karmaşık aromalara sahiptir. Özellikle nadir ve özel kahvelerin inceliklerini ortaya çıkarmak için tercih edilir.",
        url: "https://youtu.be/-1OP3NnjLRA",

        howToBrew: [
            "Alt hazneye sıcak suyu ekleyin.",
            "Üst hazneyi alt haznenin üzerine yerleştirin ve contanın sıkıca oturduğundan emin olun.",
            "Ocağı açın ve alt haznedeki suyun ısınmasını bekleyin. Su ısındıkça üst hazneye doğru yükselecektir.",
            "Üst hazneye orta öğütülmüş kahveyi (genellikle 1:15 veya 1:16 kahve/su oranı) ekleyin ve karıştırın.",
            "Belirli bir süre (genellikle 1-2 dakika) demleyin.",
            "Ocağı kapatın ve alt haznenin soğumasını bekleyin. Vakum etkisiyle demlenmiş kahve alt hazneye geri dönecektir.",
            "Üst hazneyi çıkarın ve kahvenizi servis edin.",
        ],
    },
    {
        id: 6,
        img: "6.png",
        name: "Mokapot",
        make: "Mokapot kahvesi, espressoya göre daha az krema (kahvenin üzerinde oluşan kızıl kahverengi köpük) içerir ve daha az basınçla demlendiği için tadı espresso kadar keskin olmayabilir. Ancak yine de yoğun, güçlü ve kendine has aromaları olan bir kahvedir.",
        description:
            "Mokapot (İtalyan Kahve Makinesi), ocak üzerinde kullanılan ve buhar basıncıyla kahve demleyen pratik bir araçtır. Alt hazneye su konulur, orta hazneye öğütülmüş kahve eklenir ve ısıtıldığında oluşan buhar suyu yukarı doğru iterek kahvenin içinden geçer ve üst hazneye demlenmiş kahve olarak dolar. Mokapot kahvesi, espressoya yakın yoğunlukta ve güçlü bir tada sahiptir. Özellikle süt bazlı kahve içecekleri için güçlü bir temel oluşturur.",
        url: "https://youtu.be/-1OP3NnjLRA",

        howToBrew: [
            "Mokapot'ın alt haznesini emniyet valfinin altına kadar sıcak suyla doldurun.",
            "Orta filtre haznesini ince-orta öğütülmüş kahve ile doldurun (sıkıştırmayın).",
            "Üst hazneyi alt haznenin üzerine sıkıca vidalayın.",
            "Mokapot'ı kısık-orta ateşte ocağa yerleştirin.",
            "Kaynamaya başladığında kahve üst hazneye dolmaya başlayacaktır. Garip sesler duyduğunuzda ocaktan alın.",
            "Kahveyi hemen fincanınıza dökün ve tadını çıkarın.",
        ],
    },
    {
        id: 7,
        img: "7.png",
        name: "Cezve",
        make: "Türk kahvesi demlemek için kullanılan, geleneksel ve özel bir bakır veya pirinçten yapılmış küçük bir tenceredir. Genellikle dar bir ağzı ve uzun bir sapı bulunur. Türk kahvesi, kendine özgü demleme yöntemi ve sunumuyla dünya çapında tanınır ve cezve bu ritüelin vazgeçilmez bir parçasıdır.",
        description:
            "Cezve, ince öğütülmüş Türk kahvesinin su ile karıştırılıp kısık ateşte köpürene kadar pişirildiği geleneksel bir demleme aracıdır. Kahve telvesiyle birlikte servis edilir ve kendine has yoğun aroması ve köpüğüyle bilinir. Türk kahvesi, sadece bir içecek olmanın ötesinde, kültürel bir ritüel ve sosyal bir etkinliktir. Özellikle sohbetlerin ve keyifli anların vazgeçilmezidir.",
        url: "https://youtu.be/-1OP3NnjLRA", videId: "",

        howToBrew: [
            "Cezveye soğuk suyu (genellikle bir fincan için yaklaşık 50-60 ml) ekleyin.",
            "İnce öğütülmüş Türk kahvesini (bir fincan için yaklaşık 1-2 tatlı kaşığı) suya ekleyin.",
            "İsteğe bağlı olarak şeker ekleyin ve karıştırın.",
            "Cezveyi kısık ateşte ocağa yerleştirin.",
            "Kahve yavaşça ısınırken köpük oluşmaya başlayacaktır. Köpük kabarmadan hemen önce cezveyi ocaktan alın.",
            "Köpüğü fincanlara paylaştırın ve cezveyi tekrar ocağa koyun. Kalan kahveyi de fincanlara yavaşça dökün.",
            "Birkaç dakika telvenin çökmesini bekleyin ve afiyetle için.",
        ],
    },
    {
        id: 8,
        img: "8.png",
        name: "Cold Drip",
        make: "Cold Drip Brew (Soğuk Damlama Kahve), sıcak su yerine buzlu su veya soğuk suyun çok yavaş bir şekilde öğütülmüş kahve üzerine damlatılmasıyla elde edilen özel bir demleme yöntemidir. Uzun bir demleme süreci gerektirir (genellikle 3 ila 12 saat, hatta bazı tariflerde daha uzun) ve sonuç olarak sıcak demlenmiş kahvelere göre belirgin şekilde farklı bir tat profili sunar.",
        description:
            "Cold Drip (Soğuk Damlama Kahve), sıcak demlemeye göre daha az asidik, daha yumuşak ve tatlı bir kahve elde edilmesini sağlar. Uzun demleme süreci, kahvedeki farklı aroma bileşenlerinin yavaşça çözünmesine olanak tanır. Elde edilen konsantre kahve, su veya süt ile seyreltilerek servis edilebilir ve genellikle buzlu olarak tüketilir. Özellikle yaz aylarında ferahlatıcı ve farklı bir kahve deneyimi sunar.",
        url: "https://youtu.be/-1OP3NnjLRA",

        howToBrew: [
            "Soğuk damlama ekipmanını hazırlayın.",
            "Alt hazneye buzlu su veya soğuk suyu ekleyin.",
            "Orta hazneye iri öğütülmüş kahveyi ekleyin.",
            "Damlatma hızını ayarlayın (genellikle saniyede 1 damla civarında).",
            "Demleme süresini ayarlayın (genellikle 3 ila 12 saat veya daha uzun).",
            "Demleme tamamlandığında konsantre kahveyi alt hazneden alın.",
            "Konsantre kahveyi isteğe göre su veya süt ile seyreltin ve buz ekleyerek servis yapın.",
        ],
    },
];

export default CoffeData;