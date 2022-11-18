import classes from "./Footer.module.css";
import {ReactComponent as Telegram} from "../../assets/telegram.svg";
import {ReactComponent as Viber} from "../../assets/viber.svg";
import {ReactComponent as Whatsapp} from "../../assets/whatsapp.svg";

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.columnCompany}>
                <div className={classes.columnTitle}>О компании</div>
                <div className={classes.columnItem}>Партнёрская программа</div>
                <div className={classes.columnItem}>Вакансии</div>
            </div>
            <div className={classes.columnMenu}>
                <div className={classes.columnTitle}>Меню</div>
                <div className={classes.columnItems}>
                    <div className={classes.columnItem}>Расчёт стоимости</div>
                    <div className={classes.columnItem}>Услуги</div>
                    <div className={classes.columnItem}>Виджеты</div>
                    <div className={classes.columnItem}>Интеграции</div>
                    <div className={classes.columnItem}>Наши клиенты</div>
                    <div className={classes.columnItem}>Кейсы</div>
                    <div className={classes.columnItem}>Благодарственные письма</div>
                    <div className={classes.columnItem}>Сертификаты</div>
                    <div className={classes.columnItem}>Блог на Youtube</div>
                    <div className={classes.columnItem}>Вопрос / Ответ</div>
                </div>
            </div>
            <div className={classes.columnContacts}>
                <div className={classes.columnTitle}>Контакты</div>
                <div className={classes.contactsItem}>+7 555 555-55-55</div>
                <div className={classes.contactsItem}>
                    <div className={classes.socialNetworksContainer}>
                        <div className={classes.socialNetworks}>
                            <Telegram/>
                            <Viber/>
                            <Whatsapp/>
                        </div>
                    </div>
                </div>
                <div className={classes.contactsItem}>Москва, Путевой проезд 3с1, к 902</div>
                <div className={classes.security}>
                    <div className={classes.rights}>©WELBEX 2022. Все права защищены.</div>
                    <div className={classes.privacy}>Политика конфиденциальности</div>
                </div>
            </div>

        </div>
    )
}