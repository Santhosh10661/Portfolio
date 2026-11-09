import { Inter, JetBrains_Mono } from 'next/font/google';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import '@/styles/globals.css';
import { transitionEase } from '@/components/ui/Motion';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: transitionEase }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
