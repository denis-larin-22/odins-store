import './styles/index.css';
import { motion } from 'framer-motion';

export const OdinsWord = () => {
    return (
        <p className="glowing-btn">
            <span className="glowing-word">
                <motion.span initial='hidden' animate='show'>O</motion.span>
                <motion.span>D</motion.span>
                <motion.span>I</motion.span>
                <motion.span>N</motion.span>
                <motion.span className="faulty-letter">`</motion.span>
                <motion.span>S</motion.span>
            </span>
        </p>
    )
}