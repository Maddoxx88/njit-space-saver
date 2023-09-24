type ParkingSpotProp = {
    index: Number;
    occupied: Boolean;
    spot: string
  };

const ParkingSpot = ({index, occupied, spot}: ParkingSpotProp) => {
  return (
    <div className={`mx-2 my-2 px-2 w-12 h-12 font-medium font-mono rounded-md py-4 ${occupied ? 'bg-red-500' : 'bg-green-500'} rounded-sm flex items-center justify-center text-xs`}>
    
  </div>
  )
}

export default ParkingSpot