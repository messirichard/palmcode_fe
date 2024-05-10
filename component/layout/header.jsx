import Image from 'next/image'
import logoImage from '../../assets/images/logo.svg'

export default function Header() {

    return (
        <>
        <header>
            <div className="max-w-screen-xl mx-auto mb-8">
                <div className="logo">
                    <a href="#">
                        <Image
                        src={logoImage}
                            alt="Picture of the author"
                            width={104}
                            height={28}
                            className='block mx-auto'
                        />
                    </a>
                    </div>
                </div>
        </header>
        </>
    );
}