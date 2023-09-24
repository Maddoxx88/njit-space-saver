type ParkingSpotProp = {
    index: Number;
    occupied: Boolean;
    spot: string;
    disabledP: Boolean;
  };

const ParkingSpot = ({index, occupied, spot, disabledP}: ParkingSpotProp) => {

  const returnBGColor = (occupied: any, disabledP: any) => {
    if (disabledP) {
      return 'bg-blue-500'
    } else if(occupied) {
      return 'bg-red-500'
    } 
    return 'bg-green-500'
  }

  return (
    <div className={`mx-2 my-2 px-2 w-12 h-12 font-medium font-mono rounded-md py-4 ${returnBGColor(occupied, disabledP)} rounded-sm flex items-center justify-center text-xs`}>
    
  </div>
  )
}

export default ParkingSpot