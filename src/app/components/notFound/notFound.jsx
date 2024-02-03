import Image from 'next/image';

const NotFound = () => {
    return (
        <div className="d-flex flex-column flex-col w-full justify-content-center align-items-center">
            <Image src="/2809510.webp" priority={false} alt={`No matching products found`} width={256} height={171} />
            <p className=''>No matching products found.</p>
        </div>

    );
}

export default NotFound;
