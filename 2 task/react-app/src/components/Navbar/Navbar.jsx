import {ReactComponent as Logo} from "../../assets/logo_welbex.svg"
import {ReactComponent as Telegram} from "../../assets/telegram.svg"
import {ReactComponent as Viber} from "../../assets/viber.svg"
import {ReactComponent as Whatsapp} from "../../assets/whatsapp.svg"
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.logo}>
                <Logo/>
                <div className={classes.logoDescription}>
                    крупный интегратор CRM <br />в Росcии и ещё 8 странах
                </div>
            </div>

            <div className={classes.menu}>
                <div className={classes.menuItem}>Услуги</div>
                <div className={classes.menuItem}>Виджеты</div>
                <div className={classes.menuItem}>Интеграция</div>
                <div className={classes.menuItem}>Кейсы</div>
                <div className={classes.menuItem}>Сертификаты</div>
            </div>
            <div className={classes.phoneNumber}>
                +7 555 555-55-55
            </div>
            <div className={classes.socialNetworks}>
                <Telegram />
                <Viber />
                <Whatsapp />
            </div>
        </div>
    )
}