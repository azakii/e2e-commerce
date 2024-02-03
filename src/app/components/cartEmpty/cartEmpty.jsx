import Image from 'next/image';
const CartEmpty = () => {
    return (

            <div className="d-flex flex-column flex-col w-full justify-content-center align-items-center">
                <Image src="/2809510.webp" priority={false} alt={`No matching products found`} width={500} height={342} />
                <p className=''>Cart is empty</p>
            </div>
    
    );
}

export default CartEmpty;
