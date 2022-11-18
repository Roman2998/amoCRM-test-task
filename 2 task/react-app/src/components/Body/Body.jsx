import classes from "./Body.module.css";

export const Body = () => {
    return (
        <div className={classes.body}>
            <div className={classes.text}>
                <div className={classes.slogan}>
                    Зарабатывайте больше<br />
                    <span>с WELBEX</span>
                </div>
                <div className={classes.description}>
                    Развиваем и контролируем продажи за вас
                </div>
            </div>
            <div className={classes.gifts}>
                <div className={classes.giftsTitle}>Вместе с <span>бесплатной<br/> консультацией</span> мы дарим:</div>
                <div className={classes.giftItems}>
                    <div className={classes.giftItem}>
                        <div className={classes.itemTitle}>Виджеты</div>
                        <div className={classes.itemDescription}>30 готовых решений</div>
                    </div>
                    <div className={classes.giftItem}>
                        <div className={classes.itemTitle}>Skype Аудит</div>
                        <div className={classes.itemDescription}>отдела продаж<br/> и CRM системы</div>
                    </div>
                    <div className={classes.giftItem}>
                        <div className={classes.itemTitle}>Dashboard</div>
                        <div className={classes.itemDescription}>с показателями<br/> вашего бизнеса</div>
                    </div>
                    <div className={classes.giftItem}>
                        <div className={classes.itemTitle}>35 дней</div>
                        <div className={classes.itemDescription}>использования<br/>CRM</div>
                    </div>
                </div>
                <button>Получить консультацию</button>
            </div>

        </div>
    )
}