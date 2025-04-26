import { useEffect, useState, useContext } from "react";
import CoffeData from "../data/CoffeData";
import ThemeSelector from "./ThemeSelector";
import { ThemeContext } from "../contexts/ThemeContexts";
import YouTube from "react-youtube";
import LevelEspresso from "./LevelEspresso";
import Espresso from "./Epresso";
export default function Content() {
    const { color, setColor } = useContext(ThemeContext);

    const [coffees, setCoffees] = useState([]);
    const [coffeId, setCoffeId] = useState(null);
    const [coffeDetails, setCoffeDetail] = useState(null); // Tek bir kahve detayı göstereceğimiz için obje olarak düşünebiliriz
    const [showDetails, setShowDetails] = useState(false);

    const handleDetailsClick = () => {
        setShowDetails(!showDetails);
    };

    useEffect(() => {
        setCoffees(CoffeData);
    }, []); // Kahve verilerini sadece bir kere al

    useEffect(() => {
        if (coffeId !== null) {
            const selectedCoffee = coffees.find((coffee) => coffee.id === coffeId);
            setCoffeDetail(selectedCoffee || null); // Seçilen kahveyi veya bulunamazsa null olarak ayarla
        } else {
            setCoffeDetail(null); // coffeId null ise detayları temizle
        }
        console.log("Seçilen Kahve ID:", coffeId);
    }, [coffeId, coffees]); // coffeId veya coffees değiştiğinde çalış

    console.log("Tüm Kahveler:", coffees);
    console.log("Seçilen Kahve Detayları:", coffeDetails);

    return (
        <>
            <div className="content h-auto">
                <div className={`contain-content pt- h-max bg-amber-50 flex border-b-2 shadow-2x1 shadow-orange-950`}>
                    <div className={`flex w-9/12 flex-col  items-center bg-amber-50 `}>
                        <ThemeSelector />

                        <h3 className={`text-4xl mb-5  font-bold font-stretch-100% text-orange-950`}>Kahve Demleme Yöntemleri</h3>
                        <LevelEspresso />
                        <ul className="list flex-wrap  justify-around  mb-5 gap-x-9 flex w-full h-auto">
                            {coffees.map((coffe) => (
                                <li
                                    key={coffe.id}
                                    onClick={() => setCoffeId(coffe.id === coffeId ? null : coffe.id)}
                                    className={`border-2 overflow-hidden  relative transition-all hover:backdrop-blur-3xl hover:scale-110 shadow-md hover:${{ color }} shadow-amber-950 border-blue-950 w-42 h-80  rounded-3xl  items-center text-center list-item m-4 cursor-pointer ${coffeId === coffe.id ? `border-4 ${color} ${color} scale-110` : "" // Seçili kahveye özel stil
                                        }`}
                                >
                                    <img className="w-full h-auto object-cover rounded-md" src={coffe.img} alt={coffe.name} />
                                    <div className={`${color}  flex `}><h3 className={`text-md ${color} w-full  opacity-45   ml-5 absolute bottom-0 right-0 flex text-center justify-center items-center font-semibold mt-2`}>{coffe.name} {coffeDetails !== coffe ? (<svg className="h-8  w-8 text-black-500  " viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="18 15 12 9 6 15" /></svg>) : (<svg className="h-8 w-8 text-black-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>)}</h3></div>

                                </li>
                            ))}
                        </ul>
                        {showDetails && <DetailsCoffeVideo showDetails={showDetails} coffeDetails={coffeDetails} />}
                    </div>
                    <div className={`flex flex-3/12 ${coffeDetails && color}`}>
                        <div className="card p-4">
                            {coffeDetails && <COffeDetails onClick={handleDetailsClick} showDetails={showDetails} color={color} coffeDetails={coffeDetails} />} {/* coffeDetails'i prop olarak geçiyoruz */}
                        </div>
                    </div>

                </div>
                <ContentNext color={color} coffeDetails={coffeDetails} />
            </div>
        </>
    );
}

function DetailsCoffeVideo({ showDetails, coffeDetails }) {
    console.log(showDetails)



    return (
        <div className=" w-250 h-auto  flex items-center justify-center mt-20 " >
            <YouTube src={coffeDetails.url} className="w-4x1 h-auto" videoId="XUte2_sGHRQ" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share"
                allowFullScreen frameborder="0"></YouTube>


        </div >

    );
}

function COffeDetails({ coffeDetails, color, showDetails, onClick }) {

    if (!coffeDetails) {
        return <p>Lütfen bir kahve seçin.</p>; // Henüz bir kahve seçilmediyse bilgilendirme mesajı
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">
                {coffeDetails?.name}
            </h3>
            <div className="flex flex-col items-center justify-center ">
                <img
                    className="w-full max-w-[250px] h-auto object-cover rounded-md mb-4"
                    src={coffeDetails?.img}
                    alt={coffeDetails?.name}
                />
                <p className="text-center">
                    {coffeDetails?.make}
                </p>
                <button
                    className={`${color} mt-4 ${color === "bg-cyan-200"
                        ? "hover:bg-cyan-300"
                        : "bg-amber-600 hover:bg-orange-700"
                        } text-amber-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    onClick={onClick}
                >
                    ayrıntılar
                </button>
                {showDetails && (
                    <div className="mt-2 text-left">
                        <h6 className="font-semibold mb-1">
                            Nasıl Demlenir?
                        </h6>
                        <ul className="list-decimal list-inside">
                            {coffeDetails?.howToBrew?.map((step, index) => (
                                <li key={index} className="mb-1">
                                    {step}
                                </li>
                            ))}
                        </ul>
                        <p className="text-justify mt-2">
                            {coffeDetails?.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
function ContentNext({ color }) {
    return (
        <div className="contain-content w-full h-auto flex-row flex flex-wrap bg-amber-50 flex">

            < Espresso color={color} />

        </div >
    );
}