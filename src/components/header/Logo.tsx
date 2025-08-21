'use client';

import CustomImage from '@/components/ui/CustomImage';
import { usePageTransition } from '@/hooks/useTransitionHooks/pageTransitionProvider';

export default function Logo({ isActive }: { isActive: boolean }) {
  const logoSrc = isActive
    ? '/images/logo_black.png'
    : '/images/logo_white.png';
    const { navigate } = usePageTransition();
  return (
    <div className="w-[200px]">
      
      <div onClick={()=>navigate("/")} className="flex items-center space-y-0 flex-col w-full hover:cursor-pointer">
        <div className="!h-[60px] sm:!h-[80px] !w-auto sm:!w-auto">
          <CustomImage
            src={logoSrc}
            alt="Logo de MiEmpresa"
            width={1500}
            height={1000}
            className='w-full h-full cursor-pointer'
            isCritical
          />
        </div>
        <h2
          className={`${
            isActive ? 'text-gray-800' : 'text-white'
          } font-roboto-thin text-base sm:text-lg leading-5 text-center`}
        >
          ROGGMAN
        </h2>
        <p
          className={`${
            isActive ? 'text-violet-900' : 'text-white'
          } font-bell text-sm w-full text-center`}
        >
          CONSULTING
        </p>
      </div>
    </div>
  );
}
