import { motion } from "framer-motion"

import { navVariants } from '../../utils/motion'
import { styles } from '../../styles/styles'

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/svgs/search.svg" alt="search" width="50" className="w-[24px] h-[24px] object-contain"/>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">Metaversus</h2>
        <img src="/svgs/menu.svg" className="w-[24px] h-[24px] object-contain" />
      </div>
    </motion.nav>
  )
}

export { Navbar }
