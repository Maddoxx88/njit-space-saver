"use client";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { db } from "../firebaseConfig";

export default function Home() {
  const [totalLevels, setTotalLevels] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [totalSpots, setTotalSpots] = useState(0);
  const [availableSpots, setAvailableSpots] = useState(0);
  const [availableSpotIndexes, setAvailableSpotIndexes] = useState([]);
  const [showQR, setShowQR] = useState(false);
  const [currSpot, setCurrSpot] = useState('');

  const fetchAvailableSpots = async () => {
    const querySnapshot = await getDocs(collection(db, "level 1"));

    const q = query(collection(db, "level 1"), where("occupied", "==", false));
    const querySnapshot2 = await getDocs(q);
    setTotalSpots(querySnapshot.docs.length);
    setAvailableSpots(querySnapshot2.docs.length);
  };
  useEffect(() => {
    fetchAvailableSpots();
  }, []);

  const reserveANewSpot = async () => {
    const indexes: any = [];

    const q = query(collection(db, "level 1"), where("occupied", "==", false));
    const querySnapshot2 = await getDocs(q);
    querySnapshot2.docs.map((docData) => {
      const processedItem = docData.id;
      indexes.push(processedItem);
    });
    setAvailableSpotIndexes(indexes);
    const randomElement =
      availableSpotIndexes[
        Math.floor(Math.random() * availableSpotIndexes.length)
      ];
    console.log(randomElement);
    const updateRef = doc(db, "level 1", randomElement);

    // Set the "capital" field of the city 'DC'
    await updateDoc(updateRef, {
      occupied: true,
    }).then(async () => {
      const docRef = doc(db, "level 1", randomElement);
      const docSnap = await getDoc(docRef);
      setCurrSpot(docSnap.data()!.spot);
      setShowQR(true);
    }).catch((err) => {
      alert(err);
    });
  };

  return (
    <main className="text-black">
      <div className="text-center text-3xl mt-4">
        Reserve your parking spot here
      </div>
      <div className="grid grid-cols-4 gap-8 my-8 px-8">
        {totalLevels.map((data) => {
          return (
            <div className="p-4 bg-white drop-shadow-lg rounded-md">
              <h2>Level {data}</h2>
              <p>Total spots 200</p>
              <p>Available spots 103</p>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          className="bg-[#fc574e] px-8 py-4 outline-none rounded-sm font-semibold font-sans text-white hover:bg-white hover:outline-[#fc574e] hover:text-[#fc574e]"
          onClick={() => reserveANewSpot()}
        >
          Reserve
        </button>
      </div>
      <div className="flex justify-center mt-8">
      {showQR && <QRCode value={currSpot} size={150}/> }
      </div>
    </main>
  );
}
