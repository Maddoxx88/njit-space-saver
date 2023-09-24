
type LevelProp = {
    index: Number;
    selectedIndex: Number;
    onClickHandler: () => void;
  };

const Level = ({index, selectedIndex, onClickHandler}: LevelProp) => {
  return (
    <div className={`p-2 my-4 text-center text-sm font-serif ${selectedIndex == index ? 'bg-black' : 'bg-white'} ${selectedIndex == index ? 'text-white' : 'text-black'} drop-shadow-lg rounded-sm`} onClick={onClickHandler}>
    Level {`${index}`}
  </div>
  )
}

export default Level