import { classNames } from "shared/lib/classNames/ClassNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";




interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [])}>
            
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/main'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
            </div>

        </div >
    )
};






