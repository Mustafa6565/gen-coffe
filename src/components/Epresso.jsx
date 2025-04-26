import { useEffect, useState } from "react";
import EspressoBeanData from "../data/EspressoBeanData";
import { Button } from "@headlessui/react";
export default function Espresso({ color }) {
    const [espressos, setEspressos] = useState([])
    const [espressoId, setEspressoId] = useState(null)
    const [espressoDetails, setEspressoDetails] = useState(null)
    const [showEspressoDetail, setShowEspressoDetail] = useState(false)
    const handleDetailShowEspresso = () => {
        setShowEspressoDetail(!showEspressoDetail)
    }
    useEffect(() => {
        setEspressos(EspressoBeanData)
    }, [])

    useEffect(() => {
        if (espressoId !== null) {
            const selectEspresso = espressos.find((espresso) => espresso.id === espressoId);
            setEspressoDetails(selectEspresso || null);
        } else {
            setEspressoDetails(null)
        }

        console.log(espressoDetails)
    }, [espressoId, espressos])
    return (
        <>
            <div className="flex items-center flex-9/12 w-full h-auto">

                <div className=" flex-col flex items-center ">
                    <span className="text-3xl mt-10 ">ESPRESSO'S</span>
                    <ul className="list flex-wrap items-center flex">
                        {espressos.map((espresso) => (
                            <li onClick={() => setEspressoId(espresso.id === espressoId ? null : espresso.id)} className="list-item items-center w-42 h-auto   flex-wrap m-10  " key={espresso.id}>
                                <h3 className="text-2xl ">{espresso.name}</h3>
                                <p>{espresso.history}</p>
                            </li>

                        ))}
                    </ul>
                </div>

            </div>
            <div className={`flex items-center justify-center flex-3/12 w-full h-auto ${espressoId && color}`}>
                {espressoDetails && <div className=" mt-10 ml-5 box flex flex-col item center w-full h-full ">
                    <span className="text-2xl text-amber-950 mb-5">{espressoDetails.name}</span>
                    <span>{espressoDetails.history}</span>
                    <button></button>
                </div>}
            </div>
        </>
    );
}