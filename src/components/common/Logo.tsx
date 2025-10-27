import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="flex items-center">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link href="/" className="flex-shrink-0 flex items-center">
                    <motion.div
                        className="h-10 w-8 flex items-center justify-center"
                        whileHover={{
                            rotate: 360,
                            transition: { duration: 0.6 }
                        }}
                    >
                        <span>
                            <Image
                                src={'https://res.cloudinary.com/dnfjdkspi/image/upload/v1761074250/MOHIBULLAH_wpw6wv.png'}
                                alt='Mohibullah Mohim'
                                width={36}
                                height={36}
                            />
                        </span>
                    </motion.div>
                    <span>
                        <Image
                            className='h-6 w-auto md:h-7'
                            src={'https://res.cloudinary.com/dnfjdkspi/image/upload/v1761074250/MOHIBULLAH-MOHIM_vdk1vp.png'}
                            width={150}
                            height={28}
                            alt='Mohibullah Mohim'
                        />
                    </span>
                </Link>
            </motion.div>
        </div>
    );
};

export default Logo;