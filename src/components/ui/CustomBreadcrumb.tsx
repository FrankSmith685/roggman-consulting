'use client';

import { usePageTransition } from '@/hooks/useTransitionHooks/pageTransitionProvider';
import { BreadcrumbProps } from '@/interface/breadcrumbItem';
import { FiChevronRight } from 'react-icons/fi';

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { navigate } = usePageTransition();
  return (
    <nav className="w-full text-white rounded-md px-6 py-3 mt-6 mb-4 mx-auto max-w-screen-xl shadow-lg border ">
      <ol className="flex flex-wrap items-center gap-x-1 md:gap-x-2 text-sm font-medium">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <div
                onClick={() => navigate(item.href as string)}
                className="text-blue-400 hover:text-blue-700 transition-all hover:cursor-pointer duration-200 hover:scale-[1.05]"
              >
                {item.label}
              </div>
            ) : (
              <span className="text-[#2f3848]">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <FiChevronRight className="text-gray-400 text-sm" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
