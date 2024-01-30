import Image from 'next/image'

const Header = (props) => {
    return (
        <div>
            <Image src={props.src} className='logo' alt={`new project`} height={100} width={200}/>
        </div>
    );
}

export default Header;
