'use client'
import Image from 'next/image'
import styles from './Heading.module.css'
import Acheik_Color from '/public/assets/acheik-color.png'
import YuWatiNyi_Burmese from '/public/assets/yuwatinyi-burmese.png'
export default function Heading(){
    return(
        <div className = {styles.head}>
            <p className= {styles.yuwatinyi}>yu wati nyi</p>
            <Image 
            src={Acheik_Color} 
            alt="acheik-image"
            width = {450} 
            className ={styles.acheik_color}
            />
            <Image src={YuWatiNyi_Burmese} 
            alt="burmese-image" 
            width = {250}
            className = {styles.burmese}  />
        </div>
    )
}