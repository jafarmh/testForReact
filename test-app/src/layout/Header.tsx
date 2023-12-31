import DehazeIcon from '@mui/icons-material/Dehaze';
import { HeaderProps } from '../interface/ElementProps';

const Header = ({ openSide, setOpenClose }: HeaderProps) => {
  return (
    <>
      <div className='bg-gray-200 p-2 w-full text-right cursor-pointer text-2xl fixed top-0 right-0' onClick={() => setOpenClose(!openSide)}>
        <DehazeIcon />
      </div>
    </>
  )
}

export default Header