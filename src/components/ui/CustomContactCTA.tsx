'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CustomButton from '../ui/CustomButton';
import { usePageTransition } from '@/hooks/useTransitionHooks/pageTransitionProvider';
import { useEffect, useState } from 'react';
import { contactLabelDe, contactTitleDe } from './data/ContactCTA_De';
import { useAppState } from '@/hooks/useAppState';
import { contactLabelEs, contactTitleEs } from './data/ContactCTA_Es';
import { contactLabelEn, contactTitleEn } from './data/ContactCTA_En';

const ContactCTA = () => {
  const pathname = usePathname();

  const { navigate } = usePageTransition();

  const [contactTitleLocal,setContactTitleLocal] = useState(contactTitleDe);
  const [contactLabelLocal,setContactLabelLocal] = useState(contactLabelDe);
  const [navigateLocal,setNavigateLocal] = useState('/kontakt')
        
  const {lenguaje} = useAppState();

  useEffect(()=>{
    if(lenguaje == "es"){
      setContactTitleLocal(contactTitleEs)
      setContactLabelLocal(contactLabelEs)
      setNavigateLocal("/contactanos");
    }else if(lenguaje == "de"){
      setContactTitleLocal(contactTitleDe)
      setContactLabelLocal(contactLabelDe)
      setNavigateLocal("/kontakt");
    }else{
      setContactTitleLocal(contactTitleEn);
      setContactLabelLocal(contactLabelEn);
      setNavigateLocal("/contact");
    }
  },[lenguaje])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20 px-4 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
        >
          {contactTitleLocal}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CustomButton
            variantType="indigo"
            onClick={() => navigate(navigateLocal)}
            className="self-center md:self-start !w-auto !rounded-2xl"
          >
            {contactLabelLocal}
          </CustomButton>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactCTA;
