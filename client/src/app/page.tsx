"use client";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import Level from "./level";
import ParkingSpot from "./parking-spot";

export default function Home() {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [levels, setLevels] = useState([1,2,3,4,5,6,7,8]);
  const [currIndex, setCurrIndex] = useState(1);

  const handleClick = (index:any) => {
    setCurrIndex(index);
    fetchParkingSpots(index);
  };

  const fetchParkingSpots = async (levelNo:any) => {
    const querySnapshot = await getDocs(collection(db, `level ${levelNo}`));
    const newData: any = [];
    querySnapshot.forEach((doc) => {
      newData.push(doc.data());
    });
    setParkingSpots(newData);
  };
  useEffect(() => {
    fetchParkingSpots(1);
  }, []);

  // const clickHandler = async () => {
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });
  // await setDoc(doc(parkingRef), {
  //   disabled: false, electric: true, occupied: true,
  //   spot: 64, vacant: false,
  //   });
  // }

  return (
    <main className="text-black">
      <div className="text-center text-3xl my-6">SpaceSaver</div>
      <div className="flex p-2">
        <div className="w-32 m-2">
            {levels.map((data) => {
              return (
                <Level index={data} selectedIndex={currIndex} onClickHandler={() => handleClick(data)} />
              )
            })}
        </div>
        <div className="flex-1">
          {/* <button onClick={() => clickHandler()}>Add data</button> */}
          <div className="p-8 bg-slate-200 rounded-sm h-full">
            <div className="flex flex-wrap justify-between">
              {parkingSpots &&
                parkingSpots!.map((data: any, idx: any) => {
                  console.log(data.occupied);
                  return (
                    <ParkingSpot
                      index={data}
                      key={idx}
                      occupied={data.occupied}
                      spot={data.spot}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 my-4 flex outline-none justify-evenly">
        <div className="flex">
          <div>Occupied = </div>
          <div
            className={`w-8 h-4 mx-2 font-medium font-mono py-4 bg-red-500 rounded-sm flex items-center justify-center text-xs`}
          ></div>
        </div>
        <div className="flex">
          <div>Available = </div>
          <div
            className={`w-8 h-4 mx-2 font-medium font-mono py-4 bg-green-500 rounded-sm flex items-center justify-center text-xs`}
          ></div>
        </div>
        <div className="flex">
          <div>Disabled = </div>
          <div
            className={`w-8 h-4 mx-2 font-medium font-mono py-4 bg-blue-500 rounded-sm flex items-center justify-center text-xs`}
          ></div>
        </div>
        <button className="bg-[#fc574e] px-8 py-4 outline-none rounded-full font-semibold font-sans text-white hover:bg-white hover:outline-[#fc574e] hover:text-[#fc574e]">
          <Link href="/book">Book a parking spot »</Link>
        </button>
      </div>
      <div className="text-center mt-4">

      </div>
    </main>
  );
}
