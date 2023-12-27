import DehazeIcon from '@mui/icons-material/Dehaze';
import { HeaderProps } from '../interface/ElementProps';

const Header = ({ openSide, setOpenClose }: HeaderProps) => {
  return (
    <>
      <div className='bg-gray-200 p-2 w-full text-right cursor-pointer text-2xl' onClick={() => setOpenClose(!openSide)}>
        <DehazeIcon />
      </div>
    </>
  )
}

export default Header